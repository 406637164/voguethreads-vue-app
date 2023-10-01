(function(){"use strict";var t={9418:function(t,e,a){var o=a(9242),n=a(3396);function r(t,e,a,o,r,s){const i=(0,n.up)("router-view");return(0,n.wg)(),(0,n.j4)(i)}var s=a(9320),i={components:{ProductView:s["default"]},data(){return{cartTotal:0}},provide(){return{cartTotal:this.cartTotal}},methods:{updateCartTotal(t){this.cartTotal+=t.count},updateCarts(t){this.cartTotal=t},isActive(t){return this.$route.path===t}},created(){}},c=a(89);const l=(0,c.Z)(i,[["render",r]]);var u=l,d=a(2483),h=a(7139);const p=(0,n._)("section",{class:"home",id:"home"},[(0,n._)("div",{class:"home-text"},[(0,n._)("h1",null,"秋季新品熱賣中"),(0,n._)("p",null,"發掘獨特風格，穿上VogueThreads，讓你的時尚故事獨一無二"),(0,n._)("a",{href:"/product/boy",class:"btns"},"點擊查看")])],-1),g=(0,n._)("div",{class:"container"},null,-1),m={class:"container"},f={class:"new",id:"new"},v=(0,n._)("div",{class:"center-text"},[(0,n._)("h2",null,"熱銷商品")],-1),b={class:"new-content"},_={class:"box"},w=["href"],y=["src"],T=(0,n._)("div",{class:"sale"},[(0,n._)("h4",null,"Hot")],-1),x=(0,n.uE)('<section class="new"><div class="center-text"><h2>會員專屬</h2></div><div class="d-flex items-container"><div class="item-box"><img src="https://images.unsplash.com/photo-1571989928541-674d0cf46c4a?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHJ1Y2t8ZW58MHx8MHx8fDA%3D&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60" alt=""><div class="text-overlay"><p class="looks">免費修改長度</p></div></div><div class="item-box"><img src="https://plus.unsplash.com/premium_photo-1667850562258-b77dfa54c79d?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cnVsZXJ8ZW58MHx8MHx8fDA%3D&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60" alt=""><div class="text-overlay"><p class="looks">宅配到府</p></div></div><div class="item-box"><img src="https://images.unsplash.com/photo-1546213290-e1b492ab3eee?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2hvcHxlbnwwfHwwfHx8MA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60" alt=""><div class="text-overlay"><p class="looks">店到店服務</p></div></div></div></section>',1),C=(0,n._)("footer",{class:"footer"},[(0,n._)("p",null,"© 2023 Your Website. All rights reserved.")],-1);function k(t,e,a,o,r,s){const i=(0,n.up)("Navbar");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(i,{cartTotal:r.cartTotal},null,8,["cartTotal"]),p,g,(0,n._)("div",m,[(0,n._)("section",f,[v,(0,n._)("div",b,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(r.products,(t=>((0,n.wg)(),(0,n.iD)("div",_,[(0,n._)("a",{href:`/product/${t.name}`},[(0,n._)("img",{src:t.image,alt:""},null,8,y),(0,n._)("h5",null,(0,h.zw)(t.name),1),(0,n._)("h6",null,"$"+(0,h.zw)(t.price*t.discount),1),T],8,w)])))),256))])]),x]),C],64)}var S=a(971),M=a(4161),P={name:"HomeView",components:{Navbar:S.Z},data(){return{activeTab:"User",cartTotal:0,products:[]}},methods:{updateCartTotal(t){this.cartTotal=t},async getCart(){console.log(localStorage.email);try{const t=await M.Z.get(`http://localhost:3000/api/admin/userCart/${localStorage.email}`,{headers:{Authorization:`Bearer ${localStorage.token}`}}),e=t.data;console.log(e),this.cartProduct=e,localStorage.cart=e.length,this.updateCartTotal(this.cartTotal),this.cartTotal=t.data.length,this.cartTotal=t.data.reduce(((t,e)=>t+e.quantity),0)}catch(t){console.error("Login error:",t)}},async getTop(){try{const t=await M.Z.get("http://localhost:3000/api/products/top"),e=t.data;this.products=e,console.log(e)}catch(t){console.error(" error:",t)}}},created(){this.getCart(),this.getTop()}};const D=(0,c.Z)(P,[["render",k]]);var Z=D;const H=[{path:"/",name:"home",component:Z},{path:"/about",name:"about",component:()=>a.e(443).then(a.bind(a,5136))},{path:"/product/discount",redirect:"/product/discount/page=1",component:()=>a.e(18).then(a.bind(a,9320)),children:[{path:"page=:page",name:"product",component:()=>a.e(18).then(a.bind(a,9320))}]},{path:"/product/boy",redirect:"/product/boy/page=1",component:()=>a.e(18).then(a.bind(a,9600)),children:[{path:"page=:page",name:"boy",component:()=>a.e(18).then(a.bind(a,9600))}]},{path:"/product/:productName",name:"ProductDetail",component:()=>a.e(18).then(a.bind(a,7085))},{path:"/product/shirt",redirect:"/product/shirt/page=1",component:()=>a.e(18).then(a.bind(a,5839)),children:[{path:"page=:page",name:"shirt",component:()=>a.e(18).then(a.bind(a,5839))}]},{path:"/login",component:()=>a.e(852).then(a.bind(a,6852))},{path:"/cart",component:a.e(121).then(a.bind(a,1121))},{path:"/order",name:"order",component:a.e(171).then(a.bind(a,6171))},{path:"/user",name:"user",component:()=>a.e(141).then(a.bind(a,4141))},{path:"/userOrder",name:"userOrder",component:()=>a.e(519).then(a.bind(a,3519))},{path:"/manage",name:"manage",component:()=>a.e(179).then(a.bind(a,9179))}],j=(0,d.p7)({history:(0,d.PO)("/voguethreads-vue-app/"),routes:H});var A=j,N=a(6423),O=a(4951),$=(a(6744),a(7024),a(680));const E=(0,o.ri)(u);E.use(N.Z,M.Z),E.use(O.ZP),E.use(A),E.use($.Z),E.mount("#app")},971:function(t,e,a){a.d(e,{Z:function(){return M}});var o=a(3396),n=a(9242),r=a(7139);const s={ref:"header"},i=(0,o._)("a",{href:"/",class:"logo"},"VogueThreads",-1),c={class:"navlists"},l=(0,o._)("li",null,[(0,o._)("a",{href:"/"},"首頁")],-1),u=(0,o._)("a",{href:"#"},"服飾",-1),d={class:"sub-menu"},h=(0,o._)("a",{href:"/product/discount"},"促銷商品",-1),p=(0,o._)("a",{href:"/product/boy"},"秋季上衣",-1),g=(0,o._)("a",{href:"/product/shirt"},"夏季短袖",-1),m=[h,p,g],f=(0,o._)("li",null,[(0,o._)("a",{href:"/about"},"關於VogueThreads")],-1),v={class:"header-icons"},b={class:"btn-square",href:"/cart"},_={id:"cart"},w=(0,o._)("span",{class:"bi bi-cart"},null,-1),y=["textContent"],T=(0,o._)("a",{class:"btn-square",href:"/user"},[(0,o._)("button",{id:"member"},[(0,o._)("span",{class:"bi bi-person-circle"})])],-1);function x(t,e,a,h,p,g){return(0,o.wg)(),(0,o.iD)("header",s,[i,(0,o._)("ul",c,[l,(0,o._)("li",{onMouseenter:e[0]||(e[0]=(...t)=>g.showSubMenu&&g.showSubMenu(...t)),onMouseleave:e[1]||(e[1]=(...t)=>g.hideSubMenu&&g.hideSubMenu(...t))},[u,(0,o.wy)((0,o._)("div",d,m,512),[[n.F8,p.isSubMenuVisible]])],32),f]),(0,o._)("div",v,[(0,o._)("a",b,[(0,o._)("button",_,[w,(0,o._)("span",{class:"cart-num badge-danger",textContent:(0,r.zw)(a.cartTotal)},null,8,y)])]),T])],512)}var C={name:"couponModal",props:["cartTotal"],data(){return{cartTotals:this.cartTotal,isSubMenuVisible:!1}},watch:{cartTotal(t){console.log(t),this.$emit("cartTotal",t)}},methods:{async getCart(){this.$emit("cartTotal",this.cartTotals)},showSubMenu(){this.isSubMenuVisible=!0},hideSubMenu(){this.isSubMenuVisible=!1}},mounted(){const t=this.$refs.header;window.addEventListener("scroll",(()=>{t.classList.toggle("sticky",window.scrollY>0)}))},created(){this.getCart()}},k=a(89);const S=(0,k.Z)(C,[["render",x]]);var M=S},9336:function(t,e,a){a.d(e,{Z:function(){return d}});var o=a(3396);const n={class:"page_404"},r=(0,o.uE)('<div class="container"><div class="row"><div class="col-sm-12 d-flex justify-content-center"><div class="col-sm-10 col-sm-offset-1 text-center"><div class="four_zero_four_bg"><h1 class="text-center">404</h1></div><div class="contant_box_404"><h3 class="h2">找不到網頁</h3></div></div></div></div></div>',1),s=[r];function i(t,e){return(0,o.wg)(),(0,o.iD)("section",n,s)}var c=a(89);const l={},u=(0,c.Z)(l,[["render",i]]);var d=u},9320:function(t,e,a){a.r(e),a.d(e,{default:function(){return W}});var o=a(3396),n=a(9242),r=a(7139);const s={key:0,class:"loading-overlay"},i=(0,o._)("div",{class:"spinner-border text-primary",role:"status"},[(0,o._)("span",{class:"visually-hidden"},"Loading...")],-1),c=[i],l=(0,o._)("div",{class:"boy"},[(0,o._)("div",{class:"txt"},"促銷商品")],-1),u={class:"container"},d={class:"container-fluid searchBar-container"},h={class:"d-flex justify-content-end",role:"search"},p={class:"btn-group position-ralative",role:"group","aria-label":"Basic example"},g={class:"searchlist"},m={key:0},f=["href"],v=["src"],b={class:"row"},_={class:"product-list"},w={class:"box"},y=["href"],T=["src"],x=(0,o._)("i",{class:"bx bxs-right-arrow-alt"},null,-1),C={class:"discounts"},k={class:"cart"},S=["onClick"],M=(0,o._)("i",{class:"bx bx-shopping-bag"},null,-1),P=[M],D={key:1,"aria-label":"...",class:"pagination-container"},Z={class:"pagination"},H={class:"page-item"},j={class:"page-item","aria-current":"page"},A=["onClick"],N={class:"page-item"},O=(0,o._)("footer",{class:"footer"},[(0,o._)("p",null,"© 2023 Your Website. All rights reserved.")],-1);function $(t,e,a,i,M,$){const E=(0,o.up)("Navbar"),z=(0,o.up)("NoFound");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(E,{cartTotal:M.cartTotal},null,8,["cartTotal"]),M.isLoading?((0,o.wg)(),(0,o.iD)("div",s,c)):(0,o.kq)("",!0),l,(0,o._)("div",u,[(0,o._)("div",d,[(0,o._)("form",h,[(0,o._)("div",p,[(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>M.searchText=t),class:"form-control me-2",type:"search",onInput:e[1]||(e[1]=(...t)=>$.handleInput&&$.handleInput(...t)),placeholder:"找尋產品","aria-label":"Search"},null,544),[[n.nr,M.searchText]]),(0,o._)("div",g,[M.searchText.length>0?((0,o.wg)(),(0,o.iD)("div",m,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(M.searchResults,(t=>((0,o.wg)(),(0,o.iD)("div",{key:t,class:"d-flex"},[(0,o._)("a",{href:`http://localhost:8080/product/${t.name}`,class:"searchResults"},[(0,o._)("img",{src:t.image,alt:"",class:"searchimg"},null,8,v),(0,o._)("span",null,(0,r.zw)(t.name),1)],8,f)])))),128))])):(0,o.kq)("",!0)])])])]),M.isnofound?((0,o.wg)(),(0,o.j4)(z,{key:0})):(0,o.kq)("",!0),(0,o._)("div",b,[(0,o._)("div",_,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(M.products,(t=>((0,o.wg)(),(0,o.iD)("div",w,[(0,o._)("a",{href:`/product/${t.name}`,class:"productlink"},[(0,o._)("img",{src:t.image,alt:""},null,8,T),(0,o._)("h5",null,(0,r.zw)(t.name),1),(0,o._)("h6",null,[(0,o._)("del",null,"原價 NT"+(0,r.zw)(t.price)+"元",1),x,(0,o._)("span",C,"打"+(0,r.zw)(10*t.discount)+"折",1)]),(0,o._)("h6",null,"優惠價 NT"+(0,r.zw)(t.discount*t.price)+"元",1)],8,y),(0,o._)("div",k,[(0,o._)("button",{type:"button",class:"btn btn-outline-danger",onClick:e=>$.addToCart(t,1)},P,8,S)])])))),256))])]),M.currentpage<=M.totalPage?((0,o.wg)(),(0,o.iD)("nav",D,[(0,o._)("ul",Z,[(0,o._)("li",H,[(0,o._)("a",{class:(0,r.C_)(["page-link",{disabled:1===M.currentpage}]),href:"#",onClick:e[2]||(e[2]=t=>$.setPage(M.currentpage-1))},"Previous",2)]),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(M.totalPage,(t=>((0,o.wg)(),(0,o.iD)("li",j,[(0,o._)("a",{class:(0,r.C_)(["page-link",{active:M.currentpage==t}]),onClick:e=>$.setPage(t),href:"#"},(0,r.zw)(t),11,A)])))),256)),(0,o._)("li",N,[(0,o._)("a",{class:(0,r.C_)(["page-link",{disabled:M.currentpage===M.totalPage}]),href:"#",onClick:e[3]||(e[3]=t=>$.setPage(+this.$route.params.page+1))},"Next",2)])])])):(0,o.kq)("",!0)]),O],64)}a(7658);var E=a(4161),z=a(9336),L=a(2492),q=a.n(L),B=a(971),Y={name:"HomeView",components:{NoFound:z.Z,Navbar:B.Z},data(){return{products:[],isLoading:!1,currentpage:+this.$route.params.page,isnofound:!1,totalPage:"",cartTotal:0,cartProduct:[],searchText:"",searchResults:[],searchText:"",keywords:[],searchTimer:null}},methods:{handleInput(){clearTimeout(this.searchTimer),this.searchTimer=setTimeout((()=>{this.updateSearchResults()}),500)},async updateSearchResults(){const t=await E.Z.get("http://localhost:3000/api/products");console.log("执行搜索操作:",this.searchText),console.log("执行搜索操作:",t);const e=t.data.map((t=>({name:t.name,price:t.price,image:t.image})));this.searchResults=e.filter((t=>t.name.includes(this.searchText)))},updateCartTotal(t){this.cartTotal=t},async getCart(){console.log(localStorage.email);try{const t=await E.Z.get(`http://localhost:3000/api/admin/userCart/${localStorage.email}`,{headers:{Authorization:`Bearer ${localStorage.token}`}}),e=t.data;console.log(e),this.cartProduct=e,localStorage.cart=e.length,this.updateCartTotal(this.cartTotal),this.cartTotal=t.data.length,this.cartTotal=t.data.reduce(((t,e)=>t+e.quantity),0)}catch(t){console.error("Login error:",t)}},async addToCart(t,e){console.log("localStorage"),console.log(localStorage);const a=t.name,o=e,n=localStorage.email;if(console.log(t.name),console.log(a,o,n),console.log(this.cartTotal),0!=localStorage.length)try{const t=await E.Z.post("http://localhost:3000/api/admin/cart",{name:a,email:n,quantity:o},{headers:{Authorization:`Bearer ${localStorage.token}`}});console.log(t),this.updateCartTotal(this.cartTotal+1),this.showalert()}catch(r){this.showlogin(),console.error("Login error:",r)}else 0==localStorage.length&&this.showlogin();console.log(this.cartProduct)},showalert(){q().fire({position:"center",icon:"success",title:"加入購物車成功",showConfirmButton:!1,timer:1500})},showlogin(){q().fire({position:"center",icon:"error",title:"您尚未登入會員",showConfirmButton:!1,timer:1500})},goToPage(t=1){this.isLoading=!0,this.isnofound=!1;const e=`http://localhost:3000/api/products/discount/page=${this.currentpage}`;console.log(e),this.$http.get(e).then((e=>{console.log(e),this.products=e.data.data,this.currentpage=t,this.totalPage=e.data.totalPage,console.log(this.currentpage),console.log(this.totalPage),this.isLoading=!1,0==this.products.length&&(this.isnofound=!0)}))},setPage(t){console.log(t),this.currentpage=t,this.$router.push({name:"product",params:{page:this.currentpage}}),this.goToPage(this.currentpage)}},created(){this.setPage(+this.$route.params.page),this.getCart()}},V=a(89);const F=(0,V.Z)(Y,[["render",$]]);var W=F}},e={};function a(o){var n=e[o];if(void 0!==n)return n.exports;var r=e[o]={id:o,loaded:!1,exports:{}};return t[o].call(r.exports,r,r.exports,a),r.loaded=!0,r.exports}a.m=t,function(){a.amdO={}}(),function(){var t=[];a.O=function(e,o,n,r){if(!o){var s=1/0;for(u=0;u<t.length;u++){o=t[u][0],n=t[u][1],r=t[u][2];for(var i=!0,c=0;c<o.length;c++)(!1&r||s>=r)&&Object.keys(a.O).every((function(t){return a.O[t](o[c])}))?o.splice(c--,1):(i=!1,r<s&&(s=r));if(i){t.splice(u--,1);var l=n();void 0!==l&&(e=l)}}return e}r=r||0;for(var u=t.length;u>0&&t[u-1][2]>r;u--)t[u]=t[u-1];t[u]=[o,n,r]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var o in e)a.o(e,o)&&!a.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){a.f={},a.e=function(t){return Promise.all(Object.keys(a.f).reduce((function(e,o){return a.f[o](t,e),e}),[]))}}(),function(){a.u=function(t){return"js/"+({18:"product",443:"about"}[t]||t)+"."+{18:"533a4402",121:"0cc94a8f",141:"7c1af91e",171:"a2a1a3ae",179:"8bed428b",443:"35cb26c7",519:"a4477743",852:"04426e12"}[t]+".js"}}(),function(){a.miniCssF=function(t){return"css/"+({18:"product",443:"about"}[t]||t)+"."+{18:"9cb86717",121:"e3c2abd5",141:"c3f4d2ae",171:"1dc367dd",179:"a83f0280",443:"8da4eaa3",519:"c532c572",852:"c1c3c055"}[t]+".css"}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.hmd=function(t){return t=Object.create(t),t.children||(t.children=[]),Object.defineProperty(t,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+t.id)}}),t}}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="e-commerce-front:";a.l=function(o,n,r,s){if(t[o])t[o].push(n);else{var i,c;if(void 0!==r)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==e+r){i=d;break}}i||(c=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,a.nc&&i.setAttribute("nonce",a.nc),i.setAttribute("data-webpack",e+r),i.src=o),t[o]=[n];var h=function(e,a){i.onerror=i.onload=null,clearTimeout(p);var n=t[o];if(delete t[o],i.parentNode&&i.parentNode.removeChild(i),n&&n.forEach((function(t){return t(a)})),e)return e(a)},p=setTimeout(h.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=h.bind(null,i.onerror),i.onload=h.bind(null,i.onload),c&&document.head.appendChild(i)}}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){a.p="/voguethreads-vue-app/"}(),function(){if("undefined"!==typeof document){var t=function(t,e,a,o,n){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var s=function(a){if(r.onerror=r.onload=null,"load"===a.type)o();else{var s=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.href||e,c=new Error("Loading CSS chunk "+t+" failed.\n("+i+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=s,c.request=i,r.parentNode&&r.parentNode.removeChild(r),n(c)}};return r.onerror=r.onload=s,r.href=e,a?a.parentNode.insertBefore(r,a.nextSibling):document.head.appendChild(r),r},e=function(t,e){for(var a=document.getElementsByTagName("link"),o=0;o<a.length;o++){var n=a[o],r=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(r===t||r===e))return n}var s=document.getElementsByTagName("style");for(o=0;o<s.length;o++){n=s[o],r=n.getAttribute("data-href");if(r===t||r===e)return n}},o=function(o){return new Promise((function(n,r){var s=a.miniCssF(o),i=a.p+s;if(e(s,i))return n();t(o,i,null,n,r)}))},n={143:0};a.f.miniCss=function(t,e){var a={18:1,121:1,141:1,171:1,179:1,443:1,519:1,852:1};n[t]?e.push(n[t]):0!==n[t]&&a[t]&&e.push(n[t]=o(t).then((function(){n[t]=0}),(function(e){throw delete n[t],e})))}}}(),function(){var t={143:0};a.f.j=function(e,o){var n=a.o(t,e)?t[e]:void 0;if(0!==n)if(n)o.push(n[2]);else{var r=new Promise((function(a,o){n=t[e]=[a,o]}));o.push(n[2]=r);var s=a.p+a.u(e),i=new Error,c=function(o){if(a.o(t,e)&&(n=t[e],0!==n&&(t[e]=void 0),n)){var r=o&&("load"===o.type?"missing":o.type),s=o&&o.target&&o.target.src;i.message="Loading chunk "+e+" failed.\n("+r+": "+s+")",i.name="ChunkLoadError",i.type=r,i.request=s,n[1](i)}};a.l(s,c,"chunk-"+e,e)}},a.O.j=function(e){return 0===t[e]};var e=function(e,o){var n,r,s=o[0],i=o[1],c=o[2],l=0;if(s.some((function(e){return 0!==t[e]}))){for(n in i)a.o(i,n)&&(a.m[n]=i[n]);if(c)var u=c(a)}for(e&&e(o);l<s.length;l++)r=s[l],a.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return a.O(u)},o=self["webpackChunke_commerce_front"]=self["webpackChunke_commerce_front"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=a.O(void 0,[998],(function(){return a(9418)}));o=a.O(o)})();
//# sourceMappingURL=app.1c87f02e.js.map