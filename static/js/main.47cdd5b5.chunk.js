(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(3),s=n.n(r),c=(n(13),["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"]),l=function(){return document.querySelector(".goodsList").classList.remove("disable"),document.querySelector(".goodsButton").classList.add("disable")},u=n(1),i=n(4),g=n(5),m=n(7),d=n(6),p=function(){for(var e=[],t=1;e.length<10;)e.push(t),t+=1;return a.a.createElement(a.a.Fragment,null,e.map((function(e){return a.a.createElement("option",{value:e,key:e},e)})))},f=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={goods:Object(u.a)(e.props.goods)},e.sortByLength=function(){e.setState((function(e){return{goods:e.goods.sort((function(e,t){return e.length-t.length}))}}))},e.sortAlphabetically=function(){e.setState((function(e){return{goods:e.goods.sort((function(e,t){return e.localeCompare(t)}))}}))},e.reverse=function(){e.setState((function(e){return{goods:e.goods.reverse()}}))},e.selected=function(t){var n=t.target.value;e.setState((function(){return{goods:e.props.goods.filter((function(e){return e.length>=n}))}}))},e.reset=function(t){e.setState((function(){return{goods:Object(u.a)(e.props.goods)}}))},e}return Object(g.a)(n,[{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("ul",{className:"goodsList__items"},this.state.goods.map((function(e){return a.a.createElement("li",{key:e},e)}))),a.a.createElement("section",{className:"buttons"},a.a.createElement("button",{type:"button",onClick:this.reverse},"reverse"),a.a.createElement("button",{type:"button",onClick:this.sortAlphabetically},"Sort alphabetically"),a.a.createElement("button",{type:"button",onClick:this.sortByLength},"Sort by length"),a.a.createElement("button",{type:"button",onClick:this.reset},"Reset")),a.a.createElement("select",{onChange:this.selected,className:"goodsList__select"},a.a.createElement(p,null)))}}]),n}(a.a.Component),b=function(){return a.a.createElement("div",{className:"App"},a.a.createElement("button",{type:"button",onClick:l,className:"goodsButton"},"Start"),a.a.createElement("section",{className:"goodsList disable"},a.a.createElement(f,{goods:c})))};s.a.render(a.a.createElement(b,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.47cdd5b5.chunk.js.map