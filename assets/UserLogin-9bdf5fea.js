import{a as x,b as u,_ as w,r as m,o as c,c as f,d as e,e as t,w as g,n as r,i as b,q as I,v as F,g as v,p as E,j as P,h as $}from"./index-2b74f8b0.js";import{l as h}from"./logInStore-b042df66.js";import{g as S}from"./goStore-490733ce.js";import{d as L}from"./dataStore-ed4c1e50.js";import{_ as C}from"./google-icon-c7d406f8.js";import"./cartStore-657aa4a9.js";const j="/lele_music/assets/login-9e134a52.jpg";const M={computed:{...x(h,["logInForm","signUpForm","logInPage","resetPasswordEmail"])},methods:{...u(S,["goHomePage","goLoginPage"]),...u(h,["signUp","logIn","signInWithGoogle","updateProfile","signOut","sendPasswordResetEmail"]),...u(L,[])},created(){}},a=o=>(E("data-v-c5695346"),o=o(),P(),o),q={class:"container-fluid ps-0 position-relative"},N=a(()=>e("span",null,"樂樂音樂家教媒合平台",-1)),R={class:"row align-items-md-center justify-content-center justify-content-md-start"},B=a(()=>e("div",{class:"col-6 col-lg-4 d-none d-md-block"},[e("img",{src:j,alt:"登入圖",class:"login-side-img"})],-1)),G={class:"col-12 col-md-6 col-xl-4"},W={key:0,class:"login-wrap d-flex flex-column justify-content-center"},T=a(()=>e("h1",{class:"mx-auto border-bottom my-16 pb-16 w-75 text-center fs-1"}," 會員登入 ",-1)),z=a(()=>e("img",{src:C,alt:"google icon",class:"google-icon me-2"},null,-1)),A=a(()=>e("span",{class:"google-login-text"},"使用 Google 登入",-1)),D=[z,A],H=a(()=>e("hr",{class:"mx-auto w-75 mt-16 text-center fs-7 login-hr"},null,-1)),O={class:"mb-3"},J=a(()=>e("label",{for:"email",class:"form-label"}," Email： ",-1)),K={class:"mb-3"},Q={class:"d-flex justify-content-between align-items-center"},X=a(()=>e("label",{for:"password",class:"form-label"}," 密碼： ",-1)),Y={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},Z={class:"modal-dialog modal-dialog-centered"},ee={class:"modal-content"},se=a(()=>e("div",{class:"modal-header"},[e("h1",{class:"modal-title fs-5",id:"exampleModalLabel"},"重設密碼"),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1)),oe={class:"modal-body"},le={class:"mb-3"},ae=a(()=>e("label",{for:"resetPasswordEmail",class:"form-label"},"請填寫註冊Email",-1)),te={class:"modal-footer"},ne=a(()=>e("button",{type:"submit",class:"btn btn-dark d-block mx-auto py-3 w-100"}," 登入 ",-1)),ie={class:"mx-auto w-75 my-3 text-center fs-7 text-delete"},de={key:1,class:"login-wrap d-flex flex-column justify-content-center"},re=a(()=>e("h1",{class:"mx-auto border-bottom my-3 pb-2 w-75 text-center"},"會員註冊",-1)),me={class:"mb-3"},ce=a(()=>e("label",{for:"displayName",class:"form-label"}," 姓名： ",-1)),pe={class:"mb-3"},ue=a(()=>e("label",{for:"email",class:"form-label"}," Email： ",-1)),fe={class:"mb-3"},ge=a(()=>e("label",{for:"password",class:"form-label"}," 密碼： ",-1)),be={class:"mb-3"},_e=a(()=>e("label",{for:"confirmation",class:"form-label"}," 再次輸入密碼： ",-1)),ve=a(()=>e("button",{type:"submit",class:"btn btn-dark d-block mx-auto py-3 w-100"}," 註冊 ",-1)),he={class:"mx-auto w-75 my-3 text-center fs-7 text-delete"};function we(o,s,y,k,V,U){const p=m("RouterLink"),i=m("VField"),d=m("ErrorMessage"),_=m("VForm");return c(),f("div",q,[e("h1",null,[t(p,{to:"/",class:"login-logo navbar-brand nav-link d-flex"},{default:g(()=>[N]),_:1})]),e("div",R,[B,e("div",G,[o.logInPage?(c(),f("div",W,[T,e("button",{type:"button",class:"btn btn-outline-dark d-block mx-auto py-16 d-flex justify-content-center w-75",onClick:s[0]||(s[0]=n=>o.signInWithGoogle())},D),H,t(_,{class:"mx-auto w-75",onSubmit:s[7]||(s[7]=n=>o.logIn())},{default:g(({errors:n})=>[e("div",O,[J,t(i,{name:"email",id:"email",type:"email",rules:"required|email",class:r(["form-control fs-7",{"is-invalid":n.email}]),placeholder:"請輸入 Email",modelValue:o.logInForm.user.email,"onUpdate:modelValue":s[1]||(s[1]=l=>o.logInForm.user.email=l)},null,8,["class","modelValue"]),t(d,{class:"invalid-feedback",name:"email"})]),e("div",K,[e("div",Q,[X,e("a",{href:"#",class:"text-delete fs-7",onClick:s[2]||(s[2]=b(()=>{},["prevent"])),"data-bs-toggle":"modal","data-bs-target":"#exampleModal"}," 忘記密碼 "),e("div",Y,[e("div",Z,[e("div",ee,[se,e("div",oe,[e("div",le,[ae,I(e("input",{type:"email",class:"form-control",id:"resetPasswordEmail",placeholder:"請填寫註冊Email","onUpdate:modelValue":s[3]||(s[3]=l=>o.resetPasswordEmail=l)},null,512),[[F,o.resetPasswordEmail]])])]),e("div",te,[e("button",{type:"button",class:"btn btn-primary",onClick:s[4]||(s[4]=(...l)=>o.sendPasswordResetEmail&&o.sendPasswordResetEmail(...l))}," 送出 ")])])])])]),t(i,{name:"密碼",id:"password",type:"password",rules:"required|min:8",class:r(["form-control fs-7",{"is-invalid":n.密碼}]),placeholder:"請輸入密碼",modelValue:o.logInForm.user.password,"onUpdate:modelValue":s[5]||(s[5]=l=>o.logInForm.user.password=l)},null,8,["class","modelValue"]),t(d,{class:"invalid-feedback",name:"密碼"})]),ne,e("p",ie,[v(" 還沒有帳號嗎? "),e("a",{href:"#",class:"d-inline-block",onClick:s[6]||(s[6]=b(l=>o.logInPage=!1,["prevent"]))}," 前往註冊 ")])]),_:1})])):(c(),f("div",de,[re,t(_,{class:"mx-auto w-75",onSubmit:s[13]||(s[13]=n=>o.signUp())},{default:g(({errors:n})=>[e("div",me,[ce,t(i,{name:"姓名",id:"displayName",type:"text",rules:"required",class:r(["form-control fs-7",{"is-invalid":n.姓名}]),placeholder:"請輸入姓名",modelValue:o.signUpForm.user.displayName,"onUpdate:modelValue":s[8]||(s[8]=l=>o.signUpForm.user.displayName=l)},null,8,["class","modelValue"]),t(d,{class:"invalid-feedback",name:"姓名"})]),e("div",pe,[ue,t(i,{name:"email",id:"email",type:"email",rules:"required|email",class:r(["form-control fs-7",{"is-invalid":n.email}]),placeholder:"請輸入 Email",modelValue:o.signUpForm.user.email,"onUpdate:modelValue":s[9]||(s[9]=l=>o.signUpForm.user.email=l)},null,8,["class","modelValue"]),t(d,{class:"invalid-feedback",name:"email"})]),e("div",fe,[ge,t(i,{name:"密碼",id:"password",type:"password",rules:"required|min:8",class:r(["form-control fs-7",{"is-invalid":n.密碼}]),placeholder:"請輸入密碼",modelValue:o.signUpForm.user.password,"onUpdate:modelValue":s[10]||(s[10]=l=>o.signUpForm.user.password=l)},null,8,["class","modelValue"]),t(d,{class:"invalid-feedback",name:"密碼"})]),e("div",be,[_e,t(i,{name:"驗證密碼",id:"confirmation",type:"password",rules:"required|confirmed:@密碼",class:r(["form-control fs-7",{"is-invalid":n.驗證密碼}]),placeholder:"請再次輸入密碼",modelValue:o.signUpForm.user.confirmation,"onUpdate:modelValue":s[11]||(s[11]=l=>o.signUpForm.user.confirmation=l)},null,8,["class","modelValue"]),t(d,{class:"invalid-feedback",name:"驗證密碼"})]),ve,e("p",he,[v(" 已經有帳號? "),e("a",{href:"#",class:"d-inline-block",onClick:s[12]||(s[12]=b(l=>o.logInPage=!0,["prevent"]))}," 前往登入 ")])]),_:1})]))])])])}const ye=w(M,[["render",we],["__scopeId","data-v-c5695346"]]),ke={components:{LoginSignUp:ye},computed:{},methods:{},created(){}};function Ve(o,s,y,k,V,U){const p=m("LoginSignUp");return c(),$(p)}const $e=w(ke,[["render",Ve]]);export{$e as default};
