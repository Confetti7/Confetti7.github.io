webpackJsonp([0],[,,,function(t,e){t.exports=[{fileName:1,name:"百度统计使用文档",href:"#/article/1",time:"2018/5/27",memo:"相关资料和实现代码的简单整理"},{fileName:2,name:"table-layout",href:"#/article/2",time:"2018/5/29",memo:"table-layout属性为表设置表格布局算法"},{fileName:3,name:"男孩",href:"#/article/3",time:"2018/6/7",memo:"像躺在阳光下的海"},{fileName:4,name:"往忆云",href:"#/article/4",time:"2018/6/8",memo:"爱上一首歌可能不是因为旋律多动听，嗓音多感人，而是因为，你恰好也有个故事"}]},,function(t,e,n){var a=n(0)(n(15),n(66),null,null,null);t.exports=a.exports},,function(t,e,n){"use strict";var a=n(2),i=n(68),r=n(67),s=n(54),o=n.n(s),c=n(53),l=n.n(c),u=n(3),d=n.n(u);a.default.use(i.a),a.default.use(r.a);var v=[{path:"/",name:"home",component:o.a},{path:"/article",name:"article",component:l.a,children:[{path:"archive",name:"archive"}]}];d.a.forEach(function(t){v[1].children.push({path:t.fileName.toString(),name:t.name.toString()})}),e.a=new i.a({routes:v})},function(t,e,n){"use strict";var a=n(2),i=n(70);a.default.use(i.a),e.a=new i.a.Store({state:{source:"http://dl.stream.qqmusic.qq.com/C100003Gqgy22qoF7T.m4a?vkey=3AA567FAE08F0E06D1C59A877BB896150F7AE3A5575E7FE0C0F3E4E16FF3649CC6237557272D9F9AA1051CB83E3D733572A37CB8BCBF3059"},mutations:{switch_source:function(t,e){t.source=e}},actions:{switch_source:function(t,e){t.commit("switch_source",e)}}})},function(t,e){},,function(t,e,n){function a(t){n(28)}var i=n(0)(n(12),n(58),a,null,null);t.exports=i.exports},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(51),i=n.n(a);e.default={name:"app",components:{cHeader:i.a},computed:{source:function(){return this.$store.state.source}}}},function(t,e,n){"use strict";function a(t,e){var n=document.createElement("a");n.href=t,n.download=e,document.body.appendChild(n),n.click(),document.body.removeChild(n)}Object.defineProperty(e,"__esModule",{value:!0});var i=n(1),r=(n.n(i),n(35)),s=n.n(r);e.default={data:function(){return{theadConfig:[{name:"歌曲",width:"30%"},{name:"歌手",width:"23.3%"},{name:"专辑",width:"23.3%"},{name:"发布时间",width:"23.3%"}],musicList:[],name:"男孩",pageIndex:0,pageSize:10,totalNum:0}},computed:{source:function(){return this.$store.state.source}},mounted:function(){this.getListByName()},methods:{getListByName:function(){var t=this,e="https://c.y.qq.com/soso/fcgi-bin/client_search_cp?ct=24&qqmusic_ver=1298&new_json=1&remoteplace=txt.yqq.song&searchid=61954838856579256&t=0&aggr=1&cr=1&catZhida=1&lossless=0&flag_qc=0&p="+this.pageIndex+"&n="+this.pageSize+"&w="+this.name+"&g_tk=5381&jsonpCallback=MusicJsonCallback08522478043023662&loginUin=0&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0";s()(e,{name:"MusicJsonCallback08522478043023662"},function(e,n){(n=n.data.song)&&(t.totalNum=n.totalnum>200?n.totalnum-10:n.totalnum,n.list.forEach(function(t){t.source=""}),t.musicList=n.list)})},handlePageIndexChange:function(t){this.pageIndex=t,this.getListByName()},handlePageSizeChange:function(t){this.pageSize=t,this.getListByName()},getMusic:function(t,e,n,i){var r=this,o="https://c.y.qq.com/base/fcgi-bin/fcg_music_express_mobile3.fcg?g_tk=872989112&jsonpCallback=MusicJsonCallback06459212607938936&loginUin=11297258&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0&cid=205361747&callback=MusicJsonCallback06459212607938936&uin=11297258&songmid="+e+"&filename="+n+"&guid=9136027940";s()(o,{name:"MusicJsonCallback06459212607938936"},function(e,s){var o=s.data.items[0].vkey,c="http://dl.stream.qqmusic.qq.com/"+n+"?vkey="+o+"&fromtag=66";switch(i){case"play":t.source=c,r.$store.dispatch("switch_source",t.source);document.getElementById("music-box").play();break;case"download":a(c,t.title)}})},play:function(t){this.action(t,"play")},pause:function(t){t.source="",document.getElementById("music-box").pause()},download:function(t){this.action(t,"download")},action:function(t,e){var n=this,a="https://c.y.qq.com/v8/fcg-bin/fcg_play_single_song.fcg?songid="+t.id+"&tpl=yqq_song_detail&format=jsonp&callback=getOneSongInfoCallback ";s()(a,{name:"getOneSongInfoCallback"},function(a,i){var r=t.mid,s=i.url[t.id].split("/")[1].split("?")[0];n.getMusic(t,r,s,e)})}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(5),i=n.n(a),r=n(3),s=n.n(r);e.default={components:{abstract:i.a},data:function(){return{articleList:s.a}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{index:"",href:"",name:"",time:"",memo:""}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(1),i=n.n(a),r=n(26),s=(n.n(r),n(41)),o=n.n(s);e.default={data:function(){return{text:"",editorId:(new Date).getTime(),editor:""}},mounted:function(){this.createEditor()},methods:{createEditor:function(){var t=this;t.editor=new o.a({textarea:i()("#"+t.editorId),placeholder:"Confetti7",defaultImage:"",params:{},upload:!1,tabIndent:!0,toolbar:["title","bold","italic","underline","strikethrough","fontScale","color","ol","ul","blockquote","code","table","link","image","hr","indent","outdent","alignment"],toolbarFloat:!0,toolbarFloatOffset:0,toolbarHidden:!1,pasteImage:!1,cleanPaste:!1}),t.editor.on("valuechanged",function(e,n){t.text=t.editor.getValue()})}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(3),i=n.n(a);e.default={data:function(){return{key:"",searchList:[]}},methods:{search:function(){var t=this;this.searchList=[],i.a.forEach(function(e){t.key&&e.name.indexOf(t.key)>-1&&t.searchList.push(e)}),this.searchList.length<1&&this.searchList.push({name:"The article was not found!"})},turnArticle:function(t){"The article was not found!"!==t.name&&(window.location.href="#/article/"+t.fileName)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={mounted:function(){var t=this;setTimeout(function(){t.$root.eventHub.$emit("shop",{})},2e3)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(50),i=n.n(a),r=n(49),s=n.n(r),o=n(45),c=n.n(o),l=n(46),u=n.n(l),d=n(47),v=n.n(d),f=n(48),_=n.n(f);n(22);e.default={data:function(){return{article:"editor"}},components:{editor:i.a,archive:s.a,article1:c.a,article2:u.a,article3:v.a,article4:_.a},mounted:function(){this.turnArticle()},methods:{turnArticle:function(){var t=window.location.href;if(t.indexOf("article/")>-1){if(t.indexOf("archive")>-1)return this.article="archive",!0;var e=t.split("article/")[1];this.article="article"+e}else this.article="editor"}},watch:{$route:function(){this.turnArticle()}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(5),i=n.n(a),r=n(52),s=n.n(r),o=n(3),c=n.n(o);e.default={components:{robot:s.a,abstract:i.a},data:function(){return{articleList:c.a}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(2),i=n(10),r=n.n(i),s=n(9),o=(n.n(s),n(11)),c=n.n(o),l=n(7),u=n(8);a.default.use(r.a),a.default.config.productionTip=!1,a.default.directive("focus",{inserted:function(t){t.focus()}}),a.default.component("anchored-heading",{render:function(t){return t("h"+this.level,this.$slots.default)},props:{level:{type:Number,required:!0}}}),new a.default({el:"#app",router:l.a,store:u.a,template:"<App/>",components:{App:c.a},data:{eventHub:new a.default}})},function(t,e,n){"use strict";var a=n(23),i=(n.n(a),n(38));n.n(i)},,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,,,,,,,,,function(t,e,n){var a=n(0)(null,n(64),null,null,null);t.exports=a.exports},function(t,e,n){function a(t){n(33)}var i=n(0)(null,n(63),a,"data-v-7e53c3d6",null);t.exports=i.exports},function(t,e,n){function a(t){n(32)}var i=n(0)(null,n(62),a,"data-v-7e3794d4",null);t.exports=i.exports},function(t,e,n){function a(t){n(31),n(30)}var i=n(0)(n(13),n(61),a,"data-v-7e1b65d2",null);t.exports=i.exports},function(t,e,n){var a=n(0)(n(14),n(59),null,null,null);t.exports=a.exports},function(t,e,n){var a=n(0)(n(16),n(56),null,null,null);t.exports=a.exports},function(t,e,n){function a(t){n(34)}var i=n(0)(n(17),n(65),a,"data-v-81728426",null);t.exports=i.exports},function(t,e,n){function a(t){n(27)}var i=n(0)(n(18),n(55),a,"data-v-1bb6b708",null);t.exports=i.exports},function(t,e,n){var a=n(0)(n(19),n(57),null,null,null);t.exports=a.exports},function(t,e,n){function a(t){n(29)}var i=n(0)(n(20),n(60),a,"data-v-5f86f97c",null);t.exports=i.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Baymax"},[n("div",{staticClass:"head"},[n("div",{staticClass:"cover-s"},[n("div",{staticClass:"left"}),n("div",{staticClass:"right"})]),t._v(" "),n("div",{staticClass:"cover-x"},[n("div",{staticClass:"left"}),n("div",{staticClass:"right"})]),t._v(" "),n("div",{staticClass:"eyes-l"}),t._v(" "),n("div",{staticClass:"eyes-r"}),t._v(" "),n("div",{staticClass:"mourse"})]),t._v(" "),n("div",{staticClass:"hand-l"},[n("div",{staticClass:"hl-l"}),t._v(" "),n("div",{staticClass:"f-1"}),t._v(" "),n("div",{staticClass:"f-2"}),t._v(" "),n("div",{staticClass:"f-3"})]),t._v(" "),n("div",{staticClass:"hand-r"},[n("div",{staticClass:"hr-r"}),t._v(" "),n("div",{staticClass:"fr-1"}),t._v(" "),n("div",{staticClass:"fr-2"}),t._v(" "),n("div",{staticClass:"fr-3"})]),t._v(" "),n("div",{staticClass:"body"},[n("div",{staticClass:"heart"}),t._v(" "),n("div",{staticClass:"belly"})]),t._v(" "),n("div",{staticClass:"leg-l"}),t._v(" "),n("div",{staticClass:"leg-r"})])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("textarea",{attrs:{id:t.editorId,autofocus:""}}),t._v(" "),n("div",{staticClass:"container typo"},[n("div",{domProps:{innerHTML:t._s(t.text)}})])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n(t.article,{tag:"component"})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("c-header"),t._v(" "),n("router-view"),t._v(" "),n("video",{staticStyle:{display:"none"},attrs:{id:"music-box",name:"media",src:t.source,loop:"",controls:"","webkit-playsinline":"true","x-webkit-airplay":"true",playsinline:"true","x5-video-player-type":"h5","x5-video-orientation":"h5","x5-video-player-fullscreen":"true",preload:"auto",autoplay:"true"}})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container typo"},[n("h1",{staticClass:"logo"},[t._v("文章归档")]),t._v(" "),t._l(t.articleList,function(t,e){return n("abstract",{key:e,attrs:{index:e+1,href:t.href,name:t.name,time:t.time,memo:t.memo}})})],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container typo"},[n("h1",{staticClass:"logo"},[t._v("Confetti7 的私人博客")]),t._v(" "),t._m(0),t._v(" "),n("hr"),t._v(" "),n("div",{staticStyle:{position:"relative","z-index":"999"}},[t._l(t.articleList,function(t,e){return n("abstract",{key:e,attrs:{index:e+1,href:t.href,name:t.name,time:t.time}})}),t._v(" "),n("div",{staticClass:"robot-box"},[n("robot")],1)],2)])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("一些成长的痕迹，会偶尔在这里写下来。"),n("br"),t._v("\n    关于我，目前作为一名工程师，在用友网络处理一些关于前端的事情。"),n("br"),t._v("\n    下面是最近写的一些文章：\n    ")])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container typo"},[n("h1",{staticClass:"logo"},[t._v("往忆云")]),t._v(" "),n("div",[n("Input",{staticStyle:{float:"right",width:"250px","margin-bottom":"10px"},attrs:{placeholder:"Enter something...",icon:"ios-pulse"},on:{"on-click":t.getListByName,"on-enter":t.getListByName},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),t._v(" "),n("table",{staticClass:"music-list-box"},[n("thead",[n("tr",t._l(t.theadConfig,function(e){return n("td",{style:{width:e.width}},[t._v(t._s(e.name))])}))]),t._v(" "),n("tbody",t._l(t.musicList,function(e){return n("tr",[n("td",[n("div",{staticClass:"music-title"},[t._v(t._s(e.title))]),t._v(" "),n("div",{staticClass:"todo-list"},[n("span",{directives:[{name:"show",rawName:"v-show",value:t.source!==e.source,expression:"source!==item.source"}],staticClass:"todo play",on:{click:function(n){t.play(e)}}}),t._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:t.source===e.source,expression:"source===item.source"}],staticClass:"todo pause",on:{click:function(n){t.pause(e)}}}),t._v(" "),n("span",{staticClass:"todo download",on:{click:function(n){t.download(e)}}})])]),t._v(" "),n("td",[t._v(t._s(e.singer[0].title))]),t._v(" "),n("td",[t._v(t._s(e.album.title))]),t._v(" "),n("td",[t._v(t._s(e.time_public))])])}))]),t._v(" "),n("Page",{attrs:{id:"page",total:t.totalNum,size:"small","show-total":"","show-sizer":""},on:{"on-change":t.handlePageIndexChange,"on-page-size-change":t.handlePageSizeChange}})],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container typo"},[n("h1",{staticClass:"logo"},[t._v("男孩")]),t._v(" "),n("p",{staticClass:"box"},[n("img",{attrs:{src:"https://gss0.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/zhidao/wh%3D600%2C800/sign=1b3d9bae5d4e9258a6618ee8acb2fd60/c75c10385343fbf2a00fd5e9bb7eca8064388fdc.jpg",alt:""}}),t._v("\n    曾经意外 他和她 相爱"),n("br"),t._v("\n    在不会 犹豫的时代"),n("br"),t._v("\n    以为明白"),n("br"),t._v("\n    所以爱得痛快"),n("br"),t._v("\n    一双手 紧紧放不开"),n("br"),t._v("\n    心中的 执着与未来"),n("br"),t._v("\n    忘不了 你的爱"),n("br"),t._v("\n    但结局难更改"),n("br"),t._v("\n    我没能把你留下来"),n("br"),t._v("\n    更不像他能给你一个"),n("br"),t._v("\n    期待的未来"),n("br"),t._v("\n    幼稚的男孩"),n("br"),t._v("\n    你的关怀一直随身携带"),n("br"),t._v("\n    无人的地方再打开"),n("br"),t._v("\n    想问你现在"),n("br"),t._v("\n    是否忧伤不再"),n("br"),t._v("\n    像躺在阳光下的海"),n("br"),t._v("\n    像用心涂抹的色彩"),n("br"),t._v("\n    让你微笑起来 勇敢起来"),n("br"),t._v("\n    忘不了 你的爱"),n("br"),t._v("\n    但结局难更改"),n("br"),t._v("\n    我没能把你留下来"),n("br"),t._v("\n    更不像他能给你一个"),n("br"),t._v("\n    期待的未来"),n("br"),t._v("\n    幼稚的男孩"),n("br"),t._v("\n    想你就现在"),n("br"),t._v("\n    想你 每当我又徘徊"),n("br"),t._v("\n    所有遗憾的 都不是未来"),n("br"),t._v("\n    所有爱最后都难免"),n("br"),t._v("\n    逃不过伤害"),n("br"),t._v("\n    不必再重来"),n("br"),t._v("\n    现在我只希望疼痛来得更痛快"),n("br"),t._v("\n    反正不能够重来"),n("br")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container typo"},[n("h1",{staticClass:"logo"},[t._v("table-layout")]),t._v(" "),n("p",[t._v("西北偏北，羊马很黑，你饮酒落泪，西北偏北把兰州喝醉。")]),t._v(" "),n("table",{staticClass:"common",attrs:{id:"automatic"}},[n("colgroup",{attrs:{span:"2",width:"30%"}}),t._v(" "),n("colgroup"),t._v(" "),n("thead",[n("tr",[n("th",[t._v("automatic")]),t._v(" "),n("th",[t._v("fixed")]),t._v(" "),n("th",[t._v("inherit")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("默认。列宽度由单元格内容设定。")]),t._v(" "),n("td",[t._v("列宽由表格宽度和列宽度设定。")]),t._v(" "),n("td",[t._v("规定应该从父元素继承 table-layout 属性的值。")])])])]),t._v(" "),n("table",{staticClass:"common",attrs:{id:"fixed"}},[n("colgroup",{attrs:{span:"2",width:"30%"}}),t._v(" "),n("colgroup"),t._v(" "),n("thead",[n("tr",[n("th",[t._v("automatic")]),t._v(" "),n("th",[t._v("fixed")]),t._v(" "),n("th",[t._v("inherit")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("默认。列宽度由单元格内容设定。")]),t._v(" "),n("td",[t._v("列宽由表格宽度和列宽度设定。")]),t._v(" "),n("td",[t._v("规定应该从父元素继承 table-layout 属性的值。")])])])]),t._v(" "),n("h4",[t._v("定义和用法")]),t._v(" "),n("p",[t._v("tableLayout 属性用来显示表格单元格、行、列的算法规则。")]),t._v(" "),n("h4",[t._v("固定表格布局")]),t._v(" "),n("p",[t._v("固定表格布局与自动表格布局相比，允许浏览器更快地对表格进行布局。"),n("br"),t._v("\n在固定表格布局中，水平布局仅取决于表格宽度、列宽度、表格边框宽度、单元格间距，而与单元格的内容无关。"),n("br"),t._v("\n通过使用固定表格布局，用户代理在接收到第一行后就可以显示表格。")]),t._v(" "),n("h4",[t._v("自动表格布局")]),t._v(" "),n("p",[t._v("在自动表格布局中，列的宽度是由列单元格中没有折行的最宽的内容设定的。"),n("br"),t._v("\n此算法有时会较慢，这是由于它需要在确定最终的布局之前访问表格中所有的内容。")]),t._v(" "),n("h4",[t._v("table-layout: fixed")]),t._v(" "),n("p",[t._v("table-layout与width必须同时设置生效。表格以及列设置的 width 属性在 table-layout 为 automatic 时都是表现为 min-width，当 table-layout 的值为 fixed 时则表现为固定的 width 值。"),n("br"),t._v("\n    table 标签加了 table-layout：fixed 属性后，浏览器直接渲染表结构（相当于显示没有内容的表），太长的内容会覆盖到其他表格。\n    ")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container typo"},[n("h1",{staticClass:"logo"},[t._v("百度统计使用文档")]),t._v(" "),n("p",[t._v("这座城市的风很大，孤独的人总是很晚才回家。")]),t._v(" "),n("h4",[t._v("1.基本信息")]),t._v(" "),n("a",{attrs:{href:"https://tongji.baidu.com/web/help/article?id=270&type=0"}},[t._v("https://tongji.baidu.com/web/help/article?id=270&type=0")]),t._v(" "),n("h4",[t._v("2.专业术语")]),t._v(" "),n("a",{attrs:{href:"https://tongji.baidu.com/web/help/article?id=253&type=0"}},[t._v("https://tongji.baidu.com/web/help/article?id=253&type=0")]),t._v(" "),n("h4",[t._v("3.事件分析")]),t._v(" "),n("a",{attrs:{href:"https://www.zhihu.com/question/27247599"}},[t._v("知乎：https://www.zhihu.com/question/27247599")]),n("br"),t._v(" "),n("a",{attrs:{href:"https://blog.csdn.net/hushilin001/article/details/79019947"}},[t._v("CSDN：https://blog.csdn.net/hushilin001/article/details/79019947")]),t._v(" "),n("h4",[t._v("4.单页面应用")]),t._v(" "),n("a",{attrs:{href:"https://segmentfault.com/a/1190000010534454"}},[t._v("https://segmentfault.com/a/1190000010534454")]),t._v(" "),n("a",{attrs:{href:"https://blog.csdn.net/qq_38355456/article/details/77653747"}},[t._v("https://blog.csdn.net/qq_38355456/article/details/77653747")]),t._v(" "),n("a",{attrs:{href:"https://www.cnblogs.com/hity-tt/p/7699756.html"}},[t._v("https://www.cnblogs.com/hity-tt/p/7699756.html")]),t._v(" "),n("h4",[t._v("5.实现代码")]),t._v("\n    初始化\n    "),n("pre",[t._v("var userId = {\n  'yc.yonyou.com': '93d0df053221b2f8f13d860127db2334',\n  'ycdemo.yonyoucloud.com': '9ff1af654db3d54831e2bebffade59ca',\n  'yc.yonyoucloud.com': 'a2bd93dc64342c99418f50b2df91d7a9'\n};\nif (userId[window.location.host]) {\n  var _hmt = _hmt || [];\n  (function() {\n    var hm = document.createElement(\"script\");\n    hm.src = \"https://hm.baidu.com/hm.js?\" + userId[window.location.host];\n    var s = document.getElementsByTagName(\"script\")[0]; \n    s.parentNode.insertBefore(hm, s);\n  })();\n}\n    ")]),t._v("\n    事件分析\n    "),n("pre",[t._v("var $ = window.jQuery || window.$\nvar pattern = /^(http|\\/)/i;\nvar text;\n// 获取点击文字\nfunction getInnerText(el) {\n  if ($(el.parentNode).css('cursor') === 'pointer') {\n    getInnerText(el.parentNode)\n  } else {\n    text = el.innerText;\n    return text;\n  }\n};\n// 写入百度统计事件API\nfunction track(name, variable, clickEvent) {\n  var _location = window.location.href.replace(new RegExp('^.+' + window.location.host), '');\n  if (_location.indexOf('?') > -1) {\n    _location = _location.split('?')[0];\n  }\n  _hmt.push(['_trackEvent', _location, clickEvent, name, variable['ToUrl'] || '']);\n};\n// 监听页面点击，区分btn和a点击事件\n$(document).on('click', function(e) {\n  if ($(e.target).attr('href')) {\n    var url = $(e.target).attr('href');\n    if (url === undefined) {\n      var parentNode = $(e.target).parent();\n      url = parentNode.attr('href');\n    }\n    var rightURL = pattern.test(url);\n  } else if ($(e.target).css('cursor') === 'pointer') {\n    getInnerText(e.target);\n    var innerText = text;\n  }\n\n  if (rightURL) {\n    var innerText = e.target.innerText;\n    var a = document.createElement('a');\n    a.href = url;\n    var data = {};\n    data['UserID'] = '';\n    data['DataTime'] = new Date().format(\"yyyy-MM-dd hh:mm:ss\").toLocaleString();\n    data['UserName'] = '';\n    data['UserEmail'] = '';\n    data['UserPhone'] = '';\n    data['ToHost'] = a.host;\n    data['ToUrl'] = a.href;\n    var e = e || window.event;\n    var x, y;\n    x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;\n    y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;\n\n    data['clickX'] = x;\n    data['clickY'] = y;\n    track(\n      innerText,\n      data,\n      'href'\n    );\n  } else if (innerText !== undefined) {\n    var data = {};\n    data['DataTime'] = new Date().format(\"yyyy-MM-dd hh:mm:ss\").toLocaleString();\n    var e = e || window.event;\n    var x, y;\n    x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;\n    y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;\n\n    data['clickX'] = x;\n    data['clickY'] = y;\n\n    if (window.location.href.indexOf('localhost') == -1) {\n      track(\n        innerText,\n        data,\n        'click'\n      );\n    }\n  }\n});\n    ")]),t._v("\n    单页面应用\n    "),n("pre",[t._v("// 单页面应用，在路由切换时写入，以cpu-portal-fe为例\n_hmt.push(['_trackPageview', '/cpu-portal-fe/portalcas.html#/' + path])\n    ")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nav serif"},[n("div",{staticClass:"search"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.key,expression:"key"}],staticClass:"search-input",attrs:{placeholder:"搜索..."},domProps:{value:t.key},on:{input:[function(e){e.target.composing||(t.key=e.target.value)},t.search]}}),t._v(" "),n("ul",{staticClass:"search-complete"},t._l(t.searchList,function(e){return n("li",{staticClass:"pointer",on:{click:function(n){t.turnArticle(e)}}},[t._v(t._s(e.name))])}))]),t._v(" "),t._m(0),t._v(" "),n("a",{staticClass:"nav-item",attrs:{href:"#/"}},[t._v("关于")]),t._v(" "),n("a",{staticClass:"nav-item",attrs:{href:"#/article/archive"}},[t._v("归档")])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"nav-item",attrs:{href:"#/",title:"文章归档"}},[n("strong",[t._v("Confetti7")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("\n  "+t._s(t.index)+". "),n("a",{attrs:{href:t.href}},[t._v(t._s(t.name))]),t._v(" "),n("small",[t._v(t._s(t.time))]),t._v(" "),n("p",{staticClass:"typo-small"},[t._v(t._s(t.memo))])])},staticRenderFns:[]}},,,,,,function(t,e){}],[21]);
//# sourceMappingURL=app.5b223cec591256a58de4.js.map