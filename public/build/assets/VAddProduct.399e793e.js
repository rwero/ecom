import{o as a,e as r,a as e,r as c,f as _,n as m,g as C,M as x,b as g,v,F as U,I as j,d as N}from"./app.d9929a02.js";import A from"./VRetBtn.77bd577d.js";import"./IconArrow.6c698448.js";import"./_plugin-vue_export-helper.cdc0426e.js";function L(y,h){return a(),r("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},[e("path",{"fill-rule":"evenodd",d:"M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z","clip-rule":"evenodd"})])}const $={class:"container py-4 px-6"},B={class:"grid grid-cols-1 md:grid-cols-3 gap-8 mt-4"},D={class:"col-span-1"},z=["src"],M={class:"col-span-2"},R=e("label",{for:"title",class:"block text-sm font-medium text-gray-700 mb-2"},"Title",-1),E=e("label",{for:"description",class:"block text-sm font-medium text-gray-700 my-2"},"Description",-1),F=e("label",{for:"price",class:"block text-sm font-medium text-gray-700"},"Price",-1),P={class:"flex flex-wrap gap-8 items-center justify-start my-8"},S=["for"],O=["onChange","id"],T=["src"],K={__name:"VAddProduct",emits:["back"],setup(y,{emit:h}){const l=c({title:"",description:"",price:""}),p=c(null),d=c(""),u=c([]),f=c([]),w=()=>{d.value=URL.createObjectURL(p.value.files[0])},k=i=>{f.value[i]=URL.createObjectURL(u.value[i].childNodes[0].childNodes[0].files[0])},I=()=>{f.value.push(0)},V=async()=>{console.log("the product is  : ",l.value);const i=p.value.files[0],s=new FormData;s.append("mainImage",i);let t=0;for(let n=0;n<u.value.length;n++){const b=u.value[n].childNodes[0].childNodes[0].files[0];b&&(t++,s.append(`sideImage${n}`,b))}s.append("n_images",t),s.append("title",l.value.title),s.append("description",l.value.description),s.append("price",l.value.price);const o=await N.post("/dashboard/products",s);console.log("res : ",o),o.status==200&&o.data.success?alert("Success"):alert("Error")};return(i,s)=>(a(),r("div",$,[_(A,{onBack:s[0]||(s[0]=t=>h("back"))}),e("div",B,[e("div",D,[e("div",{class:m(["border border-dashed border-gray-600 rounded-lg aspect-1 overflow-hidden",d.value?"border-none":""])},[e("label",{for:"mainImage",class:m(["flex items-center justify-center h-full",d.value?"hidden":""])},[e("input",{type:"file",id:"mainImage",accept:"image/*",class:"hidden",ref_key:"mainImage",ref:p,onChange:w},null,544),_(C(L),{class:"w-10 h-10"})],2),d.value?(a(),r("img",{key:0,src:d.value,class:"object-cover h-full w-full"},null,8,z)):x("",!0)],2)]),e("div",M,[e("div",null,[R,g(e("input",{type:"text",name:"title",id:"title",class:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm","onUpdate:modelValue":s[1]||(s[1]=t=>l.value.title=t)},null,512),[[v,l.value.title]])]),e("div",null,[E,g(e("textarea",{name:"description",id:"description",rows:"5",class:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm my-2","onUpdate:modelValue":s[2]||(s[2]=t=>l.value.description=t)},null,512),[[v,l.value.description]])]),e("div",null,[F,g(e("input",{type:"text",name:"price",id:"price",class:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm","onUpdate:modelValue":s[3]||(s[3]=t=>l.value.price=t)},null,512),[[v,l.value.price]])])])]),e("div",P,[(a(!0),r(U,null,j(f.value,(t,o)=>(a(),r("div",{key:o,ref_for:!0,ref_key:"sideImages",ref:u,class:m(["rounded-lg border aspect-1 w-24 flex items-center justify-center overflow-hidden",t==0?"border  border-gray-600 border-dashed":""])},[e("label",{for:`simg${o}`,class:m([t==0?"":"hidden","w-full h-full"])},[e("input",{type:"file",onChange:n=>k(o),id:`simg${o}`,accept:"image/*",class:"hidden"},null,40,O)],10,S),t!=0?(a(),r("img",{key:0,src:t,class:"object-cover w-full h-full"},null,8,T)):x("",!0)],2))),128)),e("div",null,[e("button",{class:"text-4xl font-bold",onClick:I},"+")])]),e("div",null,[e("button",{class:"font-bold text-xl px-4 py-2 mx-4 rounded-lg",onClick:V},"Add")])]))}};export{K as default};
