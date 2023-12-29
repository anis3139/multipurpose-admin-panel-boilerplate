import{p as i,u as F,x as N,o as S,g as T,a as t,w as K,d as r,b as s,s as c,e as j,n as A}from"./app-a07534fc.js";import{_ as u}from"./InputError-819a2731.js";import{_ as n}from"./InputLabel-0d88b11e.js";import{_ as L,a as M}from"./SecondaryButton-e6cce7b4.js";import{_ as P}from"./Textarea-1fe62e1d.js";import{_ as p}from"./TextInput-6d371888.js";import{u as R}from"./useCountries-62ba1c05.js";import{s as Z}from"./default.css_vue_type_style_index_0_src_true_lang-5ba86734.js";const q={class:"p-6 bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-50"},D={action:""},G={class:"p-2 sm:p-4 space-y-2 sm:space-y-5 w-full"},H={class:"p-2 sm:p-4 space-y-2 sm:space-y-5 w-full"},J={class:"p-2 sm:p-4 space-y-2 sm:space-y-5 w-full"},O={class:"p-2 sm:p-4 space-y-2 sm:space-y-5 w-full"},Q={class:"p-2 sm:p-4 space-y-2 sm:space-y-5 w-full"},W={class:"p-2 sm:p-4 space-y-2 sm:space-y-5 w-full"},X={class:"p-2 sm:p-4 space-y-2 sm:space-y-5 w-full"},Y={class:"mt-6 flex justify-end"},ee=["disabled"],ue={__name:"EditForm",props:["modelValue","address"],emits:["update:modelValue"],setup(f,{emit:C}){var x,w,h,z,I,U;const d=f,{userCountry:m,countries:$}=R(),y=()=>{C("update:modelValue",!1)},_=i(null),g=i(null),V=i(null),b=i(null),k=i(null),B=i(null),v=i(null),e=F({title:(x=d.address)==null?void 0:x.title,address:(w=d.address)==null?void 0:w.address,city:(h=d.address)==null?void 0:h.city,state:(z=d.address)==null?void 0:z.state,district:(I=d.address)==null?void 0:I.district,zip_code:(U=d.address)==null?void 0:U.zip_code,country:m==null?void 0:m.country});N(()=>d.address,l=>{l&&(e.title=l.title,e.address=l.address,e.city=l.city,e.state=l.state,e.district=l.district,e.zip_code=l.zip_code,e.country=l.country)});const E=l=>{e.post(route("address.update",d.address.id),{preserveScroll:!0,onSuccess:()=>y(),onError:()=>{e.errors.title&&_.value.focus(),e.errors.address&&g.value.focus(),e.errors.city&&V.value.focus(),e.errors.state&&b.value.focus(),e.errors.district&&k.value.focus(),e.errors.zip_code&&B.value.focus(),e.errors.country&&v.value.focus()},onFinish:()=>e.reset()})};return(l,o)=>(S(),T("section",null,[t(L,{show:f.modelValue,onClose:y},{default:K(()=>[r("div",q,[r("form",D,[r("div",G,[t(n,{for:"title",value:"Title: ",class:"text-xl"}),t(p,{id:"title",ref_key:"titleInput",ref:_,modelValue:s(e).title,"onUpdate:modelValue":o[0]||(o[0]=a=>s(e).title=a),type:"title",class:"block w-full h-8 p-1",onKeyup:c(l.deleteUser,["enter"])},null,8,["modelValue","onKeyup"]),t(u,{message:s(e).errors.title,class:"mt-2"},null,8,["message"])]),r("div",H,[t(n,{for:"address",value:"Address: ",class:"text-xl"}),t(P,{id:"address",ref_key:"addresslInput",ref:g,modelValue:s(e).address,"onUpdate:modelValue":o[1]||(o[1]=a=>s(e).address=a),type:"address",class:"block w-full h-8 p-1",onKeyup:c(l.deleteUser,["enter"])},null,8,["modelValue","onKeyup"]),t(u,{message:s(e).errors.address,class:"mt-2"},null,8,["message"])]),r("div",J,[t(n,{for:"city",value:"city: ",class:"text-xl"}),t(p,{id:"city",ref_key:"cityInput",ref:V,modelValue:s(e).city,"onUpdate:modelValue":o[2]||(o[2]=a=>s(e).city=a),type:"city",class:"block w-full h-8 p-1",onKeyup:c(l.deleteUser,["enter"])},null,8,["modelValue","onKeyup"]),t(u,{message:s(e).errors.city,class:"mt-2"},null,8,["message"])]),r("div",O,[t(n,{for:"state",value:"State: ",class:"text-xl"}),t(p,{id:"state",ref_key:"stateInput",ref:b,modelValue:s(e).state,"onUpdate:modelValue":o[3]||(o[3]=a=>s(e).state=a),type:"state",class:"block w-full p-1",onKeyup:c(l.deleteUser,["enter"])},null,8,["modelValue","onKeyup"]),t(u,{message:s(e).errors.state,class:"mt-2"},null,8,["message"])]),r("div",Q,[t(n,{for:"district",value:"district: ",class:"text-xl"}),t(p,{id:"district",ref_key:"districtInput",ref:k,modelValue:s(e).district,"onUpdate:modelValue":o[4]||(o[4]=a=>s(e).district=a),type:"district",class:"block w-full h-8 p-1",onKeyup:c(l.deleteUser,["enter"])},null,8,["modelValue","onKeyup"]),t(u,{message:s(e).errors.district,class:"mt-2"},null,8,["message"])]),r("div",W,[t(n,{for:"zip_code",value:"Zip Code: ",class:"text-xl"}),t(p,{id:"zip_code",ref:"zipCodeInput",modelValue:s(e).zip_code,"onUpdate:modelValue":o[5]||(o[5]=a=>s(e).zip_code=a),type:"zip_code",class:"block w-full h-8 p-1",onKeyup:c(l.deleteUser,["enter"])},null,8,["modelValue","onKeyup"]),t(u,{message:s(e).errors.zip_code,class:"mt-2"},null,8,["message"])]),r("div",X,[t(n,{for:"country",value:"Country: ",class:"text-xl"}),t(s(Z),{modelValue:s(e).country,"onUpdate:modelValue":o[6]||(o[6]=a=>s(e).country=a),options:s($),selected:s(e).country,placeholder:"Pick some...",ref_key:"countryInput",ref:v,class:"block w-full multiselect-green form-controll dark:text-black",searchable:!0,classes:{search:" border-none border-l-0 rounded-sm mr-2  text-gray-900 bg-gray-200  dark:text-gray-50 dark:bg-gray-800",singleLabelText:"  bg-[#10B981] rounded py-0.5 px-3 text-sm  text-white font-semibold"},id:"country"},null,8,["modelValue","options","selected"]),t(u,{message:s(e).errors.country,class:"mt-2"},null,8,["message"])]),r("div",Y,[t(M,{onClick:y},{default:K(()=>[j(" Cancel ")]),_:1}),r("button",{class:A(["ml-3 btn btn-primary",{"opacity-25":s(e).processing}]),disabled:s(e).processing,onClick:E}," Update ",10,ee)])])])]),_:1},8,["show"])]))}};export{ue as default};
