import{B as C}from"./BannerCom-08485c16.js";import{C as D}from"./CoursesLoadingList-ef24f325.js";import{_ as k,m as B,b as y,r as d,o as s,c as e,e as _,d as t,h as L,f as i,w as v,F as c,k as u,t as p}from"./index-d507f7e4.js";import"./cartStore-a8b7867c.js";import{d as h}from"./dataStore-b046335f.js";import{b as S}from"./bannerStore-e950835b.js";const w={components:{BannerCom:C,CoursesLoadingList:D},computed:{...B(h,["studentData","user","userCartCourses","couponData","loading"])},methods:{...y(h,["onAuthStateChanged"]),...y(S,["getBannerInfo"]),ss(){console.log(this.studentData.payHistory);const m=["Danny","Danny","Jack","Sam","Danny"].reduce((a,r)=>(r in a?a[r]++:a[r]=1,a),{});console.log(m)}},created(){this.onAuthStateChanged(),this.getBannerInfo(new URL("/music_tutor/assets/banner-fefbe1a0.jpg",self.location).href,"購買紀錄","Payment History","詳盡紀錄，金流一目了然"),this.ss()}},H={class:"container my-32"},A={key:1,class:"text-center mt-48"},N=t("p",{class:"fs-2 fw-bold"},"無任何購買紀錄",-1),$=t("button",{type:"button",class:"btn btn-outline-primary mt-16"}," 前往購買 ",-1),R={key:2,class:"card shadow-sm"},V={class:"card-body"},F={class:"table-responsive"},I={class:"table table-hover"},P=t("thead",{class:"border-bottom-3 fw-bold"},[t("tr",{class:"align-middle"},[t("th",{scope:"col"},"購買時間"),t("th",{scope:"col"},"購買品項"),t("th",{scope:"col"},"數量"),t("th",{scope:"col"},"購買金額")])],-1),E={class:"list-unstyled"},J={class:"list-unstyled"};function T(o,m,a,r,U,q){const f=d("BannerCom"),g=d("CoursesLoadingList"),b=d("RouterLink");return s(),e(c,null,[_(f),t("div",H,[o.loading?(s(),L(g,{key:0})):i("",!0),o.studentData.payHistory.length===0&&!o.loading?(s(),e("div",A,[N,_(b,{to:"/AllCourses"},{default:v(()=>[$]),_:1})])):i("",!0),o.studentData.payHistory.length!==0&&!o.loading?(s(),e("div",R,[t("div",V,[t("div",F,[t("table",I,[P,t("tbody",null,[(s(!0),e(c,null,u(o.studentData.payHistory,n=>(s(),e("tr",{key:n},[t("td",null,p(n.timestamp),1),t("td",null,[t("ul",E,[(s(!0),e(c,null,u(n.payData.payData,l=>(s(),e("li",{key:l},p(l.courseName),1))),128))])]),t("td",null,[t("ul",J,[(s(!0),e(c,null,u(n.payData.payData,l=>(s(),e("li",{key:l}," 1 "))),128))])]),t("td",null,p(n.payData.finalTotal),1)]))),128))])])])])])):i("",!0)])],64)}const W=k(w,[["render",T]]);export{W as default};
