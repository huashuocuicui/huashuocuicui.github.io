(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{582:function(t,s,a){"use strict";a.r(s);var e={data:function(){return{ispwd:!1,pwd:""}},mounted:function(){this.pwd=""},methods:{login:function(){"h3password"==this.pwd?this.ispwd=!0:(this.pwd="",this.ispwd=!1,this.$message.error("密码输入错误，请重新输入，或联系博主！"))}}},n=a(6),r=Object(n.a)(e,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("div",{staticClass:"grid-content bg-purple"},[a("el-input",{attrs:{placeholder:"请输入密码进行查看","show-password":""},nativeOn:{keyup:function(s){return!s.type.indexOf("key")&&t._k(s.keyCode,"enter",13,s.key,"Enter")?null:t.login(s)}},model:{value:t.pwd,callback:function(s){t.pwd=s},expression:"pwd"}})],1)]),t._v(" "),a("el-col",{attrs:{span:12}},[a("div",{staticClass:"grid-content bg-purple-light"},[a("el-button",{attrs:{type:"success"},on:{click:t.login}},[t._v("查看")])],1)])],1),t._v(" "),t.ispwd?a("div",[a("h2",{attrs:{id:"技术栈"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#技术栈"}},[t._v("#")]),t._v(" 技术栈")]),t._v(" "),a("h3",{attrs:{id:"语言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#语言"}},[t._v("#")]),t._v(" 语言")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("html5\nc3(less)\nts(js)\n")])])]),a("h3",{attrs:{id:"环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#环境"}},[t._v("#")]),t._v(" 环境")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("node\nnpm [不需要配置环境变量]\n")])])]),a("h3",{attrs:{id:"框架"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#框架"}},[t._v("#")]),t._v(" 框架")]),t._v(" "),a("ol",[a("li",[t._v("数据框架")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("    VUE + vue-cli + axios\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("UI框架")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("    h3-antd-vue(基于antd-vue进行了封装)\n    [awesome-ui]\n    [thinking-ui]\n")])])])]):t._e()],1)}),[],!1,null,null,null);s.default=r.exports}}]);