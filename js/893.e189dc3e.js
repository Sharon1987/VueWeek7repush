"use strict";(self["webpackChunkproject_week7"]=self["webpackChunkproject_week7"]||[]).push([[893],{1713:function(t,s,a){a.d(s,{Z:function(){return v}});var e=a(6252),n=a(3577);const o={class:"toast-container position-fixed pe-3 top-0 end-0",style:{"z-index":"1500"}},r={class:"toast-header"},i={class:"me-auto"},l=["onClick"],c={key:0,class:"toast-body"};function u(t,s,a,u,d,p){return(0,e.wg)(),(0,e.iD)("div",o,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(d.messages,((t,s)=>((0,e.wg)(),(0,e.iD)("div",{key:s,class:(0,n.C_)(["toast show",`toast${s}`]),role:"alert"},[(0,e._)("div",r,[(0,e._)("span",{class:(0,n.C_)([`bg-${t.style}`,"p-2 rounded me-2 d-inline-block"])},null,2),(0,e._)("strong",i,(0,n.zw)(t.title),1),(0,e._)("button",{type:"button",class:"btn-close",onClick:t=>p.clearToast(s),"aria-label":"Close"},null,8,l)]),t.content?((0,e.wg)(),(0,e.iD)("div",c,(0,n.zw)(t.content),1)):(0,e.kq)("",!0)],2)))),128))])}var d={data(){return{messages:[]}},inject:["emitter"],methods:{toastShow(){setTimeout((()=>{this.messages.shift()}),6e3)},clearToast(t){this.messages.splice(t,1)}},mounted(){this.emitter.on("push-message",(t=>{const{style:s="success",title:a,content:e}=t;this.messages.push({style:s,title:a,content:e}),this.toastShow()}))}},p=a(3744);const h=(0,p.Z)(d,[["render",u]]);var v=h},9893:function(t,s,a){a.r(s),a.d(s,{default:function(){return T}});var e=a(6252);const n={class:"container-fluid mt-3 position-relative"};function o(t,s,a,o,r,i){const l=(0,e.up)("Navbar"),c=(0,e.up)("ToastMessages"),u=(0,e.up)("router-view");return(0,e.wg)(),(0,e.iD)(e.HY,null,[(0,e.Wm)(l),(0,e._)("div",n,[(0,e.Wm)(c),r.status?((0,e.wg)(),(0,e.j4)(u,{key:0})):(0,e.kq)("",!0)])],64)}var r=a(4902),i=a(1713),l=a(9963);const c={class:"navbar navbar-expand-lg navbar-dark bg-dark"},u={class:"container-fluid"},d=(0,e._)("a",{class:"navbar-brand",href:"#"},"Violetta Art Institute",-1),p=(0,e._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,e._)("span",{class:"navbar-toggler-icon"})],-1),h={class:"collapse navbar-collapse",id:"navbarNavAltMarkup"},v={class:"navbar-nav"},g=(0,e.Uk)("產品"),k=(0,e.Uk)("訂單"),m=(0,e.Uk)("優惠券"),b={class:"navbar-nav ms-auto"},f=(0,e.Uk)("購物車");function w(t,s,a,n,o,r){const i=(0,e.up)("router-link");return(0,e.wg)(),(0,e.iD)("nav",c,[(0,e._)("div",u,[d,p,(0,e._)("div",h,[(0,e._)("div",v,[(0,e.Wm)(i,{to:"/admin/products",class:"nav-link"},{default:(0,e.w5)((()=>[g])),_:1}),(0,e.Wm)(i,{to:"/admin/orders",class:"nav-link"},{default:(0,e.w5)((()=>[k])),_:1}),(0,e.Wm)(i,{to:"/admin/coupons",class:"nav-link"},{default:(0,e.w5)((()=>[m])),_:1}),(0,e._)("a",{href:"#",onClick:s[0]||(s[0]=(0,l.iM)(((...t)=>r.logout&&r.logout(...t)),["prevent"])),class:"nav-link"},"登出")]),(0,e._)("div",b,[(0,e.Wm)(i,{to:"/user/cart",class:"nav-link"},{default:(0,e.w5)((()=>[f])),_:1})])])])])}var _={inject:["emitter"],methods:{logout(){const t="https://vue3-course-api.hexschool.io/v2//logout";this.$http.post(t).then((t=>{this.$httpMessageState(t,"登出"),t.data.success&&this.$router.push("/")})).catch((t=>{this.$httpMessageState(t.response,"錯誤訊息")}))}}},$=a(3744);const y=(0,$.Z)(_,[["render",w]]);var M=y,C={components:{Navbar:M,ToastMessages:i.Z},data(){return{status:!1}},provide(){return{emitter:r.Z}},created(){const t=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=`${t}`;const s="https://vue3-course-api.hexschool.io/v2//api/user/check";this.$http.post(s).then((t=>{this.$httpMessageState(t,"登入"),this.status=!0})).catch((t=>{this.$router.push("/"),this.$httpMessageState(t.response,"錯誤訊息")}))}};const x=(0,$.Z)(C,[["render",o]]);var T=x}}]);
//# sourceMappingURL=893.e189dc3e.js.map