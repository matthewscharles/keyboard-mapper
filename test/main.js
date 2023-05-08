(()=>{"use strict";const e=function(e,t,i=!0){this.defaultFunction="test",this.activeKeysTime=Date.now(),this.exclusiveMapping=i,this.keymap_init(),this.keymap_assign(e),this.keymap_assign(t),this.listeners=["keydown","keyup"],this.listen()};(e.prototype={}).constructor=e,e.prototype.activeKeys={},e.prototype.defaultFunction=function(e,t,i){},e.prototype.exclusive=function(e){return this.exclusiveMapping=e,this},e.prototype.handleEvent=function(e){this.process(e)},e.prototype.keymap={Key:{},Arrow:{},Digit:{},F:{},Meta:{},Alt:{},Shift:{},Control:{},Backspace:{},Delete:{},Tab:{},Space:{},Minus:{},Equal:{},Semicolon:{},Quote:{},Comma:{},Period:{},Slash:{},Backslash:{},Backquote:{},BracketLeft:{},BracketRight:{}},e.prototype.keymap_assign=function(e){Object.assign(this.keymap,e)},e.prototype.keymap_init=function(){this.keymap={},this.keyUp={},this.keyDown={},Object.values(this.ranges).forEach((e=>{Object.entries(e).forEach((([e,t])=>{console.log(e,t),this.keyUp[t]=()=>{},this.keyDown[t]=()=>{}}))})),Object.keys(this.keymap).forEach((e=>{this.keymap[e]=this.default}),this),Object.keys(this.ranges).forEach((e=>{this.keyranges[e]={},this.keyUp[e]=()=>{},this.keyDown[e]=()=>{},this.ranges[e].forEach((t=>{this.keyranges[e][t.toString()]=void 0}),this)}),this)},e.prototype.keyranges={},e.prototype.keyranges_assign=function(e){Object.assign(this.keyranges,e)},e.prototype.listen=function(e=document){for(let t of this.listeners)e.addEventListener(t,this,!1);console.log("keyboard map on, listening...")},e.prototype.numberOfActiveKeys=function(){return Object.keys(this.activeKeys).length},e.prototype.process=function(e){let t=Object.keys(this.keymap).find((t=>e.code.includes(t))),i=e.code.replace(t,""),s="keydown"==e.type;e.repeat||this[s?"keyDown":"keyUp"][i](e,i,s),s&&!e.repeat?(0==Object.keys(this.activeKeys).length&&(this.activeKeysTime=Date.now()),this.activeKeys[e.code]=Date.now()-this.activeKeysTime):s||delete this.activeKeys[e.code],""==i?this.keymap[t](e,s):"function"==typeof this.keyranges[t][i]?(this.keyranges[t][i](e,i,s),this.exclusiveMapping||this.keymap[t](e,i,s)):this.keymap[t](e,i,s)},e.prototype.ranges={Key:["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],Arrow:["Left","Right","Up","Down"],Digit:[0,1,2,3,4,5,6,7,8,9],F:[1,2,3,4,5,6,7,8,9,10,11,12],Meta:["Left","Right"],Alt:["Left","Right"],Shift:["Left","Right"],Control:["Left","Right"]},e.prototype.unlisten=function(e=document){for(let t of this.listeners)e.removeEventListener(t,this,!1);console.log("keyboard map off")};const t=e;window.keyboardMapper=new t({},{},!1)})();