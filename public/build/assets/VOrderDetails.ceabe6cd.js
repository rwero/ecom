import{r as m,o as n,e as i,g as o,a as e,f as w,J as l,b as k,O as D,F as v,I as y,R as b,M as p,c as V,d as S,p as j,j as B,K as x}from"./app.27d7f9b4.js";import O from"./VRetBtn.70affa28.js";import{u as I}from"./data.cb73cd1f.js";import N from"./VClientProfile.a719d2de.js";import{f as u}from"./functions.0fa17830.js";import{_ as $}from"./_plugin-vue_export-helper.cdc0426e.js";import"./IconArrow.d210ad04.js";const a=t=>(j("data-v-8c53632a"),t=t(),B(),t),T={key:0,class:"order-container"},C={class:"container-main"},M={class:"order-wrapper"},R={style:{opacity:"0.6"}},q={class:"order-status"},F=["value"],P={class:"table-responsive table-card my-4 mx-0 overflow-auto rounded-xl",style:{border:"1px solid var(--vz-border-color)"}},U={class:"table table-nowrap align-middle mb-0",style:{"vertical-align":"middle",width:"100%"}},z=a(()=>e("thead",{class:"table-light text-muted"},[e("tr",null,[e("th",null,"Product Details"),e("th",null,"Note"),e("th",null,"Quantity"),e("th",null,"Item Price"),e("th",null," Total ")])],-1)),E={class:"",style:{display:"flex","align-items":"center"}},G={class:"",style:{width:"6rem","border-radius":"0.25rem",padding:"0.25rem","flex-shrink":"0"}},J=["src"],K={class:"flex-grow-1 ms-3",style:{"margin-left":"1rem","flex-grow":"1"}},L={class:"fs-15",style:{"font-weight":"500"}},Q={style:{"text-align":"center"}},A={class:"mr-8 justify-end flex"},H={class:"table table-borderless mb-0 max-w-[300px]"},W=a(()=>e("td",null,"Sous Total :",-1)),X={class:"text-end"},Y=a(()=>e("tr",null,[e("td",null,[x(" Discount "),e("span",{class:"text-muted"}),x(" : ")]),e("td",{class:"text-end"})],-1)),Z=a(()=>e("td",null,"Delivery fee :",-1)),ee={class:"text-end"},te=a(()=>e("tr",null,[e("td",null,"Service fee"),e("td",{class:"text-end"})],-1)),se={class:"border-top border-top-dashed"},le=a(()=>e("th",{style:{"border-top":"1px dashed"}}," Total : ",-1)),oe={class:"text-end",style:{"border-top":"1px dashed"}},re={class:"container-aside"},de={class:"card"},ae={style:{display:"flex","justify-content":"space-between"}},ne=a(()=>e("h5",null,"Details clients",-1)),ie={style:{display:"grid","grid-template-columns":"1fr 1fr",gap:"1rem"}},ce=a(()=>e("div",null,[e("img",{src:"/logo.svg",style:{width:"100%","max-height":"200px","object-fit":"cover","object-position":"center"},alt:""})],-1)),ue={__name:"VOrderDetails",props:{order:Object},emits:["back"],setup(t){const _=t,h=I();m(null),m(""),m("");let r=m(null);async function g(){console.log(_.order.order_state);try{(await S.post("/dashboard/orderstate",{order_id:_.order.id,state_id:_.order.order_state.id})).data.success&&console.log("success"),alert("Success")}catch(f){alert(f)}}return(f,d)=>(n(),i(v,null,[o(r)?p("",!0):(n(),i("div",T,[e("div",C,[e("div",M,[w(O,{onBack:d[0]||(d[0]=s=>this.$emit("back"))}),e("h5",null,"Order N\xB0 "+l(t.order.id),1),e("p",R,l(`${new Date(t.order.created_at)}`.split("GMT")[0]),1),e("div",q,[k(e("select",{name:"",id:"","onUpdate:modelValue":d[1]||(d[1]=s=>t.order.order_state=s),onChange:g,class:"rounded-lg max-w-[200px]"},[(n(!0),i(v,null,y(o(h).data.order_states,s=>(n(),i("option",{value:s,key:s.id},l(s.state),9,F))),128))],544),[[D,t.order.order_state]])]),e("div",P,[e("table",U,[z,e("tbody",null,[(n(!0),i(v,null,y(_.order.order_products,(s,c)=>(n(),i("tr",{key:c},[e("td",null,[e("div",E,[e("div",G,[e("img",{src:s.product.images[0].path,alt:"",class:"rounded-md w-full object-center object-cover align-middle"},null,8,J)]),e("div",K,[e("h5",L,l(s.product.title),1)])])]),e("td",null,l(s.note),1),e("td",Q,l(s.quantity),1),e("td",null,l(o(u)(s.product.price)),1),e("td",null,l(o(u)(s.product.price*s.quantity)),1)]))),128))])])]),e("div",A,[e("table",H,[e("tbody",null,[e("tr",null,[W,e("td",X,l(o(u)(t.order.subtotal)),1)]),Y,e("tr",null,[Z,e("td",ee,l(o(u)(t.order.delivery_fee)),1)]),te,e("tr",se,[le,e("th",oe,l(o(u)(t.order.subtotal+t.order.delivery_fee))+" Da ",1)])])])])])]),e("div",re,[e("div",de,[e("div",ae,[ne,e("button",{class:"btn-link",onClick:d[2]||(d[2]=s=>b(r)?r.value=o(h).data.clients.filter(c=>c.id=t.order.user_id)[0]:r=o(h).data.clients.filter(c=>c.id=t.order.user_id)[0])},"Voir profile")]),e("div",ie,[ce,e("div",null,[e("p",null,l(t.order.first_name)+" "+l(t.order.last_name),1),e("p",null,l(t.order.email),1)])])])])])),o(r)?(n(),V(N,{key:1,client:o(r),onBack:d[3]||(d[3]=s=>b(r)?r.value=null:r=null)},null,8,["client"])):p("",!0)],64))}},pe=$(ue,[["__scopeId","data-v-8c53632a"]]);export{pe as default};
