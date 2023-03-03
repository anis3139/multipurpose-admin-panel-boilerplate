import{i as c,v as _,h as m,b as a,a as e,u as r,w as i,R as y,e as g,o as w,d as v,q as x}from"./app-eea0771b.js";import{a as l,_ as n}from"./InputLabel-f2981d79.js";import{_ as V}from"./PrimaryButton-a2add19b.js";import{_ as d}from"./TextInput-e684ca7e.js";const k=a("header",null,[a("h2",{class:"text-lg font-medium text-gray-900 dark:text-gray-100"}," Update Password "),a("p",{class:"mt-1 text-sm text-gray-600 dark:text-gray-400"}," Ensure your account is using a long, random password to stay secure. ")],-1),b=["onSubmit"],P={class:"flex items-center gap-4"},S={key:0,class:"text-sm text-gray-600 dark:text-gray-400"},B={__name:"UpdatePasswordForm",setup(N){const u=c(null),p=c(null),s=_({current_password:"",password:"",password_confirmation:""}),f=()=>{s.put(route("password.update"),{preserveScroll:!0,onSuccess:()=>s.reset(),onError:()=>{s.errors.password&&(s.reset("password","password_confirmation"),u.value.focus()),s.errors.current_password&&(s.reset("current_password"),p.value.focus())}})};return(U,o)=>(w(),m("section",null,[k,a("form",{onSubmit:g(f,["prevent"]),class:"mt-6 space-y-6"},[a("div",null,[e(n,{for:"current_password",value:"Current Password"}),e(d,{id:"current_password",ref_key:"currentPasswordInput",ref:p,modelValue:r(s).current_password,"onUpdate:modelValue":o[0]||(o[0]=t=>r(s).current_password=t),type:"password",class:"mt-1 block w-full",autocomplete:"current-password"},null,8,["modelValue"]),e(l,{message:r(s).errors.current_password,class:"mt-2"},null,8,["message"])]),a("div",null,[e(n,{for:"password",value:"New Password"}),e(d,{id:"password",ref_key:"passwordInput",ref:u,modelValue:r(s).password,"onUpdate:modelValue":o[1]||(o[1]=t=>r(s).password=t),type:"password",class:"mt-1 block w-full",autocomplete:"new-password"},null,8,["modelValue"]),e(l,{message:r(s).errors.password,class:"mt-2"},null,8,["message"])]),a("div",null,[e(n,{for:"password_confirmation",value:"Confirm Password"}),e(d,{id:"password_confirmation",modelValue:r(s).password_confirmation,"onUpdate:modelValue":o[2]||(o[2]=t=>r(s).password_confirmation=t),type:"password",class:"mt-1 block w-full",autocomplete:"new-password"},null,8,["modelValue"]),e(l,{message:r(s).errors.password_confirmation,class:"mt-2"},null,8,["message"])]),a("div",P,[e(V,{disabled:r(s).processing},{default:i(()=>[v("Save")]),_:1},8,["disabled"]),e(y,{"enter-from-class":"opacity-0","leave-to-class":"opacity-0",class:"transition ease-in-out"},{default:i(()=>[r(s).recentlySuccessful?(w(),m("p",S," Saved. ")):x("",!0)]),_:1})])],40,b)]))}};export{B as default};
