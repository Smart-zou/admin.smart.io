import{d as L,au as De,C as U,am as de,h as E,r as a,o as r,g as S,w as n,b as e,e as D,a as t,n as z,u as k,W as j,p as I,aS as Ee,c as F,A as X,B as Y,D as ze,t as M,M as me,O as _e,al as ee,s as A,R as we,S as J,F as O,f as Z,y as H,V as Re,a2 as ne,aG as le,aT as Pe,aU as Be,aD as Ue,aV as ge,aW as Ge,aX as Ie,aY as Ne,x as qe,N as ye,a3 as Ce,ay as Oe,aZ as Ke,a4 as He,z as pe,P as We}from"./index-DP8fMwmy.js";import{a as je,_ as ae}from"./index.vue_vue_type_script_setup_true_name_SwitchDark_lang-DZ3fg5Vc.js";import{_ as R}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{u as Se,a as xe}from"./tabs-g9UDjEPN.js";import{S as Qe,_ as be}from"./sortable.esm-CGHLlJBv.js";import{u as $e}from"./index-DvZIvf5p.js";function Ye(v){return{all:v=v||new Map,on:function(l,o){var i=v.get(l);i?i.push(o):v.set(l,[o])},off:function(l,o){var i=v.get(l);i&&(o?i.splice(i.indexOf(o)>>>0,1):v.set(l,[]))},emit:function(l,o){var i=v.get(l);i&&i.slice().map(function(d){d(o)}),(i=v.get("*"))&&i.slice().map(function(d){d(l,o)})}}}const Ve=Ye(),Ze={class:"layout-box"},Je={class:"theme-item"},Xe={class:"theme-item mb50"},et={class:"theme-item"},tt={class:"theme-item"},nt={class:"theme-item"},lt={class:"theme-item mb40"},ot={class:"theme-item"},st={class:"theme-item"},at={class:"theme-item"},it={class:"theme-item"},ut={class:"theme-item"},rt={class:"theme-item"},ct={class:"theme-item"},dt={class:"theme-item"},mt=L({__name:"index",setup(v){const{changePrimary:l,changeGreyOrWeak:o,setAsideTheme:i,setHeaderTheme:d}=De(),u=U(),{layout:m,primary:p,isGrey:c,isWeak:g,asideInverted:f,headerInverted:C,isCollapse:x,accordion:_,watermark:w,breadcrumb:b,breadcrumbIcon:V,tabs:h,tabsIcon:y,footer:P}=de(u),G=[Ee,"#daa96e","#0c819f","#409eff","#27ae60","#ff5c93","#e74c3c","#fd726d","#f39c12","#9b59b6"],T=B=>{u.setGlobalState("layout",B),i()},K=E(!1);return Ve.on("openThemeDrawer",()=>K.value=!0),(B,s)=>{const Le=a("Notification"),W=a("el-icon"),ce=a("el-divider"),se=a("CircleCheckFilled"),te=a("el-tooltip"),ve=a("QuestionFilled"),q=a("el-switch"),Me=a("ColdDrink"),Fe=a("el-color-picker"),Ae=a("Setting"),Te=a("el-drawer");return r(),S(Te,{modelValue:K.value,"onUpdate:modelValue":s[19]||(s[19]=$=>K.value=$),title:"布局设置",size:"290px"},{default:n(()=>[e(ce,{class:"divider","content-position":"center"},{default:n(()=>[e(W,null,{default:n(()=>[e(Le)]),_:1}),s[20]||(s[20]=D(" 布局样式 "))]),_:1}),t("div",Ze,[e(te,{effect:"dark",content:"纵向",placement:"top","show-after":200},{default:n(()=>[t("div",{class:z(["layout-item layout-vertical",{"is-active":k(m)=="vertical"}]),onClick:s[0]||(s[0]=$=>T("vertical"))},[s[21]||(s[21]=t("div",{class:"layout-dark"},null,-1)),s[22]||(s[22]=t("div",{class:"layout-container"},[t("div",{class:"layout-light"}),t("div",{class:"layout-content"})],-1)),k(m)=="vertical"?(r(),S(W,{key:0},{default:n(()=>[e(se)]),_:1})):j("",!0)],2)]),_:1}),e(te,{effect:"dark",content:"经典",placement:"top","show-after":200},{default:n(()=>[t("div",{class:z(["layout-item layout-classic",{"is-active":k(m)=="classic"}]),onClick:s[1]||(s[1]=$=>T("classic"))},[s[23]||(s[23]=t("div",{class:"layout-dark"},null,-1)),s[24]||(s[24]=t("div",{class:"layout-container"},[t("div",{class:"layout-light"}),t("div",{class:"layout-content"})],-1)),k(m)=="classic"?(r(),S(W,{key:0},{default:n(()=>[e(se)]),_:1})):j("",!0)],2)]),_:1}),e(te,{effect:"dark",content:"横向",placement:"top","show-after":200},{default:n(()=>[t("div",{class:z(["layout-item layout-transverse",{"is-active":k(m)=="transverse"}]),onClick:s[2]||(s[2]=$=>T("transverse"))},[s[25]||(s[25]=t("div",{class:"layout-dark"},null,-1)),s[26]||(s[26]=t("div",{class:"layout-content"},null,-1)),k(m)=="transverse"?(r(),S(W,{key:0},{default:n(()=>[e(se)]),_:1})):j("",!0)],2)]),_:1}),e(te,{effect:"dark",content:"分栏",placement:"top","show-after":200},{default:n(()=>[t("div",{class:z(["layout-item layout-columns",{"is-active":k(m)=="columns"}]),onClick:s[3]||(s[3]=$=>T("columns"))},[s[27]||(s[27]=t("div",{class:"layout-dark"},null,-1)),s[28]||(s[28]=t("div",{class:"layout-light"},null,-1)),s[29]||(s[29]=t("div",{class:"layout-content"},null,-1)),k(m)=="columns"?(r(),S(W,{key:0},{default:n(()=>[e(se)]),_:1})):j("",!0)],2)]),_:1})]),t("div",Je,[t("span",null,[s[30]||(s[30]=D(" 侧边栏反转色 ")),e(te,{effect:"dark",content:"侧边栏颜色变为深色模式",placement:"top"},{default:n(()=>[e(W,null,{default:n(()=>[e(ve)]),_:1})]),_:1})]),e(q,{modelValue:k(f),"onUpdate:modelValue":s[4]||(s[4]=$=>I(f)?f.value=$:null),onChange:k(i)},null,8,["modelValue","onChange"])]),t("div",Xe,[t("span",null,[s[31]||(s[31]=D(" 头部反转色 ")),e(te,{effect:"dark",content:"头部颜色变为深色模式",placement:"top"},{default:n(()=>[e(W,null,{default:n(()=>[e(ve)]),_:1})]),_:1})]),e(q,{modelValue:k(C),"onUpdate:modelValue":s[5]||(s[5]=$=>I(C)?C.value=$:null),onChange:k(d)},null,8,["modelValue","onChange"])]),e(ce,{class:"divider","content-position":"center"},{default:n(()=>[e(W,null,{default:n(()=>[e(Me)]),_:1}),s[32]||(s[32]=D(" 全局主题 "))]),_:1}),t("div",et,[s[33]||(s[33]=t("span",null,"主题颜色",-1)),e(Fe,{modelValue:k(p),"onUpdate:modelValue":s[6]||(s[6]=$=>I(p)?p.value=$:null),predefine:G,onChange:k(l)},null,8,["modelValue","onChange"])]),t("div",tt,[s[34]||(s[34]=t("span",null,"暗黑模式",-1)),e(je)]),t("div",nt,[s[35]||(s[35]=t("span",null,"灰色模式",-1)),e(q,{modelValue:k(c),"onUpdate:modelValue":s[7]||(s[7]=$=>I(c)?c.value=$:null),onChange:s[8]||(s[8]=$=>k(o)("grey",!!$))},null,8,["modelValue"])]),t("div",lt,[s[36]||(s[36]=t("span",null,"色弱模式",-1)),e(q,{modelValue:k(g),"onUpdate:modelValue":s[9]||(s[9]=$=>I(g)?g.value=$:null),onChange:s[10]||(s[10]=$=>k(o)("weak",!!$))},null,8,["modelValue"])]),e(ce,{class:"divider","content-position":"center"},{default:n(()=>[e(W,null,{default:n(()=>[e(Ae)]),_:1}),s[37]||(s[37]=D(" 界面设置 "))]),_:1}),t("div",ot,[s[38]||(s[38]=t("span",null,"菜单折叠",-1)),e(q,{modelValue:k(x),"onUpdate:modelValue":s[11]||(s[11]=$=>I(x)?x.value=$:null)},null,8,["modelValue"])]),t("div",st,[s[39]||(s[39]=t("span",null,"菜单手风琴",-1)),e(q,{modelValue:k(_),"onUpdate:modelValue":s[12]||(s[12]=$=>I(_)?_.value=$:null)},null,8,["modelValue"])]),t("div",at,[s[40]||(s[40]=t("span",null,"水印",-1)),e(q,{modelValue:k(w),"onUpdate:modelValue":s[13]||(s[13]=$=>I(w)?w.value=$:null)},null,8,["modelValue"])]),t("div",it,[s[41]||(s[41]=t("span",null,"面包屑",-1)),e(q,{modelValue:k(b),"onUpdate:modelValue":s[14]||(s[14]=$=>I(b)?b.value=$:null)},null,8,["modelValue"])]),t("div",ut,[s[42]||(s[42]=t("span",null,"面包屑图标",-1)),e(q,{modelValue:k(V),"onUpdate:modelValue":s[15]||(s[15]=$=>I(V)?V.value=$:null)},null,8,["modelValue"])]),t("div",rt,[s[43]||(s[43]=t("span",null,"标签栏",-1)),e(q,{modelValue:k(h),"onUpdate:modelValue":s[16]||(s[16]=$=>I(h)?h.value=$:null)},null,8,["modelValue"])]),t("div",ct,[s[44]||(s[44]=t("span",null,"标签栏图标",-1)),e(q,{modelValue:k(y),"onUpdate:modelValue":s[17]||(s[17]=$=>I(y)?y.value=$:null)},null,8,["modelValue"])]),t("div",dt,[s[45]||(s[45]=t("span",null,"页脚",-1)),e(q,{modelValue:k(P),"onUpdate:modelValue":s[18]||(s[18]=$=>I(P)?P.value=$:null)},null,8,["modelValue"])])]),_:1},8,["modelValue"])}}}),_t=R(mt,[["__scopeId","data-v-bef86bd8"]]),pt=L({__name:"Maximize",setup(v){const l=U(),o=()=>{l.setGlobalState("maximize",!1)};return(i,d)=>(r(),F("div",{class:"maximize",onClick:o},d[0]||(d[0]=[t("i",{class:z("iconfont icon-tuichu")},null,-1)])))}}),ft=R(pt,[["__scopeId","data-v-a8cb88c8"]]),vt=L({__name:"MoreButton",setup(v){const l=X(),o=Y(),i=Se(),d=U(),u=xe(),m=ze("refresh"),p=()=>{setTimeout(()=>{l.meta.isKeepAlive&&u.removeKeepAliveName(l.fullPath),m(!1),me(()=>{l.meta.isKeepAlive&&u.addKeepAliveName(l.fullPath),m(!0)})},0)},c=()=>{d.setGlobalState("maximize",!0)},g=()=>{l.meta.isAffix||i.removeTabs(l.fullPath)},f=()=>{i.closeMultipleTab(),o.push(_e)};return(C,x)=>{const _=a("Refresh"),w=a("el-icon"),b=a("el-dropdown-item"),V=a("FullScreen"),h=a("Remove"),y=a("DArrowLeft"),P=a("DArrowRight"),G=a("CircleClose"),T=a("FolderDelete"),K=a("el-dropdown-menu"),B=a("el-dropdown");return r(),S(B,{trigger:"click",teleported:!1},{dropdown:n(()=>[e(K,null,{default:n(()=>[e(b,{onClick:p},{default:n(()=>[e(w,null,{default:n(()=>[e(_)]),_:1}),D(M(C.$t("tabs.refresh")),1)]),_:1}),e(b,{onClick:c},{default:n(()=>[e(w,null,{default:n(()=>[e(V)]),_:1}),D(M(C.$t("tabs.maximize")),1)]),_:1}),e(b,{divided:"",onClick:g},{default:n(()=>[e(w,null,{default:n(()=>[e(h)]),_:1}),D(M(C.$t("tabs.closeCurrent")),1)]),_:1}),e(b,{onClick:x[0]||(x[0]=s=>k(i).closeTabsOnSide(k(l).fullPath,"left"))},{default:n(()=>[e(w,null,{default:n(()=>[e(y)]),_:1}),D(M(C.$t("tabs.closeLeft")),1)]),_:1}),e(b,{onClick:x[1]||(x[1]=s=>k(i).closeTabsOnSide(k(l).fullPath,"right"))},{default:n(()=>[e(w,null,{default:n(()=>[e(P)]),_:1}),D(M(C.$t("tabs.closeRight")),1)]),_:1}),e(b,{divided:"",onClick:x[2]||(x[2]=s=>k(i).closeMultipleTab(k(l).fullPath))},{default:n(()=>[e(w,null,{default:n(()=>[e(G)]),_:1}),D(M(C.$t("tabs.closeOther")),1)]),_:1}),e(b,{onClick:f},{default:n(()=>[e(w,null,{default:n(()=>[e(T)]),_:1}),D(M(C.$t("tabs.closeAll")),1)]),_:1})]),_:1})]),default:n(()=>[x[3]||(x[3]=t("div",{class:"more-button"},[t("i",{class:z("iconfont icon-xiala")})],-1))]),_:1})}}}),gt=R(vt,[["__scopeId","data-v-5dcaab8c"]]),bt={class:"tabs-box"},ht={class:"tabs-menu"},kt=L({__name:"index",setup(v){const l=X(),o=Y(),i=Se(),d=ee(),u=U(),m=E(l.fullPath),p=A(()=>i.tabsMenuList),c=A(()=>u.tabsIcon);we(()=>{f(),g()}),J(()=>l.fullPath,()=>{if(l.meta.isFull)return;m.value=l.fullPath;const _={icon:l.meta.icon,title:l.meta.title,path:l.fullPath,name:l.name,close:!l.meta.isAffix,isKeepAlive:l.meta.isKeepAlive};i.addTabs(_)},{immediate:!0});const g=()=>{d.flatMenuListGet.forEach(_=>{if(_.meta.isAffix&&!_.meta.isHide&&!_.meta.isFull){const w={icon:_.meta.icon,title:_.meta.title,path:_.path,name:_.name,close:!_.meta.isAffix,isKeepAlive:_.meta.isKeepAlive};i.addTabs(w)}})},f=()=>{Qe.create(document.querySelector(".el-tabs__nav"),{draggable:".el-tabs__item",animation:300,onEnd({newIndex:_,oldIndex:w}){const b=[...i.tabsMenuList],V=b.splice(w,1)[0];b.splice(_,0,V),i.setTabs(b)}})},C=_=>{const w=_.props.name;o.push(w)},x=_=>{i.removeTabs(_,_==l.fullPath)};return(_,w)=>{const b=a("el-icon"),V=a("el-tab-pane"),h=a("el-tabs");return r(),F("div",bt,[t("div",ht,[e(h,{modelValue:m.value,"onUpdate:modelValue":w[0]||(w[0]=y=>m.value=y),type:"card",onTabClick:C,onTabRemove:x},{default:n(()=>[(r(!0),F(O,null,Z(p.value,y=>(r(),S(V,{key:y.path,label:y.title,name:y.path,closable:y.close},{label:n(()=>[y.icon&&c.value?(r(),S(b,{key:0,class:"tabs-icon"},{default:n(()=>[(r(),S(H(y.icon)))]),_:2},1024)):j("",!0),D(" "+M(y.title),1)]),_:2},1032,["label","name","closable"]))),128))]),_:1},8,["modelValue"]),e(gt)])])}}}),wt=R(kt,[["__scopeId","data-v-d234a044"]]),yt={},Ct={class:"footer flx-center"};function St(v,l){return r(),F("div",Ct,l[0]||(l[0]=[t("a",{href:"https://github.com/HalseySpicy",target:"_blank"}," 2024 © Smart-Admin By Smart Technology. ",-1)]))}const xt=R(yt,[["render",St],["__scopeId","data-v-16b37d6d"]]),$t=L({__name:"index",setup(v){const l=U(),{maximize:o,isCollapse:i,layout:d,tabs:u,footer:m}=de(l),p=xe(),{keepAliveName:c}=de(p),g=E(!0);Ue("refresh",b=>g.value=b);const C=new Map;function x(b,V){if(!b)return;const h=V.fullPath;let y=C.get(h);return y||(y={name:h,render:()=>ge(b)},C.set(h,y)),ge(y)}J(()=>o.value,()=>{const b=document.getElementById("app");o.value?b.classList.add("main-maximize"):b.classList.remove("main-maximize")},{immediate:!0}),J(()=>d.value,()=>{document.body.setAttribute("class",d.value)},{immediate:!0});const _=E(0),w=$e(()=>{_.value=document.body.clientWidth,!i.value&&_.value<1200&&l.setGlobalState("isCollapse",!0),i.value&&_.value>1200&&l.setGlobalState("isCollapse",!1)},100);return window.addEventListener("resize",w,!1),Re(()=>{window.removeEventListener("resize",w)}),(b,V)=>{const h=a("router-view"),y=a("el-main"),P=a("el-footer");return r(),F(O,null,[ne(e(ft,null,null,512),[[le,k(o)]]),ne(e(wt,null,null,512),[[le,k(u)]]),e(y,null,{default:n(()=>[e(h,null,{default:n(({Component:G,route:T})=>[e(Pe,{appear:"",name:"fade-transform",mode:"out-in"},{default:n(()=>[(r(),S(Be,{include:k(c)},[g.value?(r(),S(H(x(G,T)),{key:T.fullPath})):j("",!0)],1032,["include"]))]),_:2},1024)]),_:1})]),_:1}),ne(e(P,null,{default:n(()=>[e(xt)]),_:1},512),[[le,k(m)]])],64)}}}),ie=R($t,[["__scopeId","data-v-2f9f6226"]]),Vt=L({__name:"CollapseIcon",setup(v){const l=U(),o=()=>l.setGlobalState("isCollapse",!l.isCollapse);return(i,d)=>{const u=a("el-icon");return r(),S(u,{class:"collapse-icon",onClick:o},{default:n(()=>[(r(),S(H(k(l).isCollapse?"expand":"fold")))]),_:1})}}}),Lt=R(Vt,[["__scopeId","data-v-6ee6d1b9"]]),Mt=["onClick"],Ft={class:"breadcrumb-title"},At=L({__name:"Breadcrumb",setup(v){const l=X(),o=Y(),i=ee(),d=U(),u=A(()=>{let p=i.breadcrumbListGet[l.matched[l.matched.length-1].path]??[];return p[0].path!==_e&&(p=[{path:_e,meta:{icon:"HomeFilled",title:"首页"}},...p]),p}),m=(p,c)=>{c!==u.value.length-1&&o.push(p.path)};return(p,c)=>{const g=a("el-icon"),f=a("el-breadcrumb-item"),C=a("el-breadcrumb");return r(),F("div",{class:z(["breadcrumb-box mask-image",!k(d).breadcrumbIcon&&"no-icon"])},[e(C,{"separator-icon":k(Ie)},{default:n(()=>[e(Ge,{name:"breadcrumb"},{default:n(()=>[(r(!0),F(O,null,Z(u.value,(x,_)=>(r(),S(f,{key:x.path},{default:n(()=>[t("div",{class:z(["el-breadcrumb__inner is-link",{"item-no-icon":!x.meta.icon}]),onClick:w=>m(x,_)},[x.meta.icon&&k(d).breadcrumbIcon?(r(),S(g,{key:0,class:"breadcrumb-icon"},{default:n(()=>[(r(),S(H(x.meta.icon)))]),_:2},1024)):j("",!0),t("span",Ft,M(x.meta.title),1)],10,Mt)]),_:2},1024))),128))]),_:1})]),_:1},8,["separator-icon"])],2)}}}),Tt=R(At,[["__scopeId","data-v-88804b78"]]),Dt={class:"tool-bar-lf"},Et=L({__name:"ToolBarLeft",setup(v){const l=U();return(o,i)=>(r(),F("div",Dt,[e(Lt,{id:"collapseIcon"}),ne(e(Tt,{id:"breadcrumb"},null,512),[[le,k(l).breadcrumb]])]))}}),fe=R(Et,[["__scopeId","data-v-b541c38e"]]),zt=L({__name:"AssemblySize",setup(v){const l=U(),o=A(()=>l.assemblySize),i=[{label:"默认",value:"default"},{label:"大型",value:"large"},{label:"小型",value:"small"}],d=u=>{o.value!==u&&l.setGlobalState("assemblySize",u)};return(u,m)=>{const p=a("el-dropdown-item"),c=a("el-dropdown-menu"),g=a("el-dropdown");return r(),S(g,{trigger:"click",onCommand:d},{dropdown:n(()=>[e(c,null,{default:n(()=>[(r(),F(O,null,Z(i,f=>e(p,{key:f.value,command:f.value,disabled:o.value===f.value},{default:n(()=>[D(M(f.label),1)]),_:2},1032,["command","disabled"])),64))]),_:1})]),default:n(()=>[t("i",{class:z(["iconfont icon-contentright","toolBar-icon"])})]),_:1})}}}),Rt=L({__name:"Language",setup(v){const l=Ne.useI18n(),o=U(),i=A(()=>o.language),d=[{label:"简体中文",value:"zh"},{label:"English",value:"en"}],u=m=>{l.locale.value=m,o.setGlobalState("language",m)};return(m,p)=>{const c=a("el-dropdown-item"),g=a("el-dropdown-menu"),f=a("el-dropdown");return r(),S(f,{trigger:"click",onCommand:u},{dropdown:n(()=>[e(g,null,{default:n(()=>[(r(),F(O,null,Z(d,C=>e(c,{key:C.value,command:C.value,disabled:i.value===C.value},{default:n(()=>[D(M(C.label),1)]),_:2},1032,["command","disabled"])),64))]),_:1})]),default:n(()=>[t("i",{class:z(["iconfont icon-zhongyingwen","toolBar-icon"])})]),_:1})}}}),Pt={class:"search-menu"},Bt=["onMouseenter"],Ut={class:"menu-lf"},Gt={class:"menu-title"},It=L({__name:"SearchMenu",setup(v){const l=Y(),o=ee(),i=A(()=>o.flatMenuListGet.filter(h=>!h.meta.isHide)),d=E(""),u=h=>{d.value=h.path},m=E(null),p=E(!1),c=E("");J(p,h=>{h?document.addEventListener("keydown",b):document.removeEventListener("keydown",b)});const g=()=>{p.value=!0,me(()=>{setTimeout(()=>{var h;(h=m.value)==null||h.focus()})})},f=E([]),x=$e(()=>{f.value=c.value?i.value.filter(h=>{var y;return(h.path.toLowerCase().includes(c.value.toLowerCase())||h.meta.title.toLowerCase().includes(c.value.toLowerCase()))&&!((y=h.meta)!=null&&y.isHide)}):[],d.value=f.value.length?f.value[0].path:""},300);J(c,x);const _=E(null),w=h=>{const y=f.value.length;if(y===0)return;const G=(f.value.findIndex(T=>T.path===d.value)+h+y)%y;d.value=f.value[G].path,me(()=>{var K;if(!((K=_.value)!=null&&K.firstElementChild))return;const T=_.value.firstElementChild.clientHeight+12||0;_.value.scrollTop=G*T})},b=h=>{h.key==="ArrowUp"?(h.preventDefault(),w(-1)):h.key==="ArrowDown"?(h.preventDefault(),w(1)):h.key==="Enter"&&(h.preventDefault(),V())},V=()=>{var y;const h=f.value.find(P=>P.path===d.value);h&&((y=h.meta)!=null&&y.isLink?window.open(h.meta.isLink,"_blank"):l.push(h.path),c.value="",p.value=!1)};return(h,y)=>{const P=a("el-input"),G=a("el-icon"),T=a("el-empty"),K=a("el-dialog");return r(),F("div",Pt,[t("i",{class:z(["iconfont icon-sousuo","toolBar-icon"]),onClick:g}),e(K,{class:"search-dialog",modelValue:p.value,"onUpdate:modelValue":y[2]||(y[2]=B=>p.value=B),width:600,"show-close":!1,top:"10vh"},{default:n(()=>[e(P,{modelValue:c.value,"onUpdate:modelValue":y[0]||(y[0]=B=>c.value=B),ref_key:"menuInputRef",ref:m,placeholder:"菜单搜索：支持菜单名称、路径",size:"large",clearable:"","prefix-icon":k(qe)},null,8,["modelValue","prefix-icon"]),f.value.length?(r(),F("div",{key:0,class:"menu-list",ref_key:"menuListRef",ref:_},[(r(!0),F(O,null,Z(f.value,B=>(r(),F("div",{key:B.path,class:z(["menu-item",{"menu-active":B.path===d.value}]),onMouseenter:s=>u(B),onClick:y[1]||(y[1]=s=>V())},[t("div",Ut,[e(G,{class:"menu-icon"},{default:n(()=>[(r(),S(H(B.meta.icon)))]),_:2},1024),t("span",Gt,M(B.meta.title),1)]),t("i",{class:z(["iconfont icon-huiche","menu-enter"]),onClick:g})],42,Bt))),128))],512)):(r(),S(T,{key:1,class:"mt20 mb20","image-size":100,description:"暂无菜单"}))]),_:1},8,["modelValue"])])}}}),Nt=R(It,[["__scopeId","data-v-c3424415"]]),qt={class:"theme-setting"},Ot=L({__name:"ThemeSetting",setup(v){const l=()=>{Ve.emit("openThemeDrawer")};return(o,i)=>(r(),F("div",qt,[t("i",{class:z(["iconfont icon-zhuti","toolBar-icon"]),onClick:l})]))}}),Kt="/assets/png/msg01-CVG7czTN.png",Ht="/assets/png/msg02-CtICKvOe.png",Wt="/assets/png/msg03-1Ny4U3yZ.png",jt="/assets/png/msg04-Bz076faf.png",Qt="/assets/png/msg05-BJG0QSg1.png",Yt={class:"message"},Zt=L({__name:"Message",setup(v){const l=E("first");return(o,i)=>{const d=a("el-badge"),u=a("el-tab-pane"),m=a("el-tabs"),p=a("el-popover");return r(),F("div",Yt,[e(p,{placement:"bottom",width:310,trigger:"click"},{reference:n(()=>[e(d,{value:5,class:"item"},{default:n(()=>[t("i",{class:z(["iconfont icon-xiaoxi","toolBar-icon"])})]),_:1})]),default:n(()=>[e(m,{modelValue:l.value,"onUpdate:modelValue":i[0]||(i[0]=c=>l.value=c)},{default:n(()=>[e(u,{label:"通知(5)",name:"first"},{default:n(()=>i[1]||(i[1]=[t("div",{class:"message-list"},[t("div",{class:"message-item"},[t("img",{src:Kt,alt:"",class:"message-icon"}),t("div",{class:"message-content"},[t("span",{class:"message-title"},"一键三连 Smart-Admin 🧡"),t("span",{class:"message-date"},"一分钟前")])]),t("div",{class:"message-item"},[t("img",{src:Ht,alt:"",class:"message-icon"}),t("div",{class:"message-content"},[t("span",{class:"message-title"},"一键三连 Smart-Admin 💙"),t("span",{class:"message-date"},"一小时前")])]),t("div",{class:"message-item"},[t("img",{src:Wt,alt:"",class:"message-icon"}),t("div",{class:"message-content"},[t("span",{class:"message-title"},"一键三连 Smart-Admin 💚"),t("span",{class:"message-date"},"半天前")])]),t("div",{class:"message-item"},[t("img",{src:jt,alt:"",class:"message-icon"}),t("div",{class:"message-content"},[t("span",{class:"message-title"},"一键三连 Smart-Admin 💜"),t("span",{class:"message-date"},"一星期前")])]),t("div",{class:"message-item"},[t("img",{src:Qt,alt:"",class:"message-icon"}),t("div",{class:"message-content"},[t("span",{class:"message-title"},"一键三连 Smart-Admin 💛"),t("span",{class:"message-date"},"一个月前")])])],-1)])),_:1}),e(u,{label:"消息(0)",name:"second"},{default:n(()=>i[2]||(i[2]=[t("div",{class:"message-empty"},[t("img",{src:be,alt:"notData"}),t("div",null,"暂无消息")],-1)])),_:1}),e(u,{label:"待办(0)",name:"third"},{default:n(()=>i[3]||(i[3]=[t("div",{class:"message-empty"},[t("img",{src:be,alt:"notData"}),t("div",null,"暂无待办")],-1)])),_:1})]),_:1},8,["modelValue"])]),_:1})])}}}),Jt=R(Zt,[["__scopeId","data-v-3f92fbdc"]]),he=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],Q=(()=>{if(typeof document>"u")return!1;const v=he[0],l={};for(const o of he)if((o==null?void 0:o[1])in document){for(const[d,u]of o.entries())l[v[d]]=u;return l}return!1})(),ke={change:Q.fullscreenchange,error:Q.fullscreenerror};let N={request(v=document.documentElement,l){return new Promise((o,i)=>{const d=()=>{N.off("change",d),o()};N.on("change",d);const u=v[Q.requestFullscreen](l);u instanceof Promise&&u.then(d).catch(i)})},exit(){return new Promise((v,l)=>{if(!N.isFullscreen){v();return}const o=()=>{N.off("change",o),v()};N.on("change",o);const i=document[Q.exitFullscreen]();i instanceof Promise&&i.then(o).catch(l)})},toggle(v,l){return N.isFullscreen?N.exit():N.request(v,l)},onchange(v){N.on("change",v)},onerror(v){N.on("error",v)},on(v,l){const o=ke[v];o&&document.addEventListener(o,l,!1)},off(v,l){const o=ke[v];o&&document.removeEventListener(o,l,!1)},raw:Q};Object.defineProperties(N,{isFullscreen:{get:()=>!!document[Q.fullscreenElement]},element:{enumerable:!0,get:()=>document[Q.fullscreenElement]??void 0},isEnabled:{enumerable:!0,get:()=>!!document[Q.fullscreenEnabled]}});Q||(N={isEnabled:!1});const oe=N,Xt={class:"fullscreen"},en=L({__name:"Fullscreen",setup(v){const l=E(oe.isFullscreen);we(()=>{oe.on("change",()=>{oe.isFullscreen?l.value=!0:l.value=!1})});const o=()=>{oe.isEnabled||ye.warning("当前您的浏览器不支持全屏 ❌"),oe.toggle()};return(i,d)=>(r(),F("div",Xt,[t("i",{class:z([["iconfont",l.value?"icon-suoxiao":"icon-fangda"],"toolBar-icon"]),onClick:o},null,2)]))}}),tn="/assets/gif/avatar-Dcbh69co.gif",nn={class:"dialog-footer"},ln=L({__name:"InfoDialog",setup(v,{expose:l}){const o=E(!1);return l({openDialog:()=>{o.value=!0}}),(d,u)=>{const m=a("el-button"),p=a("el-dialog");return r(),S(p,{modelValue:o.value,"onUpdate:modelValue":u[2]||(u[2]=c=>o.value=c),title:"个人信息",width:"500px",draggable:""},{footer:n(()=>[t("span",nn,[e(m,{onClick:u[0]||(u[0]=c=>o.value=!1)},{default:n(()=>u[3]||(u[3]=[D("取消")])),_:1}),e(m,{type:"primary",onClick:u[1]||(u[1]=c=>o.value=!1)},{default:n(()=>u[4]||(u[4]=[D("确认")])),_:1})])]),default:n(()=>[u[5]||(u[5]=t("span",null,"This is userInfo",-1))]),_:1},8,["modelValue"])}}}),on={class:"dialog-footer"},sn=L({__name:"PasswordDialog",setup(v,{expose:l}){const o=E(!1);return l({openDialog:()=>{o.value=!0}}),(d,u)=>{const m=a("el-button"),p=a("el-dialog");return r(),S(p,{modelValue:o.value,"onUpdate:modelValue":u[2]||(u[2]=c=>o.value=c),title:"修改密码",width:"500px",draggable:""},{footer:n(()=>[t("span",on,[e(m,{onClick:u[0]||(u[0]=c=>o.value=!1)},{default:n(()=>u[3]||(u[3]=[D("取消")])),_:1}),e(m,{type:"primary",onClick:u[1]||(u[1]=c=>o.value=!1)},{default:n(()=>u[4]||(u[4]=[D("确认")])),_:1})])]),default:n(()=>[u[5]||(u[5]=t("span",null,"This is Password",-1))]),_:1},8,["modelValue"])}}}),an=L({__name:"Avatar",setup(v){const l=Y(),o=Ce(),i=()=>{Oe.confirm("您是否确认退出登录?","温馨提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(async()=>{await Ke(),o.setToken(""),l.replace(He),ye.success("退出登录成功！")})},d=E(null),u=E(null),m=p=>{var c,g;p=="infoRef"&&((c=d.value)==null||c.openDialog()),p=="passwordRef"&&((g=u.value)==null||g.openDialog())};return(p,c)=>{const g=a("User"),f=a("el-icon"),C=a("el-dropdown-item"),x=a("Edit"),_=a("SwitchButton"),w=a("el-dropdown-menu"),b=a("el-dropdown");return r(),F(O,null,[e(b,{trigger:"click"},{dropdown:n(()=>[e(w,null,{default:n(()=>[e(C,{onClick:c[0]||(c[0]=V=>m("infoRef"))},{default:n(()=>[e(f,null,{default:n(()=>[e(g)]),_:1}),D(M(p.$t("header.personalData")),1)]),_:1}),e(C,{onClick:c[1]||(c[1]=V=>m("passwordRef"))},{default:n(()=>[e(f,null,{default:n(()=>[e(x)]),_:1}),D(M(p.$t("header.changePassword")),1)]),_:1}),e(C,{divided:"",onClick:i},{default:n(()=>[e(f,null,{default:n(()=>[e(_)]),_:1}),D(M(p.$t("header.logout")),1)]),_:1})]),_:1})]),default:n(()=>[c[2]||(c[2]=t("div",{class:"avatar"},[t("img",{src:tn,alt:"avatar"})],-1))]),_:1}),e(ln,{ref_key:"infoRef",ref:d},null,512),e(sn,{ref_key:"passwordRef",ref:u},null,512)],64)}}}),un=R(an,[["__scopeId","data-v-02a538fa"]]),rn={class:"tool-bar-ri"},cn={class:"header-icon"},dn={class:"username"},mn=L({__name:"ToolBarRight",setup(v){const l=Ce(),o=A(()=>l.userInfo.name);return(i,d)=>(r(),F("div",rn,[t("div",cn,[e(zt,{id:"assemblySize"}),e(Rt,{id:"language"}),e(Nt,{id:"searchMenu"}),e(Ot,{id:"themeSetting"}),e(Jt,{id:"message"}),e(en,{id:"fullscreen"})]),t("span",dn,M(o.value),1),e(un)]))}}),ue=R(mn,[["__scopeId","data-v-6999db91"]]),_n={class:"sle"},pn={class:"sle"},re=L({__name:"SubMenu",props:{menuList:{}},setup(v){const l=Y(),o=i=>{if(i.meta.isLink)return window.open(i.meta.isLink,"_blank");l.push(i.path)};return(i,d)=>{const u=a("el-icon"),m=a("SubMenu",!0),p=a("el-sub-menu"),c=a("el-menu-item");return r(!0),F(O,null,Z(i.menuList,g=>{var f;return r(),F(O,{key:g.path},[(f=g.children)!=null&&f.length?(r(),S(p,{key:0,index:g.path},{title:n(()=>[g.meta.icon?(r(),S(u,{key:0},{default:n(()=>[(r(),S(H(g.meta.icon)))]),_:2},1024)):j("",!0),t("span",_n,M(g.meta.title),1)]),default:n(()=>[e(m,{"menu-list":g.children},null,8,["menu-list"])]),_:2},1032,["index"])):(r(),S(c,{key:1,index:g.path,onClick:C=>o(g)},{title:n(()=>[t("span",pn,M(g.meta.title),1)]),default:n(()=>[g.meta.icon?(r(),S(u,{key:0},{default:n(()=>[(r(),S(H(g.meta.icon)))]),_:2},1024)):j("",!0)]),_:2},1032,["index","onClick"]))],64)}),128)}}}),fn={class:"logo flx-center"},vn=L({name:"layoutVertical"}),gn=L({...vn,setup(v){const l="Smart Admin",o=X(),i=ee(),d=U(),u=A(()=>d.accordion),m=A(()=>d.isCollapse),p=A(()=>i.showMenuListGet),c=A(()=>o.meta.activeMenu?o.meta.activeMenu:o.path);return(g,f)=>{const C=a("el-menu"),x=a("el-scrollbar"),_=a("el-aside"),w=a("el-header"),b=a("el-container");return r(),S(b,{class:"layout"},{default:n(()=>[e(_,null,{default:n(()=>[t("div",{class:"aside-box",style:pe({width:m.value?"65px":"210px"})},[t("div",fn,[f[0]||(f[0]=t("img",{class:"logo-img",src:ae,alt:"logo"},null,-1)),ne(t("span",{class:"logo-text"},M(k(l)),513),[[le,!m.value]])]),e(x,null,{default:n(()=>[e(C,{router:!1,"default-active":c.value,collapse:m.value,"unique-opened":u.value,"collapse-transition":!1},{default:n(()=>[e(re,{"menu-list":p.value},null,8,["menu-list"])]),_:1},8,["default-active","collapse","unique-opened"])]),_:1})],4)]),_:1}),e(b,null,{default:n(()=>[e(w,null,{default:n(()=>[e(fe),e(ue)]),_:1}),e(ie)]),_:1})]),_:1})}}}),bn=R(gn,[["__scopeId","data-v-242916f1"]]),hn={class:"header-lf mask-image"},kn={class:"logo flx-center"},wn={class:"logo-text"},yn={class:"header-ri"},Cn=L({name:"layoutClassic"}),Sn=L({...Cn,setup(v){const l="Smart Admin",o=X(),i=ee(),d=U(),u=A(()=>d.accordion),m=A(()=>d.isCollapse),p=A(()=>i.showMenuListGet),c=A(()=>o.meta.activeMenu?o.meta.activeMenu:o.path);return(g,f)=>{const C=a("el-header"),x=a("el-menu"),_=a("el-scrollbar"),w=a("el-aside"),b=a("el-container");return r(),S(b,{class:"layout"},{default:n(()=>[e(C,null,{default:n(()=>[t("div",hn,[t("div",kn,[f[0]||(f[0]=t("img",{class:"logo-img",src:ae,alt:"logo"},null,-1)),t("span",wn,M(k(l)),1)]),e(fe)]),t("div",yn,[e(ue)])]),_:1}),e(b,{class:"classic-content"},{default:n(()=>[e(w,null,{default:n(()=>[t("div",{class:"aside-box",style:pe({width:m.value?"65px":"210px"})},[e(_,null,{default:n(()=>[e(x,{router:!1,"default-active":c.value,collapse:m.value,"unique-opened":u.value,"collapse-transition":!1},{default:n(()=>[e(re,{"menu-list":p.value},null,8,["menu-list"])]),_:1},8,["default-active","collapse","unique-opened"])]),_:1})],4)]),_:1}),e(b,{class:"classic-main"},{default:n(()=>[e(ie)]),_:1})]),_:1})]),_:1})}}}),xn=R(Sn,[["__scopeId","data-v-f75cf838"]]),$n={class:"logo flx-center"},Vn={class:"logo-text"},Ln=L({name:"layoutTransverse"}),Mn=L({...Ln,setup(v){const l="Smart Admin",o=X(),i=Y(),d=ee(),u=A(()=>d.showMenuListGet),m=A(()=>o.meta.activeMenu?o.meta.activeMenu:o.path),p=c=>{if(c.meta.isLink)return window.open(c.meta.isLink,"_blank");i.push(c.path)};return(c,g)=>{const f=a("el-icon"),C=a("el-sub-menu"),x=a("el-menu-item"),_=a("el-menu"),w=a("el-header"),b=a("el-container");return r(),S(b,{class:"layout"},{default:n(()=>[e(w,null,{default:n(()=>[t("div",$n,[g[0]||(g[0]=t("img",{class:"logo-img",src:ae,alt:"logo"},null,-1)),t("span",Vn,M(k(l)),1)]),e(_,{mode:"horizontal",router:!1,"default-active":m.value},{default:n(()=>[(r(!0),F(O,null,Z(u.value,V=>{var h;return r(),F(O,{key:V.path},[(h=V.children)!=null&&h.length?(r(),S(C,{key:V.path,index:V.path+"el-sub-menu"},{title:n(()=>[e(f,null,{default:n(()=>[(r(),S(H(V.meta.icon)))]),_:2},1024),t("span",null,M(V.meta.title),1)]),default:n(()=>[e(re,{"menu-list":V.children},null,8,["menu-list"])]),_:2},1032,["index"])):(r(),S(x,{key:V.path+"el-menu-item",index:V.path,onClick:y=>p(V)},{title:n(()=>[t("span",null,M(V.meta.title),1)]),default:n(()=>[e(f,null,{default:n(()=>[(r(),S(H(V.meta.icon)))]),_:2},1024)]),_:2},1032,["index","onClick"]))],64)}),128))]),_:1},8,["default-active"]),e(ue)]),_:1}),e(ie)]),_:1})}}}),Fn=R(Mn,[["__scopeId","data-v-9ffed251"]]),An={class:"aside-split"},Tn={class:"split-list"},Dn=["onClick"],En={class:"title"},zn={class:"logo flx-center"},Rn=L({name:"layoutColumns"}),Pn=L({...Rn,setup(v){const l="Smart Admin",o=X(),i=Y(),d=ee(),u=U(),m=A(()=>u.accordion),p=A(()=>u.isCollapse),c=A(()=>d.showMenuListGet),g=A(()=>o.meta.activeMenu?o.meta.activeMenu:o.path),f=E([]),C=E("");J(()=>[c,o],()=>{var w;if(!c.value.length)return;C.value=o.path;const _=c.value.filter(b=>o.path===b.path||`/${o.path.split("/")[1]}`===b.path);if((w=_[0].children)!=null&&w.length)return f.value=_[0].children;f.value=[]},{deep:!0,immediate:!0});const x=_=>{var w;if(C.value=_.path,(w=_.children)!=null&&w.length)return f.value=_.children;f.value=[],i.push(_.path)};return(_,w)=>{const b=a("el-icon"),V=a("el-scrollbar"),h=a("el-menu"),y=a("el-aside"),P=a("el-header"),G=a("el-container");return r(),S(G,{class:"layout"},{default:n(()=>[t("div",An,[w[0]||(w[0]=t("div",{class:"logo flx-center"},[t("img",{class:"logo-img",src:ae,alt:"logo"})],-1)),e(V,null,{default:n(()=>[t("div",Tn,[(r(!0),F(O,null,Z(c.value,T=>(r(),F("div",{key:T.path,class:z(["split-item",{"split-active":C.value===T.path||`/${C.value.split("/")[1]}`===T.path}]),onClick:K=>x(T)},[e(b,null,{default:n(()=>[(r(),S(H(T.meta.icon)))]),_:2},1024),t("span",En,M(T.meta.title),1)],10,Dn))),128))])]),_:1})]),e(y,{class:z({"not-aside":!f.value.length}),style:pe({width:p.value?"65px":"210px"})},{default:n(()=>[t("div",zn,[ne(t("span",{class:"logo-text"},M(p.value?"G":k(l)),513),[[le,f.value.length]])]),e(V,null,{default:n(()=>[e(h,{router:!1,"default-active":g.value,collapse:p.value,"unique-opened":m.value,"collapse-transition":!1},{default:n(()=>[e(re,{"menu-list":f.value},null,8,["menu-list"])]),_:1},8,["default-active","collapse","unique-opened"])]),_:1})]),_:1},8,["class","style"]),e(G,null,{default:n(()=>[e(P,null,{default:n(()=>[e(fe),e(ue)]),_:1}),e(ie)]),_:1})]),_:1})}}}),Bn=R(Pn,[["__scopeId","data-v-5ea81c56"]]),Un=L({name:"layout"}),Gn=L({...Un,setup(v){const l={vertical:bn,classic:xn,transverse:Fn,columns:Bn},o=U(),i=A(()=>o.isDark),d=A(()=>o.layout),u=A(()=>o.watermark),m=We({color:"rgba(0, 0, 0, .15)"});return J(i,()=>m.color=i.value?"rgba(255, 255, 255, .15)":"rgba(0, 0, 0, .15)",{immediate:!0}),(p,c)=>{const g=a("el-watermark");return r(),S(g,{id:"watermark",font:m,content:u.value?["Smart Admin","Happy Working"]:""},{default:n(()=>[(r(),S(H(l[d.value]))),e(_t)]),_:1},8,["font","content"])}}}),Wn=R(Gn,[["__scopeId","data-v-7df023cb"]]);export{Wn as default};
