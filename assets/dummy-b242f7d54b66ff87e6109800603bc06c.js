define("dummy/app",["exports","ember","ember/resolver","ember/load-initializers","dummy/config/environment"],function(e,t,n,a,r){"use strict";t["default"].MODEL_FACTORY_INJECTIONS=!0;var l=t["default"].Application.extend({modulePrefix:r["default"].modulePrefix,podModulePrefix:r["default"].podModulePrefix,Resolver:n["default"]});a["default"](l,r["default"].modulePrefix),e["default"]=l}),define("dummy/components/async-image",["exports","smoke-and-mirrors/components/async-image"],function(e,t){"use strict";e["default"]=t["default"]}),define("dummy/components/code-snippet",["exports","ember","dummy/snippets"],function(e,t,n){"use strict";var a=require("highlight.js");e["default"]=t["default"].Component.extend({tagName:"pre",classNameBindings:["language"],unindent:!0,_unindent:function(e){if(!this.get("unindent"))return e;for(var t,n,a=e.split("\n"),r=0;r<a.length;r++)t=/^\s*/.exec(a[r]),t&&("undefined"==typeof n||n>t[0].length)&&(n=t[0].length);return"undefined"!=typeof n&&n>0&&(e=e.replace(new RegExp("(\\n|^)\\s{"+n+"}","g"),"$1")),e},source:t["default"].computed("name",function(){return this._unindent((n["default"][this.get("name")]||"").replace(/^(\s*\n)*/,"").replace(/\s*$/,""))}),didInsertElement:function(){a.highlightBlock(this.get("element"))},language:t["default"].computed("name",function(){var e=/\.(\w+)$/i.exec(this.get("name"));if(e)switch(e[1].toLowerCase()){case"js":return"javascript";case"hbs":return"handlebars";case"css":return"css";case"scss":return"scss"}})})}),define("dummy/components/horizontal-collection",["exports","smoke-and-mirrors/components/horizontal-collection"],function(e,t){"use strict";e["default"]=t["default"]}),define("dummy/components/proxied-each",["exports","smoke-and-mirrors/components/proxied-each"],function(e,t){"use strict";e["default"]=t["default"]}),define("dummy/components/vertical-collection",["exports","smoke-and-mirrors/components/vertical-collection"],function(e,t){"use strict";e["default"]=t["default"]}),define("dummy/components/vertical-item",["exports","smoke-and-mirrors/components/vertical-item"],function(e,t){"use strict";e["default"]=t["default"]}),define("dummy/components/vm-collection",["exports","smoke-and-mirrors/components/vertical-collection"],function(e,t){"use strict";e["default"]=t["default"]}),define("dummy/controllers/array",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Controller}),define("dummy/controllers/object",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Controller}),define("dummy/initializers/animation-frame",["exports","ember"],function(e,t){"use strict";e["default"]={name:"request-animation-frame",initialize:function(){window.AnimationFrame.shim()}}}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,t,n){"use strict";function a(e,a){var r=t["default"].String.classify(n["default"].modulePrefix);n["default"].exportApplicationGlobal&&!window[r]&&(window[r]=a)}e.initialize=a,e["default"]={name:"export-application-global",initialize:a}}),define("dummy/instance-initializers/app-version",["exports","dummy/config/environment","ember"],function(e,t,n){"use strict";var a=n["default"].String.classify,r=!1;e["default"]={name:"App Version",initialize:function(e){if(!r){var l=a(e.toString());n["default"].libraries.register(l,t["default"].APP.version),r=!0}}}}),define("dummy/lib/get-data",["exports"],function(e){"use strict";function t(e){e=e||n;for(var t={start_at:(new Date).getTime()/1e3,databases:[]},a=1;e>=a;a++)t.databases.push({id:"cluster"+a,queries:[]}),t.databases.push({id:"cluster"+a+"slave",queries:[]});return t.databases.forEach(function(e){for(var t=Math.floor(10*Math.random()+1),n=0;t>n;n++){var a={canvas_action:null,canvas_context_id:null,canvas_controller:null,canvas_hostname:null,canvas_job_tag:null,canvas_pid:null,elapsed:15*Math.random(),query:"SELECT blah FROM something",waiting:Math.random()<.5};Math.random()<.2&&(a.query="<IDLE> in transaction"),Math.random()<.1&&(a.query="vacuum"),e.queries.push(a)}e.queries=e.queries.sort(function(e,t){return t.elapsed-e.elapsed})}),t}e["default"]=t;var n=20}),define("dummy/lib/get-images",["exports"],function(e){"use strict";function t(){return Math.round(Math.random())}function n(){return t()}function a(e,t){return Math.floor(Math.random()*(t+1-e)+e)}function r(){return a(1500,3e3)}function l(){return a(300,600)}function d(e,t){return Math.round(t?e/16*9:e/9*16)}function i(e){return(new Date).getTime()+"-"+e}function o(){return a(0,10)}function c(){return a(0,f.length-1)}function s(e){var t=[],a=[];t.push(v),a.push(v),n()&&(t.push("g"),a.push("g"));var l=r();t.push(l),t.push(l);var d=350;a.push(d),a.push(d);var s=f[c()];t.push(s),a.push(s);var u=o();return t.push(u),a.push(u),{large:t.join("/"),small:a.join("/"),id:i(e)}}function u(e){var a=[],r=[];a.push(v),r.push(v),n()&&(a.push("g"),r.push("g"));var s=l(),u=t();a.push(s),a.push(d(s,u));var m=100;r.push(m),r.push(d(m,u));var p=f[c()];a.push(p),r.push(p);var h=o();return a.push(h),r.push(h),{large:a.join("/"),small:r.join("/"),id:i(e)}}function m(e){e=e||h;for(var t=[],n=1;e>=n;n++)t.push(s(n));return t}function p(e){e=e||h;for(var t=[],n=1;e>=n;n++)t.push(u(n));return t}e.getImages=m,e.getDynamicImages=p;var h=10,v="http://lorempixel.com",f=["abstract","city","people","transport","food","nature","business","nightlife","sports","cats","fashion","technics"];e["default"]=m}),define("dummy/mixins/in-viewport",["exports","smoke-and-mirrors/mixins/in-viewport"],function(e,t){"use strict";e["default"]=t["default"]}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,t,n){"use strict";var a=t["default"].Router.extend({location:n["default"].locationType});e["default"]=a.map(function(){this.route("examples",function(){this.route("dbmon"),this.route("infinite-scroll"),this.route("flexible-layout")}),this.route("features",function(){}),this.route("available-components",function(){})})}),define("dummy/screens/application/route",["exports","ember"],function(e,t){"use strict";var n=t["default"].Route;e["default"]=n.extend({})}),define("dummy/screens/application/template",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{meta:{topLevel:null,revision:"Ember@2.1.0-beta.4",loc:{source:null,start:{line:12,column:10},end:{line:12,column:41}},moduleName:"dummy/screens/application/template.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("Examples");return e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}(),t=function(){return{meta:{topLevel:null,revision:"Ember@2.1.0-beta.4",loc:{source:null,start:{line:13,column:10},end:{line:13,column:41}},moduleName:"dummy/screens/application/template.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("Features");return e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}(),n=function(){return{meta:{topLevel:null,revision:"Ember@2.1.0-beta.4",loc:{source:null,start:{line:14,column:10},end:{line:14,column:55}},moduleName:"dummy/screens/application/template.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("Components");return e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}();return{meta:{topLevel:!1,revision:"Ember@2.1.0-beta.4",loc:{source:null,start:{line:1,column:0},end:{line:26,column:0}},moduleName:"dummy/screens/application/template.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("header");e.setAttribute(n,"class","container-fluid");var a=e.createTextNode("\n    ");e.appendChild(n,a);var a=e.createElement("div");e.setAttribute(a,"class","row");var r=e.createTextNode("\n        ");e.appendChild(a,r);var r=e.createElement("h1");e.setAttribute(r,"class","col-xs-12");var l=e.createTextNode("\n            ");e.appendChild(r,l);var l=e.createElement("img");e.setAttribute(l,"src","./logo.svg"),e.setAttribute(l,"style","width: 2em; height: 2em;"),e.appendChild(r,l);var l=e.createTextNode("\n            Smoke And Mirrors\n        ");e.appendChild(r,l),e.appendChild(a,r);var r=e.createTextNode("\n    ");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createElement("nav");e.setAttribute(n,"class","container-fluid");var a=e.createTextNode("\n    ");e.appendChild(n,a);var a=e.createElement("div");e.setAttribute(a,"class","row");var r=e.createTextNode("\n        ");e.appendChild(a,r);var r=e.createElement("div");e.setAttribute(r,"class","col-xs-12");var l=e.createTextNode("\n          ");e.appendChild(r,l);var l=e.createComment("");e.appendChild(r,l);var l=e.createTextNode(" /\n          ");e.appendChild(r,l);var l=e.createComment("");e.appendChild(r,l);var l=e.createTextNode(" /\n          ");e.appendChild(r,l);var l=e.createComment("");e.appendChild(r,l);var l=e.createTextNode("\n        ");e.appendChild(r,l),e.appendChild(a,r);var r=e.createTextNode("\n    ");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createElement("div");e.setAttribute(n,"class","container-fluid");var a=e.createTextNode("\n    ");e.appendChild(n,a);var a=e.createElement("div");e.setAttribute(a,"class","row");var r=e.createTextNode("\n        ");e.appendChild(a,r);var r=e.createElement("div");e.setAttribute(r,"class","col-xs-12");var l=e.createTextNode("\n          ");e.appendChild(r,l);var l=e.createComment("");e.appendChild(r,l);var l=e.createTextNode("\n        ");e.appendChild(r,l),e.appendChild(a,r);var r=e.createTextNode("\n    ");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=e.childAt(t,[2,1,1]),r=new Array(4);return r[0]=e.createMorphAt(a,1,1),r[1]=e.createMorphAt(a,3,3),r[2]=e.createMorphAt(a,5,5),r[3]=e.createMorphAt(e.childAt(t,[4,1,1]),1,1),r},statements:[["block","link-to",["examples"],[],0,null,["loc",[null,[12,10],[12,53]]]],["block","link-to",["features"],[],1,null,["loc",[null,[13,10],[13,53]]]],["block","link-to",["available-components"],[],2,null,["loc",[null,[14,10],[14,67]]]],["content","outlet",["loc",[null,[21,10],[21,20]]]]],locals:[],templates:[e,t,n]}}())}),define("dummy/screens/examples/dbmon/components/dbmon-row/component",["exports","ember"],function(e,t){"use strict";function n(e){return e>=10?"elapsed warn_long":e>=1?"elapsed warn":"elapsed short"}function a(e){var t=parseFloat(e).toFixed(2);if(e>60){var n=Math.floor(e/60),a=(e%60).toFixed(2).split("."),r=a[0].lpad("0",2),l=a[1];t=n+":"+r+"."+l}return t}var r=t["default"].computed;e["default"]=t["default"].Component.extend({tagName:"tr",queries:r.alias("db.queries"),topFiveQueries:r("queries",function(){for(var e=this.get("queries"),t=e.slice(0,5);t.length<5;)t.push({query:""});return t.map(function(e,t){return{key:t+"",query:e.query,elapsed:e.elapsed?a(e.elapsed):"",className:n(e.elapsed)}})}),countClassName:r("queries",function(){var e=this.get("queries"),t="label";return t+=e.length>=20?" label-important":e.length>=10?" label-warning":" label-success"})});var l=String.prototype;l.lpad=l.lpad||function(e,t){return e.repeat((t-this.length)/e.length).concat(this)}}),define("dummy/screens/examples/dbmon/components/dbmon-row/template",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{meta:{topLevel:null,revision:"Ember@2.1.0-beta.4",loc:{source:null,start:{line:9,column:0},end:{line:15,column:0}},moduleName:"dummy/screens/examples/dbmon/components/dbmon-row/template.hbs"},isEmpty:!1,arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("  ");e.appendChild(t,n);var n=e.createElement("td"),a=e.createComment("");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n  ");e.appendChild(t,n);var n=e.createElement("div");e.setAttribute(n,"class","popover bottom");var a=e.createTextNode("\n      ");e.appendChild(n,a);var a=e.createElement("div");e.setAttribute(a,"class","popover-content");var r=e.createComment("");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n      ");e.appendChild(n,a);var a=e.createElement("div");e.setAttribute(a,"class","arrow"),e.appendChild(n,a);var a=e.createTextNode("\n  ");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(2);return a[0]=e.createMorphAt(e.childAt(t,[1]),0,0),a[1]=e.createMorphAt(e.childAt(t,[3,1]),0,0),a},statements:[["content","query.elapsed",["loc",[null,[10,6],[10,23]]]],["content","query.query",["loc",[null,[12,35],[12,50]]]]],locals:["query"],templates:[]}}();return{meta:{topLevel:!1,revision:"Ember@2.1.0-beta.4",loc:{source:null,start:{line:1,column:0},end:{line:15,column:9}},moduleName:"dummy/screens/examples/dbmon/components/dbmon-row/template.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("td");e.setAttribute(n,"class","dbname");var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a);var a=e.createTextNode("\n");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createElement("td");e.setAttribute(n,"class","query-count");var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createElement("span"),r=e.createTextNode("\n    ");e.appendChild(a,r);var r=e.createComment("");e.appendChild(a,r);var r=e.createTextNode("\n  ");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createComment("");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=e.childAt(t,[2,1]),r=new Array(4);return r[0]=e.createMorphAt(e.childAt(t,[0]),1,1),r[1]=e.createAttrMorph(a,"class"),r[2]=e.createMorphAt(a,1,1),r[3]=e.createMorphAt(t,4,4,n),e.insertBoundary(t,null),r},statements:[["content","attrs.db.id",["loc",[null,[2,2],[2,17]]]],["attribute","class",["concat",[["get","countClassName",["loc",[null,[5,17],[5,31]]]]]]],["content","queries.length",["loc",[null,[6,4],[6,22]]]],["block","each",[["get","topFiveQueries",["loc",[null,[9,8],[9,22]]]]],["key","@index"],0,null,["loc",[null,[9,0],[15,9]]]]],locals:[],templates:[e]}}())}),define("dummy/screens/examples/dbmon/controller",["exports","ember"],function(e,t){"use strict";var n=t["default"].Controller;e["default"]=n.extend({})}),define("dummy/screens/examples/dbmon/route",["exports","ember","dummy/lib/get-data","smoke-and-mirrors/utils/next-frame"],function(e,t,n,a){"use strict";var r=t["default"].Route,l=t["default"].run;e["default"]=r.extend({numRows:100,model:function(){return n["default"](this.numRows)},afterModel:function(){l.later(this,this.loadSamples,100)},loadSamples:function(){this.controller.set("model",n["default"](this.numRows)),a["default"](this,this.loadSamples)},actions:{addRow:function(){this.numRows++},removeRow:function(){this.numRows--}}})}),define("dummy/screens/examples/dbmon/template",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{meta:{topLevel:null,revision:"Ember@2.1.0-beta.4",loc:{source:null,start:{line:7,column:18},end:{line:20,column:18}},moduleName:"dummy/screens/examples/dbmon/template.hbs"},isEmpty:!1,arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("                    ");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,1,1,n),a},statements:[["inline","examples/dbmon/components/dbmon-row",[],["tagName","","db",["subexpr","@mut",[["get","db",["loc",[null,[19,72],[19,74]]]]],[],[]]],["loc",[null,[19,20],[19,76]]]]],locals:["db"],templates:[]}}();return{meta:{topLevel:null,revision:"Ember@2.1.0-beta.4",loc:{source:null,start:{line:1,column:0},end:{line:40,column:0}},moduleName:"dummy/screens/examples/dbmon/template.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("div");e.setAttribute(n,"class","container-fluid");var a=e.createTextNode("\n    ");e.appendChild(n,a);var a=e.createElement("div");e.setAttribute(a,"class","row");var r=e.createTextNode("\n        ");e.appendChild(a,r);var r=e.createElement("div");e.setAttribute(r,"class","col-sm-7");var l=e.createTextNode("\n");e.appendChild(r,l);var l=e.createTextNode("            ");e.appendChild(r,l);var l=e.createElement("div");e.setAttribute(l,"class","table-wrapper");var d=e.createTextNode("\n                ");e.appendChild(l,d);var d=e.createElement("table");e.setAttribute(d,"class","table table-striped latest-data");var i=e.createTextNode("\n");e.appendChild(d,i);var i=e.createComment("");e.appendChild(d,i);var i=e.createTextNode("                ");e.appendChild(d,i),e.appendChild(l,d);var d=e.createTextNode("\n            ");e.appendChild(l,d),e.appendChild(r,l);var l=e.createTextNode("\n");e.appendChild(r,l);var l=e.createTextNode("        ");e.appendChild(r,l),e.appendChild(a,r);var r=e.createTextNode("\n        ");e.appendChild(a,r);var r=e.createElement("div");e.setAttribute(r,"class","col-sm-5");var l=e.createTextNode("\n            ");e.appendChild(r,l);var l=e.createElement("h3"),d=e.createTextNode("Vertical Collection");e.appendChild(l,d),e.appendChild(r,l);var l=e.createTextNode("\n            ");e.appendChild(r,l);var l=e.createElement("p"),d=e.createTextNode("\n                The Vertical Collection not only proxies it's content to avoid unnecessarily\n                destroying views, but also smartly hides and removes off screen content.\n            ");e.appendChild(l,d),e.appendChild(r,l);var l=e.createTextNode("\n            ");e.appendChild(r,l);var l=e.createElement("p"),d=e.createTextNode("\n                This makes building high frame-rate or render expensive components easier by\n                focusing only on what's on screen now.\n            ");e.appendChild(l,d),e.appendChild(r,l);var l=e.createTextNode("\n            ");e.appendChild(r,l);var l=e.createElement("h4"),d=e.createTextNode("Code for Demo");e.appendChild(l,d),e.appendChild(r,l);var l=e.createTextNode("\n          ");e.appendChild(r,l);var l=e.createComment("");e.appendChild(r,l);var l=e.createTextNode("\n        ");e.appendChild(r,l),e.appendChild(a,r);var r=e.createTextNode("\n    ");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=e.childAt(t,[0,1]),r=new Array(2);return r[0]=e.createMorphAt(e.childAt(a,[1,2,1]),1,1),r[1]=e.createMorphAt(e.childAt(a,[3]),9,9),r},statements:[["block","vertical-collection",[],["tagName","tbody","content",["subexpr","@mut",[["get","model.databases",["loc",[null,[9,28],[9,43]]]]],[],[]],"defaultHeight",37,"alwaysUseDefaultHeight",!0,"invisibleBuffer",1,"visibleBuffer",1,"useContentProxy",!1,"containerSelector",".table-wrapper","key","id"],0,null,["loc",[null,[7,18],[20,42]]]],["inline","code-snippet",[],["name","dbmon-example.hbs"],["loc",[null,[36,10],[36,51]]]]],locals:[],templates:[e]}}())}),define("dummy/screens/examples/flexible-layout/controller",["exports","ember","dummy/lib/get-images"],function(e,t,n){"use strict";{var a=t["default"].Controller;t["default"].Logger}e["default"]=a.extend({numImages:10,actions:{loadAbove:function(){var e=n.getDynamicImages(10),t=this.get("model.images"),a=e.concat(t);this.set("model.images",a)},loadBelow:function(){var e=n.getDynamicImages(10),t=this.get("model.images"),a=t.concat(e);this.set("model.images",a)}}})}),define("dummy/screens/examples/flexible-layout/route",["exports","ember","dummy/lib/get-images"],function(e,t,n){"use strict";var a=t["default"].Route;e["default"]=a.extend({model:function(){return{images:n.getDynamicImages(10)}}})}),define("dummy/screens/examples/flexible-layout/template",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{meta:{topLevel:null,revision:"Ember@2.1.0-beta.4",loc:{source:null,start:{line:6,column:14},end:{line:21,column:14}},moduleName:"dummy/screens/examples/flexible-layout/template.hbs"},isEmpty:!1,arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("                  ");e.appendChild(t,n);var n=e.createElement("div");e.setAttribute(n,"class","image-slide flexible");var a=e.createTextNode("\n                    ");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a);var a=e.createTextNode("\n                  ");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(e.childAt(t,[1]),1,1),a},statements:[["inline","async-image",[],["src",["subexpr","@mut",[["get","image.large",["loc",[null,[19,38],[19,49]]]]],[],[]]],["loc",[null,[19,20],[19,51]]]]],locals:["image"],templates:[]}}();return{meta:{topLevel:null,revision:"Ember@2.1.0-beta.4",loc:{source:null,start:{line:1,column:0},end:{line:34,column:6}},moduleName:"dummy/screens/examples/flexible-layout/template.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("div");e.setAttribute(n,"class","container-fluid");var a=e.createTextNode("\n    ");e.appendChild(n,a);var a=e.createElement("div");e.setAttribute(a,"class","row");var r=e.createTextNode("\n        ");e.appendChild(a,r);var r=e.createElement("div");e.setAttribute(r,"class","col-sm-7");var l=e.createTextNode("\n");e.appendChild(r,l);var l=e.createTextNode("            ");e.appendChild(r,l);var l=e.createElement("div");e.setAttribute(l,"class","table-wrapper");var d=e.createTextNode("\n");e.appendChild(l,d);var d=e.createComment("");e.appendChild(l,d);var d=e.createTextNode("            ");e.appendChild(l,d),e.appendChild(r,l);var l=e.createTextNode("\n");e.appendChild(r,l);var l=e.createTextNode("        ");e.appendChild(r,l),e.appendChild(a,r);var r=e.createTextNode("\n        ");e.appendChild(a,r);var r=e.createElement("div");e.setAttribute(r,"class","col-sm-5");var l=e.createTextNode("\n            ");e.appendChild(r,l);var l=e.createElement("h3"),d=e.createTextNode("Infinite Scroll");e.appendChild(l,d),e.appendChild(r,l);var l=e.createTextNode("\n            ");e.appendChild(r,l);var l=e.createElement("p"),d=e.createTextNode("\n                The Vertical Collection can be used to quickly build a robust infinite scroll.\n            ");e.appendChild(l,d),e.appendChild(r,l);var l=e.createTextNode("\n            ");e.appendChild(r,l);var l=e.createElement("h4"),d=e.createTextNode("Code for Demo");e.appendChild(l,d),e.appendChild(r,l);var l=e.createTextNode("\n          ");e.appendChild(r,l);var l=e.createComment("");e.appendChild(r,l);var l=e.createTextNode("\n        ");e.appendChild(r,l),e.appendChild(a,r);var r=e.createTextNode("\n    ");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n");return e.appendChild(n,a),e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=e.childAt(t,[0,1]),r=new Array(2);return r[0]=e.createMorphAt(e.childAt(a,[1,2]),1,1),r[1]=e.createMorphAt(e.childAt(a,[3]),7,7),r},statements:[["block","vertical-collection",[],["content",["subexpr","@mut",[["get","model.images",["loc",[null,[7,24],[7,36]]]]],[],[]],"defaultHeight",300,"alwaysUseDefaultHeight",!1,"containerSelector",".table-wrapper","invisibleBuffer",1,"visibleBuffer",2,"useContentProxy",!0,"firstReached","loadAbove","lastReached","loadBelow"],0,null,["loc",[null,[6,14],[21,38]]]],["inline","code-snippet",[],["name","infinite-scroll-example.hbs"],["loc",[null,[31,10],[31,61]]]]],locals:[],templates:[e]}}())}),define("dummy/screens/examples/index/controller",["exports","ember"],function(e,t){"use strict";var n=t["default"].Controller;e["default"]=n.extend({})}),define("dummy/screens/examples/index/route",["exports","ember"],function(e,t){"use strict";var n=t["default"].Route;e["default"]=n.extend({})}),define("dummy/screens/examples/index/template",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{meta:{topLevel:null,revision:"Ember@2.1.0-beta.4",loc:{source:null,start:{line:4,column:8},end:{line:4,column:42}},moduleName:"dummy/screens/examples/index/template.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("dbMon");return e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}(),t=function(){return{meta:{topLevel:null,revision:"Ember@2.1.0-beta.4",loc:{source:null,start:{line:7,column:6},end:{line:7,column:60}},moduleName:"dummy/screens/examples/index/template.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("Infinite Scroll");return e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}(),n=function(){return{meta:{topLevel:null,revision:"Ember@2.1.0-beta.4",loc:{source:null,start:{line:10,column:6},end:{line:10,column:60}},moduleName:"dummy/screens/examples/index/template.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("Flexible Layout");return e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}();return{meta:{topLevel:!1,revision:"Ember@2.1.0-beta.4",loc:{source:null,start:{line:1,column:0},end:{line:12,column:5}},moduleName:"dummy/screens/examples/index/template.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("h2"),a=e.createTextNode("Examples");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createElement("ul"),a=e.createTextNode("\n    ");e.appendChild(n,a);var a=e.createElement("li"),r=e.createTextNode("\n        ");e.appendChild(a,r);var r=e.createComment("");e.appendChild(a,r);var r=e.createTextNode("\n    ");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n    ");e.appendChild(n,a);var a=e.createElement("li"),r=e.createTextNode("\n      ");e.appendChild(a,r);var r=e.createComment("");e.appendChild(a,r);var r=e.createTextNode("\n    ");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n    ");e.appendChild(n,a);var a=e.createElement("li"),r=e.createTextNode("\n      ");e.appendChild(a,r);var r=e.createComment("");e.appendChild(a,r);var r=e.createTextNode("\n    ");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n");return e.appendChild(n,a),e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=e.childAt(t,[2]),r=new Array(3);return r[0]=e.createMorphAt(e.childAt(a,[1]),1,1),r[1]=e.createMorphAt(e.childAt(a,[3]),1,1),r[2]=e.createMorphAt(e.childAt(a,[5]),1,1),r},statements:[["block","link-to",["examples.dbmon"],[],0,null,["loc",[null,[4,8],[4,54]]]],["block","link-to",["examples.infinite-scroll"],[],1,null,["loc",[null,[7,6],[7,72]]]],["block","link-to",["examples.flexible-layout"],[],2,null,["loc",[null,[10,6],[10,72]]]]],locals:[],templates:[e,t,n]}}())}),define("dummy/screens/examples/infinite-scroll/controller",["exports","ember","dummy/lib/get-images"],function(e,t,n){"use strict";{var a=t["default"].Controller;t["default"].Logger}e["default"]=a.extend({numImages:10,actions:{loadAbove:function(){var e=n["default"](10),t=this.get("model.images"),a=e.concat(t);this.set("model.images",a)},loadBelow:function(){var e=n["default"](10),t=this.get("model.images"),a=t.concat(e);this.set("model.images",a)}}})}),define("dummy/screens/examples/infinite-scroll/route",["exports","ember","dummy/lib/get-images"],function(e,t,n){"use strict";var a=t["default"].Route;e["default"]=a.extend({model:function(){return{images:n["default"](10)}}})}),define("dummy/screens/examples/infinite-scroll/template",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{meta:{topLevel:null,revision:"Ember@2.1.0-beta.4",loc:{source:null,start:{line:6,column:14},end:{line:21,column:14}},moduleName:"dummy/screens/examples/infinite-scroll/template.hbs"},isEmpty:!1,arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("                  ");e.appendChild(t,n);var n=e.createElement("div");e.setAttribute(n,"class","image-slide");var a=e.createTextNode("\n                    ");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a);var a=e.createTextNode("\n                  ");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(e.childAt(t,[1]),1,1),a},statements:[["inline","async-image",[],["src",["subexpr","@mut",[["get","image.small",["loc",[null,[19,38],[19,49]]]]],[],[]]],["loc",[null,[19,20],[19,51]]]]],locals:["image"],templates:[]}}();return{meta:{topLevel:null,revision:"Ember@2.1.0-beta.4",loc:{source:null,start:{line:1,column:0},end:{line:34,column:6}},moduleName:"dummy/screens/examples/infinite-scroll/template.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("div");e.setAttribute(n,"class","container-fluid");var a=e.createTextNode("\n    ");e.appendChild(n,a);var a=e.createElement("div");e.setAttribute(a,"class","row");var r=e.createTextNode("\n        ");e.appendChild(a,r);var r=e.createElement("div");e.setAttribute(r,"class","col-sm-7");var l=e.createTextNode("\n");e.appendChild(r,l);var l=e.createTextNode("            ");e.appendChild(r,l);var l=e.createElement("div");e.setAttribute(l,"class","table-wrapper");var d=e.createTextNode("\n");e.appendChild(l,d);var d=e.createComment("");e.appendChild(l,d);var d=e.createTextNode("            ");e.appendChild(l,d),e.appendChild(r,l);var l=e.createTextNode("\n");e.appendChild(r,l);var l=e.createTextNode("        ");e.appendChild(r,l),e.appendChild(a,r);var r=e.createTextNode("\n        ");e.appendChild(a,r);var r=e.createElement("div");e.setAttribute(r,"class","col-sm-5");var l=e.createTextNode("\n            ");e.appendChild(r,l);var l=e.createElement("h3"),d=e.createTextNode("Infinite Scroll");e.appendChild(l,d),e.appendChild(r,l);var l=e.createTextNode("\n            ");e.appendChild(r,l);var l=e.createElement("p"),d=e.createTextNode("\n                The Vertical Collection can be used to quickly build a robust infinite scroll.\n            ");e.appendChild(l,d),e.appendChild(r,l);var l=e.createTextNode("\n            ");e.appendChild(r,l);var l=e.createElement("h4"),d=e.createTextNode("Code for Demo");e.appendChild(l,d),e.appendChild(r,l);var l=e.createTextNode("\n          ");e.appendChild(r,l);var l=e.createComment("");e.appendChild(r,l);var l=e.createTextNode("\n        ");e.appendChild(r,l),e.appendChild(a,r);var r=e.createTextNode("\n    ");

e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n");return e.appendChild(n,a),e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=e.childAt(t,[0,1]),r=new Array(2);return r[0]=e.createMorphAt(e.childAt(a,[1,2]),1,1),r[1]=e.createMorphAt(e.childAt(a,[3]),7,7),r},statements:[["block","vertical-collection",[],["content",["subexpr","@mut",[["get","model.images",["loc",[null,[7,24],[7,36]]]]],[],[]],"defaultHeight",350,"alwaysUseDefaultHeight",!0,"containerSelector",".table-wrapper","invisibleBuffer",1,"visibleBuffer",2,"useContentProxy",!0,"firstReached","loadAbove","lastReached","loadBelow"],0,null,["loc",[null,[6,14],[21,38]]]],["inline","code-snippet",[],["name","infinite-scroll-example.hbs"],["loc",[null,[31,10],[31,61]]]]],locals:[],templates:[e]}}())}),define("dummy/screens/index/controller",["exports","ember","dummy/config/environment"],function(e,t,n){"use strict";var a=t["default"].Controller;e["default"]=a.extend({version:n["default"].version,emberVersion:t["default"].VERSION})}),define("dummy/screens/index/route",["exports","ember"],function(e,t){"use strict";var n=t["default"].Route;e["default"]=n.extend({})}),define("dummy/screens/index/template",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{meta:{topLevel:!1,revision:"Ember@2.1.0-beta.4",loc:{source:null,start:{line:1,column:0},end:{line:8,column:4}},moduleName:"dummy/screens/index/template.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("h2"),a=e.createTextNode("Overview");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createElement("p"),a=e.createTextNode("\n    This repo is currently running smoke-and-mirrors ");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a);var a=e.createTextNode(" against Ember ");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a);var a=e.createTextNode("\n");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createElement("p"),a=e.createTextNode("\n    1.0 is coming.\n");return e.appendChild(n,a),e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=e.childAt(t,[2]),r=new Array(2);return r[0]=e.createMorphAt(a,1,1),r[1]=e.createMorphAt(a,3,3),r},statements:[["content","version",["loc",[null,[4,53],[4,64]]]],["content","emberVersion",["loc",[null,[4,79],[4,95]]]]],locals:[],templates:[]}}())}),define("dummy/services/in-viewport",["exports","smoke-and-mirrors/services/in-viewport"],function(e,t){"use strict";e["default"]=t["default"]}),define("dummy/services/local-sync",["exports","smoke-and-mirrors/services/local-sync"],function(e,t){"use strict";e["default"]=t["default"]}),define("dummy/services/storage",["exports","smoke-and-mirrors/services/storage"],function(e,t){"use strict";e["default"]=t["default"]}),define("dummy/snippets",["exports"],function(e){"use strict";e["default"]={}}),define("dummy/templates/components/code-snippet",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{meta:{topLevel:null,revision:"Ember@2.1.0-beta.4",loc:{source:null,start:{line:1,column:0},end:{line:2,column:0}},moduleName:"dummy/templates/components/code-snippet.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,0,0,n),e.insertBoundary(t,0),a},statements:[["content","source",["loc",[null,[1,0],[1,10]]]]],locals:[],templates:[]}}())}),define("dummy/config/environment",["ember"],function(e){var t="dummy";try{var n=t+"/config/environment",a=e["default"].$('meta[name="'+n+'"]').attr("content"),r=JSON.parse(unescape(a));return{"default":r}}catch(l){throw new Error('Could not read config from meta tag with name "'+n+'".')}}),runningTests?require("dummy/tests/test-helper"):require("dummy/app")["default"].create({LOG_LFANIMATION_RESOLUTION:!1,debugMode:!1,LOG_ACTIVE_GENERATION:!1,LOG_BINDINGS:!1,LOG_RESOLVER:!1,LOG_STACKTRACE_ON_DEPRECATION:!1,LOG_TRANSITIONS:!1,LOG_TRANSITIONS_INTERNAL:!1,LOG_VERSION:!1,LOG_VIEW_LOOKUPS:!1,name:"smoke-and-mirrors",version:"0.3.3"});