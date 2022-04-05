"use strict";(self["webpackChunkproject_week7"]=self["webpackChunkproject_week7"]||[]).push([[218],{561:function(t,e,a){var o=a(2109),n=a(7854),l=a(1400),i=a(9303),r=a(6244),s=a(7908),c=a(5417),d=a(6135),u=a(1194),p=u("splice"),m=n.TypeError,g=Math.max,f=Math.min,h=9007199254740991,_="Maximum allowed length exceeded";o({target:"Array",proto:!0,forced:!p},{splice:function(t,e){var a,o,n,u,p,b,v=s(this),P=r(v),y=l(t,P),w=arguments.length;if(0===w?a=o=0:1===w?(a=0,o=P-y):(a=w-2,o=f(g(i(e),0),P-y)),P+a-o>h)throw m(_);for(n=c(v,o),u=0;u<o;u++)p=y+u,p in v&&d(n,u,v[p]);if(n.length=o,a<o){for(u=y;u<P-o;u++)p=u+o,b=u+a,p in v?v[b]=v[p]:delete v[b];for(u=P;u>P-o+a;u--)delete v[u-1]}else if(a>o)for(u=P-o;u>y;u--)p=u+o-1,b=u+a-1,p in v?v[b]=v[p]:delete v[b];for(u=0;u<a;u++)v[u+y]=arguments[u+2];return v.length=P-o+a,n}})},8478:function(t,e,a){a.d(e,{Z:function(){return b}});var o=a(6252),n=a(3577),l=a(9963),i={"aria-label":"Page navigation example"},r={class:"pagination justify-content-center"},s=(0,o._)("span",{"aria-hidden":"true"},"«",-1),c=[s],d={key:0,class:"page-link"},u=["onClick"],p=(0,o._)("span",{"aria-hidden":"true"},"»",-1),m=[p];function g(t,e,a,s,p,g){return(0,o.wg)(),(0,o.iD)("nav",i,[(0,o._)("ul",r,[(0,o._)("li",{class:(0,n.C_)([{disabled:!a.pages.has_pre},"page-item"])},[(0,o._)("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:e[0]||(e[0]=(0,l.iM)((function(t){return g.updatePage(a.pages.current_page-1)}),["prevent"]))},c)],2),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.pages.total_pages,(function(t){return(0,o.wg)(),(0,o.iD)("li",{class:(0,n.C_)(["page-item",{active:a.pages.current_page===t}]),key:t},[t===a.pages.current_page?((0,o.wg)(),(0,o.iD)("span",d,(0,n.zw)(t),1)):((0,o.wg)(),(0,o.iD)("a",{key:1,class:"page-link",href:"#",onClick:(0,l.iM)((function(e){return g.updatePage(t)}),["prevent"])},(0,n.zw)(t),9,u))],2)})),128)),(0,o._)("li",{class:(0,n.C_)(["page-item",{disabled:!a.pages.has_next}])},[(0,o._)("a",{class:"page-link",href:"#","aria-label":"Next",onClick:e[1]||(e[1]=(0,l.iM)((function(t){return g.updatePage(a.pages.current_page+1)}),["prevent"]))},m)],2)])])}var f={props:["pages"],methods:{updatePage:function(t){this.$emit("emitPages",t)}}},h=a(3744);const _=(0,h.Z)(f,[["render",g]]);var b=_},1218:function(t,e,a){a.r(e),a.d(e,{default:function(){return Pt}});var o=a(6252),n=a(3577),l={class:"text-end mt-4"},i={class:"table mt-4"},r=(0,o._)("thead",null,[(0,o._)("tr",null,[(0,o._)("th",{width:"120"},"分類"),(0,o._)("th",null,"產品名稱"),(0,o._)("th",{width:"120"},"原價"),(0,o._)("th",{width:"120"},"售價"),(0,o._)("th",{width:"100"},"是否啟用"),(0,o._)("th",{width:"200"},"編輯")])],-1),s={class:"text-right"},c={class:"text-right"},d={key:0,class:"text-success"},u={key:1},p={class:"btn-group"},m=["onClick"],g=["onClick"];function f(t,e,a,f,h,_){var b=(0,o.up)("Loading"),v=(0,o.up)("Pagination"),P=(0,o.up)("ProductModal"),y=(0,o.up)("DelModal");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(b,{active:h.isLoading,"z-index":1060},null,8,["active"]),(0,o._)("div",l,[(0,o._)("button",{class:"btn btn-primary",type:"button",onClick:e[0]||(e[0]=function(t){return _.openModal(!0)})}," 建立新的產品 ")]),(0,o._)("table",i,[r,(0,o._)("tbody",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(h.products,(function(e){return(0,o.wg)(),(0,o.iD)("tr",{key:e.id},[(0,o._)("td",null,(0,n.zw)(e.category),1),(0,o._)("td",null,(0,n.zw)(e.title),1),(0,o._)("td",s,(0,n.zw)(t.$filters.currency(e.origin_price)),1),(0,o._)("td",c,(0,n.zw)(t.$filters.currency(e.price)),1),(0,o._)("td",null,[e.is_enabled?((0,o.wg)(),(0,o.iD)("span",d,"啟用")):((0,o.wg)(),(0,o.iD)("span",u,"未啟用"))]),(0,o._)("td",null,[(0,o._)("div",p,[(0,o._)("button",{class:"btn btn-outline-primary btn-sm",type:"button",onClick:function(t){return _.openModal(!1,e)}}," 編輯 ",8,m),(0,o._)("button",{class:"btn btn-outline-danger btn-sm",type:"button",onClick:function(t){return _.openDelProductModal(e)}}," 刪除 ",8,g)])])])})),128))])]),(0,o.Wm)(v,{pages:h.pagination,onEmitPages:_.getProducts},null,8,["pages","onEmitPages"]),(0,o.Wm)(P,{onUpdateProduct:_.updateProduct,product:h.tempProduct,isNew:h.isNew,ref:"productModal"},null,8,["onUpdateProduct","product","isNew"]),(0,o.Wm)(y,{item:h.tempProduct,ref:"delModal",onDelItem:_.delProduct},null,8,["item","onDelItem"])])}var h=a(4648),_=(a(2222),a(5733)),b=a(8478),v=(a(561),a(2526),a(1817),a(9963)),P={class:"modal fade",id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},y={class:"modal-dialog modal-xl",role:"document"},w={class:"modal-content border-0"},k={class:"modal-header bg-dark text-white"},U={class:"modal-title",id:"exampleModalLabel"},M={key:0},x={key:1},D=(0,o._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),C={class:"modal-body"},$={class:"row"},L={class:"col-sm-4"},V={class:"mb-3"},N=(0,o._)("label",{for:"image",class:"form-label"},"輸入圖片網址",-1),Z={class:"mb-3"},z={for:"customFile",class:"form-label"},j=(0,o.Uk)("或 上傳圖片 "),F={key:0,class:"fas fa-spinner fa-spin"},I=["src"],S={key:0,class:"mt-5"},W=["onUpdate:modelValue"],q=["src"],E=["onClick"],H={key:0},K={class:"col-sm-8"},Y={class:"mb-3"},T=(0,o._)("label",{for:"title",class:"form-label"},"標題",-1),A={class:"row gx-2"},B={class:"mb-3 col-md-6"},O=(0,o._)("label",{for:"category",class:"form-label"},"分類",-1),G={class:"mb-3 col-md-6"},J=(0,o._)("label",{for:"price",class:"form-label"},"單位",-1),Q={class:"row gx-2"},R={class:"mb-3 col-md-6"},X=(0,o._)("label",{for:"origin_price",class:"form-label"},"原價",-1),tt={class:"mb-3 col-md-6"},et=(0,o._)("label",{for:"price",class:"form-label"},"售價",-1),at=(0,o._)("hr",null,null,-1),ot={class:"mb-3"},nt=(0,o._)("label",{for:"description",class:"form-label"},"產品描述",-1),lt={class:"mb-3"},it=(0,o._)("label",{for:"content",class:"form-label"},"說明內容",-1),rt={class:"mb-3"},st={class:"form-check"},ct=(0,o._)("label",{class:"form-check-label",for:"is_enabled"}," 是否啟用 ",-1),dt={class:"modal-footer"},ut=(0,o._)("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function pt(t,e,a,n,l,i){return(0,o.wg)(),(0,o.iD)("div",P,[(0,o._)("div",y,[(0,o._)("div",w,[(0,o._)("div",k,[(0,o._)("h5",U,[a.isNew?((0,o.wg)(),(0,o.iD)("span",M,"新增產品")):((0,o.wg)(),(0,o.iD)("span",x,"編輯產品"))]),D]),(0,o._)("div",C,[(0,o._)("div",$,[(0,o._)("div",L,[(0,o._)("div",V,[N,(0,o.wy)((0,o._)("input",{type:"text",class:"form-control",id:"image","onUpdate:modelValue":e[0]||(e[0]=function(t){return l.tempProduct.imageUrl=t}),placeholder:"請輸入圖片連結"},null,512),[[v.nr,l.tempProduct.imageUrl]])]),(0,o._)("div",Z,[(0,o._)("label",z,[j,l.status.fileUploading?((0,o.wg)(),(0,o.iD)("i",F)):(0,o.kq)("",!0)]),(0,o._)("input",{type:"file",id:"customFile",class:"form-control",ref:"fileInput",onChange:e[1]||(e[1]=function(){return i.uploadFile&&i.uploadFile.apply(i,arguments)})},null,544)]),(0,o._)("img",{class:"img-fluid",src:l.tempProduct.imageUrl},null,8,I),l.tempProduct.imagesUrl?((0,o.wg)(),(0,o.iD)("div",S,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(l.tempProduct.imagesUrl,(function(t,e){return(0,o.wg)(),(0,o.iD)("div",{class:"mb-3",key:e},[(0,o.wy)((0,o._)("input",{type:"url",class:"form-control form-control","onUpdate:modelValue":function(t){return l.tempProduct.imagesUrl[e]=t},placeholder:"請輸入連結"},null,8,W),[[v.nr,l.tempProduct.imagesUrl[e]]]),(0,o._)("div",null,[(0,o._)("img",{class:"img-fluid",src:t},null,8,q)]),(0,o._)("button",{type:"button",class:"btn btn-outline-danger",onClick:function(t){return l.tempProduct.imagesUrl.splice(e,1)}}," 移除 ",8,E)])})),128)),l.tempProduct.imagesUrl[l.tempProduct.imagesUrl.length-1]||!l.tempProduct.imagesUrl.length?((0,o.wg)(),(0,o.iD)("div",H,[(0,o._)("button",{class:"btn btn-outline-primary btn-sm d-block w-100",onClick:e[2]||(e[2]=function(t){return l.tempProduct.imagesUrl.push("")})}," 新增圖片 ")])):(0,o.kq)("",!0)])):(0,o.kq)("",!0)]),(0,o._)("div",K,[(0,o._)("div",Y,[T,(0,o.wy)((0,o._)("input",{type:"text",class:"form-control",id:"title","onUpdate:modelValue":e[3]||(e[3]=function(t){return l.tempProduct.title=t}),placeholder:"請輸入標題"},null,512),[[v.nr,l.tempProduct.title]])]),(0,o._)("div",A,[(0,o._)("div",B,[O,(0,o.wy)((0,o._)("input",{type:"text",class:"form-control",id:"category","onUpdate:modelValue":e[4]||(e[4]=function(t){return l.tempProduct.category=t}),placeholder:"請輸入分類"},null,512),[[v.nr,l.tempProduct.category]])]),(0,o._)("div",G,[J,(0,o.wy)((0,o._)("input",{type:"text",class:"form-control",id:"unit","onUpdate:modelValue":e[5]||(e[5]=function(t){return l.tempProduct.unit=t}),placeholder:"請輸入單位"},null,512),[[v.nr,l.tempProduct.unit]])])]),(0,o._)("div",Q,[(0,o._)("div",R,[X,(0,o.wy)((0,o._)("input",{type:"number",class:"form-control",id:"origin_price",min:"0","onUpdate:modelValue":e[6]||(e[6]=function(t){return l.tempProduct.origin_price=t}),placeholder:"請輸入原價"},null,512),[[v.nr,l.tempProduct.origin_price,void 0,{number:!0}]])]),(0,o._)("div",tt,[et,(0,o.wy)((0,o._)("input",{type:"number",class:"form-control",id:"price","onUpdate:modelValue":e[7]||(e[7]=function(t){return l.tempProduct.price=t}),min:"0",placeholder:"請輸入售價"},null,512),[[v.nr,l.tempProduct.price,void 0,{number:!0}]])])]),at,(0,o._)("div",ot,[nt,(0,o.wy)((0,o._)("textarea",{type:"text",class:"form-control",id:"description","onUpdate:modelValue":e[8]||(e[8]=function(t){return l.tempProduct.description=t}),placeholder:"請輸入產品描述"},null,512),[[v.nr,l.tempProduct.description]])]),(0,o._)("div",lt,[it,(0,o.wy)((0,o._)("textarea",{type:"text",class:"form-control",id:"content","onUpdate:modelValue":e[9]||(e[9]=function(t){return l.tempProduct.content=t}),placeholder:"請輸入產品說明內容"},null,512),[[v.nr,l.tempProduct.content]])]),(0,o._)("div",rt,[(0,o._)("div",st,[(0,o.wy)((0,o._)("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":e[10]||(e[10]=function(t){return l.tempProduct.is_enabled=t}),"true-value":1,"false-value":0,id:"is_enabled"},null,512),[[v.e8,l.tempProduct.is_enabled]]),ct])])])])]),(0,o._)("div",dt,[ut,(0,o._)("button",{type:"button",class:"btn btn-primary",onClick:e[11]||(e[11]=function(e){return t.$emit("update-product",l.tempProduct)})}," 確認 ")])])])],512)}var mt=a(1339),gt={props:{product:{type:Object,default:function(){return{}}},isNew:{type:Boolean,default:!1}},data:function(){return{status:{},modal:"",tempProduct:{}}},emits:["update-product"],mixins:[mt.Z],inject:["emitter"],watch:{product:function(){this.tempProduct=this.product,this.tempProduct.imagesUrl||(this.tempProduct.imagesUrl=[]),this.tempProduct.imageUrl||(this.tempProduct.imageUrl="")}},methods:{uploadFile:function(){var t=this,e=this.$refs.fileInput.files[0],a=new FormData;a.append("file-to-upload",e);var o="".concat("https://vue3-course-api.hexschool.io/v2/","/api/").concat("sharon1987","/admin/upload");this.status.fileUploading=!0,this.$http.post(o,a,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){t.status.fileUploading=!1,e.data.success?(t.tempProduct.imageUrl=e.data.imageUrl,t.$refs.fileInput.value="",t.emitter.emit("push-message",{style:"success",title:"圖片上傳結果",content:e.data.message})):(t.$refs.fileInput.value="",t.emitter.emit("push-message",{style:"danger",title:"圖片上傳結果",content:e.data.message}))})).catch((function(e){t.status.fileUploading=!1,t.$httpMessageState(e.response,"圖片失敗")}))}}},ft=a(3744);const ht=(0,ft.Z)(gt,[["render",pt]]);var _t=ht,bt={data:function(){return{products:[],pagination:{},tempProduct:{},isNew:!1,isLoading:!1,status:{fileUploading:!1},modal:{editModal:"",delModal:""},currentPage:1}},components:{ProductModal:_t,DelModal:_.Z,Pagination:b.Z},inject:["emitter"],methods:{getProducts:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.currentPage=e;var a="".concat("https://vue3-course-api.hexschool.io/v2/","/api/").concat("sharon1987","/admin/products?page=").concat(e);this.isLoading=!0,this.$http.get(a).then((function(e){t.products=e.data.products,t.pagination=e.data.pagination,t.isLoading=!1})).catch((function(e){t.isLoading=!1,t.$httpMessageState(e.response,"錯誤訊息")}))},openModal:function(t,e){t?(this.tempProduct={},this.isNew=!0):(this.tempProduct=(0,h.Z)({},e),this.isNew=!1);var a=this.$refs.productModal;a.openModal()},updateProduct:function(t){var e=this;this.tempProduct=t;var a="".concat("https://vue3-course-api.hexschool.io/v2/","/api/").concat("sharon1987","/admin/product");this.isLoading=!0;var o="post",n="新增產品";this.isNew||(a="".concat("https://vue3-course-api.hexschool.io/v2/","/api/").concat("sharon1987","/admin/product/").concat(this.tempProduct.id),o="put",n="更新產品");var l=this.$refs.productModal;this.$http[o](a,{data:this.tempProduct}).then((function(t){e.isLoading=!1,e.$httpMessageState(t,n),l.hideModal(),e.getProducts(e.currentPage)})).catch((function(t){e.isLoading=!1,e.$httpMessageState(t.response,n)}))},openDelProductModal:function(t){this.tempProduct=(0,h.Z)({},t);var e=this.$refs.delModal;e.openModal()},delProduct:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/v2/","/api/").concat("sharon1987","/admin/product/").concat(this.tempProduct.id);this.isLoading=!0,this.$http.delete(e).then((function(e){t.isLoading=!1,t.$httpMessageState(e,"刪除產品");var a=t.$refs.delModal;a.hideModal(),t.getProducts(t.currentPage)})).catch((function(e){t.isLoading=!1,t.$httpMessageState(e.response,"刪除產品")}))}},created:function(){this.getProducts()}};const vt=(0,ft.Z)(bt,[["render",f]]);var Pt=vt}}]);
//# sourceMappingURL=218-legacy.60189001.js.map