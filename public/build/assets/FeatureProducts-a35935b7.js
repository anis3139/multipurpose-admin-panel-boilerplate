import{r as g,o as s,g as a,d as e,t as o,F as m,m as u,h,a as i,w as n,e as _}from"./app-a07534fc.js";const p={key:0,class:"bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-50 mt-5"},x={class:"mx-auto max-w-full overflow-hidden sm:px-6 lg:px-8"},f={class:"text-center mb-5 md:mb-7"},b={class:"text-2xl md:text-4xl mb-2"},y={class:"-mx-px grid grid-cols-2 border-l border-gray-200 sm:mx-0 md:grid-cols-3 lg:grid-cols-4"},k={class:"aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-50 group-hover:opacity-75"},v=["src","alt"],w={class:"pt-10 pb-4 text-center"},N={class:"text-sm font-medium bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-50"},j={__name:"FeatureProducts",props:{featuredProducts:Object},setup(d){return(r,P)=>{var l;const c=g("Link");return((l=d.featuredProducts)==null?void 0:l.length)>0?(s(),a("div",p,[e("div",x,[e("div",f,[e("h1",b,o(r.__("featured.product.title")),1),e("p",null,o(r.__("featured.product.description")),1)]),e("div",y,[(s(!0),a(m,null,u(d.featuredProducts,t=>(s(),a("div",{key:t.id,class:"group border border-gray-200 p-4 sm:p-6 mr-[1px] sm:mr-0"},[e("div",k,[i(c,{href:r.route("product.show",t.slug)},{default:n(()=>[e("img",{src:t.image,alt:t.image,class:"h-full w-full object-cover object-center"},null,8,v)]),_:2},1032,["href"])]),e("div",w,[e("h3",N,[i(c,{href:r.route("product.show",t.slug)},{default:n(()=>[_(o(t.title),1)]),_:2},1032,["href"])])])]))),128))])])])):h("",!0)}}};export{j as default};
