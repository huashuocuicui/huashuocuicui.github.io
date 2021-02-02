(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{501:function(n,t,a){"use strict";a.r(t);var e=a(4),s=Object(e.a)({},(function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h2",{attrs:{id:"环境搭建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#环境搭建"}},[n._v("#")]),n._v(" 环境搭建")]),n._v(" "),a("ol",[a("li",[n._v("安装node[npm自动安装，自动配置环境变量]")])]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("    1. 下载node 【http://nodejs.cn/download/】\n    2. 安装node 【https://www.runoob.com/nodejs/nodejs-install-setup.html】\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[n._v("设置私服")])]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("    npm set registry http://nexus.h3yun.com:8888/repository/npm-all/\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[n._v("下载依赖")])]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("    npm run installs\n")])])]),a("ol",{attrs:{start:"4"}},[a("li",[n._v("配置cli（env.debug），需要分别对admin、portal、mobile分别配置")])]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("    NODE_ENV = 'debug'\n    VUE_APP_API = 'http://fangyi.scjgj.beijing.gov.cn/api'\n    VUE_APP_OAUTH_HOST = 'http://fangyi.scjgj.beijing.gov.cn/api'\n    VUE_APP_PORTAL_HOST = 'http://fangyi.scjgj.beijing.gov.cn/'\n    VUE_APP_OAUTH_CLINET_ID = 'api'\n    VUE_APP_OAUTH_SECRET = 'c31b32364ce19ca8fcd150a417ecce58'\n    VUE_APP_OAUTH_SCOPE = 'read'\n    VUE_APP_OAUTH_REDIRECT = 'http://127.0.0.1:9000/admin'\n\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("    VUE_APP_API\t后端API地址\n    $VUE_APP_OAUTH_HOST\t后端OAuth服务地址\n    VUE_APP_PORTAL_HOST\t前端Portal地址\n    VUE_APP_OAUTH_CLINET_ID\tOAuth2 ClientId参数，需跟数据库中配置匹配\n    VUE_APP_OAUTH_SECRET\tOAuth2 Secret参数，需跟数据库中配置匹配\n    VUE_APP_OAUTH_SCOPE\tOAuth2 Scope参数，需跟数据库中配置匹配\n    VUE_APP_OAUTH_REDIRECT\tOAuth2 重定向地址，需跟数据库中配置匹配\n\n")])])]),a("ol",{attrs:{start:"5"}},[a("li",[n._v("启动本地前端【在根目录启动[frontend]】")])]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("    portal：【npm run portal】\n    mobile：【npm run mobile】\n    admin：【npm run admin】\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("    本地启动产品可能启动不起来或启动后不能登录，\n    解决办法：\n    portal：\n        localhost:9100 到登录页，复制服务器访问的token到localhost，进行启动\n    mobile：\n        同上\n    admin：\n        访问localhost：9000，（注意不要访问localhost:9000/admin） 然后复制token \n")])])]),a("ol",{attrs:{start:"6"}},[a("li",[n._v("打包前端")])]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("    portal：【npm run build-portal】\n    mobile：【npm run build-mobile】\n    admin：【npm run build-admin】\n")])])]),a("ol",{attrs:{start:"7"}},[a("li",[n._v("打包前端")])]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("    替换原有包【服务器原有结构与本地包结构不一样，需要改结构】\n    如有缓存，重启前端【./deploy.sh frontEnd】或者重启docker\n")])])]),a("h2",{attrs:{id:"项目工程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目工程"}},[n._v("#")]),n._v(" 项目工程")]),n._v(" "),a("ol",[a("li",[n._v("package-lock.json【npm依赖包版本锁定】")]),n._v(" "),a("li",[n._v("package.json   【npm配置文件】")]),n._v(" "),a("li",[n._v("postcss.config.js 【CSS自动兼容配置文件】")]),n._v(" "),a("li",[n._v("modules【业务模块包】@cloudpivot【业务模块命令空间】")])]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("    1. api【后端api访问包】\n    2. application 【应用、数据模型模块组件】\n    3. common【公共包，公共组件、指令、LESS函数、工具函数】\n    4. flow【流程模块包，流程相关组件，流程状态、审批意见、流程信息等】\n    5. flow-center【流程中心模块包，流程中心相关组件】\n    6. flow-drawer【流程绘制器】\n    7. form【表单模块包，表单相关组件，表单定义、渲染器、运行时组件】\n    8. list【列表模块包】\n    9. platform 【平台环境包、钉钉环境适配】\n")])])]),a("h2",{attrs:{id:"代码结构-entries【入口项目】"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码结构-entries【入口项目】"}},[n._v("#")]),n._v(" 代码结构 --entries【入口项目】")]),n._v(" "),a("h3",{attrs:{id:"portal"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#portal"}},[n._v("#")]),n._v(" portal")]),n._v(" "),a("ol",[a("li",[n._v("public【静态资源文件夹，静态资源须放到这里】")]),n._v(" "),a("li",[n._v("src【源码目录】")])]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("    1. apis【后台api访问包】\n    2. assets【项目图标图片】\n    3. common【全局公告目录，遗留】\n    4. components【项目组件，遗留】\n    5. config【项目全局第三方库配置】\n    6. directives【全局指令】\n    7. locale【多语言文件】\n    8. mixins【Vue mixin文件，灵活的组件可复用】\n    9. routes【路由】\n    10. store【vuex，数据状态管理】\n    11. styles【全局样式】\n    12. typings【Typescript类型文件，d.ts文件】\n    13. utils【工具函数】\n    14. views【vue页面组件】\n    15. app.vue【vue根组件】\n    16. main.ts【前端入口文件】\n     \n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[n._v("browserslistrc【浏览器兼容列表】")]),n._v(" "),a("li",[n._v("env.debug 【vue cli环境配置文件】")]),n._v(" "),a("li",[n._v("babel.config.js【babel配置文件，语法编译】")]),n._v(" "),a("li",[n._v("jest.config.js【jest配置文件，单元测试】")]),n._v(" "),a("li",[n._v("tsconfig.json【typescript配置文件】")]),n._v(" "),a("li",[n._v("vue.config.js【vue cli配置文件】")]),n._v(" "),a("li",[n._v("extends(二开专用),二开尽量放到这个文件夹")])]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("    1. theme.js【主题】\n    2. api.ts【提交api】\n    3. site【站点信息】\n    4. routes【路由】\n    5. 基于模块包组件开发【modules/@cloudpivot】\n    6. 二开步骤\n        a. 后台管理配置路由地址【/application/{appcode}/{页面}】【必须挂在在application下面】\n        b. extend 下新建组件【页面】\n        c. 配置路由【/extends/routes.ts】\n")])])]),a("ol",{attrs:{start:"10"}},[a("li",[n._v("表单组件二开[版本1.7+]")])]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("    1. 表单二开文档：modules/@cloudpivot/form/doc/云枢表单组件开发手册.md\n    2. 二开组件存放位置：modules/@cloudpivot/form/components-extend\n    3. 二开组件注册到组件库：@cloudpivot/form/registerComponent.ts\n")])])]),a("h3",{attrs:{id:"mobile"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mobile"}},[n._v("#")]),n._v(" mobile")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("    同portal一样\n")])])]),a("h3",{attrs:{id:"admin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#admin"}},[n._v("#")]),n._v(" admin")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("    同portal一样\n")])])]),a("h2",{attrs:{id:"二开规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二开规范"}},[n._v("#")]),n._v(" 二开规范")]),n._v(" "),a("h3",{attrs:{id:"theme-js-样式变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#theme-js-样式变量"}},[n._v("#")]),n._v(" theme.js 样式变量")]),n._v(" "),a("div",{staticClass:"custom-block danger"},[a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v("二次开发的内容必须放在extends文件夹下，应避免修改extends文件夹以外的内容，否则后续版本升级造成代码冲突等不必要的麻烦。\n")])])])]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("    //如果将项目的主题色改为红色，只需在extends/theme.js，加入如下代码即可：\n    module.exports = {\n        'primary-color': 'red'\n    };\n    //error-bd-color 错误边框色 error-bg-color 错误背景色 error-color 错误字体色\n    //border-radius-base 边框圆角基础值 border-radius-lg 边框圆角大号值\n    //font-size-base 基础 font-size-sm 小号 font-size-md 中号\n")])])]),a("h3",{attrs:{id:"api-ts-api-url"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api-ts-api-url"}},[n._v("#")]),n._v(" api.ts API URL")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("    // 一级命名空间\n    application 应用中心\n    workflow 流程相关\n    user 用户信息\n    organization 机构\n    form 表单\n\n    //如果需要将表单提交的API覆盖，只需在extends/api.ts，加入如下代码即可：\n    module.exports = {\n        form: {\n            submit:'/aa'\n        }\n    };\n")])])]),a("h3",{attrs:{id:"site-ts-站点信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#site-ts-站点信息"}},[n._v("#")]),n._v(" site.ts 站点信息")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("    title 站点标题\n    logo 站点Logo，语法为：require('@/../extends/logo.png')\n")])])]),a("h3",{attrs:{id:"routes-ts-路由"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#routes-ts-路由"}},[n._v("#")]),n._v(" routes.ts 路由")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("    //如果需要覆盖默认的路由，以portal项目为例，在extends/routes.ts，加入如下代码即可\n    export default {\n        formDetail: {\n            path: '/form/detail',\n            name: 'form-detail',\n            component: () => import('@/views/form/form-detail.vue')\n        }\n    } as any;\n")])])]),a("h3",{attrs:{id:"基于模块包组件开发"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基于模块包组件开发"}},[n._v("#")]),n._v(" 基于模块包组件开发")]),n._v(" "),a("p",[n._v("快速构建自己的页面级组件，而不必重新开发，目前有两种方式：")]),n._v(" "),a("ol",[a("li",[n._v("组合业务模块组件")]),n._v(" "),a("li",[n._v("继承组件类重写模板，但目前只有表单详情支持。\n业务模块中的大组件也由小组件组合成，组件类通过继承，只需处理页面跳转、入口特有的交互等。")])]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('    //以PC端表单详情为例，它由@cloudpivot/flow的审批记录组件和@cloudpivot/form的表单渲染器、表单运行组件（按钮、按钮弹窗）构成，模板详情如下：\n    <template>\n        <div class="form-detail">\n            <form-detail-header>\n            \x3c!--按钮栏--\x3e\n            <form-actions :actions="actions" @action="onAction"></form-actions>\n            </form-detail-header>\n\n            <div class="form-body" @scroll="onBodyScroll">\n            <div class="form-wrap">\n\n                \x3c!--流程当前节点信息--\x3e\n                <workflow-info\n                v-if="workflowInstanceId"\n                :id="workflowInstanceId"\n                :itemId="formObj.workItemId"\n                @flowTrack="flowTrack"\n                ></workflow-info>\n\n                \x3c!--表单渲染器--\x3e\n                <pc-form-renderer ref="formRenderer" :controls="controls"></pc-form-renderer>\n\n                <a-collapse\n                v-if="workflowInstanceId"\n                class="workflow-collapse"\n                :activeKey="[\'approval\']"\n                :bordered="false"\n                >\n                <a-collapse-panel class="bold-collapse-panel" header="审批记录" key="approval">\n\n                    \x3c!--审批意见树--\x3e\n                    <Approval\n                    :workflowInstanceId="workflowInstanceId"\n                    :completed="completed"\n                    :getFileUrlFn="getFileUrlFn"\n                    @download="onDownload"\n                    ></Approval>\n\n                </a-collapse-panel>\n                </a-collapse>\n\n                \x3c!--按钮模态窗--\x3e\n                <form-action-modal ref="actionModal" @ok="onOk"></form-action-modal>\n            </div>\n\n            <div v-show="showBacktop" class="back-top" @click="backTop">\n                <a-icon type="up"></a-icon>\n            </div>\n            </div>\n\n            <a-alert v-if="comment" :message="comment" type="info" banner closable/>\n\n            <h3-message ref="h3Messsag" title="已操作完成" content="自动为您跳转至下一条待办"></h3-message>\n        </div>\n    </template>\n\n    //假如现在表单头部需要定制，并且将表单改为左右布局，且不需要改变组件行为:\n    1. 在extends目录下新建一个form文件夹\n    2. 新建并重写form-detail-header.vue\n    3. 新建并重写form-detail.vue\n    4. 在extends/routes.ts覆盖formDetail路由\n')])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("    //模块包介绍\n    1. @cloudpivot/api 产品后端API\n    2. @cloudpivot/common 公共包，公共组件、指令、LESS函数、工具函数\n    3. @cloudpivot/application 应用、数据模型组件\n    4. @cloudpivot/flow 流程相关组件，流程状态、审批意见、流程信息等\n    5. @cloudpivot/flow-center 流程中心相关组件\n    6. @cloudpivot/form 表单相关组件，表单定义、渲染器、运行时组件\n    7. @cloudpivot/list 列表相关组件\n")])])]),a("h2",{attrs:{id:"添加自定义vue页面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加自定义vue页面"}},[n._v("#")]),n._v(" 添加自定义Vue页面")]),n._v(" "),a("div",{staticClass:"custom-block danger"},[a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v("1.自定义Vue页面的菜单是挂在应用下的，所以URL和路由必须配置在/application下\n2.目前添加自定义Vue页面分为 Portal端 和 Mobile端，各端的页面管理和开发都是独立的，需要分别在Portal、Mobile创建组件和配置\n")])])])]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("    1. 登陆并进入 admin 控制面板 — 应用管理页面\n    2. 在admin控制面板配置自定义页面： 点击顶部“+添加自定义页面”，选择“打开方式”为“Vue路由模式”，填写PC访问地址\n    3. pc访问地址格式：/application/{appcode}/applicationDemo，如截图案例，appcode 为 ZY ，页面为 demo.vue\n    4. 在portal开发前端源码目录下的 /extends 新建演示页面：demo.vue\n    5. 到 /extends/routes.ts 路由文件配置自定义页面路由\n        export default {\n            application:{\n                applicationDemo: {\n                    path: 'application-demo',\n                    name: 'applicationDemo',\n                    component: () => import('@/../extends/demo.vue'),\n                }\n            }\n        } as any;\n")])])]),a("h2",{attrs:{id:"表单组件开发"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#表单组件开发"}},[n._v("#")]),n._v(" 表单组件开发")]),n._v(" "),a("div",{staticClass:"custom-block danger"},[a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v("1.二次开发可以重写云枢表单原生组件,也可以开发新组件. 新的云枢表单组件开发模式只有在1.7及以上支持.\n2. 开发手册  云枢表单组件的开发规范文档位置在: modules/@cloudpivot/form/doc/云枢表单组件开发手册.md\n")])])])]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('    1. 二开组件的建议放到: modules/@cloudpivot/form/components-extend目录中.\n    2. 定制开发组件需要引入到@cloudpivot/form/registerComponent.ts\n        import component from "@cloudpivot/form/src/components"; // 云枢原生组件\n        import { register } from "@cloudpivot/form/utils/register";\n        import { ComponentInfo, ComponentAsset } from "@cloudpivot/form/typings";\n        import extendComponent from "@cloudpivot/form/components-extend"; // 扩展组件\n        const components = [...component,...extendComponent];\n        export default function () {\n            for (let cmp of components) {\n                register.append(cmp);\n            }\n        }\n')])])]),a("h2",{attrs:{id:"列表自定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#列表自定义"}},[n._v("#")]),n._v(" 列表自定义")]),n._v(" "),a("h3",{attrs:{id:"pc端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pc端"}},[n._v("#")]),n._v(" pc端")]),n._v(" "),a("div",{staticClass:"custom-block tip"},[a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v("1. PC 端和 Mobile 端皆支持视图自定义功能, 功能点包括:\n    自定义样式\n    自定义按钮\n    自定义模板\n    自定义脚本\n2. 双端的特性和侧重点不同, 对自定义的支持也不同, 其中:\n    自定义样式都支持\n    自定义按钮不支持 Mobile 端\n    自定义模板在 PC 端当前版本固定为 table, 仅支持少量自定义; Mobile 支持完全自定义;\n    自定义脚本在 Mobile 端不支持自定义按钮功能, 其他方面与 PC 端无异\n3. 每个视图都有各自独立的配置\n4. 每个视图下的双端的配置也各自独立，互不干扰\n")])])])]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("    1. 样式模块\n        -样式控制不限于视图, 可作用于整个页面\n        -但所设样式仅对当前视图页有效, 会随着页面加载卸载\n        <style id=\"customStyle\">\n            /* 样式可对当前页面所有元素生效 */\n            /* 设置顶栏背景颜色 */\n            .header { background-color:#ECECEC; }\n            /* 设置“新增”按钮边框颜色和背景颜色 */\n            .list-action-add {\n                border-color:#67C23A;\n                background-color:#67C23A;\n            }\n        </style>\n    2. 按钮模块\n        -PC 端有五个预设按钮: 新增、删除、导入、导出、打印二维码\n        -按钮有 code、text、id、class 属性, 其中:\n            code   作为唯一逻辑标识, 必填且必须在视图内唯一\n            text     作为按钮名称\n            id         按钮标签id, 非必填\n            class   按钮标签类名, 非必填；如不定义，会默认使用 `list-action-${actionCode}`;\n        -其中, 自定义按钮可修改全部属性，预设按钮不能删除，也不支持修改 code 属性\n    3. 脚本模块\n        -支持视图的三个生命周期:\n            onPreLoad      视图数据加载前, 仅执行一次\n            onLoad            视图数据加载后, 翻页或增删视图项会重新触发\n            onRendered   视图渲染后, 触发规则同 onLoad\n        -支持按钮操作的三个流程事件:\n            onPreAction           按钮逻辑执行前, 可通过返回 false 阻拦后续按钮事件流程\n            onCustomAction   自定义按钮执行逻辑（add、delete等预置按钮配有预置的执行逻辑，不开放直接更改）\n            onActionDone        按钮逻辑执行完毕\n    4. 脚本配置\n        -options 脚本基本配置\n            version 脚本支持逻辑的版本, 修改前请查阅相关更新文档, 轻易修改可能会造成脚本运行失效\n        -pageConfig 页面配置 ( version: 1.1 )\n            apis 替换页面接口\n        -extensions 脚本内部扩展, 可自行添加变量或函数, 以供事件钩子或自定义模板 (customTemplate) 调用\n        -hooks 生命周期和按钮事件的具体实现\n    5. 事件字段说明:\n        -隐藏字段 vm        可在所有事件钩子和自定接口函数内引用, 指向页面的 Vue 实例\n        -隐藏字段 axios     可在所有事件钩子和自定接口函数内引用, 第三方 ajax 库\n        -隐藏字段 config   可在所有事件钩子和自定接口函数内引用, 项目环境参数配置对象，源自项目 public/config.js\n        -参数字段 data      指向当前视图页数据, onPreAction 事件外所有的钩子都包含\n        -参数字段 action   按钮对象, 按钮数据格式为: { actionCode:'add', name:'新增', ... }, actionCode 作为每个按钮的唯一标识\n        -参数字段 result    onActionDone 独有, 指向事件处理的结果, 由按钮执行返回 (预置按钮逻辑 | 自定义按钮逻辑)\n")])])]),a("div",{staticClass:"custom-block danger"},[a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v("1.!注: 所有事件节点都可以通过返回 Promise | Promise.all | Promise.race 实现流程的异步串联\n")])])])]),n._v(" "),a("h4",{attrs:{id:"基本使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本使用"}},[n._v("#")]),n._v(" 基本使用")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("    // ...这是一个完整的脚本配置\n    <script id=\"customScript\">\n    ({\n        // 脚本配置: 在对配置修改之前, 请务必认真查阅相关文档\n        options: {\n            version:'1.0'\n        },\n        // 脚本扩展, 可自行添加变量或函数, 以供事件钩子或自定义模板(customTemplate)调用\n        extensions: {\n            greeting:'hey!',\n            doSomething() {\n                console.log( this.extensions.greeting );\n            }\n        },\n        // 事件钩子定义\n        hooks: {\n            // 视图数据加载前\n            onPreLoad: function() {\n            this.extensions.doSomething(vm);\n            },\n            // 视图数据加载后\n            onLoad: function(data) {},\n            // 视图数据渲染后\n            onRendered: function(data) {},\n            // 在所有按钮动作触发前, 可通过返回 false 阻拦后续按钮事件流程, 返回空或其他不阻拦\n            onPreAction: function(action,data) {},\n            // 自定义按钮执行逻辑\n            onCustomAction: function(action,data) {},\n            // 按钮事件触发完毕\n            onActionDone: function(action,result) {}\n        }\n    })\n    <\/script>\n")])])]),a("h4",{attrs:{id:"异步流程控制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#异步流程控制"}},[n._v("#")]),n._v(" 异步流程控制")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("    // 视图数据加载前\n    onPreLoad: function() {\n        return new Promise(function (resolve,reject) {\n            setTimeout(function() {\n                // 这里进行了一些异步操作\n                console.log('这里是 onPreLoad 的异步流程');\n                resolve();\n            }, 1000);\n        })\n    },\n    // 视图数据加载后\n    onLoad: function(data) {\n        return new Promise(function (resolve,reject) {\n            setTimeout(function() {\n                // 这里进行了一些异步操作\n                console.log('这里是 onLoad 的异步流程');\n                resolve();\n            }, 1000);\n        })\n    },\n    // 视图数据渲染后\n    onRendered: function(data) {\n        console.log('视图终于渲染完毕了')\n    },\n")])])]),a("h4",{attrs:{id:"按钮事件-阻挡预置按钮执行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#按钮事件-阻挡预置按钮执行"}},[n._v("#")]),n._v(" 按钮事件-阻挡预置按钮执行")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("    // 编辑 hooks 中的 onPreAction:\n    onPreAction: function(action,data) {\n        if ( action.actionCode==='add' ) {\n            // 你可能需要做些判断, 来决定是否可以执行后续流程\n            // 假设你已经做好判断, 决定对新增进行阻断, 并做个提示\n            alert('新增操作发生了某些异常, 无法顺利执行');\n            return false;\n        }\n    },\n")])])]),a("h4",{attrs:{id:"按钮事件的流程控制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#按钮事件的流程控制"}},[n._v("#")]),n._v(" 按钮事件的流程控制")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("    onPreAction: function(action,data) {\n        if ( action.actionCode==='add' ) {\n            alert('新增操作发生了某些异常, 无法顺利执行');\n            return false;\n        }\n        // 这是对 自定义按钮1 的控制, 这里使用的 actionCode 是定义按钮时设置的 code 属性\n        else if ( action.actionCode==='customActionCode1' ) {\n            console.log('customActionCode1 - onPreAction');\n        }\n    },\n    onCustomAction: function(action, data) {\n        // 因为 onCustomAction 是自定义按钮执行的公共通道, 所以在执行任何针对性代码之前都需要进行判断\n        // 这里是 自定义按钮1 的执行逻辑\n        if ( action.actionCode==='customActionCode1' ) {\n            // 获取当前时间的毫秒数\n            var nowTimeStamp = Date.now();\n            var isEvenNumber = nowTimeStamp%2 === 0\n\n            // 如果毫秒数为偶数, 执行异步流程\n            if ( isEvenNumber ) {\n                return new Promise(function(resolve,reject) {\n                    setTimeout(function() {\n                        console.warn('customActionCode1 - onCustomAction: 异步流程')\n                        resolve({ isEvenNumber, nowTimeStamp });\n                    },1000);\n                });\n            }\n            else {\n                console.log('customActionCode1 - onCustomAction: 同步流程')\n                return { isEvenNumber, nowTimeStamp };\n            }\n        }\n    },\n    onActionDone: function(action, result) {\n        // 因为 onActionDone 是所有按钮执行完毕的公共通道, 所以在执行任何针对性代码之前都需要进行判断\n        if ( action.actionCode==='customActionCode1' ) {\n            // 打印 onCustomAction 的返回结果\n            console[result.isEvenNumber? 'warn': 'log'](`customActionCode1 - onActionDone: ${result.isEvenNumber?'偶数':'奇数'} - ${ result.nowTimeStamp }`);\n        }\n    }\n")])])]),a("h4",{attrs:{id:"替换页面接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#替换页面接口"}},[n._v("#")]),n._v(" 替换页面接口")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("    <script id=\"customScript\">\n        ({\n            // 1. 将脚本配置的 version 改为 1.1 或更大(如果可用)\n            options: {\n                version:'1.1'\n            },\n            // 2. 进行页面设置: 替换默认 api, 目前仅开放视图接口的替换 ( 即: pageConfig.apis.listData )\n            pageConfig: {\n                // 所有自定接口的请求里, 可以直接访问到 vm|axios|config 等引用 ( 同事件钩子 ), params 则是视图信息和页码数\n                // 当前支持两种自定义模式: combine-合并 | replace-替换\n                // 所有自定义接口的返回值不管如何处理 (combine/replace), 最终都会流入事件钩子, 作为 data\n                apis: {\n                    // 2.1 合并模式, 仅替换数据源, 接口数据的校验|健全等仍然走预设逻辑\n                    listData: function(params) {\n                        return axios.post('self.defined/api', params);\n                    },\n                    // 2.2 替换模式, 除了替换数据源, 也跳过预设的数据校验和其他相关处理\n                    listData: {\n                        mode:'replace',\n                        request: function(params) {\n                            return axios.post('self.defined/api', params)\n                                .then(function(resp) {\n                                    // 需要自己对数据进行校验, errcode|errmsg|data 等仅作示范, 具体字段以接口为准\n                                    if ( resp.errcode!==0 ) throw resp.errmsg;\n                                    // 也需要自己处理返回值\n                                    return resp.data\n                                })\n                                // 一些健全或报错机制\n                                .catch(function(err) {\n                                    vm.$message.error(err.toString());\n                                })\n                        }\n                    }\n                }\n            },\n            // 3. 自定义接口的数据会被引入到钩子的 data 中\n            hooks: {\n                onLoad: function(data) {\n                    // 如果使用了自定义接口, 这里的 data 由自定义接口返回\n                },\n            }\n            // ...其他内容省略\n        })\n    <\/script>\n")])])]),a("h3",{attrs:{id:"移动端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#移动端"}},[n._v("#")]),n._v(" 移动端")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("    1. 样式模块\n        同pc端\n    2. 按钮模块\n        移动端不支持自定义按钮事件\n    3. 模板模块\n        -支持 Vue 模板的全功能, 相关文档请查阅: https://cn.vuejs.org/v2/guide/syntax.html\n        -模板包含额外的引用:\n            vm:         视图页面实例; 可通过 vm.foo | vm.bar() | vm.filter 等实现对页面数据|函数的复用;\n            extensions:     自定义脚本模块处所定义脚本扩展 (如有效); 可用于预设默认值|作基本判断或其他扩展, 需要注意的是扩展内 this 指向它自己, 如不了解不建议使用;\n            columns:      视图展示项, 由后台配置所得; 某些数据(如创建人/创建时间)是固定存在的, 但是否展示应该以后台配置为准;\n            listData:       视图数据;\n            showListItemDetail:   跳转详情页的内部逻辑; 如不了解不建议改动;\n            getAttachmentUrl:  通过环境变量和附件 id 换取真实附件地址, 不建议改动;\n    4. 脚本模块\n        同pc端\n")])])]),a("div",{staticClass:"custom-block danger"},[a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v("1.需要注意的是: 每一个视图的每一个数据段, 都有自己独立的 id。示例中的图片附件 Attachment1573033420152、标题文本 ShortText1573033397584, 仅指向该示例视图中的字段, 不代表其他任何视图的任何字段。\n")])])])])])}),[],!1,null,null,null);t.default=s.exports}}]);