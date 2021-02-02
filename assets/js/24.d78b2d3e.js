(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{502:function(n,e,t){"use strict";t.r(e);var a=t(4),s=Object(a.a)({},(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h2",{attrs:{id:"表单"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#表单"}},[n._v("#")]),n._v(" 表单")]),n._v(" "),t("h3",{attrs:{id:"对话框、提示框用法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#对话框、提示框用法"}},[n._v("#")]),n._v(" 对话框、提示框用法")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("    1. this.$message.success('success');//成功提示\n    2. this.$message.error('error');//失败提示\n    3. this.$message.loading([可选参数：提示文本]);//loading状态，可以加参数，提示文本\n    4. var closeLoading = this.$message.loading('加载中', 0); closeLoading();//参数：文本，消失时间（s），0为不消失需要close手动关闭\n    5. this.$confirm({ \n            title:'对话框',\n            content:'ddddd',\n            onOk(){ \n                alert('onOk') \n            },\n            onCancel(){\n                alert('onCancel')\n            }\n        })//对话框 参数:{title:'标题',content:'内容'}\n")])])]),t("h3",{attrs:{id:"onvalidate-校验"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#onvalidate-校验"}},[n._v("#")]),n._v(" onValidate 校验")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("    //1. 基础校验\n    form.on('onValidate',function(action,data){\n        if(this.txtName.value !== 'a'){\n            this.$message.error('校验失败');\n            return false;  //校验失败，阻止后续动作执行\n        }\n    });\n    //2. 异步校验\n    form.on('onValidate',function(action,data){\n        var closeLoading = this.$message.loading('正在校验数据',0);\n        var form = this;\n        return new Promise((resolve,reject)=>{\n            setTimeout(()=>{\n                if(form.txtName.value !== 'a'){\n                    closeLoading();\n                    form.$message.error('校验失败');\n                    resolve(false);\n                }\n            },5000);\n        });\n    });\n")])])]),t("h3",{attrs:{id:"自定义html"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#自定义html"}},[n._v("#")]),n._v(" 自定义HTML")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('    // 必须加载节点下面\n    <section type="template" id="template">\n        <a-row>\n            <a-col> //节点\n                <button id="btn1" onclick="show()">按钮</button>//绑定函数\n            </a-col>\n        </a-row>\n    </section>\n    <script>\n        //定义函数\n        function show(){\n            alert(\'aaabbbb\');\n        }\n    <\/script>\n')])])]),t("h3",{attrs:{id:"操作控件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#操作控件"}},[n._v("#")]),n._v(" 操作控件")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("    //1. 文本控件\n        var name = this.text1.value;\n        this.text1.value = 'a';\n\n    //2. 数值控件\n        this.number1.value = 1;\n\n    //3. 日期控件\n        this.date1.value = new Date(2019);\n\n    //4. 选人控件\n        this.userSelect1.value = [{\n            type: 1, //1部门，3人员\n            name: 'name1',\n            imgUrl: '//www.baidu.com/img1.png',\n            id: 'id1',\n            //departmentId : 'departmentId' 配置了选人控件属于、包含表达式时必需,\n            //departments : [] 配置了选人控件属于、包含表达式时必需\n        }];\n\n    //5. 关联表单\n        this.relevanceForm1.value = { \n            id: 'bizObjectId',\n            name: '数据摘要'\n        };\n\n    //6. 复选框\n        this.checkbox1.value = ['a','b'];\n\n    //7. 下拉单复选\n        this.dropdown1.items = ['a','b'];\n        var items = this.dropdown1.items;\n\n    //8. 子表赋值\n        //整表赋值\n        this.sheet1.value = [{\n            text1: 'a',\n            text2: 'b'\n        },{\n            text1: 'a',\n            text2: 'b'\n        }];\n        //整行赋值\n        this.sheet1.rows[0].value = {\n            text1: 'a',\n            text2: 'b'\n        };\n        //单元格赋值，第1行第1列\n        this.sheet1.getCell(0, 0).value = 'a';\n        //删除第一行\n        this.sheet1.removeRow(0);\n\n    //9. 操作控件状态\n        // 隐藏\n        this.txtName.display = false;\n        // 显示\n        this.txtName.display = true;\n        // 编辑\n        this.txtName.edit = true;\n        // 只读\n        this.txtName.edit = false;\n\n    10. 监听控件\n        // txtName是控件的key，控件的类型不同获得的值类型也不同，详见表单控件API\n        this.txtName.valueChange.subscribe((change)=>{\n            //最新值\n            console.log(change.value);\n            //旧值\n            console.log(change.oldValue); \n        });\n        // 订阅属性变化 \n        this.txtName.propertryChange.subscribe((change)=>{\n            change.name //属性名称：display、required等等\n            change.value //最新值\n            change.oldValue //旧值\n        });\n\n    // 11. 子表监听\n        //订阅第1行的行值变化\n        this.sheet1.getRowValueChange(0).subscribe((change)=>{});\n        //订阅整列的列值变化\n        const subject = this.sheet1.getColumnValueChange('text1');\n        if(subject){\n            subject.subscribe((change)=>{});\n        }\n        //订阅子表的行变化\n        this.sheet1.rowChange.subscribe((change)=>{\n            if(change.type === 'insert'){  //新增行\n\n            }else if(change.type === 'insertMulti'){ //批量新增行\n\n            }else if(change.type === 'remove'){ //删除行\n\n            }else if(change.type === 'removeMulti'){ //批量删除行\n\n            }\n        })\n        // 12. 子表删除行\n        //子表删除第一行\n        this.sheet1.removeRow(0);\n\n        // 12. 子表新增行\n        //子表新增第一行\n        this.sheet1.insert(0);\n\n")])])]),t("h3",{attrs:{id:"生命周期"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#生命周期"}},[n._v("#")]),n._v(" 生命周期")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v("1. onLoad(data,dataPermission) --- 加载数据后，渲染之前---[主要操作数据]\n```\n    data.sequenceStatus 流程状态\n        DRAFT 草稿\n        PROCESSING 进行中\n        COMPLETED 已完成\n        CANCELED 已取消\n        EXCEPTION 流程异常\n    dataPermission API表单数据权限 --- 来源于流程设计-数据权限\n        e : boolean, // 可写\n        r : boolean, // 必填\n        v : boolean, // 可见\n        subDataPermission ?: [] //子表列的数据权限\n\n    如果onLoad返回Promise，表单会等待其完成；如果有返回数据，将会完全覆盖API返回的data\n\n```\n2. onRendered(data) --- 渲染后 --- [主要用来操作DOM]\n```\n    window.parent.document.getElementById('signin_error')\n    ** 注意: onRendered中不要使用箭头函数,如果是IE浏览器则需要通过window.h3form拿控件对象. **\n```\n3. onValidate (action,data) --- 内置校验通过后\n```\n    表单submit前，内置校验通过后触发，返回false表示校验失败，会中断submit\n    如果onValidate返回Promise，表单会等待其完成\n```\n4. onPreAction (action,data) ---  按钮事件执行前\n```\n    按钮事件执行前，包括自定义按钮事件，return false会阻止事件执行\n    return false会阻止默认行为，如提交后的自动跳转\n```\n5. onActionDone(action,data) --- 按钮事件执行后\n```\n    按钮事件执行后，包括自定义按钮事件\n```\n6. onCustomAction (action,data) --- 自定义按钮事件\n```\n    自定义按钮事件执行\n```\n")])])]),t("h3",{attrs:{id:"全局对象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#全局对象"}},[n._v("#")]),n._v(" 全局对象")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v('1. axios --- 第三方Ajax库\n```\n    // get\n    let url = "/api/接口地址";\n    axios.get(url, {\n        params:{k:v}\n    }).then(function(res){\n        // res 为返回值\n    })\n\n    // post\n    let url = "/api/接口地址";\n    axios.post(url,{k:v}).then(function(res){\n        // res 为返回值\n    })\n```\n2. config --- 来源项目public/config.js\n```\n    // 3端都有配置\n    oauthHost: // OAuth地址\n    redirectHost: // OAuth回调地址\n    client_id: // OAuth参数\n    scope: // OAuth参数\n    secret: // OAuth参数,\n    apiHost: // 后台API地址,\n    //示例\n    var url = config.apiHost + \'/api/meeting/validate?meetingId=\' + meetingId;\n```\n')])])]),t("h3",{attrs:{id:"表单对象-通过this访问"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#表单对象-通过this访问"}},[n._v("#")]),n._v(" 表单对象 --- 通过this访问")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v("1. vue组件\n```\n    $message\n    $confirm\n    $router\n\n    // 示例- 获取文本的值\n    this.text.value\n```\n2. 表单按钮数组接口\n```\n    // 示例- 隐藏按钮\n    //数据加载后，渲染之前\n    form.on('onLoad', function (data) {\n        const codes = ['save','submit'];\n        this.actions.filter(ac => codes.indexOf(ac.code) > -1)\n            .forEach(ac => ac.visible = false);\n    }, 'cover');\n```\n3. 表单逻辑执行接口\n```\n    //执行表单内置逻辑，如暂存、提交等，目前公开的函数：\n    doAction\n    submit\n    submit是doAction('submit')的简写，doAction唯一的参数是action.code\n```\n")])])]),t("h2",{attrs:{id:"列表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#列表"}},[n._v("#")]),n._v(" 列表")]),n._v(" "),t("h2",{attrs:{id:"流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#流程"}},[n._v("#")]),n._v(" 流程")]),n._v(" "),t("h2",{attrs:{id:"模块"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#模块"}},[n._v("#")]),n._v(" 模块")])])}),[],!1,null,null,null);e.default=s.exports}}]);