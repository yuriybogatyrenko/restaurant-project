(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{O3bw:function(t,e,i){"use strict";i.r(e);var a=i("8Y7J");class n{}var s=i("pMnS"),l=i("IY7X"),h=i("Ni3L"),o=i.n(h);let r=(()=>{class t{constructor(){}getDistance(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}}return t.ngInjectableDef=a.Mb({factory:function(){return new t},token:t,providedIn:"root"}),t})();class c{constructor(t,e){this.elRef=t,this.touchS=e,this.preview=new a.m,this.scale=1,this.lastDist=0}ngOnInit(){const t=this;this.stage=new o.a.Stage({draggable:!0,dragBoundFunc:function(e){let i,a;return[i,a]=t.scale>1?t.countPosition(e):[this.absolutePosition().x,this.absolutePosition().y],console.log(i,a),{x:i,y:a}},scale:{x:this.scale,y:this.scale},width:window.innerWidth,height:window.innerHeight,container:"table-map"}),this.mapLayer=new o.a.Layer,this.stage.add(this.mapLayer),this.tablesLayer=new o.a.Layer,this.stage.add(this.tablesLayer);const e=new Image;e.src="./assets/resto.jpg",e.onload=()=>{const t=Math.min(this.stage.width()/e.width,this.stage.height()/e.height);this.mapScale=t,this.stage.width(e.width*t),this.stage.height(e.height*t);const i=new o.a.Image({image:e,x:(this.stage.width()-e.width*t)/2,y:(this.stage.height()-e.height*t)/2,width:e.width*t,height:e.height*t});this.mapLayer.add(i),this.mapLayer.draw(),this.drawTables()},this.stage.getContent().addEventListener("touchmove",t=>{const e=t.touches[0],i=t.touches[1];if(e&&i){const t=this.touchS.getDistance({x:e.clientX,y:e.clientY},{x:i.clientX,y:i.clientY});this.lastDist||(this.lastDist=t),this.scale=this.stage.scaleX()*t/this.lastDist,this.scale=this.scale<1?1:this.scale>4?4:this.scale,this.stage.scale({x:this.scale,y:this.scale}),this.stage.draw(),this.lastDist=t}},!1),this.stage.getContent().addEventListener("touchend",()=>{this.lastDist=0},!1),this.tablesLayer.on("click tap",t=>{this.preview.emit(this.tables.find(e=>e.id.toString()===t.target.name()))})}countPosition(t){let e,i;return[i=t.x>0?0:Math.abs(t.x)>this.stage.width()*this.scale-this.stage.width()?-(this.stage.width()*this.scale-this.stage.width()):t.x,e=t.y>0?0:Math.abs(t.y)>this.stage.height()*this.scale-this.stage.height()?-(this.stage.height()*this.scale-this.stage.height()):t.y]}drawTables(){this.tables.forEach(t=>{let e;console.log(t),t.type===l.a.SQUARE||t.type===l.a.POLYGON?e=new o.a.Rect({x:t.position.x*this.mapScale,y:t.position.y*this.mapScale,width:t.position.width*this.mapScale,height:t.position.height*this.mapScale,strokeWidth:1,stroke:"#000",fill:"rgba(0,0,0,0.2)",name:t.id.toString(),rotation:t.position.rotate}):t.type===l.a.ROUND&&(e=new o.a.Circle({x:t.position.x*this.mapScale,y:t.position.y*this.mapScale,strokeWidth:1,stroke:"#000",fill:"rgba(0,0,0,0.2)",name:t.id.toString(),radius:t.position.width/2*this.mapScale})),e&&(this.tablesLayer.add(e),this.tablesLayer.draw())})}}var u=a.pb({encapsulation:0,styles:[[""]],data:{}});function b(t){return a.Ib(0,[(t()(),a.rb(0,0,null,null,0,"div",[["id","table-map"]],null,null,null,null,null))],null,null)}var p=i("SVse"),g=i("2Vo4");const d=[{id:1,title:"VIP 21",number:22,count:2,gallery:[],position:{x:350,y:93,width:27,height:60,rotate:90},type:l.a.POLYGON},{id:2,title:"VIP 22",number:22,count:2,gallery:[],position:{x:320,y:290,width:30,height:60,rotate:0},type:l.a.SQUARE},{id:3,title:"VIP 23",number:22,count:2,gallery:[],position:{x:875,y:370,width:90,height:100,rotate:90},type:l.a.ROUND}];class w{constructor(t){this.table=t}ngOnInit(){}}class y{constructor(t){this._matDialog=t,this.tables$=new g.a([])}ngOnInit(){this.tables$.next(d)}onPreview(t){this._matDialog.open(w,{data:t})}}var m=i("s6ns"),f=a.pb({encapsulation:0,styles:[[""]],data:{}});function v(t){return a.Ib(0,[(t()(),a.rb(0,0,null,null,2,"app-client-map",[],null,[[null,"preview"]],function(t,e,i){var a=!0;return"preview"===e&&(a=!1!==t.component.onPreview(i)&&a),a},b,u)),a.qb(1,114688,null,0,c,[a.k,r],{tables:[0,"tables"]},{preview:"preview"}),a.Cb(131072,p.b,[a.h])],function(t,e){var i=e.component;t(e,1,0,a.Hb(e,1,0,a.Bb(e,2).transform(i.tables$)))},null)}function x(t){return a.Ib(0,[(t()(),a.rb(0,0,null,null,1,"app-client-plan",[],null,null,null,v,f)),a.qb(1,114688,null,0,y,[m.e],null,null)],function(t,e){t(e,1,0)},null)}var A=a.nb("app-client-plan",y,x,{},{},[]),I=i("t68o"),S=a.pb({encapsulation:0,styles:[[""]],data:{}});function L(t){return a.Ib(0,[(t()(),a.rb(0,0,null,null,2,"p",[],null,null,null,null,null)),(t()(),a.Gb(1,null,["",""])),a.Cb(0,p.f,[])],null,function(t,e){var i=e.component;t(e,1,0,a.Hb(e,1,0,a.Bb(e,2).transform(i.table)))})}function D(t){return a.Ib(0,[(t()(),a.rb(0,0,null,null,1,"app-popup-table-info",[],null,null,null,L,S)),a.qb(1,114688,null,0,w,[m.a],null,null)],function(t,e){t(e,1,0)},null)}var P=a.nb("app-popup-table-info",w,D,{},{},[]),k=i("QQfA"),O=i("IP0z"),M=i("iInd");class j{}var N=i("zMNK"),R=i("/HVE"),C=i("hOhj"),E=i("Xd0L"),V=i("cUpR");i.d(e,"ClientPlanModuleNgFactory",function(){return Y});var Y=a.ob(n,[],function(t){return a.zb([a.Ab(512,a.j,a.Z,[[8,[s.a,A,I.a,P]],[3,a.j],a.v]),a.Ab(4608,p.k,p.j,[a.s,[2,p.r]]),a.Ab(4608,k.a,k.a,[k.g,k.c,a.j,k.f,k.d,a.p,a.x,p.d,O.b,[2,p.h]]),a.Ab(5120,k.h,k.i,[k.a]),a.Ab(5120,m.c,m.d,[k.a]),a.Ab(135680,m.e,m.e,[k.a,a.p,[2,p.h],[2,m.b],m.c,[3,m.e],k.c]),a.Ab(1073742336,p.c,p.c,[]),a.Ab(1073742336,M.l,M.l,[[2,M.q],[2,M.k]]),a.Ab(1073742336,j,j,[]),a.Ab(1073742336,O.a,O.a,[]),a.Ab(1073742336,N.f,N.f,[]),a.Ab(1073742336,R.b,R.b,[]),a.Ab(1073742336,C.b,C.b,[]),a.Ab(1073742336,k.e,k.e,[]),a.Ab(1073742336,E.b,E.b,[[2,E.a],[2,V.f]]),a.Ab(1073742336,m.h,m.h,[]),a.Ab(1073742336,n,n,[]),a.Ab(1024,M.i,function(){return[[{path:"",component:y}]]},[])])})}}]);