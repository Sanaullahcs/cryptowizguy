"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[84],{4084:function(o,r,s){s.r(r),s.d(r,{default:function(){return b}});var a=s(4865),e={class:"my-5"},t={class:"card br-10 mw-550 m-auto"},n={class:"card-body py-4"},i=(0,a._)("h4",{class:"font-weight-bolder my-2"},"Reset Your Password",-1),d={action:"",autocomplete:"off"},l={class:"form-group"},c=(0,a._)("label",{for:"exampleInputEmail1",class:"my-2"},"New Password",-1),u={class:"form-group"},p=(0,a._)("label",{for:"exampleInputEmail1",class:"my-2"},"Confirmed Password",-1),m={class:"error"},w={key:0,class:"text-danger w-100 text-center bg-yellow text-red"},f={key:0,class:"spinner-border spinner-border-sm text-light",role:"status"},h=[(0,a._)("span",{class:"sr-only"},"Loading...",-1)];var y=s(5107),g=(s(8449),{name:"Home",components:{Layout:y.Z},beforeUnmount:function(){},created:function(){},mounted:function(){},data:function(){return{password:"",password_confirmation:"",error:"",loading:!1}},watch:{},methods:{updatePassword:function(){var o=this;return this.loading=!0,""==this.password?(this.loading=!1,void(this.error="Please enter your new password")):""==this.password_confirmation?(this.loading=!1,void(this.error="Please confirm your new password")):this.password!=this.password_confirmation?(this.loading=!1,void(this.error="Password and confirmed password does not match")):void axios.post("/api/reset-password",{password:this.password,password_confirmation:this.password_confirmation,id:JSON.parse(localStorage.getItem("user")).id}).then((function(r){o.loading=!1,"success"==r.data.status?o.$router.push("/login"):o.error=r.data.message})).catch((function(r){o.loading=!1,o.error="Something went wrong. Please try again later"}))}},computed:{}});var b=(0,s(3744).Z)(g,[["render",function(o,r,s,y,g,b){var _=(0,a.up)("layout");return(0,a.wg)(),(0,a.j4)(_,null,{default:(0,a.w5)((function(){return[(0,a._)("div",e,[(0,a._)("div",t,[(0,a._)("div",n,[i,(0,a._)("form",d,[(0,a._)("div",l,[c,(0,a.wy)((0,a._)("input",{type:"password","onUpdate:modelValue":r[0]||(r[0]=function(o){return g.password=o}),class:"my-2 form-control bg-primary text-white",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"********",autocomplete:"off"},null,512),[[a.nr,g.password]])]),(0,a._)("div",u,[p,(0,a.wy)((0,a._)("input",{type:"password","onUpdate:modelValue":r[1]||(r[1]=function(o){return g.password_confirmation=o}),class:"my-2 form-control bg-primary text-white",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"********",autocomplete:"off"},null,512),[[a.nr,g.password_confirmation]])]),(0,a._)("div",m,[null!=g.error?((0,a.wg)(),(0,a.iD)("p",w,(0,a.zw)(g.error),1)):(0,a.kq)("",!0)]),(0,a._)("button",{type:"button",class:"btn btn-sm btn-primary my-2",onClick:r[2]||(r[2]=function(o){return b.updatePassword()})},[(0,a.Uk)("Send "),g.loading?((0,a.wg)(),(0,a.iD)("div",f,h)):(0,a.kq)("",!0)])])])])])]})),_:1})}]])}}]);