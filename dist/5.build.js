webpackJsonp([5],{158:function(t,e,a){function o(t){a(235)}var n=a(164)(a(181),a(221),o,null,null);t.exports=n.exports},164:function(t,e){t.exports=function(t,e,a,o,n){var s,i=t=t||{},r=typeof t.default;"object"!==r&&"function"!==r||(s=t,i=t.default);var l="function"==typeof i?i.options:i;e&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns),o&&(l._scopeId=o);var c;if(n?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(n)},l._ssrRegister=c):a&&(c=a),c){var h=l.functional,d=h?l.render:l.beforeCreate;h?l.render=function(t,e){return c.call(e),d(t,e)}:l.beforeCreate=d?[].concat(d,c):[c]}return{esModule:s,exports:i,options:l}}},165:function(t,e,a){function o(t){for(var e=0;e<t.length;e++){var a=t[e],o=h[a.id];if(o){o.refs++;for(var n=0;n<o.parts.length;n++)o.parts[n](a.parts[n]);for(;n<a.parts.length;n++)o.parts.push(s(a.parts[n]));o.parts.length>a.parts.length&&(o.parts.length=a.parts.length)}else{for(var i=[],n=0;n<a.parts.length;n++)i.push(s(a.parts[n]));h[a.id]={id:a.id,refs:1,parts:i}}}}function n(){var t=document.createElement("style");return t.type="text/css",d.appendChild(t),t}function s(t){var e,a,o=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(o){if(f)return v;o.parentNode.removeChild(o)}if(g){var s=p++;o=u||(u=n()),e=i.bind(null,o,s,!1),a=i.bind(null,o,s,!0)}else o=n(),e=r.bind(null,o),a=function(){o.parentNode.removeChild(o)};return e(t),function(o){if(o){if(o.css===t.css&&o.media===t.media&&o.sourceMap===t.sourceMap)return;e(t=o)}else a()}}function i(t,e,a,o){var n=a?"":o.css;if(t.styleSheet)t.styleSheet.cssText=m(e,n);else{var s=document.createTextNode(n),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(s,i[e]):t.appendChild(s)}}function r(t,e){var a=e.css,o=e.media,n=e.sourceMap;if(o&&t.setAttribute("media",o),n&&(a+="\n/*# sourceURL="+n.sources[0]+" */",a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),t.styleSheet)t.styleSheet.cssText=a;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(a))}}var l="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!l)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=a(177),h={},d=l&&(document.head||document.getElementsByTagName("head")[0]),u=null,p=0,f=!1,v=function(){},g="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,a){f=a;var n=c(t,e);return o(n),function(e){for(var a=[],s=0;s<n.length;s++){var i=n[s],r=h[i.id];r.refs--,a.push(r)}e?(n=c(t,e),o(n)):n=[];for(var s=0;s<a.length;s++){var r=a[s];if(0===r.refs){for(var l=0;l<r.parts.length;l++)r.parts[l]();delete h[r.id]}}}};var m=function(){var t=[];return function(e,a){return t[e]=a,t.filter(Boolean).join("\n")}}()},166:function(t,e,a){"use strict";a.d(e,"g",function(){return s}),a.d(e,"f",function(){return i}),a.d(e,"e",function(){return l}),a.d(e,"a",function(){return r}),a.d(e,"d",function(){return c}),a.d(e,"c",function(){return h}),a.d(e,"b",function(){return d});var o=a(44),n="https://h5php.xingyuanauto.com/FlowProject/food/public/index.php/port/",s=function(t){if(sessionStorage.getItem("GetFocus")){var e=JSON.parse(sessionStorage.getItem("GetFocus"));t&&t(e)}else{o.a.http.get("https://h5php.xingyuanauto.com/FlowProject/food/public/index.php/port/food/GetFocus").then(function(t){return t.json()}).then(function(e){1001==e.code?(sessionStorage.setItem("GetFocus",JSON.stringify(e.data)),t&&t(e.data)):alert("查询失败")})}},i=function(t){if(sessionStorage.getItem("Recommend")){var e=JSON.parse(sessionStorage.getItem("Recommend"));t&&t(e)}else{o.a.http.get("https://h5php.xingyuanauto.com/FlowProject/food/public/index.php/port/food/Recommend").then(function(t){return t.json()}).then(function(e){1001==e.code?(sessionStorage.setItem("Recommend",JSON.stringify(e.data)),t&&t(e.data)):alert("查询失败")})}},r=function(t){if(sessionStorage.getItem("classList")){var e=JSON.parse(sessionStorage.getItem("classList"));t&&t(e)}else{o.a.http.get("https://h5php.xingyuanauto.com/FlowProject/food/public/index.php/port/food/class_list").then(function(t){return t.json()}).then(function(e){1001==e.code?(sessionStorage.setItem("classList",JSON.stringify(e.data)),t&&t(e.data)):alert("查询失败")})}},l=function(t,e){if(sessionStorage.getItem("IndexShowList")){var a=JSON.parse(sessionStorage.getItem("IndexShowList"));e&&e(a)}else{var s=n+"food/IndexShowList?pageId="+t;o.a.http.get(s).then(function(t){return t.json()}).then(function(t){1001==t.code?(sessionStorage.setItem("IndexShowList",JSON.stringify(t.data)),e&&e(t.data)):alert("查询失败")})}},c=function(t,e,a,s){if(""!=a||""!=e)var i=n+"food/show_list?pageId="+t+"&class_id="+a+"&name="+e;else var i=n+"food/IndexShowList?pageId="+t;o.a.http.get(i).then(function(t){return t.json()}).then(function(t){s&&s(t)})},h=function(t,e){var a=n+"food/FoodInfoData?id="+t;o.a.http.get(a).then(function(t){return t.json()}).then(function(t){1001==t.code?e&&e(t.data):alert("查询失败")})},d=function(t,e,a){var s=n+"food/GetLeave?email="+t+"&content="+e;o.a.http.post(s).then(function(t){return t.json()}).then(function(t){1001==t.code?a&&a(t):alert("查询失败")})}},167:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{}},methods:{},components:{},created:function(){}}},168:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a(166);e.default={data:function(){return{headclassList:"",restaurants:[],state:"",isCollapse:!0,isOpen:!1,path:"",pMenu:!1}},watch:{},methods:{hoverFun:function(){this.isOpen=!0},leaveFun:function(){this.isOpen=!1},clickMenu:function(){this.pMenu?this.pMenu=!1:this.pMenu=!0},querySearch:function(t,e){var a=this.restaurants;e(t?a.filter(this.createFilter(t)):a)},createFilter:function(t){return function(e){return 0===e.value.indexOf(t.toLowerCase())}},loadAll:function(){return[{value:"可乐鸡翅"},{value:"红烧肉"},{value:"冬瓜丸子汤"},{value:"鱼香肉丝"},{value:"麻辣香锅"},{value:"酸辣土豆丝"},{value:"排骨"},{value:"鱼"},{value:"面包"},{value:"凉菜"}]},handlesearchSelect:function(t){""!=this.state&&void 0!=this.state&&null!=this.state&&this.$router.push({path:"/Foodlist?keywords="+this.state})},handleIconClick:function(t){""!=this.state&&void 0!=this.state&&null!=this.state&&this.$router.push({path:"/Foodlist?keywords="+this.state})}},mounted:function(){this.restaurants=this.loadAll()},components:{},created:function(){var t=this;a.i(o.a)(function(e){t.headclassList=e,t.path=t.$router.currentRoute.path})}}},169:function(t,e,a){e=t.exports=a(43)(),e.push([t.i,".longPage{background:#f8f8f7;margin-top:30px;text-align:center}.link{margin:15px 0}.Recordnumber{margin:20px 0}.link a{padding:10px}",""])},170:function(t,e,a){e=t.exports=a(43)(),e.push([t.i,".headBack{width:100%;background:#eef1f6;margin-bottom:30px;box-shadow:0 2px 4px 0 rgba(0,0,0,.12),0 0 6px 0 rgba(0,0,0,.04)}.headBox a{color:#48576a}.headBox .is-active{color:#a37011}.headBox>ul{height:60px;display:inline-block}.headBox>ul li>a{display:inline-block;padding:10px 20px}.headBox>ul li{display:inline-block;position:relative;border-bottom:5px solid transparent}.headBox>ul li:hover{border-bottom:5px solid #a37011}.headBox>ul li a.active{color:#a37011}.headBox>ul li.noPadSearch:hover{border-bottom:5px solid transparent}.selectBoxShow{box-sizing:border-box;overflow:hidden;position:absolute;padding:0 5px;top:110%;height:0;background:#fff;box-shadow:0 2px 4px 0 rgba(0,0,0,.12),0 0 6px 0 rgba(0,0,0,.04);z-index:999;transition:all .3s ease-out}.selectBoxShow a{color:#a37011}.selectBoxShow.show{height:366px}.headBox>ul li.noPadSearch{padding:0;top:16px;margin-left:30px}.selectBox{border-bottom:1px solid #f1f1f1;display:block;width:390px;min-height:70px;padding:10px;cursor:default}.selectBox a{display:inline-block;padding:2px 4px;margin:2px 0}.selectBox a:hover{background-color:#a37011;color:#fff}.selectMore{margin-left:-5px;margin-right:-5px;text-align:center;padding:10px 0;background:#f1f1f1}.selectMore:hover{background:#a37011;color:#fff}.selectMore:hover a{color:#fff}.logoImg{width:160px;height:50px;display:inline-block;padding:5px;vertical-align:top}.logoImg img{width:100%;height:100%}.mobileBox{position:relative;padding-bottom:10px}.mobileBox .logoBox{height:100px;text-align:center}.mobileBox .logoBox img{height:100%;width:auto}.hideMenu{position:relative;width:100%}.hideMenu ul>li{background:#fff;border-bottom:1px solid #f1f1f1;padding:10px}.hideMenu ul>li a{color:#48576a;display:inline-block;width:100%;height:100%}.hideMenu ul>li a.active{color:#a37011}.hideMenu ul{width:100%;position:absolute;left:0;top:100%;box-sizing:border-box;z-index:999;border:1px solid #f1f1f1;box-shadow:0 2px 6px 0 rgba(0,0,0,.12),0 0 8px 0 rgba(0,0,0,.04);display:none}.hideMenu>i{position:absolute;left:10px;top:10px;width:30px;height:30px;font-size:16px}.mobileBox .searchBox{padding-left:40px;width:100%;box-sizing:border-box}.hideMenu ul.pshow,.mobileBox .searchBox .el-autocomplete{display:block}@media screen and (max-width:766px){.headBox{display:none}.mobileBox{display:block}}@media screen and (min-width:767px){.headBox{display:block}.mobileBox{display:none}}",""])},171:function(t,e,a){function o(t){a(175)}var n=a(164)(a(167),a(173),o,null,null);t.exports=n.exports},172:function(t,e,a){function o(t){a(176)}var n=a(164)(a(168),a(174),o,null,null);t.exports=n.exports},173:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"longPage"},[a("el-row",{staticClass:"container"},[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"link"},[a("a",{attrs:{href:"#/About",target:"_blank"}},[t._v("关于美食美荟")]),t._v(" "),a("a",{attrs:{href:"#/Advertising",target:"_blank"}},[t._v("广告合作")]),t._v(" "),a("a",{attrs:{href:"#/Suggestion",target:"_blank"}},[t._v("意见反馈")]),t._v(" "),a("a",{attrs:{href:"#/FriendsLink",target:"_blank"}},[t._v("友情链接")])]),t._v(" "),a("div",{staticClass:"Recordnumber"},[a("p",[t._v("托管于"),a("a",{attrs:{href:"https://github.com/Aimee1608/foodWeb"}},[t._v("GitHub")]),t._v(" , "),a("a",{attrs:{href:"https://tongji.baidu.com"}},[t._v("百度统计")]),t._v(" 提供网站统计服务  ©2017 美食美荟 由 "),a("a",{attrs:{href:"https://cn.vuejs.org/"}},[t._v("Vue")]),t._v(" 搭建,京ICP备17071595号\n                Made by Aimee")])])])],1)],1)},staticRenderFns:[]}},174:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"headBack"},[a("div",{staticClass:"container"},[a("div",{staticClass:"headBox"},[t._m(0),t._v(" "),a("ul",[a("li",[a("a",{class:"/"==t.path?"active":"",attrs:{href:"#/"}},[t._v("首页")])]),t._v(" "),a("li",[a("a",{class:"/Foodlist"==t.path?"active":"",attrs:{href:"#/Foodlist"}},[t._v("菜谱")])]),t._v(" "),a("li",[a("a",{class:"/Select"==t.path?"active":"",attrs:{href:"#/Select"},on:{mouseover:t.hoverFun,mouseout:t.leaveFun}},[t._v("分类 "),a("i",{class:t.isOpen?"el-icon-caret-top":"el-icon-caret-bottom"})]),t._v(" "),a("div",{class:t.isOpen?"selectBoxShow show":"selectBoxShow",on:{mouseover:t.hoverFun,mouseout:t.leaveFun}},[t._l(t.headclassList,function(e,o){return o<=3?a("el-row",{key:e.id,staticClass:"selectBox",attrs:{gutter:10}},[a("el-col",{staticClass:"smalltitle",attrs:{span:6}},[t._v("\n                                    "+t._s(e.class_name)+"\n                                ")]),t._v(" "),a("el-col",{attrs:{span:18}},[a("el-row",{attrs:{gutter:10}},t._l(e.class_names,function(e,o){return a("el-col",{key:e.id,attrs:{span:8}},[a("a",{attrs:{href:"#/Foodlist?classId="+e.id}},[t._v(t._s(e.class_name))])])}))],1)],1):t._e()}),t._v(" "),t._m(1)],2)]),t._v(" "),a("li",[a("a",{class:"/Hotnews"==t.path?"active":"",attrs:{href:"#/Hotnews"}},[t._v("热门文章")])]),t._v(" "),a("li",{staticClass:"noPadSearch"},[a("div",{staticClass:"searchBox"},[a("el-row",{staticClass:"demo-autocomplete"},[a("el-col",[a("el-autocomplete",{staticClass:"inline-input",attrs:{"fetch-suggestions":t.querySearch,placeholder:"请输入内容",icon:"search","on-icon-click":t.handleIconClick},on:{select:t.handlesearchSelect},model:{value:t.state,callback:function(e){t.state=e},expression:"state"}})],1)],1)],1)])])]),t._v(" "),a("div",{staticClass:"mobileBox"},[t._m(2),t._v(" "),a("div",{staticClass:"hideMenu"},[a("i",{staticClass:"el-icon-menu",on:{click:t.clickMenu}}),t._v(" "),a("ul",{class:t.pMenu?"pshow":""},[a("li",[a("a",{class:"/"==t.path?"active":"",attrs:{href:"#/"}},[t._v("首页")])]),t._v(" "),a("li",[a("a",{class:"/Foodlist"==t.path?"active":"",attrs:{href:"#/Foodlist"}},[t._v("菜谱")])]),t._v(" "),a("li",[a("a",{class:"/Select"==t.path?"active":"",attrs:{href:"#/Select"}},[t._v("分类")])]),t._v(" "),a("li",[a("a",{class:"/Hotnews"==t.path?"active":"",attrs:{href:"#/Hotnews"}},[t._v("热门文章")])])]),t._v(" "),a("div",{staticClass:"searchBox"},[a("el-row",{staticClass:"demo-autocomplete"},[a("el-col",[a("el-autocomplete",{staticClass:"inline-input",attrs:{"fetch-suggestions":t.querySearch,placeholder:"请输入内容",icon:"search","on-icon-click":t.handleIconClick},on:{select:t.handlesearchSelect},model:{value:t.state,callback:function(e){t.state=e},expression:"state"}})],1)],1)],1)])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"logoImg"},[a("img",{staticClass:"fitImg",attrs:{src:"src/img/logoHead.png",alt:""}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"selectMore"},[a("a",{attrs:{href:"#/Select"}},[t._v("查看更多")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"logoBox"},[a("img",{attrs:{src:"src/img/logoHead.png",alt:""}})])}]}},175:function(t,e,a){var o=a(169);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);a(165)("e131519c",o,!0)},176:function(t,e,a){var o=a(170);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);a(165)("10810c10",o,!0)},177:function(t,e){t.exports=function(t,e){for(var a=[],o={},n=0;n<e.length;n++){var s=e[n],i=s[0],r=s[1],l=s[2],c=s[3],h={id:t+":"+n,css:r,media:l,sourceMap:c};o[i]?o[i].parts.push(h):a.push(o[i]={id:i,parts:[h]})}return a}},181:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a(172),n=a.n(o),s=a(171),i=a.n(s);e.default={data:function(){return{}},components:{"wbc-nav":n.a,"wbc-footer":i.a}}},202:function(t,e,a){e=t.exports=a(43)(),e.push([t.i,".friendslinks{width:100%;min-height:60vh;text-align:left}.friendslinks li{display:inline-block;padding:5px 10px;margin:10px}.friendslinks li:hover{background:#a37011}.friendslinks li:hover a{color:#fff}",""])},221:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{},[a("wbc-nav"),t._v(" "),a("el-row",{staticClass:"container"},[a("el-col",{attrs:{span:24}},[a("h1",{staticClass:"pageTitle"},[t._v("友情链接")]),t._v(" "),a("ul",{staticClass:"friendslinks"},[a("li",[a("a",{attrs:{href:"https://weibo.com/u/2242812941?refer_flag=1001030101_&is_all=1"}},[t._v("Aimee的新浪微博")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#"}},[t._v("Aimee的技术博客")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/Aimee1608"}},[t._v("Aimee的github")])]),t._v(" "),a("li",[a("a",{attrs:{href:"http://www.meishichina.com/"}},[t._v("美食天下")])]),t._v(" "),a("li",[a("a",{attrs:{href:"http://home.meishichina.com/recipe.html"}},[t._v("菜谱大全")])]),t._v(" "),a("li",[a("a",{attrs:{href:"http://www.xiachufang.com/"}},[t._v("下厨房")])]),t._v(" "),a("li",[a("a",{attrs:{href:"http://www.ttmeishi.com/"}},[t._v("天天美食")])]),t._v(" "),a("li",[a("a",{attrs:{href:"http://cook.poco.cn/"}},[t._v("POCO美食")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.xinshipu.com/"}},[t._v("心食谱")])]),t._v(" "),a("li",[a("a",{attrs:{href:"http://www.meishij.net/"}},[t._v("美食杰")])]),t._v(" "),a("li",[a("a",{attrs:{href:"http://www.zhms.cn/"}},[t._v("中华美食")])]),t._v(" "),a("li",[a("a",{attrs:{href:"http://www.dianping.com/"}},[t._v("大众点评")])]),t._v(" "),a("li",[a("a",{attrs:{href:"http://www.meituan.com/"}},[t._v("美团")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.aliyun.com/"}},[t._v("阿里云")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://wanwang.aliyun.com/"}},[t._v("阿里云万网")])]),t._v(" "),a("li",[a("a",{attrs:{href:"http://www.chn-food.com/"}},[t._v("《中国食品》")])]),t._v(" "),a("li",[a("a",{attrs:{href:"http://www.ccas.com.cn/"}},[t._v("中国烹饪协会")])]),t._v(" "),a("li",[a("a",{attrs:{href:"http://www.caipuchina.net/"}},[t._v("美食居")])]),t._v(" "),a("li",[a("a",{attrs:{href:"http://www.51bi.com/"}},[t._v("返利网")])]),t._v(" "),a("li",[a("a",{attrs:{href:"http://www.yescate.com/"}},[t._v("尚食康")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.xiangha.com/"}},[t._v("香哈网")])]),t._v(" "),a("li",[a("a",{attrs:{href:"http://www.xtxq.com/"}},[t._v("乡里乡亲")])]),t._v(" "),a("li",[a("a",{attrs:{href:"http://www.firstcate.com/index.html"}},[t._v("环球美食网")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://shipin.gongchang.com/"}},[t._v("世界工厂食品网")])]),t._v(" "),a("li",[a("a",{attrs:{href:"http://www.gewara.com/"}},[t._v("格瓦拉电影")])]),t._v(" "),a("li",[a("a",{attrs:{href:"http://www.gznf.net/"}},[t._v("羊城网")])]),t._v(" "),a("li",[a("a",{attrs:{href:"http://www.zyctd.com/"}},[t._v("中药材天地")])]),t._v(" "),a("li",[a("a",{attrs:{href:"http://www.greatchef.com.cn/"}},[t._v("名厨网")])]),t._v(" "),a("li",[a("a",{attrs:{href:"http://meishi.quna.com/"}},[t._v("去哪网美食频道")])]),t._v(" "),a("li",[a("a",{attrs:{href:"http://www.jaoshi.com/"}},[t._v("养生教室")])]),t._v(" "),a("li",[a("a",{attrs:{href:"http://life.iqiyi.com/"}},[t._v("爱奇艺生活")])]),t._v(" "),a("li",[a("a",{attrs:{href:"http://food.hsw.cn/"}},[t._v("华商美食")])])])])],1),t._v(" "),a("wbc-footer")],1)},staticRenderFns:[]}},235:function(t,e,a){var o=a(202);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);a(165)("1d35bc8c",o,!0)}});