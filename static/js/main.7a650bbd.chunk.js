(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),i=n(3),u=n.n(i),c=n(4),l=n(5),s=n(7),o=n(6),h=n(8),v=n(0),d=(n(15),function(e,t,n,a){var r=b(e,t,n),i=[],u=!0,c=!1,l=void 0;try{for(var s,o=r[Symbol.iterator]();!(u=(s=o.next()).done);u=!0){var h=s.value;"*"==a[h]&&i.push(h)}}catch(v){c=!0,l=v}finally{try{u||null==o.return||o.return()}finally{if(c)throw l}}return i.length}),b=function(e,t,n){var a=f(e,t,n),r=p(e,t,n),i=m(e,t,n);return a.concat(r).concat(i)},f=function(e,t,n){var a=[];return(n-1)%e!=0?a:(a.push(n+1),a.push(n-e),a.push(n+e),a.push(n+e+1),a.push(n-e+1),y(e,t,a))},p=function(e,t,n){var a=[];return n%e!=0?a:(a.push(n-1),a.push(n+e),a.push(n-e),a.push(n+e-1),a.push(n-e-1),y(e,t,a))},m=function(e,t,n){var a=[];return(n-1)%e==0||n%e==0?[]:(a.push(n-1),a.push(n+1),a.push(n-e),a.push(n+e),a.push(n-e-1),a.push(n-e+1),a.push(n+e-1),a.push(n+e+1),y(e,t,a))},y=function(e,t,n){var a=[],r=!0,i=!1,u=void 0;try{for(var c,l=n[Symbol.iterator]();!(r=(c=l.next()).done);r=!0){var s=c.value;s<0||s>e*t||a.push(s)}}catch(o){i=!0,u=o}finally{try{r||null==l.return||l.return()}finally{if(i)throw u}}return a},O=function(e,t,n){var a=function(e,t){for(var n={},a=1;a<=e*t;a++)n[a]=" ";return n}(e,t);return n.forEach(function(e){return a[e]="*"}),function(e,t,n,a){for(var r=[],i=1;i<=e*t;i++){var u=d(e,t,i,n),c=a.includes(i)&&2==u,l=a.includes(i)&&3==u,s=!a.includes(i)&&3==u;(c||l||s)&&r.push(i)}return r}(e,t,a,n)},j=function(e,t,n){return r.a.createElement("td",{id:t,onClick:n.bind(null,t)},e)},E=function(e,t,n,a){for(var i=[],u=0;u<t;u++)i.push(j(n,e++,a));return r.a.createElement("tr",null,i)},g=function(e,t,n){for(var a=[],i=1,u=0;u<t;u++)a.push(E(i,e," ",n)),i+=e;return r.a.createElement("table",{id:"table",className:"main-table"},a)},w=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(o.a)(t).call(this,e))).createTable=g.bind(Object(v.a)(Object(v.a)(n))),n.main=O.bind(Object(v.a)(Object(v.a)(n))),n.state={aliveCells:[]},n.selectAlive=n.selectAlive.bind(Object(v.a)(Object(v.a)(n))),n.start=n.start.bind(Object(v.a)(Object(v.a)(n))),n.stop=n.stop.bind(Object(v.a)(Object(v.a)(n))),n.redirectToRules=n.redirectToRules.bind(Object(v.a)(Object(v.a)(n))),n.reset=n.reset.bind(Object(v.a)(Object(v.a)(n))),n.getNextGeneration=n.getNextGeneration.bind(Object(v.a)(Object(v.a)(n))),n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"start",value:function(){var e=this;this.gameID=setInterval(function(){return e.getNextGeneration()},500)}},{key:"stop",value:function(){clearInterval(this.gameID)}},{key:"getNextGeneration",value:function(){var e=this.props,t=e.length,n=e.width,a=this.main(t,n,this.state.aliveCells);this.state.aliveCells.forEach(function(e){return document.getElementById(e).innerHTML=" "}),a.forEach(function(e){return document.getElementById(e).innerHTML="&#128512"}),this.setState({aliveCells:a})}},{key:"selectAlive",value:function(e){!this.state.aliveCells.includes(e)&&this.state.aliveCells.push(e),document.getElementById(e).innerHTML="&#128512"}},{key:"redirectToRules",value:function(){window.location.href="https://bit.ly/1yDqoU0"}},{key:"reset",value:function(){window.location.reload()}},{key:"render",value:function(){return r.a.createElement("div",{className:"main"},r.a.createElement("div",{className:"heading"}," GAME OF LIFE "),r.a.createElement("div",{className:"page-view"},this.createTable(this.props.length,this.props.width,this.selectAlive),r.a.createElement("div",{className:"options "},r.a.createElement("button",{onClick:this.start},"S t a r t"),r.a.createElement("button",{onClick:this.stop},"P a u s e"),r.a.createElement("button",{onClick:this.reset},"R e s e t"),r.a.createElement("button",{onClick:this.redirectToRules},"R u l e s"))))}}]),t}(a.Component);u.a.render(r.a.createElement(w,{length:10,width:10}),document.getElementById("root"))},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.7a650bbd.chunk.js.map