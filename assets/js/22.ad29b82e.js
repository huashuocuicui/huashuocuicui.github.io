(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{502:function(e,a,t){"use strict";t.r(a);var r=t(4),s=Object(r.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"表单"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#表单"}},[e._v("#")]),e._v(" 表单")]),e._v(" "),t("h3",{attrs:{id:"表单引入jquery以及一些静态图片资源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#表单引入jquery以及一些静态图片资源"}},[e._v("#")]),e._v(" 表单引入jquery以及一些静态图片资源")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('    //目录：\\entries\\portal\\public\\jquery\\jquery.min.js\n    <script src="/jquery/jquery.min.js"><\/script>\n')])])]),t("h3",{attrs:{id:"表单子表至少保留一行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#表单子表至少保留一行"}},[e._v("#")]),e._v(" 表单子表至少保留一行")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("    //进入后子表自动添加一行\n    if(this.qsd_childs.value.length <1){\n        this.qsd_childs.insertRow(0);\n    }\n    // 子表最少保留一行\n    this.qsd_childs.rowChange.subscribe((change)=>{\n        if(change.type === 'remove'){ //删除行\n            if(this.qsd_childs.value.length <1){\n                this.qsd_childs.insertRow(0);\n            }\n        }\n    })\n")])])]),t("h3",{attrs:{id:"提示框-异步改同步"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#提示框-异步改同步"}},[e._v("#")]),e._v(" 提示框 异步改同步")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("    return new Promise((resolve,reject)=>{\n        this.$confirm({ \n            title:'提示',\n            content:'统一社会信用代填写有误!',\n            okText:'关闭',\n            cancelText:'重新填写',\n            onOk(){ \n                resolve(false);\n            },\n            onCancel(){\n                resolve(false);\n            }\n        })\n    });\n")])])]),t("h3",{attrs:{id:"控件赋值失败"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#控件赋值失败"}},[e._v("#")]),e._v(" 控件赋值失败")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('    // 检查控件类型与赋值类型是否一致\n    文本类型可以直接 【+""】\n    数值类型可以直接 【*1】\n')])])]),t("h2",{attrs:{id:"列表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#列表"}},[e._v("#")]),e._v(" 列表")]),e._v(" "),t("h3",{attrs:{id:"列表页更换数据源-重定制数据、二开列表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#列表页更换数据源-重定制数据、二开列表"}},[e._v("#")]),e._v(" 列表页更换数据源 -- [重定制数据、二开列表]")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('    //需求-列表数据不满足需求，需要更换数据源，但是列表页样式基本满足 ---\n\n    let paramsStr="";\n    let users = JSON.parse(sessionStorage.getItem("user"))\n    for(var i=0;i<vm.filterData.length;i++){\n        paramsStr += vm.filterData[i].propertyCode\n        paramsStr += "="\n        if(vm.filterData[i].propertyCode != "area_name"){\n            paramsStr += vm.filterData[i].propertyValue==null?"":vm.filterData[i].propertyValue\n        }else{\n            paramsStr += vm.filterData[i].propertyValue==null?"":vm.filterData[i].propertyValueName\n        }\n        paramsStr += "&"\n    }\n    return new Promise(function (resolve,reject) {\n        let queryReportUrl="/api/new/data";\n        let sendUrl = queryReportUrl + "?"+paramsStr +"userId="+users.id+ "&pageSize="+vm.pageSize+"&curPage="+vm.curPage;\n            vm.dataSource = [];\n            var closeLoading = vm.$message.loading(\'数据加载中，请稍后...\', 0);\n            axios.post(sendUrl).then(response => {\n            if(response.errcode !=0){\n                vm.dataSource = [];//数据\n            }else{\n                //vm.pageSize = response.data.//\n                vm.total = response.data.total;//总条数\n                vm.dataSource = response.data.list;//数据\n            }\n            closeLoading();\n        });\n        resolve();\n    })\n')])])]),t("h3",{attrs:{id:"列表页重定制导出功能-调用接口导出"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#列表页重定制导出功能-调用接口导出"}},[e._v("#")]),e._v(" 列表页重定制导出功能 --调用接口导出")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('    <action code="exportnew" text="导出"  class="list-action-exportnew"></action>\n\n    onCustomAction: function(action,data) {\n        // 根据查询条件导出\n        if(action.actionCode  == "exportnew"){\n            let paramsStr="";\n            let users = JSON.parse(sessionStorage.getItem("user"))\n            let token = localStorage.getItem("token");\n            for(var i=0;i<vm.filterData.length;i++){\n                paramsStr += vm.filterData[i].propertyCode\n                paramsStr += "="\n                if(vm.filterData[i].propertyCode != "area_name"){\n                    paramsStr += vm.filterData[i].propertyValue==null?"":vm.filterData[i].propertyValue\n                }else{\n                    paramsStr += vm.filterData[i].propertyValue==null?"":vm.filterData[i].propertyValueName\n                }\n                paramsStr += "&"\n            }\n            let queryReportUrl="/api/api/epidemic/sbInfolistSheet";\n            let sendUrl = queryReportUrl + "?"+paramsStr +"userId="+users.id+ "&pageSize="+vm.pageSize+"&curPage="+vm.curPage+"&access_token="+token;\n            window.open(sendUrl)\n        }\n    },\n')])])]),t("h1",{attrs:{id:"别走，请留下你的声音"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#别走，请留下你的声音"}},[e._v("#")]),e._v(" 别走，请留下你的声音")]),e._v(" "),t("Vssue",{attrs:{title:"test评论"}})],1)}),[],!1,null,null,null);a.default=s.exports}}]);