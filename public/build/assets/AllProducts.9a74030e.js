import{_ as b}from"./AuthenticatedLayout.d74acea7.js";import{r as d,k,l as C,o as a,e as o,f,g as i,w as x,F as h,H as j,a as e,I as p,J as u,N as A,n as B}from"./app.89b6fe59.js";import{b as L}from"./functions.0fa17830.js";import"./ApplicationLogo.3d49192e.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./TextInput.b06a54a8.js";import"./XMarkIcon.4fb3bca2.js";const E={"aria-label":"Breadcrumb",class:"flex md:justify-end items-center"},P={role:"list",class:"flex items-center space-x-2"},H={key:0,class:"flex items-center"},N=["href"],S=e("svg",{width:"16",height:"20",viewBox:"0 0 16 20",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",class:"h-5 w-4 text-gray-300"},[e("path",{d:"M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z"})],-1),$={key:1,class:"mr-2 text-sm text-gray-700"},F={class:"py-2"},M={class:"max-w-7xl mx-auto"},U={class:"overflow-hidden"},V=e("h2",{class:"font-medium text-4xl text-gray-800 leading-tight p-6 lg:p-8 text-center lg:text-left"}," All Products ",-1),z={class:""},D={id:"scroll",class:"mx-auto max-w-2xl py-8 pt-0 px-6 lg:max-w-7xl lg:px-8"},I={key:0,class:"grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-4"},J={class:"min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-200 hover:opacity-75 cursor-pointer"},R=["href"],T=["src","alt"],q={class:"mt-4 sm:flex justify-between block text-center sm:text-left sm:px-1"},G={class:"text-xl sm:text-md text-gray-700"},K=["href"],O=e("span",{class:"text-[11px] text-gray-600"},"From ",-1),Q={class:"text-xl font-medium text-gray-900"},W={class:"flex justify-center items-baseline gap-2"},X=["onClick"],Y=e("div",{class:"flex justify-center items-center"},[e("div",{class:"spinner-border animate-spin inline-block w-10 h-10 border-gray-700 rounded-full",role:"status"},[e("span",{class:"visually-hidden"},"Loading...")])],-1),Z=[Y],re={__name:"AllProducts",setup(ee){let s=d(),r=d(0),c=d(!1),_=d(!1);const y=l=>(l=l/100,l.toLocaleString("en-US",{style:"currency",currency:"USD"}));async function w(){if(!c.value||_.value)return;c.value=!1;const n=await(await fetch(`/api/products?id=${r.value}`)).json();console.log("data: ",n),n.length==0&&(_.value=!0),s.value=[...s.value,...n],r.value=s.value[s.value.length-1].id,c.value=!0}async function m(){document.getElementById("scroll").getBoundingClientRect().bottom<1200&&await w()}k(async()=>{const n=await(await fetch(`/api/products?id=${r.value}`)).json();console.log("the data : ",n),s.value=n,console.log("products: ",s.value),r.value=s.value[s.value.length-1].id,c.value=!0,window.addEventListener("scroll",m)}),C(()=>{window.removeEventListener("scroll",m)});const g=d([{id:1,name:"Home",href:"#"},{id:2,name:"All Products",href:"#"}]);return(l,n)=>(a(),o(h,null,[f(i(j),{title:"All Products"}),f(b,null,{header:x(()=>[e("nav",E,[e("ol",P,[(a(!0),o(h,null,p(g.value,(t,v)=>(a(),o("li",{key:t.id},[v+1<g.value.length?(a(),o("div",H,[e("a",{href:t.href,class:"mr-2 text-sm font-bold text-gray-900"},u(t.name),9,N),S])):(a(),o("div",$,u(t.name),1))]))),128))])])]),main:x(()=>[e("div",F,[e("div",M,[e("div",U,[V,e("div",z,[e("div",D,[i(r)?(a(),o("div",I,[(a(!0),o(h,null,p(i(s),t=>(a(),o("div",{key:t.id,class:"relative"},[e("div",J,[e("a",{href:l.route("products.show",t.id),class:"block"},[e("img",{src:t.images[0].path,alt:t.imageAlt,class:"h-full w-full object-cover object-center lg:h-full lg:w-full"},null,8,T)],8,R)]),e("div",q,[e("div",null,[e("h3",G,[e("a",{href:l.route("products.show",t.id)},u(t.title),9,K)]),O,e("span",Q,u(y(t.price)),1)]),e("div",W,[e("button",{class:"mt-1 border border-gray-500 py-2 w-1/2 sm:w-28 text-md text-gray-500 hover:text-gray-700",onClick:v=>i(L)(t,1)}," Add to cart ",8,X)])])]))),128))])):A("",!0)])])])])]),e("div",{class:B(["px-4 py-12",i(c)&&i(_)?"hidden":""])},Z,2)]),_:1})],64))}};export{re as default};
