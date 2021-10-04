(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{236:function(e,n,t){"use strict";t.r(n);var r,a,o,c,i,s,p,b,l,d,u=t(0),m=t(40),x=t.n(m),j=t(103),h=t(92),f=t(93),O=t(105),g=t(104),y=t(238),v=t(237),w=function(e){var n={};return e.name||(n.name="Enter a name"),e.preparation_time||(n.preparation_time="Specify preparation time"),e.type||(n.type="Choose a meal type"),e.no_of_slices||(n.no_of_slices="Add number of slices"),e.diameter||(n.diameter="Specify diameter"),e.spiciness_scale||(n.spiciness_scale="Specify spiciness (1-10)"),e.bread_slices||(n.bread_slices="Add number of slices"),n},_=t(15),k=t(9),S=t(7),z=S.c.input(r||(r=Object(k.a)(["\n  text-align: center;\n  cursor: pointer;\n  border: none;\n  padding: 5px 50px;\n  margin-bottom: 30px;\n  border-bottom: 2px solid ",";\n  background-color: ",";\n  color: ",";\n"])),(function(e){return e.theme.text}),(function(e){return e.theme.body}),(function(e){return e.theme.text})),C=S.c.span(a||(a=Object(k.a)(["\n  display: flex;\n  justify-content: center;\n  margin-top: 0;\n  padding-bottom: 20px;\n  text-align: center;\n  color: red;\n"]))),E=S.c.div(o||(o=Object(k.a)(["\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n"]))),D=t(2),F=function(e){var n=e.input,t=e.label,r=e.placeholder,a=e.type,o=e.step,c=e.min,i=e.max,s=e.parse,p=e.meta,b=p.touched,l=p.error;return Object(D.jsxs)(E,{children:[Object(D.jsx)("label",{children:t}),Object(D.jsxs)("div",{children:[Object(D.jsx)(z,Object(_.a)(Object(_.a)({},n),{},{placeholder:r,type:a,step:o,min:c,max:i,parse:s})),Object(D.jsx)("br",{}),b&&l&&Object(D.jsx)(C,{children:l})]})]})},T=S.c.select(c||(c=Object(k.a)(["\n  text-align: center;\n  cursor: pointer;\n  border: none;\n  padding: 5px 50px;\n  margin-bottom: 30px;\n  border-bottom: 2px solid ",";\n  background-color: ",";\n  color: ",";\n"])),(function(e){return e.theme.text}),(function(e){return e.theme.body}),(function(e){return e.theme.text})),A=["pizza","soup","sandwich"],I=function(e){var n=e.input,t=e.meta,r=t.touched,a=t.error;return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsxs)(T,Object(_.a)(Object(_.a)({},n),{},{children:[Object(D.jsx)("option",{value:"",children:"Select a dish..."}),A.map((function(e){return Object(D.jsx)("option",{value:e,children:e},e)}))]})),r&&a&&Object(D.jsx)(C,{children:a})]})},R=t(18),N=t(59),J=t.n(N),M=t(98),P=t(99),X=t.n(P),q=S.c.form(i||(i=Object(k.a)(["\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: center;\n  justify-content: center;\n  max-width: 1000px;\n  padding: 20px;\n"]))),H=S.c.button(s||(s=Object(k.a)(["\n  padding: 5px 20px;\n  border: 1px solid transparent;\n  color: ",";\n  font-weight: 400;\n  font-size: 1.2rem;\n  margin: 20px 0;\n  background-image: linear-gradient(\n    45deg,\n    rgba(1, 215, 49, 1) 1%,\n    rgba(0, 80, 154, 1) 100%\n  );\n  background-origin: border-box;\n  background-clip: border-box;\n  -webkit-background-clip: border-box;\n  -moz-background-clip: border-box;\n  box-shadow: 0px 1000px 0px "," inset;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n\n  :hover {\n    box-shadow: none;\n    color: #ffffff;\n  }\n"])),(function(e){return e.theme.text}),(function(e){return e.theme.body})),L=function(e){Object(O.a)(t,e);var n=Object(g.a)(t);function t(){var e;Object(h.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=n.call.apply(n,[this].concat(a))).state={value:""},e.onSubmit=function(n){e.props.createOrder(n)},e.handleSelectChange=function(n){e.setState({value:n.target.value})},e.renderDishDetails=function(){var n=e.state.value;return"pizza"===n?Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(y.a,{component:F,type:"number",name:"no_of_slices",label:"number of slices: ",min:"1",max:"12",parse:parseInt}),Object(D.jsx)(y.a,{component:F,type:"number",name:"diameter",step:"0.1",min:"1",max:"48",label:"diameter: ",parse:parseFloat})]}):"soup"===n?Object(D.jsx)(y.a,{component:F,type:"range",name:"spiciness_scale",min:"1",max:"10",step:"1",label:"Spiciness (1-10): ",parse:parseInt}):"sandwich"===n?Object(D.jsx)(y.a,{component:F,type:"number",name:"bread_slices",min:"1",max:"10",label:"Slices: ",parse:parseInt}):null},e}return Object(f.a)(t,[{key:"render",value:function(){return Object(D.jsxs)(q,{onSubmit:this.props.handleSubmit(this.onSubmit),children:[Object(D.jsx)(y.a,{component:F,name:"name",type:"text",label:"Name: ",placeholder:"state a dish name..."}),Object(D.jsx)("label",{htmlFor:"prep_time",children:"Preparation Time: "}),Object(D.jsx)(y.a,{component:F,type:"time",name:"preparation_time",step:"1"}),Object(D.jsx)("label",{htmlFor:"type",children:"Dish type: "}),Object(D.jsx)(y.a,{name:"type",component:I,value:this.state.value,onChange:this.handleSelectChange}),this.renderDishDetails(),Object(D.jsx)(H,{children:"Submit"})]})}}]),t}(u.Component),U=Object(v.a)({form:"dishForm",validate:w})(L),V=Object(R.b)(null,{createOrder:function(e){return function(){var n=Object(M.a)(J.a.mark((function n(t){var r;return J.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,X.a.post("https://frosty-wood-6558.getsandbox.com/dishes",e,{headers:{"Content-Type":"application/json"}});case 2:r=n.sent,console.log(r),t({type:"CREATE_ORDER",payload:r});case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}})(U),B=Object(S.b)(p||(p=Object(k.a)(["\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: 'Montserrat', sans-serif;\n}\n\nbody {\n    background: ",";\n    color: ",";\n    transition: background .2s ease-in-out, color .2s ease-in-out;\n}\n"])),(function(e){return e.theme.body}),(function(e){return e.theme.text})),G={body:"#f1f1f1",text:"#00284e"},K={body:"#00284e",text:"#f1f1f1"},Q=S.c.h1(b||(b=Object(k.a)(["\n  font-size: 2.6rem;\n  font-weight: 600;\n  padding: 20px;\n  text-align: center;\n"]))),W=S.c.button(l||(l=Object(k.a)(["\n  height: 30px;\n  width: 30px;\n  border-radius: 50%;\n  border: 2px solid transparent;\n  background-image: linear-gradient(\n    45deg,\n    rgba(1, 215, 49, 1) 1%,\n    rgba(0, 80, 154, 1) 100%\n  );\n  background-origin: border-box;\n  background-clip: border-box;\n  -webkit-background-clip: border-box;\n  -moz-background-clip: border-box;\n  box-shadow: 0px 1000px 0px "," inset;\n  cursor: pointer;\n  transform: scale(1.15);\n  transition: transform 0.3s ease-in-out;\n\n  &:hover {\n    transform: scale(1);\n  }\n"])),(function(e){return e.theme.text})),Y=S.c.div(d||(d=Object(k.a)(["\n  display: flex;\n  flex-flow: row wrap;\n  align-items: center;\n  justify-content: space-around;\n  padding: 10px;\n"]))),Z=function(){var e=Object(u.useState)("light"),n=Object(j.a)(e,2),t=n[0],r=n[1],a="dark"===t;return Object(D.jsx)(S.a,{theme:a?K:G,children:Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(B,{}),Object(D.jsxs)(Y,{children:[Object(D.jsx)(Q,{children:"Hexocean's form"}),Object(D.jsx)(W,{onClick:function(){return r(a?"light":"dark")}})]}),Object(D.jsx)(V,{})]})})},$=t(6),ee=t(239),ne=Object($.c)({form:ee.a}),te=t(102),re=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||$.d,ae=Object($.e)(ne,re(Object($.a)(te.a)));x.a.render(Object(D.jsx)(R.a,{store:ae,children:Object(D.jsx)(Z,{})}),document.querySelector("#root"))}},[[236,1,2]]]);
//# sourceMappingURL=main.9c835a83.chunk.js.map