(this["webpackJsonpproject-calculator"]=this["webpackJsonpproject-calculator"]||[]).push([[0],{12:function(module,__webpack_exports__,__webpack_require__){"use strict";var _Users_keem_Documents_project_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5),_Users_keem_Documents_project_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(23),_Users_keem_Documents_project_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(3),react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(2),react__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__),styled_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(4),_Keypad__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(13),_Viewer__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(21),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(1),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__),_templateObject,initialState={number:0,result:0,operator:"",expression:""},reducer=function reducer(state,action){switch(action.type){case"Number":return Object(_Users_keem_Documents_project_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__.a)(Object(_Users_keem_Documents_project_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__.a)({},state),{},{number:0===state.number?""+action.number:state.number+action.number,result:0===state.number?""+action.number:state.number+action.number});case"Negative":return Object(_Users_keem_Documents_project_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__.a)(Object(_Users_keem_Documents_project_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__.a)({},state),{},{number:-1*state.number,result:-1*state.number});case"Percent":return Object(_Users_keem_Documents_project_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__.a)(Object(_Users_keem_Documents_project_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__.a)({},state),{},{number:state.number/100,result:state.number/100});case"Dot":return Object(_Users_keem_Documents_project_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__.a)(Object(_Users_keem_Documents_project_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__.a)({},state),{},{number:state.number+".",result:state.number+"."});case"Add":case"Subtract":case"Multiply":case"Divide":return Object(_Users_keem_Documents_project_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__.a)(Object(_Users_keem_Documents_project_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__.a)({},state),{},{number:0,operator:action.operator,expression:state.expression+state.result+action.operator});case"Clear":return Object(_Users_keem_Documents_project_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__.a)(Object(_Users_keem_Documents_project_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__.a)({},state),{},{number:0,result:0});case"Result":return Object(_Users_keem_Documents_project_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__.a)(Object(_Users_keem_Documents_project_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__.a)({},state),{},{number:0,result:eval(state.expression+state.number),operator:"",expression:""});default:return state}},Calculator=function(){var e=Object(react__WEBPACK_IMPORTED_MODULE_3__.useReducer)(reducer,initialState),_=Object(_Users_keem_Documents_project_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.a)(e,2),t=_[0],r=_[1];return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(Glass,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Viewer__WEBPACK_IMPORTED_MODULE_6__.a,{state:t}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Keypad__WEBPACK_IMPORTED_MODULE_5__.a,{state:t,dispatch:r})]})},Glass=styled_components__WEBPACK_IMPORTED_MODULE_4__.c.section(_templateObject||(_templateObject=Object(_Users_keem_Documents_project_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)(["\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: center;\n  justify-content: flex-start;\n  width: 55rem;\n  height: auto;\n  background: linear-gradient(\n    to right bottom,\n    rgba(255, 255, 255, 0.5),\n    rgba(255, 255, 255, 0.3)\n  );\n  border-top: 2px solid rgba(255, 255, 255, 0.5);\n  border-left: 2px solid rgba(255, 255, 255, 0.5);\n  border-radius: 2rem;\n  z-index: 2;\n  backdrop-filter: blur(2rem);\n"])));__webpack_exports__.a=Calculator},13:function(e,_,t){"use strict";var r,n,a=t(5),c=(t(2),t(4)),o=t(6),s=t(15),l=t(17),b=t(14),u=t(16),i=t(1),m=c.c.div(r||(r=Object(a.a)(["\n  display: flex;\n  flex-flow: row wrap;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  height: 100%;\n  padding: 2rem;\n"]))),d=c.c.button(n||(n=Object(a.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 1rem;\n  width: 10rem;\n  height: 10rem;\n  border-radius: 2rem;\n  font-size: 3rem;\n  color: grey;\n  cursor: pointer;\n  outline: none;\n\n  &:hover {\n    border-top: 2px solid rgba(255, 255, 255, 0.5);\n    border-left: 2px solid rgba(255, 255, 255, 0.5);\n    border-radius: 2rem;\n    backdrop-filter: blur(2rem);\n    color: black;\n  }\n"])));_.a=function(e){var _=e.state,t=e.dispatch,r=function(e){var _=e.target;t({type:"Number",number:_.name})};return Object(i.jsxs)(m,{children:[Object(i.jsx)(d,{onClick:function(){t({type:"Clear"})},children:"C"}),Object(i.jsx)(d,{onClick:function(){return t({type:"Negative"})},children:Object(i.jsx)(b.a,{})}),Object(i.jsx)(d,{onClick:function(){return t({type:"Percent"})},children:Object(i.jsx)(o.c,{})}),Object(i.jsx)(d,{name:"/",onClick:function(){t({type:"Add",operator:"/"})},children:Object(i.jsx)(o.a,{})}),Object(i.jsx)(d,{name:"7",onClick:r,children:"7"}),Object(i.jsx)(d,{name:"8",onClick:r,children:"8"}),Object(i.jsx)(d,{name:"9",onClick:r,children:"9"}),Object(i.jsx)(d,{name:"*",onClick:function(){t({type:"Add",operator:"*"})},children:Object(i.jsx)(s.a,{})}),Object(i.jsx)(d,{name:"4",onClick:r,children:"4"}),Object(i.jsx)(d,{name:"5",onClick:r,children:"5"}),Object(i.jsx)(d,{name:"6",onClick:r,children:"6"}),Object(i.jsx)(d,{name:"-",onClick:function(){t({type:"Add",operator:"-"})},children:Object(i.jsx)(o.b,{})}),Object(i.jsx)(d,{name:"1",onClick:r,children:"1"}),Object(i.jsx)(d,{name:"2",onClick:r,children:"2"}),Object(i.jsx)(d,{name:"3",onClick:r,children:"3"}),Object(i.jsx)(d,{name:"+",onClick:function(){t({type:"Add",operator:"+"})},children:Object(i.jsx)(o.d,{})}),Object(i.jsx)(d,{name:"0",onClick:r,children:"0"}),Object(i.jsx)(d,{name:"000",onClick:r,children:"000"}),Object(i.jsx)(d,{onClick:function(){_.number.includes(".")||t({type:"Dot"})},children:Object(i.jsx)(u.a,{})}),Object(i.jsx)(d,{onClick:function(){t({type:"Result"})},children:Object(i.jsx)(l.a,{})})]})}},21:function(e,_,t){"use strict";var r,n=t(5),a=(t(2),t(4)),c=t(1),o=a.c.div(r||(r=Object(n.a)(["\n  width: 100%;\n  height: 10rem;\n  margin: 2rem;\n  padding: 2rem;\n  font-size: 8rem;\n  text-align: right;\n"])));_.a=function(e){var _=e.state;return Object(c.jsx)(o,{children:Number(_.result).toLocaleString()})}},31:function(e,_,t){"use strict";t.r(_);t(2);var r,n,a=t(11),c=t.n(a),o=t(5),s=t(4),l=t(12),b=t(1),u=s.c.div(r||(r=Object(o.a)(["\n  background: linear-gradient(\n    to right bottom,\n    rgba(255, 255, 255, 0.8),\n    rgba(255, 255, 255, 0.3)\n  );\n  width: ","rem;\n  height: ","rem;\n  border-radius: 50%;\n  position: absolute;\n  top: ","%;\n  bottom: ","%;\n  left: ","%;\n  right: ","%;\n"])),(function(e){return e.r}),(function(e){return e.r}),(function(e){return e.top}),(function(e){return e.bottom}),(function(e){return e.left}),(function(e){return e.right})),i=function(e){var _=e.r,t=e.top,r=e.bottom,n=e.left,a=e.right,c=e.children;return Object(b.jsx)(u,{r:_,top:t,bottom:r,left:n,right:a,children:c})},m=s.c.main(n||(n=Object(o.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n  background: linear-gradient(to right top, #65dfc9, #6cdbeb);\n"]))),d=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(m,{children:Object(b.jsx)(l.a,{})}),Object(b.jsx)(i,{r:20,top:5,right:25}),Object(b.jsx)(i,{r:25,bottom:5,left:25})]})};var p,j=function(){return Object(b.jsx)(d,{})},O=t(22),E=Object(s.a)(p||(p=Object(o.a)(["\n  ","\n  *,\n  * & {\n    box-sizing: border-box;\n    user-select: none;\n  }\n  html {\n    font-size: 10px;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif\n  }\n  ul,ol,li {\n    list-style: none;\n  }\n  button {\n    border: none;\n    background: transparent;\n  }\n  body {\n    ","\n  }\n"])),O.a,"");c.a.render(Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(E,{}),Object(b.jsx)(j,{})]}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.ac88541d.chunk.js.map