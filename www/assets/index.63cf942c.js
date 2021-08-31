var e=Object.defineProperty,a=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,n=(a,l,t)=>l in a?e(a,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[l]=t;import{j as o,m as s,a as r,k as u,l as d,n as i,f as c,h as m,o as p}from"./index.b4c50d36.js";import{d as f,r as v,e as g,t as b,l as _,m as y,v as h,q as S,F as k,U as C,Q as T,O as j,a as w,f as I,j as O,n as x,a2 as F,a0 as U,A as z}from"./ant-design-vue.10f2c163.js";import{T as M,f as A}from"./validate.fea1858b.js";import{u as N}from"./useDrawer.8fe26ed9.js";const q={"../../icons/close.svg":Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:"/assets/close.450593be.svg"}),"../../icons/exitFullScreen.svg":Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:"/assets/exitFullScreen.1d9e4126.svg"}),"../../icons/fullScreen.svg":Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:"/assets/fullScreen.1a03daf4.svg"}),"../../icons/language.svg":Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:"/assets/language.2331f79f.svg"}),"../../icons/nav-home.svg":Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:"/assets/nav-home.a3e6b3f3.svg"}),"../../icons/nav-sys.svg":Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:"/assets/nav-sys.c9d2f242.svg"}),"../../icons/nav-system.svg":Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:"/assets/nav-system.e82f1343.svg"}),"../../icons/search.svg":Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:"/assets/search.c02878dc.svg"}),"../../icons/setting.svg":Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:"/assets/setting.3836908b.svg"}),"../../icons/tabs-left.svg":Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:"/assets/tabs-left.6cd9927a.svg"}),"../../icons/tabs-right.svg":Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:"/assets/tabs-right.88c47129.svg"})},R=Object.keys(q).map((e=>e.replace(/(.*\/)*([^.]+).*/,"$2")));var E=f({props:{value:{type:String,required:!0}},emits:["change"],setup(e,{emit:a}){const l=v(e.value);g((()=>{l.value=e.value}));return{icons:R,selected:l,handleChange:e=>{a("change",e)},reset:()=>{l.value=""}}}});const D={class:"flex items-center"},P=j("无"),V={class:"flex items-center"},L={class:"mr-2"};E.render=function(e,a,l,t,n,o){const s=b("svg-icon"),r=b("a-select-option"),u=b("a-select");return _(),y("div",D,[h(u,{value:e.selected,"onUpdate:value":a[1]||(a[1]=a=>e.selected=a),style:{width:"100%"},placeholder:"请选择图标","option-label-prop":"label",onChange:e.handleChange},{suffixIcon:S((()=>[h(s,{name:e.selected,size:"12"},null,8,["name"])])),default:S((()=>[h(r,{value:"",label:"无"},{default:S((()=>[P])),_:1}),(_(!0),y(k,null,C(e.icons,(e=>(_(),y(r,{value:e,label:e,key:e},{default:S((()=>[h("div",V,[h("span",L,T(e),1),h(s,{name:e},null,8,["name"])])])),_:2},1032,["value","label"])))),128))])),_:1},8,["value","onChange"])])};const K=[{title:"菜单名称",dataIndex:"title",key:"title"},{title:"图标",dataIndex:"icon",key:"icon",align:"center",slots:{customRender:"icon"}},{title:"排序",dataIndex:"orderNum",key:"orderNum",align:"center"},{title:"权限标识",dataIndex:"perms",key:"perms",align:"center"},{title:"组件名",dataIndex:"component",key:"component",align:"center"},{title:"状态",dataIndex:"status",key:"status",align:"center",slots:{customRender:"status"}},{title:"创建时间",dataIndex:"createdAt",key:"createdAt",align:"center"},{title:"操作",key:"action",align:"center",slots:{customRender:"action"}}];var Q=f({components:{IconSelect:E,Treeselect:M},setup(){const e=v(),a=v(Object.keys(o)),l={parentId:[{required:!0,validator:A.number,message:"上级菜单不能为空",trigger:"change"}],title:[{required:!0,message:"菜单名称不能为空",trigger:"blur"}],orderNum:[{required:!0,validator:A.number,message:"显示排序不能为空",trigger:"blur"}],path:[{required:!0,message:"路由地址不能为空",trigger:"blur"}],component:[{required:!0,message:"组件不能为空",trigger:"blur"}],perms:[{required:!0,message:"权限标识不能为空",trigger:"blur"}]},t=v(),n=v([{id:0,title:"主目录",children:[]}]),s=v([]),r=()=>{c().then((e=>{s.value=m(e.data.rows,"id","parentId").tree,n.value[0].children=m(e.data.rows,"id").tree}))},f=w({id:void 0,parentId:void 0,menuType:"M",icon:void 0,title:void 0,orderNum:"1",path:void 0,component:void 0,perms:void 0,visible:"1",status:"1",keepAlive:1,isFrame:"0"}),{open:g,drawerTitle:b}=N();return I((()=>{r()})),{menuList:s,confirm:e=>{i(e.id).then((()=>{r(),O.success("删除成功")}))},cancel:e=>{console.log(e),O.success("取消删除")},columns:K,handleAdd:a=>{c().then((l=>{l.data.rows.forEach((e=>{e.isDisabled=!1})),n.value[0].children=m(l.data.rows,"id").tree,g.value=!0,b.value="添加菜单",null!=a&&a.id&&x((()=>{f.parentId=a.id,e.value.forest.selectedNodeIds.push(a.id)}))}))},handleUpdate:a=>{c().then((l=>{l.data.rows.forEach((e=>{e.id===a.id?e.isDisabled=!0:e.isDisabled=!1})),n.value[0].children=m(l.data.rows,"id").tree,p(a.id).then((a=>{g.value=!0,b.value="修改菜单",x((()=>{Object.keys(f).forEach((e=>{f[e]=a.data[e]})),e.value.forest.selectedNodeIds.push(a.data.parentId)}))}))}))},open:g,drawerTitle:b,handleClose:()=>{f.id=void 0,t.value.resetFields(),g.value=!1},handleSubmit:()=>{t.value.validate().then((()=>{f.id?u(f).then((e=>{O.success(e.message),r(),f.id=void 0,t.value.resetFields(),g.value=!1})):d(f).then((e=>{O.success(e.message),r(),f.id=void 0,t.value.resetFields(),g.value=!1}))})).catch((e=>{console.log("error",e)}))},formState:f,dynamicComponents:a,labelCol:{span:6},wrapperCol:{span:18},normalizer:e=>({id:e.id,label:e.title,children:e.children}),treeOptions:n,rules:l,formRef:t,handleIconChange:e=>{f.icon=e},treeRef:e,handleTreeSelect:e=>{f.parentId=e.id}}},computed:((e,o)=>{for(var s in o||(o={}))l.call(o,s)&&n(e,s,o[s]);if(a)for(var s of a(o))t.call(o,s)&&n(e,s,o[s]);return e})({},s(r,["loading"]))});const $={class:"p-4"},B=j(" 新增 "),G={class:"flex justify-center"},H={class:"flex justify-center"},J=j(" 新增 "),W=j(" 修改 "),X=j(" 删除 "),Y=j(" 确认 "),Z=j("取消");Q.render=function(e,a,l,t,n,o){const s=b("a-button"),r=b("a-col"),u=b("a-row"),d=b("svg-icon"),i=b("a-popconfirm"),c=b("a-table"),m=b("treeselect"),p=b("a-form-item"),f=b("a-radio-group"),v=b("a-input"),g=b("IconSelect"),w=b("a-input-number"),I=b("a-select-option"),O=b("a-select"),x=b("a-form"),M=b("a-drawer"),A=F("has-permi");return _(),y("div",$,[h(u,{gutter:10,class:"mb-2"},{default:S((()=>[U(h(r,null,{default:S((()=>[h(s,{color:"success",onClick:e.handleAdd},{default:S((()=>[B])),_:1},8,["onClick"])])),_:1},512),[[A,["system:menu:add"]]])])),_:1}),h(c,{loading:e.loading,rowKey:"id",columns:e.columns,"data-source":e.menuList,defaultExpandAllRows:!0,pagination:!1},{icon:S((({record:e})=>[h("div",G,[h(d,{name:e.icon},null,8,["name"])])])),status:S((({record:e})=>[h("div",H,[h("span",null,T("1"===e.status?"正常":"停用"),1)])])),action:S((({record:a})=>[h("span",null,[U(h(s,{type:"link",color:"success",class:"mr-3",onClick:l=>e.handleAdd(a)},{default:S((()=>[J])),_:2},1032,["onClick"]),[[A,["system:menu:add"]]]),U(h(s,{type:"link",color:"success",class:"mr-3",onClick:l=>e.handleUpdate(a)},{default:S((()=>[W])),_:2},1032,["onClick"]),[[A,["system:menu:update"]]]),h(i,{title:"确定要删除该数据吗？","ok-text":"确定","cancel-text":"取消",onConfirm:l=>e.confirm(a),onCancel:e.cancel},{default:S((()=>[U(h(s,{type:"link",color:"error"},{default:S((()=>[X])),_:1},512),[[A,["system:menu:delete"]]])])),_:2},1032,["onConfirm","onCancel"])])])),_:1},8,["loading","columns","data-source"]),h(M,{width:"50%",title:e.drawerTitle,placement:"right",visible:e.open,"onUpdate:visible":a[13]||(a[13]=a=>e.open=a),maskClosable:!1,onClose:e.handleClose},{default:S((()=>[e.open?(_(),y(x,{key:0,ref:"formRef",model:e.formState,rules:e.rules,"label-col":e.labelCol,"wrapper-col":e.wrapperCol},{default:S((()=>[h(u,null,{default:S((()=>[h(r,{span:12},{default:S((()=>[h(p,{label:"上级菜单",name:"parentId"},{default:S((()=>[h(m,{ref:"treeRef",class:"!mt-[3px]",modelValue:e.formState.parentId,"onUpdate:modelValue":a[1]||(a[1]=a=>e.formState.parentId=a),normalizer:e.normalizer,placeholder:"请选择上级菜单",options:e.treeOptions,onSelect:e.handleTreeSelect},null,8,["modelValue","normalizer","options","onSelect"])])),_:1})])),_:1}),h(r,{span:12},{default:S((()=>[h(p,{label:"菜单类型",name:"menuType"},{default:S((()=>[h(f,{value:e.formState.menuType,"onUpdate:value":a[2]||(a[2]=a=>e.formState.menuType=a),name:"menuType",options:[{label:"目录",value:"M"},{label:"菜单",value:"C"},{label:"按钮",value:"F"}]},null,8,["value"])])),_:1})])),_:1}),h(r,{span:12},{default:S((()=>[h(p,{label:"菜单名称",name:"title"},{default:S((()=>[h(v,{value:e.formState.title,"onUpdate:value":a[3]||(a[3]=a=>e.formState.title=a),placeholder:"请输入菜单名称"},null,8,["value"])])),_:1})])),_:1}),"F"!==e.formState.menuType?(_(),y(r,{key:0,span:12},{default:S((()=>[h(p,{label:"菜单图标",name:"icon"},{default:S((()=>[h(g,{value:e.formState.icon,"onUpdate:value":a[4]||(a[4]=a=>e.formState.icon=a),placeholder:"选择菜单图标",onChange:e.handleIconChange},null,8,["value","onChange"])])),_:1})])),_:1})):z("",!0),h(r,{span:12},{default:S((()=>[h(p,{label:"显示排序",name:"orderNum"},{default:S((()=>[h(w,{class:"!w-[100%]",value:e.formState.orderNum,"onUpdate:value":a[5]||(a[5]=a=>e.formState.orderNum=a),placeholder:"请输入显示排序"},null,8,["value"])])),_:1})])),_:1}),"F"!==e.formState.menuType?(_(),y(r,{key:1,span:12},{default:S((()=>[h(p,{label:"路由地址",name:"path"},{default:S((()=>[h(v,{value:e.formState.path,"onUpdate:value":a[6]||(a[6]=a=>e.formState.path=a),placeholder:"请输入路由地址"},null,8,["value"])])),_:1})])),_:1})):z("",!0),"C"===e.formState.menuType||"M"===e.formState.menuType?(_(),y(r,{key:2,span:12},{default:S((()=>[h(p,{label:"组件名",name:"component"},{default:S((()=>[h(O,{placeholder:"请输入组件名",value:e.formState.component,"onUpdate:value":a[7]||(a[7]=a=>e.formState.component=a)},{default:S((()=>[(_(!0),y(k,null,C(e.dynamicComponents,(e=>(_(),y(I,{key:e,value:e},{default:S((()=>[j(T(e),1)])),_:2},1032,["value"])))),128))])),_:1},8,["value"])])),_:1})])),_:1})):z("",!0),"F"===e.formState.menuType?(_(),y(r,{key:3,span:12},{default:S((()=>[h(p,{label:"权限标识",name:"perms"},{default:S((()=>[h(v,{value:e.formState.perms,"onUpdate:value":a[8]||(a[8]=a=>e.formState.perms=a),placeholder:"请输入权限标识"},null,8,["value"])])),_:1})])),_:1})):z("",!0),"F"!==e.formState.menuType?(_(),y(r,{key:4,span:12},{default:S((()=>[h(p,{label:"显示状态",name:"visible"},{default:S((()=>[h(f,{value:e.formState.visible,"onUpdate:value":a[9]||(a[9]=a=>e.formState.visible=a),name:"menuType",options:[{label:"显示",value:"1"},{label:"隐藏",value:"0"}]},null,8,["value"])])),_:1})])),_:1})):z("",!0),h(r,{span:12},{default:S((()=>[h(p,{label:"菜单状态",name:"status"},{default:S((()=>[h(f,{value:e.formState.status,"onUpdate:value":a[10]||(a[10]=a=>e.formState.status=a),name:"menuType",options:[{label:"正常",value:"1"},{label:"停用",value:"0"}]},null,8,["value"])])),_:1})])),_:1}),"F"!==e.formState.menuType?(_(),y(r,{key:5,span:12},{default:S((()=>[h(p,{label:"是否缓存",name:"keepAlive"},{default:S((()=>[h(f,{value:e.formState.keepAlive,"onUpdate:value":a[11]||(a[11]=a=>e.formState.keepAlive=a),name:"menuType",options:[{label:"缓存",value:1},{label:"不缓存",value:0}]},null,8,["value"])])),_:1})])),_:1})):z("",!0),"F"!==e.formState.menuType?(_(),y(r,{key:6,span:12},{default:S((()=>[h(p,{label:"是否外链",name:"isFrame"},{default:S((()=>[h(f,{value:e.formState.isFrame,"onUpdate:value":a[12]||(a[12]=a=>e.formState.isFrame=a),name:"menuType",options:[{label:"是",value:"1"},{label:"否",value:"0"}]},null,8,["value"])])),_:1})])),_:1})):z("",!0),h(r,{span:24},{default:S((()=>[h(p,null,{default:S((()=>[h(s,{type:"primary",class:"mr-3",onClick:e.handleSubmit},{default:S((()=>[Y])),_:1},8,["onClick"]),h(s,{onClick:e.handleClose},{default:S((()=>[Z])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1})])),_:1},8,["model","rules","label-col","wrapper-col"])):z("",!0)])),_:1},8,["title","visible","onClose"])])};export default Q;
