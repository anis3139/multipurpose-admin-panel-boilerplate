import{u as p,r as k,o as l,c as d,w as i,a as s,b as o,H as y,d as r,t as a,g as x,h as c,e as m,n as h,f as v}from"./app-a07534fc.js";import{_ as b}from"./InputError-819a2731.js";import{_ as w}from"./InputLabel-0d88b11e.js";import{_ as V}from"./PrimaryButton-f1dd44c4.js";import{_ as B}from"./TextInput-6d371888.js";import{_ as $}from"./GuestLayout-8f04497b.js";import"./Toast-95869260.js";import"./defaultFile-233481e1.js";import"./toast-49ee1775.js";const C={class:"mb-4 text-sm text-gray-600 dark:text-gray-400"},N={key:0,class:"mb-4 font-medium text-sm text-green-600 dark:text-green-400"},S=["onSubmit"],F={class:"flex items-center justify-end mt-4"},j={class:"flex items-center justify-between mt-5 space-x-2"},T={__name:"ForgotPassword",props:{status:String,canRegister:Boolean},setup(n){const t=p({email:""}),g=()=>{t.post(route("password.email"))};return(e,f)=>{const u=k("Link");return l(),d($,null,{default:i(()=>[s(o(y),{title:"Forgot Password"}),r("div",C,a(e.__("forget.heading")),1),n.status?(l(),x("div",N,a(n.status),1)):c("",!0),r("form",{onSubmit:v(g,["prevent"])},[r("div",null,[s(w,{for:"email",value:e.__("forget.form.email")},null,8,["value"]),s(B,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:o(t).email,"onUpdate:modelValue":f[0]||(f[0]=_=>o(t).email=_),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),s(b,{class:"mt-2",message:o(t).errors.email},null,8,["message"])]),r("div",F,[s(V,{class:h({"opacity-25":o(t).processing}),disabled:o(t).processing},{default:i(()=>[m(a(e.__("forget.link")),1)]),_:1},8,["class","disabled"])]),r("div",j,[s(u,{class:"underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800",href:e.route("login")},{default:i(()=>[m(a(e.__("forget.login_link_text")),1)]),_:1},8,["href"]),n.canRegister?(l(),d(u,{key:0,href:e.route("register"),class:"underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"},{default:i(()=>[m(a(e.__("forget.registration_link")),1)]),_:1},8,["href"])):c("",!0)])],40,S)]),_:1})}}};export{T as default};
