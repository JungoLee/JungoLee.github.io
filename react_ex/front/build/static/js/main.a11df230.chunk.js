(this.webpackJsonpreact_ex=this.webpackJsonpreact_ex||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(8),c=a.n(r),i=(a(13),a(2)),s=a(3),o=a(5),l=a(4),u=a(6),p=a.n(u),h=a(0),j=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"",children:"Main"})}}]),a}(n.Component),b=j,d=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"",children:"portflio"})}}]),a}(n.Component),O=d,v=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"",children:"Gallery"})}}]),a}(n.Component),f={Main:b,Portfolio:O,Gallery:v},_=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=f[this.props.page];return Object(h.jsxs)("div",{className:p.a.container,children:["Container",Object(h.jsx)(e,{}),Object(h.jsx)(g,{})]})}}]),a}(n.Component),g=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).tick=function(){n.setState({count:(new Date).toLocaleTimeString("ko-KR")})},n.state={count:(new Date).toLocaleTimeString("ko-KR"),delay:1e3},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.interval=setInterval(this.tick,this.state.delay)}},{key:"componentDidUpdate",value:function(e,t){t.delay!==this.state.delay&&(clearInterval(this.interval),this.interval=setInterval(this.tick,this.state.delay))}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return Object(h.jsx)("div",{children:Object(h.jsx)("h1",{children:this.state.count})})}}]),a}(n.Component),x=_,m=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={lists:[{text:"\uc18c\uac1c",page:"Main"},{text:"Portfolio",page:"Portfolio"},{text:"\uac24\ub7ec\ub9ac",page:"Gallery",class:"Gallery"},{text:"\ud0c0\ub85c",page:"tarot",class:""},{text:"HappyTree",page:"happytree",class:""}]},n}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.state.lists.map((function(t){return"undefined"!==t.class&&void 0!==t.class||(t.class=""),Object(h.jsx)("li",{class:p.a.first_depth,children:Object(h.jsx)("a",{href:t.page,onClick:function(e){e.preventDefault(),this.props.onChangePage({_page:t.page})}.bind(e),className:p.a.depth_link+" "+t.class,children:t.text})},t.text)}));return Object(h.jsx)("ul",{className:p.a.nav_wrapper,children:t})}}]),a}(n.Component),y=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:p.a.header,children:[Object(h.jsx)("h1",{className:"special "+p.a.logo,children:Object(h.jsx)("a",{href:"/",className:p.a.home_link,children:"Jungo"})}),Object(h.jsx)(m,{onChangePage:function(e){this.props.onChangePage(e)}.bind(this)})]})}}]),a}(n.Component),k=y,C=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={page:"Main",date:(new Date).toString()},n}return Object(s.a)(a,[{key:"render",value:function(){return Object(h.jsxs)("div",{class:"wrap",children:[Object(h.jsx)(k,{page:this.state.page,onChangePage:function(e){this.setState({page:void 0==e._page?this.state.page:e._page,date:void 0==e._date?this.state.date:e._date})}.bind(this)}),Object(h.jsx)(x,{page:this.state.page,date:this.state.date})]})}}]),a}(n.Component);c.a.render(Object(h.jsx)(C,{}),document.getElementById("docRootContainer"))},6:function(e,t,a){e.exports={header:"pb_header__2Lvp_",logo:"pb_logo__UzIfx",home_link:"pb_home_link__vFrlQ",container:"pb_container__3XCmT",nav_wrapper:"pb_nav_wrapper__2xFZM",first_depth:"pb_first_depth__rU0D7"}}},[[15,1,2]]]);
//# sourceMappingURL=main.a11df230.chunk.js.map