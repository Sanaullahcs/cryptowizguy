"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[488],{6186:function(e,t,r){var a=r(3645),n=r.n(a)()((function(e){return e[1]}));n.push([e.id,".mrgin{margin:30%!important}",""]),t.Z=n},9488:function(e,t,r){r.r(t),r.d(t,{default:function(){return k}});var a=r(4865),n={class:"mrgin"},o={class:"mt-13"},i={class:"card br-10 mw-550 m-auto"},s={class:"card-body py-4"},l=(0,a._)("h4",{class:"font-weight-bolder my-2"},"Forgot Your Password?",-1),u={action:"",autocomplete:"off"},c={class:"form-group"},d=(0,a._)("label",{for:"exampleInputEmail1",class:"my-2"},"Email",-1),m={class:"error"},p={key:0,class:"text-danger w-100 text-center bg-yellow text-red"},f={key:0,class:"spinner-border spinner-border-sm text-light",role:"status"},g=[(0,a._)("span",{class:"sr-only"},"Loading...",-1)];var y=r(9918),h=(r(8449),{name:"Home",components:{Layout:y.Z},beforeUnmount:function(){},created:function(){},mounted:function(){},data:function(){return{email:"",error:"",loading:!1}},watch:{},methods:{sendEmail:function(){var e=this;if(this.loading=!0,""==this.email)return this.loading=!1,void(this.error="Please enter your valid email address");axios.post("/api/forgot-password",{email:this.email}).then((function(t){e.loading=!1,"success"==t.data.status?(localStorage.setItem("user",JSON.stringify(t.data.user)),e.$router.push("/verify?type=fp")):e.error=t.data.message})).catch((function(t){e.loading=!1,e.error=t.response.data.message}))}},computed:{}}),b=r(3379),v=r.n(b),w=r(6186),_={insert:"head",singleton:!1};v()(w.Z,_),w.Z.locals;var k=(0,r(3744).Z)(h,[["render",function(e,t,r,y,h,b){var v=(0,a.up)("layout");return(0,a.wg)(),(0,a.j4)(v,null,{default:(0,a.w5)((function(){return[(0,a._)("div",n,[(0,a._)("div",o,[(0,a._)("div",i,[(0,a._)("div",s,[l,(0,a._)("form",u,[(0,a._)("div",c,[d,(0,a.wy)((0,a._)("input",{type:"email","onUpdate:modelValue":t[0]||(t[0]=function(e){return h.email=e}),class:"my-2 form-control bg-primary text-white",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"example@gmail.com",autocomplete:"off"},null,512),[[a.nr,h.email]])]),(0,a._)("div",m,[null!=h.error?((0,a.wg)(),(0,a.iD)("p",p,(0,a.zw)(h.error),1)):(0,a.kq)("",!0)]),(0,a._)("button",{type:"button",class:"btn btn-sm btn-primary my-2",onClick:t[1]||(t[1]=function(e){return b.sendEmail()})},[(0,a.Uk)(" Send "),h.loading?((0,a.wg)(),(0,a.iD)("div",f,g)):(0,a.kq)("",!0)])])])])])])]})),_:1})}]])}}]);