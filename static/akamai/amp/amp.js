Array.prototype.indexOf||(Array.prototype.indexOf=function(c,a){if(void 0===this||null===this)throw new TypeError('"this" is null or not defined');var b=this.length>>>0;a=+a||0;Infinity===Math.abs(a)&&(a=0);0>a&&(a+=b,0>a&&(a=0));for(;a<b;a++)if(this[a]===c)return a;return-1});
Date.now||(Date.now=function(){return +new Date});
if(!Function.prototype.bind){Function.prototype.bind=function(e){function s(){}if(typeof this!=="function"){throw new TypeError("Bind must be called on a function")}var t=[].slice,n=t.call(arguments,1),r=this,i=function(){return r.apply(this instanceof s?this:e||{},n.concat(t.call(arguments)))};s.prototype=r.prototype;i.prototype=new s;return i}}
if(typeof JSON!=="object"){JSON={}}(function(){function f(n){return n<10?"0"+n:n}if(typeof Date.prototype.toJSON!=="function"){Date.prototype.toJSON=function(key){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(key){return this.valueOf()}}var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;function quote(string){escapable.lastIndex=0;return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];return typeof c==="string"?c:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+string+'"'}function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];if(value&&typeof value==="object"&&typeof value.toJSON==="function"){value=value.toJSON(key)}if(typeof rep==="function"){value=rep.call(holder,key,value)}switch(typeof value){case"string":return quote(value);case"number":return isFinite(value)?String(value):"null";case"boolean":case"null":return String(value);case"object":if(!value){return"null"}gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==="[object Array]"){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||"null"}v=partial.length===0?"[]":gap?"[\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"]":"["+partial.join(",")+"]";gap=mind;return v}if(rep&&typeof rep==="object"){length=rep.length;for(i=0;i<length;i+=1){if(typeof rep[i]==="string"){k=rep[i];v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+v)}}}}else{for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+v)}}}}v=partial.length===0?"{}":gap?"{\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"}":"{"+partial.join(",")+"}";gap=mind;return v}}if(typeof JSON.stringify!=="function"){JSON.stringify=function(value,replacer,space){var i;gap="";indent="";if(typeof space==="number"){for(i=0;i<space;i+=1){indent+=" "}}else{if(typeof space==="string"){indent=space}}rep=replacer;if(replacer&&typeof replacer!=="function"&&(typeof replacer!=="object"||typeof replacer.length!=="number")){throw new Error("JSON.stringify")}return str("",{"":value})}}if(typeof JSON.parse!=="function"){JSON.parse=function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==="object"){for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v}else{delete value[k]}}}}return reviver.call(holder,key,value)}text=String(text);cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})}if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){j=eval("("+text+")");return typeof reviver==="function"?walk({"":j},""):j}throw new SyntaxError("JSON.parse")}}}());
(function(n){function i(a,d){this.setNotifyMethod(a);this.setNotifyContext(d)}function j(a,d,b){this.name=a;this.body=d;this.type=b}function k(){}function m(){}function l(){this.subCommands=[];this.initializeMacroCommand()}function g(a,d){this.mediatorName=a||this.constructor.NAME;this.viewComponent=d}function h(a,d){this.proxyName=a||this.constructor.NAME;null!=d&&this.setData(d)}function b(a){if(null!=b.instanceMap[a])throw Error(b.MULTITON_MSG);this.initializeNotifier(a);b.instanceMap[a]=this;
this.initializeFacade()}function c(a){if(null!=c.instanceMap[a])throw Error(c.MULTITON_MSG);this.multitonKey=a;c.instanceMap[this.multitonKey]=this;this.mediatorMap=[];this.observerMap=[];this.initializeView()}function e(a){if(e.instanceMap[a])throw Error(e.MULTITON_MSG);this.multitonKey=a;e.instanceMap[a]=this;this.proxyMap=[];this.initializeModel()}function f(a){if(null!=f.instanceMap[a])throw Error(f.MULTITON_MSG);this.multitonKey=a;f.instanceMap[this.multitonKey]=this;this.commandMap=[];this.initializeController()}
function p(a,d,b){for(var a=a.split("."),b=b||o.global,c,e,f=0,g=a.length;f<g;f++)c=b,e=a[f],b=null==b[e]?b[e]={}:b[e];return null==d?b:c[e]=d}null==n&&(n=window);if(!n.puremvc){i.prototype.setNotifyMethod=function(a){this.notify=a};i.prototype.setNotifyContext=function(a){this.context=a};i.prototype.getNotifyMethod=function(){return this.notify};i.prototype.getNotifyContext=function(){return this.context};i.prototype.notifyObserver=function(a){this.getNotifyMethod().call(this.getNotifyContext(),
a)};i.prototype.compareNotifyContext=function(a){return a===this.context};i.prototype.notify=null;i.prototype.context=null;j.prototype.getName=function(){return this.name};j.prototype.setBody=function(a){this.body=a};j.prototype.getBody=function(){return this.body};j.prototype.setType=function(a){this.type=a};j.prototype.getType=function(){return this.type};j.prototype.toString=function(){var a="Notification Name: "+this.getName(),a=a+("\nBody:"+(null==this.body?"null":this.body.toString()));return a+=
"\nType:"+(null==this.type?"null":this.type)};j.prototype.name=null;j.prototype.type=null;j.prototype.body=null;k.prototype.sendNotification=function(a,d,b){var c=this.getFacade();c&&c.sendNotification(a,d,b)};k.prototype.initializeNotifier=function(a){this.multitonKey=""+a;this.facade=this.getFacade()};k.prototype.getFacade=function(){if(null==this.multitonKey)throw Error(k.MULTITON_MSG);return b.getInstance(this.multitonKey)};k.prototype.multitonKey=null;k.MULTITON_MSG="multitonKey for this Notifier not yet initialized!";
m.prototype=new k;m.prototype.constructor=m;m.prototype.execute=function(){};l.prototype=new k;l.prototype.constructor=l;l.prototype.subCommands=null;l.prototype.initializeMacroCommand=function(){};l.prototype.addSubCommand=function(a){this.subCommands.push(a)};l.prototype.execute=function(a){for(;0<this.subCommands.length;){var d=new (this.subCommands.shift());d.initializeNotifier(this.multitonKey);d.execute(a)}};g.NAME="Mediator";g.prototype=new k;g.prototype.constructor=g;g.prototype.getMediatorName=
function(){return this.mediatorName};g.prototype.setViewComponent=function(a){this.viewComponent=a};g.prototype.getViewComponent=function(){return this.viewComponent};g.prototype.listNotificationInterests=function(){return[]};g.prototype.handleNotification=function(){};g.prototype.onRegister=function(){};g.prototype.onRemove=function(){};g.prototype.mediatorName=null;g.prototype.viewComponent=null;h.NAME="Proxy";h.prototype=new k;h.prototype.constructor=h;h.prototype.getProxyName=function(){return this.proxyName};
h.prototype.setData=function(a){this.data=a};h.prototype.getData=function(){return this.data};h.prototype.onRegister=function(){};h.prototype.onRemove=function(){};h.prototype.proxyName=null;h.prototype.data=null;b.prototype.initializeFacade=function(){this.initializeModel();this.initializeController();this.initializeView()};b.getInstance=function(a){if(null==a)return null;null==b.instanceMap[a]&&(b.instanceMap[a]=new b(a));return b.instanceMap[a]};b.prototype.initializeController=function(){if(null==
this.controller)this.controller=f.getInstance(this.multitonKey)};b.prototype.initializeModel=function(){if(null==this.model)this.model=e.getInstance(this.multitonKey)};b.prototype.initializeView=function(){if(null==this.view)this.view=c.getInstance(this.multitonKey)};b.prototype.registerCommand=function(a,d){this.controller.registerCommand(a,d)};b.prototype.removeCommand=function(a){this.controller.removeCommand(a)};b.prototype.hasCommand=function(a){return this.controller.hasCommand(a)};b.prototype.registerProxy=
function(a){this.model.registerProxy(a)};b.prototype.retrieveProxy=function(a){return this.model.retrieveProxy(a)};b.prototype.removeProxy=function(a){var d=null;null!=this.model&&(d=this.model.removeProxy(a));return d};b.prototype.hasProxy=function(a){return this.model.hasProxy(a)};b.prototype.registerMediator=function(a){null!=this.view&&this.view.registerMediator(a)};b.prototype.retrieveMediator=function(a){return this.view.retrieveMediator(a)};b.prototype.removeMediator=function(a){var d=null;
null!=this.view&&(d=this.view.removeMediator(a));return d};b.prototype.hasMediator=function(a){return this.view.hasMediator(a)};b.prototype.sendNotification=function(a,d,b){this.notifyObservers(new j(a,d,b))};b.prototype.notifyObservers=function(a){null!=this.view&&this.view.notifyObservers(a)};b.prototype.initializeNotifier=function(a){this.multitonKey=a};b.hasCore=function(a){return null!=b.instanceMap[a]};b.removeCore=function(a){null!=b.instanceMap[a]&&(e.removeModel(a),c.removeView(a),f.removeController(a),
delete b.instanceMap[a])};b.prototype.controller=null;b.prototype.model=null;b.prototype.view=null;b.prototype.multitonKey=null;b.instanceMap=[];b.MULTITON_MSG="Facade instance for this Multiton key already constructed!";c.prototype.initializeView=function(){};c.getInstance=function(a){if(null==a)return null;null==c.instanceMap[a]&&(c.instanceMap[a]=new c(a));return c.instanceMap[a]};c.prototype.registerObserver=function(a,d){null!=this.observerMap[a]?this.observerMap[a].push(d):this.observerMap[a]=
[d]};c.prototype.notifyObservers=function(a){if(null!=this.observerMap[a.getName()]){for(var d=this.observerMap[a.getName()],b=[],c,e=0;e<d.length;e++)c=d[e],b.push(c);for(e=0;e<b.length;e++)c=b[e],c.notifyObserver(a)}};c.prototype.removeObserver=function(a,d){for(var b=this.observerMap[a],c=0;c<b.length;c++)if(!0==b[c].compareNotifyContext(d)){b.splice(c,1);break}0==b.length&&delete this.observerMap[a]};c.prototype.registerMediator=function(a){if(null==this.mediatorMap[a.getMediatorName()]){a.initializeNotifier(this.multitonKey);
this.mediatorMap[a.getMediatorName()]=a;var d=a.listNotificationInterests();if(0<d.length)for(var b=new i(a.handleNotification,a),c=0;c<d.length;c++)this.registerObserver(d[c],b);a.onRegister()}};c.prototype.retrieveMediator=function(a){return this.mediatorMap[a]};c.prototype.removeMediator=function(a){var d=this.mediatorMap[a];if(d){for(var b=d.listNotificationInterests(),c=0;c<b.length;c++)this.removeObserver(b[c],d);delete this.mediatorMap[a];d.onRemove()}return d};c.prototype.hasMediator=function(a){return null!=
this.mediatorMap[a]};c.removeView=function(a){delete c.instanceMap[a]};c.prototype.mediatorMap=null;c.prototype.observerMap=null;c.instanceMap=[];c.prototype.multitonKey=null;c.MULTITON_MSG="View instance for this Multiton key already constructed!";e.prototype.initializeModel=function(){};e.getInstance=function(a){if(null==a)return null;null==e.instanceMap[a]&&(e.instanceMap[a]=new e(a));return e.instanceMap[a]};e.prototype.registerProxy=function(a){a.initializeNotifier(this.multitonKey);this.proxyMap[a.getProxyName()]=
a;a.onRegister()};e.prototype.retrieveProxy=function(a){return this.proxyMap[a]};e.prototype.hasProxy=function(a){return null!=this.proxyMap[a]};e.prototype.removeProxy=function(a){var b=this.proxyMap[a];b&&(this.proxyMap[a]=null,b.onRemove());return b};e.removeModel=function(a){delete e.instanceMap[a]};e.prototype.proxyMap=null;e.instanceMap=[];e.MULTITON_MSG="Model instance for this Multiton key already constructed!";f.prototype.initializeController=function(){this.view=c.getInstance(this.multitonKey)};
f.getInstance=function(a){if(null==a)return null;null==this.instanceMap[a]&&(this.instanceMap[a]=new this(a));return this.instanceMap[a]};f.prototype.executeCommand=function(a){var b=this.commandMap[a.getName()];null!=b&&(b=new b,b.initializeNotifier(this.multitonKey),b.execute(a))};f.prototype.registerCommand=function(a,b){null==this.commandMap[a]&&this.view.registerObserver(a,new i(this.executeCommand,this));this.commandMap[a]=b};f.prototype.hasCommand=function(a){return null!=this.commandMap[a]};
f.prototype.removeCommand=function(a){this.hasCommand(a)&&(this.view.removeObserver(a,this),this.commandMap[a]=null)};f.removeController=function(a){delete this.instanceMap[a]};f.prototype.view=null;f.prototype.commandMap=null;f.prototype.multitonKey=null;f.instanceMap=[];f.MULTITON_MSG="controller key for this Multiton key already constructed";var o={global:function(){return this}(),extend:function(a,b){if("function"!==typeof a)throw new TypeError("#extend- child should be Function");if("function"!==
typeof b)throw new TypeError("#extend- parent should be Function");if(b!==a){var c=new Function;c.prototype=b.prototype;a.prototype=new c;return a.prototype.constructor=a}},decorate:function(a,b){for(var c in b)a[c]=b[c];return a}};n.puremvc={View:c,Model:e,Controller:f,SimpleCommand:m,MacroCommand:l,Facade:b,Mediator:g,Observer:i,Notification:j,Notifier:k,Proxy:h,define:function(a,b,c){a||(a={});var e=a.name,f=a.parent,g="function"===typeof f,h=a.scope||null;if("parent"in a&&!g)throw new TypeError("Class parent must be Function");
if(a.hasOwnProperty("constructor")){if(a=a.constructor,"function"!==typeof a)throw new TypeError("Class constructor must be Function");}else a=g?function(){f.apply(this,arguments)}:new Function;g&&o.extend(a,f);if(b)g=a.prototype,o.decorate(g,b),g.constructor=a;c&&o.decorate(a,c);if(e){if("string"!==typeof e)throw new TypeError("Class name must be primitive string");p(e,a,h)}return a},declare:p}}})(this);
/*	SWFObject v2.2 <http://code.google.com/p/swfobject/> 
	is released under the MIT License <http://www.opensource.org/licenses/mit-license.php> 
*/
var swfobject=function(){var D="undefined",r="object",S="Shockwave Flash",W="ShockwaveFlash.ShockwaveFlash",q="application/x-shockwave-flash",R="SWFObjectExprInst",x="onreadystatechange",O=window,j=document,t=navigator,T=false,U=[h],o=[],N=[],I=[],l,Q,E,B,J=false,a=false,n,G,m=true,M=function(){var aa=typeof j.getElementById!=D&&typeof j.getElementsByTagName!=D&&typeof j.createElement!=D,ah=t.userAgent.toLowerCase(),Y=t.platform.toLowerCase(),ae=Y?/win/.test(Y):/win/.test(ah),ac=Y?/mac/.test(Y):/mac/.test(ah),af=/webkit/.test(ah)?parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,X=!+"\v1",ag=[0,0,0],ab=null;if(typeof t.plugins!=D&&typeof t.plugins[S]==r){ab=t.plugins[S].description;if(ab&&!(typeof t.mimeTypes!=D&&t.mimeTypes[q]&&!t.mimeTypes[q].enabledPlugin)){T=true;X=false;ab=ab.replace(/^.*\s+(\S+\s+\S+$)/,"$1");ag[0]=parseInt(ab.replace(/^(.*)\..*$/,"$1"),10);ag[1]=parseInt(ab.replace(/^.*\.(.*)\s.*$/,"$1"),10);ag[2]=/[a-zA-Z]/.test(ab)?parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}}else{if(typeof O.ActiveXObject!=D){try{var ad=new ActiveXObject(W);if(ad){ab=ad.GetVariable("$version");if(ab){X=true;ab=ab.split(" ")[1].split(",");ag=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}}catch(Z){}}}return{w3:aa,pv:ag,wk:af,ie:X,win:ae,mac:ac}}(),k=function(){if(!M.w3){return}if((typeof j.readyState!=D&&j.readyState=="complete")||(typeof j.readyState==D&&(j.getElementsByTagName("body")[0]||j.body))){f()}if(!J){if(typeof j.addEventListener!=D){j.addEventListener("DOMContentLoaded",f,false)}if(M.ie&&M.win){j.attachEvent(x,function(){if(j.readyState=="complete"){j.detachEvent(x,arguments.callee);f()}});if(O==top){(function(){if(J){return}try{j.documentElement.doScroll("left")}catch(X){setTimeout(arguments.callee,0);return}f()})()}}if(M.wk){(function(){if(J){return}if(!/loaded|complete/.test(j.readyState)){setTimeout(arguments.callee,0);return}f()})()}s(f)}}();function f(){if(J){return}try{var Z=j.getElementsByTagName("body")[0].appendChild(C("span"));Z.parentNode.removeChild(Z)}catch(aa){return}J=true;var X=U.length;for(var Y=0;Y<X;Y++){U[Y]()}}function K(X){if(J){X()}else{U[U.length]=X}}function s(Y){if(typeof O.addEventListener!=D){O.addEventListener("load",Y,false)}else{if(typeof j.addEventListener!=D){j.addEventListener("load",Y,false)}else{if(typeof O.attachEvent!=D){i(O,"onload",Y)}else{if(typeof O.onload=="function"){var X=O.onload;O.onload=function(){X();Y()}}else{O.onload=Y}}}}}function h(){if(T){V()}else{H()}}function V(){var X=j.getElementsByTagName("body")[0];var aa=C(r);aa.setAttribute("type",q);var Z=X.appendChild(aa);if(Z){var Y=0;(function(){if(typeof Z.GetVariable!=D){var ab=Z.GetVariable("$version");if(ab){ab=ab.split(" ")[1].split(",");M.pv=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}else{if(Y<10){Y++;setTimeout(arguments.callee,10);return}}X.removeChild(aa);Z=null;H()})()}else{H()}}function H(){var ag=o.length;if(ag>0){for(var af=0;af<ag;af++){var Y=o[af].id;var ab=o[af].callbackFn;var aa={success:false,id:Y};if(M.pv[0]>0){var ae=c(Y);if(ae){if(F(o[af].swfVersion)&&!(M.wk&&M.wk<312)){w(Y,true);if(ab){aa.success=true;aa.ref=z(Y);ab(aa)}}else{if(o[af].expressInstall&&A()){var ai={};ai.data=o[af].expressInstall;ai.width=ae.getAttribute("width")||"0";ai.height=ae.getAttribute("height")||"0";if(ae.getAttribute("class")){ai.styleclass=ae.getAttribute("class")}if(ae.getAttribute("align")){ai.align=ae.getAttribute("align")}var ah={};var X=ae.getElementsByTagName("param");var ac=X.length;for(var ad=0;ad<ac;ad++){if(X[ad].getAttribute("name").toLowerCase()!="movie"){ah[X[ad].getAttribute("name")]=X[ad].getAttribute("value")}}P(ai,ah,Y,ab)}else{p(ae);if(ab){ab(aa)}}}}}else{w(Y,true);if(ab){var Z=z(Y);if(Z&&typeof Z.SetVariable!=D){aa.success=true;aa.ref=Z}ab(aa)}}}}}function z(aa){var X=null;var Y=c(aa);if(Y&&Y.nodeName=="OBJECT"){if(typeof Y.SetVariable!=D){X=Y}else{var Z=Y.getElementsByTagName(r)[0];if(Z){X=Z}}}return X}function A(){return !a&&F("6.0.65")&&(M.win||M.mac)&&!(M.wk&&M.wk<312)}function P(aa,ab,X,Z){a=true;E=Z||null;B={success:false,id:X};var ae=c(X);if(ae){if(ae.nodeName=="OBJECT"){l=g(ae);Q=null}else{l=ae;Q=X}aa.id=R;if(typeof aa.width==D||(!/%$/.test(aa.width)&&parseInt(aa.width,10)<310)){aa.width="310"}if(typeof aa.height==D||(!/%$/.test(aa.height)&&parseInt(aa.height,10)<137)){aa.height="137"}j.title=j.title.slice(0,47)+" - Flash Player Installation";var ad=M.ie&&M.win?"ActiveX":"PlugIn",ac="MMredirectURL="+O.location.toString().replace(/&/g,"%26")+"&MMplayerType="+ad+"&MMdoctitle="+j.title;if(typeof ab.flashvars!=D){ab.flashvars+="&"+ac}else{ab.flashvars=ac}if(M.ie&&M.win&&ae.readyState!=4){var Y=C("div");X+="SWFObjectNew";Y.setAttribute("id",X);ae.parentNode.insertBefore(Y,ae);ae.style.display="none";(function(){if(ae.readyState==4){ae.parentNode.removeChild(ae)}else{setTimeout(arguments.callee,10)}})()}u(aa,ab,X)}}function p(Y){if(M.ie&&M.win&&Y.readyState!=4){var X=C("div");Y.parentNode.insertBefore(X,Y);X.parentNode.replaceChild(g(Y),X);Y.style.display="none";(function(){if(Y.readyState==4){Y.parentNode.removeChild(Y)}else{setTimeout(arguments.callee,10)}})()}else{Y.parentNode.replaceChild(g(Y),Y)}}function g(ab){var aa=C("div");if(M.win&&M.ie){aa.innerHTML=ab.innerHTML}else{var Y=ab.getElementsByTagName(r)[0];if(Y){var ad=Y.childNodes;if(ad){var X=ad.length;for(var Z=0;Z<X;Z++){if(!(ad[Z].nodeType==1&&ad[Z].nodeName=="PARAM")&&!(ad[Z].nodeType==8)){aa.appendChild(ad[Z].cloneNode(true))}}}}}return aa}function u(ai,ag,Y){var X,aa=c(Y);if(M.wk&&M.wk<312){return X}if(aa){if(typeof ai.id==D){ai.id=Y}if(M.ie&&M.win){var ah="";for(var ae in ai){if(ai[ae]!=Object.prototype[ae]){if(ae.toLowerCase()=="data"){ag.movie=ai[ae]}else{if(ae.toLowerCase()=="styleclass"){ah+=' class="'+ai[ae]+'"'}else{if(ae.toLowerCase()!="classid"){ah+=" "+ae+'="'+ai[ae]+'"'}}}}}var af="";for(var ad in ag){if(ag[ad]!=Object.prototype[ad]){af+='<param name="'+ad+'" value="'+ag[ad]+'" />'}}aa.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+ah+">"+af+"</object>";N[N.length]=ai.id;X=c(ai.id)}else{var Z=C(r);Z.setAttribute("type",q);for(var ac in ai){if(ai[ac]!=Object.prototype[ac]){if(ac.toLowerCase()=="styleclass"){Z.setAttribute("class",ai[ac])}else{if(ac.toLowerCase()!="classid"){Z.setAttribute(ac,ai[ac])}}}}for(var ab in ag){if(ag[ab]!=Object.prototype[ab]&&ab.toLowerCase()!="movie"){e(Z,ab,ag[ab])}}aa.parentNode.replaceChild(Z,aa);X=Z}}return X}function e(Z,X,Y){var aa=C("param");aa.setAttribute("name",X);aa.setAttribute("value",Y);Z.appendChild(aa)}function y(Y){var X=c(Y);if(X&&X.nodeName=="OBJECT"){if(M.ie&&M.win){X.style.display="none";(function(){if(X.readyState==4){b(Y)}else{setTimeout(arguments.callee,10)}})()}else{X.parentNode.removeChild(X)}}}function b(Z){var Y=c(Z);if(Y){for(var X in Y){if(typeof Y[X]=="function"){Y[X]=null}}Y.parentNode.removeChild(Y)}}function c(Z){var X=null;try{X=j.getElementById(Z)}catch(Y){}return X}function C(X){return j.createElement(X)}function i(Z,X,Y){Z.attachEvent(X,Y);I[I.length]=[Z,X,Y]}function F(Z){var Y=M.pv,X=Z.split(".");X[0]=parseInt(X[0],10);X[1]=parseInt(X[1],10)||0;X[2]=parseInt(X[2],10)||0;return(Y[0]>X[0]||(Y[0]==X[0]&&Y[1]>X[1])||(Y[0]==X[0]&&Y[1]==X[1]&&Y[2]>=X[2]))?true:false}function v(ac,Y,ad,ab){if(M.ie&&M.mac){return}var aa=j.getElementsByTagName("head")[0];if(!aa){return}var X=(ad&&typeof ad=="string")?ad:"screen";if(ab){n=null;G=null}if(!n||G!=X){var Z=C("style");Z.setAttribute("type","text/css");Z.setAttribute("media",X);n=aa.appendChild(Z);if(M.ie&&M.win&&typeof j.styleSheets!=D&&j.styleSheets.length>0){n=j.styleSheets[j.styleSheets.length-1]}G=X}if(M.ie&&M.win){if(n&&typeof n.addRule==r){n.addRule(ac,Y)}}else{if(n&&typeof j.createTextNode!=D){n.appendChild(j.createTextNode(ac+" {"+Y+"}"))}}}function w(Z,X){if(!m){return}var Y=X?"visible":"hidden";if(J&&c(Z)){c(Z).style.visibility=Y}else{v("#"+Z,"visibility:"+Y)}}function L(Y){var Z=/[\\\"<>\.;]/;var X=Z.exec(Y)!=null;return X&&typeof encodeURIComponent!=D?encodeURIComponent(Y):Y}var d=function(){if(M.ie&&M.win){window.attachEvent("onunload",function(){var ac=I.length;for(var ab=0;ab<ac;ab++){I[ab][0].detachEvent(I[ab][1],I[ab][2])}var Z=N.length;for(var aa=0;aa<Z;aa++){y(N[aa])}for(var Y in M){M[Y]=null}M=null;for(var X in swfobject){swfobject[X]=null}swfobject=null})}}();return{registerObject:function(ab,X,aa,Z){if(M.w3&&ab&&X){var Y={};Y.id=ab;Y.swfVersion=X;Y.expressInstall=aa;Y.callbackFn=Z;o[o.length]=Y;w(ab,false)}else{if(Z){Z({success:false,id:ab})}}},getObjectById:function(X){if(M.w3){return z(X)}},embedSWF:function(ab,ah,ae,ag,Y,aa,Z,ad,af,ac){var X={success:false,id:ah};if(M.w3&&!(M.wk&&M.wk<312)&&ab&&ah&&ae&&ag&&Y){w(ah,false);K(function(){ae+="";ag+="";var aj={};if(af&&typeof af===r){for(var al in af){aj[al]=af[al]}}aj.data=ab;aj.width=ae;aj.height=ag;var am={};if(ad&&typeof ad===r){for(var ak in ad){am[ak]=ad[ak]}}if(Z&&typeof Z===r){for(var ai in Z){if(typeof am.flashvars!=D){am.flashvars+="&"+ai+"="+Z[ai]}else{am.flashvars=ai+"="+Z[ai]}}}if(F(Y)){var an=u(aj,am,ah);if(aj.id==ah){w(ah,true)}X.success=true;X.ref=an}else{if(aa&&A()){aj.data=aa;P(aj,am,ah,ac);return}else{w(ah,true)}}if(ac){ac(X)}})}else{if(ac){ac(X)}}},switchOffAutoHideShow:function(){m=false},ua:M,getFlashPlayerVersion:function(){return{major:M.pv[0],minor:M.pv[1],release:M.pv[2]}},hasFlashPlayerVersion:F,createSWF:function(Z,Y,X){if(M.w3){return u(Z,Y,X)}else{return undefined}},showExpressInstall:function(Z,aa,X,Y){if(M.w3&&A()){P(Z,aa,X,Y)}},removeSWF:function(X){if(M.w3){y(X)}},createCSS:function(aa,Z,Y,X){if(M.w3){v(aa,Z,Y,X)}},addDomLoadEvent:K,addLoadEvent:s,getQueryParamValue:function(aa){var Z=j.location.search||j.location.hash;if(Z){if(/\?/.test(Z)){Z=Z.split("?")[1]}if(aa==null){return L(Z)}var Y=Z.split("&");for(var X=0;X<Y.length;X++){if(Y[X].substring(0,Y[X].indexOf("="))==aa){return L(Y[X].substring((Y[X].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(a){var X=c(R);if(X&&l){X.parentNode.replaceChild(l,X);if(Q){w(Q,true);if(M.ie&&M.win){l.style.display="block"}}if(E){E(B)}}a=false}}}}();



(function() {
var  global, version, _ref;


  function AkamaiSDKManager() {
    var legacyCheck, sdk, versions,
      _this = this;
    sdk = null;
    this.getSDK = function() {
      return sdk;
    };
    this.setSDK = function(newSDK) {
      var key, value;
      sdk = newSDK;
      legacyCheck();
      for (key in sdk) {
        value = sdk[key];
        window[key] = value;
      }
      return sdk;
    };
    this.saveSDK = function(version, object) {
      var key, value, _ref;
      if (!(object != null) || !(version != null) || version === "") {
        return;
      }
      if (!(object.main != null)) {
        for (key in object) {
          value = object[key];
          if (!((value != null ? value.VERSION : void 0) === version)) {
            continue;
          }
          object.main = value;
          break;
        }
      }
      if ((_ref = object.version) == null) {
        object.version = version;
      }
      versions.push(object);
      this[version] = object;
      return object;
    };
    versions = [];
    this.getVersions = function() {
      return versions.slice();
    };
    this.getVersion = function(version) {
      return this[version];
    };
    this.setVersion = function(version) {
      sdk = this.getVersion(version);
      if (!(sdk != null)) {
        return null;
      }
      this.setSDK(sdk);
      return sdk;
    };
    this.revert = function() {
      return this.setSDK(versions[0]);
    };
    this.noConflict = function() {
      var current;
      current = this.getSDK();
      this.revert();
      return current;
    };
    this.create = (function() {
      var Creator;
      Creator = function(cls, args) {
        this.prototype = cls.prototype;
        return cls.apply(this, args);
      };
      return function(args) {
        return new Creator(sdk.main, arguments);
      };
    })();
    legacyCheck = function() {
      var key, obj, value, _ref, _ref1;
      if ((_ref = window.com) != null ? (_ref1 = _ref.akamai) != null ? _ref1.amp : void 0 : void 0) {
        for (key in window) {
          value = window[key];
          if ((value === window.AMP || value === window.AMPremier) && ((value != null ? value.VERSION : void 0) != null) && value.VERSION !== "" && value.VERSION !== (sdk != null ? sdk.version : void 0) && (!(_this[value.VERSION] != null))) {
            obj = {};
            obj.main = value;
            obj.com = window.com;
            if (window.AMP) {
              obj.AMP = window.AMP;
            }
            if (window.AMPPremier) {
              obj.AMPremier = window.AMPPremier;
            }
            if (window.Utils) {
              obj.Utils = window.Utils;
            }
            if (window.QueryString) {
              obj.QueryString = window.QueryString;
            }
            if (window.QueryParams) {
              obj.QueryParams = window.QueryParams;
            }
            _this.saveSDK(value.VERSION, obj);
            break;
          }
        }
      }
    };
    legacyCheck();
  }

  
if ((_ref = window.AKAMAI_MEDIA_PLAYER) == null) {
  window.AKAMAI_MEDIA_PLAYER = new AkamaiSDKManager();
}
version = 'AMP v4.10.0.0004';
if (!(window.AKAMAI_MEDIA_PLAYER[version] != null)) {
  global = window.AKAMAI_MEDIA_PLAYER[version] = {};
  /* Start JS Lib
  */
  function __hasProp(prop) {
	return {}["hasOwnProperty"](prop);
}

function __extends(child, parent) {
	for (var key in parent) {
		if (__hasProp["call"](parent, key))
			child[key] = parent[key];
	}
	function ctor() {
		this.constructor = child;
	}

	ctor.prototype = parent.prototype;
	child.prototype = new ctor;
	child.__super__ = parent.prototype;
	return child;
}

function __indexOf(item) {
	for (var i = 0, l = this.length; i < l; i++) {
		if ( i in this && this[i] === item)
			return i;
	}
	return -1;
}

function __bind(fn, me) {
	return function() {
		return fn["apply"](me, arguments);
	};
}

/**
 * @enum {string}
 * @const
 * @private
*/

var Notifications;

var Notifications = {
  STARTUP: "startup",
  LOAD: "load",
  PAUSE_REQUEST: "pauserequest",
  TOGGLE_PLAY_PAUSE: "togglePlayPause",
  CHANGE_PLAY_STATE: "chageplaystate",
  PLAY_STATE_CHANGE: "playstatechange",
  TOGGLE_FULL_SCREEN: "toggleFullScreen",
  CHANGE_DISPLAY_STATE: "chageDisplayState",
  DISPLAY_STATE_CHANGE: "displayStateChange",
  FULL_SCREEN_CHANGE: "fullscreenchange",
  DISABLE_FULL_SCREEN: "disableFullScreen",
  ENABLE_FULL_SCREEN: "enableFullScreen",
  LANGUAGE_CHANGE: "languageChange",
  TOGGLE_ACTIVE: "toggleActive",
  CHANGE_ACTIVE_STATE: "changeactivestate",
  ACTIVE_STATE_CHANGE: "activestatechange",
  CHANGE_MEDIA: "changeMedia",
  SET_MEDIA: "setmedia",
  UPDATE_DATA_BINDINGS: "updatedatabindings",
  CHANGE_VOLUME: "changevolume",
  CHANGE_MUTED: "changemuted",
  TOGGLE_MUTED: "togglemuted",
  SEEK: "seek",
  CHANGE_DURATION: "changeduration",
  CHANGE_AUTOPLAY: "changeAutoplay",
  CHANGE_LOOP: "changeLoop",
  PLAYBACK_CORE_CHANGE: "playbackCoreChange",
  START: "start",
  END: "end",
  REPLAY: "replay",
  LOAD_FEED: "loadFeed",
  REGISTER_PLUGIN: "registerPlugin",
  REGISTER_PLUGINS: "registerPlugins",
  PLUGIN_REGISTERED: "pluginRegistered",
  ADD_LAYER: "addLayer",
  REMOVE_LAYER: "removeLayer",
  ADD_OVERLAY: "addOverlay",
  REMOVE_OVERLAY: "removeOverlay",
  ADD_CONTROL: "addControl",
  REMOVE_CONTROL: "removeControl",
  ADD_CONTROL_STATE: "addControlState",
  REMOVE_CONTROL_STATE: "removeControlState",
  ADD_APPLICATION_STATE: "addApplicationState",
  REMOVE_APPLICATION_STATE: "removeApplicationState",
  DISPATCH_EVENT: "dispatchEvent",
  CHANGE_PARAMS: "changeParams",
  ADD_CUE_POINTS: "addCuePoints",
  REMOVE_CUE_POINTS: "removeCuePoints",
  INITIALIZED: "initialized",
  REGISTER_PLAYBACK_CORE: "registerPlaybackCore",
  REMOVE_PLAYBACK_CORE: "removePlaybackCore",
  DISPLAY_TIME: "displaytime",
  IS_USER_ACTIVE: "isUserActive",
  LOADED_METADATA: "loadedmetadata",
  READY: "ready",
  ERROR: "error",
  ENDED: "ended",
  STARTED: "started",
  DURATION_CHANGE: "durationchange",
  SEEKING: "seeking",
  SEEKED: "seeked",
  TIME_UPDATE: "timeupdate",
  LOAD_START: "loadstart",
  LOADED_DATA: "loadeddata",
  CAN_PLAY: "canplay",
  CAN_PLAY_THROUGH: "canplaythrough",
  PROGRESS: "progress",
  MEDIA_CHANGE: "mediachange",
  WAITING: "waiting",
  PLAY: "play",
  PLAYING: "playing",
  PAUSE: "pause",
  PLAY_REQUEST: "playrequest",
  MEDIUM_CHANGE: "mediumchange",
  TEMPORAL_TYPE_CHANGE: "temporaltypechange",
  VOLUME_CHANGE: "volumechange",
  FAIL_OVER_ATTEMPT: "failoverattempt",
  PLAYBACK_TARGET_CHANGE: "playbacktargetchange",
  PLAYBACK_TARGET_AVAILABLE: "playbacktargetavailable",
  RECORD_CONTENT_CHANGE: "recordcontentchange",
  CHANGE_CONTENT: "changecontent",
  CONTENT_CHANGED: "contentchanged"
};


/** 
 * The Module class.
 *   
 * @param {Object}  config        The configuration object
 * @param {Object}  viewComponent The player's container element
 * @constructor
 * @private
 * @extends {puremvc.Facade}
*/
function Module(config, viewComponent) {
  Module.__super__.constructor.call(this, this.getModuleName() + "-" + Date.now());
  this.logger = Logger;
  this.config = config;
  this.moduleMap = {};
  this.viewComponent = viewComponent;
  this.initialize();
  this.moduleAPI = this.createAPI();
}


__extends(Module, puremvc.Facade);


Module.prototype.logger = null;

Module.prototype.config = null;

Module.prototype.moduleName = null;

Module.prototype.moduleMap = null;

Module.prototype.viewComponent = null;

Module.prototype.moduleAPI = null;

/**
 * Framework based initialization function for defining default
 * mvc classes. Meant to be overwritten by base classes.
*/
Module.prototype.initialize = function() {
  this.createModel();
  this.createController();
  this.createView();
};

/**
*/
Module.prototype.createModel = function() {
  this.registerProxy(new ModuleProxy(this.config));
};

/**
*/
Module.prototype.createView = function() {};

/**
*/
Module.prototype.createController = function() {};

/**
*/
Module.prototype.createAPI = function() {
  return new ModuleAPI(this);
};

/**
*/
Module.prototype.getModuleName = function() {
  return this.moduleName;
};

/**
*/
Module.prototype.getConfig = function() {
  return this.config;
};

/**
*/
Module.prototype.hasModule = function(moduleName) {
  return this.moduleMap[moduleName] != null;
};

/**
*/
Module.prototype.getModules = function() {
  var key, modules, value, _ref;
  modules = {};
  _ref = this.moduleMap;
  for (key in _ref) {
    value = _ref[key];
    modules[key] = value.module;
  }
  return modules;
};

/**
*/
Module.prototype.registerModule = function(module) {
  var adaptor, api, moduleAPI, moduleName;
  moduleName = module.getModuleName();
  if (!(module != null) || (this.moduleMap[moduleName] != null)) {
    return;
  }
  adaptor = new ModuleAdapter(module);
  this.moduleMap[moduleName] = adaptor;
  this.registerMediator(adaptor);
  api = this.getAPI();
  moduleAPI = module.getAPI();
  if ((api != null) && (moduleAPI != null)) {
    api[moduleName] = moduleAPI;
  }
  module.onRegister();
};

/**
*/
Module.prototype.retrieveModule = function(moduleName) {
  return this.moduleMap[moduleName].module;
};

/**
*/
Module.prototype.removeModule = function(moduleName) {
  var adaptor, api;
  adaptor = this.moduleMap[moduleName];
  if (!(adaptor != null)) {
    return;
  }
  delete this.moduleMap[moduleName];
  this.removeMediator(moduleName);
  api = this.getAPI();
  if ((api != null ? api[moduleName] : void 0) != null) {
    delete api[moduleName];
  }
  adaptor.module.onRemove();
  return adaptor.module;
};

/**
*/
Module.prototype.getAPI = function() {
  return this.moduleAPI;
};

/** List INotification interests.
*/
Module.prototype.listNotificationInterests = function() {
  return [];
};

/** List Notification publications
*/
Module.prototype.listNotificationPublications = function() {
  return [];
};

/** Notifications listed here will be automatically dispatched as events
*/
Module.prototype.listNotificationEvents = function() {
  return [];
};

/** Get the IMediator's view component.
*/
Module.prototype.getViewComponent = function() {
  return this.viewComponent;
};

/** Set the IMediator's view component.
*/
Module.prototype.setViewComponent = function(viewComponent) {
  this.viewComponent = viewComponent;
  return viewComponent;
};

/** Called by the parent module when the Module is registered
*/
Module.prototype.onRegister = function() {};

/** Called by the parent module when the Module is removed
*/
Module.prototype.onRemove = function() {};

/** Destroys the module
*/
Module.prototype.destroy = function() {
  var key;
  if (this.viewComponent != null) {
    this.viewComponent.innerHTML = "";
    this.viewComponent.className = "";
  }
  puremvc.Facade.removeCore(this.multitonKey);
  for (key in this) {
    this[key] = null;
    delete this[key];
  }
};

/**
 * The ModuleAPI class.
 * 
 * @param         {!Module} module  The base module this API wraps.
 * @constructor
*/
function ModuleAPI(module) {
  ModuleAPI.attachModuleDispatcher(module, new ModuleDispatcher(this));
}

ModuleAPI.attachModuleDispatcher = function(module, moduleDispatcher) {
  var api, dispatcher;
  module.registerMediator(moduleDispatcher);
  dispatcher = moduleDispatcher.dispatcher;
  api = moduleDispatcher.api;
  api.addEventListener = dispatcher.addEventListener.bind(dispatcher);
  api.removeEventListener = dispatcher.removeEventListener.bind(dispatcher);
  api.dispatchEvent = dispatcher.dispatchEvent.bind(dispatcher);
  if (module.logger.enabled === true) {
    api.getModule = function() {
      return module;
    };
  }
};

/**
 * Adds a listener for a given event type.
 *
 * @param {!string}  type  A string representing the event's type.
 * @param {!Function} func  A function to call when the event is triggered.
 * @param {boolean=} capture
 * @expose
*/
ModuleAPI.prototype.addEventListener = function(type, func, capture) {};

/**
 * Dispathes and event, triggering all event listener of the event's type.
 *
 * @param {!IEvent} event The event to dispatch.
 * @expose
*/
ModuleAPI.prototype.dispatchEvent = function(event) {};

/**
 * Removes a listener for a given event type.
 *
 * @param {!string}  type  A string representing the event's type.
 * @param {!Function} func  A function to call when the event is triggered.
 * @return {?Function} the handler that was removed if any
 * @param {boolean=} capture
 * @expose
*/
ModuleAPI.prototype.removeEventListener = function(type, func, capture) {};

/**
 * Creates a new instance of MediaProxy. Used to track player configuration settings.
 * 
 * @param {Object} data The config object.
 * @constructor
 * @private
 * @extends {puremvc.Proxy}
*/
function ModuleProxy(data) {
  this.config = data;
  ModuleProxy.__super__.constructor.call(this);
}


__extends(ModuleProxy, puremvc.Proxy);


/** @static
*/
ModuleProxy.NAME = "ModuleProxy";

/** @private
*/
ModuleProxy.prototype.defaults = null;

ModuleProxy.prototype.config = null;

/** @override
*/
ModuleProxy.prototype.initializeNotifier = function(key) {
  ModuleProxy.__super__.initializeNotifier.call(this, key);
  this.createData();
};

/**
*/
ModuleProxy.prototype.createData = function() {
  if (this.config != null) {
    this.setData(this.config);
  }
};

/**
 * Gets the data for this proxy.
 * 
 * @returns {Object} 
 *    The data for this proxy
 * @override
*/
ModuleProxy.prototype.getData = function() {
  return this.data;
};

/**
 * Sets the data for this proxy.
 * 
 * @param {Object} value 
 *    The new data for this proxy
 * @override
*/
ModuleProxy.prototype.setData = function(data) {
  var dflt, key, obj, value, _ref;
  obj = {};
  _ref = this.defaults;
  for (key in _ref) {
    dflt = _ref[key];
    value = key in data ? data[key] : dflt;
    obj[key] = value;
  }
  this.data = obj;
  return data;
};

/** 
 * The InstallPlayer class.
 *   
 * @constructor
 * @private 
 * @param {Object} viewComponent
*/
function InstallPlayer(viewComponent) {
  var anchor, div, img, message;
  viewComponent.className = Namespace.PREFIX + "player";
  div = UI.create("install-flash", viewComponent);
  message = UI.create(null, div, "p", "To view this page ensure that Adobe Flash Player version 10.2.0 or greater is installed.");
  anchor = UI.create(null, div, "a");
  anchor.href = 'http://www.adobe.com/go/getflashplayer';
  img = UI.create(null, anchor, "img");
  img.src = "//www.adobe.com/images/shared/download_buttons/get_flash_player.gif";
  img.alt = "Get Adobe Flash player";
}

/**
*/
InstallPlayer.prototype.getModules = function() {
  return [];
};

/**
*/
InstallPlayer.prototype.getAPI = function() {
  return {};
};

/**
 * The ToggleActiveCommand class.
 *   
 * @constructor
 * @private
 * @extends {puremvc.SimpleCommand}
*/
function ToggleActiveCommand() {
  ToggleActiveCommand.__super__.constructor.call(this);
}


__extends(ToggleActiveCommand, puremvc.SimpleCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
ToggleActiveCommand.prototype.execute = function(notification) {
  var appProxy, state;
  appProxy = this.facade.retrieveProxy(ApplicationStateProxy.NAME);
  state = appProxy.getActiveState() === ActiveState.ACTIVE ? ActiveState.INACTIVE : ActiveState.ACTIVE;
  this.sendNotification(Notifications.CHANGE_ACTIVE_STATE, state);
};

/**
 * The ToggleFullScreenCommand class.
 *   
 * @constructor
 * @private
 * @extends {puremvc.SimpleCommand}
*/
function ToggleFullScreenCommand() {
  ToggleFullScreenCommand.__super__.constructor.call(this);
}


__extends(ToggleFullScreenCommand, puremvc.SimpleCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
ToggleFullScreenCommand.prototype.execute = function(notification) {
  var appProxy, state;
  appProxy = this.facade.retrieveProxy(ApplicationStateProxy.NAME);
  state = appProxy.getDisplayState() === DisplayState.FULL_SCREEN ? DisplayState.NORMAL : DisplayState.FULL_SCREEN;
  this.sendNotification(Notifications.CHANGE_DISPLAY_STATE, state);
};

/**
 * @enum {string}
 * @const
 * @private
*/

var ControlsMode = {
  /**
   * Constant representing the persistent controls mode
  */

  PERSISTENT: "persistent",
  /**
   * Constant representing none controls mode
  */

  NONE: "none"
};

/**
 * The ChangeDisplayStateCommand class.
 *   
 * @constructor
 * @private
 * @extends {puremvc.SimpleCommand}
*/
function ChangeDisplayStateCommand() {
  ChangeDisplayStateCommand.__super__.constructor.call(this);
}


__extends(ChangeDisplayStateCommand, puremvc.SimpleCommand);


ChangeDisplayStateCommand.interval = null;

/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
ChangeDisplayStateCommand.prototype.execute = function(notification) {
  var core, fullscreen, playback, proxy, state, view,
    _this = this;
  state = notification.getBody();
  playback = this.facade.retrieveProxy(PlaybackProxy.NAME);
  core = this.facade.getVideo();
  if (!(core != null) || !core.webkitSupportsFullscreen) {
    return;
  }
  proxy = this.facade.retrieveProxy(ApplicationStateProxy.NAME);
  proxy.setDisplayState(state);
  view = this.facade.getViewComponent();
  fullscreen = {};
  if (view.webkitRequestFullScreen != null) {
    fullscreen.enter = function() {
      return view.webkitRequestFullScreen();
    };
    fullscreen.exit = function() {
      return document.webkitCancelFullScreen();
    };
    fullscreen.event = "onwebkitfullscreenchange";
    fullscreen.element = "webkitFullscreenElement";
  } else if (view.requestFullscreen != null) {
    fullscreen.enter = function() {
      return view.requestFullscreen();
    };
    fullscreen.exit = function() {
      return document.cancelFullscreen();
    };
    fullscreen.event = "onfullscreenchange";
    fullscreen.element = "fullscreenElement";
  } else if (view.mozRequestFullScreen != null) {
    fullscreen.enter = function() {
      return view.mozRequestFullscreen();
    };
    fullscreen.exit = function() {
      return document.mozCancelFullScreen();
    };
    fullscreen.event = "onmozfullscreenchange";
    fullscreen.element = "mozFullscreenElement";
  } else if (core.webkitEnterFullscreen != null) {
    fullscreen.enter = function() {
      return core.webkitEnterFullscreen();
    };
    fullscreen.exit = function() {
      return core.webkitExitFullscreen();
    };
    fullscreen.event = null;
  }
  if (state === DisplayState.FULL_SCREEN) {
    if (fullscreen.event != null) {
      view[fullscreen.event] = function(event) {
        if (!(document[fullscreen.element] != null)) {
          return _this.sendNotification(Notifications.CHANGE_DISPLAY_STATE, DisplayState.NORMAL);
        }
      };
    } else {
      clearInterval(ChangeDisplayStateCommand.interval);
      ChangeDisplayStateCommand.interval = setInterval(function() {
        if (core.webkitDisplayingFullscreen !== true) {
          _this.sendNotification(Notifications.CHANGE_DISPLAY_STATE, DisplayState.NORMAL);
          return clearInterval(ChangeDisplayStateCommand.interval);
        }
      }, 100);
    }
    fullscreen.enter();
  } else if (state === DisplayState.NORMAL) {
    fullscreen.exit();
    core[fullscreen.event] = null;
    clearInterval(ChangeDisplayStateCommand.interval);
  }
  setTimeout(this.sendNotification.bind(this, Notifications.FULL_SCREEN_CHANGE, state), 100);
  this.sendNotification(Notifications.DISPATCH_EVENT, new Event("fullscreenchange", state === DisplayState.FULL_SCREEN));
};

/**
 * The ChangeAutoplayCommand class.
 *   
 * @constructor
 * @private
 * @extends {puremvc.SimpleCommand}
*/
function ChangeAutoplayCommand() {
  ChangeAutoplayCommand.__super__.constructor.call(this);
}


__extends(ChangeAutoplayCommand, puremvc.SimpleCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
ChangeAutoplayCommand.prototype.execute = function(notification) {
  var proxy;
  proxy = this.facade.retrieveProxy(ConfigurationProxy.NAME);
  proxy.setAutoplay(notification.getBody());
};

/**
 * The ChangeLoopCommand class.
 *   
 * @constructor
 * @private
 * @extends {puremvc.SimpleCommand}
*/
function ChangeLoopCommand() {
  ChangeLoopCommand.__super__.constructor.call(this);
}


__extends(ChangeLoopCommand, puremvc.SimpleCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
ChangeLoopCommand.prototype.execute = function(notification) {
  var proxy;
  proxy = this.facade.retrieveProxy(ConfigurationProxy.NAME);
  proxy.setLoop(notification.getBody());
};

/**
 * The ChangeVolumeCommand class.
 *   
 * @constructor
 * @private
 * @extends {puremvc.SimpleCommand}
*/
function ChangeVolumeCommand() {
  ChangeVolumeCommand.__super__.constructor.call(this);
}


__extends(ChangeVolumeCommand, puremvc.SimpleCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
ChangeVolumeCommand.prototype.execute = function(notification) {
  var proxy;
  proxy = this.facade.retrieveProxy(PlaybackProxy.NAME);
  proxy.setVolume(notification.getBody());
};

/**
 * The SeekCommand class.
 *   
 * @constructor
 * @private
 * @extends {puremvc.SimpleCommand}
*/
function SeekCommand() {
  SeekCommand.__super__.constructor.call(this);
}


__extends(SeekCommand, puremvc.SimpleCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
SeekCommand.prototype.execute = function(notification) {
  var handler, mediaProxy, playbackProxy, time, video;
  time = notification.getBody();
  playbackProxy = this.facade.retrieveProxy(PlaybackProxy.NAME);
  mediaProxy = this.facade.retrieveProxy(MediaProxy.NAME);
  if (time === 0 && mediaProxy.getType() === Utils.mimeTypes.m3u8) {
    time = 0.25;
  }
  video = this.facade.getVideo();
  if (video.readyState === 0) {
    handler = function(event) {
      video.removeEventListener("loadedmetadata", handler, false);
      return playbackProxy.setCurrentTime(time);
    };
    video.addEventListener("loadedmetadata", handler, false);
  } else {
    playbackProxy.setCurrentTime(time);
  }
  this.sendNotification(Notifications.CHANGE_PLAY_STATE, PlayState.WAITING);
};

/**
 * The SeekingCommand class.
 *   
 * @constructor
 * @private
 * @extends {puremvc.SimpleCommand}
*/
function SeekingCommand() {
  SeekingCommand.__super__.constructor.call(this);
}


__extends(SeekingCommand, puremvc.SimpleCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
SeekingCommand.prototype.execute = function(notification) {
  var app;
  app = this.facade.retrieveProxy(ApplicationStateProxy.NAME);
  app.setSeeking(true);
};

/**
 * The SeekedCommand class.
 *   
 * @constructor
 * @private
 * @extends {puremvc.SimpleCommand}
*/
function SeekedCommand() {
  SeekedCommand.__super__.constructor.call(this);
}


__extends(SeekedCommand, puremvc.SimpleCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
SeekedCommand.prototype.execute = function(notification) {
  var app, proxy, src;
  proxy = this.facade.retrieveProxy(PlaybackProxy.NAME);
  src = proxy.getSrc();
  app = this.facade.retrieveProxy(ApplicationStateProxy.NAME);
  app.setSeeking(false);
};

/**
 * The ReplayCommand class.
 *   
 * @constructor
 * @private
 * @extends {puremvc.SimpleCommand}
*/
function ReplayCommand() {
  ReplayCommand.__super__.constructor.call(this);
}


__extends(ReplayCommand, puremvc.SimpleCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
ReplayCommand.prototype.execute = function(notification) {
  var playbackProxy;
  playbackProxy = this.facade.retrieveProxy(PlaybackProxy.NAME);
  playbackProxy.setCurrentTime(0.25);
  this.sendNotification(Notifications.PLAY);
  this.sendNotification(Notifications.CHANGE_PLAY_STATE, PlayState.PLAYING);
};

/**
 * The EndCommand class.
 *   
 * @constructor
 * @private
 * @extends {puremvc.SimpleCommand}
*/
function EndCommand() {
  EndCommand.__super__.constructor.call(this);
}


__extends(EndCommand, puremvc.SimpleCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
EndCommand.prototype.execute = function(notification) {
  var playbackProxy, time;
  this.facade.logger.debug("EndCommand", notification);
  time = notification.getBody();
  playbackProxy = this.facade.retrieveProxy(PlaybackProxy.NAME);
  playbackProxy.pause();
  if (playbackProxy.getCurrentTime() !== playbackProxy.getDuration()) {
    playbackProxy.setCurrentTime(playbackProxy.getDuration());
  }
};

/**
 * The IsUserActiveCommand class.
 *   
 * @constructor
 * @private
 * @extends {puremvc.SimpleCommand}
*/
function IsUserActiveCommand() {
  IsUserActiveCommand.__super__.constructor.call(this);
}


__extends(IsUserActiveCommand, puremvc.SimpleCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
IsUserActiveCommand.prototype.execute = function(notification) {
  var proxy;
  proxy = this.facade.retrieveProxy(ApplicationStateProxy.NAME);
  proxy.setIsUserActive(notification.getBody());
};

/**
 * The WaitingCommand class.
 *   
 * @constructor
 * @private
 * @extends {puremvc.SimpleCommand}
*/
function WaitingCommand() {
  WaitingCommand.__super__.constructor.call(this);
}


__extends(WaitingCommand, puremvc.SimpleCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
WaitingCommand.prototype.execute = function(notification) {
  var appProxy;
  this.facade.logger.debug("WaitingCommand");
  appProxy = this.facade.retrieveProxy(ApplicationStateProxy.NAME);
  if (appProxy.getPlayState() !== PlayState.LOADING && Utils.getMimeType(this.facade.getVideo().src) !== Utils.mimeTypes.mp4) {
    this.sendNotification(Notifications.CHANGE_PLAY_STATE, PlayState.WAITING);
  }
};

/**
 * The ChangeMutedCommand class.
 *   
 * @constructor
 * @private
 * @extends {puremvc.SimpleCommand}
*/
function ChangeMutedCommand() {
  ChangeMutedCommand.__super__.constructor.call(this);
}


__extends(ChangeMutedCommand, puremvc.SimpleCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
ChangeMutedCommand.prototype.execute = function(notification) {
  var proxy;
  proxy = this.facade.retrieveProxy(PlaybackProxy.NAME);
  proxy.setMuted(notification.getBody());
};

/**
 * The CheckAuthorizationCommand class.
 *   
 * @constructor
 * @private
 * @extends {puremvc.SimpleCommand}
*/
function CheckAuthorizationCommand() {
  CheckAuthorizationCommand.__super__.constructor.call(this);
}


__extends(CheckAuthorizationCommand, puremvc.SimpleCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
CheckAuthorizationCommand.prototype.execute = function(notification) {
  var media, proxy;
  this.facade.logger.debug("CheckAuthorizationCommand");
  proxy = this.facade.retrieveProxy(SecurityProxy.NAME);
  media = notification.getBody();
  proxy.setMedia(media);
  if (proxy.getAuthorized() === false) {
    this.sendNotification(SecurityNotifications.AUTHORIZE, media);
  } else {
    this.sendNotification(Notifications.MEDIA_CHANGE, media);
  }
};

/**
 * The AuthorizedCommand class.
 *   
 * @constructor
 * @private
 * @extends {puremvc.SimpleCommand}
*/
function AuthorizedCommand() {
  AuthorizedCommand.__super__.constructor.call(this);
}


__extends(AuthorizedCommand, puremvc.SimpleCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
AuthorizedCommand.prototype.execute = function(notification) {
  var mediaProxy, securityProxy, src;
  this.facade.logger.debug("AuthorizedCommand");
  mediaProxy = this.facade.retrieveProxy(MediaProxy.NAME);
  mediaProxy.authorized = true;
  securityProxy = this.facade.retrieveProxy(SecurityProxy.NAME);
  src = securityProxy.createURL(mediaProxy.getSrc());
  mediaProxy.setSrc(src);
  this.sendNotification(Notifications.MEDIA_CHANGE, mediaProxy.getData());
};

/**
 * The InitializedCommand class.
 *   
 * @constructor
 * @private
 * @extends {puremvc.SimpleCommand}
*/
function InitializedCommand() {
  InitializedCommand.__super__.constructor.call(this);
}


__extends(InitializedCommand, puremvc.SimpleCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
InitializedCommand.prototype.execute = function(notification) {
  var proxy;
  this.facade.logger.debug("InitializedCommand");
  proxy = this.facade.retrieveProxy(PlaybackProxy.NAME);
  proxy.initialized = true;
};

/**
 * The RegisterPlaybackCoreCommand class.
 *   
 * @constructor
 * @private
 * @extends {puremvc.SimpleCommand}
*/
function RegisterPlaybackCoreCommand() {
  RegisterPlaybackCoreCommand.__super__.constructor.call(this);
}


__extends(RegisterPlaybackCoreCommand, puremvc.SimpleCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
RegisterPlaybackCoreCommand.prototype.execute = function(notification) {
  var player;
  this.facade.logger.debug("RegisterPlaybackCoreCommand");
  player = this.facade.retrieveProxy(PlayerProxy.NAME);
  player.registerPlaybackCore(notification.getBody());
};

/**
 * The RegisterPlaybackCoreCommand class.
 *   
 * @constructor
 * @private
 * @extends {puremvc.SimpleCommand}
*/
function PlaybackTargetChangeCommand() {
  PlaybackTargetChangeCommand.__super__.constructor.call(this);
}


__extends(PlaybackTargetChangeCommand, puremvc.SimpleCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
PlaybackTargetChangeCommand.prototype.execute = function(notification) {
  var note;
  this.facade.logger.debug("PlaybackTargetChangeCommand");
  note = notification.getBody().target === "amp" ? Notifications.REMOVE_APPLICATION_STATE : Notifications.ADD_APPLICATION_STATE;
  this.sendNotification(note, "remote-playback");
};

/**
 * The RecordContentChangeCommand class.
 *   
 * @constructor
 * @private
 * @extends {puremvc.SimpleCommand}
*/
function RecordContentChangeCommand() {
  RecordContentChangeCommand.__super__.constructor.call(this);
}


__extends(RecordContentChangeCommand, puremvc.SimpleCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
RecordContentChangeCommand.prototype.execute = function(notification) {
  var content, media;
  this.facade.logger.debug("RecordContentChangeCommand");
  media = this.facade.retrieveProxy(MediaProxy.NAME);
  content = notification.getBody();
  this.sendNotification(Notifications.CHANGE_CONTENT, {
    from: media.getData(),
    to: content
  });
  media.updateData(content);
  this.sendNotification(Notifications.UPDATE_DATA_BINDINGS);
  this.sendNotification(Notifications.CHANGE_CONTENT, media.getData());
};

/**
 * The TimeupdateCommand class.
 *   
 * @constructor
 * @private
 * @extends {puremvc.SimpleCommand}
*/
function TimeUpdateCommand() {
  TimeUpdateCommand.__super__.constructor.call(this);
}


__extends(TimeUpdateCommand, puremvc.SimpleCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
TimeUpdateCommand.prototype.execute = function(notification) {
  var playbackCore;
  playbackCore = this.facade.retrieveProxy(PlayerProxy.NAME).getActivePlaybackCore();
  this.sendNotification(Notifications.DISPLAY_TIME, {
    currentTime: playbackCore.getCurrentTime(),
    duration: playbackCore.getDuration()
  });
};

/**
 * The ToggleMutedCommand class.
 *   
 * @constructor
 * @private
 * @extends {puremvc.SimpleCommand}
*/
function ToggleMutedCommand() {
  ToggleMutedCommand.__super__.constructor.call(this);
}


__extends(ToggleMutedCommand, puremvc.SimpleCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
ToggleMutedCommand.prototype.execute = function(notification) {
  var proxy;
  proxy = this.facade.retrieveProxy(PlaybackProxy.NAME);
  proxy.setMuted(!proxy.getMuted());
};

/** 
 * The ModuleMediator class.
 * 
 * @param {string} name
 * @param {Object} viewComponent
 * @constructor
 * @private 
 * @extends {puremvc.Mediator}
*/
function ModuleMediator(viewComponent) {
  if (this.cssPrefix == null) {
    this.cssPrefix = Namespace.PREFIX;
  }
  ModuleMediator.__super__.constructor.call(this, this.mediatorName, viewComponent);
}


__extends(ModuleMediator, puremvc.Mediator);


ModuleMediator.prototype.config = null;

ModuleMediator.prototype.cssPrefix = null;

ModuleMediator.prototype.classList = null;

/** @override
*/
ModuleMediator.prototype.initializeNotifier = function(key) {
  var base;
  ModuleMediator.__super__.initializeNotifier.call(this, key);
  base = this.facade.app || this.facade;
  this.config = base.retrieveProxy(ModuleProxy.NAME);
  this.classList = {
    prefix: this.cssPrefix,
    element: this.viewComponent,
    contains: function(className, element) {
      var css, _ref;
      if (element == null) {
        element = this.element;
      }
      css = this.prefix + className;
      if (((_ref = element.classList) != null ? _ref.contains : void 0) != null) {
        return element.classList.contains(css);
      } else {
        return element.className.indexOf(css) !== -1;
      }
    },
    add: function(className, element) {
      var css, _ref;
      if (element == null) {
        element = this.element;
      }
      css = this.prefix + className;
      if (((_ref = element.classList) != null ? _ref.add : void 0) != null) {
        element.classList.add(css);
      } else {
        if (!this.contains(className, element)) {
          if (element.className !== "") {
            element.className += " " + css;
          } else {
            element.className = css;
          }
        }
      }
    },
    remove: function(className, element) {
      var css, regexp, _ref;
      if (element == null) {
        element = this.element;
      }
      css = this.prefix + className;
      if (((_ref = element.classList) != null ? _ref.remove : void 0) != null) {
        element.classList.remove(css);
      } else {
        if (this.contains(className, element)) {
          regexp = new RegExp(" ?" + css);
          element.className = element.className.replace(regexp, "");
        }
      }
    },
    toggle: function(className, element) {
      var _ref;
      if (element == null) {
        element = this.element;
      }
      if (((_ref = element.classList) != null ? _ref.toggle : void 0) != null) {
        return element.classList.toggle(this.prefix + className);
      } else {
        if (this.contains(className, element)) {
          return this.remome(className, element);
        } else {
          return this.add(className, element);
        }
      }
    }
  };
};

/** 
 * @constructor
 * @private
*/
function LocalizedMediator(viewComponent) {
  LocalizedMediator.__super__.constructor.call(this, viewComponent);
}


__extends(LocalizedMediator, ModuleMediator);


LocalizedMediator.prototype.localizationManager = null;

/** @override
*/
LocalizedMediator.prototype.initializeNotifier = function(key) {
  var target;
  LocalizedMediator.__super__.initializeNotifier.call(this, key);
  target = this.facade.app || this.facade;
  this.localizationManager = target.retrieveProxy(LocalizationProxy.NAME);
};

/** 
 * @constructor
 * @extends {LocalizedMediator}
 * @private
*/
function ComponentMediator(componentName, componentType, parent, element) {
  this.componentName = componentName != null ? componentName : this.componentName;
  this.componentType = componentType != null ? componentType : this.componentType;
  this.viewComponent = this.createViewComponent(parent, element);
  this.classList = this.viewComponent._classList;
  if (this.mediatorName == null) {
    this.mediatorName = this.createMediatorName();
  }
  ComponentMediator.__super__.constructor.call(this, this.viewComponent);
}


__extends(ComponentMediator, LocalizedMediator);


ComponentMediator.prototype.componentName = null;

ComponentMediator.prototype.componentType = null;

ComponentMediator.prototype.classList = null;

ComponentMediator.prototype.state = null;

ComponentMediator.prototype.disabled = false;

/**
*/
ComponentMediator.prototype.onRegister = function() {
  UI.bindEvents(this.viewComponent, this);
};

/**
*/
ComponentMediator.prototype.createViewComponent = function(parent, element) {
  var type;
  type = this.getTypeList();
  return UI.create(type, parent, element);
};

/**
*/
ComponentMediator.prototype.createMediatorName = function() {
  var type;
  type = this.getTypeList();
  type.push("mediator");
  type.push(UI.createUID());
  return type.join("-");
};

/**
*/
ComponentMediator.prototype.getTypeList = function() {
  var type;
  type = [];
  if (this.componentName != null) {
    type.push(this.componentName);
  }
  if (this.componentType != null) {
    type = type.concat(this.componentType);
  }
  return type;
};

/**
*/
ComponentMediator.prototype.create = function(type, parent, element, text) {
  if (parent == null) {
    parent = this;
  }
  if (parent === false) {
    parent = null;
  }
  return UI.create(type, parent, element, text);
};

/**
*/
ComponentMediator.prototype.createText = function(type, text, parent, element) {
  if (parent == null) {
    parent = this;
  }
  return UI.create(type, parent, element, text);
};

/**
*/
ComponentMediator.prototype.setState = function(value) {
  if (value === this.state) {
    return;
  }
  if (this.state != null) {
    this.classList.remove(this.state);
  }
  this.state = value;
  if (this.state != null) {
    this.classList.add(this.state);
  }
  return value;
};

/**
*/
ComponentMediator.prototype.getState = function() {
  return this.state;
};

/**
*/
ComponentMediator.prototype.setDisabled = function(value) {
  if (value === this.disabled) {
    return;
  }
  this.disabled = value;
  if (this.disabled) {
    this.classList.add("disabled");
  } else {
    this.classList.remove("disabled");
  }
  return value;
};

/**
*/
ComponentMediator.prototype.getDisabled = function() {
  return this.disabled;
};

/** 
 * @constructor
 * @private
*/
function OverlayMediator() {
  OverlayMediator.__super__.constructor.call(this, null, null, null, null);
}


__extends(OverlayMediator, ComponentMediator);


OverlayMediator.prototype.componentType = "overlay";

/**
 * Registers the overlay.
 * 
 * @override
*/
OverlayMediator.prototype.onRegister = function() {
  OverlayMediator.__super__.onRegister.call(this);
  this.registerOverlay();
};

/**
 * Removes the overlay.
 * 
 * @override
*/
OverlayMediator.prototype.onRemove = function() {
  OverlayMediator.__super__.onRemove.call(this);
  this.removeOverlay();
};

/**
 *
*/
OverlayMediator.prototype.registerOverlay = function() {
  this.sendNotification(Notifications.ADD_OVERLAY, this.viewComponent);
};

/**
 *
*/
OverlayMediator.prototype.removeOverlay = function() {
  this.sendNotification(Notifications.REMOVE_OVERLAY, this.viewComponent);
};

/**
 * @constructor
 * @private
 * @extends {contextMenuMediator}
*/
function contextMenuMediator() {
  contextMenuMediator.__super__.constructor.call(this);
}


__extends(contextMenuMediator, OverlayMediator);


contextMenuMediator.prototype.componentName = "context-menu";

contextMenuMediator.prototype.contextMenu = null;

/**
 * @override
*/
contextMenuMediator.prototype.onRegister = function() {
  var _this = this;
  contextMenuMediator.__super__.onRegister.call(this);
  EventHandler.create(this.facade.viewComponent, EventHandler.CONTEXTMENU, function(event) {
    event.preventDefault();
    _this.contextMenuHandler(event);
    return false;
  });
};

/** Context Menu Click Handler
*/
contextMenuMediator.prototype.contextMenuHandler = function(event) {
  var contextItem,
    _this = this;
  if (this.contextMenu) {
    this.removeContextMenu();
  }
  this.contextMenu = UI.create("context-menu", document.body, "ul");
  contextItem = UI.create("context-item", this.contextMenu, "li", this.facade.parent.version);
  this.contextMenu.style.top = event.pageY + "px";
  this.contextMenu.style.left = event.pageX + "px";
  EventHandler.create(document.body, EventHandler.CLICK, function(event) {
    _this.removeContextMenu(event);
    return false;
  });
};

/** Remove ContextMenu Handler and DOM Object
*/
contextMenuMediator.prototype.removeContextMenu = function(event) {
  try {
    EventHandler.clear(document.body, EventHandler.CLICK);
    document.body.removeChild(this.contextMenu);
    this.contextMenu = null;
  } catch (_error) {}
};

/**
*/
/**
 * @constructor
 * @private
*/
function EndSlateMediator() {
  EndSlateMediator.__super__.constructor.call(this);
}


__extends(EndSlateMediator, OverlayMediator);


EndSlateMediator.prototype.componentName = "end-slate";

/**
 * @override
*/
EndSlateMediator.prototype.onRegister = function() {
  if (this.config.getEndSlate() != null) {
    EndSlateMediator.__super__.onRegister.call(this);
  }
};

EndSlateMediator.prototype.listNotificationInterests = function() {
  return [Notifications.MEDIA_CHANGE];
};

EndSlateMediator.prototype.handleNotification = function(notification) {
  var endslate, html, media, src, viewComponent;
  switch (notification.getName()) {
    case Notifications.MEDIA_CHANGE:
      media = notification.getBody();
      endslate = this.config.getEndSlate();
      viewComponent = this.getViewComponent();
      html = "";
      if (endslate != null) {
        src = endslate.usePoster === true ? media.poster : endslate.url;
        if ((src != null) && src !== "") {
          html = "<img src=\"" + src + "\" class=\"end-slate-image\" />";
        }
      }
      viewComponent.innerHTML = html;
  }
};

/**
 * @constructor
 * @private
 * @extends {OverlayMediator}
*/
function WaitingOverlayMediator() {
  WaitingOverlayMediator.__super__.constructor.call(this);
}


__extends(WaitingOverlayMediator, OverlayMediator);


WaitingOverlayMediator.prototype.componentName = "waiting";

WaitingOverlayMediator.prototype.bar = null;

WaitingOverlayMediator.prototype.text = null;

WaitingOverlayMediator.prototype.onRegister = function() {
  this.bar = this.create("waiting-bar");
  this.text = this.createText("waiting-text", this.localizationManager.getString(LocalizationConstants.MSG_BUFFERING));
  WaitingOverlayMediator.__super__.onRegister.call(this);
};

/** 
 * @constructor
 * @extends {OverlayMediator}
 * @private
*/
function LoadingOverlayMediator() {
  LoadingOverlayMediator.__super__.constructor.call(this);
}


__extends(LoadingOverlayMediator, OverlayMediator);


LoadingOverlayMediator.prototype.componentName = "loading";

function LocalizationConstants() {}

LocalizationConstants.MSG_LIVE = "MSG_LIVE";

LocalizationConstants.MSG_REPLAY = "MSG_REPLAY";

LocalizationConstants.MSG_BUFFERING = "MSG_BUFFERING_TEXT";

LocalizationConstants.MSG_CC = "MSG_CC";

LocalizationConstants.MSG_CC_TITLE = "MSG_CC_TITLE";

LocalizationConstants.MSG_CC_LANGUAGE = "MSG_CC_LANGUAGE";

LocalizationConstants.MSG_CC_PRESETS = "MSG_CC_PRESETS";

LocalizationConstants.MSG_CC_FONT = "MSG_CC_FONT";

LocalizationConstants.MSG_CC_EDGE = "MSG_CC_EDGE";

LocalizationConstants.MSG_CC_SIZE = "MSG_CC_SIZE";

LocalizationConstants.MSG_CC_SCROLL = "MSG_CC_SCROLL";

LocalizationConstants.MSG_CC_COLOR = "MSG_CC_COLOR";

LocalizationConstants.MSG_CC_BACKGROUND = "MSG_CC_BACKGROUND";

LocalizationConstants.MSG_CC_EDGE = "MSG_CC_EDGE";

LocalizationConstants.MSG_CC_WINDOW = "MSG_CC_WINDOW";

LocalizationConstants.MSG_CC_OPACITY = "MSG_CC_OPACITY";

LocalizationConstants.MSG_CC_SHOW_ADVANCED = "MSG_CC_SHOW_ADVANCED";

LocalizationConstants.MSG_CC_HIDE_ADVANCED = "MSG_CC_HIDE_ADVANCED";

LocalizationConstants.MSG_CC_RESET = "MSG_CC_RESET";

LocalizationConstants.MSG_CC_CANCEL = "MSG_CC_CANCEL";

LocalizationConstants.MSG_CC_APPLY = "MSG_CC_APPLY";

LocalizationConstants.MSG_SECONDS = "MSG_SECONDS";

LocalizationConstants.MSG_RECOMMENDATIONS_TITLE = "MSG_RECOMMENDATIONS_TITLE";

LocalizationConstants.MSG_NEXT_VIDEO = "MSG_NEXT_VIDEO";

LocalizationConstants.MSG_NEXT_AD = "MSG_NEXT_AD";

/**
 * @constructor
 * @private
 * @extends {OverlayMediator}
*/
function ReplayOverlayMediator() {
  ReplayOverlayMediator.__super__.constructor.call(this);
}


__extends(ReplayOverlayMediator, OverlayMediator);


ReplayOverlayMediator.prototype.componentName = "replay";

ReplayOverlayMediator.prototype.replay = null;

ReplayOverlayMediator.prototype.icon = null;

ReplayOverlayMediator.prototype.label = null;

/**
 * @override
*/
ReplayOverlayMediator.prototype.onRegister = function() {
  this.replay = this.create("replay-button");
  this.replay.onclick = this.onclick.bind(this);
  this.icon = this.create("replay-icon", this.replay);
  this.label = this.createText("replay-label", this.localizationManager.getString(LocalizationConstants.MSG_REPLAY), this.replay);
  ReplayOverlayMediator.__super__.onRegister.call(this);
};

/**
*/
ReplayOverlayMediator.prototype.onclick = function(event) {
  event.stopImmediatePropagation();
  this.sendNotification(Notifications.REPLAY);
  return false;
};

/**
 * The ChangeActiveStateCommand class.
 *   
 * @constructor
 * @private
 * @extends {puremvc.SimpleCommand}
*/
function ChangeActiveStateCommand() {
  ChangeActiveStateCommand.__super__.constructor.call(this);
}


__extends(ChangeActiveStateCommand, puremvc.SimpleCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
ChangeActiveStateCommand.prototype.execute = function(notification) {
  var config, proxy, state;
  config = this.facade.retrieveProxy(ConfigurationProxy.NAME);
  state = config.getControls().mode !== ControlsMode.PERSISTENT ? notification.getBody() : ActiveState.ACTIVE;
  proxy = this.facade.retrieveProxy(ApplicationStateProxy.NAME);
  proxy.setActiveState(state);
};

/**
 * The DataBoundConfigurationProxy class.
 *   
 * @constructor
 * @private
 * @extends {ModuleProxy}
 * @param {Object} data
*/
function DataBoundConfigurationProxy(data) {
  DataBoundConfigurationProxy.__super__.constructor.call(this, data);
}


__extends(DataBoundConfigurationProxy, ModuleProxy);


/** @static
*/
DataBoundConfigurationProxy.NAME = ModuleProxy.NAME;

DataBoundConfigurationProxy.prototype.bindings = null;

DataBoundConfigurationProxy.prototype.configurationName = null;

DataBoundConfigurationProxy.prototype.configurationData = null;

DataBoundConfigurationProxy.prototype.contextName = null;

DataBoundConfigurationProxy.prototype.contextData = null;

DataBoundConfigurationProxy.prototype.value = null;

DataBoundConfigurationProxy.prototype.getConfigurationName = function() {
  return this.configurationName;
};

DataBoundConfigurationProxy.prototype.getConfigurationData = function() {
  return this.configurationData.value || {};
};

DataBoundConfigurationProxy.prototype.getContextName = function() {
  return this.contextName;
};

DataBoundConfigurationProxy.prototype.getContextData = function() {
  return this.contextData;
};

DataBoundConfigurationProxy.prototype.onRegister = function() {
  var base;
  base = this.facade.app || this.facade;
  if (!(this.configurationName != null)) {
    this.configurationName = this.facade.moduleName;
  }
  this.bindings = base.retrieveProxy(DataBindingProxy.NAME);
  this.bindings.registerConfiguration(this);
};

DataBoundConfigurationProxy.prototype.setData = function(data) {
  var key, value, _ref;
  this.data = {};
  _ref = this.defaults;
  for (key in _ref) {
    value = _ref[key];
    this.data[key] = key in data ? data[key] : value;
  }
  this.configurationData = new TokenizedObject(this.data);
  return this.data;
};

DataBoundConfigurationProxy.prototype.getValue = function(key) {
  var _ref;
  this.bindings.update();
  this.value[key] = (_ref = this.configurationData.data[key]) != null ? _ref.compile(this.bindings.getData()) : void 0;
  return this.value[key];
};

DataBoundConfigurationProxy.prototype.compile = function(context, suppressErrors) {
  if (suppressErrors == null) {
    suppressErrors = false;
  }
  if (!(this.configurationData != null)) {
    return null;
  }
  if (!(context != null)) {
    context = this.bindings.getData();
  }
  if ((this.contextName != null) && (this.contextData != null)) {
    context = Utils.clone(context);
    context[this.contextName] = this.contextData;
  }
  this.configurationData.compile(context, suppressErrors);
  this.value = this.configurationData.value;
  return this.configurationData.value;
};

/**
 * @enum {string}
 * @const
 * @private
*/

var AdNotifications = {
  BREAK_START: "adsbreakstart",
  BREAK_END: "adsbreakend",
  AD_CONTAINER_CREATED: "adscontainercreated",
  AD_LOADED: "adsloaded",
  AD_STARTED: "adsstarted",
  AD_TIME_UPDATE: "adstimeupdate",
  AD_TIME_REMAINING: "adstimeremaining",
  AD_DURATION_CHANGE: "adsdurationchange",
  AD_ENDED: "adsended",
  AD_ERROR: "adserror",
  AD_PLAY: "adsplay",
  AD_PAUSE: "adspause",
  AD_COMPANION: "adscompanion",
  FIRST_QUARTILE: "adsfirstquartile",
  MIDPOINT: "adsmidpoint",
  THIRD_QUARTILE: "adsthirdquartile",
  LOG: "adslog",
  REQUEST: "adsrequest"
};

/** 
 * The PlayerCommand class. Base class for commands that need access 
 * to the application state or the media
 *   
 * @constructor
 * @private
 * @extends {puremvc.SimpleCommand}
*/
function PlayerCommand() {
  PlayerCommand.__super__.constructor.call(this);
}


__extends(PlayerCommand, puremvc.SimpleCommand);


PlayerCommand.prototype.applicationState = null;

PlayerCommand.prototype.media = null;

/** @override
*/
PlayerCommand.prototype.initializeNotifier = function(key) {
  var target;
  PlayerCommand.__super__.initializeNotifier.call(this, key);
  target = this.facade.app || this.facade;
  this.applicationState = target.retrieveProxy(ApplicationStateProxy.NAME);
  this.media = target.retrieveProxy(MediaProxy.NAME);
};

/** 
 * The AdContentEndedCommand class.
 *   
 * @constructor
 * @private
 * @extends {puremvc.SimpleCommand}
*/
function AdCommand() {
  AdCommand.__super__.constructor.call(this);
}


__extends(AdCommand, PlayerCommand);


AdCommand.prototype.ads = null;

AdCommand.prototype.appState = null;

/** @override
*/
AdCommand.prototype.initializeNotifier = function(key) {
  AdCommand.__super__.initializeNotifier.call(this, key);
  this.ads = this.facade.retrieveProxy(ModuleProxy.NAME);
  this.appState = this.facade.retrieveProxy(ApplicationStateProxy.NAME);
};

/** 
 * The AdStartCommand class.
 *   
 * @constructor
 * @private
 * @extends {puremvc.MacroCommand}
*/
function AdStartCommand() {
  AdStartCommand.__super__.constructor.call(this);
}


__extends(AdStartCommand, puremvc.MacroCommand);


AdStartCommand.prototype.ads = null;

/** @override
*/
AdStartCommand.prototype.initializeNotifier = function(key) {
  AdStartCommand.__super__.initializeNotifier.call(this, key);
  this.ads = this.facade.retrieveProxy(AdProxy.NAME);
};

/** @override
*/
AdStartCommand.prototype.initializeMacroCommand = function() {
  this.addSubCommand(PlayRequestCommand);
};

/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
AdStartCommand.prototype.execute = function(notification) {
  var playback;
  AdStartCommand.__super__.execute.call(this, notification);
  this.facade.logger.debug("AdStartCommand");
  playback = this.facade.app.retrieveProxy(PlaybackProxy.NAME);
  if (playback.initialized === false) {
    this.facade.app.sendNotification(Notifications.INITIALIZED);
  }
  this.ads.start();
  this.facade.app.sendNotification(Notifications.CHANGE_PLAY_STATE, PlayState.PLAYING);
};

/** 
 * The AdPlayCommand class.
 *   
 * @constructor
 * @private
 * @extends {AdCommand}
*/
function AdPlayCommand() {
  AdPlayCommand.__super__.constructor.call(this);
}


__extends(AdPlayCommand, AdCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
AdPlayCommand.prototype.execute = function(notification) {
  this.facade.logger.debug("AdPlayCommand");
  if (this.ads.getStarted() === false) {
    this.sendNotification(Notifications.START, true);
    return;
  }
  this.ads.play();
  this.facade.app.sendNotification(Notifications.CHANGE_PLAY_STATE, PlayState.PLAYING);
};

/** 
 * The AdPauseCommand class.
 *   
 * @constructor
 * @private
 * @extends {AdCommand}
*/
function AdPauseCommand() {
  AdPauseCommand.__super__.constructor.call(this);
}


__extends(AdPauseCommand, AdCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
AdPauseCommand.prototype.execute = function(notification) {
  this.facade.logger.debug("AdPauseCommand");
  this.ads.pause();
  this.facade.app.sendNotification(Notifications.CHANGE_PLAY_STATE, PlayState.PAUSED);
};

/** 
 * The AdTogglePlayPauseCommand class.
 *   
 * @constructor
 * @private
 * @extends {AdCommand}
*/
function AdTogglePlayPauseCommand() {
  AdTogglePlayPauseCommand.__super__.constructor.call(this);
}


__extends(AdTogglePlayPauseCommand, AdCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
AdTogglePlayPauseCommand.prototype.execute = function(notification) {
  var note;
  this.facade.logger.debug("AdTogglePlayPauseCommand");
  if (this.ads.getPaused() || this.ads.getStarted() === false) {
    note = Notifications.PLAY;
  } else {
    note = Notifications.PAUSE;
  }
  this.sendNotification(note, true);
};

/** 
 * The AdVolumeChangeCommand class.
 *   
 * @constructor
 * @private
 * @extends {AdCommand}
*/
function AdVolumeChangeCommand() {
  AdVolumeChangeCommand.__super__.constructor.call(this);
}


__extends(AdVolumeChangeCommand, AdCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
AdVolumeChangeCommand.prototype.execute = function(notification) {
  this.facade.logger.debug("AdVolumeChangeCommand");
  this.ads.setVolume(notification.getBody());
};

/**
 * The EndedCommand class.
 *   
 * @constructor
 * @private
 * @extends {puremvc.SimpleCommand}
*/
function EndedCommand() {
  EndedCommand.__super__.constructor.call(this);
}


__extends(EndedCommand, puremvc.SimpleCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
EndedCommand.prototype.execute = function(notification) {
  var config;
  this.facade.logger.debug("EndedCommand", notification);
  config = this.facade.retrieveProxy(ConfigurationProxy.NAME);
  if (config.getLoop() === true) {
    this.sendNotification(Notifications.REPLAY);
  } else {
    this.sendNotification(Notifications.CHANGE_PLAY_STATE, PlayState.ENDED);
    this.sendNotification(Notifications.CHANGE_ACTIVE_STATE, ActiveState.ACTIVE);
  }
};

/**
 * The StartCommand class.
 *   
 * @constructor
 * @private
 * @extends {puremvc.SimpleCommand}
*/
function StartCommand() {
  StartCommand.__super__.constructor.call(this);
}


__extends(StartCommand, puremvc.SimpleCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
StartCommand.prototype.execute = function(notification) {
  var mediaProxy;
  this.facade.logger.debug("StartCommand");
  mediaProxy = this.facade.retrieveProxy(MediaProxy.NAME);
  this.sendNotification(Notifications.DISPLAY_TIME, {
    currentTime: 0,
    duration: mediaProxy.getDuration()
  });
  this.sendNotification(Notifications.STARTED, notification.getBody());
  this.sendNotification(Notifications.CHANGE_ACTIVE_STATE, ActiveState.INACTIVE);
};

/**
 * The PlayCommand class.
 *   
 * @constructor
 * @private
 * @extends {puremvc.MacroCommand}
*/
function PlayCommand() {
  PlayCommand.__super__.constructor.call(this);
}


__extends(PlayCommand, puremvc.MacroCommand);


/** @override
*/
PlayCommand.prototype.initializeMacroCommand = function() {
  this.addSubCommand(PlayRequestCommand);
};

/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
PlayCommand.prototype.execute = function(notification) {
  var mediaProxy, playbackProxy, userInitiated;
  this.facade.logger.debug("PlayCommand");
  PlayCommand.__super__.execute.call(this, notification);
  userInitiated = notification.getBody();
  mediaProxy = this.facade.retrieveProxy(MediaProxy.NAME);
  playbackProxy = this.facade.retrieveProxy(PlaybackProxy.NAME);
  if (userInitiated && playbackProxy.initialized !== true) {
    this.sendNotification(Notifications.INITIALIZED);
  }
  if (playbackProxy.initialized !== true || (!mediaProxy.getSrc() && !mediaProxy.getSource())) {
    return;
  }
  if (!playbackProxy.getStarted()) {
    this.sendNotification(Notifications.START);
  }
  playbackProxy.play();
};

/**
 * The PauseCommand class.
 *   
 * @constructor
 * @private
 * @extends {puremvc.SimpleCommand}
*/
function PauseCommand() {
  PauseCommand.__super__.constructor.call(this);
}


__extends(PauseCommand, puremvc.SimpleCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
PauseCommand.prototype.execute = function(notification) {
  var playbackProxy;
  playbackProxy = this.facade.retrieveProxy(PlaybackProxy.NAME);
  playbackProxy.pause();
  this.sendNotification(Notifications.CHANGE_ACTIVE_STATE, ActiveState.ACTIVE);
};

/**
 * The TogglePlayPauseCommand class.
 *   
 * @constructor
 * @private
 * @extends {puremvc.SimpleCommand}
*/
function TogglePlayPauseCommand() {
  TogglePlayPauseCommand.__super__.constructor.call(this);
}


__extends(TogglePlayPauseCommand, puremvc.SimpleCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
TogglePlayPauseCommand.prototype.execute = function(notification) {
  var appStateProxy, note, playbackProxy;
  this.facade.logger.debug("TogglePlayPauseCommand");
  appStateProxy = this.facade.retrieveProxy(ApplicationStateProxy.NAME);
  playbackProxy = this.facade.retrieveProxy(PlaybackProxy.NAME);
  switch (appStateProxy.getPlayState()) {
    case PlayState.ENDED:
      note = Notifications.REPLAY;
      break;
    case PlayState.PAUSED:
    case PlayState.READY:
      note = Notifications.PLAY;
      break;
    case PlayState.PLAYING:
      note = Notifications.PAUSE;
      break;
    case PlayState.WAITING:
      if (this.facade.getVideo().paused === true) {
        note = Notifications.PLAY;
      } else {
        note = Notifications.PAUSE;
      }
  }
  this.sendNotification(note, true);
};

/** 
 * The AdContentEndedCommand class.
 *   
 * @constructor
 * @private
 * @extends {AdCommand}
*/
function AdContentEndedCommand() {
  AdContentEndedCommand.__super__.constructor.call(this);
}


__extends(AdContentEndedCommand, AdCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
AdContentEndedCommand.prototype.execute = function(notification) {
  this.facade.logger.debug("AdContentEndedCommand");
  this.ads.contentEnded();
};

/** 
 * The AdContentStartedCommand class.
 *   
 * @constructor
 * @private
 * @extends {AdCommand}
*/
function AdContentStartedCommand() {
  AdContentStartedCommand.__super__.constructor.call(this);
}


__extends(AdContentStartedCommand, AdCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
AdContentStartedCommand.prototype.execute = function(notification) {
  this.facade.logger.debug("AdContentStartedCommand");
  this.ads.contentStarted();
};

/** 
 * The PluginProxy class.
 *   
 * @param {Object} config
 * @constructor
 * @private
 * @extends {DataBoundConfigurationProxy}
*/
function PluginProxy(config) {
  PluginProxy.__super__.constructor.call(this, config);
}


__extends(PluginProxy, DataBoundConfigurationProxy);


/** @static
*/
PluginProxy.NAME = ModuleProxy.NAME;

PluginProxy.prototype.enabled = true;

PluginProxy.prototype.loaded = false;

PluginProxy.prototype.plugin = null;

/**
*/
PluginProxy.prototype.load = function(loaded) {
  var script,
    _this = this;
  script = this.getScript();
  if ((script != null) && script !== "") {
    Utils.loadAMPScript(script, function() {
      _this.loaded = true;
      if (typeof loaded === "function") {
        loaded(true);
      }
    });
  } else {
    this.loaded = false;
    if (typeof loaded === "function") {
      loaded(false);
    }
  }
};

/**
*/
PluginProxy.prototype.getLoaded = function() {
  return this.loaded;
};

/**
*/
PluginProxy.prototype.getScript = function() {
  var plugin, script;
  plugin = this.getConfigurationData().plugin;
  script = plugin != null ? plugin.js || plugin : "";
  return script;
};

/**
*/
PluginProxy.prototype.setEnabled = function(value) {
  this.enabled = value;
  return value;
};

PluginProxy.prototype.getEnabled = function() {
  return this.enabled;
};

/**
*/
PluginProxy.prototype.createPlugin = function() {};

/**
*/
PluginProxy.prototype.initialize = function() {
  this.plugin = this.createPlugin();
};

/**
*/
PluginProxy.prototype.error = function(err) {
  this.facade.logger.error("[AMP " + (this.facade.getModuleName().toUpperCase()) + " Error]", err);
};

/** 
 * The AdProxy class.
 *   
 * @constructor
 * @private 
 * @extends {PluginProxy}
 * @param {Object} config
 * @implements {IDataBindingContext}
*/
function AdProxy(config) {
  AdProxy.__super__.constructor.call(this, config);
}


__extends(AdProxy, PluginProxy);


/** @static
*/
AdProxy.NAME = PluginProxy.NAME;

AdProxy.prototype.inprogress = false;

AdProxy.prototype.paused = false;

AdProxy.prototype.started = false;

AdProxy.prototype.adVO = null;

AdProxy.prototype.contextName = "ad";

/**
 * Gets the context data for this proxy.
 * 
 * @returns {Object} The contenxt data for this proxy
*/
AdProxy.prototype.getContextData = function() {
  return this.adVO || {};
};

/**
*/
AdProxy.prototype.setCompanions = function(value) {
  this.adVO.companions = value;
  this.sendNotification(AdNotifications.AD_COMPANION, this.adVO);
  return value;
};

AdProxy.prototype.getCompanions = function() {
  var _ref;
  return (_ref = this.adVO) != null ? _ref.companions : void 0;
};

/**
*/
AdProxy.prototype.getInProgress = function() {
  return this.inprogress;
};

AdProxy.prototype.setInProgress = function(value) {
  return this.inprogress = value;
};

/**
*/
AdProxy.prototype.getStarted = function() {
  return this.started;
};

/**
*/
AdProxy.prototype.setStarted = function(value) {
  this.started = value;
  return value;
};

/**
*/
AdProxy.prototype.getPaused = function() {
  return this.paused;
};

AdProxy.prototype.setPaused = function(value) {
  this.paused = value;
  return value;
};

/**
*/
AdProxy.prototype.play = function() {
  this.setPaused(false);
};

/**
*/
AdProxy.prototype.pause = function() {
  this.setPaused(true);
};

/**
*/
AdProxy.prototype.breakStart = function() {};

/**
*/
AdProxy.prototype.breakEnd = function() {
  this.setInProgress(false);
  this.reset();
};

/**
*/
AdProxy.prototype.error = function(err, breakEnd) {
  var msg;
  if (breakEnd == null) {
    breakEnd = true;
  }
  msg = (typeof err.getMessage === "function" ? err.getMessage() : void 0) || err.message;
  this.facade.logger.error("[AMP AD ERROR]", "" + msg + " Skipping ad content.", err);
  if (this.adVO == null) {
    this.adVO = {};
  }
  this.adVO.error = err;
  this.sendNotification(AdNotifications.AD_ERROR, this.adVO);
  if (breakEnd === true) {
    this.sendNotification(AdNotifications.BREAK_END);
  }
};

/**
*/
AdProxy.prototype.engage = function(media) {
  if (this.getEnabled() === false) {
    return;
  }
  this.setStarted(false);
  if (this.getInProgress()) {
    this.reset();
    this.facade.app.sendNotification(Notifications.REMOVE_APPLICATION_STATE, "ad-mode");
  }
  this.engageAds();
};

/**
*/
AdProxy.prototype.engageAds = function() {
  this.facade.app.removeCommand(Notifications.START);
  this.facade.app.removeCommand(Notifications.PLAY);
  this.facade.app.removeCommand(Notifications.PAUSE);
  this.facade.app.removeCommand(Notifications.ENDED);
  this.facade.app.removeCommand(UserNotifications.PLAY);
  this.facade.app.removeCommand(UserNotifications.PAUSE);
  this.facade.app.removeCommand(UserNotifications.TOGGLE_PLAY_PAUSE);
  if (this.facade.isFullscreenDevice()) {
    this.facade.app.removeCommand(Notifications.CHANGE_DURATION);
  }
  this.facade.removeCommand(Notifications.STARTED);
  this.facade.removeCommand(Notifications.ENDED);
  this.facade.registerCommand(Notifications.START, AdStartCommand);
  this.facade.registerCommand(Notifications.PLAY, AdPlayCommand);
  this.facade.registerCommand(Notifications.PAUSE, AdPauseCommand);
  this.facade.registerCommand(UserNotifications.PLAY, AdPlayCommand);
  this.facade.registerCommand(UserNotifications.PAUSE, AdPauseCommand);
  this.facade.registerCommand(UserNotifications.TOGGLE_PLAY_PAUSE, AdTogglePlayPauseCommand);
  this.facade.registerCommand(Notifications.VOLUME_CHANGE, AdVolumeChangeCommand);
};

/**
*/
AdProxy.prototype.reset = function() {
  this.facade.removeCommand(Notifications.START);
  this.facade.removeCommand(Notifications.PLAY);
  this.facade.removeCommand(Notifications.PAUSE);
  this.facade.removeCommand(UserNotifications.PLAY);
  this.facade.removeCommand(UserNotifications.PAUSE);
  this.facade.removeCommand(UserNotifications.TOGGLE_PLAY_PAUSE);
  this.facade.removeCommand(Notifications.VOLUME_CHANGE);
  this.facade.app.registerCommand(Notifications.START, StartCommand);
  this.facade.app.registerCommand(Notifications.PLAY, PlayCommand);
  this.facade.app.registerCommand(Notifications.PAUSE, PauseCommand);
  this.facade.app.registerCommand(Notifications.ENDED, EndedCommand);
  this.facade.app.registerCommand(UserNotifications.PLAY, PlayCommand);
  this.facade.app.registerCommand(UserNotifications.PAUSE, PauseCommand);
  this.facade.app.registerCommand(UserNotifications.TOGGLE_PLAY_PAUSE, TogglePlayPauseCommand);
  if (this.facade.isFullscreenDevice()) {
    this.facade.app.registerCommand(Notifications.CHANGE_DURATION, ChangeDurationCommand);
  }
  this.facade.registerCommand(Notifications.STARTED, AdContentStartedCommand);
  this.facade.registerCommand(Notifications.ENDED, AdContentEndedCommand);
};

/**
*/
AdProxy.prototype.start = function() {
  if (this.getEnabled() === false) {
    this.sendNotification(AdNotifications.BREAK_END);
    return false;
  }
  this.setStarted(true);
  return true;
};

/**
*/
AdProxy.prototype.contentPlay = function() {
  this.facade.app.sendNotification(Notifications.PLAY, true);
};

/**
*/
AdProxy.prototype.contentPause = function() {
  this.facade.app.video.pause();
};

/**
*/
AdProxy.prototype.contentStarted = function() {};

/**
*/
AdProxy.prototype.contentEnded = function() {};

/**
*/
AdProxy.prototype.setVolume = function(value) {};

/**
*/
AdProxy.prototype.getVolume = function() {};

/**
 * The PlayerAPI class.
 * 
 * @param         {!Player}         module      The base module this API wraps.
 * @param         {EventDispatcher} dispatcher  The event dispatcher
 * @constructor
 * @extends       {ModuleAPI}
*/
function PlayerAPI(module, dispatcher) {
  ModuleAPI.attachModuleDispatcher(module, new PlayerDispatcher(this, dispatcher));
  this.getContainer = function() {
    return module.getViewComponent();
  };
  this.getVideo = function() {
    return module.getVideo();
  };
  this.getConfig = function() {
    return module.getConfig();
  };
  this.destroy = function() {
    return module.destroy();
  };
}


__extends(PlayerAPI, ModuleAPI);


/**
 * @return {HTMLElement} The container div.
 * @expose
*/
PlayerAPI.prototype.getContainer = function() {};

/**
 * @return {HTMLObject|HTMLVideo} The video playback DOM element.
 * @expose
*/
PlayerAPI.prototype.getVideo = function() {};

/**
 * @return {Object} The configuration object.
 * @expose
*/
PlayerAPI.prototype.getConfig = function() {};

/**
 * @param   {string}  binding
 *    A data bound string to evaluate.
 * 
 * @return {Object} 
 *    The evaluated result
 * 
 * @expose
*/
PlayerAPI.prototype.evaluateBinding = function(binding) {};

/**
 * Determines if the core can play a given mimeType.
 * 
 * @param   {string}  type
 *    The mimetype to check.
 * 
 * @return  {string}  "" 
 *    if the core can't play the mimeType
 * 
 * @expose
*/
PlayerAPI.prototype.canPlayType = function(type) {};

/**
 * Loads the video.
 * 
 * @expose
*/
PlayerAPI.prototype.load = function() {};

/**
 * Plays the currently loaded video.
 * 
 * @expose
*/
PlayerAPI.prototype.play = function() {};

/**
 * Plays the currently loaded video from its start time.
 * 
 * @expose
*/
PlayerAPI.prototype.replay = function() {};

/**
 * Pauses the currently loaded video.
 * 
 * @expose
*/
PlayerAPI.prototype.pause = function() {};

/**
 * Ends video playback.
 * 
 * @expose
*/
PlayerAPI.prototype.end = function() {};

/**
 * Sets user params.
 * 
 * @param {Object} value The user params object.
 * @expose
*/
PlayerAPI.prototype.setParams = function(value) {};

/**
 * Gets user params.
 * 
 * @return {Object} The user params object.
 * @expose
*/
PlayerAPI.prototype.getParams = function() {};

/**
 * Sets auto play flag.
 * 
 * @param {boolean} value The autoplay flash.
 * @expose
*/
PlayerAPI.prototype.setAutoplay = function(value) {};

/**
 * Gets auto play flag.
 * 
 * @return {boolean} The autoplay flash.
 * @expose
*/
PlayerAPI.prototype.getAutoplay = function() {};

/**
 * Sets player's loop flag.
 * 
 * @param {boolean} value The loop flag.
 * @expose
*/
PlayerAPI.prototype.setLoop = function(value) {};

/**
 * Gets player's loop flag.
 * 
 * @return {boolean} The loop flag.
 * @expose
*/
PlayerAPI.prototype.getLoop = function() {};

/**
 * Sets player's muted value.
 * 
 * @param {boolean} value The muted value.
 * @expose
*/
PlayerAPI.prototype.setMuted = function(value) {};

/**
 * Gets player's muted value.
 * 
 * @return {boolean} The muted value.
 * @expose
*/
PlayerAPI.prototype.getMuted = function() {};

/**
 * Mutes the player.
*/
PlayerAPI.prototype.mute = function() {
  return this.setMuted(true);
};

/**
 * Unmutes the player.
*/
PlayerAPI.prototype.unmute = function() {
  return this.setMuted(false);
};

/**
 * Sets the media object.
 * 
 * @param {Object} value The media object for the video to play.
 * @expose
*/
PlayerAPI.prototype.setMedia = function(value) {};

/**
 * Gets the media object.
 * 
 * @return {Object} The media object for the video to play.
 * @expose
*/
PlayerAPI.prototype.getMedia = function() {};

/**
 * Sets the current time of the video.
 * 
 * @param {number} value The desired time to seek to.
 * @expose
*/
PlayerAPI.prototype.setCurrentTime = function(value) {};

/**
 * Gets the current time of the video.
 * 
 * @return {number} The current playhead time.
 * @expose
*/
PlayerAPI.prototype.getCurrentTime = function() {};

/**
 * Gets the current time of the video.
 * 
 * @return {number} The current time of the video.
 * @expose
*/
PlayerAPI.prototype.getDuration = function() {};

/**
 * Sets the source url of video.
 * 
 * @param {string} value The source url of the video to play.
 * @expose
*/
PlayerAPI.prototype.setSrc = function(value) {};

/**
 * Gets the source url of video.
 * 
 * @return {string} The source url of the video to play.
 * @expose
*/
PlayerAPI.prototype.getSrc = function() {};

/**
 * Sets the source url of video.
 * 
 * @param {Array.<Object>} value An array of source objects to choose from.
 * @expose
*/
PlayerAPI.prototype.setSource = function(value) {};

/**
 * Gets the source url of video.
 * 
 * @return {Array.<Object>} An array of source objects to choose from.
 * @expose
*/
PlayerAPI.prototype.getSource = function() {};

/**
 * Sets the source url of video.
 * 
 * @param {number} value The source url of the video to play.
 * @expose
*/
PlayerAPI.prototype.setVolume = function(value) {};

/**
 * Gets the source url of video.
 * 
 * @return {number} The volume a number between 0 and 1.
 * @expose
*/
PlayerAPI.prototype.getVolume = function() {};

/**
 * Gets the source url of video.
 * 
 * @return {boolean} The source url of the video.
 * @expose
*/
PlayerAPI.prototype.getSeeking = function() {};

/**
 * Gets the source url of video.
 * 
 * @return {boolean} The source url of the video.
 * @expose
*/
PlayerAPI.prototype.getPaused = function() {};

/**
 * Gets the source url of video.
 * 
 * @return {number} The source url of the video.
 * @expose
*/
PlayerAPI.prototype.getEnded = function() {};

/**
 * Enters the player into full screen mode.
 * 
 * @expose
*/
PlayerAPI.prototype.enterFullScreen = function() {};

/**
 * Exits the player out of full screen mode.
 * 
 * @expose
*/
PlayerAPI.prototype.exitFullScreen = function() {};

/** 
 * Destroys the module 
 * 
 * @expose
*/
PlayerAPI.prototype.destroy = function() {};

/** 
 * Records a content change
 * 
 * @param {Object} content
 *    An object representing the new content
 * 
 * @expose
*/
PlayerAPI.prototype.recordContentChange = function(content) {};

/**
 * The HTMLPlayerAPI class.
 * 
 * @param         {!HTMLPlayer} module  The base module this API wraps.
 * @param         {EventDispatcher} dispatcher  The event dispatcher
 * @constructor
 * @extends {PlayerAPI}
*/
function HTMLPlayerAPI(module, dispatcher) {
  var bindings, config, media, params, player;
  HTMLPlayerAPI.__super__.constructor.call(this, module, dispatcher);
  player = module;
  media = player.retrieveProxy(MediaProxy.NAME);
  bindings = player.retrieveProxy(DataBindingProxy.NAME);
  config = player.retrieveProxy(ConfigurationProxy.NAME);
  params = player.retrieveProxy(ParamsProxy.NAME);
  this.evaluateBinding = bindings.evaluateBinding.bind(bindings);
  this.recordContentChange = function(content) {
    player.sendNotification(Notifications.RECORD_CONTENT_CHANGE, content);
  };
  this.canPlayType = function(type) {
    return player.retrieveProxy(PlaybackProxy.NAME).canPlayType(type);
  };
  this.load = function() {
    player.sendNotification(Notifications.LOAD);
  };
  this.play = function() {
    player.sendNotification(Notifications.PLAY, true);
  };
  this.replay = function() {
    player.sendNotification(Notifications.REPLAY);
  };
  this.pause = function() {
    player.sendNotification(Notifications.PAUSE);
  };
  this.end = function() {
    player.sendNotification(Notifications.END);
  };
  this.setParams = function(value) {
    player.sendNotification(Notifications.CHANGE_PARAMS, value);
    return value;
  };
  this.getParams = params.getData.bind(params);
  this.setAutoplay = function(value) {
    player.sendNotification(Notifications.CHANGE_AUTOPLAY, value);
    return value;
  };
  this.getAutoplay = config.getAutoplay.bind(config);
  this.setLoop = function(value) {
    player.sendNotification(Notifications.CHANGE_LOOP, value);
    return value;
  };
  this.getLoop = config.getLoop.bind(config);
  this.setMuted = function(value) {
    player.sendNotification(Notifications.CHANGE_MUTED, value);
    return value;
  };
  this.getMuted = function() {
    return player.retrieveProxy(PlaybackProxy.NAME).getMuted();
  };
  this.setMedia = function(value) {
    player.sendNotification(Notifications.SET_MEDIA, value);
    return value;
  };
  this.getMedia = media.getData.bind(media);
  this.setCurrentTime = function(value) {
    player.sendNotification(Notifications.SEEK, value);
    return value;
  };
  this.getCurrentTime = function() {
    return player.retrieveProxy(PlaybackProxy.NAME).getCurrentTime();
  };
  this.getDuration = media.getDuration.bind(media);
  this.setSrc = function(value) {
    player.sendNotification(Notifications.SET_MEDIA, {
      src: value
    });
    return value;
  };
  this.getSrc = function() {
    return player.retrieveProxy(PlaybackProxy.NAME).getSrc();
  };
  this.setSource = function(value) {
    player.sendNotification(Notifications.SET_MEDIA, {
      source: value
    });
    return value;
  };
  this.getSource = media.getSource.bind(media);
  this.setVolume = function(value) {
    player.sendNotification(Notifications.CHANGE_VOLUME, value);
    return value;
  };
  this.getVolume = function() {
    return player.retrieveProxy(PlaybackProxy.NAME).getVolume();
  };
  this.getSeeking = function() {
    return player.retrieveProxy(PlaybackProxy.NAME).getSeeking();
  };
  this.getPaused = function() {
    return player.retrieveProxy(PlaybackProxy.NAME).getPaused();
  };
  this.getEnded = function() {
    return player.retrieveProxy(PlaybackProxy.NAME).getEnded();
  };
  this.enterFullScreen = function() {
    player.sendNotification(Notifications.CHANGE_DISPLAY_STATE, DisplayState.FULL_SCREEN);
  };
  this.exitFullScreen = function() {
    player.sendNotification(Notifications.CHANGE_DISPLAY_STATE, DisplayState.NORMAL);
  };
}


__extends(HTMLPlayerAPI, PlayerAPI);

/** 
 * The base player class.
 *   
 * @param {Object} config
 * @param {Object} viewComponent
 * @param {EventDispatcher} dispatcher
 * @constructor
 * @private
 * @extends {Module}
*/
function Player(config, viewComponent, dispatcher) {
  this.dispatcher = dispatcher;
  Player.__super__.constructor.call(this, config, viewComponent);
}


__extends(Player, Module);


Player.prototype.moduleName = "amp";

Player.prototype.playerType = null;

Player.prototype.dispatcher = null;

Player.prototype.config = null;

Player.prototype.video = null;

Player.prototype.parent = null;

/**
*/
Player.prototype.getVideo = function() {
  return this.video;
};

/**
*/
Player.prototype.setVideo = function(video) {
  this.video = video;
  return video;
};

/**
*/
Player.prototype.getPlayerType = function() {
  return this.playerType;
};

/**
*/
Player.prototype.createPlugins = function() {
  var def, init, key, plugin, plugins, type, value, _ref;
  plugins = [];
  type = this.getPlayerType();
  _ref = AMP.plugins;
  for (key in _ref) {
    value = _ref[key];
    if (!(key in this.config)) {
      continue;
    }
    init = this.config[key];
    if (!(init != null) || init.enabled === false) {
      continue;
    }
    def = value[type];
    if (!(def != null)) {
      this.logger.debug("Plugin could not be found: " + key);
      continue;
    }
    plugin = new def(this, init);
    plugins.push(plugin);
  }
  this.sendNotification(PluginNotifications.REGISTER_PLUGINS, plugins);
  return plugins;
};

/**
*/
Player.prototype.createVideo = function() {
  return null;
};

/** @override
*/
Player.prototype.initialize = function() {
  Player.__super__.initialize.call(this);
  this.video = this.createVideo();
  this.createPlugins();
};

/** @override
*/
Player.prototype.listNotificationEvents = function() {
  return Player.__super__.listNotificationEvents.call(this).concat([Notifications.READY, Notifications.LOAD_START, Notifications.TIME_UPDATE, Notifications.DURATION_CHANGE, Notifications.ERROR, Notifications.LOADED_METADATA, Notifications.WAITING, Notifications.SEEKING, Notifications.SEEKED, Notifications.ENDED, Notifications.PROGRESS, Notifications.CAN_PLAY, Notifications.CAN_PLAY_THROUGH, Notifications.PAUSE, Notifications.PLAY, Notifications.PLAYING, Notifications.STARTED, Notifications.PLAY_REQUEST, Notifications.MEDIUM_CHANGE, Notifications.TEMPORAL_TYPE_CHANGE, Notifications.MEDIA_CHANGE, Notifications.VOLUME_CHANGE, Notifications.FAIL_OVER_ATTEMPT, Notifications.PLAYBACK_TARGET_AVAILABLE, Notifications.PLAYBACK_TARGET_CHANGE, Notifications.PLAY_STATE_CHANGE, SecurityNotifications.AUTHORIZE, SecurityNotifications.AUTHORIZED]);
};

/** 
 * The HTMLPlayer class.
 * 
 * @param {Object} config
 * @param {Object} viewComponent
 * @param {EventDispatcher} dispatcher
 * @constructor
 * @private
 * @extends {Player}
*/
function HTMLPlayer(config, viewComponent, dispatcher) {
  HTMLPlayer.__super__.constructor.call(this, config, viewComponent, dispatcher);
}


__extends(HTMLPlayer, Player);


HTMLPlayer.prototype.playerType = "html";

/** @override
*/
HTMLPlayer.prototype.createAPI = function() {
  return new HTMLPlayerAPI(this, this.dispatcher);
};

/** @override
*/
HTMLPlayer.prototype.createVideo = function() {
  var video, viewComponent;
  video = new VideoMediator("html5", "video");
  viewComponent = video.getViewComponent();
  if (viewComponent.dataset == null) {
    viewComponent.dataset = {};
  }
  this.sendNotification(Notifications.PLAYBACK_CORE_CHANGE, video);
  return viewComponent;
};

/** @override
*/
HTMLPlayer.prototype.createModel = function() {
  var appState, bindings, playbackProxy;
  bindings = new DataBindingProxy();
  this.registerProxy(bindings);
  this.registerProxy(new SecurityProxy());
  this.registerProxy(new ConfigurationProxy(this.config));
  this.registerProxy(new LocalizationProxy(this.config));
  appState = new ApplicationStateProxy();
  this.registerProxy(appState);
  appState.setRenderMode(RenderMode.HTML);
  playbackProxy = new PlaybackProxy();
  this.registerProxy(playbackProxy);
  this.registerProxy(new MediaProxy());
  this.registerProxy(new PlayerProxy(playbackProxy));
  this.registerProxy(new ParamsProxy(this.config.params));
  bindings.initialize();
};

/** @override
*/
HTMLPlayer.prototype.createView = function() {
  var app, overlay, _ref;
  app = this.getViewComponent();
  this.registerMediator(new PlayerMediator("html5", app));
  this.registerMediator(new PluginAdapter());
  this.registerMediator(new VideoLayerMediator());
  this.registerMediator(new PosterMediator());
  overlay = new OverlayLayerMediator();
  this.registerMediator(overlay);
  this.registerMediator(new LoadingOverlayMediator());
  this.registerMediator(new contextMenuMediator());
  this.registerMediator(new WaitingOverlayMediator());
  this.registerMediator(new ReplayOverlayMediator());
  this.registerMediator(new EndSlateMediator());
  if (((_ref = this.config.titlebar) != null ? _ref.enabled : void 0) === true) {
    this.registerMediator(new TitleBarMediator());
  }
  this.registerMediator(new ErrorLayerMediator());
};

/** @override
*/
HTMLPlayer.prototype.createController = function() {
  this.registerCommand(Notifications.PLAY, PlayCommand);
  this.registerCommand(Notifications.PAUSE, PauseCommand);
  this.registerCommand(Notifications.CHANGE_PLAY_STATE, ChangePlayStateCommand);
  this.registerCommand(Notifications.TOGGLE_FULL_SCREEN, ToggleFullScreenCommand);
  this.registerCommand(Notifications.CHANGE_DISPLAY_STATE, ChangeDisplayStateCommand);
  this.registerCommand(Notifications.TOGGLE_ACTIVE, ToggleActiveCommand);
  this.registerCommand(Notifications.CHANGE_ACTIVE_STATE, ChangeActiveStateCommand);
  this.registerCommand(Notifications.CHANGE_MEDIA, ChangeMediaCommand);
  this.registerCommand(Notifications.MEDIA_CHANGE, MediaChangeCommand);
  this.registerCommand(Notifications.SET_MEDIA, SetMediaCommand);
  this.registerCommand(Notifications.UPDATE_DATA_BINDINGS, UpdateDataBindingsCommand);
  this.registerCommand(Notifications.START, StartCommand);
  this.registerCommand(Notifications.SEEK, SeekCommand);
  this.registerCommand(Notifications.SEEKING, SeekingCommand);
  this.registerCommand(Notifications.SEEKED, SeekedCommand);
  this.registerCommand(Notifications.CHANGE_VOLUME, ChangeVolumeCommand);
  this.registerCommand(Notifications.CHANGE_MUTED, ChangeMutedCommand);
  this.registerCommand(Notifications.CHANGE_AUTOPLAY, ChangeAutoplayCommand);
  this.registerCommand(Notifications.CHANGE_LOOP, ChangeLoopCommand);
  this.registerCommand(Notifications.END, EndCommand);
  this.registerCommand(Notifications.ENDED, EndedCommand);
  this.registerCommand(Notifications.REPLAY, ReplayCommand);
  this.registerCommand(Notifications.ERROR, ErrorCommand);
  this.registerCommand(Notifications.READY, ReadyCommand);
  this.registerCommand(Notifications.WAITING, WaitingCommand);
  this.registerCommand(Notifications.CHANGE_DURATION, ChangeDurationCommand);
  this.registerCommand(Notifications.CHANGE_PARAMS, ChangeParamsCommand);
  this.registerCommand(Notifications.IS_USER_ACTIVE, IsUserActiveCommand);
  this.registerCommand(SecurityNotifications.CHECK_AUTHORIZATION, CheckAuthorizationCommand);
  this.registerCommand(SecurityNotifications.AUTHORIZED, AuthorizedCommand);
  this.registerCommand(SecurityNotifications.SET_KEY, SecuritySetKeyCommand);
  this.registerCommand(SecurityNotifications.SET_TOKEN, SecuritySetTokenCommand);
  this.registerCommand(Notifications.INITIALIZED, InitializedCommand);
  this.registerCommand(Notifications.REGISTER_PLAYBACK_CORE, RegisterPlaybackCoreCommand);
  this.registerCommand(UserNotifications.TOGGLE_PLAY_PAUSE, TogglePlayPauseCommand);
  this.registerCommand(UserNotifications.SEEK, SeekCommand);
  this.registerCommand(Notifications.PLAYBACK_TARGET_CHANGE, PlaybackTargetChangeCommand);
  this.registerCommand(Notifications.RECORD_CONTENT_CHANGE, RecordContentChangeCommand);
  this.registerCommand(Notifications.TIME_UPDATE, TimeUpdateCommand);
  this.registerCommand(Notifications.TOGGLE_MUTED, ToggleMutedCommand);
};

function XMLUtils() {}

XMLUtils.createTextContent = function(xml, text) {
  var node;
  node = /[\&<>]/.test(text) ? xml.createCDATASection(text) : xml.createTextNode(text);
  return node;
};

XMLUtils.updateTextContent = function(node, str) {
  var text;
  text = XMLUtils.createTextContent(node.ownerDocument, str);
  node.removeChild(node.childNodes[0]);
  node.appendChild(text);
  return node;
};

XMLUtils.serialize = function(xml) {
  var serializer;
  if (!(xml != null)) {
    return;
  }
  if (typeof xml === "string") {
    return xml;
  }
  try {
    serializer = new XMLSerializer();
    return serializer.serializeToString(xml);
  } catch (err1) {
    try {
      serializer = document.implementation.createLSSerializer();
      return xmlSerializer.writeToString(xml);
    } catch (err3) {
      try {
        return xml.xml;
      } catch (err2) {

      }
    }
  }
};

XMLUtils.parse = function(text) {
  var parser, xmlDoc;
  if (window.DOMParser) {
    parser = new DOMParser();
    xmlDoc = parser.parseFromString(text, "text/xml");
  } else {
    xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
    xmlDoc.async = false;
    xmlDoc.loadXML(text);
  }
  return xmlDoc;
};

/**
 * Creates a new instance of MediaProxy.
 * 
 * @constructor
 * @private
 * @extends {Proxy}
*/
function FlashMediaProxy() {
  FlashMediaProxy.__super__.constructor.call(this, this.constructor.NAME, {});
}


__extends(FlashMediaProxy, puremvc.Proxy);


/** @static
*/
FlashMediaProxy.NAME = "FlashMediaProxy";

/**
*/
FlashMediaProxy.prototype.getSrc = function() {
  return this.data.src;
};

FlashMediaProxy.prototype.setSrc = function(value) {
  this.data.src = value;
  return value;
};

/**
 * The SecuritySetToken class.
 *   
 * @constructor
 * @private
 * @extends {puremvc.SimpleCommand}
*/
function SecuritySetTokenCommand() {
  SecuritySetTokenCommand.__super__.constructor.call(this);
}


__extends(SecuritySetTokenCommand, puremvc.SimpleCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
SecuritySetTokenCommand.prototype.execute = function(notification) {
  var proxy, token;
  proxy = this.facade.retrieveProxy(SecurityProxy.NAME);
  token = notification.getBody();
  proxy.setToken(token);
  proxy.setAuthorized(true);
};

/**
 * The SecuritySetToken class.
 *   
 * @constructor
 * @private
 * @extends {puremvc.SimpleCommand}
*/
function SecuritySetKeyCommand() {
  SecuritySetKeyCommand.__super__.constructor.call(this);
}


__extends(SecuritySetKeyCommand, puremvc.SimpleCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
SecuritySetKeyCommand.prototype.execute = function(notification) {
  var key, proxy;
  proxy = this.facade.retrieveProxy(SecurityProxy.NAME);
  key = notification.getBody();
  proxy.setKey(key);
};

function LocalizationWrapper(app, config) {
  this.app = app;
  this.config = config;
  LocalizationWrapper.__super__.constructor.call(this, this.constructor.NAME);
  this.proxy = new LocalizationProxy(this.config);
  this.app.registerProxy(this.proxy);
}


__extends(LocalizationWrapper, puremvc.Mediator);


LocalizationWrapper.prototype.player = null;

LocalizationWrapper.prototype.config = null;

LocalizationWrapper.prototype.proxy = null;

LocalizationWrapper.NAME = "LocalizationWrapper";

/**
*/
LocalizationWrapper.prototype.getString = function(key) {
  return this.proxy.getString(key);
};

/** @override
*/
LocalizationWrapper.prototype.listNotificationInterests = function() {
  return [FlashNotifications.CREATE_FLASH_VARS, FlashNotifications.CREATE_XML];
};

/**
*/
LocalizationWrapper.prototype.handleNotification = function(notification) {
  var application, body, config, element, flashvars, key, lang, locale, locales, name, prop, text, value, xml, _ref;
  LocalizationWrapper.__super__.handleNotification.call(this, notification);
  name = notification.getName();
  body = notification.getBody();
  switch (name) {
    case FlashNotifications.CREATE_FLASH_VARS:
      flashvars = body.flashvars;
      config = body.config;
      if (config.language != null) {
        flashvars.locale_setting = config.language;
      }
      break;
    case FlashNotifications.CREATE_XML:
      xml = body.xml;
      application = xml.getElementsByTagName("application")[0];
      locales = xml.getElementsByTagName("locales")[0];
      if (!(locales != null)) {
        locales = xml.createElement("locales");
        application.appendChild(locales);
      }
      _ref = this.config.locales;
      for (lang in _ref) {
        locale = _ref[lang];
        element = xml.createElement("locale");
        element.setAttribute("id", lang);
        locales.appendChild(element);
        for (key in locale) {
          value = locale[key];
          prop = xml.createElement("property");
          prop.setAttribute("key", key);
          text = XMLUtils.createTextContent(xml, value);
          prop.appendChild(text);
          element.appendChild(prop);
        }
      }
  }
};

/** 
 * @constructor
 * @private
 * @extends {LayerMediator}
*/
function VideoMediator(componentName, viewComponent) {
  this.mediatorName = "#@{getComponentType()}-mediator";
  VideoMediator.__super__.constructor.call(this, componentName, null, null, viewComponent);
}


__extends(VideoMediator, ComponentMediator);


VideoMediator.prototype.componentType = "video";

/** 
 * @constructor
 * @private
*/
function LayerMediator() {
  LayerMediator.__super__.constructor.call(this);
}


__extends(LayerMediator, ComponentMediator);


LayerMediator.prototype.componentType = "layer";

/**
 * Registers the layer
 * 
 * @override
*/
LayerMediator.prototype.onRegister = function() {
  LayerMediator.__super__.onRegister.call(this);
  this.registerLayer();
};

/**
 * Removes the layer
 * 
 * @override
*/
LayerMediator.prototype.onRemove = function() {
  LayerMediator.__super__.onRemove.call(this);
  this.removeLayer();
};

/**
 *
*/
LayerMediator.prototype.registerLayer = function() {
  this.sendNotification(Notifications.ADD_LAYER, this.viewComponent);
};

/**
 *
*/
LayerMediator.prototype.removeLayer = function() {
  this.sendNotification(Notifications.REMOVE_LAYER, this.viewComponent);
};

/** 
 * @constructor
 * @extends {LayerMediator} 
 * @private
*/
function VideoLayerMediator() {
  VideoLayerMediator.__super__.constructor.call(this);
}


__extends(VideoLayerMediator, LayerMediator);


VideoLayerMediator.prototype.componentName = "video";

VideoLayerMediator.prototype.video = null;

/** @override
*/
VideoLayerMediator.prototype.listNotificationInterests = function() {
  return [Notifications.PLAYBACK_CORE_CHANGE];
};

/** @override
*/
VideoLayerMediator.prototype.handleNotification = function(notification) {
  var body, name, viewComponent, _ref, _ref1;
  name = notification.getName();
  body = notification.getBody();
  switch (name) {
    case Notifications.PLAYBACK_CORE_CHANGE:
      viewComponent = (_ref = this.video) != null ? typeof _ref.getViewComponent === "function" ? _ref.getViewComponent() : void 0 : void 0;
      if (viewComponent != null) {
        this.viewComponent.removeChild(viewComponent);
      }
      this.video = body;
      viewComponent = (_ref1 = this.video) != null ? typeof _ref1.getViewComponent === "function" ? _ref1.getViewComponent() : void 0 : void 0;
      if (viewComponent != null) {
        this.viewComponent.appendChild(viewComponent);
      }
  }
};

/** 
 * @constructor
 * @private
 * @extends {ModuleMediator}
*/
function PlayerMediator(componentName, viewComponent) {
  this.componentName = componentName;
  this.layers = [];
  PlayerMediator.__super__.constructor.call(this, null, null, null, viewComponent);
}


__extends(PlayerMediator, ComponentMediator);


PlayerMediator.prototype.componentType = "player";

PlayerMediator.prototype.core = null;

PlayerMediator.prototype.medium = null;

PlayerMediator.prototype.layers = null;

PlayerMediator.prototype.ready = false;

/** @override
*/
PlayerMediator.prototype.onRegister = function() {
  var device;
  PlayerMediator.__super__.onRegister.call(this);
  device = Utils.getDevice();
  if ((device != null)) {
    this.classList.add(device);
  }
};

/** @override
*/
PlayerMediator.prototype.listNotificationInterests = function() {
  return [Notifications.DISPLAY_STATE_CHANGE, Notifications.ACTIVE_STATE_CHANGE, Notifications.PLAY_STATE_CHANGE, Notifications.ADD_APPLICATION_STATE, Notifications.REMOVE_APPLICATION_STATE, Notifications.MEDIUM_CHANGE, Notifications.DURATION_CHANGE, Notifications.TEMPORAL_TYPE_CHANGE, Notifications.ADD_LAYER, Notifications.REMOVE_LAYER, Notifications.READY];
};

/** @override
*/
PlayerMediator.prototype.handleNotification = function(notification) {
  var body, layer, name, newState, oldState, state, states, _i, _len, _ref;
  name = notification.getName();
  body = notification.getBody();
  switch (name) {
    case Notifications.ACTIVE_STATE_CHANGE:
    case Notifications.PLAY_STATE_CHANGE:
    case Notifications.DISPLAY_STATE_CHANGE:
    case Notifications.MEDIUM_CHANGE:
      states = body;
      newState = states.newState;
      oldState = states.oldState;
      if ((oldState != null) && this.classList.contains(oldState)) {
        this.classList.remove(oldState);
      }
      if (newState != null) {
        this.classList.add(newState);
      }
      break;
    case Notifications.ADD_APPLICATION_STATE:
      state = body;
      this.classList.add(state);
      break;
    case Notifications.REMOVE_APPLICATION_STATE:
      state = body;
      this.classList.remove(state);
      break;
    case Notifications.TEMPORAL_TYPE_CHANGE:
      if (body === "live") {
        this.sendNotification(Notifications.ADD_APPLICATION_STATE, "live");
      } else {
        this.sendNotification(Notifications.REMOVE_APPLICATION_STATE, "live");
      }
      break;
    case Notifications.DURATION_CHANGE:
      if (body > 3600) {
        this.sendNotification(Notifications.ADD_APPLICATION_STATE, "long-form");
      } else {
        this.sendNotification(Notifications.REMOVE_APPLICATION_STATE, "long-form");
      }
      break;
    case Notifications.ADD_LAYER:
      this.addLayer(body);
      break;
    case Notifications.REMOVE_LAYER:
      this.removeLayer(body);
      break;
    case Notifications.READY:
      this.ready = true;
      _ref = this.layers;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        layer = _ref[_i];
        if (!this.viewComponent.contains(layer)) {
          this.viewComponent.appendChild(layer);
        }
      }
  }
};

/**
*/
PlayerMediator.prototype.addLayer = function(layer) {
  this.layers.push(layer);
  if (this.ready) {
    this.viewComponent.appendChild(layer);
  }
};

/**
*/
PlayerMediator.prototype.removeLayer = function(layer) {
  var index;
  if (this.viewComponent.contains(layer)) {
    this.viewComponent.removeChild(layer);
  }
  index = this.layers.indexOf(layer);
  if (index >= 0) {
    this.layers.splice(index, 1);
  }
};

/** 
 * @param {Object} viewComponent
 * @constructor
 * @private 
 * @extends {PlayerMeditator}
*/
function FlashPlayerMediator(viewComponent) {
  FlashPlayerMediator.__super__.constructor.call(this, this.type, viewComponent);
}


__extends(FlashPlayerMediator, PlayerMediator);


/**
 * The name of the this Mediator.
 * 
 * @static
 * @type {String}
*/
FlashPlayerMediator.NAME = "FlashPlayerMediator";

FlashPlayerMediator.prototype.type = "flash";

/**
*/
FlashPlayerMediator.prototype.addLayer = function(layer) {
  FlashPlayerMediator.__super__.addLayer.call(this, layer);
  if (layer.className.indexOf("video") !== -1 && !this.viewComponent.contains(layer)) {
    this.viewComponent.appendChild(layer);
  }
};

/**
 * @enum {string}
 * @const
 * @private
*/

var MediaAnalyticsNotifications = {
  SET_DIMENSIONS: "mediaanalytics:setDimensions"
};

/**
 * @enum {string}
 * @const
 * @private
*/

var AISNotifications = {
  START_AUTHENTICATION: "startAuthentication",
  AUTHENTICATED: "aisauthenticated",
  AUTHENTICATING: "aisathenticating",
  AUTHENTICATION_COMPLETE: "authenticationComplete",
  CHOOSE_AUTH_PROVIDER: "chooseAuthProvider",
  CHOOSE_PLAY_OPTIONS: "choosePlayOptions",
  LAUNCH_IDP_LOGIN: "launchIDPLogin"
};

/**
 * The AISCommand class.
 *   
 * @constructor
 * @private
 * @extends {puremvc.SimpleCommand}
*/
function AISCommand() {
  AISCommand.__super__.constructor.call(this);
}


__extends(AISCommand, puremvc.SimpleCommand);


/**
*/
AISCommand.prototype.getProxy = function() {
  return this.facade.retrieveProxy(AISProxy.NAME);
};

/**
 * The AISPauseCommand class.
 *   
 * @constructor
 * @private
 * @extends {AISCommand}
*/
function AISPauseCommand() {
  AISPauseCommand.__super__.constructor.call(this);
}


__extends(AISPauseCommand, AISCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
AISPauseCommand.prototype.execute = function(notification) {
  var proxy;
  this.facade.logger.debug("AISPauseCommand");
  proxy = this.getProxy();
  proxy.vcsSet(proxy.currentTime);
};

/**
 * The AISEndedCommand class.
 *   
 * @constructor
 * @private
 * @extends {AISCommand}
*/
function AISEndedCommand() {
  AISEndedCommand.__super__.constructor.call(this);
}


__extends(AISEndedCommand, AISCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
AISEndedCommand.prototype.execute = function(notification) {
  this.facade.logger.debug("AISEndedCommand");
  this.getProxy().vcsSet(0);
};

function Cookies() {}

Cookies.setCookie = function(name, value, days, path, domain) {
  var expires;
  value = escape(value);
  if (days != null) {
    expires = new Date();
    expires.setDate(expires.getDate() + days);
    value += "; expires=" + expires.toUTCString();
  }
  if (domain != null) {
    value += "; domain=" + domain;
  }
  if (path != null) {
    value += "; path=" + path;
  }
  return document.cookie = name + "=" + value;
};

Cookies.getCookie = function(name) {
  var cookie, cookies, index, key, value, _i, _len;
  cookies = document.cookie.split(";");
  for (_i = 0, _len = cookies.length; _i < _len; _i++) {
    cookie = cookies[_i];
    index = cookie.indexOf("=");
    key = cookie.substr(0, index).replace(/^\s+|\s+$/g, "");
    value = unescape(cookie.substr(index + 1));
    if (key === name) {
      return value;
    }
  }
};

Cookies.deleteCookie = function(name) {
  return this.setCookie(name, "", -1);
};

/**
 * The AISTimeUpdateCommand class.
 *   
 * @constructor
 * @private
 * @extends {AISCommand}
*/
function AISTimeUpdateCommand() {
  AISTimeUpdateCommand.__super__.constructor.call(this);
}


__extends(AISTimeUpdateCommand, AISCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
AISTimeUpdateCommand.prototype.execute = function(notification) {
  var currentTime, proxy;
  proxy = this.getProxy();
  currentTime = Math.floor(notification.getBody());
  if (currentTime !== 0 && currentTime % 30 === 0 && currentTime !== proxy.currentTime) {
    proxy.vcsSet(currentTime);
  }
  proxy.currentTime = currentTime;
};

/** 
 * @constructor
 * @private 
 * @extends {PluginProxy}
*/
function AISProxy(config) {
  AISProxy.__super__.constructor.call(this, config);
}


__extends(AISProxy, PluginProxy);


/** @static
*/
AISProxy.NAME = ModuleProxy.NAME;

AISProxy.prototype.client = null;

AISProxy.prototype.currentTime = null;

AISProxy.prototype.idps = null;

AISProxy.prototype.idp = null;

AISProxy.prototype.token = null;

AISProxy.prototype.authz = null;

AISProxy.prototype.defaults = {
  plugin: null,
  platformID: null,
  resourceID: null,
  contentID: null,
  responseTargets: null,
  logos: {
    base: null,
    group: null,
    key: "full"
  }
};

/** @override
*/
AISProxy.prototype.getScript = function() {
  return this.value.plugin;
};

/**
*/
AISProxy.prototype.initialize = function() {
  this.client = window.ais_client;
  this.client.setLogging(this.facade.logger.enabled);
  this.client.setPlatformId(this.value.platformID);
  this.client.setUseCache(!/MSIE [7-8]/.test(navigator.userAgent));
  this.client.assignhandler('bounce', this.bounceHandler.bind(this));
  this.client.assignhandler('chooser', this.chooserHandler.bind(this));
  this.client.assignhandler('init', this.initHandler.bind(this));
  this.client.assignhandler('authz_query', this.authz_queryHandler.bind(this));
  this.client.assignhandler('identity', this.identityHandler.bind(this));
  this.client.assignhandler('logout_result', this.logoutHandler.bind(this));
  this.client.assignhandler('vcs', this.vcsHandler.bind(this));
  window.onunload = function() {};
};

/**
*/
AISProxy.prototype.authorize = function() {
  this.authz = null;
  this.token = null;
  this.disengage();
  this.sendNotification(AISNotifications.START_AUTHENTICATION);
};

/**
*/
AISProxy.prototype.authorized = function(token) {
  if (token == null) {
    token = this.token;
  }
  this.engage();
  this.sendNotification(AISNotifications.AUTHENTICATION_COMPLETE);
  this.sendNotification(SecurityNotifications.AUTHORIZED, token);
};

/**
*/
AISProxy.prototype.play = function(time) {
  this.sendNotification(Notifications.INITIALIZED);
  this.sendNotification(Notifications.PLAY);
  if (time != null) {
    return this.sendNotification(Notifications.SEEK, time);
  }
};

/**
*/
AISProxy.prototype.engage = function() {
  this.facade.registerCommand(Notifications.TIME_UPDATE, AISTimeUpdateCommand);
  this.facade.registerCommand(Notifications.PAUSE, AISPauseCommand);
  this.facade.registerCommand(Notifications.ENDED, AISEndedCommand);
};

/**
*/
AISProxy.prototype.disengage = function() {
  this.facade.removeCommand(Notifications.TIME_UPDATE);
  this.facade.removeCommand(Notifications.PAUSE);
  this.facade.removeCommand(Notifications.ENDED);
};

/**
*/
AISProxy.prototype.logout = function() {
  var height, method, target, width, _ref;
  method = ((_ref = this.idp.window_display) != null ? _ref.method : void 0) || "redirect";
  target = this.getTarget(method);
  this.setRedirect(method);
  switch (method) {
    case "redirect":
      window.open(this.client.logoutFormat(target), "_top");
      break;
    case "popup":
      width = this.idp.window_display.width || 320;
      height = this.idp.window_display.height || 240;
      window.open(this.client.logoutFormat(target), 'ais_popup', 'width=' + width + ',height=' + height);
  }
};

/**
*/
AISProxy.prototype.bounce = function(resource) {
  this.client.bounce();
};

/**
*/
AISProxy.prototype.init = function(resource) {
  this.client.init();
};

/**
*/
AISProxy.prototype.choose = function() {
  this.client.chooser();
};

/**
*/
AISProxy.prototype.resourceAccess = function(resource) {
  if (resource == null) {
    resource = this.value.resourceID;
  }
  this.client.resourceAccess(resource);
};

/**
*/
AISProxy.prototype.vcsSet = function(time) {
  time = Utils.formatTimecode(time);
  return this.client.vcsSet(this.value.contentID, time);
};

/**
*/
AISProxy.prototype.bounceHandler = function(type, resp) {
  var auth;
  auth = resp['authenticated'].toString() === 'true';
  if (auth === false) {
    this.sendNotification(Notifications.DISPATCH_EVENT, new Event("authenticationfailed"));
    this.choose();
  } else if (auth === true) {
    this.init();
  }
};

/**
*/
AISProxy.prototype.initHandler = function(type, resp) {
  var key, key2, value, value2, _ref;
  this.facade.logger.debug(type, resp);
  this.idp = resp.idps;
  this.facade.idps = {};
  _ref = resp.idps;
  for (key in _ref) {
    value = _ref[key];
    this.facade.idps.key = key;
    for (key2 in value) {
      value2 = value[key2];
      this.facade.idps[key2] = value2;
    }
    break;
  }
  for (key in resp) {
    value = resp[key];
    if (key !== "idps" && (value != null)) {
      this.facade[key] = value;
    }
  }
  this.facade.idps.logo = this.value.logos.base + this.facade.idps.logos[this.value.logos.key];
  this.facade.app.sendNotification(Notifications.REMOVE_APPLICATION_STATE, "authenticating");
  this.sendNotification(AISNotifications.AUTHENTICATED, this.facade.idps);
  this.resourceAccess(this.value.resourceID);
};

/**
*/
AISProxy.prototype.chooserHandler = function(type, resp) {
  this.facade.logger.debug(type, resp.authenticated);
  this.facade.sendNotification(Notifications.ADD_APPLICATION_STATE, "authenticating");
  resp.possible_idps = this.idps = this.sort(resp.possible_idps, 'value', 'display_name');
  this.sendNotification(AISNotifications.CHOOSE_AUTH_PROVIDER, resp);
};

AISProxy.prototype.launchIDPLogin = function(idp_platform_id) {
  var height, idp, method, target, width, _ref;
  this.sendNotification(AISNotifications.AUTHENTICATING, true);
  idp = this.idps[idp_platform_id];
  method = ((_ref = idp.window_display) != null ? _ref.method : void 0) || "redirect";
  target = this.getTarget(method);
  this.setRedirect(method);
  switch (method) {
    case "redirect":
      window.open(this.client.loginFormat(idp_platform_id, target), "_top");
      break;
    case "popup":
      method = idp.window_display.method || "popup";
      width = idp.window_display.width || 320;
      height = idp.window_display.height || 240;
      window.open(this.client.loginFormat(idp_platform_id, target), 'ais_popup', 'width=' + width + ',height=' + height);
  }
};

/**
*/
AISProxy.prototype.identityHandler = function(type, resp) {
  var aisuid;
  this.facade.logger.debug(type, resp);
  aisuid = resp['identity']['attributes']['aisuid'];
};

/**
*/
AISProxy.prototype.authz_queryHandler = function(type, resp) {
  var auth, dimensions, resource;
  this.facade.logger.debug(type, resp);
  auth = resp['authorization'].toString() === "true";
  if (auth === false) {
    this.sendNotification(SecurityNotifications.AUTHORIZATION_FAILED);
    this.authorize();
  } else if (auth === true) {
    this.authz = resp;
    dimensions = {
      mvpdName: this.facade.idps.name,
      viewerId: this.client.aisuid,
      "std:viewerId": this.client.aisuid
    };
    this.facade.app.sendNotification(MediaAnalyticsNotifications.SET_DIMENSIONS, dimensions);
    this.facade.viewerId = this.client.aisuid;
    resource = resp['resource'];
    if (resource != null) {
      this.facade.resource = resource;
    }
    this.token = "hdnea=" + resp['security_token'];
    this.sendNotification(SecurityNotifications.SET_KEY, "hdnea=");
    this.sendNotification(SecurityNotifications.SET_TOKEN, resp['security_token']);
    this.sendNotification(AISNotifications.AUTHENTICATING, false);
    if (this.value.contentID != null) {
      this.client.vcsGet(this.value.contentID);
    } else {
      this.authorized(this.token);
    }
  }
};

/**
*/
AISProxy.prototype.logoutHandler = function(type, resp) {
  top.location.href = top.location.href;
};

/**
*/
AISProxy.prototype.vcsHandler = function(type, resp) {
  if (resp['operation'] === 'get') {
    if (resp['ph_pos'] === '00:00:00' || resp['ph_pos'] === "00:00") {
      this.client.vcsSet(this.value.contentID, resp['ph_pos']);
      this.authorized(this.token);
    } else {
      this.sendNotification(AISNotifications.CHOOSE_PLAY_OPTIONS, Utils.flattenTimecode(resp['ph_pos']));
    }
  }
};

/**
*/
AISProxy.prototype.sort = function(obj, sortType, valueName) {
  var data, index, item, key, returnObj, value, _i, _len;
  returnObj = {};
  data = [];
  index = 0;
  for (key in obj) {
    value = obj[key];
    data[index] = {
      key: key,
      value: value[valueName]
    };
    index++;
  }
  data.sort(function(a, b) {
    var valueA, valueB;
    valueA = sortType === 'value' ? a.value.toLowerCase() : a.key.toLowercase();
    valueB = sortType === 'value' ? b.value.toLowerCase() : b.key.toLowercase();
    if (valueA < valueB) {
      return -1;
    } else if (valueA > valueB) {
      return 1;
    } else {
      return 0;
    }
  });
  for (index = _i = 0, _len = data.length; _i < _len; index = ++_i) {
    item = data[index];
    returnObj[item.key] = obj[item.key];
  }
  return returnObj;
};

/**
*/
AISProxy.prototype.setRedirect = function(method) {
  var devToken, domain, loc;
  try {
    devToken = /\/dev\./;
    loc = window.top.location.href || window.top.location;
    domain = devToken.test(loc) ? loc.replace(devToken, "/") : null;
    Cookies.setCookie(this.getTarget(method), loc, 1, "/", domain);
  } catch (error) {

  }
};

/**
*/
AISProxy.prototype.getTarget = function(method) {
  if (method == null) {
    method = "redirect";
  }
  return this.value.responseTargets[method];
};

/**
 * PlaybackProxy constructor.
 * 
 * @constructor
 * @private
 * @extends {puremvc.Proxy}
*/
function PlaybackProxy() {
  PlaybackProxy.__super__.constructor.call(this, PlaybackProxy.NAME);
  this.data = {
    core: null,
    muted: false,
    started: false,
    volume: 1,
    currentTime: 0,
    duration: 0,
    src: null,
    ended: false,
    paused: false,
    seeking: false,
    loading: false
  };
  if (Utils.getDevice() === "desktop") {
    this.initialized = true;
  }
  this.handlers = {
    "timeupdate": this.ontimeupdate.bind(this),
    "durationchange": this.ondurationchange.bind(this),
    "play": this.onplay.bind(this),
    "playing": this.onplaying.bind(this),
    "pause": this.onpause.bind(this),
    "loadeddata": this.onloadeddata.bind(this),
    "waiting": this.onwaiting.bind(this),
    "seeking": this.onseeking.bind(this),
    "seeked": this.onseeked.bind(this),
    "ended": this.onended.bind(this),
    "progress": this.onprogress.bind(this),
    "error": this.onerror.bind(this),
    "loadstart": this.onloadstart.bind(this),
    "canplay": this.oncanplay.bind(this),
    "canplaythrough": this.oncanplaythrough.bind(this),
    "loadedmetadata": this.onloadedmetadata.bind(this)
  };
  this.resumeHandlers = {
    "seeked": this.resumeseeked.bind(this),
    "canplay": this.resumecanplay.bind(this)
  };
}


__extends(PlaybackProxy, puremvc.Proxy);


/**
 * The name of the this Proxy.
 * 
 * @static
 * @type {string}
*/
PlaybackProxy.NAME = "PlaybackProxy";

/** @private
*/
PlaybackProxy.prototype.data = null;

PlaybackProxy.prototype.initialized = false;

PlaybackProxy.prototype.enabled = null;

PlaybackProxy.prototype.handlers = null;

PlaybackProxy.prototype.resumeHandlers = null;

PlaybackProxy.prototype.playWhenLoaded = false;

/**     
 * The current time of the video in seconds. Value must be between currentTime and duration.
 * 
 * @param {Number} value
 *    The new currentTime value in seconds
 * @returns {Number} 
 *    The currentTime value in seconds
 * @type {Number}
*/
PlaybackProxy.prototype.getEnabled = function() {
  return this.enabled;
};

PlaybackProxy.prototype.setEnabled = function(value) {
  if (value === this.enabled) {
    return;
  }
  this.enabled = value;
  if (this.enabled === true) {
    this.load();
  } else {
    this.applyHandlers(false);
  }
  return value;
};

/** @private
*/
PlaybackProxy.prototype.applyHandlers = function(enabled) {
  var action, handler, type, video, _ref;
  if (enabled == null) {
    enabled = true;
  }
  video = this.getVideo();
  action = enabled ? "addEventListener" : "removeEventListener";
  _ref = this.handlers;
  for (type in _ref) {
    handler = _ref[type];
    video[action](type, handler);
  }
};

/** @private
*/
PlaybackProxy.prototype.resumecanplay = function(event) {
  var video;
  video = event.target;
  video.removeEventListener("canplay", this.resumeHandlers.canplay);
  this.handlers.durationchange();
  if (this.data.currentTime > 0) {
    video.addEventListener("seeked", this.resumeHandlers.seeked);
    this.seek();
  } else {
    this.resumecomplete();
  }
};

/** @private
*/
PlaybackProxy.prototype.resumeseeked = function(event) {
  var video;
  video = event.target;
  video.removeEventListener("seeked", this.resumeHandlers.seeked);
  this.resumecomplete();
};

/** @private
*/
PlaybackProxy.prototype.resumecomplete = function() {
  this.data.loading = false;
  this.applyHandlers();
  if (this.playWhenLoaded === true) {
    setTimeout(this.play.bind(this), 0);
  }
};

PlaybackProxy.prototype.ontimeupdate = function(event) {
  if (this.data.seeking === true) {
    return;
  }
  this.data.currentTime = event.target.currentTime;
  this.sendNotification(Notifications.TIME_UPDATE, this.data.currentTime);
};

PlaybackProxy.prototype.ondurationchange = function(event) {
  var duration;
  duration = this.getVideo().duration;
  if (duration === this.data.duration || duration === 0 || isNaN(duration)) {
    return;
  }
  this.data.duration = duration;
  if (/Android 4/.test(navigator.userAgent) && event.target.src.indexOf(".m3u8") !== -1) {
    return;
  }
  this.sendNotification(Notifications.CHANGE_DURATION, duration);
};

PlaybackProxy.prototype.onplay = function(event) {
  this.data.paused = false;
};

PlaybackProxy.prototype.onplaying = function(event) {
  this.data.paused = false;
  this.sendNotification(Notifications.CHANGE_PLAY_STATE, PlayState.PLAYING);
  this.sendNotification(Notifications.PLAYING);
};

PlaybackProxy.prototype.onpause = function(event) {
  this.data.paused = true;
  if (event.target.readyState > 0) {
    this.sendNotification(Notifications.CHANGE_PLAY_STATE, PlayState.PAUSED);
  }
};

PlaybackProxy.prototype.onloadeddata = function(event) {
  this.sendNotification(Notifications.LOADED_DATA);
};

PlaybackProxy.prototype.onwaiting = function(event) {
  this.sendNotification(Notifications.WAITING);
};

PlaybackProxy.prototype.onseeking = function(event) {
  event.target.removeEventListener("timeupdate", this.handlers.timeupdate);
  this.data.seeking = true;
  this.sendNotification(Notifications.SEEKING);
};

PlaybackProxy.prototype.onseeked = function(event) {
  var video;
  this.data.seeking = false;
  this.sendNotification(Notifications.SEEKED);
  video = event.target;
  video.addEventListener("timeupdate", this.handlers.timeupdate);
};

PlaybackProxy.prototype.onended = function(event) {
  this.data.ended = true;
  this.sendNotification(Notifications.ENDED);
};

PlaybackProxy.prototype.onprogress = function(event) {
  var buffered, video;
  try {
    video = event.target;
    buffered = video.buffered;
    this.sendNotification(Notifications.PROGRESS, buffered.end(buffered.length - 1) / video.duration);
  } catch (error) {

  }
};

PlaybackProxy.prototype.onerror = function(event) {
  this.sendNotification(Notifications.ERROR, event.target.error);
};

PlaybackProxy.prototype.onloadstart = function(event) {
  this.sendNotification(Notifications.LOAD_START);
};

PlaybackProxy.prototype.oncanplay = function(event) {
  this.sendNotification(Notifications.CAN_PLAY);
};

PlaybackProxy.prototype.oncanplaythrough = function(event) {
  this.sendNotification(Notifications.CAN_PLAY_THROUGH);
  this.sendNotification(Notifications.PROGRESS, this.getDuration());
};

PlaybackProxy.prototype.onloadedmetadata = function(event) {
  this.sendNotification(Notifications.ENABLE_FULL_SCREEN);
  this.sendNotification(Notifications.LOADED_METADATA);
};

/** @private
*/
PlaybackProxy.prototype.reset = function() {
  this.data.currentTime = 0;
  this.data.duration = 0;
  this.data.src = null;
  this.data.ended = false;
  this.data.paused = false;
  this.data.seeking = false;
  this.data.started = false;
  this.data.loading = false;
};

/**
 * @return {boolean}
*/
PlaybackProxy.prototype.getStarted = function() {
  return this.data.started;
};

/**     
 * The playback core
 * 
 * @param {HTMLVideoElement} value
 *    The new playback core
 * @returns {HTMLVideoElement} 
 *    The playback core
 * @type {HTMLVideoElement}
 * 
 * @private
*/
PlaybackProxy.prototype.getVideo = function() {
  return this.facade.getVideo();
};

/**
 * Determines if the core can play a given mimeType.
 * 
 * @return {String} "" if the core can't play the mimeType
*/
PlaybackProxy.prototype.canPlayType = function(mimeType) {
  var canPlay;
  canPlay = this.getVideo().canPlayType(mimeType) || "";
  if ((/Android 4\.[1-9]/.test(navigator.userAgent) || /Silk\/3/.test(navigator.userAgent)) && mimeType === Utils.mimeTypes.m3u8) {
    canPlay = "maybe";
  }
  return canPlay;
};

/**     
 * Indicates whether or not the video is playing.
 * 
 * @returns {Boolean} 
 *    The playing value
 * @type {Boolean}
*/
PlaybackProxy.prototype.getPaused = function() {
  return this.data.paused;
};

/**     
 * Indicates whether or not the video is playing.
 * 
 * @returns {Boolean} 
 *    The playing value
 * @type {Boolean}
*/
PlaybackProxy.prototype.getEnded = function() {
  return this.data.ended;
};

/**     
 * Indicates whether or not the video is playing.
 * 
 * @returns {Boolean} 
 *    The playing value
 * @type {Boolean}
*/
PlaybackProxy.prototype.getSeeking = function() {
  return this.data.seeking;
};

/**     
 * The current time of the video in seconds. Value must be between currentTime and duration.
 * 
 * @param {Number} value
 *    The new currentTime value in seconds
 * @returns {Number} 
 *    The currentTime value in seconds
 * @type {Number}
*/
PlaybackProxy.prototype.getCurrentTime = function() {
  return this.data.currentTime;
};

PlaybackProxy.prototype.setCurrentTime = function(value) {
  if (value === this.data.currentTime) {
    return;
  }
  this.data.currentTime = value;
  if (this.getStarted()) {
    this.seek(value);
  }
  return value;
};

/** @private
*/
PlaybackProxy.prototype.seek = function(value) {
  if (value == null) {
    value = this.data.currentTime;
  }
  this.getVideo().currentTime = value;
};

/**     
 * The current time of the video in seconds. Value must be between currentTime and duration.
 * 
 * @param {Number} value
 *    The new currentTime value in seconds
 * @returns {Number} 
 *    The currentTime value in seconds
 * @type {Number}
*/
PlaybackProxy.prototype.getSrc = function() {
  return this.data.src;
};

PlaybackProxy.prototype.setSrc = function(value) {
  if (!(value != null) || value === "") {
    this.sendNotification(Notifications.ERROR, "The value of src is not supported: " + value);
  }
  this.reset();
  this.data.src = value;
  return value;
};

/**     
 * The current time of the video in seconds. Value must be between currentTime and duration.
 * 
 * @param {Number} value
 *    The new currentTime value in seconds
 * @returns {Number} 
 *    The currentTime value in seconds
 * @type {Number}
*/
PlaybackProxy.prototype.getVolume = function() {
  return this.getVideo().volume;
};

PlaybackProxy.prototype.setVolume = function(value) {
  if ((0 <= value && value <= 1) && value !== this.getVideo().volume) {
    this.sendNotification(Notifications.VOLUME_CHANGE, this.getVideo().volume = value);
  }
  return value;
};

/**
*/
PlaybackProxy.prototype.getMuted = function() {
  return this.data.muted;
};

PlaybackProxy.prototype.setMuted = function(value) {
  var volume;
  this.data.muted = value;
  if (this.data.muted === true) {
    this.data.volume = this.getVolume();
    volume = 0;
  } else {
    volume = this.data.volume;
  }
  this.sendNotification(Notifications.CHANGE_VOLUME, volume);
  return value;
};

/**
 * The duration of the video in seconds.
 *     
 * @returns {Number} 
 *    The duration of the video
 * @type {Number}
*/
PlaybackProxy.prototype.getDuration = function() {
  return this.data.duration;
};

/**
 * Instructs the core to play.
*/
PlaybackProxy.prototype.play = function() {
  if (this.data.started !== true) {
    this.data.started = true;
    this.setEnabled(true);
    this.playWhenLoaded = true;
  } else if (this.data.loading === true) {
    this.playWhenLoaded = true;
  } else {
    this.getVideo().play();
  }
};

/**
 * Instructs the core to pause.
*/
PlaybackProxy.prototype.pause = function() {
  this.getVideo().pause();
};

/**
 * Instructs the core to load.
*/
PlaybackProxy.prototype.load = function() {
  this.data.loading = true;
  this.playWhenLoaded = false;
  this.getVideo().addEventListener("canplay", this.resumeHandlers.canplay);
  this.getVideo().src = this.data.src;
  this.getVideo().load();
};

/**
 * The AISFlashAuthenticatedCommand class.
 *   
 * @constructor
 * @private
 * @extends {puremvc.SimpleCommand}
*/
function FlashAuthorizedCommand() {
  FlashAuthorizedCommand.__super__.constructor.call(this);
}


__extends(FlashAuthorizedCommand, puremvc.SimpleCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
FlashAuthorizedCommand.prototype.execute = function(notification) {
  var mediaProxy, securityProxy, src;
  this.facade.logger.debug("FlashAuthorizedCommand");
  mediaProxy = this.facade.retrieveProxy(FlashMediaProxy.NAME);
  securityProxy = this.facade.retrieveProxy(SecurityProxy.NAME);
  src = mediaProxy.getSrc() || "";
  if (src.indexOf(".smil") === -1) {
    src = securityProxy.createURL(src);
  }
  mediaProxy.setSrc(src);
  this.facade.video.authenticationComplete({
    media: mediaProxy.getData()
  });
};

/**
 * PlaybackCoreProxy constructor.
 * 
 * @constructor
 * @private
 * @extends {PlaybackProxy}
*/
function PlaybackCoreProxy(supportedTypes) {
  this.supportedTypes = !(supportedTypes != null) ? [] : supportedTypes;
  PlaybackCoreProxy.__super__.constructor.call(this);
}


__extends(PlaybackCoreProxy, PlaybackProxy);


PlaybackCoreProxy.prototype.supportedTypes = null;

PlaybackCoreProxy.prototype.playbackCoreName = null;

/**
*/
PlaybackCoreProxy.prototype.getPlaybackCoreName = function() {
  return this.playbackCoreName;
};

/**
*/
PlaybackCoreProxy.prototype.getSupportedTypes = function() {
  return this.supportedTypes;
};

/**
*/
PlaybackCoreProxy.prototype.setSupportedTypes = function(types) {
  this.supportedTypes = types;
  return types;
};

/** @override
*/
PlaybackCoreProxy.prototype.canPlayType = function(mimeType) {
  if (this.getSupportedTypes().indexOf(mimeType) !== -1) {
    return "maybe";
  }
  return "";
};

/**
 * ChromeCastPlaybackProxy constructor.
 * 
 * @constructor
 * @extends {PlaybackCoreProxy}
 * @private
*/
function FlashPlaybackProxy(player) {
  this.player = player;
  FlashPlaybackProxy.__super__.constructor.call(this);
}


__extends(FlashPlaybackProxy, PlaybackCoreProxy);


/**
 * The name of the this Proxy.
 * 
 * @static
 * @type {string}
*/
FlashPlaybackProxy.NAME = PlaybackProxy.NAME;

FlashPlaybackProxy.prototype.player = null;

FlashPlaybackProxy.prototype.initialized = true;

FlashPlaybackProxy.prototype.playbackCoreName = "flash";

FlashPlaybackProxy.prototype.supportedTypes = ["video/mp4", "video/x-flv", "video/f4m", "application/smil", "application/smil+xml"];

/**     
 * Indicates whether or not the video is playing.
 * 
 * @returns {Boolean} 
 *    The playing value
 * @type {Boolean}
*/
FlashPlaybackProxy.prototype.getPaused = function() {
  return this.player.getPaused();
};

/**     
 * Indicates whether or not the video is playing.
 * 
 * @returns {Boolean} 
 *    The playing value
 * @type {Boolean}
*/
FlashPlaybackProxy.prototype.getEnded = function() {
  return this.player.getEnded();
};

/**     
 * Indicates whether or not the video is playing.
 * 
 * @returns {Boolean} 
 *    The playing value
 * @type {Boolean}
*/
FlashPlaybackProxy.prototype.getSeeking = function() {
  return this.player.getSeeking();
};

/**     
 * The current time of the video in seconds. Value must be between currentTime and duration.
 * 
 * @param {Number} value
 *    The new currentTime value in seconds
 * @returns {Number} 
 *    The currentTime value in seconds
 * @type {Number}
*/
FlashPlaybackProxy.prototype.getCurrentTime = function() {
  return this.player.getCurrentTime();
};

FlashPlaybackProxy.prototype.setCurrentTime = function(value) {
  this.player.setCurrentTime(value);
  return value;
};

/**     
 * The current time of the video in seconds. Value must be between currentTime and duration.
 * 
 * @param {Number} value
 *    The new currentTime value in seconds
 * @returns {Number} 
 *    The currentTime value in seconds
 * @type {Number}
*/
FlashPlaybackProxy.prototype.getSrc = function() {
  return this.player.getSrc();
};

FlashPlaybackProxy.prototype.setSrc = function(value) {
  this.player.setSrc(value);
  return value;
};

/**     
 * The current time of the video in seconds. Value must be between currentTime and duration.
 * 
 * @param {Number} value
 *    The new currentTime value in seconds
 * @returns {Number} 
 *    The currentTime value in seconds
 * @type {Number}
*/
FlashPlaybackProxy.prototype.getVolume = function() {
  return this.player.getVolume();
};

FlashPlaybackProxy.prototype.setVolume = function(value) {
  this.player.setVolume(value);
  return value;
};

/**
*/
FlashPlaybackProxy.prototype.getMuted = function() {
  return this.player.getMuted();
};

FlashPlaybackProxy.prototype.setMuted = function(value) {
  this.player.setMuted(value);
  return value;
};

/**
 * The duration of the video in seconds.
 *     
 * @returns {Number} 
 *    The duration of the video
 * @type {Number}
*/
FlashPlaybackProxy.prototype.getDuration = function(value) {
  return this.player.getDuration();
};

/**
 * Instructs the core to play.
*/
FlashPlaybackProxy.prototype.play = function() {
  this.player.play();
};

/**
 * Instructs the core to pause.
*/
FlashPlaybackProxy.prototype.pause = function() {
  this.player.pause();
};

/**
 * Instructs the core to load.
*/
FlashPlaybackProxy.prototype.load = function() {
  this.player.load();
};

/**
 * The ModuleDispatcher class.
 * 
 * @constructor
 * @private
 * @extends {puremvc.Mediator}
 * 
 * @param {Object}  api
 * @param {EventDispatcher} dispatcher
*/
function ModuleDispatcher(api, dispatcher) {
  this.api = api;
  this.dispatcher = dispatcher != null ? dispatcher : new EventDispatcher(this.api);
  ModuleDispatcher.__super__.constructor.call(this, null, this);
}


__extends(ModuleDispatcher, puremvc.Mediator);


ModuleDispatcher.NAME = "ModuleDispatcher";

ModuleDispatcher.prototype.dispatcher = null;

ModuleDispatcher.prototype.api = null;

/**
*/
ModuleDispatcher.prototype.onRegister = function() {
  var dispatchEvent,
    _this = this;
  dispatchEvent = this.dispatcher.dispatchEvent;
  this.dispatcher.dispatchEvent = function(event) {
    _this.log(_this.getMessage(event), event);
    dispatchEvent(event);
  };
};

/**
 * Overridden so this class may subscribe to all notifications
 * @return An Array
 *
*/
ModuleDispatcher.prototype.listNotificationInterests = function() {
  return [Notifications.DISPATCH_EVENT].concat(this.facade.listNotificationEvents());
};

/**
 * Handles notifications of interest to this mediator. Note that
 * the default declaration is to allow the super to handle the
 * note. This leaves the base JunctionMediator to handle things
 * like ACCEPT_INPUT_PIPE and ACCEPT_OUTPUT_PIPE  
 * @param note An INotification
 *
*/
ModuleDispatcher.prototype.handleNotification = function(notification) {
  var body, name;
  name = notification.getName();
  body = notification.getBody();
  if (name === Notifications.DISPATCH_EVENT) {
    this.dispatchEvent(body);
  } else {
    this.dispatchEvent(this.createEvent(this.getType(name), body));
  }
};

ModuleDispatcher.prototype.createEvent = function(type, data) {
  return new Event(type, data);
};

ModuleDispatcher.prototype.dispatchEvent = function(event) {
  this.dispatcher.dispatchEvent(event);
};

ModuleDispatcher.prototype.getType = function(type) {
  return type.replace(new RegExp("^" + (this.facade.getModuleName())), "");
};

ModuleDispatcher.prototype.getMessage = function(event) {
  return "[" + (this.facade.getModuleName().toUpperCase()) + " EVENT]";
};

ModuleDispatcher.prototype.log = function(message, event) {
  if ((message != null) && (event != null)) {
    if (event.data != null) {
      this.facade.logger.log(message, event.type, event, event.data);
    } else {
      this.facade.logger.log(message, event.type, event);
    }
  }
};

/**
 * @enum {string}
 * @const
 * @private
*/

var FlashAdNotifications = {
  BREAK_START: "adComponentBreakInitiated",
  BREAK_END: "adComponentBreakComplete",
  AD_LOADED: "adComponentLoaded",
  AD_STARTED: "adComponentAdBegin",
  AD_TIME_UPDATE: "adComponentPlaybackProgress",
  AD_TIME_REMAINING: "adComponentTimeElapsed",
  AD_DURATION_CHANGE: "addurationchange",
  AD_ENDED: "adComponentAdComplete",
  AD_ERROR: "adComponentInitFailed",
  AD_PLAY: "adComponentPlaybackResumed",
  AD_PAUSE: "adComponentPlaybackPaused",
  AD_LOG: "adComponentLog",
  AD_COMPANION: "adComponentCompanion",
  AD_PLAYBACK_FAILED: "adComponentPlaybackFailed",
  AD_PLAYBACK_TERMINATED: "adComponentPlaybackTerminated",
  AD_MEDIA_LOADED: "adComponentMediaLoaded",
  AD_CLICKED: "adComponentClicked",
  AD_FIRST_QUARTILE: "adComponentFirstQuartile",
  AD_MIDPOINT: "adComponentMidpoint",
  AD_THIRD_QUARTILE: "adComponentThirdQuartile",
  AD_REQUEST: "adComponentAdsRequest"
};

/**
 * @enum {string}
 * @const
 * @private
*/

var FlashNotifications = {
  READY: "jsApiReady",
  RESET: "mediaPlayerReset",
  LOADING: "mediaPlayerLoading",
  PLAYER_ERROR: "mediaPlayerError",
  MEDIA_ERROR: "mediaError",
  ERROR_STREAM_NOT_FOUND: "mediaPlayerErrorStreamNotFound",
  CAPABILITY_CHANGE: "mediaPlayerCapabilityChange",
  PLAYBACK_OPEN: "mediaPlayerPlaybackOpen",
  PLAYING: "mediaPlayerPlaying",
  ENDED: "mediaPlayerPlaybackSequenceComplete",
  PAUSED: "mediaPlayerPaused",
  BUFFERING: "mediaPlayerBuffering",
  DURATION_CHANGE: "mediaPlayerDurationChange",
  TIME_UPDATE: "mediaPlayerPlayheadUpdate",
  SEEKING_CHANGE: "mediaPlayerSeekingChange",
  ERROR: "error",
  VOLUME_CHANGE: "mediaPlayerVolumeChanged",
  PLAY_STATE_CHANGE: "mediaPlayerPlayStateChange",
  STATE_CHANGE: "mediaPlayerStateChange",
  CAPTION_DATA_CHANGE: "mediaPlayerCaptiondataChange",
  FAIL_OVER_ATTEMPT: "mediaPlayerFailoverAttempt",
  ELEMENT_EVENT: "mediaPlayerElementEvent",
  PLAY: "mediaPlayerResumeOrPausePlayback",
  APPLICATION_STATE_CHANGE: "mediaPlayerApplicationStateChange",
  INITIALIZED: "mediaPlayerInitialized",
  LOAD_STATE_READY: "mediaLoadStateReady",
  LOAD_STATE_LOADING: "mediaLoadStateLoading",
  FULLSCREEN_CHANGE: "mediaPlayerFullscreenChange",
  AUTHORIZE: "mediaPlayerAuthenticate",
  CAPTIONING_REQUEST: "mediaPlayerCaptioningRequest",
  CAPTION_LANG_CHANGE: "mediaPlayerCaptionLangChange",
  RECOMMENDATIONS_LOADED: "mediaPlayerRecommendationsLoaded",
  RECOMMENDATION_SELECTED: "mediaPlayerRecommendationSelected",
  SHARE: "mediaPlayerShare",
  SHARE_REQUEST: "mediaPlayerShareRequest",
  AUTO_ADVANCE: "mediaPlayerAutoAdvance",
  CREATE_FLASH_VARS: "createFlashVars",
  CREATE_XML: "createXML",
  FLASH_CREATED: "flashCreated",
  PLAY_REQUEST: "mediaPlayerPlaybackSequenceInitiated",
  FEED_LOADED: "mediaPlayerFeedLoaded"
};

/**
 * The PlayerDispatcher class.
 * 
 * @constructor
 * @private
 * @extends {ModuleDispatcher}
 * @param {Object} api
 * @param {EventDispatcher} dispatcher
*/
function PlayerDispatcher(api, dispatcher) {
  PlayerDispatcher.__super__.constructor.call(this, api, dispatcher);
}


__extends(PlayerDispatcher, ModuleDispatcher);


PlayerDispatcher.NAME = "PlayerDispatcher";

/** @override
*/
PlayerDispatcher.prototype.dispatchEvent = function(event) {
  event.player = this.facade.parent;
  this.dispatcher.dispatchEvent(event);
};

/** @override
*/
PlayerDispatcher.prototype.getMessage = function(event) {
  if (event.type === "timeupdate" || event.type === "progress") {
    return;
  }
  return PlayerDispatcher.__super__.getMessage.call(this, event);
};

/**
 * The PlayerDispatcher class.
 * 
 * @constructor
 * @private
 * @extends {ModuleDispatcher}
 * @param {Object} api
 * @param {EventDispatcher} dispatcher
*/
function FlashPlayerDispatcher(api, dispatcher) {
  FlashPlayerDispatcher.__super__.constructor.call(this, api, dispatcher);
}


__extends(FlashPlayerDispatcher, PlayerDispatcher);


FlashPlayerDispatcher.NAME = "FlashPlayerDispatcher";

FlashPlayerDispatcher.prototype.getMessage = function(event) {
  if (event.type === FlashNotifications.TIME_UPDATE || event.type === FlashNotifications.CAPTION_DATA_CHANGE || event.type === FlashAdNotifications.AD_TIME_UPDATE || event.type === FlashAdNotifications.AD_TIME_REMAINING || event.type === FlashNotifications.ELEMENT_EVENT) {
    return;
  }
  return FlashPlayerDispatcher.__super__.getMessage.call(this, event);
};

/**
 * The FlashPlayerAPI class.
 * 
 * @param         {!FlashPlayer} player  The base module this API wraps.
 * @param         {EventDispatcher} dispatcher  The event dispatcher
 * @constructor
 * @extends {PlayerAPI}
*/
function FlashPlayerAPI(player, dispatcher) {
  ModuleAPI.attachModuleDispatcher(player, new FlashPlayerDispatcher(this, dispatcher));
  this.getContainer = function() {
    return player.getViewComponent();
  };
  this.getVideo = function() {
    return player.getVideo();
  };
  this.getConfig = function() {
    return player.getConfig();
  };
  this.destroy = function() {
    return player.destroy();
  };
  this.getFlashXML = function() {
    var str, xml;
    str = unescape(player.flashvars.settings_xml);
    xml = XMLUtils.parse(str);
    xml.toString = function() {
      return str;
    };
    return xml;
  };
  this.getFlashVars = function() {
    return player.flashvars;
  };
  this.evaluateBinding = function(str) {
    return player.video.evaluateBinding(str);
  };
  this.recordContentChange = function(content) {
    return player.video.recordContentChange(content);
  };
  this.canPlayType = function(mimeType) {
    if (__indexOf.call(Utils.flashTypes, mimeType) >= 0) {
      return "maybe";
    } else {
      return "";
    }
  };
  this.replay = function() {
    player.video.replay();
  };
  this.pause = function() {
    player.video.pause();
  };
  this.end = function() {
    player.video.stopPlayer();
  };
  this.getCurrentTime = function(value) {
    return player.video.getCurrentTime();
  };
  this.setCurrentTime = function(value) {
    player.video.jumpToTime(value);
    return value;
  };
  this.getParams = function() {
    return player.video.getParams();
  };
  this.setParams = function(value) {
    player.video.setParams(value);
    return value;
  };
  this.getVolume = function() {
    return player.video.getVolume();
  };
  this.setVolume = function(value, scope) {
    player.video.setVolume(value, scope || "");
    return value;
  };
  this.getDuration = function() {
    return player.video.getDuration();
  };
  this.enterFullScreen = function() {
    player.video.enterFullScreen();
  };
  this.exitFullScreen = function() {
    player.video.exitFullScreen();
  };
  this.setMedia = player.setMedia.bind(player);
  this.getMedia = player.getMedia.bind(player);
  this.load = player.load.bind(player);
  this.play = player.play.bind(player);
  this.setMuted = player.setMuted.bind(player);
  this.getMuted = player.getMuted.bind(player);
  this.getSrc = player.getSrc.bind(player);
  this.setSrc = player.setSrc.bind(player);
  this.setAutoplay = player.setAutoplay.bind(player);
  this.getAutoplay = player.getAutoplay.bind(player);
  this.getMedium = player.getMedium.bind(player);
  this.setMedium = player.setMedium.bind(player);
  this.setSource = player.setSource.bind(player);
  this.getSource = player.getSource.bind(player);
  this.getSeeking = player.getSeeking.bind(player);
  this.getPaused = player.getPaused.bind(player);
  this.getEnded = player.getEnded.bind(player);
}


__extends(FlashPlayerAPI, PlayerAPI);


/**
 * @expose
*/
FlashPlayerAPI.prototype.getFlashXML = function() {};

/**
 * @expose
*/
FlashPlayerAPI.prototype.getFlashVars = function() {};

/** 
 * The FlashPlayer class
 *   
 * @param {Object} config
 * @param {Object} viewComponent
 * @param {EventDispatcher} dispatcher
 * @constructor
 * @private
 * @extends {Player}
*/
function FlashPlayer(config, viewComponent, dispatcher) {
  var attributes, expressInstallSWF, flash, params, swf, swfs, version, _ref,
    _this = this;
  this.flashObjectID += Date.now();
  this.plugins = {};
  FlashPlayer.__super__.constructor.call(this, config, viewComponent, dispatcher);
  this.debug = /debug\=true/.test(location.search);
  this.media = {};
  flash = this.config.flash || {};
  swfs = ((_ref = flash["static"]) != null ? _ref.enabled : void 0) === true ? flash["static"] : flash;
  swf = this.debug && (swfs.debug != null) ? swfs.debug : swfs.swf || "amp.swf";
  version = flash.version || "10.1";
  expressInstallSWF = flash.expressInstallSWF || "playerProductInstall.swf";
  params = this.createParams(flash);
  attributes = this.createAttributes(flash);
  this.flashvars = this.createFlashVars(flash);
  if (!(this.flashvars.settings_url != null)) {
    this.flashvars.settings_xml = this.createXML(this.config);
  }
  swfobject.embedSWF(swf, this.flashObjectID, "100%", "100%", version, expressInstallSWF, this.flashvars, params, attributes, function(obj) {
    _this.createdHandler(obj);
  });
}


__extends(FlashPlayer, Player);


FlashPlayer.prototype.playerType = "flash";

FlashPlayer.prototype.flashObjectID = "flashObject";

FlashPlayer.prototype.playState = null;

FlashPlayer.prototype.loaded = false;

FlashPlayer.prototype.flashvars = null;

FlashPlayer.prototype.seeking = false;

FlashPlayer.prototype.paused = false;

FlashPlayer.prototype.ended = false;

FlashPlayer.prototype.media = null;

FlashPlayer.prototype.muted = false;

FlashPlayer.prototype.plugins = null;

FlashPlayer.prototype.debug = false;

FlashPlayer.prototype.started = false;

/** @override
*/
FlashPlayer.prototype.createAPI = function() {
  return new FlashPlayerAPI(this, this.dispatcher);
};

/** @override
*/
FlashPlayer.prototype.createModel = function() {
  this.registerProxy(new DataBindingProxy());
  this.registerProxy(new SecurityProxy());
  this.registerProxy(new FlashMediaProxy());
  this.registerProxy(new FlashPlaybackProxy(this));
};

/** @override
*/
FlashPlayer.prototype.createView = function() {
  this.registerMediator(new FlashPlayerMediator(this.getViewComponent()));
  this.registerMediator(new VideoLayerMediator());
  this.registerMediator(new OverlayLayerMediator());
  this.registerMediator(new LocalizationWrapper(this, this.config));
};

/** @override
*/
FlashPlayer.prototype.createController = function() {
  this.registerCommand(SecurityNotifications.AUTHORIZED, FlashAuthorizedCommand);
  this.registerCommand(SecurityNotifications.SET_TOKEN, SecuritySetTokenCommand);
  this.registerCommand(SecurityNotifications.SET_KEY, SecuritySetKeyCommand);
};

/** @override
*/
FlashPlayer.prototype.createVideo = function() {
  var video, viewComponent;
  video = new VideoMediator("flash", "div");
  viewComponent = video.getViewComponent();
  viewComponent.id = viewComponent.name = this.flashObjectID;
  this.sendNotification(Notifications.PLAYBACK_CORE_CHANGE, video);
  return viewComponent;
};

/**
*/
FlashPlayer.prototype.createParams = function(flash) {
  var params;
  params = {
    allowFullScreen: true,
    allowScriptAccess: "always",
    wmode: "direct",
    bgColor: "#000000"
  };
  if (flash.params != null) {
    if (flash.params.allowFullScreen != null) {
      params.allowFullScreen = flash.params.allowFullScreen;
    }
    if (flash.params.allowScriptAccess != null) {
      params.allowScriptAccess = flash.params.allowScriptAccess;
    }
    if (flash.params.wmode != null) {
      params.wmode = flash.params.wmode;
    }
    if (flash.params.bgColor != null) {
      params.bgColor = flash.params.bgColor;
    }
  }
  if (params.wmode === "direct" && /MSIE/.test(navigator.userAgent)) {
    params.wmode = "transparent";
  }
  return params;
};

/** @override
*/
FlashPlayer.prototype.getModules = function() {
  return this.plugins;
};

/** @override
*/
FlashPlayer.prototype.createPlugins = function() {
  var def, key, register, _ref;
  _ref = AMP.plugins;
  for (key in _ref) {
    register = _ref[key];
    if (!((key in this.config) && !(this.config[key].enabled === false))) {
      continue;
    }
    def = register[this.getPlayerType()];
    if (!(def != null)) {
      this.logger.debug("Plugin could not be found: " + key);
      continue;
    }
    try {
      this.plugins[key] = new def(this, this.config[key]);
      this.registerMediator(this.plugins[key]);
      this.logger.debug("Plugin loaded: " + key);
    } catch (error) {
      this.error("Flash Plugin Load Error (" + key + ")", error);
      continue;
    }
  }
};

/**
*/
FlashPlayer.prototype.createAttributes = function(flash) {
  var attributes;
  attributes = {
    id: this.flashObjectID,
    name: this.flashObjectID
  };
  if (flash.attributes != null) {
    if (flash.attributes.id != null) {
      attributes.id = flash.attributes.id;
    }
    if (flash.attributes.name != null) {
      attributes.name = flash.attributes.name;
    }
  }
  return attributes;
};

/**
*/
FlashPlayer.prototype.createFlashVars = function(flash) {
  var flashvars, key, value, _ref, _ref1, _ref2, _ref3;
  flashvars = {};
  if (this.config.autoplay != null) {
    flashvars.auto_play = this.config.autoplay;
  }
  if (((_ref = this.config.controls) != null ? _ref.displaySceneMarkers : void 0) != null) {
    flashvars.displaySceneMarkers = this.config.controls.displaySceneMarkers;
  }
  if ((this.config.rules != null)) {
    Utils.mergeRules(this.config.rules);
  }
  flashvars.hinting_rules = escape(JSON.stringify(Utils.rules));
  if (this.config.media != null) {
    if (this.config.media.src != null) {
      this.setSrc(this.config.media.src);
      flashvars.video_url = escape(this.config.media.src);
    }
    if ((this.config.media.source != null) && this.config.media.source.length > 0) {
      this.setSource(this.config.media.source);
      flashvars.video_url = escape(this.media.src);
    }
    if (this.config.media.medium != null) {
      this.setMedium(this.config.media.medium);
      flashvars.medium = this.config.media.medium;
    }
    if (this.config.media.title != null) {
      flashvars.title = escape(this.config.media.title);
    }
    if (this.config.media.poster != null) {
      flashvars.poster = escape(this.config.media.poster);
    }
    if (this.config.media.temporalType != null) {
      flashvars.temporalType = this.config.media.temporalType;
    }
  }
  if (this.getMedium() === "audio") {
    flashvars.controls = true;
    flashvars.auto_hide = -1;
  }
  if (((_ref1 = this.config.ima) != null ? (_ref2 = _ref1.overlay) != null ? _ref2.delay : void 0 : void 0) != null) {
    flashvars.overlay_ad_delay = this.config.ima.overlay.delay;
  }
  if (this.config.volume != null) {
    flashvars.volume = Utils.clamp(this.config.volume, 0, 1);
  }
  if ((this.config.target != null)) {
    flashvars.external_target = this.config.target;
  }
  if ((this.config.name != null)) {
    flashvars.core_player_name = this.config.name;
  }
  if ((this.config.domain != null)) {
    flashvars.embed_domain = flashvars.domain = this.config.domain;
  }
  flashvars.auto_replay = this.config.loop === true;
  if ((this.config.ticker != null) && this.config.ticker.enabled !== false) {
    if (this.config.ticker.url != null) {
      flashvars.ticker_text_url = this.config.ticker.url;
    }
    if (this.config.ticker.interval != null) {
      flashvars.ticker_polling_interval = this.config.ticker.interval;
    }
    if (this.config.ticker.speed != null) {
      flashvars.ticker_speed = this.config.ticker.speed;
    }
  }
  if (this.config.fullscreen != null) {
    flashvars.fullscreen_enabled = this.config.fullscreen.enabled !== false;
  }
  if (this.config.titlebar != null) {
    flashvars.titlebar_enabled = this.config.titlebar.enabled !== false;
  }
  if (this.config.params != null) {
    flashvars.params = escape(JSON.stringify(this.config.params));
  }
  if (this.config.version != null) {
    flashvars.context_menu_label = this.config.version;
  }
  flashvars.show_play_button_overlay = false;
  flashvars.auto_play_list = false;
  flashvars.next_video_timer = 0;
  if (flashvars.context_menu_mode == null) {
    flashvars.context_menu_mode = this.debug === true ? "long" : "short";
  }
  this.sendNotification(FlashNotifications.CREATE_FLASH_VARS, {
    flashvars: flashvars,
    config: this.config
  });
  if (flash.vars != null) {
    _ref3 = flash.vars;
    for (key in _ref3) {
      value = _ref3[key];
      flashvars[key] = value;
    }
  }
  return flashvars;
};

/**
*/
FlashPlayer.prototype.createXML = function(config) {
  var app, clss, plugin, plugins, staticConfig, str, url, xml, _i, _j, _len, _len1;
  xml = XMLUtils.parse(config.flash.xml);
  this.sendNotification(FlashNotifications.CREATE_XML, {
    config: config,
    xml: xml
  });
  plugins = xml.getElementsByTagName("plugin");
  staticConfig = config.flash["static"];
  if ((staticConfig != null ? staticConfig.enabled : void 0) === true && (staticConfig.plugins != null)) {
    for (_i = 0, _len = plugins.length; _i < _len; _i++) {
      plugin = plugins[_i];
      if (!((clss = staticConfig.plugins[plugin.getAttribute("id")]) != null)) {
        continue;
      }
      plugin.setAttribute("type", "static");
      XMLUtils.updateTextContent(plugin, clss);
    }
  } else if (this.debug === true) {
    for (_j = 0, _len1 = plugins.length; _j < _len1; _j++) {
      plugin = plugins[_j];
      if (!(plugin.getAttribute("id") === "AkamaiAdvancedStreamingPlugin")) {
        continue;
      }
      url = plugin.textContent || plugin.text;
      XMLUtils.updateTextContent(plugin, url.replace("AkamaiAdvancedStreamingPlugin.swf", "AkamaiAdvancedStreamingPlugin-logging.swf"));
    }
  }
  str = XMLUtils.serialize(xml);
  app = str.match(/<application>[\w\W\s\S\d\D]*<\/application>/)[0] || str;
  app = app.replace(/[\n\r\t]/g, "");
  return escape(app);
};

/**
*/
FlashPlayer.prototype.createdHandler = function(obj) {
  var _this = this;
  this.video = obj.ref;
  this.video.className = "video";
  this.video.eventHandler = function(eventName, body) {
    return _this.eventHandler(eventName, body);
  };
  this.sendNotification(FlashNotifications.FLASH_CREATED);
  if (this.getMedium() != null) {
    this.setMedium(this.media.medium);
  }
};

/**
*/
FlashPlayer.prototype.eventHandler = function(eventName, body) {
  var error, event, state, type;
  try {
    switch (eventName) {
      case FlashNotifications.INITIALIZED:
        type = state = "ready";
        break;
      case FlashNotifications.RESET:
        if (!(body != null)) {
          state = "ready";
        }
        this.started = false;
        break;
      case FlashNotifications.LOADING:
        type = "loadstart";
        break;
      case FlashNotifications.PLAYER_ERROR:
        type = state = "error";
        break;
      case FlashNotifications.MEDIA_ERROR:
        type = state = "error";
        break;
      case FlashNotifications.ERROR_STREAM_NOT_FOUND:
        type = state = "error";
        break;
      case FlashNotifications.CAPABILITY_CHANGE:
        event = body.type;
        if (event === "canPlayChange" && body.enabled === true) {
          type = "canplay";
          this.loaded = true;
        } else if (event === "canSeekChange" && body.enabled === true) {
          type = "canplaythrough";
        } else if (event === "temporalChange" && body.enabled === true) {
          type = "loadedmetadata";
        }
        break;
      case FlashNotifications.PLAYBACK_OPEN:
        type = "started";
        this.started = true;
        break;
      case FlashNotifications.PLAYING:
        if (!this.started) {
          this.sendNotification(Notifications.PLAY, body);
        }
        type = state = "playing";
        this.ended = false;
        this.paused = false;
        break;
      case FlashNotifications.PLAY_REQUEST:
        type = "playrequest";
        break;
      case FlashNotifications.PLAY:
        if (this.playState !== "paused" && this.started) {
          type = "play";
        }
        break;
      case FlashNotifications.ENDED:
        type = state = "ended";
        this.ended = true;
        break;
      case FlashNotifications.PAUSED:
        type = "pause";
        state = "paused";
        this.paused = true;
        break;
      case FlashNotifications.BUFFERING:
        if (this.className !== "ended") {
          type = state = "waiting";
        }
        break;
      case FlashNotifications.DURATION_CHANGE:
        if (!isNaN(body.time)) {
          type = "durationchange";
          body = body.time;
        }
        break;
      case FlashNotifications.VOLUME_CHANGE:
        type = "volumechange";
        break;
      case FlashNotifications.TIME_UPDATE:
        type = "timeupdate";
        break;
      case FlashNotifications.SEEKING_CHANGE:
        type = body.seeking ? "seeking" : "seeked";
        this.seeking = body.seeking;
        break;
      case FlashNotifications.FULLSCREEN_CHANGE:
        type = "fullscreenchange";
        body = body.displayState === "fullScreen";
        break;
      case FlashNotifications.FAIL_OVER_ATTEMPT:
        type = "failoverattempt";
        body = body;
        break;
      case FlashNotifications.ERROR:
        eventName = null;
    }
    if ((eventName != null) && eventName !== type) {
      this.sendNotification(Notifications.DISPATCH_EVENT, {
        type: eventName,
        data: body,
        player: this.parent
      });
      this.sendNotification(eventName, body);
    }
    if (type != null) {
      if (type === "error") {
        error = body.error || body;
        this.error("Flash Error", error);
      }
      this.sendNotification(type, body);
    }
    if (state != null) {
      this.setPlayState(state);
    }
  } catch (error) {
    this.error("Flash Event Error", error);
  }
};

FlashPlayer.prototype.error = function(msg, error) {
  this.logger.error("[AMP ERROR] " + msg + ":", error);
};

/**
 * Sets the player's play state and adds CSS class to player div
*/
FlashPlayer.prototype.setPlayState = function(state) {
  var states;
  if (state === this.playState) {
    return;
  }
  states = {
    newState: state,
    oldState: this.playState
  };
  this.playState = state;
  this.sendNotification(Notifications.PLAY_STATE_CHANGE, states);
  return state;
};

/**
 * Initializes the player to a given set of parameters
*/
FlashPlayer.prototype.setMedia = function(value) {
  this.media = value;
  if (this.playState != null) {
    this.setPlayState("ready");
  }
  if (value.src != null) {
    this.setSrc(value.src);
  }
  if ((value.source != null) && value.source.length > 0) {
    this.setSource(value.source);
  }
  this.sendNotification(Notifications.MEDIA_CHANGE, value);
  this.loaded = true;
  this.video.loadURL(this.media.src, value);
  return value;
};

/**
*/
FlashPlayer.prototype.getMedia = function() {
  return this.media;
};

/**
 * Loads the video.
 *
*/
FlashPlayer.prototype.load = function() {
  this.loaded = true;
  this.video.loadURL(this.media.src);
};

/**
 * Plays the currently loaded video.
 *
*/
FlashPlayer.prototype.play = function() {
  if (!this.loaded) {
    this.load();
    return;
  }
  this.video.unpause();
};

/**
*/
FlashPlayer.prototype.setMuted = function(value) {
  this.muted = value;
  try {
    if (value === true) {
      this.video.mute();
    } else {
      this.video.unmute();
    }
  } catch (error) {
    this.error("Flash muted error", error);
  }
  return value;
};

/**
*/
FlashPlayer.prototype.getMuted = function() {
  return this.muted;
};

/**
 * The source url of video.
 *
 * @param {String} value The source url of the video to play.
*/
FlashPlayer.prototype.getSrc = function(value) {
  return this.video.getURL();
};

FlashPlayer.prototype.setSrc = function(value) {
  this.media.src = value;
  this.loaded = false;
  this.setMedium(Utils.getMimeType(value));
  return value;
};

/**
*/
FlashPlayer.prototype.setAutoplay = function(value) {
  this.video.setPlayerProperty("autoplay", value);
  return value;
};

FlashPlayer.prototype.getAutoplay = function() {
  return this.video.getPlayerProperty("autoplay");
};

/**
 * The url to the video.
 * 
 * @param {String} value 
 *    The new title of the video
 * @returns {Boolean} 
 *    The title of the video
 * @type {String}
*/
FlashPlayer.prototype.getMedium = function() {
  return this.media.medium;
};

FlashPlayer.prototype.setMedium = function(value) {
  var newState, oldState;
  if (value === this.media.medium) {
    return;
  }
  if ((this.media.medium != null) && (this.media.medium != null)) {
    oldState = "medium-" + this.media.medium;
  }
  newState = this.media.medium = /audio/.test(value) ? "audio" : "video";
  this.sendNotification(Notifications.MEDIUM_CHANGE, {
    newState: "medium-" + newState,
    oldState: oldState
  });
  return value;
};

/**
 * Sets the source url of video.
 *
 * @param {String} value The source url of the video to play.
*/
FlashPlayer.prototype.setSource = function(value) {
  var item,
    _this = this;
  if (!(value != null) || value.length < 1) {
    return;
  }
  this.media.source = value;
  this.loaded = false;
  item = Utils.selectSource(value, function(type) {
    return _this.canPlayType(type);
  });
  if (((item != null ? item.src : void 0) != null) && item.src !== "") {
    this.setSrc(item.src);
    if (typeof type !== "undefined" && type !== null) {
      this.setMedium(type);
    }
  } else {
    throw new Error("No valid source could be found");
  }
  return value;
};

/**
 * Gets the source url of video.
 *
 * @return {Number} The source url of the video.
*/
FlashPlayer.prototype.getSource = function(value) {
  return this.media.source;
};

/**
 * Gets the source url of video.
 *
 * @return {Number} The source url of the video.
*/
FlashPlayer.prototype.getSeeking = function() {
  return this.seeking;
};

/**
 * Gets the source url of video.
 *
 * @return {Number} The source url of the video.
*/
FlashPlayer.prototype.getPaused = function() {
  return this.paused;
};

/**
 * Gets the source url of video.
 *
 * @return {Number} The source url of the video.
*/
FlashPlayer.prototype.getEnded = function() {
  return this.ended;
};

/**
*/
FlashPlayer.prototype.getFlashXML = function() {
  return XMLUtils.parse(this.getConfigXMLString());
};

/**
*/
FlashPlayer.prototype.getFlashVars = function() {
  return this.flashvars;
};

FlashPlayer.prototype.evaluateBinding = function(str) {
  return this.video.evaluateBinding(str);
};

FlashPlayer.prototype.canPlayType = function(mimeType) {
  if (__indexOf.call(Utils.flashTypes, mimeType) >= 0) {
    return "maybe";
  } else {
    return "";
  }
};

FlashPlayer.prototype.replay = function() {
  this.video.replay();
};

FlashPlayer.prototype.pause = function() {
  this.video.pause();
};

FlashPlayer.prototype.getCurrentTime = function(value) {
  return this.video.getCurrentTime();
};

FlashPlayer.prototype.setCurrentTime = function(value) {
  this.video.jumpToTime(value);
  return value;
};

FlashPlayer.prototype.getParams = function() {
  return this.video.getParams();
};

FlashPlayer.prototype.setParams = function(value) {
  this.video.setParams(value);
  return value;
};

FlashPlayer.prototype.getVolume = function() {
  return this.video.getVolume();
};

FlashPlayer.prototype.setVolume = function(value) {
  this.video.setVolume(value);
  return value;
};

FlashPlayer.prototype.getDuration = function() {
  return this.video.getDuration();
};

FlashPlayer.prototype.enterFullScreen = function() {
  this.video.enterFullScreen();
};

FlashPlayer.prototype.exitFullScreen = function() {
  this.video.exitFullScreen();
};

/**
 * The ModuleAdapter class.
 * 
 * @param {Module} module
 * @constructor
 * @private
 * @extends {puremvc.Mediator}
*/
function ModuleAdapter(module) {
  this.module = module;
  ModuleAdapter.__super__.constructor.call(this, module.getModuleName(), this);
}


__extends(ModuleAdapter, puremvc.Mediator);


ModuleAdapter.prototype.module = null;

ModuleAdapter.prototype.mediator = null;

ModuleAdapter.prototype.initializeNotifier = function(key) {
  var publications,
    _this = this;
  ModuleAdapter.__super__.initializeNotifier.call(this, key);
  publications = this.module.listNotificationPublications();
  if (publications != null) {
    this.mediator = new puremvc.Mediator(this.facade.getModuleName());
    this.mediator.listNotificationInterests = function() {
      return publications;
    };
    this.mediator.handleNotification = function(notification) {
      _this.facade.sendNotification(notification.getName(), notification.getBody(), notification.getType());
    };
  }
};

ModuleAdapter.prototype.onRegister = function() {
  if (this.mediator != null) {
    this.module.registerMediator(this.mediator);
  }
};

ModuleAdapter.prototype.onRemove = function() {
  if (this.mediator != null) {
    this.module.removeMeditator(this.mediator);
  }
};

/**
 * Overridden so this class may subscribe to all notifications
 * @return An Array
 *
*/
ModuleAdapter.prototype.listNotificationInterests = function() {
  return this.module.listNotificationInterests();
};

/**
 * Handles notifications of interest to this mediator. Note that
 * the default declaration is to allow the super to handle the
 * note. This leaves the base JunctionMediator to handle things
 * like ACCEPT_INPUT_PIPE and ACCEPT_OUTPUT_PIPE  
 * @param note An INotification
 *
*/
ModuleAdapter.prototype.handleNotification = function(notification) {
  this.module.sendNotification(notification.getName(), notification.getBody(), notification.getType());
};

/**
 * The event interface.
 *
 * @interface
 * @private
*/
function IEvent() {}

/**
 * @type {string}
*/
IEvent.prototype.type;

/**
 * @enum {string}
 * @const
 * @private
*/

var PluginNotifications = {
  REGISTER_PLUGINS: "registerPlugins",
  PLUGIN_REGISTERED: "pluginRegistered"
};

/** 
 * Binds an event(s) to a handler function.
 * 
 * @param {IEventDispatcher}    target  The event target
 * @param {string|Array|number} type    The event to listen for
 * @param {Function}            handler The handler function to call when the event is dispatched. 
 * @constructor
 * @private
*/
function EventHandler(target, type, handler) {
  var _ref;
  this.target = target;
  this.type = type;
  this.handler = handler;
  this.trigger = __bind(this.trigger, this);

  EventHandler.instances.push(this);
  this.types = [];
  if (_ref = this.type, __indexOf.call(EventHandler.EVENTS, _ref) >= 0) {
    if (Utils.isTouchDevice()) {
      this.types.push(EventHandler.TOUCH_EVENTS[this.type]);
      if (this.type === EventHandler.TOUCH_EVENTS[1]) {
        this.types.push(EventHandler.TOUCH_EVENTS[4]);
      }
    } else {
      this.types.push(EventHandler.MOUSE_EVENTS[this.type]);
    }
  } else if (this.type instanceof Array) {
    this.types = this.type;
  } else {
    this.types.push(this.type);
  }
  this.bind();
}

/**
 * Represents the press user interaction
 * 
 * @type {number}
 * @static
 * @const
*/
EventHandler.PRESS = 0;

/**
 * Represents the release user interaction
 * 
 * @type {number}
 * @static
 * @const
*/
EventHandler.RELEASE = 1;

/**
 * Represents the move user interaction
 * 
 * @type {number}
 * @static
 * @const
*/
EventHandler.MOVE = 2;

/**
 * Represents the click user interaction
 * 
 * @type {number}
 * @static
 * @const
*/
EventHandler.CLICK = 3;

/**
 * Represents the right click (contextMenu) user interaction
 * 
 * @type {number}
 * @static
 * @const
*/
EventHandler.CONTEXTMENU = 4;

/**
 * The list of user interactions
 * 
 * @type {Array.<number>}
 * @static
 * @const
*/
EventHandler.EVENTS = [EventHandler.PRESS, EventHandler.RELEASE, EventHandler.MOVE, EventHandler.CLICK, EventHandler.CONTEXTMENU];

/**
 * The list of mouse interactions
 * 
 * @type {Array.<string>}
 * @static
 * @const
*/
EventHandler.MOUSE_EVENTS = ["mousedown", "mouseup", "mousemove", "click", "contextmenu"];

/**
 * The list of touch interactions
 * 
 * @type {Array.<string>}
 * @static
 * @const
*/
EventHandler.TOUCH_EVENTS = ["touchstart", "touchend", "touchmove", "click", "touchcancel"];

/**
 * An array of EventHandler instances.
 * 
 * @type {Array.<EventHandler>}
 * @static
*/
EventHandler.instances = [];

/**
 * Creates an EventHandler with the parameters provided.
 * 
 * @param {IEventDispatcher}    target  The event target
 * @param {string|Array|number} type    The event to listen for
 * @param {Function}            handler The handler function to call when the event is dispatched. 
 * @static
 * @return {EventHandler} the new EventHandler
*/
EventHandler.create = function(target, type, handler) {
  return new EventHandler(target, type, handler);
};

/**
 * Binds all EventHandlers of the provided target.
 * 
 * @param {IEventDispatcher} target
 * @static
*/
EventHandler.bind = function(target, type) {
  var i, instance, _i, _len, _ref;
  _ref = EventHandler.instances;
  for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
    instance = _ref[i];
    if (!(instance.target === target)) {
      continue;
    }
    if ((type != null) && instance.type !== type) {
      continue;
    }
    instance.bind();
  }
};

/**
 * Unbinds all EventHandlers of the provided target.
 * 
 * @param {IEventDispatcher} target
 * @static
*/
EventHandler.unbind = function(target, type) {
  var i, instance, _i, _len, _ref;
  _ref = EventHandler.instances;
  for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
    instance = _ref[i];
    if (!(instance.target === target)) {
      continue;
    }
    if ((type != null) && instance.type !== type) {
      continue;
    }
    instance.unbind();
  }
};

/**
 * Clear all EventHandlers of the provided target.
 * 
 * @param {IEventDispatcher} target
 * @static
*/
EventHandler.clear = function(target, type) {
  var i, instance, _i, _len, _ref;
  _ref = EventHandler.instances;
  for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
    instance = _ref[i];
    if (!((instance != null ? instance.target : void 0) === target)) {
      continue;
    }
    if ((type != null) && instance.type !== type) {
      continue;
    }
    instance.clear();
    EventHandler.instances.splice(i, 1);
  }
};

/**
 * The system event types for this EventTarget
 * 
 * @type {Array.<string>}
*/
EventHandler.prototype.types = null;

/**
 * Binds the target to the event
*/
EventHandler.prototype.bind = function() {
  var type, _i, _len, _ref;
  _ref = this.types;
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    type = _ref[_i];
    if (this.target.addEventListener != null) {
      this.target.addEventListener(type, this.trigger, false);
    } else if (this.target.attachEvent != null) {
      this.target.attachEvent("on" + type, this.trigger);
    }
  }
};

/**
 * Unbinds the target from the event
*/
EventHandler.prototype.unbind = function() {
  var type, _i, _len, _ref;
  _ref = this.types;
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    type = _ref[_i];
    if (this.target.removeEventListener != null) {
      this.target.removeEventListener(type, this.trigger);
    } else if (this.target.attachEvent != null) {
      this.target.removeEvent("on" + type, this.trigger);
    }
  }
};

/**
 * Clears the EventHandler
*/
EventHandler.prototype.clear = function() {
  this.unbind();
  this.target = null;
  this.handler = null;
  this.type = null;
  this.types = null;
};

/**
 * Triggers the event handler
*/
EventHandler.prototype.trigger = function(event) {
  this.handler(event);
};

/**
 * Creates a new instance of Context.
 * 
 * @constructor
 * @private
 * @extends {puremvc.Proxy}
 * @implements {IDataBindingContext}
*/
function DataBindingContext() {
  DataBindingContext.__super__.constructor.call(this);
  if (this.contextName == null) {
    this.contextName = this.constructor.NAME;
  }
}


__extends(DataBindingContext, puremvc.Proxy);


DataBindingContext.prototype.contextName = null;

DataBindingContext.prototype.contextData = null;

/**
*/
DataBindingContext.prototype.getContextName = function() {
  return this.contextName;
};

/**
*/
DataBindingContext.prototype.getContextData = function() {
  return this.contextData;
};

/**
 * The PlayRequestCommand class.
 *   
 * @constructor
 * @private
 * @extends {puremvc.SimpleCommand}
*/
function PlayRequestCommand() {
  PlayRequestCommand.__super__.constructor.call(this);
}


__extends(PlayRequestCommand, puremvc.SimpleCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
PlayRequestCommand.prototype.execute = function(notification) {
  this.sendNotification(Notifications.PLAY_REQUEST);
};

/** 
 * @param {Object} api
 * @constructor
 * @private
 * @extends {ModuleDispatcher}
*/
function PluginDispatcher(api) {
  PluginDispatcher.__super__.constructor.call(this, api);
}


__extends(PluginDispatcher, ModuleDispatcher);


/** @override
*/
PluginDispatcher.prototype.dispatchEvent = function(event) {
  event.player = this.facade.app.parent;
  this.dispatcher.dispatchEvent(event);
};

/** @override
*/
PluginDispatcher.prototype.getMessage = function(event) {
  return PluginDispatcher.__super__.getMessage.call(this, event).replace("[", "[" + (this.facade.app.getModuleName().toUpperCase()) + " ");
};

/**
 * The LocalizationProxy class. Used to track player localization settings.
 * 
 * @constructor
 * @private
 * @extends {DataBindingContext}
 * @param {Object}  init  The configuration object.
*/
function LocalizationProxy(init) {
  var key, lang;
  LocalizationProxy.__super__.constructor.call(this);
  if (init != null) {
    if (init.language != null) {
      this.data.language = init.language;
    }
    if (init.locales != null) {
      for (lang in init.locales) {
        if (this.data.locales[lang] != null) {
          for (key in init.locales[lang]) {
            this.data.locales[lang][key] = init.locales[lang][key];
          }
        } else {
          this.data.locales[lang] = init.locales[lang];
        }
      }
    }
  }
  this.setLocale(this.data.language);
}


__extends(LocalizationProxy, DataBindingContext);


/** @static
*/
LocalizationProxy.NAME = "LocalizationProxy";

LocalizationProxy.prototype.contextName = "l10n";

LocalizationProxy.prototype.data = {
  language: navigator.language || navigator.browserLanguage,
  locales: {
    en: {
      MSG_LIVE: "LIVE",
      MSG_REPLAY: "Replay",
      MSG_BUFFERING: "buffering...",
      MSG_CC: "CC",
      MSG_CC_TITLE: "Captions",
      MSG_CC_LANGUAGE: "Track :",
      MSG_CC_PRESETS: "Presets :",
      MSG_CC_FONT: "Font :",
      MSG_CC_EDGE: "Edge :",
      MSG_CC_SIZE: "Size :",
      MSG_CC_SCROLL: "Scroll :",
      MSG_CC_COLOR: "Color :",
      MSG_CC_BACKGROUND: "Background :",
      MSG_CC_WINDOW: "Window :",
      MSG_CC_OPACITY: "Opacity :",
      MSG_CC_SHOW_ADVANCED: "Show Advanced Settings",
      MSG_CC_HIDE_ADVANCED: "Hide Advanced Settings",
      MSG_CC_RESET: "Default",
      MSG_CC_CANCEL: "Cancel",
      MSG_CC_APPLY: "Apply",
      MSG_NEXT_VIDEO: "Video starts in: ",
      MSG_NEXT_AD: "Next ad starts in: ",
      MSG_CLOSE: "close",
      MSG_EN: "English",
      MSG_ES: "Spanish",
      MSG_DE: "German",
      MSG_FR: "French",
      MSG_IT: "Italian",
      MSG_RU: "Russian"
    }
  }
};

LocalizationProxy.prototype.locale = null;

/**
 * Gets the context data for this proxy.
 * 
 * @returns {Object} The contenxt data for this proxy
 * @override
*/
LocalizationProxy.prototype.getContextData = function() {
  return this.locale;
};

/**
 *
*/
LocalizationProxy.prototype.getLanguage = function() {
  return this.data.language;
};

LocalizationProxy.prototype.setLanguage = function(value) {
  this.data.language = value;
  this.setLocale(value);
  this.sendNotification(Notifications.LANGUAGE_CHANGED, value);
  return value;
};

/**
 *
*/
LocalizationProxy.prototype.setLocale = function(value) {
  this.locale = this.data.locales[value];
  if (!(this.locale != null)) {
    this.locale = this.data.locales[value.substring(0, 2)];
  }
  return value;
};

/**
 *
*/
LocalizationProxy.prototype.getLocales = function() {
  return this.data.locales;
};

LocalizationProxy.prototype.setLocales = function(value) {
  this.data.locales = value;
  return value;
};

/**
 *
*/
LocalizationProxy.prototype.getString = function(key) {
  var locale;
  locale = this.locale || this.data.locales.en;
  return locale[key] || "";
};

/**
 * Retrieves the full language name in the player's current language setting.
 * 
 * @param   {string}  lang  The language code.
 * @return  {string}        The full name of the language according to the player's current language setting.
*/
LocalizationProxy.prototype.getLanguageString = function(lang) {
  var key, str;
  if (typeof lang !== "string" || !(lang != null) || lang === "") {
    return "";
  }
  key = "MSG_" + (lang.toUpperCase());
  str = this.getString(key);
  if (str === "") {
    lang = lang.split("-").shift();
    key = "MSG_" + (lang.toUpperCase());
    str = this.getString(key);
  }
  return str;
};

/**
 * @enum {string}
 * @const
 * @private
*/

var SecurityNotifications = {
  CHECK_AUTHORIZATION: "checkAuthorization",
  AUTHORIZATION_FAILED: "authorizationfailed",
  AUTHORIZE: "authorize",
  AUTHORIZED: "authorized",
  SET_TOKEN: "settoken",
  SET_KEY: "setkey"
};

/**
 * Creates a new instance of SecurityProxy.
 * 
 * @constructor
 * @private
 * @extends {puremvc.Proxy}
*/
function SecurityProxy() {
  SecurityProxy.__super__.constructor.call(this, this.constructor.NAME, {});
  this.setupHDN1();
}


__extends(SecurityProxy, puremvc.Proxy);


/** @static
*/
SecurityProxy.NAME = "SecurityProxy";

/**
*/
SecurityProxy.prototype.setupHDN1 = function() {
  var _this = this;
  return window.retrieveToken = function(guid, url) {
    var token;
    _this.facade.logger.debug("HDN1: Token Requested", guid, url);
    token = _this.getToken();
    if (token != null) {
      _this.facade.video.tokenRetrievalSuccess("&primaryToken=" + token);
    } else {
      _this.sendNotification(SecurityNotifications.AUTHORIZE);
    }
    return true;
  };
};

/**
*/
SecurityProxy.prototype.getKey = function() {
  return this.data.key;
};

SecurityProxy.prototype.setKey = function(value) {
  this.data.key = value;
  return value;
};

/**
*/
SecurityProxy.prototype.getToken = function() {
  return this.data.token;
};

SecurityProxy.prototype.setToken = function(value) {
  this.data.token = value;
  return value;
};

/**
*/
SecurityProxy.prototype.getSecret = function() {
  var secret;
  if (!(this.data.token != null)) {
    return null;
  }
  secret = "";
  if (this.data.key != null) {
    secret += this.data.key;
  }
  secret += this.data.token;
  return secret;
};

/**
*/
SecurityProxy.prototype.createURL = function(url) {
  var secret;
  secret = this.getSecret();
  if (secret != null) {
    url += !/\?/.test(url) ? "?" : "&";
    url += secret;
  }
  return url;
};

/**
*/
SecurityProxy.prototype.getAuthorized = function() {
  return this.data.authorized;
};

SecurityProxy.prototype.setAuthorized = function(value) {
  this.data.authorized = value;
  return value;
};

/**
*/
SecurityProxy.prototype.getProvider = function() {
  return this.data.provider;
};

SecurityProxy.prototype.setProvider = function(value) {
  this.data.provider = value;
  return value;
};

/**
 * The ChangePlayStateCommand class.
 *   
 * @constructor
 * @private
 * @extends {puremvc.SimpleCommand}
*/
function ChangePlayStateCommand() {
  ChangePlayStateCommand.__super__.constructor.call(this);
}


__extends(ChangePlayStateCommand, puremvc.SimpleCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
ChangePlayStateCommand.prototype.execute = function(notification) {
  var app, state;
  app = this.facade.retrieveProxy(ApplicationStateProxy.NAME);
  state = notification.getBody();
  app.setPlayState(state);
};

/**
 * The MediaChangeCommand class.
 *   
 * @constructor
 * @private
 * @extends {puremvc.SimpleCommand}
*/
function MediaChangeCommand() {
  MediaChangeCommand.__super__.constructor.call(this);
}


__extends(MediaChangeCommand, puremvc.SimpleCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
MediaChangeCommand.prototype.execute = function(notification) {
  var autoPlay, configProxy, media, playbackProxy, player;
  this.facade.logger.debug("MediaChangeCommand", notification.getBody());
  media = notification.getBody();
  player = this.facade.retrieveProxy(PlayerProxy.NAME);
  player.setPlaybackType(media.type);
  playbackProxy = this.facade.retrieveProxy(PlaybackProxy.NAME);
  playbackProxy.setSrc(media.src);
  playbackProxy.setCurrentTime(media.startTime || 0);
  configProxy = this.facade.retrieveProxy(ConfigurationProxy.NAME);
  autoPlay = playbackProxy.initialized && (configProxy.getAutoplay() || media.autoplay === true);
  if (autoPlay === true) {
    setTimeout(this.sendNotification.bind(this, Notifications.PLAY), 0);
  }
};

/**
 * The ChangeDurationCommand class.
 *   
 * @constructor
 * @private
 * @extends {puremvc.SimpleCommand}
*/
function ChangeDurationCommand() {
  ChangeDurationCommand.__super__.constructor.call(this);
}


__extends(ChangeDurationCommand, puremvc.SimpleCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
ChangeDurationCommand.prototype.execute = function(notification) {
  var duration, mediaProxy;
  this.facade.logger.debug("ChangeDurationCommand", notification.getBody());
  duration = notification.getBody();
  mediaProxy = this.facade.retrieveProxy(MediaProxy.NAME);
  if (mediaProxy.getDuration() === duration) {
    return;
  }
  mediaProxy.setDuration(duration);
};

/**
 * The ErrorCommand class.
 *   
 * @constructor
 * @private
 * @extends {puremvc.SimpleCommand}
*/
function ErrorCommand() {
  ErrorCommand.__super__.constructor.call(this);
}


__extends(ErrorCommand, puremvc.SimpleCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
ErrorCommand.prototype.execute = function(notification) {
  var core, playbackProxy;
  playbackProxy = this.facade.retrieveProxy(PlaybackProxy.NAME);
  core = playbackProxy.getVideo();
  EventHandler.clear(core);
  this.facade.logger.error("[AMP ERROR]", notification.getBody());
  this.sendNotification(Notifications.CHANGE_PLAY_STATE, PlayState.ERROR);
};

/**
 * The ReadyCommand class.
 *   
 * @constructor
 * @private
 * @extends {puremvc.SimpleCommand}
*/
function ReadyCommand() {
  ReadyCommand.__super__.constructor.call(this);
}


__extends(ReadyCommand, puremvc.SimpleCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
ReadyCommand.prototype.execute = function(notification) {
  var media, volume, _ref, _ref1;
  this.facade.logger.debug("ReadyCommand");
  volume = (_ref = this.facade.config) != null ? _ref.volume : void 0;
  if (volume != null) {
    this.sendNotification(Notifications.CHANGE_VOLUME, volume);
  }
  this.sendNotification(Notifications.CHANGE_DISPLAY_STATE, DisplayState.NORMAL);
  this.sendNotification(Notifications.CHANGE_PLAY_STATE, PlayState.READY);
  this.sendNotification(Notifications.CHANGE_ACTIVE_STATE, ActiveState.ACTIVE);
  media = (_ref1 = this.facade.config) != null ? _ref1.media : void 0;
  if (media != null) {
    setTimeout(this.sendNotification.bind(this, Notifications.SET_MEDIA, media), 0);
  }
};

/**
 * The UpdateDataBindingsCommand class.
 *   
 * @constructor
 * @private
 * @extends {puremvc.SimpleCommand}
*/
function UpdateDataBindingsCommand() {
  UpdateDataBindingsCommand.__super__.constructor.call(this);
}


__extends(UpdateDataBindingsCommand, puremvc.SimpleCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
UpdateDataBindingsCommand.prototype.execute = function(notification) {
  var bindings, body;
  this.facade.logger.debug("UpdateDataBindingsCommand");
  body = notification.getBody() || {};
  bindings = this.facade.retrieveProxy(DataBindingProxy.NAME);
  bindings.compile(body.contexts, body.suppressErrors);
};

/**
 * The ChangeParamsCommand class.
 *   
 * @constructor
 * @private
 * @extends {puremvc.SimpleCommand}
*/
function ChangeParamsCommand() {
  ChangeParamsCommand.__super__.constructor.call(this);
}


__extends(ChangeParamsCommand, puremvc.SimpleCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
ChangeParamsCommand.prototype.execute = function(notification) {
  var params, proxy;
  this.facade.logger.debug("ChangeParamsCommand", notification.getBody());
  params = notification.getBody();
  proxy = this.facade.retrieveProxy(ParamsProxy.NAME);
  proxy.setData(params);
  this.sendNotification(Notifications.UPDATE_DATA_BINDINGS, {
    suppressErrors: true
  });
};

/**
 * The SetMediaCommand class.
 *   
 * @constructor
 * @private
 * @extends {puremvc.SimpleCommand}
*/
function SetMediaCommand() {
  SetMediaCommand.__super__.constructor.call(this);
}


__extends(SetMediaCommand, puremvc.SimpleCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
SetMediaCommand.prototype.execute = function(notification) {
  var media, mediaProxy;
  media = notification.getBody();
  this.facade.logger.debug("SetMediaCommand", media);
  this.sendNotification(Notifications.CHANGE_MEDIA, media);
  mediaProxy = this.facade.retrieveProxy(MediaProxy.NAME);
  media = mediaProxy.getData();
  if (mediaProxy.authorized === true) {
    this.sendNotification(Notifications.MEDIA_CHANGE, media);
  }
};

/**
 * The ChangeMediaCommand class.
 *   
 * @constructor
 * @private
 * @extends {puremvc.SimpleCommand}
*/
function ChangeMediaCommand() {
  ChangeMediaCommand.__super__.constructor.call(this);
}


__extends(ChangeMediaCommand, puremvc.SimpleCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
ChangeMediaCommand.prototype.execute = function(notification) {
  var media, mediaProxy;
  this.facade.logger.debug("ChangeMediaCommand", notification.getBody());
  media = notification.getBody();
  mediaProxy = this.facade.retrieveProxy(MediaProxy.NAME);
  this.sendNotification(Notifications.CHANGE_PLAY_STATE, PlayState.READY);
  this.sendNotification(Notifications.CHANGE_ACTIVE_STATE, ActiveState.ACTIVE);
  try {
    mediaProxy.setData(media);
  } catch (error) {
    this.sendNotification(Notifications.ERROR, error.message);
  }
  this.sendNotification(Notifications.UPDATE_DATA_BINDINGS);
  this.sendNotification(SecurityNotifications.AUTHORIZE);
};

/**
 * The OverlayLayerMediator class.
 * 
 * @constructor
 * @private
 * @extends {LayerMediator}
*/
function OverlayLayerMediator() {
  OverlayLayerMediator.__super__.constructor.call(this);
}


__extends(OverlayLayerMediator, LayerMediator);


OverlayLayerMediator.prototype.componentName = "overlays";

OverlayLayerMediator.NAME = "OverlayLayerMediator";

/**
*/
OverlayLayerMediator.prototype.createMediatorName = function() {
  return OverlayLayerMediator.NAME;
};

/**
 * Overridden so this class may subscribe to all notifications
 * @return An Array
 * 
 * @override
*/
OverlayLayerMediator.prototype.listNotificationInterests = function() {
  return [Notifications.ADD_OVERLAY, Notifications.REMOVE_OVERLAY];
};

/**
 * Handles notifications of interest to this mediator. Note that
 * the default declaration is to allow the super to handle the
 * note. This leaves the base JunctionMediator to handle things
 * like ACCEPT_INPUT_PIPE and ACCEPT_OUTPUT_PIPE  
 * 
 * @param note An INotification
 * @override
*/
OverlayLayerMediator.prototype.handleNotification = function(notification) {
  var name, overlay;
  name = notification.getName();
  overlay = notification.getBody();
  switch (name) {
    case Notifications.ADD_OVERLAY:
      this.viewComponent.appendChild(overlay);
      break;
    case Notifications.REMOVE_OVERLAY:
      this.viewComponent.removeChild(overlay);
  }
};

/**
 * @constructor
 * @private
 * @extends {LayerMediator}
*/
function PosterMediator() {
  PosterMediator.__super__.constructor.call(this);
}


__extends(PosterMediator, LayerMediator);


PosterMediator.prototype.componentName = "poster";

PosterMediator.prototype.poster = null;

PosterMediator.prototype.clickHandler = null;

/**
 * @override
*/
PosterMediator.prototype.onRegister = function() {
  this.poster = this.create("poster-content");
  this.poster.onclick = this.onclick.bind(this);
  PosterMediator.__super__.onRegister.call(this);
};

/**
*/
PosterMediator.prototype.onclick = function(event) {
  event.stopImmediatePropagation();
  event.preventDefault();
  this.sendNotification(UserNotifications.TOGGLE_PLAY_PAUSE, true);
  return false;
};

/**
 * @override
*/
PosterMediator.prototype.listNotificationInterests = function() {
  return [Notifications.CHANGE_MEDIA];
};

/**
 * @override
*/
PosterMediator.prototype.handleNotification = function(notification) {
  var html, src;
  switch (notification.getName()) {
    case Notifications.CHANGE_MEDIA:
      src = notification.getBody().poster;
      html = (src != null) && src !== "" ? "<img src=\"" + src + "\" class=\"" + this.cssPrefix + "poster-image\" />" : "";
      this.poster.innerHTML = html;
  }
};

/**
 * ErrorLayerMediator class.
 *   
 * @constructor
 * @extends {LayerMediator}
 * @private
*/
function ErrorLayerMediator() {
  ErrorLayerMediator.__super__.constructor.call(this);
}


__extends(ErrorLayerMediator, LayerMediator);


ErrorLayerMediator.prototype.message = null;

ErrorLayerMediator.prototype.componentName = "error";

/**
 * @override
*/
ErrorLayerMediator.prototype.onRegister = function() {
  ErrorLayerMediator.__super__.onRegister.call(this);
  this.message = this.create("error-message");
};

/**
 * @override
*/
ErrorLayerMediator.prototype.listNotificationInterests = function() {
  return [Notifications.ERROR];
};

/**
 * @override
*/
ErrorLayerMediator.prototype.handleNotification = function(notification) {
  var error, msg;
  switch (notification.getName()) {
    case Notifications.ERROR:
      error = notification.getBody();
      msg = "Error: ";
      switch (error.code) {
        case MediaError.MEDIA_ERR_ABORTED:
          msg += "Media was aborted.";
          break;
        case MediaError.MEDIA_ERR_DECODE:
          msg += "Decode Error.";
          break;
        case MediaError.MEDIA_ERR_NETWORK:
          msg += "Network Error.";
          break;
        case MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED:
          msg += "Source not supported.";
          break;
        default:
          msg += error;
      }
      this.message.textContent = msg;
  }
};

/**
 * @constructor
 * @private
 * @extends {OverlayMediator}
*/
function TitleBarMediator() {
  TitleBarMediator.__super__.constructor.call(this);
}


__extends(TitleBarMediator, OverlayMediator);


TitleBarMediator.prototype.componentName = "title-bar";

TitleBarMediator.prototype.title = null;

TitleBarMediator.prototype.description = null;

/**
 * @override
*/
TitleBarMediator.prototype.onRegister = function() {
  this.title = this.create("title-text");
  this.description = this.create("description-text");
  TitleBarMediator.__super__.onRegister.call(this);
};

/**
 * @override
*/
TitleBarMediator.prototype.listNotificationInterests = function() {
  return [Notifications.CHANGE_MEDIA];
};

/**
 * @override
*/
TitleBarMediator.prototype.handleNotification = function(notification) {
  var metadata, title;
  switch (notification.getName()) {
    case Notifications.CHANGE_MEDIA:
      metadata = notification.getBody();
      title = metadata.title;
      if (!(title != null) || title === "" || title === "undefined") {
        this.classList.add("hidden");
      } else {
        this.title.innerHTML = title;
        this.description.innerHTML = metadata.description ? metadata.description : "";
        this.classList.remove("hidden");
      }
  }
};

/**
 * The PluginAPI class.
 * 
 * @param         {!Plugin} plugin  The base module this API wraps.
 * @constructor
 * @extends {ModuleAPI}
*/
function PluginAPI(plugin) {
  ModuleAPI.attachModuleDispatcher(plugin, new PluginDispatcher(this));
  this.getConfig = function() {
    return plugin.getConfig();
  };
}


__extends(PluginAPI, ModuleAPI);


/**
 * @expose
*/
PluginAPI.prototype.getConfig = function() {};

/**
 * @enum {string}
 * @const
 * @private
*/

var Namespace = {
  PREFIX: "akamai-"
};

/** 
 * The Plugin class. Acts as a base for plugins.
 *   
 * @param {Module}  app     The parent module of this plugin.
 * @param {Object}  config  The plugin's configuration object.
 * @constructor
 * @private
 * @extends {Module}
*/
function Plugin(app, config) {
  this.app = app;
  this.logger = this.app.logger;
  Plugin.__super__.constructor.call(this, config);
}


__extends(Plugin, Module);


Plugin.NAME = "Plugin";

Plugin.prototype.app = null;

/**
 * Framework based initialization function for defining default
 * mvc classes. Meant to be overwritten by base classes.
 *   
 * @override
*/
Plugin.prototype.initialize = function() {
  this.createModel();
  this.createController();
};

/** @override
*/
Plugin.prototype.createAPI = function() {
  return new PluginAPI(this);
};

/** @override
*/
Plugin.prototype.onRegister = function() {
  var proxy;
  proxy = this.retrieveProxy(PluginProxy.NAME);
  if (((proxy != null ? proxy.getLoaded : void 0) != null) && !proxy.getLoaded()) {
    proxy.load(this.registered.bind(this));
  } else {
    this.registered();
  }
};

/**
*/
Plugin.prototype.registered = function() {
  var _ref;
  this.createView();
  if ((_ref = this.retrieveProxy(PluginProxy.NAME)) != null) {
    if (typeof _ref.initialize === "function") {
      _ref.initialize();
    }
  }
  this.sendNotification(PluginNotifications.PLUGIN_REGISTERED, this);
};

/** @override
*/
Plugin.prototype.listNotificationPublications = function() {
  var key, notes, value;
  notes = [Notifications.ADD_LAYER, Notifications.REMOVE_LAYER, Notifications.ADD_OVERLAY, Notifications.REMOVE_OVERLAY, Notifications.ADD_APPLICATION_STATE, Notifications.REMOVE_APPLICATION_STATE, Notifications.IS_USER_ACTIVE];
  return notes.concat((function() {
    var _results;
    _results = [];
    for (key in PluginNotifications) {
      value = PluginNotifications[key];
      _results.push(value);
    }
    return _results;
  })());
};

/** 
 * @constructor
 * @private
*/
function PluginAdapter() {
  this.plugins = [];
  this.registered = [];
  PluginAdapter.__super__.constructor.call(this, this.constructor.NAME, {});
}


__extends(PluginAdapter, puremvc.Mediator);


PluginAdapter.NAME = "PluginAdapter";

PluginAdapter.prototype.plugins = null;

PluginAdapter.prototype.registered = null;

/**
 * Registers the appropriate pipes and listeners when
 * this class is registered 
 * 
 * @override
*/
PluginAdapter.prototype.onRegister = function() {
  return PluginAdapter.__super__.onRegister.call(this);
};

/**
 * Overridden so this class may subscribe to all notifications
 * @return An Array
 * 
 * @override
*/
PluginAdapter.prototype.listNotificationInterests = function() {
  return [PluginNotifications.REGISTER_PLUGINS, PluginNotifications.PLUGIN_REGISTERED];
};

/**
 * Handles notifications of interest to this mediator. Note that
 * the default declaration is to allow the super to handle the
 * note. This leaves the base JunctionMediator to handle things
 * like ACCEPT_INPUT_PIPE and ACCEPT_OUTPUT_PIPE  
 * 
 * @param note An INotification
 * @override
*/
PluginAdapter.prototype.handleNotification = function(notification) {
  var body, name, plugin, _i, _len, _ref;
  name = notification.getName();
  body = notification.getBody();
  switch (name) {
    case PluginNotifications.REGISTER_PLUGINS:
      this.plugins = body;
      _ref = this.plugins;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        plugin = _ref[_i];
        this.facade.registerModule(plugin);
      }
      break;
    case PluginNotifications.PLUGIN_REGISTERED:
      this.registered.push(body);
      this.facade.logger.debug("Plugin Registered: " + body.constructor.NAME);
      if (this.registered.length === this.plugins.length) {
        this.sendNotification(Notifications.READY, this.facade.config);
      }
  }
};

/**
 * The ClassList class.
 * 
 * @param {!DOMElement}  element
 *    The DOM Element
 *
 * @constructor
*/
function ClassList(element) {
  this.element = element;
}

ClassList.prototype.element = null;

ClassList.prototype.prefix = Namespace.PREFIX;

/**
*/
ClassList.prototype.contains = function(className) {
  return this.constructor.contains(className, this.element, this.prefix);
};

/**
*/
ClassList.prototype.add = function(className) {
  this.constructor.add(className, this.element, this.prefix);
};

/**
*/
ClassList.prototype.remove = function(className) {
  this.constructor.remove(className, this.element, this.prefix);
};

/**
*/
ClassList.prototype.toggle = function(className) {
  return this.constructor.contains(className, this.element, this.prefix);
};

/**
*/
ClassList.contains = function(className, element, prefix) {
  var css, _ref;
  if (prefix == null) {
    prefix = "";
  }
  css = prefix + className;
  if (((_ref = element.classList) != null ? _ref.contains : void 0) != null) {
    return element.classList.contains(css);
  } else {
    return element.className.indexOf(css) !== -1;
  }
};

/**
*/
ClassList.add = function(className, element, prefix) {
  var css, _ref;
  if (prefix == null) {
    prefix = "";
  }
  css = prefix + className;
  if (((_ref = element.classList) != null ? _ref.add : void 0) != null) {
    element.classList.add(css);
  } else {
    if (!this.contains(className, element)) {
      if (element.className !== "") {
        element.className += " " + css;
      } else {
        element.className = css;
      }
    }
  }
};

/**
*/
ClassList.remove = function(className, element, prefix) {
  var css, regexp, _ref;
  if (prefix == null) {
    prefix = "";
  }
  css = prefix + className;
  if (((_ref = element.classList) != null ? _ref.remove : void 0) != null) {
    element.classList.remove(css);
  } else {
    if (this.contains(className, element)) {
      regexp = new RegExp(" ?" + css);
      element.className = element.className.replace(regexp, "");
    }
  }
};

/**
*/
ClassList.toggle = function(className, element, prefix) {
  var css, _ref;
  if (prefix == null) {
    prefix = "";
  }
  css = prefix + className;
  if (((_ref = element.classList) != null ? _ref.toggle : void 0) != null) {
    element.classList.toggle(this.prefix + className);
  } else {
    if (this.contains(className, element)) {
      this.remome(className, element);
    } else {
      this.add(className, element);
    }
  }
};

/**
 * @enum {string}
 * @const
 * @private
*/

var UserNotifications = {
  TOGGLE_PLAY_PAUSE: "usertogglePlayPause",
  PLAY: "userplay",
  PAUSE: "userpause",
  SEEK: "userseek"
};

function UI() {}

/**
 * Creates an HTML element.
 * 
 * @param   {?(string|Array.<string>)}  type
 * @param   {?DOMElement}  parent 
 * @param   {?string|DOMElement}  element
 * @param   {?string} text
 * @return  {DOMElement}
*/
UI.create = function(type, parent, element, text) {
  var classList, item, viewComponent, _i, _len;
  if (element == null) {
    element = "div";
  }
  if (typeof element === "string") {
    element = document.createElement(element);
  }
  classList = new ClassList(element);
  if (type != null) {
    if (typeof type === "string") {
      type = [type];
    }
    for (_i = 0, _len = type.length; _i < _len; _i++) {
      item = type[_i];
      classList.add(item);
    }
  }
  element._classList = classList;
  if (text != null) {
    if (element.innerText != null) {
      element.innerText = text;
    } else {
      element.textContent = text;
    }
  }
  if (parent != null) {
    if (parent.getViewComponent != null) {
      viewComponent = parent.getViewComponent();
    }
    if (viewComponent != null) {
      parent = viewComponent;
    }
    parent.appendChild(element);
  }
  return element;
};

/** 
 * Binds a mediators event handlers to an element.
 * 
 * @param {!DOMElement} element
 * @param {!mediator} mediator
*/
UI.bindEvents = function(element, handlers, exceptions) {
  var key, value;
  if (exceptions == null) {
    exceptions = ["onRemove", "onRegister"];
  }
  for (key in handlers) {
    value = handlers[key];
    if (!(__indexOf.call(exceptions, key) >= 0) && /^on/.test(key) && ((value != null ? value.bind : void 0) != null)) {
      element[key] = value.bind(handlers);
    }
  }
};

/**
 * Creates a unique id.
 *
 * @param   {number=}   base
 *    The base to use for representing a numeric value. 
 * 
 * @return  {string}
 *    The unique id.
*/
UI.createUID = function(base) {
  var date, len, max, rand;
  if (base == null) {
    base = 16;
  }
  date = Date.now();
  len = 2;
  max = base * len - 1;
  rand = Math.round(Math.random() * max + base);
  return (rand.toString(16) + date.toString(16)).toUpperCase();
};

function ITokenized() {}

/**
 * The tokenized data structure
*/
ITokenized.prototype.data = null;

/**
 * The literal value after compiliation
*/
ITokenized.prototype.value = null;

/**
 * The original data structure
*/
ITokenized.prototype.source = null;

/**
 *
*/
ITokenized.prototype.parse = function(data) {};

/**
 * Compiles the tokenized values in the data property
 * and saves them to the value property. As a convenience
 * this function returns the value property.
 * 
 * @param context         An object who's properties can be called from within a token
 * @param suppressErrors  Flag indicating wether or not to suppress errors. Useful when certain context items are known not to exist.
 * @return                The compile value object.
*/
ITokenized.prototype.compile = function(context, suppressErrors) {
  if (context == null) {
    context = {};
  }
  if (suppressErrors == null) {
    suppressErrors = false;
  }
};

/** 
 * @constructor 
 * @private
*/
function DataBindingProxy() {
  DataBindingProxy.__super__.constructor.call(this, this.constructor.NAME, {});
  this.data = {};
  this.contextMap = {};
  this.configurationMap = {};
}


__extends(DataBindingProxy, puremvc.Proxy);


/** @static
*/
DataBindingProxy.NAME = "DataBindingProxy";

DataBindingProxy.prototype.contextMap = null;

DataBindingProxy.prototype.configurationMap = null;

DataBindingProxy.prototype.paramsProxy = null;

/**
*/
DataBindingProxy.prototype.initialize = function() {
  this.paramsProxy = this.facade.retrieveProxy(ParamsProxy.NAME);
  this.registerContext(this.facade.retrieveProxy(MediaProxy.NAME));
  this.registerContext(this.facade.retrieveProxy(LocalizationProxy.NAME));
  this.registerContext(this.facade.retrieveProxy(PlayerProxy.NAME));
  return this.update();
};

/**
*/
DataBindingProxy.prototype.registerContext = function(context) {
  if (!(context != null)) {
    return;
  }
  this.contextMap[context.getContextName()] = context;
};

/**
*/
DataBindingProxy.prototype.retrieveContext = function(name) {
  return this.contextMap[name];
};

/**
*/
DataBindingProxy.prototype.removeContext = function(name) {
  var context;
  context = this.contextMap[name];
  delete this.contextMap[name];
  return context;
};

/**
*/
DataBindingProxy.prototype.registerConfiguration = function(config) {
  if (!(config != null)) {
    return;
  }
  this.configurationMap[config.getConfigurationName()] = config;
  config.compile(this.context, true);
};

/**
*/
DataBindingProxy.prototype.retrieveConfiguration = function(name) {
  return this.configurationMap[name];
};

/**
*/
DataBindingProxy.prototype.removeConfiguration = function(name) {
  var config;
  config = this.configurationMap[name];
  delete this.configurationMap[name];
  return config;
};

/**
*/
DataBindingProxy.prototype.evaluateBinding = function(str) {
  var tokenizedObject;
  tokenizedObject = new TokenizedValue(str);
  tokenizedObject.compile(this.data);
  return tokenizedObject.value;
};

/**
*/
DataBindingProxy.prototype.update = function(contexts) {
  var context, key, name, value, _ref, _ref1;
  this.data.now = Date.now();
  _ref = this.contextMap;
  for (name in _ref) {
    context = _ref[name];
    if ((contexts != null ? typeof contexts.indexOf === "function" ? contexts.indexOf(name) : void 0 : void 0) === -1) {
      continue;
    }
    this.data[name] = context.getContextData();
  }
  this.paramsProxy.compile(this.data);
  _ref1 = this.paramsProxy.value;
  for (key in _ref1) {
    value = _ref1[key];
    this.data[key] = value;
  }
  return this.data;
};

/**
*/
DataBindingProxy.prototype.compile = function(contexts, suppressErrors) {
  var config, context, name, paramsName, _ref;
  if (suppressErrors == null) {
    suppressErrors = false;
  }
  this.update(contexts);
  context = Utils.clone(this.data);
  paramsName = this.paramsProxy.getConfigurationName();
  _ref = this.configurationMap;
  for (name in _ref) {
    config = _ref[name];
    if (name !== paramsName) {
      config.compile(context, suppressErrors);
    }
  }
};

/**
 * @constructor
 * @private
 * @extends {ITokenized}
 * @param {string} source
*/
function TokenizedBase(source) {
  if (source != null) {
    this.parse(source);
  }
}


__extends(TokenizedBase, ITokenized);


/**
 * The tokenized data structure
*/
TokenizedBase.prototype.data = null;

/**
 * The literal value after compiliation
*/
TokenizedBase.prototype.value = null;

/**
 * The original data structure
*/
TokenizedBase.prototype.source = null;

/**
 * Populates the data property with tokenized values
 * 
 * @param   {Array.<Object>|Object|string|number|boolean} source  The tokenized data structure.
 * @return  {Object} The parsed data structure.
*/
TokenizedBase.prototype.parse = function(source) {
  var value;
  if (source instanceof Array) {
    value = new TokenizedArray(source);
  } else if (source instanceof Object) {
    value = new TokenizedObject(source);
  } else {
    value = new TokenizedValue(source);
  }
  return value;
};

/**
 * @constructor
 * @private
 * @extends {TokenizedBase}
 * @param {Array.<Object>} data
*/
function TokenizedArray(data) {
  TokenizedArray.__super__.constructor.call(this, data);
}


__extends(TokenizedArray, TokenizedBase);


/**
 *
*/
TokenizedArray.prototype.parse = function(data) {
  var index, token, _i, _len;
  this.data = [];
  for (index = _i = 0, _len = data.length; _i < _len; index = ++_i) {
    token = data[index];
    this.data[index] = TokenizedArray.__super__.parse.call(this, token);
  }
  return this.data;
};

/**
 *
*/
TokenizedArray.prototype.compile = function(context, suppressErrors) {
  var index, token, _i, _len, _ref;
  if (context == null) {
    context = {};
  }
  if (suppressErrors == null) {
    suppressErrors = false;
  }
  this.value = [];
  _ref = this.data;
  for (index = _i = 0, _len = _ref.length; _i < _len; index = ++_i) {
    token = _ref[index];
    try {
      this.value[index] = token.compile(context, suppressErrors);
    } catch (error) {
      this.value[index] = null;
      if (!suppressErrors) {
        Logger.error(error);
      }
    }
  }
  return this.value;
};

/**
 * @constructor
 * @private
 * @extends {Error}
 * @param {string} msg
*/
function TokenizationError(msg) {
  this.message = TokenizationError.MESSAGE + msg;
}


__extends(TokenizationError, Error);


TokenizationError.MESSAGE = "Tokenization Error: Could not find token value for: ";

/**
 * @constructor
 * @private
 * @extends {TokenizedBase}
 * @param {string|number|boolean} source
*/
function Literal(source) {
  Literal.__super__.constructor.call(this, source);
}


__extends(Literal, TokenizedBase);


/**
 * Populates the data property with tokenized values
 * 
 * @param   source  The tokenized data structure.
 * @return          The parsed data structure.
*/
Literal.prototype.parse = function(data) {
  this.source = this.data = this.value = data;
  return data;
};

/**
 * Compiles the tokenized values in the data property
 * and saves them to the value property. As a convenience
 * this function returns the value property.
 * 
 * @param context     An object who's properties can be called from within a token
 * @param suppressErrors  Flag indicating wether or not to suppress errors. Useful when certain context items are known not to exist.
 * @return          The compile value object.
*/
Literal.prototype.compile = function(context, suppressErrors) {
  if (context == null) {
    context = null;
  }
  if (suppressErrors == null) {
    suppressErrors = false;
  }
  return this.value;
};

/**
 * @constructor
 * @private
 * @extends {TokenizedBase}
 * @param {string} source
*/
function Token(source) {
  Token.__super__.constructor.call(this, source);
}


__extends(Token, TokenizedBase);


/**
 * The function used to evaluate a token value
*/
Token.prototype.exec = null;

/**
 *
*/
Token.prototype.parse = function(source) {
  this.source = this.data = source;
  this.exec = new Function("context", 'var value; with(context){value = ' + this.data + ';}return value;');
  return this.data;
};

/**
 *
*/
Token.prototype.compile = function(context, suppressErrors) {
  if (context == null) {
    context = {};
  }
  if (suppressErrors == null) {
    suppressErrors = false;
  }
  if (!(this.exec != null)) {
    return this.value;
  }
  try {
    this.value = this.exec(context);
  } catch (error) {
    this.value = null;
    if (!suppressErors) {
      throw new TokenizationError(this.data);
    }
  }
  return this.value;
};

/**
 * @constructor
 * @private
 * @extends {TokenizedBase}
 * @param {string} source
*/
function TokenizedValue(source) {
  this.token = new RegExp(this.tokenStart.source + "([^#]*)" + this.tokenEnd.source, "g");
  TokenizedValue.__super__.constructor.call(this, source);
}


__extends(TokenizedValue, TokenizedBase);


/**
 * The function used to evaluate a token value
*/
TokenizedValue.prototype.exec = null;

/**
 * The literal value after compiliation
*/
TokenizedValue.prototype.tokenStart = /#{/;

TokenizedValue.prototype.tokenEnd = /}/;

TokenizedValue.prototype.token = null;

/**
 *
*/
TokenizedValue.prototype.parse = function(source) {
  var piece, pieces, placeholder, spacer, temp, token, tokens, _i, _len;
  this.source = source;
  this.data = [];
  if (this.token.test(this.source)) {
    tokens = [];
    placeholder = "<<>>";
    spacer = null;
    temp = this.source.replace(this.token, function(match, token, offset, string) {
      tokens.push(token);
      spacer = placeholder;
      if ((0 < offset && offset < string.length - match.length)) {
        spacer += placeholder;
      }
      return spacer;
    });
    pieces = temp.split(placeholder);
    token = 0;
    for (_i = 0, _len = pieces.length; _i < _len; _i++) {
      piece = pieces[_i];
      if (piece === "" && tokens[token]) {
        this.data.push(new Token(tokens[token]));
        token++;
      } else {
        if (piece !== "") {
          this.data.push(new Literal(piece));
        }
      }
    }
    if (this.data.length === 1) {
      this.data = this.data[0];
    }
  } else {
    this.data = new Literal(source);
  }
  return this.data;
};

/**
 *
*/
TokenizedValue.prototype.compile = function(context, suppressErrors) {
  var token, _i, _len, _ref;
  if (context == null) {
    context = {};
  }
  if (suppressErrors == null) {
    suppressErrors = false;
  }
  if (!(this.data != null)) {
    return this.value;
  }
  try {
    if (this.data instanceof ITokenized) {
      this.value = this.data.compile(context, suppressErrors);
    } else {
      this.value = "";
      _ref = this.data;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        token = _ref[_i];
        this.value += token.compile(context, suppressErrors);
      }
    }
  } catch (error) {
    this.value = null;
    if (!suppressErrors) {
      throw new TokenizationError(this.source);
    }
  }
  return this.value;
};

/**
 * @constructor
 * @private
 * @extends {TokenizedBase}
 * @param {Object} source
*/
function TokenizedObject(source) {
  TokenizedObject.__super__.constructor.call(this, source);
}


__extends(TokenizedObject, TokenizedBase);


/**
 *
*/
TokenizedObject.prototype.parse = function(source) {
  var key, token;
  this.source = source;
  this.data = {};
  for (key in source) {
    token = source[key];
    this.data[key] = TokenizedObject.__super__.parse.call(this, token);
  }
  return this.data;
};

/**
 *
*/
TokenizedObject.prototype.compile = function(context, suppressErrors) {
  var key, value, _ref;
  if (context == null) {
    context = {};
  }
  if (suppressErrors == null) {
    suppressErrors = false;
  }
  this.value = {};
  _ref = this.data;
  for (key in _ref) {
    value = _ref[key];
    try {
      this.value[key] = value.compile(context, suppressErrors);
    } catch (error) {
      this.value[key] = null;
      Logger.error(error);
    }
  }
  return this.value;
};

/**
 * The ExternalPlaybackProxy class.
 * 
 * @constructor
 * @private
 * @extends {puremvc.Proxy}
*/
function ExternalPlaybackProxy() {
  ExternalPlaybackProxy.__super__.constructor.call(this);
}


__extends(ExternalPlaybackProxy, puremvc.Proxy);


/**
 * The name of the this Proxy.
 * 
 * @static
 * @type {string}
*/
ExternalPlaybackProxy.NAME = "PlaybackProxy";

/** @private
*/
ExternalPlaybackProxy.prototype.src = null;

/**
 * Determines if the core can play a given mimeType.
 * 
 * @return {String} "" if the core can't play the mimeType
*/
ExternalPlaybackProxy.prototype.canPlayType = function(mimeType) {
  return mimeType === "external";
};

/**     
 * The current time of the video in seconds. Value must be between currentTime and duration.
 * 
 * @param {Number} value
 *    The new currentTime value in seconds
 * @returns {Number} 
 *    The currentTime value in seconds
 * @type {Number}
*/
ExternalPlaybackProxy.prototype.getSrc = function() {
  return this.src;
};

ExternalPlaybackProxy.prototype.setSrc = function(value) {
  if (!(value != null) || value === "") {
    this.sendNotification(Notifications.ERROR, "The value of src is not supported: " + value);
  }
  if (value !== this.src) {
    this.src = value;
  }
  return value;
};

/**
 * Instructs the core to play.
*/
ExternalPlaybackProxy.prototype.play = function() {
  window.open(this.getSrc(), "_blank");
};

ExternalPlaybackProxy.prototype.load = function() {};

ExternalPlaybackProxy.prototype.setVolume = function() {};

/** 
 * @constructor 
 * @private
*/
function ParamsProxy(data) {
  ParamsProxy.__super__.constructor.call(this, data);
}


__extends(ParamsProxy, DataBoundConfigurationProxy);


/** @static
*/
ParamsProxy.NAME = "ParamsProxy";

ParamsProxy.prototype.defaults = {};

ParamsProxy.prototype.configurationName = "params";

/** @override
*/
ParamsProxy.prototype.setData = function(data) {
  var key, value, _ref;
  this.data = ((_ref = this.configurationData) != null ? _ref.source : void 0) || {};
  for (key in data) {
    value = data[key];
    this.data[key] = data[key];
  }
  this.configurationData = new TokenizedObject(this.data);
  return this.data;
};

/**
 * The ExternalPlayerAPI class.
 * 
 * @param         {!ExternalPlayer} module  The base module this API wraps.
 * @param         {EventDispatcher} dispatcher  The event dispatcher
 * @constructor
 * @extends {PlayerAPI}
*/
function ExternalPlayerAPI(module, dispatcher) {
  var player;
  ExternalPlayerAPI.__super__.constructor.call(this, module, dispatcher);
  player = module;
  this.evaluateBinding = function(str) {
    var _ref;
    return (_ref = player.retrieveProxy(DataBindingProxy.NAME)) != null ? _ref.evaluateBinding(str) : void 0;
  };
  this.canPlayType = function(mimeType) {
    return "maybe";
  };
  this.play = function() {
    player.sendNotification(Notifications.PLAY);
  };
  this.setParams = function(value) {
    player.sendNotification(Notifications.CHANGE_PARAMS, value);
    return value;
  };
  this.getParams = function() {
    return player.retrieveProxy(ParamsProxy.NAME).getData();
  };
  this.setAutoplay = function(value) {
    return false;
  };
  this.getAutoplay = function() {
    return false;
  };
  this.setLoop = function(value) {
    return false;
  };
  this.getLoop = function() {
    return false;
  };
  this.setMuted = function(value) {
    return false;
  };
  this.getMuted = function() {
    return false;
  };
  this.setMedia = function(value) {
    player.sendNotification(Notifications.SET_MEDIA, value);
    return value;
  };
  this.getMedia = function(value) {
    var _ref;
    return (_ref = player.retrieveProxy(MediaProxy.NAME)) != null ? _ref.getData() : void 0;
  };
  this.setCurrentTime = function(value) {
    return 0;
  };
  this.getCurrentTime = function(value) {
    return 0;
  };
  this.getDuration = function(value) {
    return player.retrieveProxy(MediaProxy.NAME).getDuration();
  };
  this.setSrc = function(value) {
    player.sendNotification(Notifications.SET_MEDIA, {
      src: value
    });
    return value;
  };
  this.getSrc = function(value) {
    return player.retrieveProxy(MediaProxy.NAME).getSrc();
  };
  this.setSource = function(value) {
    player.sendNotification(Notifications.SET_MEDIA, {
      source: value
    });
    return value;
  };
  this.getSource = function() {
    return player.retrieveProxy(MediaProxy.NAME).getSource();
  };
  this.setVolume = function(value) {
    return value;
  };
  this.getVolume = function(value) {
    return 1;
  };
  this.getSeeking = function() {
    return false;
  };
  this.getPaused = function() {
    return false;
  };
  this.getEnded = function() {
    return false;
  };
}


__extends(ExternalPlayerAPI, PlayerAPI);

/**
 * The ExternalPlayCommand class.
 * 
 * @constructor
 * @private
 * @extends {puremvc.MacroCommand}
*/
function ExternalPlayCommand() {
  ExternalPlayCommand.__super__.constructor.call(this);
}


__extends(ExternalPlayCommand, puremvc.MacroCommand);


/** @override
*/
ExternalPlayCommand.prototype.initializeMacroCommand = function() {
  return this.addSubCommand(PlayRequestCommand);
};

/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
ExternalPlayCommand.prototype.execute = function(notification) {
  var playbackProxy;
  this.facade.logger.debug("PlayCommand");
  ExternalPlayCommand.__super__.execute.call(this, notification);
  playbackProxy = this.facade.retrieveProxy(PlaybackProxy.NAME);
  playbackProxy.play();
};

/**
 * @enum {string}
 * @const
 * @private
*/

var DisplayState = {
  /**
   * Constant representing the normal display state
  */

  NORMAL: "normal",
  /**
   * Constant representing the full screen display state
  */

  FULL_SCREEN: "full-screen"
};

/**
 * @enum {string}
 * @const
 * @private
*/

var RenderMode = {
  /**
   * Constant representing the flash renderer.
  */

  FLASH: "flash",
  /**
   * Constant representing the html renderer.
  */

  HTML: "html"
};

/**
 * @enum {string}
 * @const
 * @private
*/

var ActiveState = {
  /**
   * Constant representing the active state (controls on).
  */

  ACTIVE: "active",
  /**
   * Constant representing the inactive state (controls off).
  */

  INACTIVE: "inactive"
};

/**
 * @enum {string}
 * @const
 * @private
*/

var PlayState = {
  /**
   * Constant representing the playing play state
  */

  READY: "ready",
  /**
   * Constant representing the playing play state
  */

  PLAYING: "playing",
  /**
   * Constant representing the paused play state
  */

  PAUSED: "paused",
  /**
   * Constant representing the ended play state
  */

  ENDED: "ended",
  /**
   * Constant representing the waiting play state
  */

  LOADING: "loading",
  /**
   * Constant representing the waiting play state
  */

  WAITING: "waiting",
  /**
   * Constant representing the seeking play state
  */

  SEEKING: "seeking",
  /**
   * Constant representing the waiting play state
  */

  ERROR: "error"
};

/** 
 * Used to track the various states of the player like full screen mode and active state (controls visible).
 * 
 * @constructor 
 * @private
 * @extends {puremvc.Proxy}
*/
function ApplicationStateProxy() {
  ApplicationStateProxy.__super__.constructor.call(this);
  this.device = Utils.getDevice();
}


__extends(ApplicationStateProxy, puremvc.Proxy);


/** @static
*/
ApplicationStateProxy.NAME = "ApplicationStateProxy";

/** @private
*/
ApplicationStateProxy.prototype.displayState = null;

ApplicationStateProxy.prototype.playState = null;

ApplicationStateProxy.prototype.renderMode = null;

ApplicationStateProxy.prototype.activeState = null;

ApplicationStateProxy.prototype.seeking = false;

ApplicationStateProxy.prototype.isUserActive = false;

ApplicationStateProxy.prototype.device = null;

/**
 * The player's display state. Valid options are:
 * 
 * ApplicationStateProxy.FULL_SCREEN
 * ApplicationStateProxy.NORMAL
 *      
 * @param {String} value 
 *    The new display state of the player
 * @returns {String} 
 *    The display state of the player
 * @type {String}
*/
ApplicationStateProxy.prototype.getDisplayState = function() {
  return this.displayState;
};

ApplicationStateProxy.prototype.setDisplayState = function(value) {
  var oldState;
  if (value === oldState) {
    return;
  }
  oldState = this.displayState;
  this.displayState = value;
  this.sendNotification(Notifications.DISPLAY_STATE_CHANGE, {
    oldState: oldState,
    newState: this.displayState
  });
};

/**
 * The player's display state. Valid options are:
 * 
 * ApplicationStateProxy.FULL_SCREEN
 * ApplicationStateProxy.NORMAL
 *      
 * @param {String} value 
 *    The new display state of the player
 * @returns {String} 
 *    The display state of the player
 * @type {String}
*/
ApplicationStateProxy.prototype.getPlayState = function() {
  return this.playState;
};

ApplicationStateProxy.prototype.setPlayState = function(value) {
  var oldState;
  if (value === this.playState) {
    return;
  }
  if (this.seeking === true) {
    switch (value) {
      case PlayState.PLAYING:
      case PlayState.READY:
        this.seeking = false;
        break;
      default:
        return;
    }
  }
  oldState = this.playState;
  this.playState = value;
  this.sendNotification(Notifications.PLAY_STATE_CHANGE, {
    oldState: oldState,
    newState: this.playState
  });
};

/**
 * The player's device.
 *
 * 
 * @returns {String} 
 *    The display state of the player
 * @type {String}
*/
ApplicationStateProxy.prototype.getDevice = function() {
  return this.device;
};

/**     
 * Indicates whether or not the player is seeking
 *
 * @param {String} value
 *    The new currentTime value in seconds
 * @returns {Number} 
 *    The currentTime value in seconds
 * @type {Number}
*/
ApplicationStateProxy.prototype.getSeeking = function() {
  return this.seeking;
};

ApplicationStateProxy.prototype.setSeeking = function(value) {
  if (value !== this.seeking) {
    this.seeking = value;
  }
};

/**     
 * Indicates whether or not the user is currently interacting with the player
 *
 * @param {Boolean} value
 *    
 * @returns {Boolean} 
 *    
 * @type {Boolean}
*/
ApplicationStateProxy.prototype.getIsUserActive = function() {
  return this.isUserActive;
};

ApplicationStateProxy.prototype.setIsUserActive = function(value) {
  if (value !== this.isUserActive) {
    this.isUserActive = value;
  }
};

/**     
 * The core type used for rendering the video.
 *
 * @param {String} value
 *    The new currentTime value in seconds
 * @returns {Number} 
 *    The currentTime value in seconds
 * @type {Number}
*/
ApplicationStateProxy.prototype.getRenderMode = function() {
  return this.renderMode;
};

ApplicationStateProxy.prototype.setRenderMode = function(value) {
  if (value !== this.renderMode) {
    this.renderMode = value;
  }
};

/**
 * The player's display state. Valid options are:
 * 
 * ApplicationStateProxy.FULL_SCREEN
 * ApplicationStateProxy.NORMAL
 *      
 * @param {String} value 
 *    The new display state of the player
 * @returns {String} 
 *    The display state of the player
 * @type {String}
*/
ApplicationStateProxy.prototype.getMedium = function() {
  return this.medium;
};

ApplicationStateProxy.prototype.setMedium = function(value) {
  var oldState;
  if (value === this.medium) {
    return;
  }
  oldState = this.medium != null ? "medium-" + this.medium : this.medium;
  this.medium = value;
  this.sendNotification(Notifications.MEDIUM_CHANGE, {
    oldState: oldState,
    newState: "medium-" + this.medium
  });
};

/**
 * The active state of the player. Used to display controls.
 *      
 * @param {Boolean} value 
 *    The new active state of the video
 * @returns {Boolean} 
 *    The active state of the video
 * @type {Boolean}
*/
ApplicationStateProxy.prototype.getActiveState = function() {
  return this.activeState;
};

ApplicationStateProxy.prototype.setActiveState = function(value) {
  var oldState;
  if (value === this.activeState) {
    return;
  }
  oldState = this.activeState;
  this.activeState = value;
  this.sendNotification(Notifications.ACTIVE_STATE_CHANGE, {
    oldState: oldState,
    newState: this.activeState
  });
};

/**
 * Used to track player configuration settings
*/
/**
 * Creates a new instance of MediaProxy.
 * 
 * @constructor
 * @private
*/
function ConfigurationProxy(config) {
  ConfigurationProxy.__super__.constructor.call(this, config);
}


__extends(ConfigurationProxy, ModuleProxy);


/** @static
*/
ConfigurationProxy.NAME = ModuleProxy.NAME;

/** @private
*/
ConfigurationProxy.prototype.defaults = {
  name: null,
  autoplay: false,
  loop: false,
  controls: {},
  fullscreen: null,
  target: "_blank",
  domain: null,
  endslate: null,
  version: null
};

/**
 * @override
*/
ConfigurationProxy.prototype.setData = function(data) {
  if (data.rules != null) {
    Utils.mergeRules(data.rules);
  }
  return ConfigurationProxy.__super__.setData.call(this, data);
};

/**
 * Auto play.
*/
ConfigurationProxy.prototype.getAutoplay = function() {
  return this.data.autoplay;
};

ConfigurationProxy.prototype.setAutoplay = function(value) {
  return this.data.autoplay = value;
};

/**
 * Auto play.
*/
ConfigurationProxy.prototype.getLoop = function() {
  return this.data.loop;
};

ConfigurationProxy.prototype.setLoop = function(value) {
  return this.data.loop = value;
};

/**
 * End Slate.
*/
ConfigurationProxy.prototype.getEndSlate = function() {
  return this.data.endslate;
};

ConfigurationProxy.prototype.setEndSlate = function(value) {
  return this.data.endslate = value;
};

/**
 * Domain
*/
ConfigurationProxy.prototype.getDomain = function() {
  return this.data.domain;
};

ConfigurationProxy.prototype.setDomain = function(value) {
  return this.data.domain = value;
};

/**
 * Target.
*/
ConfigurationProxy.prototype.getTarget = function() {
  return this.data.target;
};

ConfigurationProxy.prototype.setTarget = function(value) {
  return this.data.target = value;
};

/**
 * The player name.
*/
ConfigurationProxy.prototype.getName = function() {
  return this.data.name;
};

ConfigurationProxy.prototype.setName = function(value) {
  return this.data.name = value;
};

/**
 * The player version.
*/
ConfigurationProxy.prototype.getVersion = function() {
  return this.data.version;
};

/**
 * Controls
*/
ConfigurationProxy.prototype.getControls = function() {
  return this.data.controls;
};

ConfigurationProxy.prototype.setControls = function(value) {
  return this.data.controls = value;
};

/**
 * Controls
*/
ConfigurationProxy.prototype.getFullscreen = function() {
  return this.data.fullscreen;
};

ConfigurationProxy.prototype.setFullscreen = function(value) {
  return this.data.fullscreen = value;
};

/**
 * Creates a new instance of PlayerProxy.
 * 
 * @constructor
 * @private
 * @extends {DataBindingContext}
*/
function PlayerProxy(defaultPlaybackCore) {
  this.defaultPlaybackCore = defaultPlaybackCore;
  PlayerProxy.__super__.constructor.call(this);
  this.playbackCoreMap = {};
}


__extends(PlayerProxy, DataBindingContext);


/** @static
*/
PlayerProxy.NAME = "PlayerProxy";

PlayerProxy.prototype.contextName = "player";

PlayerProxy.prototype.playbackCoreMap = null;

PlayerProxy.prototype.defaultPlaybackCore = null;

PlayerProxy.prototype.activePlaybackCore = null;

/**
*/
PlayerProxy.prototype.getActivePlaybackCore = function() {
  return this.activePlaybackCore;
};

/**
*/
PlayerProxy.prototype.registerPlaybackCore = function(core) {
  if (!(core != null)) {
    return;
  }
  this.playbackCoreMap[core.getPlaybackCoreName()] = core;
};

/**
*/
PlayerProxy.prototype.retrievePlaybackCore = function(name) {
  return this.playbackCoreMap[name];
};

/**
*/
PlayerProxy.prototype.removePlaybackCore = function(name) {
  var core;
  core = this.playbackCoreMap[name];
  delete this.playbackCoreMap[name];
  return core;
};

/**
*/
PlayerProxy.prototype.setPlaybackType = function(type) {
  var core, name, playbackCore, playbackProxy, _ref;
  playbackCore = this.defaultPlaybackCore;
  _ref = this.playbackCoreMap;
  for (name in _ref) {
    core = _ref[name];
    if (core.canPlayType(type) !== "") {
      playbackCore = core;
      break;
    }
  }
  playbackProxy = this.facade.retrieveProxy(PlaybackProxy.NAME);
  if (playbackProxy !== playbackCore) {
    this.facade.removeProxy(PlaybackProxy.NAME);
    this.facade.registerProxy(playbackCore);
    playbackCore.setData(playbackProxy.getData());
  }
  this.activePlaybackCore = playbackCore;
  return type;
};

/**
*/
PlayerProxy.prototype.canPlayType = function(type) {
  var canPlay, core, name, _ref;
  _ref = this.playbackCoreMap;
  for (name in _ref) {
    core = _ref[name];
    canPlay = core.canPlayType(type);
    if (canPlay !== "") {
      return canPlay;
    }
  }
  canPlay = this.defaultPlaybackCore.canPlayType(type);
  return canPlay;
};

/**
 * Gets the context data for this proxy.
 * 
 * @returns {Object} The contenxt data for this proxy
 * @override
*/
PlayerProxy.prototype.getContextData = function() {
  var configProxy, element, mediaProxy, playbackProxy;
  configProxy = this.facade.retrieveProxy(ConfigurationProxy.NAME);
  playbackProxy = this.facade.retrieveProxy(PlaybackProxy.NAME);
  mediaProxy = this.facade.retrieveProxy(MediaProxy.NAME);
  element = this.facade.getViewComponent();
  return {
    width: element.offsetWidth,
    height: element.offsetHeight,
    mode: "html5",
    autoplay: configProxy.getAutoplay(),
    domain: configProxy.getDomain(),
    name: configProxy.getName(),
    currentTime: playbackProxy.getCurrentTime(),
    duration: playbackProxy.getDuration(),
    version: configProxy.getVersion(),
    timecode: {
      duration: Utils.formatTimecode(mediaProxy.getDuration()),
      currentTime: Utils.formatTimecode(playbackProxy.getCurrentTime())
    }
  };
};

/**
 * Creates a new instance of MediaProxy. Used to track metadata associated with the video such as src, title and duration.
 * 
 * @constructor
 * @private
 * @extends {DataBindingContext}
*/
function MediaProxy() {
  this.data = {
    metadata: {}
  };
  MediaProxy.__super__.constructor.call(this);
}


__extends(MediaProxy, DataBindingContext);


/** @static
*/
MediaProxy.NAME = "MediaProxy";

MediaProxy.prototype.contextName = "media";

/** @private
*/
MediaProxy.prototype.data = null;

MediaProxy.prototype.authorized = true;

/**
 * Gets the context data for this proxy.
 * 
 * @returns {Object} The contenxt data for this proxy
 * @override
*/
MediaProxy.prototype.getContextData = function() {
  return {
    width: this.getWidth(),
    height: this.getHeight(),
    title: this.getTitle(),
    description: this.getDescription(),
    src: this.getSrc(),
    duration: this.getDuration(),
    guid: this.getGUID(),
    isLive: this.getIsLive(),
    metadata: this.getMetadata(),
    temporalType: this.getTemporalType(),
    poster: this.getPoster(),
    category: this.getCategory()
  };
};

/**
 * Sets the data for this proxy.
 * 
 * @param {Object} value 
 *    The new data for this proxy
 * @override
*/
MediaProxy.prototype.setData = function(value) {
  var _ref;
  this.data.autoplay = value.autoplay;
  this.data.type = value.type;
  if (value.source != null) {
    this.setSource(value.source);
  }
  if (value.src != null) {
    this.setSrc(value.src);
  }
  this.data.title = value.title;
  if (value.duration != null) {
    this.setDuration(value.duration);
  }
  this.data.poster = value.poster;
  this.data.guid = value.guid;
  this.data.link = value.link;
  this.data.embed = value.embed;
  this.data.width = value.width;
  this.data.height = value.height;
  this.data.category = value.category;
  this.data.startTime = value.startTime;
  this.data.description = value.description;
  this.data.status = value.status || {};
  if (((_ref = this.data.status) != null ? _ref.state : void 0) === "blocked") {
    this.authorized = false;
  }
  this.data.category = value.category;
  this.data.metadata = value.metadata || {};
  if (value.isLive != null) {
    this.setIsLive(value.isLive);
  }
  if (value.temporalType != null) {
    this.setTemporalType(value.temporalType);
  } else {
    this.setTemporalType("vod");
  }
  if (value.medium != null) {
    this.setMedium(value.medium);
  }
  if (value.pubDate != null) {
    this.setPubDate(value.pubDate);
  }
  return value;
};

MediaProxy.prototype.updateData = function(data) {
  var key, value;
  for (key in data) {
    value = data[key];
    if (key in this.data) {
      this.data[key] = value;
    }
  }
};

/**
 * The global unique identifier for this to the video.
 * 
 * @param {String} value 
 *    The new guid of the video
 * @returns {String} 
 *    The guid of the video
 * @type {String}
*/
MediaProxy.prototype.getGUID = function() {
  return this.data.guid;
};

MediaProxy.prototype.setGUID = function(value) {
  return this.data.guid = value;
};

MediaProxy.prototype.getLink = function() {
  return this.data.link;
};

MediaProxy.prototype.setLint = function(value) {
  return this.data.link = value;
};

MediaProxy.prototype.getStartTime = function() {
  return this.data.startTime || 0;
};

MediaProxy.prototype.getEmbed = function() {
  return this.data.embed;
};

MediaProxy.prototype.setEmbed = function(value) {
  return this.data.embed = value;
};

MediaProxy.prototype.getAutoplay = function() {
  return this.data.autoplay;
};

MediaProxy.prototype.setAutoplay = function(value) {
  return this.data.autoplay = value;
};

MediaProxy.prototype.getPubDate = function() {
  return this.data.pubDate;
};

MediaProxy.prototype.setPubDate = function(value) {
  return this.data.pubDate = value;
};

MediaProxy.prototype.getCategory = function() {
  return this.data.category;
};

MediaProxy.prototype.setCategory = function(value) {
  return this.data.category = value;
};

/**
 * The url to the video.
 * 
 * @param {String} value 
 *    The new title of the video
 * @returns {Boolean} 
 *    The title of the video
 * @type {String}
*/
MediaProxy.prototype.getSrc = function() {
  return this.data.src;
};

MediaProxy.prototype.setSrc = function(value) {
  this.data.src = value;
  if ((this.data.src != null) && !(this.data.type != null)) {
    return this.setType(Utils.getMimeType(this.data.src));
  }
};

/**
 * The mimeType of the video.
*/
MediaProxy.prototype.getType = function() {
  return this.data.type;
};

MediaProxy.prototype.setType = function(value) {
  var medium;
  this.data.type = value;
  medium = /audio/.test(this.data.type) ? "audio" : "video";
  return this.setMedium(medium);
};

/**
 * The medium the video. ie audio, video, executable
*/
MediaProxy.prototype.getMedium = function() {
  return this.data.medium;
};

MediaProxy.prototype.setMedium = function(value) {
  if (value === this.data.medium) {
    return;
  }
  this.data.medium = value;
  return this.facade.retrieveProxy(ApplicationStateProxy.NAME).setMedium(value);
};

/**
 * Additional information about the vieo
*/
MediaProxy.prototype.getMetadata = function() {
  return this.data.metadata;
};

MediaProxy.prototype.setMetadata = function(value) {
  return this.data.metadata = value;
};

/**
 * The source object of the video.
*/
MediaProxy.prototype.getSource = function() {
  return this.data.source;
};

MediaProxy.prototype.setSource = function(value) {
  var item, playerProxy,
    _this = this;
  if (!(value != null) || value.length < 1) {
    return;
  }
  this.data.source = value;
  playerProxy = this.facade.retrieveProxy(PlayerProxy.NAME);
  item = Utils.selectSource(value, function(type) {
    return playerProxy.canPlayType(type);
  });
  if (((item != null ? item.src : void 0) != null) && item.src !== "") {
    this.setSrc(item.src);
    return this.setType(item.type);
  } else {
    throw new Error("No valid source could be found");
  }
};

/**
 * The source object of the video.
*/
MediaProxy.prototype.getTrack = function() {
  return this.data.track;
};

MediaProxy.prototype.setTrack = function(value) {
  return this.data.track = value;
};

/**     
 * The title of the video.
 * 
 * @param {String} value 
 *    The new title of the video
 * @returns {Boolean} 
 *    The title of the video
 * @type {String}
*/
MediaProxy.prototype.getTitle = function() {
  return this.data.title;
};

MediaProxy.prototype.setTitle = function(value) {
  return this.data.title = value;
};

/**     
 * The native width of the video.
*/
MediaProxy.prototype.getWidth = function() {
  return this.data.width;
};

MediaProxy.prototype.setWidth = function(value) {
  return this.data.width = value;
};

/**     
 * The native width of the video.
*/
MediaProxy.prototype.getHeight = function() {
  return this.data.height;
};

MediaProxy.prototype.setHeight = function(value) {
  return this.data.height = value;
};

/**     
 * The description of the video.
 * 
 * @param {String} value 
 *    The new description of the video
 * @returns {Boolean} 
 *    The description of the video
 * @type {String}
*/
MediaProxy.prototype.getDescription = function() {
  return this.data.description;
};

MediaProxy.prototype.setDescription = function(value) {
  return this.data.description = value;
};

/**
 *
*/
MediaProxy.prototype.getCategory = function() {
  return this.data.category;
};

MediaProxy.prototype.setCategory = function(value) {
  return this.data.category = value;
};

/**
 * The duration of the video. This property is used in situations where the 
 * duration cannot be determined from the video (i.e. before metadata is loaded)
 *      
 * @param {Number} value 
 *    The new duration of the video
 * @returns {Number} 
 *    The duration of the video
 * @type {Number}
*/
MediaProxy.prototype.getDuration = function(value) {
  return this.data.duration;
};

MediaProxy.prototype.setDuration = function(value) {
  if (value === 0) {
    return;
  }
  if (value !== this.data.duration) {
    this.data.duration = value;
    this.sendNotification(Notifications.DURATION_CHANGE, value);
  }
  if (value === Infinity) {
    return this.setTemporalType("live");
  }
};

/**
 * The poster image for the video. 
 * 
 * @param {String} value 
 *    The url of the new poster image
 * @returns {String} 
 *    The url of the poster image
 * @type {String}
*/
MediaProxy.prototype.getPoster = function(value) {
  return this.data.poster;
};

MediaProxy.prototype.setPoster = function(value) {
  return this.data.poster = value;
};

/**
 *
*/
MediaProxy.prototype.getIsLive = function() {
  return this.data.isLive;
};

MediaProxy.prototype.setIsLive = function(value) {
  if (value !== this.data.isLive) {
    return this.data.isLive = value;
  }
};

/**
 *
*/
MediaProxy.prototype.getTemporalType = function() {
  return this.data.temporalType;
};

MediaProxy.prototype.setTemporalType = function(value) {
  if (value !== this.data.temporalType) {
    this.data.temporalType = value;
    return this.sendNotification(Notifications.TEMPORAL_TYPE_CHANGE, value);
  }
};

/**
 * The ExternalMediaProxy class.
 * 
 * @constructor
 * @private
 * @extends {MediaProxy}
*/
function ExternalMediaProxy() {
  ExternalMediaProxy.__super__.constructor.call(this);
}


__extends(ExternalMediaProxy, MediaProxy);


/** @static
*/
ExternalMediaProxy.NAME = "MediaProxy";

/**
 * The source object of the video.
*/
ExternalMediaProxy.prototype.setSource = function(value) {
  if (!(value != null) || value.length < 1) {
    return;
  }
  value = value.filter(function(item) {
    return item.type === "external";
  });
  return ExternalMediaProxy.__super__.setSource.call(this, value);
};

/** 
 * The ExternalPlayer class.
 *   
 * @constructor
 * @private 
 * @extends {Player}
 * @param {Object} config
 * @param {Object} viewComponent
 * @param {EventDispatcher} dispatcher
*/
function ExternalPlayer(config, viewComponent, dispatcher) {
  ExternalPlayer.__super__.constructor.call(this, config, viewComponent, dispatcher);
}


__extends(ExternalPlayer, Player);


ExternalPlayer.prototype.playerType = "external";

/** @override
*/
ExternalPlayer.prototype.createAPI = function() {
  return new ExternalPlayerAPI(this, this.dispatcher);
};

/** @override
*/
ExternalPlayer.prototype.createModel = function() {
  var playbackProxy;
  this.registerProxy(new LocalizationProxy(this.config));
  this.registerProxy(new ApplicationStateProxy());
  playbackProxy = new ExternalPlaybackProxy();
  this.registerProxy(new PlayerProxy(playbackProxy));
  this.registerProxy(new DataBindingProxy());
  this.registerProxy(new ConfigurationProxy(this.config));
  this.registerProxy(playbackProxy);
  this.registerProxy(new ExternalMediaProxy());
  this.registerProxy(new ParamsProxy(this.config.params));
};

/** @override
*/
ExternalPlayer.prototype.createView = function() {
  var app, errorslate, overlay,
    _this = this;
  app = this.getViewComponent();
  this.registerMediator(new PlayerMediator("external", app));
  this.registerMediator(new PluginAdapter());
  overlay = new OverlayLayerMediator();
  this.registerMediator(overlay);
  EventHandler.create(overlay.viewComponent, EventHandler.CLICK, function() {
    return _this.sendNotification(Notifications.TOGGLE_ACTIVE);
  });
  this.registerMediator(new PosterMediator());
  this.registerMediator(new TitleBarMediator());
  errorslate = new ErrorLayerMediator();
  this.viewComponent.appendChild(errorslate.getViewComponent());
  this.registerMediator(errorslate);
};

/** @override
*/
ExternalPlayer.prototype.createController = function() {
  this.registerCommand(Notifications.UPDATE_DATA_BINDINGS, UpdateDataBindingsCommand);
  this.registerCommand(UserNotifications.TOGGLE_PLAY_PAUSE, ExternalPlayCommand);
  this.registerCommand(Notifications.PLAY, ExternalPlayCommand);
  this.registerCommand(Notifications.CHANGE_PLAY_STATE, ChangePlayStateCommand);
  this.registerCommand(Notifications.SET_MEDIA, SetMediaCommand);
  this.registerCommand(Notifications.CHANGE_MEDIA, ChangeMediaCommand);
  this.registerCommand(Notifications.MEDIA_CHANGE, MediaChangeCommand);
  this.registerCommand(Notifications.ERROR, ErrorCommand);
  this.registerCommand(Notifications.READY, ReadyCommand);
  this.registerCommand(Notifications.CHANGE_PARAMS, ChangeParamsCommand);
};

/**
 * @constructor
 * @private
 * @param {string} uri
*/
function URLVariables(uri) {
  if (uri != null) {
    this.decode(uri);
  }
}

URLVariables.decode = function(uri) {
  var results;
  if (uri != null) {
    results = {};
    uri = uri.replace(/^[^?]*\?/, "");
    uri.replace(new RegExp("([^?=&]+)(=([^&]*))?", "g"), function($0, $1, $2, $3) {
      results[decodeURIComponent($1)] = decodeURIComponent($3);
    });
  }
  return results;
};

URLVariables.encode = function(obj) {
  var key, str, value;
  str = [];
  for (key in obj) {
    value = obj[key];
    if (value != null) {
      str.push("" + (encodeURIComponent(key)) + "=" + (encodeURIComponent(value)));
    }
  }
  return str.join("&");
};

URLVariables.prototype.decode = function(uri) {
  var key, results, value;
  if (uri != null) {
    results = URLVariables.decode(uri);
    for (key in results) {
      value = results[key];
      this[key] = value;
    }
  }
  return results;
};

URLVariables.prototype.encode = function() {
  return URLVariables.encode(this);
};

/**
 * Creates a new EventDispatcher
 * 
 * @constructor
 * @private
 * @implements {IEventDispatcher}
*/
function EventDispatcher(target) {
  var listeners;
  if (target == null) {
    target = this;
  }
  listeners = {};
  this.addEventListener = function(type, func) {
    if (func) {
      if (!(listeners[type] != null)) {
        listeners[type] = [];
      }
      listeners[type].push(func);
    }
  };
  this.dispatchEvent = function(event) {
    var handler, handlers, listener, _i, _len;
    handlers = listeners[event.type];
    listener = target["on" + event.type];
    event.target = target;
    if (listener != null) {
      listener.apply(this, [event]);
    }
    if (handlers != null) {
      for (_i = 0, _len = handlers.length; _i < _len; _i++) {
        handler = handlers[_i];
        handler.apply(target, [event]);
      }
    }
  };
  this.removeEventListener = function(type, func) {
    var handlers, index;
    if (type in listeners) {
      handlers = listeners[type];
      index = handlers.indexOf(func);
      if (index !== -1) {
        return handlers.splice(index, 1);
      }
    }
  };
}

/**
 * Adds a listener for a given event type.
 *
 * @param {!string}  type  A string representing the event's type.
 * @param {!Function} func  A function to call when the event is triggered.
 * @param {boolean=} capture
*/
EventDispatcher.prototype.addEventListener = function(type, func, capture) {};

/**
 * Dispathes and event, triggering all event listener of the event's type.
 *
 * @param {!IEvent} event The event to dispatch.
*/
EventDispatcher.prototype.dispatchEvent = function(event) {};

/**
 * Removes a listener for a given event type.
 *
 * @param {!string}  type  A string representing the event's type.
 * @param {!Function} func  A function to call when the event is triggered.
 * @return {?Function} the handler that was removed if any
 * @param {boolean=} capture
*/
EventDispatcher.prototype.removeEventListener = function(type, func, capture) {};

function FeedVO() {
  this.item = [];
  this.metadata = {};
}

FeedVO.prototype.title = null;

FeedVO.prototype.link = null;

FeedVO.prototype.description = null;

FeedVO.prototype.category = null;

FeedVO.prototype.pubDate = null;

FeedVO.prototype.language = null;

FeedVO.prototype.ttl = null;

FeedVO.prototype.item = null;

FeedVO.prototype.metadata = null;

function MediaVO() {
  this.metadata = {};
}

MediaVO.prototype.src = null;

MediaVO.prototype.source = null;

MediaVO.prototype.title = null;

MediaVO.prototype.description = null;

MediaVO.prototype.link = null;

MediaVO.prototype.guid = null;

MediaVO.prototype.pubDate = null;

MediaVO.prototype.poster = null;

MediaVO.prototype.thumbnail = null;

MediaVO.prototype.embed = null;

MediaVO.prototype.category = null;

MediaVO.prototype.type = null;

MediaVO.prototype.medium = null;

MediaVO.prototype.duration = null;

MediaVO.prototype.track = null;

MediaVO.prototype.metadata = null;

MediaVO.prototype.scenes = null;

MediaVO.prototype.startTime = null;

function Alarm(date, label) {
  var alarm, timeout,
    _this = this;
  this.date = date;
  this.label = label != null ? label : this.label;
  Alarm.__super__.constructor.call(this);
  timeout = null;
  this.engage = function(time) {
    var delta;
    if (time == null) {
      time = Date.now();
    }
    delta = this.date.getTime() - time;
    if (delta < 0) {
      throw new Error("Alarm date has past.");
    }
    if (delta > 2147483647) {
      throw new Error("Invalid alarm date.");
    }
    this.disengage();
    timeout = setTimeout(alarm, delta);
  };
  this.disengage = function() {
    clearTimeout(timeout);
  };
  alarm = function() {
    _this.dispatchEvent({
      type: "alarm",
      label: _this.label
    });
  };
}


__extends(Alarm, EventDispatcher);


Alarm.prototype.date = null;

Alarm.prototype.label = "alarm";

Alarm.prototype.engage = function(time) {};

Alarm.prototype.disengage = function() {};

/** 
 * @constructor
 * @private
*/
function MRSSHelper() {}

/**
*/
MRSSHelper.prototype.getFeed = function(url, onload, onerror) {
  return Utils.getJson(url, onload, onerror);
};

/**
*/
MRSSHelper.prototype.getMediaNode = function(item, name, checkItem) {
  var base, mediaContent, mediaName, node;
  if (checkItem == null) {
    checkItem = true;
  }
  mediaName = "media-" + name;
  base = item['media-group'] || item;
  mediaContent = base['media-content'];
  if ((mediaContent != null) && (mediaContent[mediaName] != null)) {
    node = mediaContent[mediaName];
  } else if (base[mediaName] != null) {
    node = base[mediaName];
  } else if (item[mediaName] != null) {
    node = item[mediaName];
  } else if ((item[name] != null) && checkItem) {
    node = item[name];
  }
  return node;
};

MRSSHelper.prototype.createEmbed = function(item) {
  var embed, embedVO, param, _i, _len, _ref;
  try {
    embed = this.getMediaNode(item, "embed");
    if (!(embed != null)) {
      return embedVO;
    }
    embedVO = {};
    embedVO.url = embed["@attributes"].url;
    embedVO.width = embed["@attributes"].width;
    embedVO.height = embed["@attributes"].height;
    embedVO.params = {};
    if (!(embed["media-param"] instanceof Array)) {
      embed["media-param"] = [embed["media-param"]];
    }
    _ref = embed["media-param"];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      param = _ref[_i];
      embedVO.params[param["@attributes"].name] = param["#text"];
    }
  } catch (error) {
    Logger.error("[AMP Feed Parse Error] embed parse error: " + error.message, error);
  }
  return embedVO;
};

/**
*/
MRSSHelper.prototype.createFeed = function(json) {
  var channel, feedVO, item, items, key, mediaVO, value, _i, _len;
  try {
    channel = json.channel;
    feedVO = new FeedVO();
    if (channel != null) {
      feedVO.title = channel.title;
      feedVO.description = channel.description;
      feedVO.language = channel.language;
      feedVO.category = channel.category;
      feedVO.pubDate = new Date(Date.parse(channel.pubDate));
      feedVO.ttl = channel.ttl;
      items = channel.item instanceof Array ? channel.item : [channel.item];
      for (_i = 0, _len = items.length; _i < _len; _i++) {
        item = items[_i];
        mediaVO = this.createMedia(item);
        feedVO.item.push(mediaVO);
      }
      for (key in channel) {
        value = channel[key];
        if (!(key in feedVO)) {
          feedVO.metadata[key] = value;
        }
      }
    }
  } catch (error) {
    Logger.error("[AMP Feed Parse Error] feed parse error: " + error.message, error);
  }
  return feedVO;
};

/**
*/
MRSSHelper.prototype.createMedia = function(item) {
  var atts, category, content, key, label, mediaContent, mediaVO, node, source, track, value, _i, _j, _k, _len, _len1, _len2, _ref, _ref1, _ref2;
  try {
    mediaVO = new MediaVO();
    mediaContent = this.getMediaNode(item, 'content');
    if (mediaContent instanceof Array) {
      mediaVO.source = [];
      for (_i = 0, _len = mediaContent.length; _i < _len; _i++) {
        content = mediaContent[_i];
        source = {
          src: content['@attributes'].url,
          type: content['@attributes'].type
        };
        category = content["media-category"];
        if (category != null) {
          atts = category["@attributes"];
          if (atts.schema === "http://mrss.akamai.com/user_agent_hint") {
            label = atts.label || category["#text"];
            if ((label != null) && label !== "") {
              if (source.rules == null) {
                source.rules = [];
              }
              source.rules.push(label);
            }
          }
        }
        mediaVO.source.push(source);
        mediaVO.medium = content['@attributes'].medium;
        mediaVO.duration = parseFloat(content['@attributes'].duration);
      }
    } else {
      mediaVO.type = mediaContent['@attributes'].type;
      mediaVO.src = mediaContent['@attributes'].url;
      mediaVO.medium = mediaContent['@attributes'].medium;
      mediaVO.duration = parseFloat(mediaContent['@attributes'].duration);
    }
    mediaVO.guid = item.guid;
    mediaVO.title = this.getMediaNode(item, "title");
    mediaVO.link = item.link;
    mediaVO.description = this.getMediaNode(item, "description");
    mediaVO.pubDate = new Date(Date.parse(item.pubDate));
    mediaVO.thumbnail = mediaVO.poster = (_ref = this.getMediaNode(item, 'thumbnail')) != null ? (_ref1 = _ref['@attributes']) != null ? _ref1.url : void 0 : void 0;
    mediaVO.embed = this.createEmbed(item);
    mediaVO.scenes = (_ref2 = this.getMediaNode(item, "scenes")) != null ? _ref2['media-scene'] : void 0;
    node = this.getMediaNode(item, "status", false);
    if (node != null) {
      mediaVO.status = {
        state: node['@attributes'].state,
        reason: node['@attributes'].reason
      };
    }
    mediaVO.category = item.category;
    if (!(mediaVO.category instanceof Array)) {
      mediaVO.category = [mediaVO.category];
    }
    node = this.getMediaNode(item, "category", false);
    if (node != null) {
      for (_j = 0, _len1 = node.length; _j < _len1; _j++) {
        category = node[_j];
        if ((category["#text"] != null) && category["#text"] !== "") {
          mediaVO.category.push(category["#text"]);
        }
      }
    }
    if (mediaVO.category != null) {
      mediaVO.category.sort(function(a, b) {
        a = a.toLowerCase();
        b = b.toLowerCase();
        if (a > b) {
          return 1;
        } else if (a < b) {
          return -1;
        } else {
          return 0;
        }
      });
    }
    node = this.getMediaNode(item, "subTitle");
    if (node != null) {
      if (mediaVO.track == null) {
        mediaVO.track = [];
      }
      if (!(node instanceof Array)) {
        node = [node];
      }
      for (_k = 0, _len2 = node.length; _k < _len2; _k++) {
        track = node[_k];
        if (track["@attributes"] != null) {
          mediaVO.track.push({
            src: track["@attributes"].href,
            type: track["@attributes"].type,
            kind: "captioning",
            srclang: track["@attributes"].lang || "en"
          });
        }
      }
    }
    category = item.category;
    if (!(category instanceof Array)) {
      category = [category];
    }
    mediaVO.isLive = item.temporalType === "live" || ((category != null) && category.join(",").indexOf("live_stream") !== -1);
    mediaVO.temporalType = mediaVO.isLive ? "live" : "ondemand";
    for (key in item) {
      value = item[key];
      if (!(key in mediaVO)) {
        mediaVO.metadata[key] = value;
      }
    }
  } catch (error) {
    Logger.error("[AMP Feed Parse Error] media parse error: " + error.message, error);
  }
  return mediaVO;
};

function Clock(url, sync, interval) {
  var clientTime, serverDate, serverTime, syncEnd, syncStart, syncTime, tick, timeout,
    _this = this;
  this.url = url;
  if (sync == null) {
    sync = true;
  }
  this.interval = interval != null ? interval : 1000;
  Clock.__super__.constructor.call(this);
  clientTime = 0;
  serverTime = 0;
  serverDate = null;
  syncStart = 0;
  syncEnd = 0;
  syncTime = 0;
  timeout = null;
  this.sync = function() {
    var xhr,
      _this = this;
    xhr = Utils.getXHR();
    xhr.onreadystatechange = function(event) {
      try {
        switch (xhr.readyState) {
          case 1:
            clientTime = Date.now();
            break;
          case 2:
            if (xhr.status >= 400) {
              throw new Error("Sync error (" + xhr.status + "): " + _this.url);
            }
            syncEnd = Date.now();
            syncTime = syncEnd - syncStart;
            serverDate = xhr.getResponseHeader("Date");
            if (serverDate != null) {
              serverTime = Date.parse(serverDate);
              _this.offset = clientTime - serverTime;
            } else {
              _this.offset = 0;
            }
            _this.dispatchEvent({
              type: "sync",
              time: _this.now()
            });
        }
      } catch (error) {
        _this.offset = 0;
        _this.dispatchEvent({
          type: "error",
          error: error,
          xhr: xhr
        });
      }
    };
    xhr.onerror = function(event) {
      _this.offset = 0;
      _this.dispatchEvent({
        type: "error",
        error: event,
        xhr: xhr
      });
    };
    syncStart = Date.now();
    xhr.open("HEAD", this.url, true);
    xhr.send();
  };
  this.start = function() {
    this.stop();
    this.running = true;
    tick();
    timeout = setInterval(tick, this.interval);
  };
  this.stop = function() {
    this.running = false;
    clearInterval(timeout);
    timeout = null;
  };
  tick = function() {
    _this.dispatchEvent({
      type: "tick",
      time: _this.now()
    });
  };
  if (sync === true && (this.url != null)) {
    this.sync();
  }
}


__extends(Clock, EventDispatcher);


Clock.prototype.url = null;

Clock.prototype.interval = 1000;

Clock.prototype.running = false;

Clock.prototype.offset = 0;

Clock.prototype.now = function() {
  return Date.now() - this.offset;
};

Clock.prototype.sync = function() {};

Clock.prototype.start = function() {};

Clock.prototype.stop = function() {};

function Logger() {}

Logger.enabled = false;

Logger.enable = function(enabled) {
  if (enabled == null) {
    enabled = /debug\=true/.test(location.search.toLowerCase());
  }
  this.enabled = enabled;
  if (!this.enabled) {
    this.log = this.trace = this.debug = this.info = this.warn = this.error = this.fatal = function() {};
  }
  return enabled;
};

Logger.log = function() {
  try {
    console.log.apply(console, arguments);
  } catch (error) {

  }
};

Logger.trace = function() {
  try {
    console.trace.apply(console, arguments);
  } catch (error) {

  }
};

Logger.debug = function() {
  try {
    console.log.apply(console, arguments);
  } catch (error) {
    this.log.apply(this, arguments);
  }
};

Logger.info = function() {
  try {
    console.info.apply(console, arguments);
  } catch (error) {

  }
};

Logger.warn = function() {
  try {
    console.warn.apply(console, arguments);
  } catch (error) {

  }
};

Logger.error = function() {
  try {
    console.error.apply(console, arguments);
  } catch (error) {
    this.log.apply(this, arguments);
  }
};

Logger.fatal = function() {
  try {
    console.fatal.apply(console, arguments);
  } catch (error) {

  }
};

/**
 * Event constructor.
 *
 * @param {!string}  type  A string representing the event's type.
 * @param {Object=} details  Data to pass along with the event.
 * @constructor
 * @private
 * @implements {IEvent}
*/
function Event(type, details) {
  this.type = type;
  if (details != null) {
    this.data = this.details = details;
  }
}

/**
 * The event's type.
 * 
 * @type {string}
*/
Event.prototype.type = null;

/**
 * Collection of event specific details.
 * 
 * @type {Object}
*/
Event.prototype.target = null;

/**
 * @type {Object}
 * @deprecated
*/
Event.prototype.data = null;

/**
 * Collection of event specific details.
 * 
 * @type {Object}
*/
Event.prototype.details = null;

/**
 * @constructor
 * @private
 * @extends {EventDispatcher}
*/
function XHR() {
  XHR.__super__.constructor.call(this, this);
}


__extends(XHR, EventDispatcher);


XHR.prototype.xhr = null;

XHR.prototype.headers = null;

XHR.prototype.response = null;

XHR.prototype.responseXML = null;

XHR.prototype.responseText = null;

XHR.prototype.responseType = null;

XHR.prototype.withCredentials = false;

XHR.prototype.readyState = 0;

XHR.prototype.status = null;

XHR.prototype.open = function(method, url) {
  var xdr, xhr,
    _this = this;
  try {
    xhr = new XMLHttpRequest();
  } catch (error) {
    xhr = new window.ActiveXObject("Microsoft.XMLHTTP");
  }
  if (XHR.isCORS(url)) {
    if (Object.prototype.hasOwnProperty.call(xhr, "withCredentials")) {
      try {
        xhr.withCredentials = this.withCredentials;
      } catch (error) {
        Logger.warn("[AMP XHR WARNING]", "withCredentials not properly supported in this browser.", error);
      }
    } else if (typeof XDomainRequest !== "undefined") {
      xdr = true;
      xhr = new XDomainRequest();
    }
  }
  if (xhr != null) {
    if (xdr) {
      xhr.onload = function(event) {
        if (typeof xhr.onreadystatechange === 'function') {
          xhr.readyState = 4;
          xhr.status = 200;
          if (xhr.contentType.match(/\/xml/)) {
            xhr.responseXML = new ActiveXObject('Microsoft.XMLDOM');
            xhr.responseXML.async = false;
            xhr.responseXML.loadXML(xhr.responseText);
          }
          xhr.onreadystatechange.call(xhr, event, false);
        }
      };
    }
    xhr.onreadystatechange = function(event) {
      var _ref, _ref1;
      _this.readyState = xhr.readyState;
      _this.dispatchEvent(new Event("readystatechange", xhr));
      if (xhr.readyState === 4) {
        _this.status = xhr.status;
        if ((199 < (_ref = _this.status) && _ref < 400) || _this.status === 0) {
          if (xhr.responseText == null) {
            xhr.responseText = xhr.text;
          }
          _this.responseText = xhr.responseText;
          if ((xhr.responseXML != null) && ((_ref1 = xhr.responseXML.childNodes) != null ? _ref1.length : void 0) > 0) {
            _this.response = _this.responseXML = xhr.responseXML;
            _this.responseType = "document";
          } else {
            try {
              _this.response = JSON.parse(xhr.responseText);
              _this.responseType = "json";
            } catch (error) {
              _this.response = xhr.responseText;
              _this.responseType = "text";
            }
          }
          _this.dispatchEvent(new Event("load", _this));
        } else {
          if (_this.status !== 0) {
            _this.dispatchEvent(new Event("error", _this));
          }
        }
      }
    };
    try {
      if (typeof xhr.onerror !== "undefined") {
        xhr.onerror = function(event) {
          _this.dispatchEvent(new Event("error", _this));
        };
      }
    } catch (error) {

    }
    xhr.open(method, url);
  }
  this.xhr = xhr;
};

XHR.prototype.send = function(data) {
  var key, value, _ref;
  if (this.headers != null) {
    _ref = this.headers;
    for (key in _ref) {
      value = _ref[key];
      if ((key != null) && (value != null)) {
        this.xhr.setRequestHeader(key, value);
      }
    }
  }
  this.xhr.send(data);
};

XHR.prototype.setRequestHeader = function(key, value) {
  if (!(key != null) || !(value != null)) {
    return;
  }
  if (this.headers == null) {
    this.headers = {};
  }
  this.headers[key] = value;
};

XHR.prototype.setRequestHeaders = function(headers) {
  this.headers = headers;
  return headers;
};

XHR.prototype.getResponseHeader = function(name) {
  var _ref;
  return (_ref = this.xhr) != null ? typeof _ref.getResponseHeader === "function" ? _ref.getResponseHeader(name) : void 0 : void 0;
};

XHR.prototype.getAllResponseHeaders = function() {
  var _ref;
  return (_ref = this.xhr) != null ? typeof _ref.getAllResponseHeaders === "function" ? _ref.getAllResponseHeaders() : void 0 : void 0;
};

XHR.isCORS = function(url) {
  var hostname, parser, port, protocol;
  parser = document.createElement('a');
  parser.href = url;
  hostname = parser.hostname !== "" ? parser.hostname : location.hostname;
  port = parser.port !== "0" ? parser.port : location.port;
  protocol = parser.protocol !== ":" ? parser.protocol : location.protocol;
  return location.protocol !== protocol || location.hostname !== hostname || location.port !== port && !(location.port === "" && port === "80");
};

function QueryString() {}

QueryString.construct = function() {
  var key, value, vars;
  vars = URLVariables.decode(window.location.search);
  for (key in vars) {
    value = vars[key];
    QueryString[key] = value;
  }
  return true;
};

QueryString.constructed = QueryString.construct();

QueryString.serialize = function(obj, prefix) {
  var k, p, str, v;
  str = [];
  for (p in obj) {
    v = obj[p];
    if (!(v != null)) {
      continue;
    }
    k = (prefix ? prefix + "[" + p + "]" : p);
    str.push((typeof v === "object" ? this.serialize(v, k) : encodeURIComponent(k) + "=" + encodeURIComponent(v)));
  }
  return str.join("&");
};

/**
 * The EventDispatcher interface
 * 
 * @interface
 * @private
*/
function IEventDispatcher() {}

/**
 * Adds a listener for a given event type.
 *
 * @param {!string}  type  A string representing the event's type.
 * @param {!Function} func  A function to call when the event is triggered.
 * @param {boolean=} capture
*/
IEventDispatcher.prototype.addEventListener = function(type, func, capture) {};

/**
 * Dispathes and event, triggering all event listener of the event's type.
 *
 * @param {!IEvent} event The event to dispatch.
*/
IEventDispatcher.prototype.dispatchEvent = function(event) {};

/**
 * Removes a listener for a given event type.
 *
 * @param {!string}  type  A string representing the event's type.
 * @param {!Function} func  A function to call when the event is triggered.
 * @param {boolean=} capture  
 * @return {?Function} the handler that was removed if any
*/
IEventDispatcher.prototype.removeEventListener = function(type, func, capture) {};

function IdleUtil(element, timeout) {
  this.element = element;
  this.timeout = timeout;
  IdleUtil.__super__.constructor.call(this);
  this.resetHandler = this.reset.bind(this);
}


__extends(IdleUtil, EventDispatcher);


IdleUtil.prototype.events = ["mousemove", "mousedown", "keypress", "DOMMouseScroll", "mousewheel", "touchmove", "MSPointerMove"];

IdleUtil.prototype.resetHandler = null;

IdleUtil.prototype.element = null;

IdleUtil.prototype.timeout = null;

IdleUtil.prototype.active = true;

IdleUtil.prototype.timeoutId = null;

IdleUtil.prototype.applyListeners = function(action) {
  var event, _i, _len, _ref;
  if (action == null) {
    action = "add";
  }
  _ref = this.events;
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    event = _ref[_i];
    this.element["" + action + "EventListener"](event, this.resetHandler);
  }
};

IdleUtil.prototype.start = function(timeout) {
  if (timeout != null) {
    this.timeout = timeout;
  }
  this.stop();
  this.applyListeners("add");
  this.timeoutId = setTimeout(this.setActive.bind(this, false), this.timeout);
};

IdleUtil.prototype.stop = function() {
  this.applyListeners("remove");
  clearTimeout(this.timeoutId);
};

IdleUtil.prototype.reset = function() {
  this.setActive(true);
  this.start();
};

IdleUtil.prototype.setActive = function(value) {
  if (value === this.active) {
    return;
  }
  this.active = value;
  this.dispatchEvent(new Event("activechange", {
    active: this.active
  }));
  return value;
};

IdleUtil.prototype.getActive = function() {
  return this.active;
};

function Utils() {}

Utils.blankImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAMAAAAoyzS7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjI2QkJDQTBCMzQ4MTFFMUFERDJBRkRGQUQwNTcxRTIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NjI2QkJDQTFCMzQ4MTFFMUFERDJBRkRGQUQwNTcxRTIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowODg4NjdFQkIzNDgxMUUxQUREMkFGREZBRDA1NzFFMiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowODg4NjdFQ0IzNDgxMUUxQUREMkFGREZBRDA1NzFFMiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pu0++ecAAAAGUExURf///wAAAFXC034AAAABdFJOUwBA5thmAAAADElEQVR42mJgAAgwAAACAAFPbVnhAAAAAElFTkSuQmCC";

Utils.flashTypes = ["video/mp4", "video/x-flv", "video/f4m", "application/smil", "application/smil+xml"];

Utils.mimeTypes = {
  mp4: "video/mp4",
  flv: "video/x-flv",
  f4m: "video/f4m",
  smil: "application/smil",
  m3u8: "application/x-mpegURL",
  mp3: "audio/mpeg",
  json: "application/json",
  txt: "text/plain",
  xml: "application/xml",
  ogv: "video/ogg",
  webm: "video/webm",
  mpd: "application/dash+xml",
  ism: "application/vnd.ms-sstr+xml"
};

Utils.rules = {
  flashTablets: {
    label: "Android 2 & 3 or Kindle Fire 1",
    regexp: "Android [23]|Silk\/1"
  },
  html5Phones: {
    label: "iPhone",
    regexp: "iPhone"
  },
  html5Tablets: {
    label: "HTML5 Tablets",
    regexp: "iPad|Android 4|Silk\/2"
  },
  desktop: {
    label: "Desktop",
    regexp: "^((?!iPad|iPhone|Android|BlackBerry|PlayBook|Silk).)*$"
  }
};

Utils.playbackModes = {
  HTML: "html",
  AUTO: "auto",
  FLASH: "flash",
  NONE: "none",
  EXTERNAL: "external"
};

Utils.getPlaybackMode = function(mode) {
  var key, valid, value, _ref, _ref1;
  if (mode == null) {
    mode = ((_ref = QueryString.mode) != null ? _ref.toLowerCase() : void 0) || this.playbackModes.AUTO;
  }
  valid = false;
  _ref1 = this.playbackModes;
  for (key in _ref1) {
    value = _ref1[key];
    if (value === mode) {
      valid = true;
      break;
    }
  }
  if (!valid) {
    mode = this.playbackModes.AUTO;
  }
  if (mode !== this.playbackModes.AUTO) {
    if (mode === this.playbackModes.FLASH && !this.hasFlash()) {
      mode = this.playbackModes.NONE;
    }
    return mode;
  }
  if (!this.hasFlash()) {
    mode = this.supportsHTML5Video() ? this.playbackModes.HTML : this.playbackModes.NONE;
  }
  if (mode === this.playbackModes.AUTO) {
    mode = this.isHTML5() ? this.playbackModes.HTML : this.playbackModes.FLASH;
  }
  return mode;
};

Utils.mergeRules = function(rules) {
  var id, rule, _results;
  _results = [];
  for (id in rules) {
    rule = rules[id];
    _results.push(Utils.rules[id] = rule);
  }
  return _results;
};

Utils.checkRules = function(rules) {
  var id, regExp, rule, _i, _len;
  if ((rules != null) && rules.length > 0) {
    for (_i = 0, _len = rules.length; _i < _len; _i++) {
      id = rules[_i];
      if (!(rule = Utils.rules[id])) {
        continue;
      }
      regExp = new RegExp(rule.regexp);
      if (regExp.test(navigator.userAgent)) {
        return true;
      }
    }
  }
  return false;
};

Utils.selectSource = function(sources, canPlayType) {
  var item, _i, _j, _len, _len1;
  for (_i = 0, _len = sources.length; _i < _len; _i++) {
    item = sources[_i];
    if (Utils.checkRules(item.rules)) {
      return item;
    }
  }
  for (_j = 0, _len1 = sources.length; _j < _len1; _j++) {
    item = sources[_j];
    if (canPlayType(item.type || Utils.getMimeType(item.src)) !== "") {
      return item;
    }
  }
  return null;
};

Utils.getMimeType = function(file) {
  return this.mimeTypes[Utils.getFileExtension(file)];
};

Utils.selectTrack = function(tracks, kind) {
  var item, track, _i, _len;
  for (_i = 0, _len = tracks.length; _i < _len; _i++) {
    item = tracks[_i];
    if (!(item.kind === kind)) {
      continue;
    }
    track = item;
    break;
  }
  return track;
};

Utils.isIPhone = function() {
  return /iPhone/.test(navigator.platform) || /iPhone/.test(navigator.userAgent);
};

Utils.isIPad = function() {
  return /iPad/.test(navigator.platform) || /iPad/.test(navigator.userAgent);
};

Utils.isAndroid4 = function() {
  return /Android 4/.test(navigator.userAgent);
};

Utils.isKindleFireHD = function() {
  return /Silk\/2/.test(navigator.userAgent);
};

Utils.isKindleFire = function() {
  return /Silk\/1/.test(navigator.userAgent);
};

Utils.isBlackBerry = function() {
  return /BlackBerry;|PlayBook|BB10/.test(navigator.userAgent);
};

Utils.isFirefoxOS = function() {
  return /\(Mobile;.*Firefox\//.test(navigator.userAgent);
};

Utils.supportsHTML5Video = function() {
  var video;
  video = document.createElement("video");
  return video.canPlayType != null;
};

Utils.isHTML5 = function() {
  return this.isIOS() || this.isAndroid4() || this.isKindleFireHD() || this.isBlackBerry() || this.isFirefoxOS();
};

Utils.isIOS = function() {
  var iOSRegEx, isIOS;
  iOSRegEx = /iPad|iPhone|iPod/i;
  return isIOS = iOSRegEx.test(navigator.platform) || iOSRegEx.test(navigator.userAgent);
};

Utils.hasFlash = function() {
  return swfobject.hasFlashPlayerVersion("1");
};

Utils.isFullscreenDevice = function() {
  return this.isKindleFireHD() || this.isIPhone();
};

Utils.getDevice = function() {
  var device;
  device = null;
  if (this.isIPhone()) {
    device = "iphone";
  } else if (this.isIPad()) {
    device = "ipad";
  } else if (/Android/.test(navigator.userAgent)) {
    device = "android";
  } else if (this.isKindleFireHD()) {
    device = "kindlefirehd";
  } else if (this.isKindleFire()) {
    device = "kindlefire";
  } else if (/Mac|Win32/.test(navigator.platform)) {
    device = "desktop";
  }
  return device;
};

Utils.xmlToJson = function(xml) {
  var attribute, child, element, index, nodeName, obj, _i, _j, _len, _len1, _ref, _ref1;
  obj = {};
  if (xml.nodeType === 9) {
    xml = xml.firstChild;
  }
  if (xml.nodeType === 1) {
    if (xml.attributes.length > 0) {
      obj["@attributes"] = {};
      _ref = xml.attributes;
      for (index = _i = 0, _len = _ref.length; _i < _len; index = ++_i) {
        attribute = _ref[index];
        obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
      }
    }
  } else if (xml.nodeType === 3 || xml.nodeType === 4) {
    obj = xml.nodeValue;
  }
  if (xml.hasChildNodes()) {
    _ref1 = xml.childNodes;
    for (index = _j = 0, _len1 = _ref1.length; _j < _len1; index = ++_j) {
      child = _ref1[index];
      if (child.nodeType === 3 && !/\S/.test(child.nodeValue)) {
        continue;
      }
      nodeName = child.nodeName.replace(/:/, "-");
      element = this.xmlToJson(child);
      if (!(element["@attributes"] != null) && (element["#text"] != null)) {
        element = element["#text"];
      }
      if (!(obj[nodeName] != null)) {
        obj[nodeName] = element;
      } else {
        if (!(obj[nodeName] instanceof Array)) {
          obj[nodeName] = [obj[nodeName]];
        }
        obj[nodeName].push(element);
      }
    }
  }
  return obj;
};

/**
 * Returns a platform specific XHR object.
 * 
 * @static
*/
Utils.getXHR = function() {
  return new XHR();
};

/**
 * Retrieves a remote text file
 * 
 * @static
*/
Utils.get = function(url, client, headers) {
  var xhr;
  if (client == null) {
    client = {};
  }
  if (headers == null) {
    headers = null;
  }
  xhr = Utils.getXHR();
  if (client != null) {
    if (client.withCredentials != null) {
      xhr.withCredentials = client.withCredentials;
    }
    if (client.onload != null) {
      xhr.onload = client.onload;
    }
    if (client.onerror != null) {
      xhr.onerror = client.onerror;
    }
  }
  xhr.open("GET", url);
  if (headers != null) {
    xhr.setRequestHeaders(headers);
  }
  xhr.send();
  return xhr;
};

/**
 * Posts a string to NetStorage.
 * 
 * @static
*/
Utils.send = function(url, data, client, headers) {
  var xhr;
  if (client == null) {
    client = {};
  }
  if (headers == null) {
    headers = {
      "Content-Type": "String"
    };
  }
  xhr = Utils.getXHR();
  if (client.onload != null) {
    xhr.onload = client.onload;
  }
  if (client.onerror != null) {
    xhr.onerror = client.onerror;
  }
  xhr.open("POST", url);
  if (headers != null) {
    xhr.setRequestHeaders(headers);
  }
  xhr.send(data);
  return xhr;
};

/**
 * Attaches a JavaScript file to the head of the document.
 * 
 * @static
*/
Utils.loadAMPScript = function(src, onload) {
  return this.loadScript(src, onload, this.getAMPParent());
};

/**
 * Attaches a JavaScript file to the head of the document.
 * 
 * @static
*/
Utils.getAMPParent = function(src, onload) {
  var head, script;
  script = this.getAMPScriptTag();
  if (script != null) {
    return script.parentNode;
  }
  head = document.getElementsByTagName("head");
  if ((head != null ? head[0] : void 0) != null) {
    return head[0];
    /** @static
    */
  }
};

Utils.getAMPScriptTag = function() {
  var script, scripts, _i, _len;
  scripts = document.getElementsByTagName("script");
  for (_i = 0, _len = scripts.length; _i < _len; _i++) {
    script = scripts[_i];
    if (/amp(\..*)?\.js/.test(script.src)) {
      return script;
    }
  }
  return null;
};

/**
 * Attaches a JavaScript file to the head of the document.
 * 
 * @static
*/
Utils.loadScript = function(src, onload, parent) {
  var head, script;
  head = parent || document.getElementsByTagName("head")[0];
  script = document.createElement("script");
  script.type = 'text/javascript';
  if (onload != null) {
    if (script.addEventListener) {
      script.onload = function(event) {
        this.onload = null;
        onload();
      };
    } else if (script.readyState) {
      script.onreadystatechange = function(event) {
        if (this.readyState === 'loaded' || this.readyState === 'complete') {
          this.onreadystatechange = null;
          onload();
        }
      };
    }
  }
  script.src = src;
  head.appendChild(script);
  return script;
};

/**
 * Attaches a CSS file to the head of the document.
 * 
 * @static
*/
Utils.loadStyleSheet = function(href) {
  var head, link;
  head = document.getElementsByTagName("head")[0];
  link = document.createElement("link");
  link.rel = "stylesheet";
  link.type = 'text/css';
  link.href = href;
  return head.appendChild(link);
};

Utils.read = function(url, client, type, headers) {
  var text, xhr;
  if (client == null) {
    client = {};
  }
  if (type == null) {
    type = "";
  }
  if (headers == null) {
    headers = [];
  }
  try {
    xhr = this.get(url, client, headers);
    text = xhr.responseText || xhr.text;
    if (type === Utils.mimeTypes.json) {
      return JSON.parse(text);
    } else if ((type === Utils.mimeTypes.xml) && (xhr.responseXML != null)) {
      return xhr.responseXML;
    } else {
      return text;
    }
  } catch (error) {
    if (typeof console !== "undefined" && console !== null) {
      if (typeof console.error === "function") {
        console.error("Read Error: ", error);
      }
    }
    return null;
  }
};

Utils.getFileExtension = function(url) {
  return url.split('.').pop().replace(/\?.*/, "");
};

Utils.getResponseHeader = function(url, header, client) {
  var xhr;
  if (client == null) {
    client = {};
  }
  xhr = Utils.getXHR();
  if (client.onerror != null) {
    xhr.onerror = client.onerror;
  }
  xhr.open("HEAD", url, false);
  xhr.send();
  return xhr.getResponseHeader(header);
};

Utils.getResponseHeaders = function(url, headers, client) {
  var header, results, xhr, _i, _len;
  if (client == null) {
    client = {};
  }
  xhr = Utils.getXHR();
  if (client.onerror != null) {
    xhr.onerror = client.onerror;
  }
  xhr.open("HEAD", url, false);
  xhr.send();
  results = {};
  if (!(headers != null)) {
    return xhr.getAllResponseHeaders();
  }
  for (_i = 0, _len = headers.length; _i < _len; _i++) {
    header = headers[_i];
    results[header] = xhr.getResponseHeader(header);
  }
  return results;
};

/**
 * Determines if the device supports touch events
 * 
 * @static
*/
Utils.isTouch = null;

/**
 * Determines if the device supports touch events
 * 
 * @static
*/
Utils.isTouchDevice = function() {
  if (!(this.isTouch != null)) {
    try {
      document.createEvent("TouchEvent");
      this.isTouch = true;
    } catch (error) {
      this.isTouch = false;
    }
  }
  return this.isTouch;
};

/**
 * Forces a number between a min and a max
 * 
 * @static
*/
Utils.clamp = function(value, min, max) {
  if (value < min) {
    value = min;
  }
  if (value > max) {
    value = max;
  }
  return value;
};

/**
 * Beacons a url via an img tag
 * 
 * @static
*/
Utils.beacon = function(url) {
  var beaconImg;
  beaconImg = document.getElementById("beaconId");
  if (!(beaconImg != null)) {
    beaconImg = document.createElement("img");
    beaconImg.setAttribute("id", "beaconId");
    beaconImg.setAttribute("height", 0);
    beaconImg.setAttribute("width", 0);
    document.body.appendChild(beaconImg);
    beaconImg.style.display = "none";
  }
  beaconImg.setAttribute("src", url);
  return beaconImg;
};

/**
 * Beacons a url via an img tag
 * 
 * @static
*/
Utils.getElementOffset = function(element) {
  var offset;
  offset = {
    left: 0,
    top: 0
  };
  if (element.offsetParent) {
    offset.left = element.offsetLeft;
    offset.top = element.offsetTop;
    while ((element = element.offsetParent)) {
      offset.left += element.offsetLeft;
      offset.top += element.offsetTop;
    }
  }
  return offset;
};

/**
 * Override the properties of a base object with the values
 * of an override object.
 * 
 * @param {Object} base     The base object.
 * @param {Object} overrides  key/value overrides
 * @return {Object} 
 * @static
*/
Utils.override = function(base, overrides, clone) {
  var key, value;
  if (clone == null) {
    clone = true;
  }
  if (!(base != null)) {
    return overrides;
  }
  if (!(overrides != null)) {
    return base;
  }
  if (clone === true) {
    base = Utils.clone(base);
    overrides = Utils.clone(overrides);
  }
  for (key in overrides) {
    value = overrides[key];
    if (typeof value === "object") {
      if (base[key] == null) {
        base[key] = value instanceof Array ? [] : {};
      }
      base[key] = Utils.override(base[key], value, false);
    } else {
      base[key] = value;
    }
  }
  return base;
};

/**
 * Clones an object.
 * 
 * @param {Object} obj The object to be cloned.
 * @return {Object}
 * @static
*/
Utils.clone = function(obj, deepCopy) {
  var clone, item, k, key, v, value, _i, _len;
  if (deepCopy == null) {
    deepCopy = true;
  }
  if (typeof obj !== "object") {
    clone = obj;
  } else {
    if (obj instanceof Array) {
      clone = [];
    } else {
      clone = {};
    }
    for (key in obj) {
      value = obj[key];
      if (typeof value === "object" && deepCopy === true) {
        if (value instanceof Array) {
          clone[key] = [];
          for (_i = 0, _len = value.length; _i < _len; _i++) {
            item = value[_i];
            clone[key].push(this.clone(item));
          }
        } else {
          clone[key] = {};
          for (k in value) {
            v = value[k];
            clone[key][k] = this.clone(v);
          }
        }
      } else {
        clone[key] = value;
      }
    }
  }
  return clone;
};

/**
 * Takes a time in seconds and converts it to timecode.
 * 
 * @param   {Number}  time  The time in seconds to be formatted.
 * @return  {String}  A SMTP formatted string.
*/
Utils.formatTimecode = function(time, duration) {
  var strTime;
  time = parseInt(time);
  if (isNaN(time)) {
    return "00:00";
  }
  strTime = Utils.formatZeroFill(time % 60);
  time = parseInt(time / 60);
  strTime = Utils.formatZeroFill(time % 60) + ":" + strTime;
  time = parseInt(time / 60);
  if (time > 0) {
    strTime = Utils.formatZeroFill(time) + ":" + strTime;
  }
  if (duration >= 3600 && strTime.length === 5) {
    strTime = "00:" + strTime;
  }
  return strTime;
};

/**
 * Converts a time in seconds to a string and adds a zero in front of any number lower than 10.
 * 
 * @param Number time The number to be zero filled.
*/
Utils.formatZeroFill = function(time) {
  var str;
  str = time.toString();
  if (time < 10) {
    str = "0" + str;
  }
  return str;
};

/**
 * Converts timecode to seconds.
 * 
 * @param   {string}  timeCode        A SMTP formatted string.
 * @param   {number}  [framerate=30]  The frame rate. Used to calculate milliseconds.
 * @return  {number}                  The number of seconds represented by the time code
*/
Utils.flattenTimecode = function(timeCode, framerate) {
  var ms, parts, pieces, time;
  if (framerate == null) {
    framerate = 30;
  }
  if (!(timeCode != null) || timeCode === "") {
    return NaN;
  }
  pieces = timeCode.split(":");
  ms = 0;
  if (pieces.length === 4) {
    ms = parseInt(pieces.pop()) / framerate;
  } else if (pieces.length === 3) {
    pieces[2] = pieces[2].replace(",", ".");
    if (pieces[2].indexOf(".") !== -1) {
      parts = pieces[2].split(".");
    }
    if ((parts != null ? parts.length : void 0) > 1) {
      pieces[2] = parts[0];
      ms = parseInt(parts[1]) / 1000;
    }
  }
  time = parseInt(pieces.pop());
  while (pieces.length > 0) {
    time += Math.pow(60, pieces.length) * parseInt(pieces.shift());
  }
  return time + ms;
};

/**
 * Adds a cache busting query string parameter to a url.
 * 
 * @param String url The url.
 * @param String key The name of the query string variable
 * @param Object value The value of the query string variable
*/
Utils.cacheBust = function(url, key, value) {
  var op;
  if (key == null) {
    key = "cacheBust";
  }
  if (value == null) {
    value = Date.now();
  }
  op = url.indexOf('?') === -1 ? "?" : "&";
  return url + op + key + "=" + value;
};

/**
 * Converts a camel case string in to a CSS proptery name.
*/
Utils.formatStyleName = function(styleName) {
  return styleName.replace(/([A-Z])/, "-$1").toLowerCase();
};

/**
 * Trims whitespace from the beginning and end of a string
*/
Utils.trim = function(str) {
  var trim;
  trim = str.replace(/^\s*(.*)/, "$1");
  return trim.replace(/(.*)\s*$/, "$1");
};

/**
*/
Utils.getJson = function(url, onload, onerror) {
  var xhr;
  xhr = Utils.getXHR();
  xhr.open("GET", url);
  xhr.onload = function(event) {
    var feed;
    if (xhr.responseType === "document") {
      feed = Utils.xmlToJson(xhr.responseXML);
    } else {
      feed = xhr.response;
    }
    if (typeof onload === "function") {
      onload(feed);
    }
  };
  xhr.onerror = function(event) {
    if (typeof onerror === "function") {
      onerror(event);
    }
  };
  xhr.send();
  return xhr;
};

/**
*/
Utils.getSource = function(url, onload, onerror) {
  var feedloadedHandler, mode;
  mode = Utils.getPlaybackMode();
  feedloadedHandler = function(feed) {
    var canPlayType, helper, source, _ref;
    helper = new MRSSHelper();
    feed = helper.createFeed(feed);
    if ((feed != null ? (_ref = feed.item) != null ? _ref.length : void 0 : void 0) > 0) {
      canPlayType = function(type) {
        if ((mode === "flash" && Utils.flashTypes.indexOf(type) !== -1) || (mode === "html" && Utils.flashTypes.indexOf(type) === -1)) {
          return "maybe";
        } else {
          return "";
        }
      };
      source = Utils.selectSource(feed.item[0].source, canPlayType);
    }
    if (typeof onload === "function") {
      onload(source);
    }
  };
  Utils.getJson(url, feedloadedHandler, onerror);
};

/**
*/
Utils.trackMouse = function() {
  try {
    document.addEventListener("mousemove", this.mouseTracker);
  } catch (error) {
    document.attachEvent("mousemove", this.mouseTracker);
  }
};

/**
*/
Utils.mouseTracker = function(event) {
  Utils.clientX = event.clientX;
  Utils.clientY = event.clientY;
  Utils.pageX = event.pageX;
  Utils.pageY = event.pageY;
};

/**
*/
Utils.isMouseOverElement = function(element) {
  if (!(element != null)) {
    return false;
  }
  return element.contains(document.elementFromPoint(Utils.clientX, Utils.clientY));
};

/** 
 * @constructor
 * @private
*/
function ButtonMediator(label, parent, element, componentName, onclick) {
  this.onclick = onclick != null ? onclick : this.onclick;
  ButtonMediator.__super__.constructor.call(this, componentName, null, parent, element);
  this.icon = this.create("icon");
  if (label != null) {
    this.label = this.createText("label", label);
  }
}


__extends(ButtonMediator, ComponentMediator);


ButtonMediator.prototype.componentType = "button";

ButtonMediator.prototype.icon = null;

ButtonMediator.prototype.label = null;

ButtonMediator.prototype.onclick = null;

/**
 * The FullScreenMediator class.
 * 
 * @constructor
 * @private
 * @extends {ModuleMediator}
 * @param {Object} viewComponent
*/
function FullScreenMediator(parent) {
  FullScreenMediator.__super__.constructor.call(this, null, parent);
}


__extends(FullScreenMediator, ButtonMediator);


FullScreenMediator.prototype.componentName = "full-screen";

FullScreenMediator.prototype.onRegister = function() {
  FullScreenMediator.__super__.onRegister.call(this);
  this.sendNotification(Notifications.ADD_CONTROL_STATE, this.componentName + "-enabled");
};

FullScreenMediator.prototype.onclick = function(event) {
  event.stopImmediatePropagation();
  this.sendNotification(Notifications.TOGGLE_FULL_SCREEN);
  return false;
};

/**
 * @override
*/
FullScreenMediator.prototype.listNotificationInterests = function() {
  return [Notifications.DISABLE_FULL_SCREEN, Notifications.ENABLE_FULL_SCREEN];
};

/**
 * @override
*/
FullScreenMediator.prototype.handleNotification = function(notification) {
  var body, name;
  name = notification.getName();
  body = notification.getBody();
  switch (name) {
    case Notifications.DISABLE_FULL_SCREEN:
      this.setDisabled(true);
      break;
    case Notifications.ENABLE_FULL_SCREEN:
      this.setDisabled(false);
  }
};

/** 
 * @param {FlashPlayer} player
 * @param {Object} config
 * @constructor
 * @private
 * @extends {puremvc.Mediator}
*/
function PluginWrapper(player, config) {
  this.player = player;
  this.config = config;
  PluginWrapper.__super__.constructor.call(this);
  this.dispatcher = new EventDispatcher(this);
}


__extends(PluginWrapper, puremvc.Mediator);


PluginWrapper.NAME = "PluginWrapper";

PluginWrapper.prototype.player = null;

PluginWrapper.prototype.config = null;

PluginWrapper.prototype.dispatcher = null;

PluginWrapper.prototype.createFlashVars = null;

PluginWrapper.prototype.createXML = null;

/**
*/
PluginWrapper.prototype.getAPI = function() {
  return this;
};

/**
*/
PluginWrapper.prototype.addEventListener = function(type, func) {
  this.dispatcher.addEventListener(type, func);
};

/**
*/
PluginWrapper.prototype.dispatchEvent = function(event) {
  if (event.type !== "timeupdate" && event.type !== "timeremaining") {
    this.player.logger.log("[AMP " + (this.constructor.NAME.replace('Wrapper', '').toUpperCase()) + " EVENT]", event.type, event.data, event);
  }
  event.player = this.player.parent;
  this.dispatcher.dispatchEvent(event);
};

/**
*/
PluginWrapper.prototype.removeEventListener = function(type, func) {
  this.dispatcher.removeEventListener(type, func);
};

/**
*/
PluginWrapper.prototype.createElement = function(xml, id, parent) {
  var element;
  element = xml.createElement("element");
  element.setAttribute("id", id);
  if (!(parent != null)) {
    parent = this.getControls(xml).controls;
  }
  if (parent != null) {
    parent.appendChild(element);
  }
  return element;
};

/**
*/
PluginWrapper.prototype.createProperty = function(xml, key, value, parent) {
  var property, text, val;
  property = xml.createElement("property");
  property.setAttribute("key", key);
  if (parent != null) {
    parent.appendChild(property);
  }
  if (value != null) {
    if (typeof value === "object" && !(value instanceof Array)) {
      for (key in value) {
        val = value[key];
        this.createProperty(xml, key, val, property);
      }
    } else {
      text = XMLUtils.createTextContent(xml, value.toString());
      property.appendChild(text);
    }
  }
  return property;
};

/**
*/
PluginWrapper.prototype.getControls = function(xml) {
  var controls, element, elements, id, _i, _len;
  elements = xml.getElementsByTagName("element");
  if ((elements != null ? elements.length : void 0) < 1) {
    return null;
  }
  controls = {};
  for (_i = 0, _len = elements.length; _i < _len; _i++) {
    element = elements[_i];
    id = element.getAttribute("id");
    controls[id] = element;
  }
  return controls;
};

/**
*/
PluginWrapper.prototype.hasControls = function(xml) {
  var _ref;
  return ((_ref = this.getControls(xml)) != null ? _ref.controls : void 0) != null;
};

/** @override
*/
PluginWrapper.prototype.listNotificationInterests = function() {
  return [FlashNotifications.CREATE_FLASH_VARS, FlashNotifications.CREATE_XML];
};

/**
*/
PluginWrapper.prototype.handleNotification = function(notification) {
  var body, name;
  name = notification.getName();
  body = notification.getBody();
  switch (name) {
    case FlashNotifications.CREATE_FLASH_VARS:
      if (typeof this.createFlashVars === "function") {
        this.createFlashVars(body.flashvars);
      }
      break;
    case FlashNotifications.CREATE_XML:
      if (typeof this.createXML === "function") {
        this.createXML(body.xml);
      }
  }
};

/**
 * The ControlsPlayCommand class.
 *   
 * @constructor
 * @private
 * @extends {puremvc.SimpleCommand}
*/
function ControlsPlayCommand() {
  ControlsPlayCommand.__super__.constructor.call(this);
}


__extends(ControlsPlayCommand, puremvc.SimpleCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
ControlsPlayCommand.prototype.execute = function(notification) {
  var controls;
  this.facade.logger.debug("ControlsPlayCommand");
  controls = this.facade.retrieveProxy(ControlsProxy.NAME);
  controls.start();
};

/**
 * The ControlsPauseCommand class.
 *   
 * @constructor
 * @private
 * @extends {puremvc.SimpleCommand}
*/
function ControlsPauseCommand() {
  ControlsPauseCommand.__super__.constructor.call(this);
}


__extends(ControlsPauseCommand, puremvc.SimpleCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
ControlsPauseCommand.prototype.execute = function(notification) {
  var controls;
  this.facade.logger.debug("ControlsPauseCommand");
  controls = this.facade.retrieveProxy(ControlsProxy.NAME);
  controls.stop();
};

/**
 * The ControlsActiveStateChangeCommand class.
 *   
 * @constructor
 * @private
 * @extends {puremvc.SimpleCommand}
*/
function ControlsActiveStateChangeCommand() {
  ControlsActiveStateChangeCommand.__super__.constructor.call(this);
}


__extends(ControlsActiveStateChangeCommand, puremvc.SimpleCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
ControlsActiveStateChangeCommand.prototype.execute = function(notification) {
  var app, body, controls;
  this.facade.logger.debug("ControlsActiveStateChangeCommand");
  controls = this.facade.retrieveProxy(ControlsProxy.NAME);
  app = this.facade.app.retrieveProxy(ApplicationStateProxy.NAME);
  body = notification.getBody();
  if (body.newState === ActiveState.ACTIVE && app.getPlayState() !== PlayState.READY && Utils.getDevice() !== "desktop") {
    controls.start();
  }
};

/**
 * The ControlsAdBreakStartCommand class.
 *   
 * @constructor
 * @private
 * @extends {puremvc.SimpleCommand}
*/
function ControlsAdBreakStartCommand() {
  ControlsAdBreakStartCommand.__super__.constructor.call(this);
}


__extends(ControlsAdBreakStartCommand, puremvc.SimpleCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
ControlsAdBreakStartCommand.prototype.execute = function(notification) {
  this.facade.logger.debug("ControlsAdBreakStartCommand");
  this.facade.app.getVideo().controls = false;
};

/**
 * The ControlsAdBreakEndCommand class.
 *   
 * @constructor
 * @private
 * @extends {puremvc.SimpleCommand}
*/
function ControlsAdBreakEndCommand() {
  ControlsAdBreakEndCommand.__super__.constructor.call(this);
}


__extends(ControlsAdBreakEndCommand, puremvc.SimpleCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
ControlsAdBreakEndCommand.prototype.execute = function(notification) {
  this.facade.logger.debug("ControlsAdBreakEndCommand");
  this.facade.app.getVideo().controls = true;
};

/**
 * The ControlsChangeMediaCommand class.
 *   
 * @constructor
 * @private
 * @extends {puremvc.SimpleCommand}
*/
function ControlsChangeMediaCommand() {
  ControlsChangeMediaCommand.__super__.constructor.call(this);
}


__extends(ControlsChangeMediaCommand, puremvc.SimpleCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
ControlsChangeMediaCommand.prototype.execute = function(notification) {
  var media, src;
  this.facade.logger.debug("ControlsChangeMediaCommand");
  media = notification.getBody();
  src = media.poster;
  if ((src != null) && src !== "") {
    this.facade.app.getVideo().poster = src;
  }
};

/** 
 * The ControlsWrapper class.
 *   
 * @constructor
 * @private
 * @extends {PluginWrapper}
 * @param   {FlashPlayer}   player  The FlashPlayer
 * @param   {Object}        config  The plugin config
*/
function ControlsWrapper(player, config) {
  ControlsWrapper.__super__.constructor.call(this, player, config);
}


__extends(ControlsWrapper, PluginWrapper);


ControlsWrapper.NAME = "ControlsWrapper";

ControlsWrapper.prototype.mode = "auto";

ControlsWrapper.prototype.autoHide = 5;

/** @override
*/
ControlsWrapper.prototype.listNotificationInterests = function() {
  return ControlsWrapper.__super__.listNotificationInterests.apply(this, arguments).concat([Notifications.MEDIUM_CHANGE]);
};

/**
*/
ControlsWrapper.prototype.handleNotification = function(notification) {
  var body, mode, name;
  ControlsWrapper.__super__.handleNotification.call(this, notification);
  name = notification.getName();
  body = notification.getBody();
  switch (name) {
    case Notifications.MEDIUM_CHANGE:
      mode = /audio/.test(body) ? "persistent" : this.mode;
      this.setMode(mode);
  }
};

/** @override
*/
ControlsWrapper.prototype.createFlashVars = function(flashvars) {
  if (this.config.mode != null) {
    this.mode = flashvars.controls_mode = this.config.mode;
  }
  return flashvars;
};

ControlsWrapper.prototype.createXML = function(xml) {
  var controls, element, elements, view, _i, _len;
  view = xml.getElementsByTagName("view")[0];
  elements = xml.getElementsByTagName("element");
  controls = null;
  for (_i = 0, _len = elements.length; _i < _len; _i++) {
    element = elements[_i];
    if (!(element.getAttribute("id") === "controls")) {
      continue;
    }
    controls = element;
    break;
  }
  if (!(controls != null)) {
    controls = xml.createElement("element");
    controls.setAttribute("id", "controls");
    view.appendChild(controls);
  }
  if (controls.attributes["autoHideDelay"] != null) {
    this.autoHide = controls.getAttribute("autoHideDelay");
  } else {
    if (this.config.autoHide != null) {
      this.autoHide = this.config.autoHide;
      controls.setAttribute("autoHideDelay", this.config.autoHide);
    }
  }
  return xml;
};

/**
*/
ControlsWrapper.prototype.getMode = function() {
  return this.mode;
};

ControlsWrapper.prototype.setMode = function(value) {
  if (value === this.mode) {
    return;
  }
  try {
    this.mode = value;
    this.player.video.setPlayerProperty("controlsMode", value);
  } catch (error) {
    this.facade.logger.error("Controls Error:", error);
  }
  return value;
};

ControlsWrapper.prototype.getAutoHide = function() {
  return this.autoHide;
};

/**
 * The VolumeMediator class.
 * 
 * @constructor
 * @private
 * @extends {ModuleMediator}
 * @param {Object} viewComponent
*/
function SliderMediator(parent, direction) {
  this.direction = direction != null ? direction : this.direction;
  SliderMediator.__super__.constructor.call(this, null, null, parent);
}


__extends(SliderMediator, ComponentMediator);


SliderMediator.prototype.componentType = "slider";

SliderMediator.prototype.trackView = null;

SliderMediator.prototype.handleView = null;

SliderMediator.prototype.valueView = null;

SliderMediator.prototype.startCapView = null;

SliderMediator.prototype.endCapView = null;

SliderMediator.prototype.min = 0;

SliderMediator.prototype.max = 1;

SliderMediator.prototype.value = 0;

SliderMediator.prototype.dragging = false;

SliderMediator.prototype.direction = "vertical";

SliderMediator.prototype.pressHandler = null;

SliderMediator.prototype.releaseHandler = null;

SliderMediator.prototype.moveHandler = null;

SliderMediator.prototype.clickHandler = null;

/**
 * @override
*/
SliderMediator.prototype.onRegister = function() {
  SliderMediator.__super__.onRegister.call(this);
  this.startCapView = this.create("start-cap");
  this.endCapView = this.create("end-cap");
  this.trackView = this.create("track");
  this.valueView = this.create("value", this.trackView);
  this.handleView = this.create("handle", this.trackView);
  this.pressHandler = EventHandler.create(this.handleView, EventHandler.PRESS, this.handlePressHandler.bind(this));
  this.releaseHandler = EventHandler.create(window, EventHandler.RELEASE, this.handleReleaseHandler.bind(this));
  this.releaseHandler.unbind();
  this.moveHandler = EventHandler.create(window, EventHandler.MOVE, this.updateHandler.bind(this));
  this.moveHandler.unbind();
  this.clickHandler = EventHandler.create(this.trackView, EventHandler.CLICK, this.updateHandler.bind(this));
};

/** sets the value
*/
SliderMediator.prototype.setDirection = function(value) {
  this.direction = value;
  return value;
};

SliderMediator.prototype.getDirection = function() {
  return this.direction;
};

/** sets the value
*/
SliderMediator.prototype.setValue = function(value) {
  this.updateValue(value);
  return value;
};

SliderMediator.prototype.getValue = function() {
  return this.value;
};

SliderMediator.prototype.setDragging = function(value) {
  if (value === this.dragging) {
    return;
  }
  this.dragging = value;
  this.sendNotification(Notifications.IS_USER_ACTIVE, this.dragging);
  return this.dragging;
};

SliderMediator.prototype.getDragging = function() {
  return this.dragging;
};

/** updates the view
*/
SliderMediator.prototype.updateValue = function(value) {
  var handle;
  this.value = Utils.clamp(value, this.min, this.max);
  if (this.direction === "vertical") {
    value = "height";
    handle = "bottom";
  } else {
    value = "width";
    handle = "left";
  }
  this.valueView.style[value] = this.handleView.style[handle] = "" + (this.value * 100) + "%";
};

/** calculates the value based on mouse/touch point
*/
SliderMediator.prototype.calculateValue = function(pos) {
  var offset, slider;
  if (this.getDirection() === "vertical") {
    slider = this.viewComponent.offsetHeight;
    offset = Utils.getElementOffset(this.viewComponent).top + slider;
    pos = -(pos.y - offset);
  } else {
    slider = this.viewComponent.offsetWidth;
    offset = Utils.getElementOffset(this.viewComponent).left;
    pos = pos.x - offset;
  }
  return Utils.clamp(pos / slider, 0, 1);
};

SliderMediator.prototype.handlePressHandler = function(event) {
  this.moveHandler.bind();
  this.releaseHandler.bind();
  this.setDragging(true);
  event.stopImmediatePropagation();
  return false;
};

SliderMediator.prototype.handleReleaseHandler = function(event) {
  this.moveHandler.unbind();
  this.releaseHandler.unbind();
  this.setDragging(false);
  event.stopImmediatePropagation();
  return false;
};

SliderMediator.prototype.updateHandler = function(event) {
  var pos;
  event.stopImmediatePropagation();
  pos = {
    x: event.clientX || event.targetTouches[0].screenX,
    y: event.clientY || event.targetTouches[0].screenY
  };
  this.setValue(this.calculateValue(pos));
  return false;
};

/**
 * @enum {string}
 * @const
 * @private
*/

var PanelNotifications = {
  ADD_PANEL: "addPanel",
  REMOVE_PANEL: "removePanel",
  OPEN_PANEL: "openPanel",
  CLOSE_PANEL: "closePanel",
  TOGGLE_PANEL: "togglePanel",
  CLOSE_ALL_PANELS: "closeAllPanels"
};

/**
 * The TimeDisplayMediator class.
 * 
 * @constructor
 * @private
 * @extends {LocalizedMediator}
 * @param {Object} viewComponent
*/
function TimeDisplayMediator(parent) {
  TimeDisplayMediator.__super__.constructor.call(this, null, null, parent);
}


__extends(TimeDisplayMediator, ComponentMediator);


/**
 * The name of the this Mediator.
 * 
 * @static
 * @type {string}
*/
TimeDisplayMediator.prototype.componentName = "time-display";

TimeDisplayMediator.prototype.duration = null;

TimeDisplayMediator.prototype.currentTimeDisplay = null;

TimeDisplayMediator.prototype.separatorDisplay = null;

TimeDisplayMediator.prototype.durationDisplay = null;

TimeDisplayMediator.prototype.liveDisplay = null;

/**
 * @override
*/
TimeDisplayMediator.prototype.onRegister = function() {
  TimeDisplayMediator.__super__.onRegister.call(this);
  this.liveDisplay = this.createText("live-display", this.localizationManager.getString(LocalizationConstants.MSG_LIVE));
  this.currentTimeDisplay = this.createText("current-time-display", "00:00", this, "span");
  this.separatorDisplay = this.createText("separator-display", " / ", this, "span");
  this.durationDisplay = this.createText("duration-display", "00:00", this, "span");
};

/**
 * @override
*/
TimeDisplayMediator.prototype.listNotificationInterests = function() {
  return [Notifications.PLAY, Notifications.DURATION_CHANGE, Notifications.ENDED, Notifications.DISPLAY_TIME];
};

/**
 * @override
*/
TimeDisplayMediator.prototype.handleNotification = function(notification) {
  var body, name;
  name = notification.getName();
  body = notification.getBody();
  switch (name) {
    case Notifications.PLAY:
      this.updateDuration();
      break;
    case Notifications.DURATION_CHANGE:
      this.duration = body;
      this.updateCurrentTime();
      this.updateDuration();
      break;
    case Notifications.ENDED:
      this.updateCurrentTime(this.duration);
      this.updateDuration();
      break;
    case Notifications.DISPLAY_TIME:
      this.updateCurrentTime(body.currentTime, body.duration);
      this.updateDuration(body.duration);
  }
};

TimeDisplayMediator.prototype.updateCurrentTime = function(currentTime, duration) {
  if (currentTime == null) {
    currentTime = this.currentTime;
  }
  if (duration == null) {
    duration = this.duration;
  }
  this.currentTimeDisplay.textContent = Utils.formatTimecode(currentTime, duration);
};

TimeDisplayMediator.prototype.updateDuration = function(duration) {
  if (duration == null) {
    duration = this.duration;
  }
  this.durationDisplay.textContent = Utils.formatTimecode(duration);
};

/**
 * The PanelsMediator class.
 * 
 * @constructor
 * @private
 * @extends {LayerMediator}
*/
function PanelsMediator(parent) {
  this.panels = [];
  this.closeHandler = this.mouseupHandler.bind(this);
  PanelsMediator.__super__.constructor.call(this, null, null, parent);
}


__extends(PanelsMediator, ComponentMediator);


PanelsMediator.prototype.componentName = "panels";

PanelsMediator.prototype.activePanel = null;

PanelsMediator.prototype.panels = null;

PanelsMediator.prototype.closeHandler = null;

/**
 * @override
*/
PanelsMediator.prototype.listNotificationInterests = function() {
  var key, value;
  return ((function() {
    var _results;
    _results = [];
    for (key in PanelNotifications) {
      value = PanelNotifications[key];
      _results.push(value);
    }
    return _results;
  })()).concat([]);
};

/**
 * @override
*/
PanelsMediator.prototype.handleNotification = function(notification) {
  var body, name;
  name = notification.getName();
  body = notification.getBody();
  switch (name) {
    case PanelNotifications.ADD_PANEL:
      this.addPanel(body);
      break;
    case PanelNotifications.REMOVE_PANEL:
      this.removePanel(body);
      break;
    case PanelNotifications.OPEN_PANEL:
      this.openPanel(body);
      break;
    case PanelNotifications.CLOSE_PANEL:
      this.closePanel(body);
      break;
    case PanelNotifications.CLOSE_ALL_PANELS:
      this.closeAllPanels(body);
      break;
    case PanelNotifications.TOGGLE_PANEL:
      this.togglePanel(body);
  }
};

PanelsMediator.prototype.addPanel = function(panel) {
  this.panels.push(panel);
  this.viewComponent.appendChild(panel.getViewComponent());
};

PanelsMediator.prototype.removePanel = function(panel) {
  this.panels.splice(this.panels.indexOf(panel), 1);
  this.viewComponent.removeChild(panel.getViewComponent());
};

PanelsMediator.prototype.openPanel = function(panel) {
  if (panel === this.activePanel || !(panel != null)) {
    return;
  }
  this.closeAllPanels();
  this.activePanel = panel;
  this.activePanel.classList.add("active");
  if (Utils.getDevice() !== "desktop") {
    this.sendNotification(Notifications.IS_USER_ACTIVE, true);
  }
  document.addEventListener("mouseup", this.closeHandler);
};

PanelsMediator.prototype.closePanel = function(panel) {
  panel.classList.remove("active");
  if (this.activePanel != null) {
    this.activePanel = null;
    if (Utils.getDevice() !== "desktop") {
      this.sendNotification(Notifications.IS_USER_ACTIVE, false);
    }
    document.removeEventListener("mouseup", this.closeHandler);
  }
};

PanelsMediator.prototype.togglePanel = function(panel) {
  if (panel === this.activePanel) {
    this.closePanel(panel);
  } else {
    this.openPanel(panel);
  }
};

PanelsMediator.prototype.closeAllPanels = function() {
  var panel, _i, _len, _ref;
  _ref = this.panels;
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    panel = _ref[_i];
    this.closePanel(panel);
  }
};

PanelsMediator.prototype.mouseupHandler = function(event) {
  var button, element, panel;
  element = document.elementFromPoint(event.clientX, event.clientY);
  panel = this.activePanel.getViewComponent();
  button = this.activePanel.control.getViewComponent();
  if (element !== panel && panel.contains(element) === false && element !== button && button.contains(element) === false) {
    this.closeAllPanels();
  }
};

/**
 * The ProgressMediator class.
 * 
 * @constructor
 * @private
 * @extends {ModuleMediator}
 * @param {Object} viewComponent
*/
function ProgressMediator(parent) {
  ProgressMediator.__super__.constructor.call(this, parent, "horizontal");
}


__extends(ProgressMediator, SliderMediator);


/**
 * The name of the this Mediator.
 * 
 * @static
 * @type {string}
*/
ProgressMediator.prototype.componentName = "progress";

ProgressMediator.prototype.bufferValue = null;

ProgressMediator.prototype.scrubTime = null;

ProgressMediator.prototype.scrubTimeSeparator = null;

ProgressMediator.prototype.cuePoints = null;

ProgressMediator.prototype.duration = 0;

ProgressMediator.prototype.isLive = false;

ProgressMediator.prototype.previewData = {
  src: null,
  previewWidth: null,
  previewHeight: null,
  imgWidth: null,
  imgHeight: null,
  count: null
};

/**
 * @override
*/
ProgressMediator.prototype.onRegister = function() {
  ProgressMediator.__super__.onRegister.call(this);
  this.bufferValue = this.create("buffer-value", false);
  this.trackView.insertBefore(this.bufferValue, this.trackView.lastChild);
  this.cuePoints = this.create("cue-points", this.trackView);
  this.scrubTimeSeparator = this.create("scrub-time-separator", this.trackView);
  this.scrubTime = this.create("scrub-time", this.trackView);
  this.thumbPreview = this.create("thumb-preview");
};

/**
 * @override
*/
ProgressMediator.prototype.listNotificationInterests = function() {
  return [Notifications.ENDED, Notifications.MEDIA_CHANGE, Notifications.DURATION_CHANGE, Notifications.PROGRESS, Notifications.ADD_CUE_POINTS, Notifications.REMOVE_CUE_POINTS, Notifications.DISPLAY_TIME];
};

/**
 * @override
*/
ProgressMediator.prototype.handleNotification = function(notification) {
  var body, cue, cuePoint, cues, name, value, _i, _len, _ref, _ref1;
  name = notification.getName();
  body = notification.getBody();
  switch (name) {
    case Notifications.MEDIA_CHANGE:
      this.isLive = body.temporalType === "live";
      this.updateValue(0);
      this.bufferValue.style.width = "0%";
      this.updatePreview(body.metadata);
      break;
    case Notifications.PROGRESS:
      value = Utils.clamp(body / this.duration * 100, 0, 100);
      this.bufferValue.style.width = value + "%";
      break;
    case Notifications.DURATION_CHANGE:
      this.duration = body;
      break;
    case Notifications.ENDED:
      this.updateValue(1.0);
      break;
    case Notifications.ADD_CUE_POINTS:
      if (((_ref = this.facade.app.config) != null ? (_ref1 = _ref.controls) != null ? _ref1.displaySceneMarkers : void 0 : void 0) != null) {
        if (this.facade.app.config.controls.displaySceneMarkers === false) {
          return;
        }
      }
      this.removeCuePoints();
      cues = body;
      for (_i = 0, _len = cues.length; _i < _len; _i++) {
        cue = cues[_i];
        if (!(cue !== 0 && cue !== -1)) {
          continue;
        }
        cuePoint = this.create("cue-point", this.cuePoints);
        cuePoint.style.left = (cue / this.duration * 100) + "%";
      }
      break;
    case Notifications.REMOVE_CUE_POINTS:
      this.removeCuePoints();
      break;
    case Notifications.DISPLAY_TIME:
      this.updateValue(body.currentTime / body.duration, body.duration);
  }
};

ProgressMediator.prototype.updatePreview = function(metadata) {
  var img,
    _this = this;
  this.previewData.src = metadata.previewThumbnailSrc;
  this.previewData.previewHeight = metadata.previewThumbnailHeight;
  this.previewData.previewWidth = metadata.previewThumbnailWidth;
  this.previewData.count = metadata.previewThumbnailCount;
  img = new Image();
  if (this.previewData.src) {
    img.src = this.previewData.src;
  }
  EventHandler.create(img, "load", function(event) {
    event.stopImmediatePropagation();
    _this.previewData.imgWidth = event.target.width;
    _this.previewData.imgHeight = event.target.height;
    return false;
  });
  if (this.previewData.src) {
    this.thumbPreview.style.backgroundImage = "url(" + this.previewData.src + ")";
  }
  this.thumbPreview.style.width = this.previewData.previewWidth + "px";
  this.thumbPreview.style.height = this.previewData.previewHeight + "px";
};

ProgressMediator.prototype.removeCuePoints = function() {
  if (!(this.cuePoints != null)) {
    return;
  }
  this.cuePoints.innerHTML = "";
};

/** sets the value
*/
ProgressMediator.prototype.setValue = function(value) {
  var playbackCore;
  ProgressMediator.__super__.setValue.call(this, value);
  playbackCore = this.facade.app.retrieveProxy(PlayerProxy.NAME).getActivePlaybackCore();
  this.sendNotification(UserNotifications.SEEK, value * playbackCore.getDuration());
};

/** updates the view
*/
ProgressMediator.prototype.updateValue = function(percent, duration) {
  if (duration == null) {
    duration = this.duration;
  }
  if (this.isLive === true) {
    percent = 1;
  }
  if (isNaN(percent) === true) {
    percent = 0;
  }
  ProgressMediator.__super__.updateValue.call(this, percent);
  if (this.getDragging() === true) {
    this.scrubTime.textContent = Utils.formatTimecode(this.value * duration);
  }
  this.scrubTime.style.left = this.scrubTimeSeparator.style.left = "" + ((this.value * 100).toFixed(2)) + "%";
  this.previewInterval = this.duration / this.previewData.count;
  this.previewImgIndex = Math.floor(this.value * duration / this.previewInterval);
  this.previewRow = Math.floor((this.previewImgIndex * this.previewData.previewWidth) / this.previewData.imgWidth);
  this.xpos = "-" + this.previewData.previewWidth * this.previewImgIndex + "px ";
  this.ypos = "-" + this.previewData.previewHeight * this.previewRow.toFixed(0) + "px ";
  this.thumbPreview.style.backgroundPosition = this.xpos + this.ypos;
  this.thumbPreview.style.left = "" + (((this.value * 100) - 18).toFixed(2)) + "%";
};

ProgressMediator.prototype.handlePressHandler = function(event) {
  ProgressMediator.__super__.handlePressHandler.call(this, event);
  this.classList.add("scrubbing");
};

ProgressMediator.prototype.handleReleaseHandler = function(event) {
  ProgressMediator.__super__.handleReleaseHandler.call(this, event);
  this.classList.remove("scrubbing");
};

/**
 * The PlayPauseMediator class.
 * 
 * @constructor
 * @private
 * @extends {ButtonMediator}
*/
function PlayPauseMediator(parent) {
  PlayPauseMediator.__super__.constructor.call(this, null, parent);
}


__extends(PlayPauseMediator, ButtonMediator);


PlayPauseMediator.prototype.componentName = "play-pause";

PlayPauseMediator.prototype.onclick = function(event) {
  event.stopImmediatePropagation();
  event.preventDefault();
  this.sendNotification(UserNotifications.TOGGLE_PLAY_PAUSE);
  return false;
};

/** 
 * @constructor
 * @private
*/
function ControlsProxy(config) {
  ControlsProxy.__super__.constructor.call(this, config);
}


__extends(ControlsProxy, ModuleProxy);


ControlsProxy.NAME = ModuleProxy.NAME;

ControlsProxy.prototype.defaults = {
  mode: "auto",
  autoHide: 3
};

ControlsProxy.prototype.timeout = null;

ControlsProxy.prototype.appState = null;

ControlsProxy.prototype.controls = null;

ControlsProxy.prototype.interactiveElement = null;

ControlsProxy.prototype.idleUtil = null;

ControlsProxy.prototype.initializeNotifier = function(key) {
  ControlsProxy.__super__.initializeNotifier.call(this, key);
  this.appState = this.facade.app.retrieveProxy(ApplicationStateProxy.NAME);
  this.controls = this.facade.retrieveMediator(ApplicationStateProxy.NAME);
};

ControlsProxy.prototype.initialize = function() {
  var _this = this;
  if (this.config.mode != null) {
    this.changeMode(this.config.mode);
  }
  this.interactiveElement = this.facade.app.retrieveMediator(OverlayLayerMediator.NAME).getViewComponent();
  if (Utils.getDevice() === "desktop") {
    EventHandler.create(this.interactiveElement, "mouseenter", function() {
      _this.stop();
      _this.sendNotification(Notifications.CHANGE_ACTIVE_STATE, ActiveState.ACTIVE);
    });
    EventHandler.create(this.interactiveElement, "mouseleave", function() {
      _this.start();
    });
    this.idleUtil = new IdleUtil(this.facade.app.getViewComponent(), this.data.autoHide * 1000);
    this.idleUtil.addEventListener("activechange", function(event) {
      var state;
      state = event.details.active !== true ? ActiveState.INACTIVE : ActiveState.ACTIVE;
      _this.sendNotification(Notifications.CHANGE_ACTIVE_STATE, state);
    });
    this.idleUtil.start();
  } else {
    EventHandler.create(this.interactiveElement, EventHandler.CLICK, function() {
      _this.sendNotification(Notifications.TOGGLE_ACTIVE);
    });
  }
};

ControlsProxy.prototype.setMode = function(value) {
  if (this.data.mode === value) {
    return value;
  }
  this.changeMode(value);
  return value;
};

ControlsProxy.prototype.changeMode = function(value) {
  if (this.data.mode === "auto") {
    this.stop();
  }
  this.facade.sendNotification(Notifications.REMOVE_APPLICATION_STATE, "controls-" + this.data.mode);
  this.data.mode = value;
  this.facade.sendNotification(Notifications.ADD_APPLICATION_STATE, "controls-" + this.data.mode);
};

ControlsProxy.prototype.getMode = function() {
  return this.data.mode;
};

ControlsProxy.prototype.setAutoHide = function(value) {
  this.data.autoHide = value;
  return value;
};

ControlsProxy.prototype.getAutoHide = function() {
  return this.data.autoHide;
};

ControlsProxy.prototype.start = function() {
  this.stop();
  if (this.data.mode !== "auto") {
    return;
  }
  this.timeout = setTimeout(this.hide.bind(this), this.data.autoHide * 1000);
};

ControlsProxy.prototype.stop = function() {
  clearTimeout(this.timeout);
  this.timeout = null;
};

ControlsProxy.prototype.hide = function() {
  if (this.data.mode !== "auto") {
    return;
  }
  if ((this.appState.getIsUserActive() === true || Utils.isMouseOverElement(this.facade.viewComponent)) && this.appState.getDisplayState() !== DisplayState.FULL_SCREEN) {
    this.start();
    return;
  }
  this.facade.sendNotification(Notifications.CHANGE_ACTIVE_STATE, ActiveState.INACTIVE);
};

/**
 * The ControlsMediator class.
 * 
 * @constructor
 * @private
 * @extends {LayerMediator}
*/
function ControlsMediator() {
  ControlsMediator.__super__.constructor.call(this);
}


__extends(ControlsMediator, LayerMediator);


ControlsMediator.prototype.componentName = "controls";

ControlsMediator.prototype.activeControlPanel = null;

ControlsMediator.prototype.controlBar = null;

ControlsMediator.prototype.panels = null;

/**
 * @override
*/
ControlsMediator.prototype.onRegister = function() {
  var separator;
  ControlsMediator.__super__.onRegister.call(this);
  this.facade.viewComponent = this.viewComponent;
  this.controlBar = this.create("control-bar");
  this.facade.registerMediator(new PanelsMediator(this.viewComponent));
  this.facade.registerMediator(new PlayPauseMediator(this.controlBar));
  this.facade.registerMediator(new TimeDisplayMediator(this.controlBar));
  this.facade.registerMediator(new ProgressMediator(this.controlBar));
  separator = this.create("separator", this.controlBar);
};

/**
 * @override
*/
ControlsMediator.prototype.listNotificationInterests = function() {
  return [Notifications.READY, Notifications.ADD_CONTROL, Notifications.REMOVE_CONTROL, Notifications.ADD_CONTROL_STATE, Notifications.REMOVE_CONTROL_STATE];
};

/**
 * @override
*/
ControlsMediator.prototype.handleNotification = function(notification) {
  var body, name, _ref;
  name = notification.getName();
  body = notification.getBody();
  switch (name) {
    case Notifications.READY:
      if (((_ref = body.fullscreen) != null ? _ref.enabled : void 0) !== false) {
        this.facade.registerMediator(new FullScreenMediator(this.controlBar));
      }
      break;
    case Notifications.ADD_CONTROL_STATE:
      this.classList.add(body);
      break;
    case Notifications.REMOVE_CONTROL_STATE:
      this.classList.remove(body);
      break;
    case Notifications.ADD_CONTROL:
      this.controlBar.appendChild(body);
      break;
    case Notifications.REMOVE_CONTROL:
      this.controlBar.removeChild(body);
  }
};

/**
 * The AMPConfig class
 *   
 * @constructor
 * @private
 * @extends {EventDispatcher}
*/
function AMPConfig() {
  AMPConfig.__super__.constructor.call(this);
}


__extends(AMPConfig, EventDispatcher);


AMPConfig.UNINITIALIZED = 0;

AMPConfig.LOADING = 1;

AMPConfig.LOADED = 2;

AMPConfig.AMP_DEFAULTS = "amp-defaults";

/** @static
*/
AMPConfig.getConfigURL = function() {
  var script, src, vars;
  script = Utils.getAMPScriptTag();
  if (script != null) {
    src = script.src;
    if (src.indexOf("?") !== -1) {
      vars = URLVariables.decode(src);
      if (vars[this.AMP_DEFAULTS] != null) {
        return vars[this.AMP_DEFAULTS];
      }
    }
  }
  return null;
};

/**
 * Converst XML to a native JS object
 * 
 * @param   {Element} xml   The XML to convert
 * @return  {Object}
 * @static
*/
AMPConfig.parseModule = function(xml) {
  var child, childNodes, count, i, k, node, obj, _i, _len;
  obj = {};
  i = 0;
  childNodes = xml.childNodes;
  count = childNodes.length;
  k = 0;
  node = null;
  child = null;
  for (_i = 0, _len = childNodes.length; _i < _len; _i++) {
    node = childNodes[_i];
    if ((node != null ? node.nodeType : void 0) === 1) {
      obj[node.nodeName] = this.parseItem(node);
    }
  }
  return obj;
};

AMPConfig.parseItem = function(node) {
  var child, children, type, value, _i, _len;
  type = ("" + (node.getAttribute('type'))).toLowerCase();
  value = node.textContent || node.text || node.innerText;
  if (type !== "object" && type !== "array" && /#\{.*\}/.test(value)) {
    return value;
  }
  switch (type) {
    case "object":
      value = this.parseModule(node);
      break;
    case "array":
      value = [];
      children = node.childNodes;
      for (_i = 0, _len = children.length; _i < _len; _i++) {
        child = children[_i];
        if (child.nodeType !== 1) {
          continue;
        }
        value.push(this.parseItem(child));
      }
      break;
    case "boolean":
      value = value.toLowerCase() === "true";
      break;
    case "number":
      value = parseFloat(value);
  }
  return value;
};

/**
 * Loads and AMP module
 * 
 * @static
*/
AMPConfig.loadHead = function(data, onload) {
  var count, element, head, link, links, loadScript, loaded, next, scripts, _i, _len;
  head = Utils.getAMPParent();
  loadScript = function(script) {
    var element;
    element = document.createElement("script");
    element.type = 'text/javascript';
    element.src = script;
    if (element.addEventListener) {
      element.addEventListener("load", next, false);
    } else if (element.readyState) {
      element.onreadystatechange = next;
    }
    head.appendChild(element);
  };
  next = function() {
    loaded++;
    if (loaded < count) {
      return loadScript(scripts[loaded]);
    } else {
      return typeof onload === "function" ? onload() : void 0;
    }
  };
  if ((data.links != null) && data.links.length > 0) {
    links = data.links;
    for (_i = 0, _len = links.length; _i < _len; _i++) {
      link = links[_i];
      element = document.createElement("link");
      element.rel = "stylesheet";
      element.type = 'text/css';
      element.href = link;
      head.appendChild(element);
    }
  }
  if ((data.scripts != null) && data.scripts.length > 0) {
    scripts = data.scripts;
    loaded = -1;
    count = scripts.length;
    next();
  } else {
    if (typeof onload === "function") {
      onload();
    }
  }
};

AMPConfig.prototype.url = null;

AMPConfig.prototype.data = null;

AMPConfig.prototype.xml = null;

AMPConfig.prototype.readyState = AMPConfig.UNINITIALIZED;

AMPConfig.prototype.loaded = false;

/**
*/
AMPConfig.prototype.loadURL = function(url, withCredentials) {
  var xhr,
    _this = this;
  if (withCredentials == null) {
    withCredentials = false;
  }
  if (!(url != null)) {
    url = AMPConfig.getConfigURL();
    if (!(url != null)) {
      return;
    }
  }
  this.url = url;
  this.setReadyState(AMPConfig.LOADING);
  xhr = Utils.get(url, {
    withCredentials: withCredentials,
    onload: function(event) {
      var data, firstChild, xmlhttp;
      xmlhttp = event.data;
      if (xmlhttp.responseType === "document") {
        _this.xml = xmlhttp.responseXML;
        firstChild = _this.xml.firstChild.nodeType !== 7 ? _this.xml.firstChild : _this.xml.childNodes[1];
        data = AMPConfig.parseModule(firstChild);
      } else {
        data = xmlhttp.response;
      }
      _this.loadModule(data);
    },
    onerror: function(event) {
      _this.dispatchEvent(new Event("error", event));
      Logger.error(event);
    }
  });
};

/**
*/
AMPConfig.prototype.loadModule = function(data) {
  var _this = this;
  if (data.head != null) {
    AMPConfig.loadHead(data.head, function() {
      _this.loadData(data.config);
    });
  } else {
    this.loadData(data.config);
  }
};

/**
*/
AMPConfig.prototype.loadData = function(data) {
  this.data = data;
  this.setReadyState(AMPConfig.LOADED);
};

/**
*/
AMPConfig.prototype.load = function(resource, withCredentials) {
  if (withCredentials == null) {
    withCredentials = false;
  }
  if (typeof resource === "object") {
    this.loadModule(resource);
  } else if ((!(resource != null)) || (typeof resource === "string")) {
    this.loadURL(resource, withCredentials);
  }
};

/**
*/
AMPConfig.prototype.setReadyState = function(state) {
  this.readyState = state;
  this.dispatchEvent(new Event("readystatechange", state));
  if (state === AMPConfig.LOADED && !this.loaded) {
    this.loaded = true;
    this.dispatchEvent(new Event("load", this.data));
  }
};

/**
 * The ControlsAPI class.
 * 
 * @param         {!ControlsPlugin} module  The base module this API wraps.
 * @constructor
 * @extends {PluginAPI}
*/
function ControlsAPI(module) {
  var controls;
  ControlsAPI.__super__.constructor.call(this, module);
  controls = module.retrieveProxy(ControlsProxy.NAME);
  this.setMode = controls.setMode.bind(controls);
  this.getMode = controls.getMode.bind(controls);
  this.setAutoHide = controls.setAutoHide.bind(controls);
  this.getAutoHide = controls.getAutoHide.bind(controls);
}


__extends(ControlsAPI, PluginAPI);


/**
 * @param {string} value The contorls mode.
 * @expose
*/
ControlsAPI.prototype.setMode = function(value) {};

/**
 * @return {string} The controls mode.
 * @expose
*/
ControlsAPI.prototype.getMode = function() {};

/**
 * @param {boolean} value The autohide flag.
 * @expose
*/
ControlsAPI.prototype.setAutoHide = function(value) {};

/**
 * @return {boolean} The autohide flag.
 * @expose
*/
ControlsAPI.prototype.getAutoHide = function() {};

/**
 * The base wrapper class for all AMP players. 
 *   
 * @constructor
 * @param {string}    id            The id of the div the player will be attached to.
 * @param {?Object}   config        The configuration override object.
 * @param {?Function} readyHandler  Optional ready handler.
*/
function AMP(container, config, readyHandler) {
  var api, debug, dispatcher, initialize, player, startup, version,
    _this = this;
  if (typeof container === "string") {
    container = document.getElementById(container);
  }
  Utils.trackMouse();
  player = null;
  api = null;
  version = null;
  dispatcher = new EventDispatcher(this);
  this.addEventListener = function(type, func, capture) {
    dispatcher.addEventListener(type, func, capture);
  };
  this.dispatchEvent = function(event) {
    event.player = this;
    dispatcher.dispatchEvent(event);
  };
  this.removeEventListener = function(type, func, capture) {
    dispatcher.removeEventListener(type, func, capture);
  };
  if (readyHandler != null) {
    this.addEventListener("ready", readyHandler);
  }
  initialize = function() {
    var xhr;
    if (typeof config === "string") {
      xhr = Utils.get(config);
      config = JSON.parse(xhr.responseText);
    }
    if (AMP.defaults.readyState !== AMPConfig.LOADED) {
      if ((AMPConfig.getConfigURL() != null) && (AMP.defaults.readyState === AMPConfig.UNINITIALIZED)) {
        AMP.loadDefaults();
      }
      AMP.defaults.addEventListener("load", function(event) {
        startup();
      });
      return;
    }
    startup();
  };
  /** @private
  */
  startup = function() {
    var feature, key, value, _ref;
    if ((AMP.defaults.data != null)) {
      config = Utils.override(AMP.defaults.data, config);
    }
    _this.version = _this.getVersion();
    config.mode = Utils.getPlaybackMode(config.mode);
    if (config.version == null) {
      config.version = _this.version;
    }
    if (container.dataset == null) {
      container.dataset = {};
    }
    container.dataset.version = _this.version;
    Logger.log(_this.version);
    switch (config.mode) {
      case "html":
        player = _this.createHTMLPlayer(config, container, dispatcher);
        break;
      case "flash":
        player = _this.createFlashPlayer(config, container, dispatcher);
        break;
      case "external":
        player = _this.createExternalPlayer(config, container, dispatcher);
        break;
      case "none":
        player = _this.createInstallPlayer(container);
    }
    player.parent = _this;
    api = typeof player.getAPI === "function" ? player.getAPI() : void 0;
    if (api != null) {
      for (key in api) {
        value = api[key];
        if (!(_this[key] != null)) {
          _this[key] = value;
        }
      }
    }
    _ref = player.getModules();
    for (key in _ref) {
      value = _ref[key];
      api = typeof value.getAPI === "function" ? value.getAPI() : void 0;
      _this[key] = api || value;
      feature = typeof value.getFeatureName === "function" ? value.getFeatureName() : void 0;
      if (feature != null) {
        _this[feature] = _this[key];
      }
    }
    try {
      container["amp"] = _this;
    } catch (error) {
      Logger.error(error);
    }
  };
  debug = (config != null ? config.debug : void 0) != null ? config.debug : /debug\=true/.test(location.search.toLowerCase());
  Logger.enable(debug);
  if (debug === true && ((config != null ? config["debugger"] : void 0) != null)) {
    AMP.loadDebugger(config["debugger"], initialize);
  } else {
    initialize();
  }
}

/**
 * Returns the version string for this player library.
 * 
 * @return {string} The version string.
*/
AMP.prototype.getVersion = function() {
  return this.constructor.VERSION;
};

/** @private
*/
AMP.prototype.createFlashPlayer = function(config, container, dispatcher) {
  return new FlashPlayer(config, container, dispatcher);
};

/** @private
*/
AMP.prototype.createHTMLPlayer = function(config, container, dispatcher) {
  return new HTMLPlayer(config, container, dispatcher);
};

/** @private
*/
AMP.prototype.createExternalPlayer = function(config, container, dispatcher) {
  return new ExternalPlayer(config, container, dispatcher);
};

/** @private
*/
AMP.prototype.createInstallPlayer = function(container) {
  return new InstallPlayer(container);
};

/**
 * The player version string
 * 
 * @type {string}
 * @private
 * @static
*/
AMP.VERSION = 'AMP v4.10.0.0004';

/** @private
*/
AMP.defaults = new AMPConfig();

/** @private
*/
AMP.plugins = [];

/** @static
*/
AMP.loadDefaults = function(url, withCredentials) {
  if (withCredentials == null) {
    withCredentials = false;
  }
  this.defaults.load(url, withCredentials);
};

/** @static
*/
AMP.loadDebugger = function(url, onload) {
  Utils.loadAMPScript(url, function() {
    if (onload != null) {
      setTimeout(onload, 1000);
    }
  });
};

/** @static
*/
AMP.getPlaybackMode = function() {
  return Utils.getPlaybackMode();
};

/** @static
*/
AMP.registerPlugin = function(id, mode, plugin) {
  var _base;
  if ((_base = this.plugins)[id] == null) {
    _base[id] = {};
  }
  this.plugins[id][mode] = plugin;
};

function PlayOverlayWrapper() {
  return PlayOverlayWrapper.__super__.constructor.apply(this, arguments);
}


__extends(PlayOverlayWrapper, PluginWrapper);


PlayOverlayWrapper.NAME = "PlayOverlayWrapper";

/**
*/
PlayOverlayWrapper.prototype.createFlashVars = function(flashvars) {
  flashvars.show_play_button_overlay = this.config.enabled != null ? this.config.enabled : true;
  return flashvars;
};


AMP.registerPlugin("playoverlay", "flash", PlayOverlayWrapper);

/** 
 * @constructor
 * @private
*/
function PlayOverlayMediator() {
  PlayOverlayMediator.__super__.constructor.call(this);
}


__extends(PlayOverlayMediator, OverlayMediator);


PlayOverlayMediator.prototype.componentName = "play";

PlayOverlayMediator.prototype.onclick = function(event) {
  event.stopImmediatePropagation();
  event.preventDefault();
  this.sendNotification(UserNotifications.TOGGLE_PLAY_PAUSE);
  return false;
};

/** 
 * The ControlsPlugin class.
 *   
 * @param {Module}  app     The parent module of this plugin.
 * @param {Object}  config  The plugin's configuration object.
 * @constructor
 * @private
 * @extends {Plugin}
*/
function ControlsPlugin(app, config) {
  ControlsPlugin.__super__.constructor.call(this, app, config);
}


__extends(ControlsPlugin, Plugin);


ControlsPlugin.NAME = "ControlsPlugin";

ControlsPlugin.prototype.moduleName = "controls";

/** @override
*/
ControlsPlugin.prototype.initialize = function() {
  if (this.config["native"] === true) {
    this.app.getVideo().controls = true;
    this.app.sendNotification(Notifications.ADD_APPLICATION_STATE, "controls-native");
    this.registerCommand(Notifications.CHANGE_MEDIA, ControlsChangeMediaCommand);
    this.registerCommand(AdNotifications.BREAK_START, ControlsAdBreakStartCommand);
    this.registerCommand(AdNotifications.BREAK_END, ControlsAdBreakEndCommand);
    this.createAPI = this.createView = function() {};
    return;
  } else {
    ControlsPlugin.__super__.initialize.call(this);
  }
};

/** @override
*/
ControlsPlugin.prototype.createController = function() {
  this.registerCommand(Notifications.PLAY, ControlsPlayCommand);
  this.registerCommand(Notifications.PAUSE, ControlsPauseCommand);
  this.registerCommand(Notifications.ACTIVE_STATE_CHANGE, ControlsActiveStateChangeCommand);
};

/** @override
*/
ControlsPlugin.prototype.createModel = function() {
  this.registerProxy(new ControlsProxy(this.config));
};

/** @override
*/
ControlsPlugin.prototype.createAPI = function() {
  return new ControlsAPI(this);
};

/** @override
*/
ControlsPlugin.prototype.createView = function() {
  this.registerMediator(new ControlsMediator());
};

/**
*/
ControlsPlugin.prototype.listNotificationInterests = function() {
  var key, value;
  return ((function() {
    var _results;
    _results = [];
    for (key in PanelNotifications) {
      value = PanelNotifications[key];
      _results.push(value);
    }
    return _results;
  })()).concat([Notifications.MEDIA_CHANGE, Notifications.TIME_UPDATE, Notifications.DURATION_CHANGE, Notifications.PROGRESS, Notifications.ENDED, Notifications.ADD_CUE_POINTS, Notifications.REMOVE_CUE_POINTS, Notifications.DISABLE_FULL_SCREEN, Notifications.ENABLE_FULL_SCREEN, Notifications.READY, Notifications.ADD_CONTROL, Notifications.REMOVE_CONTROL, Notifications.ADD_CONTROL_STATE, Notifications.REMOVE_CONTROL_STATE, Notifications.ACTIVE_STATE_CHANGE, Notifications.PLAY, Notifications.PAUSE, AdNotifications.BREAK_START, AdNotifications.BREAK_END, Notifications.CHANGE_MEDIA, Notifications.DISPLAY_TIME]);
};

/**
*/
ControlsPlugin.prototype.listNotificationPublications = function() {
  return ControlsPlugin.__super__.listNotificationPublications.call(this).concat([Notifications.CHANGE_ACTIVE_STATE, Notifications.TOGGLE_FULL_SCREEN, UserNotifications.TOGGLE_PLAY_PAUSE, UserNotifications.SEEK, Notifications.TOGGLE_ACTIVE]);
};


AMP.registerPlugin("controls", "html", ControlsPlugin);
AMP.registerPlugin("controls", "flash", ControlsWrapper);
AMP.registerPlugin("controls", "external", ControlsPlugin);

/**
 * @enum {string}
 * @const
 * @private
*/

var EventManagementNotifications = {
  EVENT_STATE_CHANGED: "eventStateChanged"
};

/**
 * Poller class
 *   
 * @constructor
 * @private
 * @extends {EventDispatcher}
 * @param {string} url
 * @param {number} interval
 * @param {string} type
 * @param {Object} headers
*/
function Poller(url, interval, type, headers) {
  this.url = url;
  this.interval = interval != null ? interval : 10000;
  this.type = type != null ? type : null;
  this.headers = headers != null ? headers : null;
  Poller.__super__.constructor.call(this);
}


__extends(Poller, EventDispatcher);


Poller.prototype.timeout = null;

Poller.prototype.interval = null;

Poller.prototype.url = null;

Poller.prototype.lastModified = null;

Poller.prototype.contentLenght = null;

Poller.prototype.data = null;

Poller.prototype.text = null;

Poller.prototype.type = null;

Poller.prototype.headers = null;

Poller.prototype.useHeadRequest = true;

Poller.prototype.xhr = null;

/**
*/
Poller.prototype.start = function() {
  if ((this.url != null) && this.url !== "") {
    this.poll();
  }
};

/**
*/
Poller.prototype.poll = function() {
  var xhr,
    _this = this;
  xhr = Utils.getXHR();
  if (!this.useHeadRequest) {
    this.updateData();
  } else {
    xhr.onload = function(event) {
      var contentLength, lastModified;
      if (xhr.status === 304) {
        _this.invoke();
        return;
      }
      lastModified = xhr.getResponseHeader("Last-Modified");
      contentLength = xhr.getResponseHeader("Content-Length");
      if ((!(lastModified != null) && !(contentLength != null)) || ((lastModified != null) && lastModified !== _this.lastModified) || ((contentLength != null) && contentLength !== _this.contentLength)) {
        _this.lastModified = lastModified;
        _this.contentLength = contentLength;
        _this.updateData();
      } else {
        _this.invoke();
      }
    };
    xhr.onerror = function(event) {
      _this.error(event);
    };
    xhr.open("HEAD", Utils.cacheBust(this.url), false);
    this.applyHeaders();
    if (this.lastModified != null) {
      xhr.setRequestHeader("If-Modified-Since", this.lastModified);
    }
    xhr.send();
  }
};

/**
*/
Poller.prototype.applyHeaders = function() {
  if (!(this.headers != null)) {
    return;
  }
  this.xhr.setRequestHeaders(this.headers);
};

/**
*/
Poller.prototype.updateData = function() {
  var xhr,
    _this = this;
  xhr = Utils.getXHR();
  xhr.open("GET", Utils.cacheBust(this.url), true);
  xhr.onload = function(event) {
    var text;
    text = xhr.responseText;
    _this.setText(text);
    _this.invoke();
  };
  xhr.onerror = function(event) {
    _this.error(event);
  };
  this.applyHeaders();
  return xhr.send();
};

/**
*/
Poller.prototype.setText = function(value) {
  var data;
  if (value !== this.text) {
    this.text = value;
    data = this.text;
    if (this.type === Utils.mimeTypes.json) {
      try {
        data = this.xhr.response;
      } catch (error) {
        data = this.text;
      }
    }
    this.setData(data);
  }
  return value;
};

/**
*/
Poller.prototype.setData = function(value) {
  if (value !== this.data) {
    this.data = value;
    this.dispatchEvent(new Event("datachanged", this.data));
  }
  return value;
};

/**
*/
Poller.prototype.error = function(error) {
  Logger.error(event);
  this.stop();
};

/**
*/
Poller.prototype.invoke = function() {
  var _this = this;
  this.stop();
  this.timeout = setTimeout(function() {
    _this.poll();
  }, this.interval);
};

/**
*/
Poller.prototype.stop = function() {
  clearTimeout(this.timeout);
};

function EventManagementWrapper() {
  return EventManagementWrapper.__super__.constructor.apply(this, arguments);
}


__extends(EventManagementWrapper, PluginWrapper);


EventManagementWrapper.NAME = "EventManagementWrapper";

/** @override
*/
EventManagementWrapper.prototype.createFlashVars = function(flashvars) {
  if (this.config.enabled != null) {
    flashvars.eventmanagementstates_enabled = this.config.enabled;
  }
  if (this.config.url != null) {
    flashvars.eventmanagementstates_status_url = this.config.url;
  }
  if (this.config.interval != null) {
    flashvars.eventmanagementstates_status_interval = this.config.interval;
  }
  return flashvars;
};

/** @override
*/
EventManagementWrapper.prototype.createXML = function(xml) {
  var application, eventmanagementstates, node, property, state, states, _i, _len, _ref;
  application = xml.getElementsByTagName("application")[0];
  eventmanagementstates = xml.getElementsByTagName("eventmanagementstates");
  if (!(eventmanagementstates != null) || eventmanagementstates.length === 0) {
    eventmanagementstates = xml.createElement("eventmanagementstates");
    application.appendChild(eventmanagementstates);
  } else {
    eventmanagementstates = eventmanagementstates[0];
  }
  states = xml.createElement("states");
  eventmanagementstates.appendChild(states);
  _ref = this.config.states;
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    state = _ref[_i];
    node = xml.createElement("state");
    states.appendChild(node);
    property = xml.createElement("property");
    property.setAttribute("key", "ID");
    property.appendChild(XMLUtils.createTextContent(xml, state.id));
    node.appendChild(property);
    property = xml.createElement("property");
    property.setAttribute("key", "POSTER_SRC");
    property.appendChild(XMLUtils.createTextContent(xml, state.poster));
    node.appendChild(property);
    if (state.url != null) {
      property = xml.createElement("property");
      property.setAttribute("key", "URL");
      property.appendChild(XMLUtils.createTextContent(xml, state.url));
      node.appendChild(property);
    }
  }
  return xml;
};

/**
 * The EventManagementMediator class.
 * 
 * @constructor
 * @private
 * @extends {OverlayMediator}
 * @param {Object} viewComponent
*/
function EventManagementMediator() {
  EventManagementMediator.__super__.constructor.call(this);
}


__extends(EventManagementMediator, OverlayMediator);


EventManagementMediator.prototype.componentName = "event-management";

EventManagementMediator.prototype.poster = null;

/**
 * @override
*/
EventManagementMediator.prototype.onRegister = function() {
  this.classList.add("hidden");
  this.poster = this.create("event-poster", false, "img");
  EventManagementMediator.__super__.onRegister.call(this);
};

/**
 * @override
*/
EventManagementMediator.prototype.listNotificationInterests = function() {
  return [EventManagementNotifications.EVENT_STATE_CHANGED];
};

/**
 * @override
*/
EventManagementMediator.prototype.handleNotification = function(notification) {
  var state;
  switch (notification.getName()) {
    case EventManagementNotifications.EVENT_STATE_CHANGED:
      state = notification.getBody();
      if (state.id !== "on") {
        if (state.poster != null) {
          this.poster.src = state.poster;
          this.viewComponent.appendChild(this.poster);
        }
        this.classList.remove("hidden");
        this.sendNotification(Notifications.PAUSE);
        this.sendNotification(Notifications.CHANGE_DISPLAY_STATE, DisplayState.NORMAL);
      } else {
        if (this.viewComponent.contains(this.poster)) {
          this.viewComponent.removeChild(this.poster);
        }
        this.classList.add("hidden");
      }
  }
};

/**
 * The EventManagementPlayCommand class.
 *   
 * @constructor
 * @private
 * @extends {puremvc.SimpleCommand}
*/
function EventManagementPlayCommand() {
  EventManagementPlayCommand.__super__.constructor.call(this);
}


__extends(EventManagementPlayCommand, puremvc.SimpleCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
EventManagementPlayCommand.prototype.execute = function(notification) {
  var eventManagementProxy, _ref;
  this.facade.logger.debug("EventManagementPlayCommand");
  eventManagementProxy = this.facade.retrieveProxy(EventManagementProxy.NAME);
  if (((_ref = eventManagementProxy.getState()) != null ? _ref.id : void 0) !== EventManagementProxy.ON.id) {
    this.sendNotification(Notifications.PAUSE);
  }
};

/** 
 * @constructor
 * @private
*/
function EventManagementProxy(config) {
  var _this = this;
  EventManagementProxy.__super__.constructor.call(this, config);
  this.poller = new Poller();
  this.poller.ondatachanged = function(event) {
    var id, state, _i, _len, _ref;
    id = event.data;
    if (id === "on") {
      state = EventManagementProxy.ON;
    } else {
      _ref = _this.data.states;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        state = _ref[_i];
        if (state.id === id) {
          break;
        }
      }
    }
    if (state != null) {
      return _this.setState(state);
    }
  };
}


__extends(EventManagementProxy, ModuleProxy);


EventManagementProxy.NAME = ModuleProxy.NAME;

EventManagementProxy.ON = {
  id: "on"
};

EventManagementProxy.prototype.defaults = {
  url: null,
  interval: null,
  states: null,
  enabled: false
};

EventManagementProxy.prototype.poller = null;

EventManagementProxy.prototype.state = null;

EventManagementProxy.prototype.initialize = function() {
  if (this.data.enabled === true) {
    this.setURL(this.data.url);
    this.setInterval(this.data.interval);
    this.poller.start();
  }
};

EventManagementProxy.prototype.setURL = function(value) {
  this.data.url = this.poller.url = value;
  return value;
};

EventManagementProxy.prototype.getURL = function() {
  return this.data.url;
};

/**
 *
*/
EventManagementProxy.prototype.getInterval = function() {
  return this.data.interval;
};

EventManagementProxy.prototype.setInterval = function(value) {
  this.data.interval = this.poller.interval = value * 1000;
  return value;
};

EventManagementProxy.prototype.setState = function(value) {
  this.state = value;
  this.sendNotification(EventManagementNotifications.EVENT_STATE_CHANGED, value);
  return value;
};

EventManagementProxy.prototype.getState = function() {
  return this.state;
};

/** 
 * @constructor 
 * @private
*/
function MediaAnalyticsProxy(config) {
  MediaAnalyticsProxy.__super__.constructor.call(this, config);
}


__extends(MediaAnalyticsProxy, PluginProxy);


/** @static
*/
MediaAnalyticsProxy.NAME = ModuleProxy.NAME;

MediaAnalyticsProxy.prototype.defaults = {
  config: null,
  dimensions: null,
  plugin: {
    js: "http://79423.analytics.edgesuite.net/html5/akamaihtml5-min.js"
  }
};

/** @override
*/
MediaAnalyticsProxy.prototype.getLoaded = function() {
  return window.setAkamaiMediaAnalyticsData != null;
};

/**
*/
MediaAnalyticsProxy.prototype.initialize = function() {
  try {
    window.akamaiSetVideoObject(this.facade.app.getVideo());
  } catch (error) {
    this.facade.logger.error("[AMP MEDIA ANALYTICS ERROR]", "Could not set video tag", error);
  }
};

/**
*/
MediaAnalyticsProxy.prototype.setDimensions = function(value) {
  var dimensions, key, val;
  dimensions = this.configurationData.source.dimensions;
  for (key in value) {
    val = value[key];
    if (val != null) {
      dimensions[key] = val;
    }
  }
  this.configurationData.parse(this.configurationData.source);
  this.applyDimensions(dimensions);
  return value;
};

/**
*/
MediaAnalyticsProxy.prototype.applyDimensions = function(dimensions) {
  var key, value;
  if (!(window.setAkamaiMediaAnalyticsData != null)) {
    return;
  }
  try {
    for (key in dimensions) {
      value = dimensions[key];
      setAkamaiMediaAnalyticsData(key, value);
    }
  } catch (error) {
    this.facade.logger.error("[AMP MEDIA ANALYTICS ERROR]", "Could not set dimensions:", error);
  }
};

/**
*/
MediaAnalyticsProxy.prototype.setMedia = function(media) {
  var dimensions, _ref;
  if (((_ref = media.mediaanalytics) != null ? _ref.dimensions : void 0) != null) {
    dimensions = Utils.override(this.value.dimensions, media.mediaanalytics.dimensions);
  } else {
    dimensions = this.value.dimensions;
  }
  this.applyDimensions(dimensions);
  return media;
};

/**
*/
MediaAnalyticsProxy.prototype.udpateMedia = function(media) {
  if (typeof akamaiHandleTitleSwitch === "function") {
    akamaiHandleTitleSwitch(media);
  }
  return media;
};

/** 
 * The PlayOverlayPlugin class.
 *   
 * @param {Module}  app     The parent module of this plugin.
 * @param {Object}  config  The plugin's configuration object.
 * @constructor
 * @private
 * @extends {Plugin}
*/
function PlayOverlayPlugin(app, config) {
  PlayOverlayPlugin.__super__.constructor.call(this, app, config);
}


__extends(PlayOverlayPlugin, Plugin);


PlayOverlayPlugin.NAME = "PlayOverlayPlugin";

PlayOverlayPlugin.prototype.moduleName = "playoverlay";

/** @override
*/
PlayOverlayPlugin.prototype.createModel = function() {};

/** @override
*/
PlayOverlayPlugin.prototype.createView = function() {
  this.registerMediator(new PlayOverlayMediator());
};

/** @override
*/
PlayOverlayPlugin.prototype.listNotificationPublications = function() {
  return PlayOverlayPlugin.__super__.listNotificationPublications.call(this).concat([UserNotifications.TOGGLE_PLAY_PAUSE]);
};


AMP.registerPlugin("playoverlay", "html", PlayOverlayPlugin);
AMP.registerPlugin("playoverlay", "external", PlayOverlayPlugin);

function MediaAnalyticsWrapper(player, config) {
  MediaAnalyticsWrapper.__super__.constructor.call(this, player, config);
}


__extends(MediaAnalyticsWrapper, PluginWrapper);


MediaAnalyticsWrapper.NAME = "MediaAnalyticsWrapper";

/** @override
*/
MediaAnalyticsWrapper.prototype.listNotificationInterests = function() {
  return MediaAnalyticsWrapper.__super__.listNotificationInterests.call(this).concat([Notifications.MEDIA_CHANGE, MediaAnalyticsNotifications.SET_DIMENSIONS]);
};

MediaAnalyticsWrapper.prototype.createFlashVars = function(flashvars) {
  var dimensions, key, value, _ref, _ref1;
  dimensions = (_ref = this.player.config) != null ? (_ref1 = _ref.media) != null ? _ref1.mediaanalytics : void 0 : void 0;
  if (dimensions != null) {
    for (key in dimensions) {
      value = dimensions[key];
      flashvars["report_" + key] = value;
    }
  }
  return flashvars;
};

MediaAnalyticsWrapper.prototype.createXML = function(xml) {
  var application, dimensions, element, key, metrics, path, value, vendor, _ref, _ref1;
  application = xml.getElementsByTagName("application")[0];
  metrics = xml.getElementsByTagName("metrics")[0];
  if (!(metrics != null)) {
    metrics = xml.createElement("metrics");
    application.appendChild(metrics);
  }
  vendor = xml.createElement("vendor");
  vendor.setAttribute("id", "akamai");
  metrics.appendChild(vendor);
  if (this.config.config != null) {
    element = xml.createElement("property");
    element.setAttribute("key", "MEDIA_ANALYTICS_BEACON");
    element.appendChild(XMLUtils.createTextContent(xml, this.config.config));
    vendor.appendChild(element);
    path = ((_ref = this.config.plugin) != null ? _ref.swf : void 0) || "http://79423.analytics.edgesuite.net/csma/plugin/csma.swf";
    element = xml.createElement("property");
    element.setAttribute("key", "MEDIA_ANALYTICS_PLUGIN_PATH");
    element.appendChild(XMLUtils.createTextContent(xml, path));
    vendor.appendChild(element);
  }
  if (this.config.dimensions != null) {
    dimensions = xml.createElement("property");
    dimensions.setAttribute("key", "dimensions");
    vendor.appendChild(dimensions);
    _ref1 = this.config.dimensions;
    for (key in _ref1) {
      value = _ref1[key];
      element = xml.createElement("property");
      element.setAttribute("key", key);
      element.appendChild(XMLUtils.createTextContent(xml, value));
      dimensions.appendChild(element);
    }
  }
  return xml;
};

MediaAnalyticsWrapper.prototype.handleNotification = function(notification) {
  var body, key, media, name, value, _ref, _ref1;
  MediaAnalyticsWrapper.__super__.handleNotification.call(this, notification);
  name = notification.getName();
  body = notification.getBody();
  switch (name) {
    case Notifications.MEDIA_CHANGE:
      media = body;
      if (((_ref = media.mediaanalytics) != null ? _ref.dimensions : void 0) != null) {
        media.dimensions = [];
        _ref1 = media.mediaanalytics.dimensions;
        for (key in _ref1) {
          value = _ref1[key];
          media.dimensions.push({
            key: key,
            value: value
          });
        }
      }
      break;
    case MediaAnalyticsNotifications.SET_DIMENSIONS:
      this.setDimensions(body);
  }
};

/**
*/
MediaAnalyticsWrapper.prototype.setDimensions = function(value) {
  this.player.video.setPlayerProperty("maDimensions", value);
  return value;
};

/**
 * @constructor
 * @private
 * @extends {puremvc.SimpleCommand}
*/
function PluginCommand() {
  PluginCommand.__super__.constructor.call(this);
}


__extends(PluginCommand, puremvc.SimpleCommand);


PluginCommand.prototype.config = null;

PluginCommand.prototype.plugin = null;

/** @override
*/
PluginCommand.prototype.initializeNotifier = function(key) {
  PluginCommand.__super__.initializeNotifier.call(this, key);
  return this.config = this.plugin = this.facade.retrieveProxy(ModuleProxy.NAME);
};

/**
 * The MediaAnalyticsAdBreakStartCommand class.
 *   
 * @constructor
 * @private
 * @extends {puremvc.SimpleCommand}
*/
function MediaAnalyticsAdBreakStartCommand() {
  MediaAnalyticsAdBreakStartCommand.__super__.constructor.call(this);
}


__extends(MediaAnalyticsAdBreakStartCommand, puremvc.SimpleCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
MediaAnalyticsAdBreakStartCommand.prototype.execute = function(notification) {
  this.facade.logger.debug("MediaAnalyticsAdBreakStartCommand");
  this.facade.app.getVideo().dataset.isad = true;
};

/**
 * The MediaAnalyticsAdBreakEndCommand class.
 *   
 * @constructor
 * @private
 * @extends {puremvc.SimpleCommand}
*/
function MediaAnalyticsAdBreakEndCommand() {
  MediaAnalyticsAdBreakEndCommand.__super__.constructor.call(this);
}


__extends(MediaAnalyticsAdBreakEndCommand, puremvc.SimpleCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
MediaAnalyticsAdBreakEndCommand.prototype.execute = function(notification) {
  this.facade.logger.debug("MediaAnalyticsAdBreakEndCommand");
  this.facade.app.getVideo().dataset.isad = false;
};

/**
 * The MediaAnalyticsAdLoadedCommand class.
 *   
 * @constructor
 * @private
 * @extends {puremvc.SimpleCommand}
*/
function MediaAnalyticsAdLoadedCommand() {
  MediaAnalyticsAdLoadedCommand.__super__.constructor.call(this);
}


__extends(MediaAnalyticsAdLoadedCommand, puremvc.SimpleCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
MediaAnalyticsAdLoadedCommand.prototype.execute = function(notification) {
  var adObject, adVO;
  this.facade.logger.debug("MediaAnalyticsAdLoadedCommand");
  try {
    adVO = notification.getBody();
    adObject = {
      adDuration: adVO.duration,
      adPartnerId: adVO.partner,
      adTitle: adVO.title,
      adId: adVO.id
    };
    if (typeof akamaiHandleAdLoaded === "function") {
      akamaiHandleAdLoaded(adObject);
    }
  } catch (error) {
    this.facade.logger.error("[AMP MEDIA ANALYTICS ERROR]", error);
  }
};

/**
 * The MediaAnalyticsAdStartCommand class.
 *   
 * @constructor
 * @private
 * @extends {puremvc.SimpleCommand}
*/
function MediaAnalyticsAdStartCommand() {
  MediaAnalyticsAdStartCommand.__super__.constructor.call(this);
}


__extends(MediaAnalyticsAdStartCommand, PluginCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
MediaAnalyticsAdStartCommand.prototype.execute = function(notification) {
  this.facade.logger.debug("MediaAnalyticsAdStartCommand");
  try {
    if (typeof akamaiHandleAdStarted === "function") {
      akamaiHandleAdStarted();
    }
  } catch (error) {
    this.facade.logger.error("[AMP MEDIA ANALYTICS ERROR]", error);
  }
};

/**
 * The MediaAnalyticsTimeUpdateCommand class.
 *   
 * @constructor
 * @private
 * @extends {puremvc.SimpleCommand}
*/
function MediaAnalyticsAdTimeUpdateCommand() {
  MediaAnalyticsAdTimeUpdateCommand.__super__.constructor.call(this);
}


__extends(MediaAnalyticsAdTimeUpdateCommand, PluginCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
MediaAnalyticsAdTimeUpdateCommand.prototype.execute = function(notification) {
  var core, percent;
  core = notification.getBody();
  percent = Math.round(core.currentTime / core.duration * 100);
  try {
    if (percent >= 25 && proxy.percent < 25) {
      this.facade.logger.debug("MediaAnalytics: First Quartile");
      if (typeof akamaiHandleAdFirstQuartile === "function") {
        akamaiHandleAdFirstQuartile();
      }
    } else if (percent >= 50 && proxy.percent < 50) {
      this.facade.logger.debug("MediaAnalytics: Second Quartile");
      if (typeof akamaiHandleAdMidpoint === "function") {
        akamaiHandleAdMidpoint();
      }
    } else if (percent >= 75 && proxy.percent < 75) {
      this.facade.logger.debug("MediaAnalytics: Third Quartile");
      if (typeof akamaiHandleAdThirdQuartile === "function") {
        akamaiHandleAdThirdQuartile();
      }
    }
  } catch (error) {
    this.facade.logger.error("[AMP MEDIA ANALYTICS ERROR]", error);
  }
  this.config.percent = percent;
};

/**
 * The MediaAnalyticsAdEndCommand class.
 *   
 * @constructor
 * @private
 * @extends {puremvc.SimpleCommand}
*/
function MediaAnalyticsAdEndCommand() {
  MediaAnalyticsAdEndCommand.__super__.constructor.call(this);
}


__extends(MediaAnalyticsAdEndCommand, puremvc.SimpleCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
MediaAnalyticsAdEndCommand.prototype.execute = function(notification) {
  this.facade.logger.debug("MediaAnalyticsAdEndCommand");
  try {
    if (typeof akamaiHandleAdCompleted === "function") {
      akamaiHandleAdCompleted();
    }
  } catch (error) {
    this.facade.logger.error("[AMP MEDIA ANALYTICS ERROR]", error);
  }
  this.facade.app.getVideo().dataset.isad = true;
};

/**
 * The MediaAnalyticsSetDimensionsCommand class.
 *   
 * @constructor
 * @private
 * @extends {puremvc.SimpleCommand}
*/
function MediaAnalyticsSetDimensionsCommand() {
  MediaAnalyticsSetDimensionsCommand.__super__.constructor.call(this);
}


__extends(MediaAnalyticsSetDimensionsCommand, PluginCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
MediaAnalyticsSetDimensionsCommand.prototype.execute = function(notification) {
  var dimensions;
  this.facade.logger.debug("MediaAnalyticsSetDimensionsCommand");
  dimensions = notification.getBody();
  this.config.setDimensions(dimensions);
};

/**
 * The MediaAnalyticsContentChangedCommand class.
 *   
 * @constructor
 * @private
 * @extends {puremvc.SimpleCommand}
*/
function MediaAnalyticsContentChangedCommand() {
  MediaAnalyticsContentChangedCommand.__super__.constructor.call(this);
}


__extends(MediaAnalyticsContentChangedCommand, PluginCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
MediaAnalyticsContentChangedCommand.prototype.execute = function(notification) {
  this.facade.logger.debug("MediaAnalyticsContentChangedCommand");
  this.config.updatedMedia(notification.getBody());
};

/**
 * The MediaAnalyticsChangeMediaCommand class.
 *   
 * @constructor
 * @private
 * @extends {puremvc.SimpleCommand}
*/
function MediaAnalyticsChangeMediaCommand() {
  MediaAnalyticsChangeMediaCommand.__super__.constructor.call(this);
}


__extends(MediaAnalyticsChangeMediaCommand, PluginCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
MediaAnalyticsChangeMediaCommand.prototype.execute = function(notification) {
  var media;
  this.facade.logger.debug("MediaAnalyticsChangeMediaCommand");
  media = notification.getBody();
  this.config.setMedia(media);
};

/**
 * The CaptionCue class.
 *   
 * @constructor
 * @private
 * @param {number} startTime  The start time of the cue in seconds
 * @param {number} endTime    The end time of the cue in seconds
 * @param {number} text       The text of the cue
*/
function CaptionCue(startTime, endTime, id) {
  this.startTime = startTime;
  this.endTime = endTime;
  this.id = id;
}

CaptionCue.prototype.id = null;

CaptionCue.prototype.startTime = null;

CaptionCue.prototype.endTime = null;

CaptionCue.prototype.text = null;

CaptionCue.prototype.html = null;

CaptionCue.prototype.align = null;

/**
 * The MediaAnalyticsAPI class.
 * 
 * @param         {!MediaAnalyticsPlugin} module  The base module this API wraps.
 * @constructor
 * @extends {PluginAPI}
*/
function MediaAnalyticsAPI(module) {
  MediaAnalyticsAPI.__super__.constructor.call(this, module);
  this.setDimensions = function(value) {
    module.retrieveProxy(MediaAnalyticsProxy.NAME).setDimensions(value);
    return value;
  };
}


__extends(MediaAnalyticsAPI, PluginAPI);


/**
 * Sets the media analytics dimensions.
 * 
 * @param {Object} value The hash representing dimensions.
 * @expose
*/
MediaAnalyticsAPI.prototype.setDimensions = function(value) {};

function SRTParser() {}

/**
 * Parses a SRT (subrip) file into CaptionCue objects and attaches them to a given track.
 * 
 * @param   {CaptionTrack}  track The caption track to populate
 * @param   {String}        txt   The text of the srt file
 * @return  {CaptionTrack}        The populated caption track
*/
SRTParser.prototype.parse = function(track, txt) {
  var caption, captions, cue, end, index, parts, start, text, times, _i, _len;
  txt = txt.replace(/\r/g, '');
  captions = txt.split("\n\n");
  for (_i = 0, _len = captions.length; _i < _len; _i++) {
    caption = captions[_i];
    parts = caption.split("\n");
    try {
      index = parts[0];
      times = parts[1].match(/([0-9:\,]+)\s*-->\s*([0-9:\,]+)/).slice(1);
      start = Utils.flattenTimecode(times[0]);
      end = Utils.flattenTimecode(times[1]);
      text = parts.slice(2);
    } catch (err) {
      Logger.warn("SRT Parsing Warning");
    }
    cue = new CaptionCue(start, end, "cue_" + index);
    cue.html = "<p>" + text.join("<br />") + "</p>";
    cue.text = text.join("\n");
    track.cues.push(cue);
  }
  return track;
};

function SMPTETTParser() {}

/**
 * Parses a SMPTETT file into CaptionCue objects and attaches them to a given track.
 * 
 * @param   {CaptionTrack}  track The caption track to populate
 * @param   {XMLDocument}   xml   The SMPTETT xml document
 * @return  {CaptionTrack}        The populated caption track
*/
SMPTETTParser.prototype.parse = function(track, xml) {
  var captions, lang, styledElements, styles, tt,
    _this = this;
  styles = Array.prototype.slice.call(xml.querySelectorAll("styling style"));
  styles.forEach(function(item, index, list) {
    var attributes, id, style;
    style = "";
    id = item.getAttribute("id") || item.getAttribute("xml:id");
    attributes = Array.prototype.slice.call(item.attributes);
    attributes.forEach(function(item, index, array) {
      if (item.prefix === "tts") {
        return style += Utils.formatStyleName(item.localName) + ":" + item.nodeValue + ";";
      }
    });
    track.styles[id] = style;
  });
  styledElements = Array.prototype.slice.call(xml.querySelectorAll("body [style]"));
  styledElements.forEach(function(item, index, array) {
    var id;
    id = item.getAttribute("style");
    item.setAttribute("style", track.styles[id]);
  });
  tt = xml.querySelector("tt");
  lang = tt.getAttribute("lang") || tt.getAttribute("xml:lang");
  if (track.language === void 0 || track.language === null) {
    track.language = lang;
  }
  captions = Array.prototype.slice.call(xml.querySelectorAll("body p[begin]"));
  captions.forEach(function(item, index, array) {
    var align, cue, end, start, text;
    start = item.getAttribute("begin");
    item.removeAttribute("begin");
    if (item.getAttribute("end") != null) {
      end = item.getAttribute("end");
      item.removeAttribute("end");
    } else if (captions[index + 1] != null) {
      end = captions[index + 1].getAttribute("begin");
    }
    cue = new CaptionCue(Utils.flattenTimecode(start), Utils.flattenTimecode(end), "cue_" + index);
    align = item.getAttributeNS("http://www.w3.org/ns/ttml#styling", "textAlign");
    if (align != null) {
      cue.align = align === "center" ? "middle" : align;
      item.removeAttributeNS("http://www.w3.org/ns/ttml#styling", "textAlign");
    }
    text = XMLUtils.serialize(item);
    text = text.replace(/\s*xmlns="[^"]*"/, "");
    cue.html = text;
    text = text.replace(/^<p[^>]*>/, "");
    text = text.replace(/<\/p>$/, "");
    text = text.replace(/<br\/>/, "\n");
    text = text.replace(/<span style="([^"]*)"/, "<c.$1");
    text = text.replace(/<\/span>/, "</c>");
    cue.text = text;
    track.cues.push(cue);
  });
  return track;
};

/** 
 * The EventManagementPlugin class.
 *   
 * @param {Module}  app     The parent module of this plugin.
 * @param {Object}  config  The plugin's configuration object.
 * @constructor
 * @extends {Plugin}
 * @private
*/
function EventManagementPlugin(app, config) {
  EventManagementPlugin.__super__.constructor.call(this, app, config);
}


__extends(EventManagementPlugin, Plugin);


EventManagementPlugin.NAME = "EventManagementPlugin";

EventManagementPlugin.prototype.moduleName = "eventmanagement";

/** @override
*/
EventManagementPlugin.prototype.createModel = function() {
  this.registerProxy(new EventManagementProxy(this.config));
};

/** @override
*/
EventManagementPlugin.prototype.createController = function() {
  this.registerCommand(Notifications.PLAY, EventManagementPlayCommand);
};

EventManagementPlugin.prototype.createView = function() {
  this.registerMediator(new EventManagementMediator());
};

/** @override
*/
EventManagementPlugin.prototype.listNotificationInterests = function() {
  return [Notifications.PLAY];
};

/** @override
*/
EventManagementPlugin.prototype.listNotificationPublications = function() {
  return EventManagementPlugin.__super__.listNotificationPublications.call(this).concat([Notifications.CHANGE_DISPLAY_STATE, Notifications.PAUSE, EventManagementNotifications.EVENT_STATE_CHANGED]);
};

/** @override
*/
EventManagementPlugin.prototype.listNotificationEvents = function() {
  return [EventManagementNotifications.EVENT_STATE_CHANGED];
};


AMP.registerPlugin("eventmanagement", "html", EventManagementPlugin);
AMP.registerPlugin("eventmanagement", "flash", EventManagementWrapper);

/** 
 * The CaptioningWrapper class.
 *   
 * @constructor
 * @private
 * @extends {PluginWrapper}
 * @param {FlashPlayer}     player  The FlashPlayer
 * @param {Object}          config  The plugin config
*/
function CaptioningWrapper(player, config) {
  CaptioningWrapper.__super__.constructor.call(this, player, config);
}


__extends(CaptioningWrapper, PluginWrapper);


CaptioningWrapper.NAME = "CaptioningWrapper";

CaptioningWrapper.prototype.hidden = true;

/** @override
*/
CaptioningWrapper.prototype.createXML = function(xml) {
  var application, player, subply, _ref;
  subply = (_ref = this.config.flash) != null ? _ref.subply : void 0;
  if (subply != null) {
    try {
      if (subply.timeMethod != null) {
        player = xml.getElementsByTagName("player")[0];
        player.setAttribute("subply_time_method", subply.timeMethod);
      }
      if (subply.plugin != null) {
        application = xml.getElementsByTagName("application")[0];
        subply = xml.getElementsByTagName("subply")[0];
        if (!(subply != null)) {
          subply = xml.createElement("subply");
          application.appendChild(subply);
        }
        this.createProperty(xml, "SUBPLY_URL", this.config.flash.subply.plugin, subply);
      }
    } catch (error) {
      this.facade.logger.error("AMP Captioning Error", error);
    }
  }
};

/** @override
*/
CaptioningWrapper.prototype.createFlashVars = function(flashvars) {
  var captionLangArr, captionUrlArr, config, track, _i, _len, _ref, _ref1;
  config = this.player.config;
  if (((_ref = config.media) != null ? _ref.track : void 0) != null) {
    track = Utils.selectTrack(config.media.track, "captions");
    if ((track.src != null) && track.src !== "") {
      flashvars.caption_url = track.src;
    }
    if (config.media.track.length > 1) {
      captionUrlArr = [];
      captionLangArr = [];
      _ref1 = config.media.track;
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
        track = _ref1[_i];
        captionUrlArr.push(track.src);
        captionLangArr.push(track.srclang);
      }
      flashvars.caption_url = captionUrlArr.join(",");
      flashvars.caption_language = captionLangArr.join(",");
    }
    flashvars.caption_type = track.type != null ? encodeURIComponent(track.type) : "application/ttml+xml";
  }
};

/** @override
*/
CaptioningWrapper.prototype.listNotificationInterests = function() {
  return CaptioningWrapper.__super__.listNotificationInterests.apply(this, arguments).concat([Notifications.MEDIA_CHANGE, FlashNotifications.CAPTIONING_REQUEST, FlashNotifications.CAPTION_LANG_CHANGE]);
};

/**
*/
CaptioningWrapper.prototype.handleNotification = function(notification) {
  var body, media, name, track, type;
  CaptioningWrapper.__super__.handleNotification.call(this, notification);
  name = notification.getName();
  body = notification.getBody();
  switch (name) {
    case FlashNotifications.CAPTION_LANG_CHANGE:
      type = "";
      break;
    case FlashNotifications.CAPTIONING_REQUEST:
      type = "visibilitychange";
      body = body.enabled;
      this.hidden = !body;
      break;
    case Notifications.MEDIA_CHANGE:
      media = body;
      if (media.track != null) {
        track = Utils.selectTrack(media.track, "captions");
        if (((track != null ? track.src : void 0) != null) && track.src !== "") {
          media.captioningUrl = track.src;
        }
        media.captioningType = track.type || "application/ttml+xml";
      }
  }
  if ((type != null) && type !== "") {
    this.dispatchEvent(new Event(type, body));
  }
};

/**
*/
CaptioningWrapper.prototype.getHidden = function() {
  return this.hidden;
};

CaptioningWrapper.prototype.setHidden = function(value) {
  this.hidden = value;
  this.facade.getVideo().setPlayerProperty("captionDisplay", {
    visible: !value
  });
  return value;
};


AMP.registerPlugin("captioning", "flash", CaptioningWrapper);

/** 
 * PluginMediator class.
 *   
 * @constructor
 * @private
 * @extends {OverlayMediator}
*/
function PluginMediator() {
  PluginMediator.__super__.constructor.call(this);
}


__extends(PluginMediator, OverlayMediator);


/** @override
*/
PluginMediator.prototype.initializeNotifier = function(key) {
  PluginMediator.__super__.initializeNotifier.call(this, key);
  this.plugin = this.facade.retrieveProxy(ModuleProxy.NAME);
  this.media = this.facade.app.retrieveProxy(MediaProxy.NAME);
};

/** @override
*/
PluginMediator.prototype.onRegister = function() {
  PluginMediator.__super__.onRegister.call(this);
  this.facade.viewComponent = this.viewComponent;
};

/**
 * The CaptioningHTMLMediator class.
 * 
 * @constructor
 * @private
 * @extends {LocalizedMediator}
 * @param {Object} viewComponent
*/
function CaptioningHTMLMediator(viewComponent) {
  CaptioningHTMLMediator.__super__.constructor.call(this, null, null, viewComponent, null);
}


__extends(CaptioningHTMLMediator, ComponentMediator);


CaptioningHTMLMediator.prototype.componentName = "captioning-settings";

CaptioningHTMLMediator.prototype.captioningObject = {
  "default": {
    fontFamily: "Arial,sans-serif",
    size: "1.3em",
    fontColor: "rgba(255,255,255,1)",
    edgeType: null,
    edgeColor: "rgba(0, 0, 0, 0)",
    backgroundColor: "rgba(0,0,0,0)",
    windowColor: "rgba(0,0,0,0.5)"
  },
  appliedStyleText: "",
  selected: {
    fontFamily: null,
    size: null,
    fontColor: null,
    edgeType: null,
    edgeColor: null,
    backgroundColor: null,
    windowColor: null
  },
  preset1: {
    fontFamily: "Arial,sans-serif",
    size: "1.3em",
    fontColor: "rgba(255,255,255,1)",
    edgeType: null,
    edgeColor: "rgba(0, 0, 0, 0)",
    backgroundColor: "rgba(0,0,0,0)",
    windowColor: "rgba(0,0,0,0)"
  },
  preset2: {
    fontFamily: "Arial,sans-serif",
    size: "1.3em",
    fontColor: "rgba(255,255,0,1)",
    edgeType: null,
    edgeColor: "rgba(0, 0, 0, 0)",
    backgroundColor: "rgba(0,0,0,0)",
    windowColor: "rgba(0,0,0,0)"
  },
  preset3: {
    fontFamily: "Arial,sans-serif",
    size: "1.3em",
    fontColor: "rgba(255,255,255,1)",
    edgeType: null,
    edgeColor: "rgba(0, 0, 0, 0)",
    backgroundColor: "rgba(0,0,0,1)",
    windowColor: "rgba(0,0,0,0)"
  },
  preset4: {
    fontFamily: "Arial,sans-serif",
    size: "1.3em",
    fontColor: "rgba(255,255,0,1)",
    edgeType: null,
    edgeColor: "rgba(0, 0, 0, 1)",
    backgroundColor: "rgba(0,0,0,0)",
    windowColor: "rgba(0,0,0,0.5)"
  },
  instance: null
};

CaptioningHTMLMediator.prototype.captionText = null;

CaptioningHTMLMediator.prototype.settingsUiVisible = false;

CaptioningHTMLMediator.prototype.captionningStyle = null;

CaptioningHTMLMediator.prototype.swatchColorCurr = null;

CaptioningHTMLMediator.prototype.swatchOpacityCurr = null;

CaptioningHTMLMediator.prototype.colorPicker = null;

CaptioningHTMLMediator.prototype.colorPickerOpacity = null;

CaptioningHTMLMediator.prototype.advancedSettingContainer = null;

CaptioningHTMLMediator.prototype.list = {
  font: null,
  language: null,
  edge: null,
  size: null,
  scroll: null
};

CaptioningHTMLMediator.prototype.picker = {
  color: null,
  background: null,
  edge: null,
  window: null
};

CaptioningHTMLMediator.prototype.toggle = {
  ON: null,
  OFF: null,
  disabled: false
};

/**
 * @override
*/
CaptioningHTMLMediator.prototype.onRegister = function() {
  var applyButton, cancelButton, captionContainer, captionLabel, clonedSwatch, color, colorArray, isDefault, listOptions, preset1, preset2, preset3, preset4, previewContainer, previewPara, resetButton, swatch, titleBar, titleText, toggleAdvancedButton, _i, _len,
    _this = this;
  this.captionText = this.create("caption-text", this.viewComponent.parentElement);
  titleBar = this.create("captioning-titlebar");
  titleText = this.create("captioning-title", titleBar, "span", this.localizationManager.getString(LocalizationConstants.MSG_CC_TITLE));
  this.toggle.ON = this.create("captioning-toggle-btn", titleBar, "button", "ON");
  this.toggle.OFF = this.create("captioning-toggle-btn", titleBar, "button", "OFF");
  EventHandler.create(this.toggle.ON, EventHandler.CLICK, function(event) {
    event.stopImmediatePropagation();
    if (!_this.toggle.disabled) {
      _this.toggleButtonHandler(true);
    }
    return false;
  });
  if (!this.toggle.disabled) {
    this.classList.add("captioning-floater-btnselected", this.toggle.OFF);
  }
  EventHandler.create(this.toggle.OFF, EventHandler.CLICK, function(event) {
    event.stopImmediatePropagation();
    if (!_this.toggle.disabled) {
      _this.toggleButtonHandler(false);
    }
    return false;
  });
  captionContainer = this.create("captioning-row");
  captionLabel = this.create("captioning-label", captionContainer, "span", this.localizationManager.getString(LocalizationConstants.MSG_CC_LANGUAGE));
  this.list.language = this.create("captioning-dropdown", captionContainer, "select");
  this.languageListPopulate();
  EventHandler.create(this.list.language, "change", function(event) {
    var langIsSelected;
    event.stopImmediatePropagation();
    langIsSelected = event.target.selectedValue !== "None";
    _this.sendNotification(CaptioningNotifications.VISIBILITY_CHANGE, langIsSelected);
    if (langIsSelected) {
      _this.facade.moduleAPI.setTrack(_this.facade.moduleAPI.selectTrackByIndex(event.target.selectedIndex));
    }
    return false;
  });
  captionLabel = this.create("captioning-label", captionContainer, "span", this.localizationManager.getString(LocalizationConstants.MSG_CC_PRESETS));
  preset1 = this.create(["captioning-preset", "captioning-preset1"], captionContainer, null, "Aa");
  preset2 = this.create(["captioning-preset", "captioning-preset2"], captionContainer, null, "Aa");
  preset3 = this.create(["captioning-preset", "captioning-preset3"], captionContainer, null, "Aa");
  preset4 = this.create(["captioning-preset", "captioning-preset4"], captionContainer, null, "Aa");
  EventHandler.create(preset1, EventHandler.CLICK, function(event) {
    event.stopImmediatePropagation();
    _this.captioningObject.selected = _this.cloneObject(_this.captioningObject.preset1);
    _this.applyCaptioningStyle();
    return false;
  });
  EventHandler.create(preset2, EventHandler.CLICK, function(event) {
    event.stopImmediatePropagation();
    _this.captioningObject.selected = _this.cloneObject(_this.captioningObject.preset2);
    _this.applyCaptioningStyle();
    return false;
  });
  EventHandler.create(preset3, EventHandler.CLICK, function(event) {
    event.stopImmediatePropagation();
    _this.captioningObject.selected = _this.cloneObject(_this.captioningObject.preset3);
    _this.applyCaptioningStyle();
    return false;
  });
  EventHandler.create(preset4, EventHandler.CLICK, function(event) {
    event.stopImmediatePropagation();
    _this.captioningObject.selected = _this.cloneObject(_this.captioningObject.preset4);
    _this.applyCaptioningStyle();
    return false;
  });
  this.advancedSettingContainer = this.create("captioning-advanced-container");
  captionContainer = this.create("captioning-row", this.advancedSettingContainer);
  captionLabel = this.create("captioning-label", captionContainer, "span", this.localizationManager.getString(LocalizationConstants.MSG_CC_FONT));
  this.list.font = this.create("captioning-dropdown", captionContainer, "select");
  listOptions = this.create(null, this.list.font, "option", "Arial");
  listOptions.value = "Arial,sans-serif";
  this.create(null, this.list.font, "option", "Times New Roman");
  this.create(null, this.list.font, "option", "Courier");
  this.create(null, this.list.font, "option", "Georgia");
  this.create(null, this.list.font, "option", "Helvetica");
  this.create(null, this.list.font, "option", "Verdana");
  this.create(null, this.list.font, "option", "Impact");
  this.create(null, this.list.font, "option", "Comic Sans Serif");
  this.create(null, this.list.font, "option", "Times New Roman");
  EventHandler.create(this.list.font, "change", function(event) {
    event.stopImmediatePropagation();
    _this.captioningObject.selected.fontFamily = event.target.value;
    _this.applyCaptioningStyle(false);
    return false;
  });
  captionContainer.appendChild(this.list.font);
  captionLabel = this.create("captioning-label", captionContainer, "span", this.localizationManager.getString(LocalizationConstants.MSG_CC_EDGE));
  this.list.edge = this.create("captioning-dropdown", captionContainer, "select");
  this.create(null, this.list.edge, "option", "none").value = "none";
  this.create(null, this.list.edge, "option", "Right drop shadow").value = "text-shadow: 3px 3px 2px";
  this.create(null, this.list.edge, "option", "Left drop shadow").value = "text-shadow: -3px 3px 2px";
  this.create(null, this.list.edge, "option", "Uniform").value = "text-shadow: 0px 0px 4px";
  this.create(null, this.list.edge, "option", "Raised").value = "text-shadow: 0px 1px 1px";
  this.create(null, this.list.edge, "option", "Depressed").value = "text-shadow: 0px 1px 0px";
  EventHandler.create(this.list.edge, "change", function(event) {
    event.stopImmediatePropagation();
    _this.captioningObject.selected.edgeType = event.target.value;
    _this.applyCaptioningStyle(false);
    return false;
  });
  captionContainer = this.create("captioning-row", this.advancedSettingContainer);
  this.create("captioning-label", captionContainer, "span", this.localizationManager.getString(LocalizationConstants.MSG_CC_SIZE));
  this.list.size = this.create("captioning-dropdown", captionContainer, "select");
  this.create(null, this.list.size, "option", "Small").value = ".8em";
  this.create(null, this.list.size, "option", "Medium").value = "1.3em";
  this.create(null, this.list.size, "option", "Large").value = "2.3em";
  this.list.size.selectedIndex = 1;
  EventHandler.create(this.list.size, "change", function(event) {
    event.stopImmediatePropagation();
    _this.captioningObject.selected.size = event.target.value;
    _this.applyCaptioningStyle(false);
    return false;
  });
  this.create("captioning-label", captionContainer, "span", this.localizationManager.getString(LocalizationConstants.MSG_CC_SCROLL));
  this.list.scroll = this.create("captioning-dropdown", captionContainer, "select");
  this.create(null, this.list.scroll, "option", "Roll up");
  this.create(null, this.list.scroll, "option", "Roll down");
  EventHandler.create(this.list.scroll, "change", function(event) {
    event.stopImmediatePropagation();
    return false;
  });
  captionContainer = this.create("captioning-row", this.advancedSettingContainer);
  this.create("captioning-label-small", captionContainer, "span", this.localizationManager.getString(LocalizationConstants.MSG_CC_COLOR));
  this.picker.color = this.create("captioning-color-picker", captionContainer);
  this.picker.color.style.backgroundColor = this.captioningObject["default"].fontColor;
  EventHandler.create(this.picker.color, EventHandler.CLICK, function(event) {
    var alpha, _ref;
    event.stopImmediatePropagation();
    _this.colorPicker.style.display = _this.colorPicker.style.display === "block" ? "none" : "block";
    if (_this.colorPicker.style.display === "block") {
      if ((_ref = _this.swatchColorCurr) != null) {
        _ref.style.borderColor = "rgba(0,0,0,0.3)";
      }
      _this.colorPicker.style.left = "152px";
      _this.colorPicker.name = "fontColor";
      _this.captioningObject.instance = _this.picker.color;
      if (_this.picker.color.style.backgroundColor.indexOf('rgba') !== -1) {
        alpha = _this.picker.color.style.backgroundColor.replace(/^rgba?\(|\s+|\)$/g, '').split(',')[3];
      }
      _this.colorPickerOpacity.value = alpha != null ? alpha : 1;
    }
    return false;
  });
  this.create("captioning-label-small", captionContainer, "span", this.localizationManager.getString(LocalizationConstants.MSG_CC_BACKGROUND));
  this.picker.background = this.create("captioning-color-picker", captionContainer);
  this.picker.background.style.backgroundColor = this.captioningObject["default"].backgroundColor;
  EventHandler.create(this.picker.background, EventHandler.CLICK, function(event) {
    var alpha, _ref;
    event.stopImmediatePropagation();
    _this.colorPicker.style.display = _this.colorPicker.style.display === "block" ? "none" : "block";
    if (_this.colorPicker.style.display === "block") {
      if ((_ref = _this.swatchColorCurr) != null) {
        _ref.style.borderColor = "rgba(0,0,0,0.3)";
      }
      _this.colorPicker.style.left = "264px";
      _this.colorPicker.name = "backgroundColor";
      _this.captioningObject.instance = _this.picker.background;
      if (_this.picker.background.style.backgroundColor.indexOf('rgba') !== -1) {
        alpha = _this.picker.background.style.backgroundColor.replace(/^rgba?\(|\s+|\)$/g, '').split(',')[3];
      }
      _this.colorPickerOpacity.value = alpha != null ? alpha : 1;
    }
    return false;
  });
  this.create("captioning-label-small", captionContainer, "span", this.localizationManager.getString(LocalizationConstants.MSG_CC_EDGE));
  this.picker.edge = this.create("captioning-color-picker", captionContainer);
  this.picker.edge.style.backgroundColor = this.captioningObject["default"].edgeColor;
  EventHandler.create(this.picker.edge, EventHandler.CLICK, function(event) {
    var alpha, _ref;
    event.stopImmediatePropagation();
    _this.colorPicker.style.display = _this.colorPicker.style.display === "block" ? "none" : "block";
    if (_this.colorPicker.style.display === "block") {
      if ((_ref = _this.swatchColorCurr) != null) {
        _ref.style.borderColor = "rgba(0,0,0,0.3)";
      }
      _this.colorPicker.style.left = "212px";
      _this.colorPicker.name = "edgeColor";
      _this.captioningObject.instance = _this.picker.edge;
      if (_this.picker.edge.style.backgroundColor.indexOf('rgba') !== -1) {
        alpha = _this.picker.edge.style.backgroundColor.replace(/^rgba?\(|\s+|\)$/g, '').split(',')[3];
      }
      _this.colorPickerOpacity.value = alpha != null ? alpha : 1;
    }
    return false;
  });
  this.create("captioning-label-small", captionContainer, "span", this.localizationManager.getString(LocalizationConstants.MSG_CC_WINDOW));
  this.picker.window = this.create("captioning-color-picker", captionContainer);
  this.picker.window.style.backgroundColor = this.captioningObject["default"].windowColor;
  EventHandler.create(this.picker.window, EventHandler.CLICK, function(event) {
    var alpha, _ref;
    event.stopImmediatePropagation();
    _this.colorPicker.style.display = _this.colorPicker.style.display === "block" ? "none" : "block";
    if (_this.colorPicker.style.display === "block") {
      if ((_ref = _this.swatchColorCurr) != null) {
        _ref.style.borderColor = "rgba(0,0,0,0.3)";
      }
      _this.colorPicker.style.left = "300px";
      _this.colorPicker.name = "windowColor";
      _this.captioningObject.instance = _this.picker.window;
      if (_this.picker.window.style.backgroundColor.indexOf('rgba') !== -1) {
        alpha = _this.picker.window.style.backgroundColor.replace(/^rgba?\(|\s+|\)$/g, '').split(',')[3];
      }
      _this.colorPickerOpacity.value = alpha != null ? alpha : 1;
    }
    return false;
  });
  previewContainer = this.create(["caption-text", "caption-text-preview"]);
  previewPara = this.create(null, previewContainer, "p", "Lorem ipsum dolor sit amet");
  captionContainer = this.create("captioning-footer-container");
  applyButton = this.create("captioning-footer-button", captionContainer, "button", this.localizationManager.getString(LocalizationConstants.MSG_CC_APPLY));
  cancelButton = this.create("captioning-footer-button", captionContainer, "button", this.localizationManager.getString(LocalizationConstants.MSG_CC_CANCEL));
  resetButton = this.create("captioning-footer-button", captionContainer, "button", this.localizationManager.getString(LocalizationConstants.MSG_CC_RESET));
  if (this.facade.app.getViewComponent().clientWidth > 450) {
    toggleAdvancedButton = this.create("captioning-advanced-button", captionContainer, "button", this.localizationManager.getString(LocalizationConstants.MSG_CC_SHOW_ADVANCED));
    EventHandler.create(toggleAdvancedButton, EventHandler.CLICK, function(event) {
      event.stopImmediatePropagation();
      if (_this.advancedSettingContainer.style.display === "block") {
        event.target.innerHTML = _this.localizationManager.getString(LocalizationConstants.MSG_CC_SHOW_ADVANCED);
        _this.advancedSettingContainer.style.display = "none";
        _this.colorPicker.style.display = "none";
      } else {
        event.target.innerHTML = _this.localizationManager.getString(LocalizationConstants.MSG_CC_HIDE_ADVANCED);
        _this.advancedSettingContainer.style.display = "block";
      }
      return false;
    });
  }
  EventHandler.create(applyButton, EventHandler.CLICK, function(event) {
    event.stopImmediatePropagation();
    try {
      localStorage.setItem(Namespace.PREFIX + "captioningDefault", JSON.stringify(_this.captioningObject.selected));
    } catch (localStorageError) {
      _this.facade.logger.error("LocalStorage Not Supported on this Browser", localStorageError);
    }
    _this.sendNotification(CaptioningNotifications.SETTINGS_VISIBILITY_CHANGE, _this.settingsUiVisible);
    _this.applyCaptioningStyle(false, true);
    _this.sendNotification(CaptioningNotifications.SETTINGS_CHANGE, _this.captioningObject.selected);
    return false;
  });
  EventHandler.create(cancelButton, EventHandler.CLICK, function(event) {
    event.stopImmediatePropagation();
    _this.sendNotification(CaptioningNotifications.SETTINGS_VISIBILITY_CHANGE, _this.settingsUiVisible);
    return false;
  });
  EventHandler.create(resetButton, EventHandler.CLICK, function(event) {
    event.stopImmediatePropagation();
    _this.colorPicker.style.display = "none";
    _this.applyCaptioningStyle(true);
    return false;
  });
  this.captionningStyle = this.create(null, document.getElementsByTagName('head')[0], "style");
  this.captionningStyle.type = 'text/css';
  colorArray = ["#000000", "#660000", "#990000", "#ff0000", "#000066", "#660066", "#990066", "#ff0066", "#006600", "#666600", "#996600", "#ff6600", "#006666", "#666666", "#996666", "#ff6666", "#009900", "#669966", "#999900", "#ff9900", "#009966", "#669966", "#999966", "#ff9966", "#00ff00", "#66ff00", "#99ff00", "#ffff00", "#00ff66", "#66ff66", "#99ff66", "#ffff66", "#000099", "#660099", "#990099", "#ff0099", "#0000ff", "#6600ff", "#9900ff", "#ff00ff", "#006699", "#666699", "#996699", "#ff6699", "#0066ff", "#6666ff", "#9966ff", "#ff66ff", "#009999", "#669999", "#999999", "#ff9999", "#0099ff", "#6699ff", "#9999ff", "#ff99ff", "#0099ff", "#66ff99", "#99ff99", "#ffff99", "#00ffff", "#66ffff", "#99ffff", "#ffffff"];
  this.colorPicker = this.create("colorpicker-palette", this.viewComponent.parentElement);
  swatch = this.create("colorpicker-swatch", false, null, "&nbsp;");
  for (_i = 0, _len = colorArray.length; _i < _len; _i++) {
    color = colorArray[_i];
    swatch.style.backgroundColor = color;
    clonedSwatch = swatch.cloneNode();
    EventHandler.create(clonedSwatch, EventHandler.CLICK, function(event) {
      event.stopImmediatePropagation();
      if (_this.swatchColorCurr !== null) {
        _this.swatchColorCurr.style.borderColor = "rgba(0,0,0,0.3)";
      }
      _this.swatchColorCurr = event.target;
      _this.swatchColorCurr.style.borderColor = "rgba(255, 50, 50, 1)";
      _this.captioningObject.instance.style.backgroundColor = _this.captioningObject.selected[_this.colorPicker.name] = _this.toRGBA(event.target.style.backgroundColor);
      _this.applyCaptioningStyle(false);
      return false;
    });
    this.colorPicker.appendChild(clonedSwatch);
  }
  this.create("opacity-label", this.colorPicker, "span", this.localizationManager.getString(LocalizationConstants.MSG_CC_OPACITY));
  this.colorPickerOpacity = this.create("colorpicker-slider", this.colorPicker, "input");
  this.colorPickerOpacity.type = "range";
  this.colorPickerOpacity.min = 0;
  this.colorPickerOpacity.max = 1;
  this.colorPickerOpacity.step = .1;
  this.colorPickerOpacity.value = 1;
  EventHandler.create(this.colorPickerOpacity, "change", function(event) {
    event.stopImmediatePropagation();
    _this.captioningObject.instance.style.backgroundColor = _this.captioningObject.selected[_this.colorPicker.name] = _this.toRGBA(_this.captioningObject.instance.style.backgroundColor);
    _this.applyCaptioningStyle(false);
    return false;
  });
  this.swatchOpacityCurr = this.colorPickerOpacity;
  EventHandler.create(document, EventHandler.CLICK, function(event) {
    event.stopImmediatePropagation();
    if (event.target.className !== "akamai-colorpicker-palette" && event.target.className !== "akamai-opacity-label" && event.target.className !== "akamai-colorpicker-slider" && _this.colorPicker.style.display !== "none") {
      _this.colorPicker.style.display = "none";
    }
    return false;
  });
  if (localStorage.getItem(Namespace.PREFIX + "captioningDefault") != null) {
    this.captioningObject.selected = JSON.parse(localStorage.getItem(Namespace.PREFIX + "captioningDefault"));
    this.applyCaptioningStyle(false);
  } else {
    isDefault = !((this.facade.config.style != null) || this.facade.config.style !== "undefined");
    if (!isDefault) {
      this.captioningObject.selected = this.cloneObject(this.facade.config.style);
    }
    this.applyCaptioningStyle(isDefault);
  }
  CaptioningHTMLMediator.__super__.onRegister.call(this);
};

CaptioningHTMLMediator.prototype.toRGBA = function(colorCode) {
  var rbga, rgb;
  rgb = colorCode.replace(/^rgba?\(|\s+|\)$/g, '').split(',');
  rbga = 'rgba(' + rgb[0] + "," + rgb[1] + "," + rgb[2] + "," + this.swatchOpacityCurr.value + ')';
  return rbga;
};

CaptioningHTMLMediator.prototype.languageListPopulate = function() {
  var language, track, tracks, _i, _len, _ref;
  tracks = (_ref = this.facade.moduleAPI) != null ? _ref.getTracks() : void 0;
  if (!(tracks != null)) {
    return;
  }
  this.list.language.innerHTML = "";
  for (_i = 0, _len = tracks.length; _i < _len; _i++) {
    track = tracks[_i];
    language = track.language;
    language = this.facade.app.retrieveProxy(LocalizationProxy.NAME).getLanguageString(language);
    if ((language != null) && language !== "") {
      this.create(null, this.list.language, "option", language);
    }
  }
  this.toggle.disabled = this.list.language.childElementCount === 0;
  if (this.toggle.disabled) {
    this.create(null, this.list.language, "option", "None");
  }
};

CaptioningHTMLMediator.prototype.cloneObject = function(clone) {
  var cloned, key;
  cloned = {};
  for (key in clone) {
    cloned[key] = clone[key];
  }
  return cloned;
};

CaptioningHTMLMediator.prototype.applyCaptioningStyle = function(isDefault, isApply) {
  var backgroundColor, color, edgeType, fontFamily, fontSize, windowColor;
  if (isDefault == null) {
    isDefault = false;
  }
  if (isApply == null) {
    isApply = false;
  }
  if (isDefault) {
    this.captioningObject.selected = this.cloneObject(this.captioningObject["default"]);
    this.list.font.value = this.captioningObject["default"].fontFamily;
    this.list.edge.value = this.captioningObject["default"].edgeType != null ? this.captioningObject["default"].edgeType : "none";
    this.list.size.value = this.captioningObject["default"].size;
    this.picker.color.style.backgroundColor = this.captioningObject["default"].fontColor;
    this.picker.background.style.backgroundColor = this.captioningObject["default"].backgroundColor;
    this.picker.edge.style.backgroundColor = this.captioningObject["default"].edgeColor;
    this.picker.window.style.backgroundColor = this.captioningObject["default"].windowColor;
  } else {
    if (this.captioningObject.selected.fontFamily != null) {
      this.list.font.value = this.captioningObject.selected.fontFamily;
    }
    this.list.edge.value = this.captioningObject.selected.edgeType != null ? this.captioningObject.selected.edgeType : "none";
    if (this.captioningObject.selected.size != null) {
      this.list.size.value = this.captioningObject.selected.size;
    }
    this.picker.color.style.backgroundColor = this.captioningObject.selected.fontColor;
    if (this.captioningObject.selected.backgroundColor != null) {
      this.picker.background.style.backgroundColor = this.captioningObject.selected.backgroundColor;
    }
    if (this.captioningObject.selected.edgeColor != null) {
      this.picker.edge.style.backgroundColor = this.captioningObject.selected.edgeColor;
    }
    if (this.captioningObject.selected.windowColor != null) {
      this.picker.window.style.backgroundColor = this.captioningObject.selected.windowColor;
    }
  }
  fontFamily = "font-family: " + (isDefault ? this.captioningObject["default"].fontFamily : this.list.font.value) + " ;";
  edgeType = (isDefault ? this.captioningObject["default"].edgeType + this.captioningObject["default"].edgeColor : this.list.edge.value + " " + this.picker.edge.style.backgroundColor) + ";";
  fontSize = "font-size: " + (isDefault ? this.captioningObject["default"].size : this.list.size.value) + " ;";
  color = "color: " + (isDefault ? this.captioningObject["default"].fontColor : this.picker.color.style.backgroundColor) + " ;";
  backgroundColor = "background-color: " + (isDefault ? this.captioningObject["default"].backgroundColor : this.picker.background.style.backgroundColor) + " ;";
  windowColor = "background-color: " + (isDefault ? this.captioningObject["default"].windowColor : this.picker.window.style.backgroundColor) + " ;";
  if (isApply) {
    this.captionningStyle.innerHTML = this.captioningObject.appliedStyleText = '.akamai-caption-text { ' + fontFamily + fontSize + edgeType + windowColor + ' }' + '.akamai-caption-text p { ' + color + backgroundColor + ' }';
  } else {
    this.captionningStyle.innerHTML = this.captioningObject.appliedStyleText + '.akamai-caption-text-preview { ' + fontFamily + fontSize + edgeType + windowColor + ' }' + '.akamai-caption-text-preview p { ' + color + backgroundColor + ' }';
  }
};

CaptioningHTMLMediator.prototype.toggleButtonHandler = function(isON) {
  if (isON == null) {
    isON = false;
  }
  if (isON) {
    this.classList.add("captioning-floater-btnselected", this.toggle.ON);
    this.classList.remove("captioning-floater-btnselected", this.toggle.OFF);
  } else {
    this.classList.add("captioning-floater-btnselected", this.toggle.OFF);
    this.classList.remove("captioning-floater-btnselected", this.toggle.ON);
  }
  this.sendNotification(CaptioningNotifications.VISIBILITY_CHANGE, isON);
  this.sendNotification(UserSettingsNotifications.UPDATE_SETTINGS, {
    captioning: {
      hidden: !isON
    }
  });
};

/**
 * @override
*/
CaptioningHTMLMediator.prototype.listNotificationInterests = function() {
  return [CaptioningNotifications.CUE_CHANGE, CaptioningNotifications.SETTINGS_VISIBILITY_CHANGE, CaptioningNotifications.TOGGLE_SETTINGS_VISIBILITY, CaptioningNotifications.SETTINGS_CHANGE];
};

/**
 * @override
*/
CaptioningHTMLMediator.prototype.handleNotification = function(notification) {
  var body, captions, cue, name, note, state, _i, _len;
  name = notification.getName();
  body = notification.getBody();
  switch (name) {
    case CaptioningNotifications.CUE_CHANGE:
      captions = "";
      for (_i = 0, _len = body.length; _i < _len; _i++) {
        cue = body[_i];
        captions += cue.html;
      }
      this.captionText.innerHTML = captions;
      break;
    case CaptioningNotifications.SETTINGS_VISIBILITY_CHANGE:
    case CaptioningNotifications.TOGGLE_SETTINGS_VISIBILITY:
      if (this.settingsUiVisible) {
        this.colorPicker.style.display = "none";
      }
      this.settingsUiVisible = !this.settingsUiVisible;
      if (this.settingsUiVisible && this.list.language.length === 1) {
        this.languageListPopulate();
      }
      note = this.settingsUiVisible ? Notifications.ADD_APPLICATION_STATE : Notifications.REMOVE_APPLICATION_STATE;
      state = "cc-setting-active";
      this.sendNotification(note, state);
      break;
    case CaptioningNotifications.SETTINGS_CHANGE:
      this.captioningObject.selected = body;
      this.applyCaptioningStyle(false, true);
  }
};

/** 
 * @constructor 
 * @private
*/
function LiveCaptionProxy() {
  var com,
    _this = this;
  this.captions = [];
  this.head = document.getElementsByTagName("head")[0];
  com = window.com || {};
  com.akamai = com.akamai || {};
  com.akamai.amp = com.akamai.amp || {};
  com.akamai.amp.plugins = com.akamai.amp.plugins || {};
  com.akamai.amp.plugins.subply = com.akamai.amp.plugins.subply || {};
  com.akamai.amp.plugins.subply.response = function(json) {
    _this.parse(json);
    _this.poll();
  };
  if (!(window.com != null)) {
    window.com = com;
  }
  LiveCaptionProxy.__super__.constructor.call(this, this.constructor.NAME);
}


__extends(LiveCaptionProxy, puremvc.Proxy);


/** @static
*/
LiveCaptionProxy.NAME = "LiveCaptionProxy";

LiveCaptionProxy.prototype.data = {
  base: "http://test.plymedia.com.s3.amazonaws.com/online/Akamai_",
  interval: 1000
};

LiveCaptionProxy.prototype.caption = null;

LiveCaptionProxy.prototype.head = null;

LiveCaptionProxy.prototype.script = null;

LiveCaptionProxy.prototype.timeout = null;

/**
 *
*/
LiveCaptionProxy.prototype.getURL = function() {
  return this.data.url;
};

LiveCaptionProxy.prototype.setURL = function(value) {
  this.data.url = value;
  return value;
};

LiveCaptionProxy.prototype.start = function() {
  this.send();
};

LiveCaptionProxy.prototype.poll = function() {
  var timeout,
    _this = this;
  timeout = setTimeout(function() {
    _this.send();
  }, this.data.interval || 1000);
};

LiveCaptionProxy.prototype.send = function() {
  if (this.script != null) {
    this.head.removeChild(this.script);
  }
  this.script = Utils.loadScript(this.data.base + this.data.url + ".js?nocache=" + Date.now());
};

LiveCaptionProxy.prototype.stop = function() {
  clearTimeout(timeout);
};

/**
 *
*/
LiveCaptionProxy.prototype.parse = function(response) {
  var html, text, _i, _len, _ref;
  if (response.Stream !== this.data.url) {
    return;
  }
  if ((this.caption != null) && this.caption.id >= response.Ticks) {
    return;
  }
  this.caption = new CaptionCue(Utils.flattenTimecode(response.From), Utils.flattenTimecode(response.To), response.Ticks);
  this.caption.text = response.Text;
  html = "";
  _ref = response.Text.split("\n");
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    text = _ref[_i];
    if (html !== "") {
      html += "<br />";
    }
    html += "<span>" + text + "</span>";
  }
  this.caption.html = "<p>" + html + "</p>";
  this.sendNotification(CaptioningNotifications.CUE_CHANGE, [this.caption]);
  return this.caption;
};

/**
 * The CaptioningMediator class.
 * 
 * @constructor
 * @private
 * @extends {PluginMediator}
 * @param {Object} viewComponent
*/
function CaptioningNativeMediator(viewComponent) {
  CaptioningNativeMediator.__super__.constructor.call(this, CaptioningNativeMediator.NAME, viewComponent);
}


__extends(CaptioningNativeMediator, LocalizedMediator);


/**
 * The name of the this Mediator.
 * 
 * @static
 * @type {string}
*/
CaptioningNativeMediator.NAME = "CaptioningNativeMediator";

CaptioningNativeMediator.prototype.video = null;

CaptioningNativeMediator.prototype.index = -1;

CaptioningNativeMediator.prototype.plugin = null;

/**
 * @override
*/
CaptioningNativeMediator.prototype.onRegister = function() {
  this.video = this.facade.app.video;
  this.plugin = this.facade.retrieveProxy(CaptioningProxy.NAME);
};

/**
 * @override
*/
CaptioningNativeMediator.prototype.listNotificationInterests = function() {
  return [CaptioningNotifications.VISIBILITY_CHANGE, CaptioningNotifications.TRACK_SELECTED, CaptioningNotifications.TRACKS_LOADED];
};

/**
 * @override
*/
CaptioningNativeMediator.prototype.handleNotification = function(notification) {
  var body, cue, textTrack, textTrackCue, track, _i, _j, _len, _len1, _ref;
  body = notification.getBody();
  switch (notification.getName()) {
    case CaptioningNotifications.TRACKS_LOADED:
      for (_i = 0, _len = body.length; _i < _len; _i++) {
        track = body[_i];
        if (!(track.kind === "captions" || track.kind === "subtitles")) {
          continue;
        }
        textTrack = this.video.addTextTrack(track.kind, track.label, track.srclang);
        _ref = track.cues;
        for (_j = 0, _len1 = _ref.length; _j < _len1; _j++) {
          cue = _ref[_j];
          textTrackCue = new TextTrackCue(cue.startTime, cue.endTime, cue.text);
          cue.id = cue.id;
          textTrack.addCue(textTrackCue);
        }
      }
      break;
    case CaptioningNotifications.TRACK_SELECTED:
      if (this.index > -1) {
        this.video.textTracks[this.index].mode = "hidden";
      }
      this.index = this.plugin.getTracks().indexOf(body);
      if (!this.plugin.getHidden()) {
        this.video.textTracks[this.index].mode = "showing";
      }
      break;
    case CaptioningNotifications.VISIBILITY_CHANGE:
      this.video.textTracks[this.index].mode = this.plugin.getHidden() ? "hidden" : "showing";
  }
};

/**
 * The CaptioningTimeUpdateCommand class.
 *   
 * @constructor
 * @private
 * @extends {puremvc.SimpleCommand}
*/
function CaptioningTimeUpdateCommand() {
  CaptioningTimeUpdateCommand.__super__.constructor.call(this);
}


__extends(CaptioningTimeUpdateCommand, puremvc.SimpleCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
CaptioningTimeUpdateCommand.prototype.execute = function(notification) {
  var active, changed, cue, cues, index, proxy, time, track, _i, _len;
  time = notification.getBody();
  proxy = this.facade.retrieveProxy(CaptioningProxy.NAME);
  track = proxy.getTrack();
  if (!(track != null)) {
    return;
  }
  active = track.activeCues;
  cues = track.cues;
  changed = false;
  for (_i = 0, _len = cues.length; _i < _len; _i++) {
    cue = cues[_i];
    if (time >= cue.startTime && time < cue.endTime) {
      if (!(__indexOf.call(active, cue) >= 0)) {
        active.push(cue);
        changed = true;
      }
    } else {
      index = active.indexOf(cue);
      if (index !== -1) {
        active.splice(index, 1);
        changed = true;
      }
    }
  }
  if (changed === true) {
    this.sendNotification(CaptioningNotifications.CUE_CHANGE, active);
  }
};

/**
 * The CaptioningChangeMediaCommand class.
 *   
 * @constructor
 * @private
 * @extends {puremvc.SimpleCommand}
*/
function CaptioningChangeMediaCommand() {
  CaptioningChangeMediaCommand.__super__.constructor.call(this);
}


__extends(CaptioningChangeMediaCommand, puremvc.SimpleCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
CaptioningChangeMediaCommand.prototype.execute = function(notification) {
  var media, proxy;
  media = notification.getBody();
  proxy = this.facade.retrieveProxy(CaptioningProxy.NAME);
  if (media.track != null) {
    proxy.setTracks(media.track);
  }
  if (media.track != null) {
    this.sendNotification(CaptioningNotifications.ENABLED, true);
  }
};

/**
 * The ChangeVisibilityCommand class.
 *   
 * @constructor
 * @private
 * @extends {puremvc.SimpleCommand}
*/
function CaptioningVisibilityChangeCommand() {
  CaptioningVisibilityChangeCommand.__super__.constructor.call(this);
}


__extends(CaptioningVisibilityChangeCommand, puremvc.SimpleCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
CaptioningVisibilityChangeCommand.prototype.execute = function(notification) {
  var configProxy;
  configProxy = this.facade.retrieveProxy(CaptioningProxy.NAME);
  configProxy.setHidden(!notification.getBody());
};

/**
 * @enum {string}
 * @const
 * @private
*/

var UserSettingsNotifications = {
  SETTING_CHANGE: "settingchange",
  UPDATE_SETTINGS: "updatesettings"
};

/**
 * The CaptioningStartedCommand class.
 *   
 * @constructor
 * @private
 * @extends {puremvc.SimpleCommand}
*/
function CaptioningStartedCommand() {
  CaptioningStartedCommand.__super__.constructor.call(this);
}


__extends(CaptioningStartedCommand, puremvc.SimpleCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
CaptioningStartedCommand.prototype.execute = function(notification) {
  var proxy, track, _ref;
  this.facade.logger.debug("CaptioningStartedCommand");
  proxy = this.facade.retrieveProxy(CaptioningProxy.NAME);
  track = proxy.getTrack();
  if (!(track != null) && ((_ref = proxy.getTracks()) != null ? _ref.length : void 0) > 0) {
    track = proxy.autoSelectTrack();
  }
  if ((track != null ? track.isLive : void 0) === true) {
    this.facade.removeCommand(Notifications.TIME_UPDATE);
    proxy = this.facade.retrieveProxy(LiveCaptionProxy.NAME);
    if (!(proxy != null)) {
      proxy = new LiveCaptionProxy();
      this.facade.registerProxy(proxy);
    }
    proxy.setURL(track.src);
    proxy.start();
  }
};

/**
 * The CaptioningMediator class.
 * 
 * @constructor
 * @private
 * @extends {PluginMediator}
 * @param {Object} viewComponent
*/
function CaptioningMediator(viewComponent) {
  CaptioningMediator.__super__.constructor.call(this, viewComponent);
}


__extends(CaptioningMediator, PluginMediator);


CaptioningMediator.prototype.componentName = "captioning";

CaptioningMediator.prototype.captionButton = null;

/**
 * @override
*/
CaptioningMediator.prototype.onRegister = function() {
  var button;
  button = new ButtonMediator(this.localizationManager.getString(LocalizationConstants.MSG_CC), this.viewComponent, null, "caption", this.onclick.bind(this));
  this.facade.registerMediator(button);
  this.captionButton = button.getViewComponent();
  this.sendNotification(Notifications.ADD_CONTROL, this.captionButton);
  CaptioningMediator.__super__.onRegister.call(this);
};

/**
*/
CaptioningMediator.prototype.onclick = function(event) {
  event.stopImmediatePropagation();
  if (this.plugin.getTrack().type === "embedded") {
    this.sendNotification(CaptioningNotifications.VISIBILITY_CHANGE, this.plugin.getHidden());
  } else if (event.currentTarget === this.captionButton) {
    this.sendNotification(CaptioningNotifications.SETTINGS_VISIBILITY_CHANGE, this.plugin.getHidden());
  }
  return false;
};

/**
 * @override
*/
CaptioningMediator.prototype.listNotificationInterests = function() {
  return [CaptioningNotifications.VISIBILITY_CHANGE, CaptioningNotifications.ENABLED, CaptioningNotifications.TRACK_SELECTED];
};

/**
 * @override
*/
CaptioningMediator.prototype.handleNotification = function(notification) {
  var body, note, state;
  body = notification.getBody();
  note = body ? Notifications.ADD_APPLICATION_STATE : Notifications.REMOVE_APPLICATION_STATE;
  switch (notification.getName()) {
    case CaptioningNotifications.TRACK_SELECTED:
      state = "cc-embedded";
      note = body.type === "embedded" ? Notifications.ADD_APPLICATION_STATE : Notifications.REMOVE_APPLICATION_STATE;
      break;
    case CaptioningNotifications.VISIBILITY_CHANGE:
      state = "cc-active";
      break;
    case CaptioningNotifications.ENABLED:
      note = body ? Notifications.ADD_CONTROL_STATE : Notifications.REMOVE_CONTROL_STATE;
      state = "cc-enabled";
  }
  this.sendNotification(note, state);
};

/** 
 * @private
*/

CaptionParsers = {
  "application/ttml+xml": new SMPTETTParser(),
  "application/x-subrip": new SRTParser(),
  undefined: new SMPTETTParser()
};

/**
 * @enum {string}
 * @const
 * @private
*/

var CaptioningNotifications = {
  VISIBILITY_CHANGE: "captioningvisibilitychange",
  ENABLED: "captioningEnabled",
  TRACKS_LOADED: "captioningTracksLoaded",
  TRACK_SELECTED: "captioningTrackSelected",
  CUE_CHANGE: "captioningCueChange",
  SETTINGS_VISIBILITY_CHANGE: "captioningsettingsvisibility",
  TOGGLE_SETTINGS_VISIBILITY: "togglesettingsvisibility",
  SETTINGS_CHANGE: "captioningsettingschange"
};

/**
 * The CaptionTrack class.
 *   
 * @constructor
 * @private
 * @param {?Object} track A generic track object.
*/
function CaptionTrack(track, onload) {
  var xhr,
    _this = this;
  this.kind = track.kind;
  this.type = track.type;
  this.src = track.src;
  this.language = track.srclang;
  this.label = track.label || this.srclang || this.kind;
  this.cues = track.cues || [];
  this.styles = track.styles || {};
  this.activeCues = [];
  this.isLive = /live-subply/.test(this.type);
  if ((this.src != null) && this.src !== "" && !this.isLive) {
    xhr = Utils.get(this.src, {
      onload: function() {
        try {
          CaptionParsers[_this.type].parse(_this, xhr.response);
        } catch (error) {
          Logger.error("Could not parse caption track: " + _this.src);
          return;
        }
        if (typeof onload === "function") {
          onload();
        }
      },
      onerror: function() {
        Logger.error("Could not load caption track: " + _this.src);
      }
    });
  } else {
    setTimeout(onload, 1);
  }
}

CaptionTrack.prototype.kind = null;

CaptionTrack.prototype.src = null;

CaptionTrack.prototype.language = null;

CaptionTrack.prototype.cues = null;

CaptionTrack.prototype.label = null;

CaptionTrack.prototype.activeCues = null;

CaptionTrack.prototype.type = null;

CaptionTrack.prototype.styles = null;

CaptionTrack.prototype.isLive = false;

/**
 * @enum {string}
 * @const
 * @private
*/

var FeatureNotifications = {
  REGISTER_FEATURE: "registerfeature"
};

/** 
 * The CaptioningProxy class
 * 
 * @constructor
 * @private 
 * @extends {PluginProxy}
 * @param   {Object}  config  The configuration object.
*/
function CaptioningProxy(config) {
  this.activeCaptions = [];
  this.providers = {};
  this.tracks = [];
  CaptioningProxy.__super__.constructor.call(this, config);
}


__extends(CaptioningProxy, PluginProxy);


/** @static
*/
CaptioningProxy.NAME = ModuleProxy.NAME;

CaptioningProxy.prototype.defaults = {};

CaptioningProxy.prototype.hidden = true;

CaptioningProxy.prototype.tracks = null;

CaptioningProxy.prototype.track = null;

CaptioningProxy.prototype.activeCaptions = null;

CaptioningProxy.prototype.captions = null;

CaptioningProxy.prototype.loaded = true;

/**
 *
*/
CaptioningProxy.prototype.useNative = function() {
  var _ref;
  return (this.facade.app.video.textTracks != null) && ((_ref = window.TextTrackCue) != null ? _ref.length : void 0) === 3;
};

/**
 *
*/
CaptioningProxy.prototype.getTracks = function() {
  return this.tracks;
};

CaptioningProxy.prototype.setTracks = function(value) {
  var count, item, loaded, track, trackLoaded, _i, _len,
    _this = this;
  this.tracks = [];
  this.track = null;
  count = value.length;
  loaded = 0;
  trackLoaded = function() {
    loaded++;
    if (loaded === count) {
      _this.sendNotification(CaptioningNotifications.TRACKS_LOADED, _this.tracks);
      _this.autoSelectTrack();
    }
  };
  for (_i = 0, _len = value.length; _i < _len; _i++) {
    item = value[_i];
    track = new CaptionTrack(item, trackLoaded);
    this.tracks.push(track);
  }
  return value;
};

/**
 *
*/
CaptioningProxy.prototype.getTrack = function() {
  return this.track;
};

CaptioningProxy.prototype.setTrack = function(value) {
  this.track = value;
  this.captions = this.track.cues;
  this.activeCaptions = [];
  this.sendNotification(CaptioningNotifications.TRACK_SELECTED, this.track);
  return value;
};

/**
 *
*/
CaptioningProxy.prototype.selectTrackByIndex = function(index) {
  var track;
  if ((0 <= index && index < this.tracks.length)) {
    track = this.tracks[index];
    this.setTrack(track);
  }
  return track;
};

/**
 *
*/
CaptioningProxy.prototype.selectTrackByLanguage = function(lang) {
  var item, track, _i, _len, _ref;
  _ref = this.tracks;
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    item = _ref[_i];
    if (!(item.language === lang)) {
      continue;
    }
    track = item;
    break;
  }
  if (track != null) {
    this.setTrack(track);
  }
  return track;
};

/**
 *
*/
CaptioningProxy.prototype.getHidden = function() {
  return this.hidden;
};

CaptioningProxy.prototype.setHidden = function(value) {
  this.hidden = value;
  return value;
};

/**
 *
*/
CaptioningProxy.prototype.autoSelectTrack = function() {
  var lang, track, _ref;
  lang = (_ref = this.facade.app.retrieveProxy(LocalizationProxy.NAME)) != null ? _ref.getLanguage() : void 0;
  if (lang != null) {
    lang = lang.split("-").shift();
    track = this.selectTrackByLanguage(lang);
  }
  if (!(track != null)) {
    track = this.tracks[0];
    this.setTrack(track);
  }
  return track;
};

/** 
 * The MediaAnalyticsPlugin class.
 *   
 * @param {Module}  app     The parent module of this plugin.
 * @param {Object}  config  The plugin's configuration object.
 * @constructor
 * @private
 * @extends {Plugin}
*/
function MediaAnalyticsPlugin(app, config) {
  MediaAnalyticsPlugin.__super__.constructor.call(this, app, config);
}


__extends(MediaAnalyticsPlugin, Plugin);


MediaAnalyticsPlugin.NAME = "MediaAnalyticsPlugin";

MediaAnalyticsPlugin.prototype.moduleName = "mediaanalytics";

/** @override
*/
MediaAnalyticsPlugin.prototype.createModel = function() {
  this.registerProxy(new MediaAnalyticsProxy(this.config));
};

/** @override
*/
MediaAnalyticsPlugin.prototype.createController = function() {
  this.registerCommand(Notifications.MEDIA_CHANGE, MediaAnalyticsChangeMediaCommand);
  this.registerCommand(AdNotifications.BREAK_START, MediaAnalyticsAdBreakStartCommand);
  this.registerCommand(AdNotifications.BREAK_END, MediaAnalyticsAdBreakEndCommand);
  this.registerCommand(AdNotifications.AD_LOADED, MediaAnalyticsAdLoadedCommand);
  this.registerCommand(AdNotifications.AD_STARTED, MediaAnalyticsAdStartCommand);
  this.registerCommand(AdNotifications.AD_TIME_UPDATE, MediaAnalyticsAdTimeUpdateCommand);
  this.registerCommand(AdNotifications.AD_ENDED, MediaAnalyticsAdEndCommand);
  this.registerCommand(MediaAnalyticsNotifications.SET_DIMENSIONS, MediaAnalyticsSetDimensionsCommand);
  this.registerCommand(Notifications.CONTENT_CHANGED, MediaAnalyticsContentChangedCommand);
};

/** @override
*/
MediaAnalyticsPlugin.prototype.createAPI = function() {
  return new MediaAnalyticsAPI(this);
};

/** @override
*/
MediaAnalyticsPlugin.prototype.onRegister = function() {
  window.AKAMAI_MEDIA_ANALYTICS_CONFIG_FILE_PATH = this.config.config;
  MediaAnalyticsPlugin.__super__.onRegister.call(this);
};

/**
*/
MediaAnalyticsPlugin.prototype.listNotificationInterests = function() {
  return [Notifications.MEDIA_CHANGE, AdNotifications.BREAK_START, AdNotifications.BREAK_END, AdNotifications.AD_LOADED, AdNotifications.AD_STARTED, AdNotifications.AD_TIME_UPDATE, AdNotifications.AD_ENDED, MediaAnalyticsNotifications.SET_DIMENSIONS, Notifications.CONTENT_CHANGED];
};


AMP.registerPlugin("mediaanalytics", "html", MediaAnalyticsPlugin);
AMP.registerPlugin("mediaanalytics", "flash", MediaAnalyticsWrapper);

/**
 * The CaptioningAPI class.
 * 
 * @param         {!CaptioningPlugin} module  The base module this API wraps.
 * @constructor
 * @extends {PluginAPI}
*/
function CaptioningAPI(module) {
  var proxy;
  CaptioningAPI.__super__.constructor.call(this, module);
  proxy = module.retrieveProxy(CaptioningProxy.NAME);
  this.getHidden = proxy.getHidden.bind(proxy);
  this.setHidden = function(value) {
    module.sendNotification(CaptioningNotifications.VISIBILITY_CHANGE, !value);
    return value;
  };
  this.getTracks = proxy.getTracks.bind(proxy);
  this.getTrack = proxy.getTrack.bind(proxy);
  this.setTrack = proxy.setTrack.bind(proxy);
  this.selectTrackByIndex = proxy.selectTrackByIndex.bind(proxy);
  this.selectTrackByLanguage = proxy.selectTrackByLanguage.bind(proxy);
  this.changeSettings = function(object) {
    module.sendNotification(CaptioningNotifications.SETTINGS_CHANGE, object);
    return object;
  };
}


__extends(CaptioningAPI, PluginAPI);


/**
 * @return {boolean} The hidden flag.
 * @expose
*/
CaptioningAPI.prototype.getHidden = function() {};

/**
 * @param {boolean} value The hidden flag.
 * @expose
*/
CaptioningAPI.prototype.setHidden = function(value) {};

/**
 * Returns an array of caption tracks
 * 
 * @return {Array.<CaptionTrack>} The list of text tracks.
 * @expose
*/
CaptioningAPI.prototype.getTracks = function() {};

/**
 * Returns the currently selected track.
 * 
 * @return {CaptionTrack} The currently selected caption track.
 * @expose
*/
CaptioningAPI.prototype.getTrack = function() {};

/**
 * Selects a caption track
 * 
 * @param {CaptionTrack} value The caption track to select
 * @expose
*/
CaptioningAPI.prototype.setTrack = function(value) {};

/**
 * Selects a caption track by its index in the getTracks array.
 * 
 * @param {number}        index   The index to select 
 * @return {CaptionTrack}         The selected caption track.
 * @expose
*/
CaptioningAPI.prototype.selectTrackByIndex = function(index) {};

/**
 * Selects a caption track by it's language property.
 * 
 * @param {string}        lang  The language to select 
 * @return {CaptionTrack}       The selected caption track.
 * @expose
*/
CaptioningAPI.prototype.selectTrackByLanguage = function(lang) {};

/**
 * Sets a caption Settings Object (styles)
 * 
 * @param {Object}  object  The caption settings object. 
 * @expose
*/
CaptioningAPI.prototype.changeSettings = function(object) {};

/** 
 * The Feature class. Acts as a base for features.
 *   
 * @param {Module}  app     The parent module of this plugin.
 * @param {Object}  config  The plugin's configuration object.
 * @constructor
 * @private
 * @extends {Plugin}
*/
function Feature(app, config) {
  Feature.__super__.constructor.call(this, app, config);
}


__extends(Feature, Plugin);


Feature.NAME = "Feature";

Feature.prototype.featureName = null;

/**
*/
Feature.prototype.getFeatureName = function() {
  return this.featureName;
};

/**
*/
Feature.prototype.registerFeature = function() {
  if (this.getFeatureName() != null) {
    this.app.sendNotification(FeatureNotifications.REGISTER_FEATURE, this);
  }
};

/** @override
*/
Feature.prototype.onRegister = function() {
  this.registerFeature();
  Feature.__super__.onRegister.call(this);
};

/** @override
*/
Feature.prototype.listNotificationPublications = function() {
  return Feature.__super__.listNotificationPublications.call(this).concat([FeatureNotifications.REGISTER_FEATURE]);
};

function BrandingWrapper() {
  return BrandingWrapper.__super__.constructor.apply(this, arguments);
}


__extends(BrandingWrapper, PluginWrapper);


BrandingWrapper.NAME = "BrandingWrapper";

BrandingWrapper.prototype.createFlashVars = function(flashvars) {
  if (this.config.id != null) {
    flashvars.branding = this.config.id;
  }
  return flashvars;
};

BrandingWrapper.prototype.createXML = function(xml) {
  var backgroundImage, controls, element, elements, id, logo, logoId, style, _i, _len, _ref;
  if (((_ref = this.config) != null ? _ref.logo : void 0) != null) {
    logoId = "logoOverlay";
    backgroundImage = "background-image: url('" + this.config.logo + "');";
    elements = xml.getElementsByTagName("element");
    for (_i = 0, _len = elements.length; _i < _len; _i++) {
      element = elements[_i];
      id = element.getAttribute("id");
      if (id === logoId) {
        logo = element;
      } else if (id === "controls") {
        controls = element;
      }
    }
    if (!(logo != null)) {
      logo = xml.createElement("element");
      logo.setAttribute("id", logoId);
      logo.setAttribute("style", "width: 150px; height: 53px; right: 15px; top: 15px; opacity: 0.5; " + backgroundImage);
      controls.appendChild(logo);
    } else {
      style = logo.getAttribute("style");
      if (style.indexOf("background-image:") !== -1) {
        style = style.replace(/background-image: [A-Za-z0-9_\-\.\/\\;\(\)"']+/, backgroundImage);
      } else {
        style = backgroundImage + style;
      }
      logo.setAttribute("style", style);
    }
  }
  return xml;
};

/**
 * The AdChoicesMediator class.
 * 
 * @constructor
 * @private
 * @extends {OverlayMediator}
 * @param {Object} viewComponent
*/
function BrandingMediator() {
  BrandingMediator.__super__.constructor.call(this);
}


__extends(BrandingMediator, OverlayMediator);


BrandingMediator.prototype.componentName = "branding";

BrandingMediator.prototype.logo = null;

BrandingMediator.prototype.text = null;

BrandingMediator.prototype.container = null;

BrandingMediator.prototype.onRegister = function() {
  this.container = this.create("branding-container");
  this.logo = this.create(["branding-image", "hidden"], this.container, "img");
  this.text = this.create("branding-text", this.container);
  BrandingMediator.__super__.onRegister.call(this);
};

/**
 * @override
*/
BrandingMediator.prototype.listNotificationInterests = function() {
  return [Notifications.READY];
};

/**
 * @override
*/
BrandingMediator.prototype.handleNotification = function(notification) {
  var branding, href;
  switch (notification.getName()) {
    case Notifications.READY:
      branding = notification.getBody().branding;
      if (!(branding != null)) {
        return;
      }
      if (branding.logo != null) {
        this.logo.src = branding.logo;
        this.classList.remove("hidden", this.logo);
      } else {
        this.classList.add("hidden", this.logo);
      }
      href = this.config.getDomain();
      if ((href != null) && href.indexOf("http") !== 0) {
        href = location.protocol + "//" + href;
        this.text.innerHTML = '<span>View all <a href="' + href + '" target="' + this.config.getTarget() + '">' + this.config.getDomain() + '</a> videos.';
      }
  }
};

/** 
 * @constructor 
 * @private
*/
function BrandingProxy(config) {
  BrandingProxy.__super__.constructor.call(this, config);
}


__extends(BrandingProxy, ModuleProxy);


/** @static
*/
BrandingProxy.NAME = ModuleProxy.NAME;

BrandingProxy.prototype.defaults = {
  id: null,
  title: null,
  link: null,
  logo: null,
  target: null
};

/**
 *
*/
BrandingProxy.prototype.getID = function() {
  return this.data.id;
};

BrandingProxy.prototype.setID = function(value) {
  return this.data.id = value;
};

/**
 *
*/
BrandingProxy.prototype.getTarget = function() {
  return this.data.target;
};

BrandingProxy.prototype.setTarget = function(value) {
  return this.data.target = value;
};

/**
 *
*/
BrandingProxy.prototype.getTitle = function() {
  return this.data.title;
};

BrandingProxy.prototype.setTitle = function(value) {
  return this.data.title = value;
};

/**
 *
*/
BrandingProxy.prototype.getLink = function() {
  return this.data.link;
};

BrandingProxy.prototype.setLink = function(value) {
  return this.data.link = value;
};

/**
 *
*/
BrandingProxy.prototype.getLogo = function() {
  return this.data.logo;
};

BrandingProxy.prototype.setLogo = function(value) {
  return this.data.logo = value;
};

/**
 * @enum {string}
 * @const
 * @private
*/

var FeedNotifications = {
  LOAD_FEED: "loadFeed",
  FEED_CHANGED: "feedChanged",
  FEED_LOADED: "feedLoaded"
};

/** 
 * The CaptioningPlugin class.
 *   
 * @param {Module}  app     The parent module of this plugin.
 * @param {Object}  config  The plugin's configuration object.
 * @constructor
 * @private
 * @extends {Feature}
*/
function CaptioningPlugin(app, config) {
  CaptioningPlugin.__super__.constructor.call(this, app, config);
}


__extends(CaptioningPlugin, Feature);


CaptioningPlugin.NAME = "CaptioningPlugin";

CaptioningPlugin.prototype.featureName = "captioning";

CaptioningPlugin.prototype.moduleName = "captioning";

/** @override
*/
CaptioningPlugin.prototype.createController = function() {
  this.registerCommand(Notifications.CHANGE_MEDIA, CaptioningChangeMediaCommand);
  this.registerCommand(Notifications.STARTED, CaptioningStartedCommand);
  this.registerCommand(Notifications.TIME_UPDATE, CaptioningTimeUpdateCommand);
  this.registerCommand(CaptioningNotifications.VISIBILITY_CHANGE, CaptioningVisibilityChangeCommand);
};

/** @override
*/
CaptioningPlugin.prototype.createModel = function() {
  this.registerProxy(new CaptioningProxy(this.config));
};

/** @override
*/
CaptioningPlugin.prototype.createView = function() {
  var mediator;
  mediator = new CaptioningMediator();
  this.registerMediator(mediator);
  this.registerMediator(new CaptioningHTMLMediator(mediator.viewComponent));
};

/** @override
*/
CaptioningPlugin.prototype.createAPI = function() {
  return new CaptioningAPI(this);
};

/**
*/
CaptioningPlugin.prototype.listNotificationInterests = function() {
  return [Notifications.CHANGE_MEDIA, Notifications.STARTED, Notifications.TIME_UPDATE, CaptioningNotifications.TOGGLE_SETTINGS_VISIBILITY];
};

/**
*/
CaptioningPlugin.prototype.listNotificationPublications = function() {
  var key, value;
  return CaptioningPlugin.__super__.listNotificationPublications.call(this).concat((function() {
    var _results;
    _results = [];
    for (key in CaptioningNotifications) {
      value = CaptioningNotifications[key];
      if (value !== CaptioningNotifications.TOGGLE_SETTINGS_VISIBILITY) {
        _results.push(value);
      }
    }
    return _results;
  })()).concat([Notifications.ADD_CONTROL, Notifications.REMOVE_CONTROL, UserSettingsNotifications.UPDATE_SETTINGS, Notifications.ADD_CONTROL_STATE, Notifications.REMOVE_CONTROL_STATE]);
};

/** @override
*/
CaptioningPlugin.prototype.listNotificationEvents = function() {
  return [CaptioningNotifications.VISIBILITY_CHANGE, CaptioningNotifications.ENABLED];
};


AMP.registerPlugin("captioning", "html", CaptioningPlugin);

/**
 * The FeedProxy class.
 *   
 * @constructor
 * @private
 * @extends {ModuleProxy}
 * @param {Object} config The configuration object.
*/
function FeedProxy(config) {
  FeedProxy.__super__.constructor.call(this, config);
  this.helper = new MRSSHelper();
}


__extends(FeedProxy, ModuleProxy);


FeedProxy.NAME = ModuleProxy.NAME;

FeedProxy.prototype.defaults = {
  url: null,
  data: null
};

FeedProxy.prototype.feed = null;

FeedProxy.prototype.helper = null;

FeedProxy.prototype.setURL = function(value) {
  var _this = this;
  this.data.url = value;
  this.helper.getFeed(value, function(feed) {
    _this.sendNotification(FeedNotifications.CHANGE_FEED, feed);
  }, function(error) {
    Logger.error("[AMP Feed Load Error]", value, error);
  });
  return value;
};

FeedProxy.prototype.getURL = function() {
  return this.data.url;
};

FeedProxy.prototype.setFeedData = function(value) {
  this.data.data = value;
  this.feed = this.helper.createFeed(value);
  this.sendNotification(FeedNotifications.FEED_CHANGED, this.feed);
  this.sendNotification(Notifications.DISPATCH_EVENT, new Event("loaded", value));
  return value;
};

FeedProxy.prototype.getFeedData = function() {
  return this.data.data;
};

FeedProxy.prototype.invoke = function() {
  if ((this.data.url != null) && this.data.url !== "") {
    this.sendNotification(FeedNotifications.LOAD_FEED, this.data.url);
  } else if (this.data.data != null) {
    this.sendNotification(FeedNotifications.CHANGE_FEED, this.data.data);
  }
};

/**
 * The LoadFeedCommand class.
 *   
 * @constructor
 * @private
 * @extends {puremvc.SimpleCommand}
*/
function LoadFeedCommand() {
  LoadFeedCommand.__super__.constructor.call(this);
}


__extends(LoadFeedCommand, puremvc.SimpleCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
LoadFeedCommand.prototype.execute = function(notification) {
  var feedProxy;
  this.facade.logger.debug("LoadFeedCommand", notification.getBody());
  feedProxy = this.facade.retrieveProxy(FeedProxy.NAME);
  feedProxy.setURL(notification.getBody());
};

/**
 * The ChangeFeedCommand class.
 *   
 * @constructor
 * @private
 * @extends {puremvc.SimpleCommand}
*/
function ChangeFeedCommand() {
  ChangeFeedCommand.__super__.constructor.call(this);
}


__extends(ChangeFeedCommand, puremvc.SimpleCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
ChangeFeedCommand.prototype.execute = function(notification) {
  var feedProxy;
  this.facade.logger.debug("ChangeFeedCommand", notification.getBody());
  feedProxy = this.facade.retrieveProxy(FeedProxy.NAME);
  feedProxy.setFeedData(notification.getBody());
};

/**
 * The FeedChangedCommand class.
 *   
 * @constructor
 * @private
 * @extends {puremvc.SimpleCommand}
*/
function FeedChangedCommand() {
  FeedChangedCommand.__super__.constructor.call(this);
}


__extends(FeedChangedCommand, puremvc.SimpleCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
FeedChangedCommand.prototype.execute = function(notification) {
  var feed, mediaVO;
  this.facade.logger.debug("FeedChangedCommand", notification.getBody());
  this.facade.app.sendNotification(Notifications.CHANGE_PLAY_STATE, PlayState.READY);
  feed = notification.getBody();
  mediaVO = feed.item[0];
  this.facade.app.sendNotification(Notifications.SET_MEDIA, mediaVO);
};

/**
 * The FeedInitializedCommand class.
 *   
 * @constructor
 * @private
 * @extends {puremvc.SimpleCommand}
*/
function FeedInitializedCommand() {
  FeedInitializedCommand.__super__.constructor.call(this);
}


__extends(FeedInitializedCommand, puremvc.SimpleCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
FeedInitializedCommand.prototype.execute = function(notification) {
  var feedProxy;
  this.facade.logger.debug("FeedInitializedCommand");
  feedProxy = this.facade.retrieveProxy(FeedProxy.NAME);
  feedProxy.invoke();
};

/**
 * The FeedAPI class.
 * 
 * @param         {!FeedPlugin} module  The base module this API wraps.
 * @constructor
 * @extends {PluginAPI}
*/
function FeedAPI(module) {
  var proxy;
  FeedAPI.__super__.constructor.call(this, module);
  proxy = module.retrieveProxy(FeedProxy.NAME);
  this.setURL = function(value) {
    module.sendNotification(FeedNotifications.LOAD_FEED, value);
    return value;
  };
  this.getURL = proxy.getURL.bind(proxy);
  this.setData = function(value) {
    module.sendNotification(FeedNotifications.CHANGE_FEED, value);
    return value;
  };
  this.getData = proxy.getFeedData.bind(proxy);
}


__extends(FeedAPI, PluginAPI);


/**
 * @param {string} value The url of the feed.
 * @expose
*/
FeedAPI.prototype.setURL = function(value) {};

/**
 * @return {string} The url of the feed.
 * @expose
*/
FeedAPI.prototype.getURL = function() {};

/**
 * @param {Object} value The MRSS feed object
 * @expose
*/
FeedAPI.prototype.setData = function(value) {};

/**
 * @return {Object} The MRSS feed object.
 * @expose
*/
FeedAPI.prototype.getData = function() {};

/**
 * @enum {string}
 * @const
 * @private
*/

var StatsNotifications = {
  VISIBILITY_CHANGE: "statsvisibilitychange",
  BITRATES_UPDATE: "bitratesUpdate"
};

function FeedWrapper(player, config) {
  if (config == null) {
    config = {};
  }
  FeedWrapper.__super__.constructor.call(this, player, config);
  if (config.url != null) {
    this.url = config.url;
  }
  if (config.data != null) {
    this.data = config.data;
  }
  this.player.load = function() {};
}


__extends(FeedWrapper, PluginWrapper);


FeedWrapper.NAME = "FeedWrapper";

FeedWrapper.prototype.url = null;

FeedWrapper.prototype.data = null;

FeedWrapper.prototype.updateData = true;

/** @override
*/
FeedWrapper.prototype.createFlashVars = function(flashvars) {
  if ((this.url != null) && this.url !== "") {
    flashvars.data_feed_url = escape(this.url);
  }
};

/** @override
*/
FeedWrapper.prototype.listNotificationInterests = function() {
  return FeedWrapper.__super__.listNotificationInterests.apply(this, arguments).concat([FlashNotifications.READY, FlashNotifications.FEED_LOADED]);
};

/**
*/
FeedWrapper.prototype.handleNotification = function(notification) {
  var body, name, type,
    _this = this;
  FeedWrapper.__super__.handleNotification.call(this, notification);
  name = notification.getName();
  body = notification.getBody();
  switch (name) {
    case FlashNotifications.FEED_LOADED:
      if (this.updateData === false) {
        this.updateData = true;
      } else {
        this.data = JSON.parse(body);
      }
      type = "loaded";
      body = this.data;
      this.sendNotification(FeedNotifications.FEED_CHANGED, this.data);
      break;
    case FlashNotifications.READY:
      if (this.data != null) {
        setTimeout(function() {
          _this.setData(_this.data);
        }, 25);
      } else if ((this.url != null) && this.url !== "") {
        this.sendNotification(FeedNotifications.LOAD_FEED, this.url);
      }
  }
  if (type != null) {
    this.dispatchEvent(new Event(type, body));
  }
};

/**
*/
FeedWrapper.prototype.setURL = function(value) {
  if ((value != null) && value !== "") {
    this.url = value;
    this.player.video.playFile(this.url, this.player.getAutoplay());
    this.sendNotification(FeedNotifications.LOAD_FEED, this.url);
  }
  return value;
};

FeedWrapper.prototype.getURL = function() {
  return this.url;
};

/**
*/
FeedWrapper.prototype.setData = function(value) {
  this.data = value;
  this.updateData = false;
  this.player.video.playFile(this.data, this.player.getAutoplay());
  return value;
};

FeedWrapper.prototype.getData = function() {
  return this.data;
};

/** 
 * @constructor 
 * @private
*/
function StatsProxy(config) {
  StatsProxy.__super__.constructor.call(this, config);
}


__extends(StatsProxy, ModuleProxy);


/** @static
*/
StatsProxy.NAME = ModuleProxy.NAME;

StatsProxy.prototype.defaults = {
  url: null
};

StatsProxy.prototype.hidden = true;

StatsProxy.prototype.getURL = function() {
  return this.data.url;
};

StatsProxy.prototype.setURL = function(value) {
  return this.data.url = value;
};

StatsProxy.prototype.getHidden = function() {
  return this.hidden;
};

StatsProxy.prototype.setHidden = function(value) {
  return this.hidden = value;
};

StatsProxy.prototype.invoke = function() {
  var xhr,
    _this = this;
  if (this.data.url != null) {
    return xhr = Utils.get(this.data.url, {
      onload: function() {
        if (xhr.response != null) {
          _this.sendNotification(StatsNotifications.BITRATES_UPDATE, xhr.response);
        }
      },
      onerror: function(error) {
        return _this.sendNotification(StatsNotifications.BITRATES_UPDATE, null);
      }
    });
  }
};

/**
 * The StatsMediator class.
 * 
 * @constructor
 * @private
 * @extends {PluginMediator}
 * @param {Object} viewComponent
*/
function StatsMediator() {
  StatsMediator.__super__.constructor.call(this);
}


__extends(StatsMediator, PluginMediator);


/**
 * Stats Mediator
 * 
 * @static
 * @type {string}
*/
StatsMediator.prototype.componentName = "stats";

StatsMediator.prototype.statsText = null;

StatsMediator.prototype.statsButton = null;

StatsMediator.prototype.bitrateText = null;

StatsMediator.prototype.bitrateArr = null;

/**
 * @override
*/
StatsMediator.prototype.onRegister = function() {
  var _this = this;
  this.sendNotification(Notifications.ADD_CONTROL_STATE, "stats-enabled");
  this.classList.add("hidden");
  this.statsFormat = this.create("stats-text");
  this.statsBitRate = this.create("stats-text");
  this.statsPlayBack = this.create("stats-text");
  this.statsAnalytics = this.create("stats-text");
  this.statsButton = this.create("stats-button", false);
  this.statsButton.onclick = function(event) {
    event.stopImmediatePropagation();
    _this.sendNotification(StatsNotifications.VISIBILITY_CHANGE, !_this.plugin.getHidden());
    return false;
  };
  this.sendNotification(Notifications.ADD_CONTROL, this.statsButton);
  StatsMediator.__super__.onRegister.call(this);
};

/**
 * @override
*/
StatsMediator.prototype.listNotificationInterests = function() {
  return [StatsNotifications.VISIBILITY_CHANGE, StatsNotifications.BITRATES_UPDATE];
};

/**
 * @override
*/
StatsMediator.prototype.handleNotification = function(notification) {
  var body, name;
  name = notification.getName();
  body = notification.getBody();
  switch (name) {
    case StatsNotifications.VISIBILITY_CHANGE:
      if (this.plugin.getHidden()) {
        this.classList.add("hidden");
      } else {
        this.classList.remove("hidden");
        this.statsBitRate.innerHTML = "<p><b class='" + this.classList.prefix + "stats-header'>Adaptive Bitrate Renditions</b></p><p>Loading...</p>";
        this.renderStats();
      }
      break;
    case StatsNotifications.BITRATES_UPDATE:
      if (body != null) {
        this.checkContentType(body);
      } else {
        this.statsBitRate.innerHTML = "<p><b class='" + this.classList.prefix + "stats-header'>Adaptive Bitrate Renditions</b></p><p>Not Available</p>";
      }
  }
};

/*  Render Stats UI
*/
StatsMediator.prototype.renderStats = function() {
  var analyticsVal, api, device, formatVal, isDash, playbackVal, player, urlVal, _ref, _ref1;
  try {
    player = this.facade.app;
    api = player.getAPI();
    formatVal = api.getMedia() === void 0 ? "Not Available" : api.getMedia().type;
    urlVal = api.getSrc() === "" || api.getSrc() === null ? "Not Available" : api.getSrc();
    device = Utils.getDevice();
    if (device == null) {
      device = "";
    }
    playbackVal = this.facade.app.getConfig().mode !== "" && this.facade.app.getConfig().mode !== null && this.facade.app.getConfig().mode.indexOf("html") !== -1 ? this.facade.app.parent.version + ", HTML5 Video: " + device : "Not Available";
    isDash = (_ref = this.facade.app.retrieveProxy(PlayerProxy.NAME).getActivePlaybackCore()) != null ? (_ref1 = _ref.playbackCoreName) != null ? _ref1.indexOf("dash") : void 0 : void 0;
    if (isDash > -1) {
      playbackVal += ", dash.js";
    }
    analyticsVal = this.facade.app.getAPI().getConfig().mediaanalytics.config === "" || this.facade.app.getAPI().getConfig().mediaanalytics.config === null ? "Not Available" : this.facade.app.getAPI().getConfig().mediaanalytics.config;
    this.statsFormat.innerHTML = "<p><b class='" + this.classList.prefix + "stats-header'>Stream</b></p><p>Format: " + formatVal + "</p><p>URL: " + urlVal + "</p>";
    this.statsPlayBack.innerHTML = "<p><b class='" + this.classList.prefix + "stats-header'>Playback</b></p>" + playbackVal;
    this.statsAnalytics.innerHTML = "<p><b class='" + this.classList.prefix + "stats-header'>Analytics</b></p>" + analyticsVal;
  } catch (error) {
    this.facade.logger.error("[AMP Stats Render Error]:", error);
  }
};

/*  Check ContentType for HLS or Dash
*/
/*TODO: Remove this When Dash API to get Bitrate is found
*/
StatsMediator.prototype.checkContentType = function(items) {
  var item, xhr, _i, _len, _ref,
    _this = this;
  this.bitrateArr = [];
  if (typeof items === 'object' && this.facade.app.getAPI().getMedia().type.indexOf("dash") !== -1) {
    xhr = Utils.get(items.URL, {
      onload: function(event) {
        var bitrateArray, bitrateStr, item, resStr, xml, _i, _len;
        xml = XMLUtils.parse(event.data.responseText);
        bitrateArray = xml.querySelectorAll("AdaptationSet[mimeType*='video']")[0].querySelectorAll("Representation");
        for (_i = 0, _len = bitrateArray.length; _i < _len; _i++) {
          item = bitrateArray[_i];
          bitrateStr = (parseInt(item.getAttribute('bandwidth')) / 1000).toFixed(0);
          resStr = item.getAttribute('width') + "x" + item.getAttribute('height');
          _this.bitrateArr.push({
            bitrate: bitrateStr,
            res: resStr
          });
        }
        return _this.constructBitrateText(_this.bitrateArr);
      },
      onerror: function(event) {
        return _this.facade.logger.error("[AMP Stats ERROR]", event);
      }
    });
  } else {
    _ref = items.split("#");
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      item = _ref[_i];
      if (item.indexOf("BANDWIDTH") !== -1 && item.indexOf("RESOLUTION") !== -1) {
        this.bitrateArr.push(this.parseBitrate(item));
      }
    }
    this.constructBitrateText(this.bitrateArr);
  }
};

/*  Format Bitrate HTML Text
*/
StatsMediator.prototype.constructBitrateText = function(bitrateArr) {
  var bitrateSlNo, item, _i, _len, _ref;
  this.bitrateArr = bitrateArr;
  this.bitrateText = '';
  this.bitrateArr.sort(function(a, b) {
    var aBitrate, bBitrate;
    aBitrate = parseInt(a.bitrate);
    bBitrate = parseInt(b.bitrate);
    if (aBitrate < bBitrate) {
      return -1;
    } else if (aBitrate > bBitrate) {
      return 1;
    } else {
      return 0;
    }
  });
  _ref = this.bitrateArr;
  for (bitrateSlNo = _i = 0, _len = _ref.length; _i < _len; bitrateSlNo = ++_i) {
    item = _ref[bitrateSlNo];
    this.bitrateText += "<p>" + (bitrateSlNo + 1) + ". " + item.bitrate + " kbps " + item.res + "</p>";
  }
  if (this.bitrateText === "") {
    this.bitrateText = "<p>Not Available</p>";
  }
  this.statsBitRate.innerHTML = "<p><b class='" + this.classList.prefix + "stats-header'>Adaptive Bitrate Renditions</b></p>" + this.bitrateText;
};

/*  Parse Bitrate String for HLS
*/
StatsMediator.prototype.parseBitrate = function(item) {
  var bandwidthEndIndex, bandwidthStartIndex, bandwidthStr, resolutionEndIndex, resolutionStartIndex, resolutionStr;
  bandwidthStartIndex = item.indexOf("BANDWIDTH");
  bandwidthEndIndex = item.indexOf(",", bandwidthStartIndex + 10);
  bandwidthStr = item.slice(bandwidthStartIndex + 10, bandwidthEndIndex);
  resolutionStartIndex = item.indexOf("RESOLUTION");
  resolutionEndIndex = item.indexOf(",", resolutionStartIndex + 10);
  if (resolutionEndIndex - resolutionStartIndex > 20 || resolutionEndIndex === -1) {
    resolutionEndIndex = item.indexOf("x", resolutionStartIndex + 10) + 4;
  }
  resolutionStr = item.slice(resolutionStartIndex + 11, resolutionEndIndex);
  return {
    bitrate: parseInt(bandwidthStr) / 1000,
    res: resolutionStr
  };
};

/**
 * The StatsVisibilityChangeCommand class.
 *   
 * @constructor
 * @private
 * @extends {puremvc.SimpleCommand}
*/
function StatsVisibilityChangeCommand() {
  StatsVisibilityChangeCommand.__super__.constructor.call(this);
}


__extends(StatsVisibilityChangeCommand, puremvc.SimpleCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
StatsVisibilityChangeCommand.prototype.execute = function(notification) {
  var statsProxy;
  this.facade.logger.debug("StatsVisibilityChangeCommand");
  statsProxy = this.facade.retrieveProxy(StatsProxy.NAME);
  statsProxy.setHidden(notification.getBody());
  statsProxy.setURL("" + (this.facade.app.parent.getSrc()));
  if (notification.getBody() === false) {
    statsProxy.invoke();
  }
};

/** 
 * The BrandingPlugin class.
 *   
 * @param {Module}  app     The parent module of this plugin.
 * @param {Object}  config  The plugin's configuration object.
 * @constructor
 * @private
 * @extends {Plugin}
*/
function BrandingPlugin(app, config) {
  BrandingPlugin.__super__.constructor.call(this, app, config);
}


__extends(BrandingPlugin, Plugin);


BrandingPlugin.NAME = "BrandingPlugin";

BrandingPlugin.prototype.moduleName = "branding";

/** @override
*/
BrandingPlugin.prototype.createModel = function() {
  this.registerProxy(new BrandingProxy(this.config));
};

BrandingPlugin.prototype.createView = function() {
  this.registerMediator(new BrandingMediator());
};

/** @override
*/
BrandingPlugin.prototype.onRegister = function() {
  if (this.config.id != null) {
    this.sendNotification(Notifications.ADD_APPLICATION_STATE, "branding-" + this.config.id);
  }
  BrandingPlugin.__super__.onRegister.call(this);
};

/**
*/
BrandingPlugin.prototype.listNotificationInterests = function() {
  return [Notifications.READY];
};


AMP.registerPlugin("branding", "html", BrandingPlugin);
AMP.registerPlugin("branding", "flash", BrandingWrapper);
AMP.registerPlugin("branding", "external", BrandingPlugin);

/**
 * The StatsAPI class.
 * 
 * @param         {!StatsPlugin} module  The base module this API wraps.
 * @constructor
 * @extends {PluginAPI}
*/
function StatsAPI(module) {
  var proxy;
  StatsAPI.__super__.constructor.call(this, module);
  proxy = module.retrieveProxy(StatsProxy.NAME);
  this.getHidden = proxy.getHidden.bind(proxy);
  this.setHidden = function(value) {
    module.sendNotification(StatsNotifications.VISIBILITY_CHANGE, value);
    return value;
  };
}


__extends(StatsAPI, PluginAPI);


/**
 * @return   {boolean}  A boolean indicating whether or not the stats are hidden.
 * @expose
*/
StatsAPI.prototype.getHidden = function() {};

/**
 * 
 * @param   {boolean} value A boolean indicating whether or not the stats are hidden.
 * @expose
*/
StatsAPI.prototype.setHidden = function(value) {};

/**
 * DASHPlaybackProxy constructor.
 * 
 * @constructor
 * @private
 * @extends {PlaybackCoreProxy}
*/
function DASHPlaybackProxy(data) {
  DASHPlaybackProxy.__super__.constructor.call(this, data.types);
  this.buffer = data.buffer;
}


__extends(DASHPlaybackProxy, PlaybackCoreProxy);


DASHPlaybackProxy.prototype.initialized = true;

DASHPlaybackProxy.prototype.playbackCoreName = "dash";

DASHPlaybackProxy.prototype.context = null;

DASHPlaybackProxy.prototype.player = null;

DASHPlaybackProxy.prototype.buffer = null;

DASHPlaybackProxy.prototype.isDVR = false;

/** @override
*/
DASHPlaybackProxy.prototype.resumecomplete = function() {
  this.applyHandlers(true);
  this.play();
};

/** @override
*/
DASHPlaybackProxy.prototype.load = function() {
  var video,
    _this = this;
  this.getVideo().addEventListener("canplay", this.resumeHandlers.canplay);
  video = this.facade.getVideo();
  this.context = new Dash.di.DashContext();
  this.player = new MediaPlayer(this.context);
  if (this.buffer != null) {
    MediaPlayer.dependencies.BufferExtensions.DEFAULT_MIN_BUFFER_TIME = this.buffer;
  }
  this.player.startup();
  this.player.addEventListener("error", this.onError.bind(this));
  this.player.debug.setLogToBrowserConsole(this.facade.logger.enabled);
  this.player.attachView(video);
  this.player.setAutoPlay(false);
  this.player.attachSource(this.getSrc());
  this.isDVR = this.facade.retrieveProxy(MediaProxy.NAME).getTemporalType() === "dvr";
  if (this.isDVR === true) {
    video.addEventListener("timeupdate", function(event) {
      var duration, time;
      try {
        time = _this.player.time();
        duration = _this.player.duration();
        _this.sendNotification(Notifications.DISPLAY_TIME, {
          value: time / duration,
          currentTime: time,
          duration: duration
        });
      } catch (error) {
        _this.facade.logger.error(error);
      }
    });
  }
};

/**
*/
DASHPlaybackProxy.prototype.seek = function(value) {
  DASHPlaybackProxy.__super__.seek.call(this, this.isDVR === true ? this.player.getDVRSeekOffset(value) : value);
};

/**
*/
DASHPlaybackProxy.prototype.getDuration = function() {
  if (this.isDVR === true) {
    return this.player.duration();
  } else {
    return DASHPlaybackProxy.__super__.getDuration.call(this);
  }
};

/**
*/
DASHPlaybackProxy.prototype.getStats = function() {
  return {};
};

/**
*/
DASHPlaybackProxy.prototype.onError = function(event) {
  this.facade.logger.error("DASH JS Playback Error:", event);
};

/** 
 * The FeedPlugin class.
 *   
 * @param {Module}  app     The parent module of this plugin.
 * @param {Object}  config  The plugin's configuration object.
 * @constructor
 * @private
 * @extends {Plugin}
*/
function FeedPlugin(app, config) {
  FeedPlugin.__super__.constructor.call(this, app, config);
}


__extends(FeedPlugin, Plugin);


FeedPlugin.NAME = "FeedPlugin";

FeedPlugin.prototype.moduleName = "feed";

/** @override
*/
FeedPlugin.prototype.createModel = function() {
  this.registerProxy(new FeedProxy(this.config));
};

/** @override
*/
FeedPlugin.prototype.createController = function() {
  FeedPlugin.__super__.createController.call(this);
  this.registerCommand(Notifications.READY, FeedInitializedCommand);
  this.registerCommand(FeedNotifications.LOAD_FEED, LoadFeedCommand);
  this.registerCommand(FeedNotifications.CHANGE_FEED, ChangeFeedCommand);
  this.registerCommand(FeedNotifications.FEED_CHANGED, FeedChangedCommand);
};

/** @override
*/
FeedPlugin.prototype.createAPI = function() {
  return new FeedAPI(this);
};

/** @override
*/
FeedPlugin.prototype.listNotificationInterests = function() {
  return FeedPlugin.__super__.listNotificationInterests.call(this).concat([Notifications.READY]);
};

/** @override
*/
FeedPlugin.prototype.listNotificationPublications = function() {
  var key, value;
  return FeedPlugin.__super__.listNotificationPublications.call(this).concat((function() {
    var _results;
    _results = [];
    for (key in FeedNotifications) {
      value = FeedNotifications[key];
      _results.push(value);
    }
    return _results;
  })());
};


AMP.registerPlugin("feed", "html", FeedPlugin);
AMP.registerPlugin("feed", "flash", FeedWrapper);

/**
 * The DASHChangeDisplayStateCommand class.
 *   
 * @constructor
 * @private
 * @extends {puremvc.SimpleCommand}
*/
function DASHChangeDisplayStateCommand() {
  DASHChangeDisplayStateCommand.__super__.constructor.call(this);
}


__extends(DASHChangeDisplayStateCommand, puremvc.SimpleCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
DASHChangeDisplayStateCommand.prototype.execute = function(notification) {
  var core, fullscreen, playback, proxy, state, target,
    _this = this;
  state = notification.getBody();
  playback = this.facade.retrieveProxy(PlaybackProxy.NAME);
  core = this.facade.getVideo();
  if (!(core != null) || !core.webkitSupportsFullscreen) {
    return;
  }
  proxy = this.facade.retrieveProxy(ApplicationStateProxy.NAME);
  proxy.setDisplayState(state);
  fullscreen = {};
  target = this.facade.viewComponent;
  if (target.requestFullscreen != null) {
    fullscreen.enter = function() {
      return target.requestFullscreen();
    };
    fullscreen.exit = function() {
      return document.cancelFullscreen();
    };
    fullscreen.event = "onfullscreenchange";
    fullscreen.element = "fullscreenElement";
  } else if (target.webkitRequestFullScreen != null) {
    fullscreen.enter = function() {
      return target.webkitRequestFullScreen();
    };
    fullscreen.exit = function() {
      return document.webkitCancelFullScreen();
    };
    fullscreen.event = "onwebkitfullscreenchange";
    fullscreen.element = "webkitFullscreenElement";
  } else if (target.mozRequestFullScreen != null) {
    fullscreen.enter = function() {
      return target.mozRequestFullscreen();
    };
    fullscreen.exit = function() {
      return document.mozCancelFullScreen();
    };
    fullscreen.event = "onmozfullscreenchange";
    fullscreen.element = "mozFullscreenElement";
  } else if (target.msRequestFullScreen != null) {
    fullscreen.enter = function() {
      return target.msRequestFullscreen();
    };
    fullscreen.exit = function() {
      return document.msCancelFullScreen();
    };
    fullscreen.event = "onmozfullscreenchange";
    fullscreen.element = "mozFullscreenElement";
  }
  if (state === DisplayState.FULL_SCREEN) {
    fullscreen.enter();
    if (fullscreen.event != null) {
      core[fullscreen.event] = function(event) {
        if (!(document[fullscreen.element] != null)) {
          return _this.sendNotification(Notifications.CHANGE_DISPLAY_STATE, DisplayState.NORMAL);
        }
      };
    }
  } else if (state === DisplayState.NORMAL) {
    fullscreen.exit();
    core[fullscreen.event] = null;
  }
  this.facade.dispatchEvent(new Event("fullscreenchange", state === DisplayState.FULL_SCREEN));
};

/** 
 * The DASHProxy class.
 *   
 * @param {Object}  config  The plugin configuration object.
 * @constructor
 * @private
 * @extends {PluginProxy}
*/
function DASHProxy(config) {
  DASHProxy.__super__.constructor.call(this, config);
}


__extends(DASHProxy, PluginProxy);


/** @static
*/
DASHProxy.NAME = ModuleProxy.NAME;

DASHProxy.prototype.defaults = {
  plugin: null,
  types: ["application/dash+xml"],
  buffer: null
};

DASHProxy.prototype.initialize = function() {
  var core, player;
  window.MediaSource = window.MediaSource || window.WebKitMediaSource;
  if (window.MediaSource != null) {
    this.sendNotification(Notifications.INITIALIZED);
    core = new DASHPlaybackProxy(this.getConfigurationData());
    player = this.facade.app.retrieveProxy(PlayerProxy.NAME);
    player.registerPlaybackCore(core);
  }
};

/**
 * @enum {string}
 * @const
 * @private
*/

var ChromeCastConstants = {
  CHANNEL_ID: "urn:x-cast:com.akamai.amp.cast",
  APPLICATION_ID: "44B6E47D",
  SUPPORTED_TYPES: [Utils.mimeTypes.m3u8, Utils.mimeTypes.mp4, Utils.mimeTypes.mpd, Utils.mimeTypes.ism, Utils.mimeTypes.webm, Utils.mimeTypes.mp3]
};

/** 
 * The StatsPlugin class.
 *   
 * @param {Module}  app     The parent module of this plugin.
 * @param {Object}  config  The plugin's configuration object.
 * @constructor
 * @private
 * @extends {Plugin}
*/
function StatsPlugin(app, config) {
  StatsPlugin.__super__.constructor.call(this, app, config);
}


__extends(StatsPlugin, Plugin);


StatsPlugin.NAME = "StatsPlugin";

StatsPlugin.prototype.moduleName = "stats";

/** @override
*/
StatsPlugin.prototype.createModel = function() {
  this.registerProxy(new StatsProxy(this.config));
};

/** @override
*/
StatsPlugin.prototype.createController = function() {
  this.registerCommand(StatsNotifications.VISIBILITY_CHANGE, StatsVisibilityChangeCommand);
};

/** @override
*/
StatsPlugin.prototype.createView = function() {
  this.registerMediator(new StatsMediator());
};

/** @override
*/
StatsPlugin.prototype.createAPI = function() {
  return new StatsAPI(this);
};

/** @override
*/
StatsPlugin.prototype.listNotificationPublications = function() {
  return StatsPlugin.__super__.listNotificationPublications.call(this).concat([Notifications.ADD_CONTROL, Notifications.REMOVE_CONTROL, Notifications.ADD_CONTROL_STATE, Notifications.REMOVE_CONTROL_STATE, StatsNotifications.VISIBILITY_CHANGE]);
};


AMP.registerPlugin("stats", "html", StatsPlugin);

/**
 * The ChromeCastLaunchCommand class.
 *   
 * @constructor
 * @private
 * @extends {PluginCommand}
*/
function ChromeCastLaunchCommand() {
  ChromeCastLaunchCommand.__super__.constructor.call(this);
}


__extends(ChromeCastLaunchCommand, PluginCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
ChromeCastLaunchCommand.prototype.execute = function(notification) {
  this.config.launch();
};

/**
 * The ChromeCastFeedChangedCommand class.
 *   
 * @constructor
 * @private
 * @extends {PluginCommand}
*/
function ChromeCastFeedChangedCommand() {
  ChromeCastFeedChangedCommand.__super__.constructor.call(this);
}


__extends(ChromeCastFeedChangedCommand, PluginCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
ChromeCastFeedChangedCommand.prototype.execute = function(notification) {
  this.config.setFeed(notification.getBody());
};

/**
 * The ChromeCastCaptioningVisibilityChangeCommand class.
 *   
 * @constructor
 * @private
 * @extends {PluginCommand}
*/
function ChromeCastCaptioningVisibilityChangeCommand() {
  ChromeCastCaptioningVisibilityChangeCommand.__super__.constructor.call(this);
}


__extends(ChromeCastCaptioningVisibilityChangeCommand, PluginCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
ChromeCastCaptioningVisibilityChangeCommand.prototype.execute = function(notification) {
  this.config.send({
    type: "captioning.visibilitychange",
    details: {
      visibility: notification.getBody()
    }
  });
};

/**
 * The ChromeCastCaptioningSettingsChangeCommand class.
 *   
 * @constructor
 * @private
 * @extends {PluginCommand}
*/
function ChromeCastCaptioningSettingsChangeCommand() {
  ChromeCastCaptioningSettingsChangeCommand.__super__.constructor.call(this);
}


__extends(ChromeCastCaptioningSettingsChangeCommand, PluginCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
ChromeCastCaptioningSettingsChangeCommand.prototype.execute = function(notification) {
  this.config.send({
    type: "captioning.settingschange",
    details: notification.getBody()
  });
};

/**
 * The ChromeCastReceiverReadyCommand class.
 *   
 * @constructor
 * @private
 * @extends {PluginCommand}
*/
function ChromeCastReceiverReadyCommand() {
  ChromeCastReceiverReadyCommand.__super__.constructor.call(this);
}


__extends(ChromeCastReceiverReadyCommand, PluginCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
ChromeCastReceiverReadyCommand.prototype.execute = function(notification) {
  this.facade.logger.debug("ChromeCastReceiverReadyCommand");
  this.facade.app.getViewComponent().hidden = false;
  this.plugin.ready();
};

/**
 * ChromeCastPlaybackProxy constructor.
 * 
 * @constructor
 * @private
 * @extends {PlaybackCoreProxy}
*/
function ChromeCastPlaybackProxy(types) {
  ChromeCastPlaybackProxy.__super__.constructor.call(this, types);
}


__extends(ChromeCastPlaybackProxy, PlaybackCoreProxy);


ChromeCastPlaybackProxy.prototype.initialized = true;

ChromeCastPlaybackProxy.prototype.player = null;

ChromeCastPlaybackProxy.prototype.host = null;

ChromeCastPlaybackProxy.prototype.protocol = null;

ChromeCastPlaybackProxy.prototype.playbackCoreName = "chromecast";

ChromeCastPlaybackProxy.prototype.unload = function() {
  if (this.player != null) {
    this.player.unload();
    this.player = null;
  }
};

/** @override
*/
ChromeCastPlaybackProxy.prototype.load = function() {
  var initStart, mediaProxy, type, types, video,
    _this = this;
  this.data.loading = true;
  this.playWhenLoaded = false;
  this.unload();
  video = this.facade.getVideo();
  video.addEventListener("canplay", this.resumeHandlers.canplay);
  if (video.src != null) {
    video.src = null;
  }
  initStart = 0;
  if (Logger.enabled === true) {
    cast.player.api.setLoggerLevel(cast.player.api.LoggerLevel.DEBUG);
  }
  this.host = new cast.player.api.Host({
    'mediaElement': video,
    'url': this.getSrc()
  });
  this.host.onError = function(errorCode) {
    _this.facade.logger.error("Google Media Player Fatal Error - " + errorCode);
    _this.player.unload();
  };
  mediaProxy = this.facade.retrieveProxy(MediaProxy.NAME);
  type = mediaProxy.getType();
  types = Utils.mimeTypes;
  switch (type) {
    case types.m3u8:
      this.protocol = cast.player.api.CreateHlsStreamingProtocol(this.host);
      break;
    case types.mpd:
      this.protocol = cast.player.api.CreateDashStreamingProtocol(this.host);
      break;
    case types.ism:
      this.protocol = cast.player.api.CreateSmoothStreamingProtocol(this.host);
  }
  if (this.protocol != null) {
    this.player = new cast.player.api.Player(this.host);
    this.player.load(this.protocol, initStart);
    this.applyHandlers(true);
  } else {
    this.facade.logger.error("Google Media Player Error: Could not create protocol");
  }
};

/** 
 * The ChromeCastPlayer class.
 *   
 * @param {Object}  player  The player instance
 * @constructor
 * @private
*/
function ChromeCastPlayer(proxy, player) {
  this.proxy = proxy;
  this.callbackMap = {};
  this.handlerMap = {};
  this.state = cast.receiver.media.PlayerState.IDLE;
  this.registerPlayer(player);
}

ChromeCastPlayer.prototype.proxy = null;

ChromeCastPlayer.prototype.player = null;

ChromeCastPlayer.prototype.callbackMap = null;

ChromeCastPlayer.prototype.handlerMap = null;

ChromeCastPlayer.prototype.state = null;

/**
*/
ChromeCastPlayer.prototype.registerPlayer = function(player) {
  this.player = player;
  this.registerHandler("playing", this.setState.bind(this, cast.receiver.media.PlayerState.PLAYING));
  this.registerHandler("pause", this.setState.bind(this, cast.receiver.media.PlayerState.PAUSED));
  this.registerHandler("waiting", this.setState.bind(this, cast.receiver.media.PlayerState.BUFFERING));
};

/**
*/
ChromeCastPlayer.prototype.registerHandler = function(type, handler) {
  this.handlerMap[type] = handler;
  this.player.addEventListener(type, handler);
};

/**
*/
ChromeCastPlayer.prototype.removeHandler = function(type) {
  this.player.removeEventListener(type, this.handlerMap[type]);
  this.handlerMap[type] = null;
  delete this.handlerMap[type];
};

/**
*/
ChromeCastPlayer.prototype.registerCallback = function(type, callback) {
  this.callbackMap[type] = callback;
  this.player.addEventListener(type, callback);
};

/**
*/
ChromeCastPlayer.prototype.unregisterCallback = function(type) {
  this.player.removeEventListener(type, this.callbackMap[type]);
  this.callbackMap[type] = null;
  delete this.callbackMap[type];
};

/**
*/
ChromeCastPlayer.prototype.setState = function(state) {
  if (state === this.state) {
    return;
  }
  this.state = state;
  this.proxy.mediaManager.broadcastStatus(true);
};

/**
 * Registers an API that the player should call when there is an error.
 * 
 * @param {function(Object)} errorCallback
 *    The callback method called when the player has an error.
*/
ChromeCastPlayer.prototype.registerErrorCallback = function(errorCallback) {
  this.registerCallback("error", errorCallback);
};

/**
 * Registers an API that the player should call when the media has ended.
 * 
 * @param {function()} endedCallback
 *    The callback method called when the player has ended.
*/
ChromeCastPlayer.prototype.registerEndedCallback = function(endedCallback) {
  this.registerCallback("ended", endedCallback);
};

/**
 * Registers an API that the player should call when load is complete.
 * 
 * @param {function()} loadCallback
 *    The callback method called when the player has completed load succesfully.
*/
ChromeCastPlayer.prototype.registerLoadCallback = function(loadCallback) {
  this.registerCallback("loadedmetadata", loadCallback);
};

/**
 * Called to unregister for error callbacks.
*/
ChromeCastPlayer.prototype.unregisterErrorCallback = function() {
  this.unregisterCallback("error");
};

/**
 * Called to unregister for ended callbacks.
*/
ChromeCastPlayer.prototype.unregisterEndedCallback = function() {
  this.unregisterCallback("ended");
};

/**
 * Called to unregister for load callbacks.
*/
ChromeCastPlayer.prototype.unregisterLoadCallback = function() {
  this.unregisterCallback("loadedmetadata");
};

/**
 * Loads content to be played.
 * 
 * @param {string} contentId
 *    The content ID. Should be treated as an opaque string.
 * 
 * @param {boolean} autoplay
 *    Whether the content should play after load.
 * 
 * @param {number} opt_time
 *    The expected current time after load (in seconds). Optional.
 * 
 * @param {cast.receiver.media.TracksInfo} opt_tracksInfo
 *    The tracks information. Optional.
*/
ChromeCastPlayer.prototype.load = function(contentId, autoplay, opt_time, opt_tracksInfo) {
  var customData, feed, info, key, media, value, _ref;
  info = this.proxy.mediaManager.getMediaInformation();
  customData = info.customData;
  if (((customData != null ? customData.feed : void 0) != null) && (this.player.feed != null)) {
    feed = customData.feed;
    this.registerHandler("mediachange", this.mediachangeHandler.bind(this));
    if (feed.data != null) {
      this.player.feed.setData(feed.data);
    } else if (feed.url != null) {
      this.player.feed.setURL(feed.url);
    }
  } else {
    media = {
      src: contentId,
      type: info.contentType,
      title: info.metadata.title,
      poster: info.metadata.image,
      description: info.metadata.subtitle,
      pubDate: new Date(info.releaseDate),
      metadata: customData,
      duration: info.duration,
      startTime: opt_time || 0,
      autoplay: autoplay
    };
    if ((customData != null ? customData.media : void 0) != null) {
      _ref = customData.media;
      for (key in _ref) {
        value = _ref[key];
        if (!(media[key] != null)) {
          media[key] = value;
        }
      }
    }
    this.player.setMedia(media);
    this.setState(cast.receiver.media.PlayerState.BUFFERING);
  }
};

/**
*/
ChromeCastPlayer.prototype.mediachangeHandler = function(event) {
  var media, mediaInfo;
  this.removeHandler("mediachange");
  media = this.player.getMedia();
  mediaInfo = new cast.receiver.media.MediaInformation();
  mediaInfo.contentId = media.src;
  mediaInfo.contentType = media.type;
  mediaInfo.customData = media.metadata;
  mediaInfo.duration = media.duration;
  mediaInfo.metadata = {
    title: media.title,
    subtitle: media.description,
    image: media.poster,
    releaseDate: media.pubDate.toISOString()
  };
  this.proxy.mediaManager.setMediaInformation(mediaInfo, true);
};

/**
 * Resets the player.
*/
ChromeCastPlayer.prototype.reset = function() {};

/**
 * Starts playback.
*/
ChromeCastPlayer.prototype.play = function() {
  this.player.play();
};

/**
 * Sets playback to start at a new time position.
 * 
 * @param {number} time
 *    The expected current time after seek (in seconds).
 * 
 * @param {cast.receiver.media.SeekResumeState} opt_resumeState
 *    The expected state after seek. Optional.
*/
ChromeCastPlayer.prototype.seek = function(time, opt_resumeState) {
  this.player.setCurrentTime(time);
  switch (opt_resumeState) {
    case cast.receiver.media.SeekResumeState.PLAYBACK_PAUSE:
      this.player.pause();
      break;
    case cast.receiver.media.SeekResumeState.PLAYBACK_START:
      this.player.play();
      break;
  }
};

/**
 * Pauses playback.
*/
ChromeCastPlayer.prototype.pause = function() {
  this.player.pause();
};

/**
 * Provides the state of the player.
 * 
 * @return {cast.receiver.media.PlayerState} 
 *    The current state of the player
*/
ChromeCastPlayer.prototype.getState = function() {
  return this.state;
};

/**
 * Provides the current time of the media in seconds.
 * 
 * @return {number}
 *    The current time of the video, in seconds.
*/
ChromeCastPlayer.prototype.getCurrentTimeSec = function() {
  return this.player.getCurrentTime();
};

/**
 * Provides the duration of the media in seconds.
 * 
 * @return {number}
 *    Duration of the video, in seconds.
*/
ChromeCastPlayer.prototype.getDurationSec = function() {
  return this.player.getDuration();
};

/**
 * Provides the stream volume.
 * 
 * @return {cast.receiver.media.Volume}
 *    The media volume
*/
ChromeCastPlayer.prototype.getVolume = function() {
  var volume;
  volume = cast.receiver.media.Volume;
  volume.level = this.player.getVolume();
  volume.muted = this.player.getMuted();
  return volume;
};

/**
 * Sets the stream volume.
 * 
 * @param {cast.receiver.media.Volume} volume 
 *    New volume
*/
ChromeCastPlayer.prototype.setVolume = function(volume) {
  if (volume.level != null) {
    this.player.setVolume(volume.level);
  }
  if (volume.muted === true) {
    this.player.setMuted(true);
  } else {
    if (this.player.getMuted() === true) {
      this.player.setMuted(false);
    }
  }
};

/**
 * Allows to edit the tracks information (active tracks and style).
 * 
 * @param {cast.receiver.media.TracksInfo} data
 *    The tracks information. The tracks definition can not change so 
 *    the tracks field will be undefined (and should be ignored).
*/
ChromeCastPlayer.prototype.editTracksInfo = function(data) {};

/**
 * The ChromeCastReceiverMediator class.
 * 
 * @constructor
 * @private
 * @extends {PluginMediator}
*/
function ChromeCastReceiverMediator() {
  ChromeCastReceiverMediator.__super__.constructor.call(this);
}


__extends(ChromeCastReceiverMediator, PluginMediator);


/**
 * @override
*/
ChromeCastReceiverMediator.prototype.onRegister = function() {
  this.sendNotification(Notifications.ADD_APPLICATION_STATE, "chromecast-receiver");
  ChromeCastReceiverMediator.__super__.onRegister.call(this);
};

/**
 * The ChromeCastSenderMediator class.
 * 
 * @constructor
 * @private
 * @extends {PluginMediator}
*/
function ChromeCastSenderMediator() {
  ChromeCastSenderMediator.__super__.constructor.call(this);
}


__extends(ChromeCastSenderMediator, PluginMediator);


ChromeCastSenderMediator.prototype.componentName = "chromecast";

ChromeCastSenderMediator.prototype.controls = null;

/**
 * @override
*/
ChromeCastSenderMediator.prototype.onRegister = function() {
  this.controls = new ChromeCastControlsMediator();
  ChromeCastSenderMediator.__super__.onRegister.call(this);
};

/**
 * @override
*/
ChromeCastSenderMediator.prototype.registerOverlay = function() {};

/**
 * @override
*/
ChromeCastSenderMediator.prototype.listNotificationInterests = function() {
  return [Notifications.PLAYBACK_TARGET_CHANGE, Notifications.CHANGE_PLAY_STATE];
};

/**
 * @override
*/
ChromeCastSenderMediator.prototype.handleNotification = function(notification) {
  var body, name, target;
  name = notification.getName();
  body = notification.getBody();
  switch (name) {
    case Notifications.PLAYBACK_TARGET_CHANGE:
      target = body.target;
      if (target === "chromecast") {
        this.facade.registerMediator(this.controls);
      } else {
        this.facade.removeMediator(this.controls.getMediatorName());
      }
      break;
    case Notifications.CHANGE_PLAY_STATE:
      this.controls.setState(body);
  }
};

/**
 * The ChromeCastSenderMediator class.
 * 
 * @constructor
 * @extends {ChromeCastSenderMediator}
 * @private
*/
function ChromeCastHTMLSenderMediator() {
  ChromeCastHTMLSenderMediator.__super__.constructor.call(this);
}


__extends(ChromeCastHTMLSenderMediator, ChromeCastSenderMediator);


ChromeCastHTMLSenderMediator.prototype.chromeCastButton = null;

/**
 * @override
*/
ChromeCastHTMLSenderMediator.prototype.onRegister = function() {
  this.chromeCastButton = new ChromeCastButtonMediator();
  this.facade.registerMediator(this.chromeCastButton);
  ChromeCastHTMLSenderMediator.__super__.onRegister.call(this);
};

/**
 * @override
*/
ChromeCastHTMLSenderMediator.prototype.listNotificationInterests = function() {
  return ChromeCastHTMLSenderMediator.__super__.listNotificationInterests.call(this).concat([ChromeCastNotifications.AVAILABILITY_CHANGE]);
};

/**
 * @override
*/
ChromeCastHTMLSenderMediator.prototype.handleNotification = function(notification) {
  var body, name;
  ChromeCastHTMLSenderMediator.__super__.handleNotification.call(this, notification);
  name = notification.getName();
  body = notification.getBody();
  switch (name) {
    case ChromeCastNotifications.AVAILABILITY_CHANGE:
      if (body === true) {
        this.sendNotification(Notifications.ADD_CONTROL_STATE, "chromecast");
        this.facade.app.sendNotification(Notifications.ADD_CONTROL, this.chromeCastButton.getViewComponent());
      } else {
        this.sendNotification(Notifications.REMOVE_CONTROL_STATE, "chromecast");
        this.facade.app.sendNotification(Notifications.REMOVE_CONTROL, this.chromeCastButton.getViewComponent());
      }
  }
};

/**
 * The ChromeCastBreakStartCommand class.
 *   
 * @constructor
 * @private
 * @extends {PluginCommand}
*/
function ChromeCastBreakStartCommand() {
  ChromeCastBreakStartCommand.__super__.constructor.call(this);
}


__extends(ChromeCastBreakStartCommand, PluginCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
ChromeCastBreakStartCommand.prototype.execute = function(notification) {
  var playbackCore;
  this.facade.logger.debug("ChromeCastBreakStartCommand");
  playbackCore = this.facade.app.retrieveProxy(PlayerProxy.NAME).getActivePlaybackCore();
  if (playbackCore.getPlaybackCoreName() === "chromecast") {
    playbackCore.unload();
    playbackCore.src = null;
  }
};

/** 
 * The ChromeCastReceiverProxy class.
 *   
 * @param {Object}  config  The plugin configuration object.
 * @constructor
 * @private
 * @extends {PluginProxy}
*/
function ChromeCastReceiverProxy(config) {
  this.messageBus = config.messageBus || ChromeCastConstants.CHANNEL_ID;
  ChromeCastReceiverProxy.__super__.constructor.call(this, config.receiver);
}


__extends(ChromeCastReceiverProxy, PluginProxy);


/** @static
*/
ChromeCastReceiverProxy.NAME = ModuleProxy.NAME;

ChromeCastReceiverProxy.prototype.defaults = {
  plugin: null,
  mpl: null,
  types: ["application/x-mpegURL", "application/dash+xml", "application/vnd.ms-sstr+xml"]
};

ChromeCastReceiverProxy.prototype.messageBus = null;

ChromeCastReceiverProxy.prototype.castReceiverManager = null;

ChromeCastReceiverProxy.prototype.castMessageBus = null;

ChromeCastReceiverProxy.prototype.castChannel = null;

ChromeCastReceiverProxy.prototype.startTime = 0;

ChromeCastReceiverProxy.prototype.currentTime = 0;

ChromeCastReceiverProxy.prototype.boundHandler = null;

ChromeCastReceiverProxy.prototype.amp = null;

ChromeCastReceiverProxy.prototype.mediaManager = null;

ChromeCastReceiverProxy.prototype.mediaManagerHandlers = null;

ChromeCastReceiverProxy.prototype.playbackCore = null;

/** @override
*/
ChromeCastReceiverProxy.prototype.load = function(loaded) {
  var script,
    _this = this;
  script = this.getScript();
  if (!((typeof cast !== "undefined" && cast !== null ? cast.receiver : void 0) != null)) {
    if ((script != null) && script !== "") {
      Utils.loadAMPScript(script, function() {
        _this.loadMPL(loaded);
      });
    } else {
      this.loadComplete(false, loaded);
    }
  } else {
    this.loadMPL(loaded);
  }
};

ChromeCastReceiverProxy.prototype.loadMPL = function(loaded) {
  var mpl,
    _this = this;
  mpl = this.getConfigurationData().mpl;
  if (!((typeof cast !== "undefined" && cast !== null ? cast.player : void 0) != null)) {
    if ((mpl != null) && mpl !== "") {
      Utils.loadAMPScript(mpl, function() {
        _this.loadComplete(true, loaded);
      });
    } else {
      this.loadComplete(false, loaded);
    }
  } else {
    this.loadComplete(true, loaded);
  }
};

ChromeCastReceiverProxy.prototype.loadComplete = function(success, loaded) {
  this.loaded = success;
  if (typeof loaded === "function") {
    loaded(success);
  }
};

/** @override
*/
ChromeCastReceiverProxy.prototype.getLoaded = function() {
  return this.loaded || (((typeof cast !== "undefined" && cast !== null ? cast.receiver : void 0) != null) && ((typeof cast !== "undefined" && cast !== null ? cast.player : void 0) != null));
};

ChromeCastReceiverProxy.prototype.initialize = function() {
  var core, player;
  this.sendNotification(Notifications.INITIALIZED);
  core = new ChromeCastPlaybackProxy(this.getConfigurationData().types);
  player = this.facade.app.retrieveProxy(PlayerProxy.NAME);
  player.registerPlaybackCore(core);
};

ChromeCastReceiverProxy.prototype.ready = function() {
  this.castReceiverManager = cast.receiver.CastReceiverManager.getInstance();
  this.castReceiverManager.onReady = this.castReceiverManager.onSystemVolumeChanged = this.castReceiverManager.onVisibilityChanged = this.logEvent.bind(this);
  this.castReceiverManager.onSenderConnected = this.onSenderConnected.bind(this);
  this.castReceiverManager.onSenderDisconnected = this.onSenderDisconnected.bind(this);
  this.amp = this.facade.app.parent;
  this.mediaManager = new cast.receiver.MediaManager(this.createPlayer(this.amp));
  this.castMessageBus = this.castReceiverManager.getCastMessageBus(this.messageBus, cast.receiver.CastMessageBus.MessageType.JSON);
  this.castReceiverManager.start();
};

ChromeCastReceiverProxy.prototype.createPlayer = function(player) {
  return new ChromeCastPlayer(this, player);
};

ChromeCastReceiverProxy.prototype.logEvent = function(message, data) {
  if (!(message != null)) {
    message = data.type || "";
  } else if (!(data != null)) {
    data = message.data;
    message = data.type;
  }
  this.facade.logger.log("[CHROMECAST] ", message, data);
};

ChromeCastReceiverProxy.prototype.onSenderConnected = function(event) {
  var senderID;
  this.logEvent("senderconnected", event);
  senderID = this.castReceiverManager.getSenders()[0];
  this.castChannel = this.castMessageBus.getCastChannel(senderID);
  this.castChannel.onMessage = this.onMessage.bind(this);
  this.castChannel.onClose = this.onClose.bind(this);
  this.amp.addEventListener("playstatechange", this.eventHandler.bind(this));
  this.amp.addEventListener("timeupdate", this.timeupdateHandler.bind(this));
  this.amp.addEventListener("durationchange", this.durationchangeHandler.bind(this));
  this.amp.addEventListener("seeking", this.eventHandler.bind(this));
  this.amp.addEventListener("seeked", this.eventHandler.bind(this));
  if (this.amp.ads != null) {
    this["amp"].ads.addEventListener("breakstart", this.dispatchEvent.bind(this, "ads"));
    this["amp"].ads.addEventListener("breakend", this.dispatchEvent.bind(this, "ads"));
    this["amp"].ads.addEventListener("started", this.dispatchEvent.bind(this, "ads"));
    this["amp"].ads.addEventListener("ended", this.dispatchEvent.bind(this, "ads"));
    this["amp"].ads.addEventListener("companion", this.dispatchEvent.bind(this, "ads"));
  }
  setTimeout(this.sendNotification.bind(this, Notifications.DISPATCH_EVENT, new Event("senderconnected")), 0);
};

ChromeCastReceiverProxy.prototype.onSenderDisconnected = function(event) {
  this.logEvent("sender disconnected", event);
  if (this.castReceiverManager.getSenders().length === 0 && event.reason === cast.receiver.system.DisconnectReason.REQUESTED_BY_SENDER) {
    window.close();
  }
};

ChromeCastReceiverProxy.prototype.onMessage = function(event) {
  var details, message, type;
  this.logEvent("message from sender", event);
  message = event.message;
  type = message.type;
  details = message.details;
  if (typeof details === "string") {
    details = JSON.parse(details);
  }
  switch (type) {
    case "captioning.visibilitychange":
      type = this["amp"].captioning.getTrack().type;
      if (type !== void 0 && type.indexOf("608") !== -1) {
        try {
          this.playbackCore.player.enableCaptions(details.visibility, cast.player.api.CaptionsType.CEA608);
        } catch (err) {
          this.facade.logger.debug('caption Error 608:', err);
        }
        return;
      }
      this["amp"].captioning.setHidden(details.visibility);
      break;
    case "captioning.settingschange":
      this["amp"].captioning.changeSettings(details);
      break;
    case "stats.visibilitychange":
      this["amp"].stats.setHidden(!details.visibility);
  }
  this.sendNotification(Notifications.DISPATCH_EVENT, event);
};

ChromeCastReceiverProxy.prototype.onClose = function(event) {
  this.logEvent("message channel closed", event);
};

ChromeCastReceiverProxy.prototype.timeupdateHandler = function(event) {
  var time;
  time = Math.floor(this.amp.getCurrentTime());
  if (this.currentTime === time) {
    return;
  }
  this.currentTime = time;
  this.send({
    type: event.type,
    details: {
      currentTime: time
    }
  });
};

ChromeCastReceiverProxy.prototype.durationchangeHandler = function(event) {
  this.send({
    type: event.type,
    details: {
      duration: this.amp.getDuration()
    }
  });
};

ChromeCastReceiverProxy.prototype.eventHandler = function(event) {
  var msg;
  msg = {
    type: event.type
  };
  if (event.details != null) {
    msg.details = event.details;
  }
  this.send(msg);
};

ChromeCastReceiverProxy.prototype.dispatchEvent = function(target, event) {
  this.send({
    type: "dispatchevent",
    details: {
      target: target,
      event: event
    }
  });
  this.send({
    type: "" + target + "." + event.type,
    details: event.details
  });
};

ChromeCastReceiverProxy.prototype.send = function(message) {
  this.castChannel.send(message);
};

/**
 * The ChromeCastSeekCommand class.
 *   
 * @constructor
 * @private
 * @extends {PluginCommand}
*/
function ChromeCastSeekCommand() {
  ChromeCastSeekCommand.__super__.constructor.call(this);
}


__extends(ChromeCastSeekCommand, PluginCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
ChromeCastSeekCommand.prototype.execute = function(notification) {
  this.facade.logger.debug("ChromeCastSeekCommand");
  this.plugin.setCurrentTime(notification.getBody());
};

/**
 * The ChromeCastButtonMediator class.
 * 
 * @constructor
 * @extends {PluginMediator}
 * @param {Object} parent
 * @private
*/
function ChromeCastButtonMediator() {
  ChromeCastButtonMediator.__super__.constructor.call(this);
}


__extends(ChromeCastButtonMediator, ButtonMediator);


ChromeCastButtonMediator.prototype.componentName = "chromecast";

ChromeCastButtonMediator.prototype.onclick = function(event) {
  event.stopImmediatePropagation();
  this.sendNotification(ChromeCastNotifications.LAUNCH);
  return false;
};

/**
 * The ChromeCastTogglePlayPauseCommand class.
 *   
 * @constructor
 * @private
 * @extends {PluginCommand}
*/
function ChromeCastTogglePlayPauseCommand() {
  ChromeCastTogglePlayPauseCommand.__super__.constructor.call(this);
}


__extends(ChromeCastTogglePlayPauseCommand, PluginCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
ChromeCastTogglePlayPauseCommand.prototype.execute = function(notification) {
  var appStateProxy;
  this.facade.logger.debug("ChromeCastTogglePlayPauseCommand");
  appStateProxy = this.facade.app.retrieveProxy(ApplicationStateProxy.NAME);
  switch (this.config.getPlayState()) {
    case PlayState.ENDED:
      this.plugin.setCurrentTime(0);
      this.plugin.play();
      break;
    case PlayState.PAUSED:
    case PlayState.READY:
      this.plugin.play();
      break;
    case PlayState.PLAYING:
    case PlayState.WAITING:
      this.plugin.pause();
  }
};

/**
 * The ChromeCastControlsMediator class.
 * 
 * @constructor
 * @extends {PluginMediator}
 * @private
*/
function ChromeCastControlsMediator() {
  ChromeCastControlsMediator.__super__.constructor.call(this);
}


__extends(ChromeCastControlsMediator, ControlsMediator);


ChromeCastControlsMediator.prototype.componentName = "chromecast-controls";

ChromeCastControlsMediator.prototype.message = null;

ChromeCastControlsMediator.prototype.messageContainer = null;

ChromeCastControlsMediator.prototype.button = null;

ChromeCastControlsMediator.prototype.captioningActive = false;

/** @override
*/
ChromeCastControlsMediator.prototype.initializeNotifier = function(key) {
  ChromeCastControlsMediator.__super__.initializeNotifier.call(this, key);
  this.viewComponent.innerHTML = "";
  this.messageContainer = this.create("chromecast-message-container");
  this.message = this.createText("chromecast-message", this.localizationManager.getString("MSG_CHROMECAST_MESSAGE"), this.messageContainer);
  this.button = new ChromeCastButtonMediator();
};

/** @override
*/
ChromeCastControlsMediator.prototype.onRegister = function() {
  var button, fullscreen;
  this.facade.registerMediator(this.button);
  ChromeCastControlsMediator.__super__.onRegister.call(this);
  fullscreen = new FullScreenMediator(this.controlBar);
  fullscreen.setDisabled(true);
  this.facade.registerMediator(fullscreen);
  this.sendNotification(Notifications.ADD_CONTROL, this.button.getViewComponent());
  if (!this.viewComponent.getElementsByClassName("akamai-caption akamai-button").length && this.facade.app.parent.captioning.config.enabled === true) {
    button = new ButtonMediator(this.localizationManager.getString(LocalizationConstants.MSG_CC), this.viewComponent.getElementsByClassName("akamai-control-bar")[0], null, "caption", this.captionButtonClick.bind(this));
    this.facade.registerMediator(button);
    this.captionButton = button.getViewComponent();
    this.sendNotification(Notifications.ADD_CONTROL, this.captionButton);
    this.sendNotification(Notifications.ADD_CONTROL_STATE, "cc-enabled");
  }
};

ChromeCastControlsMediator.prototype.captionButtonClick = function() {
  var note;
  this.captioningActive = !this.captioningActive;
  try {
    this.facade.app.parent.chromecast.postMessage({
      type: "captioning.visibilitychange",
      details: {
        visibility: this.captioningActive
      }
    });
  } catch (error) {
    this.facade.logger.error("[AMP Chromecast Captioning Error]", error);
  }
  note = this.captioningActive ? Notifications.ADD_APPLICATION_STATE : Notifications.REMOVE_APPLICATION_STATE;
  this.sendNotification(note, "cc-active");
};

/**
 * The ChromeCastPlaybackTargetChangeCommand class.
 *   
 * @constructor
 * @private
 * @extends {PluginCommand}
*/
function ChromeCastPlaybackTargetChangeCommand() {
  ChromeCastPlaybackTargetChangeCommand.__super__.constructor.call(this);
}


__extends(ChromeCastPlaybackTargetChangeCommand, PluginCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
ChromeCastPlaybackTargetChangeCommand.prototype.execute = function(notification) {
  var api, body, currentTime, duration, target;
  body = notification.getBody();
  target = body.target;
  api = this.facade.app.getAPI();
  if (target === "chromecast") {
    api.pause();
  } else if (target === "amp") {
    currentTime = this.config.getCurrentTime();
    duration = api.getDuration();
    if (currentTime !== 0) {
      if (currentTime !== duration) {
        this.seekedHandler = this.seeked.bind(this);
        api.addEventListener("seeked", this.seekedHandler);
      }
      this.facade.app.getAPI().setCurrentTime(currentTime);
    }
  }
};

ChromeCastPlaybackTargetChangeCommand.prototype.seeked = function(event) {
  var api;
  api = this.facade.app.getAPI();
  api.removeEventListener("seeked", this.seekedHandler);
  api.play();
};

ChromeCastPlaybackTargetChangeCommand.prototype.seekedHandler = null;

/** 
 * The ChromeCastPlugin class.
 *   
 * @param {Module}  app     The parent module of this plugin.
 * @param {Object}  config  The plugin's configuration object.
 * @constructor
 * @private
 * @extends {Plugin}
*/
function ChromeCastPlugin(app, config) {
  ChromeCastPlugin.__super__.constructor.call(this, app, config);
}


__extends(ChromeCastPlugin, Plugin);


ChromeCastPlugin.NAME = "ChromeCastPlugin";

ChromeCastPlugin.prototype.moduleName = "chromecast";

/** @override
*/
ChromeCastPlugin.prototype.createModel = function() {
  if (this.isSender()) {
    this.registerProxy(new ChromeCastSenderProxy(this.config));
  } else if (this.isReceiver()) {
    this.registerProxy(new ChromeCastReceiverProxy(this.config));
  }
};

/** @override
*/
ChromeCastPlugin.prototype.createController = function() {
  if (this.isSender()) {
    this.registerCommand(Notifications.PLAYBACK_TARGET_CHANGE, ChromeCastPlaybackTargetChangeCommand);
    this.registerCommand(ChromeCastNotifications.LAUNCH, ChromeCastLaunchCommand);
    this.registerCommand(FeedNotifications.FEED_CHANGED, ChromeCastFeedChangedCommand);
    this.registerCommand(UserNotifications.TOGGLE_PLAY_PAUSE, ChromeCastTogglePlayPauseCommand);
    this.registerCommand(UserNotifications.SEEK, ChromeCastSeekCommand);
    this.registerCommand(CaptioningNotifications.VISIBILITY_CHANGE, ChromeCastCaptioningVisibilityChangeCommand);
    this.registerCommand(CaptioningNotifications.SETTINGS_CHANGE, ChromeCastCaptioningSettingsChangeCommand);
  } else {
    this.registerCommand(Notifications.READY, ChromeCastReceiverReadyCommand);
    this.registerCommand(AdNotifications.BREAK_START, ChromeCastBreakStartCommand);
  }
};

/** @override
*/
ChromeCastPlugin.prototype.createView = function() {
  if (this.isSender()) {
    this.registerMediator(new ChromeCastHTMLSenderMediator());
  } else if (this.isReceiver()) {
    this.registerMediator(new ChromeCastReceiverMediator());
  }
};

/**@override
*/
ChromeCastPlugin.prototype.createAPI = function() {
  return new ChromeCastAPI(this);
};

ChromeCastPlugin.prototype.isSender = function() {
  return !this.isReceiver() && /Chrome/.test(navigator.userAgent);
};

ChromeCastPlugin.prototype.isReceiver = function() {
  return /CrKey/.test(navigator.userAgent);
};

/** @override
*/
ChromeCastPlugin.prototype.listNotificationInterests = function() {
  return [Notifications.READY, FeedNotifications.LOAD_FEED, CaptioningNotifications.VISIBILITY_CHANGE, CaptioningNotifications.SETTINGS_CHANGE, AdNotifications.BREAK_START];
};

/**
*/
ChromeCastPlugin.prototype.listNotificationEvents = function() {
  return ChromeCastPlugin.__super__.listNotificationEvents.call(this).concat([ChromeCastNotifications.AVAILABILITY_CHANGE]);
};

/** @override
*/
ChromeCastPlugin.prototype.listNotificationPublications = function() {
  return ChromeCastPlugin.__super__.listNotificationPublications.apply(this, arguments).concat([Notifications.INITIALIZED, Notifications.ADD_CONTROL, Notifications.REMOVE_CONTROL, Notifications.ADD_CONTROL_STATE, Notifications.REMOVE_CONTROL_STATE, Notifications.PLAYBACK_TARGET_CHANGE, ChromeCastNotifications.AVAILABILITY_CHANGE]);
};


AMP.registerPlugin("chromecast", "html", ChromeCastPlugin);

/** 
 * The ChromeCastFlashPlugin class.
 *   
 * @param {Module}  app     The parent module of this plugin.
 * @param {Object}  config  The plugin's configuration object.
 * @constructor
 * @extends {ChromeCastPlugin}
 * @private
*/
function ChromeCastFlashPlugin(app, config) {
  ChromeCastFlashPlugin.__super__.constructor.call(this, app, config);
}


__extends(ChromeCastFlashPlugin, ChromeCastPlugin);


ChromeCastFlashPlugin.NAME = "ChromeCastFlashPlugin";

/** @override
*/
ChromeCastFlashPlugin.prototype.createModel = function() {
  this.registerProxy(new ChromeCastSenderProxy(this.config));
};

/** @override
*/
ChromeCastFlashPlugin.prototype.createController = function() {
  this.registerCommand(Notifications.PLAYBACK_TARGET_CHANGE, ChromeCastPlaybackTargetChangeCommand);
  this.registerCommand(ChromeCastNotifications.LAUNCH, ChromeCastLaunchCommand);
  this.registerCommand(FeedNotifications.FEED_CHANGED, ChromeCastFeedChangedCommand);
  this.registerCommand(UserNotifications.TOGGLE_PLAY_PAUSE, ChromeCastTogglePlayPauseCommand);
  this.registerCommand(UserNotifications.SEEK, ChromeCastSeekCommand);
};

/** @override
*/
ChromeCastFlashPlugin.prototype.createView = function() {
  this.registerMediator(new ChromeCastSenderMediator());
};

/** @override
*/
ChromeCastFlashPlugin.prototype.listNotificationInterests = function() {
  return [FeedNotifications.FEED_CHANGED, Notifications.CHANGE_MEDIA];
};

/** 
 * The ChromeCastSenderProxy class.
 *   
 * @param {Object}  config  The plugin configuration object.
 * @constructor
 * @private
 * @extends {PluginProxy}
*/
function ChromeCastSenderProxy(config) {
  this.messageBus = config.messageBus || ChromeCastConstants.CHANNEL_ID;
  ChromeCastSenderProxy.__super__.constructor.call(this, config.sender);
}


__extends(ChromeCastSenderProxy, PluginProxy);


/** @static
*/
ChromeCastSenderProxy.NAME = ModuleProxy.NAME;

ChromeCastSenderProxy.prototype.defaults = {
  plugin: null,
  applicationID: ChromeCastConstants.APPLICATION_ID
};

ChromeCastSenderProxy.prototype.session = null;

ChromeCastSenderProxy.prototype.media = null;

ChromeCastSenderProxy.prototype.messageBus = null;

ChromeCastSenderProxy.prototype.feed = null;

ChromeCastSenderProxy.prototype.playState = null;

ChromeCastSenderProxy.prototype.currentTime = null;

ChromeCastSenderProxy.prototype.duration = null;

ChromeCastSenderProxy.prototype.receiverAvailable = false;

/** @override
*/
ChromeCastSenderProxy.prototype.getLoaded = function() {
  return this.loaded || ((typeof chrome !== "undefined" && chrome !== null ? chrome.cast : void 0) != null);
};

/** @override
*/
ChromeCastSenderProxy.prototype.initialize = function() {
  var _ref,
    _this = this;
  if (typeof chrome !== "undefined" && chrome !== null ? (_ref = chrome.cast) != null ? _ref.isAvailable : void 0 : void 0) {
    this.initializeCastApi();
  } else {
    window['__onGCastApiAvailable'] = function(loaded, errorInfo) {
      if (loaded === true) {
        _this.initializeCastApi();
      } else {
        _this.logError("cast load error", errorInfo);
      }
    };
  }
};

ChromeCastSenderProxy.prototype.initializeCastApi = function() {
  var apiConfig, applicationID, sessionRequest;
  applicationID = this.getConfigurationData().applicationID;
  sessionRequest = new chrome.cast.SessionRequest(applicationID);
  apiConfig = new chrome.cast.ApiConfig(sessionRequest, this.sessionListener.bind(this), this.receiverListener.bind(this));
  chrome.cast.initialize(apiConfig, this.onInitSuccess.bind(this), this.onInitError.bind(this));
};

ChromeCastSenderProxy.prototype.onInitSuccess = function(event) {
  this.logEvent("init success", event);
};

ChromeCastSenderProxy.prototype.onInitError = function(event) {
  this.logError("init error", event);
};

ChromeCastSenderProxy.prototype.receiverListener = function(event) {
  this.receiverAvailable = event === 'available';
  this.sendNotification(ChromeCastNotifications.AVAILABILITY_CHANGE, this.receiverAvailable);
  this.logEvent("receiver " + (this.receiverAvailable ? "found" : "list empty"));
};

ChromeCastSenderProxy.prototype.sessionListener = function(event) {
  this.onRequestSessionSuccess(event);
  this.logEvent("session listener", event);
};

ChromeCastSenderProxy.prototype.launch = function() {
  chrome.cast.requestSession(this.onRequestSessionSuccess.bind(this), this.onLaunchError.bind(this));
};

ChromeCastSenderProxy.prototype.send = function(msg) {
  this.session.sendMessage(this.messageBus, msg, this.onMessageSuccess.bind(this), this.onMessageError.bind(this));
};

ChromeCastSenderProxy.prototype.onLaunchError = function(event) {
  this.logError("launch error.", event);
};

ChromeCastSenderProxy.prototype.onRequestSessionSuccess = function(event) {
  var playbackProxy;
  this.logEvent("request session success.", event);
  this.session = event;
  this.session.addMessageListener(this.messageBus, this.onMessage.bind(this));
  this.session.addUpdateListener(this.onUpdate.bind(this));
  playbackProxy = this.facade.app.retrieveProxy(PlaybackProxy.NAME);
  this.loadMedia(playbackProxy.getCurrentTime());
  this.sendNotification(Notifications.PLAYBACK_TARGET_CHANGE, {
    target: "chromecast"
  });
};

ChromeCastSenderProxy.prototype.onUpdate = function(isAlive) {
  if (!isAlive) {
    this.sendNotification(Notifications.PLAYBACK_TARGET_CHANGE, {
      target: "amp"
    });
  }
};

ChromeCastSenderProxy.prototype.onMessageSuccess = function(event) {
  this.logEvent("message sent", event);
};

ChromeCastSenderProxy.prototype.onMessageError = function(event) {
  this.logError("message error", event);
};

ChromeCastSenderProxy.prototype.onMessage = function(namespace, message) {
  var details, target, type;
  message = JSON.parse(message);
  type = message.type;
  details = message.details;
  switch (type) {
    case "playstatechange":
      this.playState = details.newState;
      this.sendNotification(Notifications.CHANGE_PLAY_STATE, this.playState);
      break;
    case "timeupdate":
      this.currentTime = details.currentTime;
      this.sendNotification(Notifications.DISPLAY_TIME, {
        currentTime: this.currentTime,
        duration: this.duration
      });
      break;
    case "durationchange":
      if (details.duration !== 0 && !isNaN(details.duration)) {
        this.duration = details.duration;
        this.sendNotification(Notifications.DURATION_CHANGE, this.duration);
      }
      break;
    case "dispatchevent":
      target = details.target === "player" ? this.facade.app.parent : this.facade.app.parent[details.target];
      if (target != null) {
        target.dispatchEvent(details.event);
      }
  }
  if (type !== "timeupdate") {
    this.logEvent("message from receiver", message);
  }
  this.sendNotification(Notifications.DISPATCH_EVENT, {
    type: "message",
    message: message
  });
};

ChromeCastSenderProxy.prototype.onStop = function(event) {
  this.logEvent("stop");
  this.session.stop(this.onStopSuccess.bind(this), this.onStopError.bind(this));
};

ChromeCastSenderProxy.prototype.onStopSuccess = function(event) {
  this.logEvent("stop success", event);
};

ChromeCastSenderProxy.prototype.onStopError = function(event) {
  this.logError("stop error", event);
};

ChromeCastSenderProxy.prototype.logEvent = function(message, data) {
  if (message == null) {
    message = data.type || "";
  }
  this.facade.logger.log("[AMP CHROMECAST] " + message, data);
};

ChromeCastSenderProxy.prototype.logError = function(message, data) {
  this.facade.logger.error("[AMP CHROMECAST ERROR] " + message, data);
};

ChromeCastSenderProxy.prototype.getPlayState = function() {
  return this.playState;
};

ChromeCastSenderProxy.prototype.getFeed = function() {
  return this.feed;
};

ChromeCastSenderProxy.prototype.setFeed = function(value) {
  if (this.feed === value) {
    return;
  }
  this.feed = value;
  if (this.session != null) {
    this.loadMedia();
  }
};

ChromeCastSenderProxy.prototype.loadMedia = function(startTime) {
  var customData, feed, helper, media, mediaInfo, metadata, receiverCanPlay, request, source, _ref, _ref1;
  if (startTime == null) {
    startTime = 0;
  }
  helper = new MRSSHelper();
  media = (_ref = helper.createFeed(this.getFeed())) != null ? (_ref1 = _ref.item) != null ? _ref1[0] : void 0 : void 0;
  if (!(media != null)) {
    return;
  }
  receiverCanPlay = function(type) {
    if (ChromeCastConstants.SUPPORTED_TYPES.indexOf(type) > -1) {
      return "maybe";
    } else {
      return "";
    }
  };
  source = Utils.selectSource(media.source, receiverCanPlay);
  if (!(source != null)) {
    return;
  }
  feed = this.getFeed();
  if (feed != null) {
    customData = {
      feed: {
        data: feed
      }
    };
  } else {
    customData = {
      guid: media.guid,
      embed: media.embed,
      category: media.category,
      medium: media.medium,
      scenes: media.scenes
    };
  }
  metadata = new chrome.cast.media.GenericMediaMetadata();
  metadata.title = media.title;
  metadata.subtitle = media.description;
  metadata.image = media.poster;
  metadata.releaseDate = media.pubDate.toISOString();
  mediaInfo = new chrome.cast.media.MediaInfo(source.src, source.type);
  mediaInfo.duration = media.duration;
  mediaInfo.customData = customData;
  mediaInfo.metadata = metadata;
  request = new chrome.cast.media.LoadRequest(mediaInfo);
  request.currentTime = startTime;
  this.session.loadMedia(request, this.onMediaDiscovered.bind(this), this.onMediaError.bind(this));
};

ChromeCastSenderProxy.prototype.onMediaDiscovered = function(media) {
  this.media = media;
  this.media.addUpdateListener(this.onMediaStatusUpdate.bind(this));
};

ChromeCastSenderProxy.prototype.onMediaStatusUpdate = function(status) {
  this.logEvent("mediastatusupdate", status);
};

ChromeCastSenderProxy.prototype.onMediaError = function(error) {
  this.logError("media error", error);
};

ChromeCastSenderProxy.prototype.play = function() {
  this.media.play();
};

ChromeCastSenderProxy.prototype.pause = function() {
  this.media.pause();
};

ChromeCastSenderProxy.prototype.setCurrentTime = function(time) {
  var request;
  request = new chrome.cast.media.SeekRequest();
  request.currentTime = time;
  this.media.seek(request);
};

ChromeCastSenderProxy.prototype.getCurrentTime = function() {
  return this.currentTime;
};

ChromeCastSenderProxy.prototype.isReceiverAvailable = function() {
  return this.receiverAvailable;
};

/** 
 * @constructor
 * @extends {PluginWrapper}
 * @private
*/
function ChromeCastWrapper(player, init) {
  ChromeCastWrapper.__super__.constructor.call(this, player, init);
  this.plugin = new ChromeCastFlashPlugin(this.player, init);
  player.registerModule(this.plugin);
}


__extends(ChromeCastWrapper, PluginWrapper);


ChromeCastWrapper.NAME = "ChromeCastWrapper";

ChromeCastWrapper.prototype.buttonId = "chromecastBtn";

ChromeCastWrapper.prototype.plugin = null;

/** @override
*/
ChromeCastWrapper.prototype.getAPI = function() {
  return this.plugin.getAPI();
};

/** @override
*/
ChromeCastWrapper.prototype.createXML = function(xml) {
  var controls;
  if (this.hasControls(xml) === false) {
    return xml;
  }
  controls = this.getControls(xml);
  if (!(controls[this.buttonId] != null)) {
    this.createElement(xml, this.buttonId);
  }
  return xml;
};

/**
*/
ChromeCastWrapper.prototype.listNotificationInterests = function() {
  return ChromeCastWrapper.__super__.listNotificationInterests.call(this).concat([FlashNotifications.ELEMENT_EVENT, FlashNotifications.LOAD_STATE_READY, FlashNotifications.LOAD_STATE_LOADING, FlashNotifications.APPLICATION_STATE_CHANGE, ChromeCastNotifications.AVAILABILITY_CHANGE]);
};

/**
*/
ChromeCastWrapper.prototype.handleNotification = function(notification) {
  var body, isReceiverAvailable, name, _ref;
  ChromeCastWrapper.__super__.handleNotification.call(this, notification);
  name = notification.getName();
  body = notification.getBody();
  switch (name) {
    case FlashNotifications.ELEMENT_EVENT:
      if (body.type === "click" && body.element === this.buttonId) {
        this.plugin.sendNotification(ChromeCastNotifications.LAUNCH);
      }
      break;
    case ChromeCastNotifications.AVAILABILITY_CHANGE:
      if (((_ref = this.player.video) != null ? _ref.setPlayerProperty : void 0) != null) {
        this.player.video.setPlayerProperty(this.buttonId, {
          visible: body
        });
      }
      break;
    case FlashNotifications.APPLICATION_STATE_CHANGE:
    case FlashNotifications.LOAD_STATE_READY:
    case FlashNotifications.LOAD_STATE_LOADING:
      isReceiverAvailable = this.plugin.getAPI().isReceiverAvailable();
      if (isReceiverAvailable) {
        this.player.video.setPlayerProperty(this.buttonId, {
          state: 1
        });
      }
      this.player.video.setPlayerProperty(this.buttonId, {
        visible: isReceiverAvailable
      });
  }
};


AMP.registerPlugin("chromecast", "flash", ChromeCastWrapper);

/**
 * @enum {string}
 * @const
 * @private
*/

var ChromeCastNotifications = {
  LAUNCH: "launch",
  AVAILABILITY_CHANGE: "availabilitychange"
};

/**
 * The PluginAPI class.
 * 
 * @param         {!AdPlugin} module  The base module this API wraps.
 * @constructor
 * @extends {PluginAPI}
*/
function ChromeCastAPI(module) {
  var proxy;
  ChromeCastAPI.__super__.constructor.call(this, module);
  proxy = module.retrieveProxy(ChromeCastSenderProxy.NAME);
  if (!(proxy != null)) {
    return;
  }
  this.postMessage = proxy.send.bind(proxy);
  if (module.isSender()) {
    this.play = proxy.play.bind(proxy);
    this.pause = proxy.pause.bind(proxy);
    this.setCurrentTime = proxy.setCurrentTime.bind(proxy);
    this.isReceiverAvailable = proxy.isReceiverAvailable.bind(proxy);
    this.getSession = function() {
      return proxy.session;
    };
    this.getMedia = function() {
      return proxy.media;
    };
  } else {
    this.getMediaManager = function() {
      return proxy.mediaManager;
    };
    this.getCastReceiverManager = function() {
      return proxy.castReceiverManager;
    };
    this.getCastMessageBus = function() {
      return proxy.castMessageBus;
    };
    this.getCastChannel = function() {
      return proxy.castChannel;
    };
  }
}


__extends(ChromeCastAPI, PluginAPI);


/**
 * @expose
*/
ChromeCastAPI.prototype.play = function() {};

/**
 * @expose
*/
ChromeCastAPI.prototype.pause = function() {};

/**
 * @param {Number}  value   The time in seconds to seek to.
 * @expose
*/
ChromeCastAPI.prototype.setCurrentTime = function(value) {};

/**
 * Returns if The chromecast device's Availability 
 * @expose
*/
ChromeCastAPI.prototype.isReceiverAvailable = function() {};

/**
 * Returns if The chromecast device's Availability 
 * @expose
*/
ChromeCastAPI.prototype.postMessage = function(msg) {};

/** 
 * The DASHPlugin class.
 *   
 * @param {Module}  app     The parent module of this plugin.
 * @param {Object}  config  The plugin's configuration object.
 * @constructor
 * @private
 * @extends {Plugin}
*/
function DASHPlugin(app, config) {
  DASHPlugin.__super__.constructor.call(this, app, config);
}


__extends(DASHPlugin, Plugin);


DASHPlugin.NAME = "DASHPlugin";

DASHPlugin.prototype.moduleName = "dash";

/** @override
*/
DASHPlugin.prototype.createModel = function() {
  this.registerProxy(new DASHProxy(this.config));
};

DASHPlugin.prototype.registered = function() {
  this.app.registerCommand(Notifications.CHANGE_DISPLAY_STATE, DASHChangeDisplayStateCommand);
  DASHPlugin.__super__.registered.call(this);
};


AMP.registerPlugin("dash", "html", DASHPlugin);

/** 
 * The ControlPanelPlugin class.
 *   
 * @param {Module}  app     The parent module of this plugin.
 * @param {Object}  config  The plugin's configuration object.
 * @constructor
 * @private
 * @extends {Plugin}
*/
function ControlPlugin(app, config) {
  ControlPlugin.__super__.constructor.call(this, app, config);
}


__extends(ControlPlugin, Plugin);


ControlPlugin.NAME = "ControlPlugin";

/** @override
*/
ControlPlugin.prototype.listNotificationPublications = function() {
  return ControlPlugin.__super__.listNotificationPublications.apply(this, arguments).concat([Notifications.ADD_CONTROL, Notifications.REMOVE_CONTROL, Notifications.ADD_CONTROL_STATE, Notifications.REMOVE_CONTROL_STATE]);
};

/**
 * The PanelControlMediator class.
 * 
 * @constructor
 * @private
 * @extends {ButtonMediator}
*/
function PanelControlMediator(componentName) {
  PanelControlMediator.__super__.constructor.call(this, null, null, null, componentName, onclick);
}


__extends(PanelControlMediator, ButtonMediator);


PanelControlMediator.prototype.panel = null;

PanelControlMediator.prototype.timeout = null;

PanelControlMediator.prototype.closePanelDelayed = null;

/**
 * @override
*/
PanelControlMediator.prototype.onRegister = function() {
  this.closePanelDelayed = this.delayedClosePanel.bind(this);
  if (Utils.getDevice() === "desktop") {
    this.onmouseleave = this.closePanelDelayed;
    this.onmouseenter = this.openPanel;
    this.onclick = this.clickHandler;
  } else {
    this.onclick = this.togglePanel;
  }
  PanelControlMediator.__super__.onRegister.call(this);
  this.sendNotification(Notifications.ADD_CONTROL_STATE, "" + this.componentName + "-enabled");
  this.sendNotification(Notifications.ADD_CONTROL, this.viewComponent);
};

PanelControlMediator.prototype.openPanel = function() {
  clearTimeout(this.timeout);
  this.sendNotification(PanelNotifications.OPEN_PANEL, this.panel);
  this.panel.viewComponent.addEventListener("mouseleave", this.closePanelDelayed);
};

PanelControlMediator.prototype.closePanel = function() {
  if (Utils.isMouseOverElement(this.panel.viewComponent) || Utils.isMouseOverElement(this.viewComponent) || this.facade.app.retrieveProxy(ApplicationStateProxy.NAME).getIsUserActive()) {
    return;
  }
  this.panel.viewComponent.addEventListener("mouseleave", this.closePanelDelayed);
  this.sendNotification(PanelNotifications.CLOSE_PANEL, this.panel);
};

PanelControlMediator.prototype.delayedClosePanel = function() {
  this.timeout = setTimeout(this.closePanel.bind(this), 350);
};

PanelControlMediator.prototype.togglePanel = function() {
  this.sendNotification(PanelNotifications.TOGGLE_PANEL, this.panel);
};

PanelControlMediator.prototype.clickPanel = function() {};

/**
 * The PlayPauseMediator class.
 * 
 * @constructor
 * @private
 * @extends {ButtonMediator}
*/
function PanelMediator(componentName) {
  PanelMediator.__super__.constructor.call(this, componentName, null, null, null);
}


__extends(PanelMediator, ComponentMediator);


PanelMediator.prototype.componentType = "panel";

PanelMediator.prototype.control = null;

/**
 * @override
*/
PanelMediator.prototype.onRegister = function() {
  PanelMediator.__super__.onRegister.call(this);
  this.sendNotification(PanelNotifications.ADD_PANEL, this);
};

/** 
 * The ControlProxy class.
 * 
 * @constructor
 * @private
 * @extends {PluginProxy}
*/
function ControlProxy(config) {
  ControlProxy.__super__.constructor.call(this, config);
}


__extends(ControlProxy, PluginProxy);


/** @static
*/
ControlProxy.NAME = ModuleProxy.NAME;

ControlProxy.prototype.loaded = true;

ControlProxy.prototype.controlName = null;

/**
 *
*/
ControlProxy.prototype.getControlName = function() {
  return this.controlName;
};

ControlProxy.prototype.setControlName = function(value) {
  return this.controlName = value;
};

/** 
 * The ControlPanelProxy class.
 * 
 * @constructor
 * @private
 * @extends {PluginProxy}
*/
function ControlPanelProxy(config) {
  ControlPanelProxy.__super__.constructor.call(this, config);
}


__extends(ControlPanelProxy, ControlProxy);


/** @static
*/
ControlPanelProxy.NAME = ModuleProxy.NAME;

ControlPanelProxy.prototype.hidden = true;

/**
 *
*/
ControlPanelProxy.prototype.getHidden = function() {
  return this.hidden;
};

ControlPanelProxy.prototype.setHidden = function(value) {
  this.hidden = value;
  return value;
};

/** 
 * The VolumePanelProxy class.
 * 
 * @constructor
 * @private
 * @extends {ControlPanelProxy}
*/
function VolumePanelProxy(config) {
  VolumePanelProxy.__super__.constructor.call(this, config);
}


__extends(VolumePanelProxy, ControlPanelProxy);


/** @static
*/
VolumePanelProxy.NAME = ModuleProxy.NAME;

VolumePanelProxy.prototype.controlName = "volume";

VolumePanelProxy.prototype.defaults = {
  direction: "vertical"
};

VolumePanelProxy.prototype.getDirection = function() {
  return this.data.direction;
};

/**
*/
function VolumePanelWrapper(player, config) {
  if (config == null) {
    config = {};
  }
  VolumePanelWrapper.__super__.constructor.call(this, player, config);
}


__extends(VolumePanelWrapper, PluginWrapper);


VolumePanelWrapper.NAME = "VolumePanelWrapper";


AMP.registerPlugin("volumepanel", "flash", VolumePanelWrapper);

function VolumePanelControlMediator(componentName) {
  VolumePanelControlMediator.__super__.constructor.call(this, componentName);
}


__extends(VolumePanelControlMediator, PanelControlMediator);


VolumePanelControlMediator.prototype.clickHandler = function() {
  this.sendNotification(Notifications.TOGGLE_MUTED);
};

/**
 * The VolumeMediator class.
 * 
 * @constructor
 * @private
 * @extends {ModuleMediator}
 * @param {Object} viewComponent
*/
function VolumeMediator(parent, direction) {
  VolumeMediator.__super__.constructor.call(this, parent, direction);
}


__extends(VolumeMediator, SliderMediator);


VolumeMediator.prototype.componentName = "volume";

/** sets the value
*/
VolumeMediator.prototype.setValue = function(percent) {
  VolumeMediator.__super__.setValue.call(this, percent);
  this.sendNotification(Notifications.CHANGE_VOLUME, percent);
  this.sendNotification(UserSettingsNotifications.UPDATE_SETTINGS, {
    volume: percent
  });
  return percent;
};

/** 
 * @override
*/
VolumeMediator.prototype.listNotificationInterests = function() {
  return [Notifications.VOLUME_CHANGE, Notifications.READY];
};

/** 
 * @override
*/
VolumeMediator.prototype.handleNotification = function(notification) {
  switch (notification.getName()) {
    case Notifications.READY:
      this.updateValue(this.facade.app.retrieveProxy(PlaybackProxy.NAME).getVolume());
      break;
    case Notifications.VOLUME_CHANGE:
      this.updateValue(notification.getBody());
  }
};

/**
 * The ControlPanelMediator class.
 * 
 * @constructor
 * @private
 * @extends {PluginMediator}
*/
function ControlPanelMediator() {
  ControlPanelMediator.__super__.constructor.call(this);
  this.controls = {};
}


__extends(ControlPanelMediator, PluginMediator);


ControlPanelMediator.prototype.panel = null;

ControlPanelMediator.prototype.control = null;

ControlPanelMediator.prototype.separator = null;

ControlPanelMediator.prototype.controls = null;

ControlPanelMediator.prototype.labels = null;

ControlPanelMediator.prototype.closed = true;

ControlPanelMediator.prototype.panelClass = PanelMediator;

ControlPanelMediator.prototype.controlClass = PanelControlMediator;

/**
 * @override
*/
ControlPanelMediator.prototype.onRegister = function() {
  this.panel = this.createPanel(this.componentName);
  this.control = this.createControl(this.componentName);
  this.separator = this.createSeparator(this.componentName);
  this.panel.control = this.control;
  this.control.panel = this.panel;
  if (this.labels == null) {
    this.labels = {};
  }
  this.createPanelControls(name);
};

ControlPanelMediator.prototype.createControl = function(name) {
  var control;
  control = new this.controlClass(name);
  this.facade.registerMediator(control);
  return control;
};

ControlPanelMediator.prototype.createPanel = function(name) {
  var panel;
  panel = new this.panelClass(name);
  this.facade.registerMediator(panel);
  return panel;
};

ControlPanelMediator.prototype.createSeparator = function(name) {
  return this.create(["separator", "icon"], this.panel);
};

ControlPanelMediator.prototype.createPanelControls = function(name) {
  var data, key, value, _ref;
  data = this.plugin.getConfigurationData();
  for (key in data) {
    value = data[key];
    if (value === true) {
      this.controls[key] = this.addPanelControl(new ButtonMediator(this.localizationManager.getString(this.labels[key]), null, null, key, (_ref = this.panelButtonClickHandler) != null ? typeof _ref.bind === "function" ? _ref.bind(this, key) : void 0 : void 0));
    }
  }
};

ControlPanelMediator.prototype.addPanelControl = function(control) {
  this.facade.registerMediator(control);
  this.panel.getViewComponent().appendChild(control.getViewComponent());
  return control;
};

/**
*/
ControlPanelMediator.prototype.panelButtonClickHandler = function() {
  this.sendNotification(PanelNotifications.CLOSE_PANEL, this.panel);
};

/**
 * The VolumePanelMediator class.
 * 
 * @constructor
 * @private
 * @extends {ControlPanelMediator}
*/
function VolumePanelMediator() {
  VolumePanelMediator.__super__.constructor.call(this);
}


__extends(VolumePanelMediator, ControlPanelMediator);


VolumePanelMediator.prototype.componentName = "volume";

VolumePanelMediator.prototype.slider = null;

VolumePanelMediator.prototype.level = null;

VolumePanelMediator.prototype.controlClass = VolumePanelControlMediator;

/**
*/
VolumePanelMediator.prototype.onRegister = function() {
  VolumePanelMediator.__super__.onRegister.call(this);
  this.slider = new VolumeMediator(this.panel, this.plugin.getDirection());
  this.facade.registerMediator(this.slider);
};

VolumePanelMediator.prototype.updateVolumeButton = function(percent) {
  var level;
  level = Math.ceil(percent * 10);
  if (level === this.level) {
    return;
  }
  if (this.level != null) {
    this.sendNotification(Notifications.REMOVE_CONTROL_STATE, "volume-" + this.level);
  }
  this.level = level;
  this.sendNotification(Notifications.ADD_CONTROL_STATE, "volume-" + this.level);
};

/** 
 * @override
*/
VolumePanelMediator.prototype.listNotificationInterests = function() {
  return VolumePanelMediator.__super__.listNotificationInterests.apply(this, arguments).concat([Notifications.VOLUME_CHANGE]);
};

/** 
 * @override
*/
VolumePanelMediator.prototype.handleNotification = function(notification) {
  VolumePanelMediator.__super__.handleNotification.call(this, notification);
  switch (notification.getName()) {
    case Notifications.VOLUME_CHANGE:
      this.updateVolumeButton(notification.body);
  }
};

/** 
 * The ControlPanelPlugin class.
 *   
 * @param {Module}  app     The parent module of this plugin.
 * @param {Object}  config  The plugin's configuration object.
 * @constructor
 * @private
 * @extends {Plugin}
*/
function ControlPanelPlugin(app, config) {
  ControlPanelPlugin.__super__.constructor.call(this, app, config);
}


__extends(ControlPanelPlugin, ControlPlugin);


ControlPanelPlugin.NAME = "ControlPanelPlugin";

/** @override
*/
ControlPanelPlugin.prototype.listNotificationPublications = function() {
  var key, value;
  return ControlPanelPlugin.__super__.listNotificationPublications.call(this).concat((function() {
    var _results;
    _results = [];
    for (key in PanelNotifications) {
      value = PanelNotifications[key];
      _results.push(value);
    }
    return _results;
  })());
};

/** 
 * The VolumePanelPlugin class.
 *   
 * @param {Module}  app     The parent module of this plugin.
 * @param {Object}  config  The plugin's configuration object.
 * @constructor
 * @private
 * @extends {Plugin}
*/
function VolumePanelPlugin(app, config) {
  VolumePanelPlugin.__super__.constructor.call(this, app, config);
}


__extends(VolumePanelPlugin, ControlPanelPlugin);


VolumePanelPlugin.NAME = "VolumePanelPlugin";

VolumePanelPlugin.prototype.moduleName = "volumepanel";

/**
*/
VolumePanelPlugin.prototype.isVolumeSettable = function() {
  var newVolume, oldVolume, settable, video;
  settable = false;
  video = this.app.getVideo();
  oldVolume = video.volume;
  newVolume = Math.random();
  video.volume = newVolume;
  if (video.volume === newVolume) {
    settable = true;
  }
  video.volume = oldVolume;
  return settable;
};

/** @override
*/
VolumePanelPlugin.prototype.initialize = function() {
  if (!this.isVolumeSettable()) {
    return;
  } else {
    VolumePanelPlugin.__super__.initialize.call(this);
  }
};

/** @override
*/
VolumePanelPlugin.prototype.createModel = function() {
  this.registerProxy(new VolumePanelProxy(this.config));
};

/** @override
*/
VolumePanelPlugin.prototype.createView = function() {
  if (!this.isVolumeSettable()) {
    return;
  }
  this.registerMediator(new VolumePanelMediator());
};

/** @override
*/
VolumePanelPlugin.prototype.listNotificationPublications = function() {
  return VolumePanelPlugin.__super__.listNotificationPublications.apply(this, arguments).concat([Notifications.CHANGE_VOLUME, Notifications.TOGGLE_MUTED, UserSettingsNotifications.UPDATE_SETTINGS]);
};

/** @override
*/
VolumePanelPlugin.prototype.listNotificationInterests = function() {
  return VolumePanelPlugin.__super__.listNotificationInterests.apply(this, arguments).concat([Notifications.VOLUME_CHANGE, Notifications.READY]);
};


AMP.registerPlugin("volumepanel", "html", VolumePanelPlugin);


global["akamai"] = {
	"amp": {
		"AMP": AMP,
		"utils": {
			"Utils": Utils,
			"QueryString": QueryString,
			"Clock": Clock,
			"Alarm": Alarm,
			"Logger": Logger
		}
	}
};
  /* End JS Lib
  */
  window["AKAMAI_MEDIA_PLAYER"].saveSDK(version, global);
}
window.AKAMAI_MEDIA_PLAYER.setVersion(version);
})();