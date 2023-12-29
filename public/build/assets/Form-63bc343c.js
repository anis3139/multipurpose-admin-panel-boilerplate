import{p as l,u as x,o as h,g as k,d as e,t as r,j as m,Z as c,b as t,a as i,f as v}from"./app-a07534fc.js";import{_ as d}from"./InputError-819a2731.js";const w={class:"py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12"},j={class:"text-lg font-medium text-gray-900 dark:text-gray-50"},I=["onSubmit"],V={for:"first-name",class:"block text-sm font-medium text-gray-900 dark:text-gray-50"},N={class:"mt-1"},S={class:"flex justify-between"},U={for:"last-name",class:"block text-sm font-medium text-gray-900 dark:text-gray-50"},B={id:"last-name-optional",class:"text-sm text-gray-500 dark:text-gray-300"},D={class:"mt-1"},E={for:"email",class:"block text-sm font-medium text-gray-900 dark:text-gray-50"},F={class:"mt-1"},M={class:"flex justify-between"},T={for:"phone",class:"block text-sm font-medium text-gray-900 dark:text-gray-50"},C={id:"phone-optional",class:"text-sm text-gray-500 dark:text-gray-300"},O={class:"mt-1"},P={class:"sm:col-span-2"},Z={for:"subject",class:"block text-sm font-medium text-gray-900 dark:text-gray-50"},$={class:"mt-1"},q={class:"sm:col-span-2"},z={class:"flex justify-between"},A={for:"message",class:"block text-sm font-medium text-gray-900 dark:text-gray-50"},G={id:"message-max",class:"text-sm text-gray-500 dark:text-gray-300"},H={class:"mt-1"},J={class:"sm:col-span-2 sm:flex sm:justify-end"},K={type:"submit",class:"mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-cyan-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 sm:w-auto"},W={__name:"Form",setup(L){const u=l(null),f=l(null),p=l(null),_=l(null),g=l(null),y=l(null),s=x({first_name:"",last_name:"",email:"",phone:"",subject:"",message:""}),b=()=>{s.post(route("contact.store"),{preserveScroll:!0,onSuccess:()=>s.reset(),onError:()=>{s.errors.first_name&&u.value.focus(),s.errors.last_name&&f.value.focus(),s.errors.email&&p.value.focus(),s.errors.phone&&_.value.focus(),s.errors.subject&&g.value.focus(),s.errors.message&&y.value.focus()}})};return(o,a)=>(h(),k("div",w,[e("h3",j,r(o.__("contact.form.title")),1),e("form",{onSubmit:v(b,["prevent"]),method:"POST",class:"mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"},[e("div",null,[e("label",V,r(o.__("contact.form.first_name")),1),e("div",N,[m(e("input",{type:"text",name:"first-name",id:"first-name",ref_key:"firstNameInput",ref:u,"onUpdate:modelValue":a[0]||(a[0]=n=>t(s).first_name=n),autocomplete:"given-first_name",class:"block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-cyan-500 focus:ring-cyan-500"},null,512),[[c,t(s).first_name]]),i(d,{message:t(s).errors.first_name,class:"mt-2 col-start-2 col-span-4"},null,8,["message"])])]),e("div",null,[e("div",S,[e("label",U,r(o.__("contact.form.last_name")),1),e("span",B,r(o.__("contact.form.last_name_optional")),1)]),e("div",D,[m(e("input",{type:"text",name:"last-name",id:"last-name",ref_key:"lastNameInput",ref:f,"onUpdate:modelValue":a[1]||(a[1]=n=>t(s).last_name=n),autocomplete:"family-last_name",class:"block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-cyan-500 focus:ring-cyan-500"},null,512),[[c,t(s).last_name]]),i(d,{message:t(s).errors.last_name,class:"mt-2 col-start-2 col-span-4"},null,8,["message"])])]),e("div",null,[e("label",E,r(o.__("contact.form.email")),1),e("div",F,[m(e("input",{id:"email",name:"email",type:"email",ref_key:"emailInput",ref:p,"onUpdate:modelValue":a[2]||(a[2]=n=>t(s).email=n),autocomplete:"email",class:"block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-cyan-500 focus:ring-cyan-500"},null,512),[[c,t(s).email]]),i(d,{message:t(s).errors.email,class:"mt-2 col-start-2 col-span-4"},null,8,["message"])])]),e("div",null,[e("div",M,[e("label",T,r(o.__("contact.form.phone")),1),e("span",C,r(o.__("contact.form.phone_optional")),1)]),e("div",O,[m(e("input",{type:"text",name:"phone",id:"phone",ref_key:"phoneInput",ref:_,"onUpdate:modelValue":a[3]||(a[3]=n=>t(s).phone=n),autocomplete:"tel",class:"block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-cyan-500 focus:ring-cyan-500","aria-describedby":"phone-optional"},null,512),[[c,t(s).phone]]),i(d,{message:t(s).errors.phone,class:"mt-2 col-start-2 col-span-4"},null,8,["message"])])]),e("div",P,[e("label",Z,r(o.__("contact.form.subject")),1),e("div",$,[m(e("input",{type:"text",name:"subject",id:"subject",ref_key:"subjectInput",ref:g,"onUpdate:modelValue":a[4]||(a[4]=n=>t(s).subject=n),class:"block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-cyan-500 focus:ring-cyan-500"},null,512),[[c,t(s).subject]]),i(d,{message:t(s).errors.subject,class:"mt-2 col-start-2 col-span-4"},null,8,["message"])])]),e("div",q,[e("div",z,[e("label",A,r(o.__("contact.form.message")),1),e("span",G,r(o.__("contact.form.subject_taxt_max")),1)]),e("div",H,[m(e("textarea",{id:"message",name:"message",rows:"4",ref_key:"messageInput",ref:y,"onUpdate:modelValue":a[5]||(a[5]=n=>t(s).message=n),class:"block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-cyan-500 focus:ring-cyan-500","aria-describedby":"message-max"},null,512),[[c,t(s).message]]),i(d,{message:t(s).errors.message,class:"mt-2 col-start-2 col-span-4"},null,8,["message"])])]),e("div",J,[e("button",K,r(o.__("contact.form.submit")),1)])],40,I)]))}};export{W as default};
