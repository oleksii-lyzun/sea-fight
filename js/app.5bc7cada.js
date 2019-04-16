(function(t){function e(e){for(var i,a,u=e[0],o=e[1],c=e[2],h=0,p=[];h<u.length;h++)a=u[h],s[a]&&p.push(s[a][0]),s[a]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i]);l&&l(e);while(p.length)p.shift()();return n.push.apply(n,c||[]),r()}function r(){for(var t,e=0;e<n.length;e++){for(var r=n[e],i=!0,u=1;u<r.length;u++){var o=r[u];0!==s[o]&&(i=!1)}i&&(n.splice(e--,1),t=a(a.s=r[0]))}return t}var i={},s={app:0},n=[];function a(e){if(i[e])return i[e].exports;var r=i[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=t,a.c=i,a.d=function(t,e,r){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(r,i,function(e){return t[e]}.bind(null,i));return r},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/sea-fight/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],o=u.push.bind(u);u.push=e,u=u.slice();for(var c=0;c<u.length;c++)e(u[c]);var l=o;n.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"1ef3":function(t,e,r){"use strict";var i=r("d854"),s=r.n(i);s.a},"2bf3":function(t,e,r){"use strict";var i=r("628d"),s=r.n(i);s.a},3207:function(t,e,r){},"3c47":function(t,e,r){"use strict";var i=r("97ea"),s=r.n(i);s.a},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var i=r("2b0e"),s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("div",{staticClass:"decks"},[r("battle-field-computer",{staticClass:"m-right-20"}),r("battle-field-user",{staticClass:"m-left-20"})],1),t.isGameStarted?r("logger",{staticClass:"log"}):r("rules",{staticClass:"rules"})],1)},n=[],a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"root"},[r("common-header",{attrs:{participant:"computer"}}),r("div",{staticClass:"deck-computer"},t._l(t.stateStartDeck,function(e,i){return r("battle-field-computer-square",{key:i,attrs:{x:e.xAxis,y:e.yAxis,"mark-status":e.marked,"is-clicked":e.clicked},on:{"square-clicked":t.squareWasClicked}})}),1)],1)},u=[],o=r("75fc"),c=(r("c5f6"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"computer-square c-pointer",class:[t.isClicked&&2===t.markStatus?"marked":"",t.isClicked&&2!==t.markStatus?"missed":""],on:{click:function(e){return t.onSquareClick()}}})}),l=[],h=r("e814"),p=r.n(h),d=r("d225"),f=r("b0b4"),m=function(){function t(){Object(d["a"])(this,t)}return Object(f["a"])(t,null,[{key:"getRandomInt",value:function(t){return Math.floor(Math.random()*t)}},{key:"getRandomBoolean",value:function(){return Math.random()>.5}},{key:"switchCoordinatesToNumber",value:function(t,e){return 0===t&&0===e?0:0===e?t:p()("".concat(e).concat(t))}}]),t}(),v={name:"BattleFieldComputerSquare",data:function(){return{}},props:{x:{type:Number,required:!0},y:{type:Number,required:!0},markStatus:{type:Number,required:!0},isClicked:{type:Boolean,required:!0}},computed:{isGameStarted:function(){return this.$store.state.gameStarted},isUserMove:function(){return 1===this.$store.state.userMove}},methods:{onSquareClick:function(){var t=this.$store.state.gameEnded;if(this.isGameStarted&&!this.isClicked&&(!this.isGameStarted||this.isUserMove)&&!t){var e=m.switchCoordinatesToNumber(this.x,this.y);this.$emit("square-clicked",e)}}}},S=v,k=(r("ae44"),r("2877")),g=Object(k["a"])(S,c,l,!1,null,"4cad7e82",null),b=g.exports,q=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"root"},[t._v(" "+t._s(t.caption)+" ")])},w=[],y={name:"CommonHeader",data:function(){return{}},props:{participant:{required:!0,type:String}},computed:{caption:function(){var t=this.$store.state.gameStarted,e=this.$store.state.gameEnded,r=this.$store.state.userMove,i=this.$store.state.userShips,s=this.$store.state.computerShips;if("computer"===this.participant){if(!t)return"Computer ready!";if(t&&!r&&!e)return"Computer move";if(e){if(0===i.length)return"Ho-ho! I won. Make robots great again!";if(0===s.length)return"My retribution will come soon. Beware!"}}else{if(!t)return"You need to place your ships!";if(t&&r&&!e)return"Your move now";if(e){if(0===i.length)return"Game over. Computer wins!";if(0===s.length)return"Game over. You win!"}}return"Waiting..."}}},C=y,O=(r("8a73"),Object(k["a"])(C,q,w,!1,null,"dbc1d268",null)),x=O.exports,D=(r("55dd"),r("b6d0")),M=r.n(D),_=function(){function t(){Object(d["a"])(this,t)}return Object(f["a"])(t,null,[{key:"unique",value:function(t){return Object(o["a"])(new M.a(t))}},{key:"removeValues",value:function(t,e){for(var r=e.length-1;r>=0;r--)t.splice(e[r],1);return t}},{key:"clone",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e?Object(o["a"])(t).sort():Object(o["a"])(t)}},{key:"divideIntoTwoParts",value:function(e,r){var i=t.clone(e),s=i.slice(0,r),n=i.slice(r+1);return{firstArr:s,secondArr:n}}}]),t}(),$={data:function(){return{ships:[],startDeck:[],gameOver:!1,zerosMap:[-10,-9,1,10,11],ninesMap:[-11,-10,-1,9,10],generalMap:[-11,-10,-9,-1,1,9,10,11]}},computed:{isGameEnded:function(){return this.$store.state.gameEnded}},created:function(){this.createStartDeck()},methods:{markForbiddenSquares:function(t){var e=this,r=[];return t.map(function(t){t%10===0?e.zerosMap.map(function(i){if(t+i>-1&&t+i<100&&2!==e.startDeck[t+i].marked){e.startDeck[t+i].marked=1;var s=t+i;r.push(s)}}):t%10===9?e.ninesMap.map(function(i){if(t+i>-1&&t+i<100&&2!==e.startDeck[t+i].marked){e.startDeck[t+i].marked=1;var s=t+i;r.push(s)}}):e.generalMap.map(function(i){if(t+i>-1&&t+i<100&&2!==e.startDeck[t+i].marked){e.startDeck[t+i].marked=1;var s=t+i;r.push(s)}})}),_.unique(r)},createStartDeck:function(){for(var t=0;t<this.columns;t++)for(var e=0;e<this.rows;e++)this.startDeck.push({xAxis:e,yAxis:t,marked:0,clicked:!1})}},watch:{isGameEnded:function(t){t&&(this.gameOver=!0)}}},j={name:"BattleFieldComputer",mixins:[$],components:{BattleFieldComputerSquare:b,CommonHeader:x},props:{rows:{default:10,type:Number,required:!1},columns:{default:10,type:Number,required:!1}},data:function(){return{}},computed:{unmarkedSquares:function(){return this.startDeck.map(function(t,e){if(0===t.marked)return e}).filter(function(t){return t})},stateStartDeck:function(){return this.$store.state.computerStartDeck},isUserMove:function(){return 1===this.$store.state.userMove}},methods:{buildOneSquareShip:function(){var t=m.getRandomInt(this.unmarkedSquares.length),e=[this.unmarkedSquares[t]];this.markAvailableSquares(e);var r=this.markForbiddenSquares(e),i=[[].concat(e,[Object(o["a"])(r)])];this.ships=this.ships.concat(i)},buildNthSquaresShip:function(t){var e=m.getRandomInt(this.unmarkedSquares.length),r=this.checkAvailableSquares(this.unmarkedSquares[e],t);if(!r)return this.buildNthSquaresShip(t);this.markAvailableSquares(r);var i=this.markForbiddenSquares(r),s=[[].concat(Object(o["a"])(r),[Object(o["a"])(i)])];this.ships=this.ships.concat(s)},markAvailableSquares:function(t){var e=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];t.map(function(t){e.startDeck[t].marked=r,e.startDeck[t].clicked=i})},checkAvailableSquares:function(t,e){if(0!==this.startDeck[t].marked)return!1;var r=m.getRandomBoolean();if(r){var i=this.checkAvailableSquaresVertically(t,e);if(i.length===e)return i;var s=this.checkAvailableSquaresHorizontally(t,e);if(s.length===e)return s}else{var n=this.checkAvailableSquaresHorizontally(t,e);if(n.length===e)return n;var a=this.checkAvailableSquaresVertically(t,e);if(a.length===e)return a}return!1},checkAvailableSquaresHorizontally:function(t,e){for(var r=[t],i=0,s=1;s<e;s++){var n=t+s;if(!(n%10&&0===this.startDeck[n].marked))break;r.push(n)}if(r.length===e)return r;i=e-r.length;for(var a=1;a<i;a++){var u=t-a;if(!(u%10!==9&&u>-1&&0===this.startDeck[u].marked))break;r.push(u)}return r.length===e?r:[t]},checkAvailableSquaresVertically:function(t,e){for(var r=[t],i=0,s=1;s<e;s++){var n=t+10*s;if(!(n<100&&0===this.startDeck[n].marked))break;r.push(n)}if(r.length===e)return r;i=e-r.length;for(var a=1;a<i;a++){var u=t-10*a;if(!(u>-1&&0===this.startDeck[u].marked))break;r.push(u)}return r.length===e?r:[t]},createStartDeckWithShips:function(){this.buildNthSquaresShip(4),this.buildNthSquaresShip(3),this.buildNthSquaresShip(3),this.buildNthSquaresShip(2),this.buildNthSquaresShip(2),this.buildNthSquaresShip(2),this.buildOneSquareShip(),this.buildOneSquareShip(),this.buildOneSquareShip(),this.buildOneSquareShip()},squareWasClicked:function(t){this.$store.commit("setUserShot",t)}},created:function(){this.createStartDeckWithShips(),this.$store.commit("initializeComputerStartDeck",this.startDeck),this.$store.commit("initializeComputerShips",this.ships)}},A=j,F=(r("2bf3"),Object(k["a"])(A,a,u,!1,null,"46e5f004",null)),N=F.exports,E=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"root"},[r("common-header",{attrs:{participant:"user"}}),r("div",{staticClass:"deck-user"},t._l(t.stateStartDeck,function(e){return r("BattleFieldUserSquare",{key:""+e.xAxis+e.yAxis,attrs:{x:e.xAxis,y:e.yAxis,"mark-status":e.marked,"is-clicked":e.clicked},on:{"square-clicked":t.squareWasClicked}})}),1),r("user-footer",{attrs:{cnt:t.shipsCnt},on:{"user-started-game":t.gameStartRequest}})],1)},G=[],T=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"user-square c-pointer",class:[t.showMarked?"marked":"",t.showMissed?"missed":"",t.isGameStarted?"trans":""],on:{click:function(e){return t.onSquareClick()}}})},H=[],U={name:"BattleFieldUserSquare",data:function(){return{clicked:!1}},props:{x:{type:Number,required:!0},y:{type:Number,required:!0},markStatus:{type:Number,required:!0},isClicked:{type:Boolean,required:!0}},computed:{isGameStarted:function(){return this.$store.state.gameStarted},isUserMove:function(){return 1===this.$store.state.userMove},showMarked:function(){return 2===this.markStatus&&!this.isGameStarted||(!(2!==this.markStatus||!this.isGameStarted||!this.isClicked)||void 0)},showMissed:function(){if(this.isGameStarted&&this.isClicked&&2!==this.markStatus)return!0}},methods:{onSquareClick:function(){var t=this.$store.state.gameEnded;if((!this.isGameStarted||!this.isUserMove)&&!t){var e=m.switchCoordinatesToNumber(this.x,this.y);this.clicked=2!==this.markStatus;var r={num:e,clickedStatus:this.clicked};this.$emit("square-clicked",r)}}}},R=U,B=(r("a4ba"),Object(k["a"])(R,T,H,!1,null,"74e82610",null)),z=B.exports,W=function(){var t=this,e=t.$createElement,r=t._self._c||e;return!t.isGameStarted||t.isGameEnded?r("div",[t.shipsPlacedCorrectly||t.isGameEnded?t.isGameEnded?r("div",{staticClass:"button c-pointer"},[r("Button",{staticClass:"success",attrs:{width:"100%",height:"100%",caption:"START NEW GAME"},nativeOn:{click:function(e){return t.startNewGame(e)}},scopedSlots:t._u([{key:"fontAwesome",fn:function(t){return[r("font-awesome-icon",{staticClass:"button-start",attrs:{icon:"check-circle"}})]}}])})],1):r("div",{staticClass:"button c-pointer"},[r("Button",{staticClass:"success",attrs:{width:"50%",height:"100%",caption:"START"},nativeOn:{click:function(e){return t.userAction("start")}},scopedSlots:t._u([{key:"fontAwesome",fn:function(t){return[r("font-awesome-icon",{staticClass:"button-start",attrs:{icon:"check-circle"}})]}}])}),r("Button",{staticClass:"refresh",attrs:{width:"50%",height:"100%",caption:"REFRESH"},nativeOn:{click:function(e){return t.userAction("refresh")}},scopedSlots:t._u([{key:"fontAwesome",fn:function(t){return[r("font-awesome-icon",{staticClass:"button-refresh",attrs:{icon:"sync-alt"}})]}}])})],1):r("div",{staticClass:"chart"},[r("circle-chart",{directives:[{name:"tooltip",rawName:"v-tooltip",value:"Four-square ships",expression:"'Four-square ships'"}],attrs:{val:t.percentOfFourShips}}),r("circle-chart",{directives:[{name:"tooltip",rawName:"v-tooltip",value:"Three-square ships",expression:"'Three-square ships'"}],attrs:{val:t.percentOfThreeShips}}),r("circle-chart",{directives:[{name:"tooltip",rawName:"v-tooltip",value:"Two-square ships",expression:"'Two-square ships'"}],attrs:{val:t.percentOfTwoShips}}),r("circle-chart",{directives:[{name:"tooltip",rawName:"v-tooltip",value:"One-square ships",expression:"'One-square ships'"}],attrs:{val:t.percentOfOneShip}})],1)]):r("div")},I=[],P=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"root",style:{width:t.width,height:t.height}},[t._t("fontAwesome"),r("span",{staticClass:"caption"},[t._v(t._s(t.caption))])],2)},V=[],Y={name:"Button",props:{width:{type:String,required:!1,default:"initial"},height:{type:String,required:!1,default:"initial"},caption:{type:String,required:!1,default:""}}},Z=Y,J=Object(k["a"])(Z,P,V,!1,null,null,null),L=J.exports,K=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"single-chart"},[r("svg",{staticClass:"circular-chart green",attrs:{viewBox:"0 0 36 36"}},[r("path",{staticClass:"circle-bg",attrs:{d:"M18 2.0845\n\t\t\t\t  a 15.9155 15.9155 0 0 1 0 31.831\n\t\t\t\t  a 15.9155 15.9155 0 0 1 0 -31.831"}}),r("path",{staticClass:"circle",attrs:{"stroke-dasharray":t.percent,d:"M18 2.0845\n\t\t\t\t  a 15.9155 15.9155 0 0 1 0 31.831\n\t\t\t\t  a 15.9155 15.9155 0 0 1 0 -31.831"}}),r("text",{staticClass:"percentage",attrs:{x:"18",y:"20.35"}},[t._v(t._s(t.val)+"%")])])])},Q=[],X={name:"CircleChart",props:{val:{required:!0}},computed:{percent:function(){return"".concat(this.val,", 100")}}},tt=X,et=(r("1ef3"),Object(k["a"])(tt,K,Q,!1,null,"248be949",null)),rt=et.exports,it={name:"UserFooter",components:{CircleChart:rt,Button:L},data:function(){return{gameOver:!1}},props:{cnt:{required:!0,type:Object}},computed:{percentOfFourShips:function(){return 100*this.cnt.four},percentOfThreeShips:function(){return(100*this.cnt.three/2).toFixed()},percentOfTwoShips:function(){return(100*this.cnt.two/3).toFixed()},percentOfOneShip:function(){return(100*this.cnt.one/4).toFixed()},shipsPlacedCorrectly:function(){if(!this.cnt)return!1;var t=this.cnt;return 4===t.one&&3===t.two&&2===t.three&&1===t.four},isGameStarted:function(){return this.$store.state.gameStarted},isGameEnded:function(){return this.$store.state.gameEnded}},methods:{userAction:function(t){this.$emit("user-started-game",t)},startNewGame:function(){window.location.reload()}},watch:{isGameEnded:function(t){t&&(this.gameOver=!0)}}},st=it,nt=(r("7d57"),Object(k["a"])(st,W,I,!1,null,"6a3342b1",null)),at=nt.exports,ut={name:"BattleFieldUser",mixins:[$],components:{BattleFieldUserSquare:z,UserFooter:at,CommonHeader:x},props:{rows:{default:10,type:Number,required:!1},columns:{default:10,type:Number,required:!1}},data:function(){return{allowedSquares:[-10,-1,1,10],allowedSquaresZeros:[-10,1,10],allowedSquaresNines:[-10,-1,10],forbiddenSquares:[-11,-9,9,11],forbiddenSquaresZeros:[-9,11],forbiddenSquaresNines:[-11,9]}},computed:{shipsCnt:function(){var t={one:0,two:0,three:0,four:0};return this.ships.map(function(e){switch(e.length){case 1:t.one++;break;case 2:t.two++;break;case 3:t.three++;break;case 4:t.four++;break}}),t},totalShipsCnt:function(){return this.ships.length},isGameStarted:function(){return this.$store.state.gameStarted},stateStartDeck:function(){return this.isGameStarted?this.$store.state.userStartDeck:this.startDeck}},methods:{gameStartRequest:function(t){var e=this;if("refresh"===t)return this.refreshAllShips();"start"===t&&(this.ships=this.ships.map(function(t){var r=e.markForbiddenSquares(t);return t=[].concat(Object(o["a"])(t),[Object(o["a"])(r)]),t}),this.$store.commit("initializeUserStartDeck",this.startDeck),this.$store.commit("initializeUserShips",this.ships),this.$store.commit("startGame"))},refreshAllShips:function(){var t=this;this.ships.map(function(e){e.map(function(e){t.startDeck[e].marked=0})}),this.ships=[]},squareWasClicked:function(t){this.addShip(t)},addShip:function(t){var e=t.num,r=t.clickedStatus,i=this.checkDiagonal(e);i||this.updateShips(e,r)},updateShips:function(t,e){if(e){var r=this.addToShip(t,e);return r&&this.setMarkedStatus(t,e),r}var i=this.deleteFromShip(t,e);return i&&this.setMarkedStatus(t,e),i},deleteFromShip:function(t){var e=this.findShipForDeletion(t);return 1===this.ships[e].length?(this.ships.splice(e,1),!0):this.splitOneShip(e,t)},splitOneShip:function(t,e){var r=_.clone(this.ships[t],!0),i=r.indexOf(e);if(0===i||i===r.length-1)return r.splice(i,1),this.ships.splice(t,1),this.ships=[].concat(Object(o["a"])(this.ships),[r]),!0;var s=_.divideIntoTwoParts(r,i);return this.ships.length<10?(this.ships.splice(t,1),this.ships=[].concat(Object(o["a"])(this.ships),[s.firstArr,s.secondArr]),!0):void 0},findShipForDeletion:function(t){var e=null;return this.ships.map(function(r,i){-1!==r.indexOf(t)&&(e=i)}),e},addToShip:function(t){var e=[],r=null;return r=t%10===0?this.allowedSquaresZeros.map(function(e){return t+e}).filter(function(t){return t>-1&&t<100}):t%10===9?this.allowedSquaresNines.map(function(e){return t+e}).filter(function(t){return t>-1&&t<100}):this.allowedSquares.map(function(e){return t+e}).filter(function(t){return t>-1&&t<100}),this.ships.map(function(t,i){t.map(function(t){-1!==r.indexOf(t)&&e.push(i)})}),2===e.length?this.glueTwoShips(e,t):1===e.length?this.extendOneShip(r,t):this.totalShipsCnt<10&&(this.ships=[].concat(Object(o["a"])(this.ships),[[t]]))},glueTwoShips:function(t,e){var r=null,i=[].concat(Object(o["a"])(this.ships[t[0]]),Object(o["a"])(this.ships[t[1]]));return!(i.length>3)&&(r=!0,this.ships=_.removeValues(this.ships,t),this.ships.push([].concat(Object(o["a"])(i),[e])),r)},extendOneShip:function(t,e){for(var r=null,i=0;i<this.ships.length;i++)for(var s=0;s<this.ships[i].length;s++){var n=this.ships[i][s];if(-1!==t.indexOf(n)){var a=this.ships[i].length;4===a?r=!1:(r=!0,this.ships[i].push(e))}}return r},setMarkedStatus:function(t,e){this.startDeck[t].marked=e?2:0},checkDiagonal:function(t){var e=this,r=!1;return this.startDeck.map(function(){t%10===0?e.forbiddenSquaresZeros.map(function(i){var s=t+i;s>-1&&s<100&&2===e.startDeck[t+i].marked&&(r=!0)}):t%10===9?e.forbiddenSquaresNines.map(function(i){var s=t+i;s>-1&&s<100&&2===e.startDeck[t+i].marked&&(r=!0)}):e.forbiddenSquares.map(function(i){var s=t+i;s>-1&&s<100&&2===e.startDeck[t+i].marked&&(r=!0)})}),r}}},ot=ut,ct=(r("8afc"),Object(k["a"])(ot,E,G,!1,null,"6086e376",null)),lt=ct.exports,ht=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"logger"},[r("textarea",{ref:"logger",staticClass:"logger-text",attrs:{readonly:""}},[t._v(t._s(t.loggerInfo))])])},pt=[],dt={name:"Logger",computed:{loggerInfo:function(){if(!this.$store.state.gameStarted)return"Waiting for start of a game...";var t=this.$store.state.logger;return this.$nextTick(function(){this.$refs.logger.scrollTop=this.$refs.logger.scrollHeight}),t.join("")}}},ft=dt,mt=(r("7072"),Object(k["a"])(ft,ht,pt,!1,null,"4a266096",null)),vt=mt.exports,St=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"rules"},[r("div",{staticClass:"rules-header"},[r("font-awesome-icon",{directives:[{name:"tooltip",rawName:"v-tooltip",value:"Rules of the game",expression:"'Rules of the game'"}],staticClass:"c-pointer",attrs:{icon:"question-circle",size:"4x"},on:{click:function(e){t.showRules=!t.showRules}}})],1),t.showRules?r("div",{staticClass:"rules-body"},[t._m(0)]):t._e()])},kt=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ol",[r("li",[t._v("You need to place ten ships on your board")]),r("li",[t._v("Your board is on the right")]),r("li",[t._v("Your ships should consist of one four-square ship, two three-square ships,\n                three two-square ships and four one-square ships")]),r("li",[t._v("Ships can not touch each other in any way")]),r("li",[t._v("When game started, you and the computer make alternate shots on the opponent's board")]),r("li",[t._v("When player hits in the ship, he gets one extra shot")]),r("li",[t._v("Wins the one who first destroy all the ships")])])}],gt={name:"Rules",data:function(){return{showRules:!1,height:0}}},bt=gt,qt=(r("3c47"),Object(k["a"])(bt,St,kt,!1,null,"48ede99b",null)),wt=qt.exports,yt={name:"app",components:{BattleFieldUser:lt,BattleFieldComputer:N,Logger:vt,Rules:wt},computed:{isGameStarted:function(){return this.$store.state.gameStarted}}},Ct=yt,Ot=(r("7c55"),Object(k["a"])(Ct,s,n,!1,null,null,null)),xt=Ot.exports,Dt=r("2f62"),Mt=function(){function t(){Object(d["a"])(this,t)}return Object(f["a"])(t,null,[{key:"deleteSquareFromShip",value:function(t,e){return t.map(function(t){return t.filter(function(t){return t!==e})})}},{key:"getMapForFutureHits",value:function(e,r){return 1===e.length?t.getMapForOneHit(e,r):t.getMapForMultipleHits(e,r)}},{key:"getMapForOneHit",value:function(t,e){var r=[];return t=p()(t),r=t%10===0?[-10,1,10]:t%10===9?[-10,-1,10]:[-10,-1,1,10],r.map(function(e){return t+e}).filter(function(t){return t>-1&&t<100}).filter(function(t){return!1===e[t].clicked})}},{key:"getMapForMultipleHits",value:function(e,r){var i=p()(e[0]),s=p()(e[e.length-1]),n=s-i;return n>-4&&n<4?t.getMapHorizontal(i,s,r):t.getMapVertical(i,s,r)}},{key:"getMapVertical",value:function(t,e,r){var i=[-10,10],s=i.map(function(e){return t+e}).filter(function(t){return t>-1&&t<100}).filter(function(t){return!1===r[t].clicked}),n=i.map(function(t){return e+t}).filter(function(t){return t>-1&&t<100}).filter(function(t){return!1===r[t].clicked});return[].concat(Object(o["a"])(s),Object(o["a"])(n))}},{key:"getMapHorizontal",value:function(t,e,r){var i=[],s=[];i=t%10===0?[1]:t%10===9?[-1]:[-1,1],s=e%10===9?[-1]:e%10===0?[1]:[-1,1];var n=i.map(function(e){return t+e}).filter(function(t){return t>-1&&t<100}).filter(function(t){return!1===r[t].clicked}),a=s.map(function(t){return e+t}).filter(function(t){return t>-1&&t<100}).filter(function(t){return!1===r[t].clicked});return[].concat(Object(o["a"])(n),Object(o["a"])(a))}}]),t}();i["a"].use(Dt["a"]);var _t=new Dt["a"].Store({state:{computerStartDeck:[],computerShips:[],userStartDeck:[],userShips:[],gameStarted:!1,gameEnded:!1,userMove:1,lastHit:[],squareMap:[],logger:[]},actions:{setComputerShotAction:function(t){var e=t.commit;setTimeout(function(){e("setComputerShot")},3e3)}},mutations:{startGame:function(t){t.gameStarted=!0},initializeComputerStartDeck:function(t,e){t.computerStartDeck=e},initializeComputerShips:function(t,e){t.computerShips=e},initializeUserStartDeck:function(t,e){t.userStartDeck=e},initializeUserShips:function(t,e){t.userShips=e},setUserShot:function(t,e){t.computerStartDeck[e].clicked=!0,t.logger.push("User shoot square number ".concat(e,"\n")),2===t.computerStartDeck[e].marked?(t.computerShips=t.computerShips.map(function(t){return t.filter(function(t){return t!==e})}),t.computerShips=t.computerShips.map(function(e){return 1===e.length&&e[0].map(function(e){t.computerStartDeck[e].clicked=!0}),e}).filter(function(t){return t.length>1}),0===t.computerShips.length&&(t.gameEnded=!0)):(t.userMove=0,this.dispatch("setComputerShotAction"))},setComputerShot:function(t){var e=null;if(0===t.lastHit.length){var r=m.getRandomInt(this.getters.allowedUserSquares.length),i=this.getters.allowedUserSquares[r];e=m.switchCoordinatesToNumber(i.xAxis,i.yAxis)}else{var s=m.getRandomInt(t.squareMap.length);e=t.squareMap[s]}t.userStartDeck[e].clicked=!0,t.logger.push("Computer shoot square number ".concat(e,"\n"));var n=2===t.userStartDeck[e].marked,a=!1;if(n)return t.userShips=Mt.deleteSquareFromShip(t.userShips,e),t.userShips=t.userShips.map(function(e){return 1===e.length&&(a=!0,e[0].map(function(e){t.userStartDeck[e].clicked=!0})),e}).filter(function(t){return t.length>1}),0===t.userShips.length?t.gameEnded=!0:a?(t.lastHit=[],t.squareMap=[],this.commit("setComputerShot")):(t.lastHit.push(e),t.squareMap=Mt.getMapForFutureHits(t.lastHit,t.userStartDeck),this.commit("setComputerShot"));t.squareMap=Mt.getMapForFutureHits(t.lastHit,t.userStartDeck),t.userMove=1}},getters:{allowedUserSquares:function(t){return t.userStartDeck.filter(function(t){return!1===t.clicked})}}}),$t=r("ecee"),jt=r("c074"),At=r("ad3d");$t["c"].add(jt["a"],jt["c"],jt["b"]),i["a"].component("font-awesome-icon",At["a"]);var Ft=r("e37d");i["a"].use(Ft["a"]),i["a"].config.productionTip=!1,new i["a"]({store:_t,render:function(t){return t(xt)}}).$mount("#app")},"5c48":function(t,e,r){},"5f50":function(t,e,r){},"628d":function(t,e,r){},7072:function(t,e,r){"use strict";var i=r("d8a6"),s=r.n(i);s.a},"7c55":function(t,e,r){"use strict";var i=r("5c48"),s=r.n(i);s.a},"7d57":function(t,e,r){"use strict";var i=r("c3c6"),s=r.n(i);s.a},"8a73":function(t,e,r){"use strict";var i=r("ce9a"),s=r.n(i);s.a},"8afc":function(t,e,r){"use strict";var i=r("be26"),s=r.n(i);s.a},"97ea":function(t,e,r){},a4ba:function(t,e,r){"use strict";var i=r("3207"),s=r.n(i);s.a},ae44:function(t,e,r){"use strict";var i=r("5f50"),s=r.n(i);s.a},be26:function(t,e,r){},c3c6:function(t,e,r){},ce9a:function(t,e,r){},d854:function(t,e,r){},d8a6:function(t,e,r){}});
//# sourceMappingURL=app.5bc7cada.js.map