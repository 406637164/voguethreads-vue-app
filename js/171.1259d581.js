"use strict";(self["webpackChunke_commerce_front"]=self["webpackChunke_commerce_front"]||[]).push([[171],{2171:function(e,t,d){d.r(t),d.d(t,{default:function(){return ue}});var a=d(3396),i=d(7139),s=d(9242);const o={ref:"header"},l=(0,a.uE)('<a href="/" class="logo">VogueThreads</a><ul class="navlists"><li><a href="/">商品管理</a></li><li><a href="#">訂單管理</a></li><li><a href="/about">人員管理</a></li></ul><div class="header-icons"><a class="btn-square" href="/user"><button id="member"><span class="bi bi-person-circle"></span></button></a></div>',3),c=[l],r={key:0,class:"loading-overlay"},n=(0,a._)("div",{class:"spinner-border text-primary",role:"status"},[(0,a._)("span",{class:"visually-hidden"},"Loading...")],-1),u=[n],m={class:"container"},p={class:"d-flex"},h={class:"manage-container"},g=(0,a._)("i",{class:"bx bxs-plus-circle"},"新增產品",-1),b=[g],_={class:"manage-item-lists"},P=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th",{class:"item_detail"},"商品"),(0,a._)("th",{class:"price"},"單價"),(0,a._)("th",{class:"count"},"庫存"),(0,a._)("th",{class:"amount"},"類別"),(0,a._)("th",{class:"operate"},"編輯")])],-1),f={class:"scrollable-tbody"},y={class:"item_detail"},v=["href"],k=["src"],w={class:"name"},L={class:"price"},U={class:"count"},x=["onClick"],q=["onClick"],C={class:"amount"},R={class:"operate"},D=["onClick"],M=(0,a._)("i",{class:"bx bx-edit"},null,-1),I=[M],V=["onClick"],Z=(0,a._)("i",{class:"bx bxs-trash"},null,-1),z=[Z],$={class:"modal fade",id:"exampleModal",ref:"myModalRef",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},E={class:"modal-dialog modal-dialog-centered modal-xl"},A={class:"modal-content"},H={class:"modal-header"},N={class:"modal-title",id:"exampleModalLabel"},Y=(0,a._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),F={class:"modal-body"},S={class:"mb-3 image-block"},j=["src"],K=["src"],O={class:"mb-3"},T=(0,a._)("label",{for:"productName",class:"form-label"},"商品名稱",-1),W={class:"mb-3"},B=(0,a._)("label",{for:"productPrice",class:"form-label"},"金額",-1),G={class:"mb-3"},J=(0,a._)("label",{for:"productStock",class:"form-label"},"庫存",-1),Q={class:"mb-3"},X=(0,a._)("label",{for:"productDescription",class:"form-label"},"商品描述",-1),ee={class:"modal-footer"},te=(0,a._)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"}," 關閉 ",-1),de=(0,a._)("footer",{class:"footer"},[(0,a._)("p",null,"© 2023 Your Website. All rights reserved.")],-1);function ae(e,t,d,l,n,g){return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("header",o,c,512),n.isLoading?((0,a.wg)(),(0,a.iD)("div",r,u)):(0,a.kq)("",!0),(0,a._)("div",m,[(0,a._)("div",p,[(0,a._)("div",h,[(0,a._)("button",{class:"btn btn-outline-primary btn-sm operate","data-bs-toggle":"modal","data-bs-target":"#exampleModal",onClick:t[0]||(t[0]=e=>g.openAddProductModal()),id:"addproducts"},b),(0,a._)("table",_,[P,(0,a._)("tbody",f,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n.products,((t,d)=>((0,a.wg)(),(0,a.iD)("tr",{key:t.name},[(0,a._)("td",y,[(0,a._)("a",{href:`/product/${t.name}`},[(0,a._)("img",{src:t.image,alt:""},null,8,k),(0,a._)("div",w,[(0,a._)("span",null,(0,i.zw)(t.name),1)])],8,v)]),(0,a._)("td",L,(0,i.zw)(t.price),1),(0,a._)("td",U,[t.edit?((0,a.wg)(),(0,a.iD)("button",{key:0,class:"btn dels",onClick:a=>e.reduceitem(t,d)}," - ",8,x)):(0,a.kq)("",!0),(0,a.Uk)(" "+(0,i.zw)(t.qty)+" ",1),t.edit?((0,a.wg)(),(0,a.iD)("button",{key:1,class:"btn adds",onClick:a=>e.additem(t,d)}," + ",8,q)):(0,a.kq)("",!0)]),(0,a._)("td",C,(0,i.zw)(t.category),1),(0,a._)("td",R,[(0,a._)("button",{"data-bs-toggle":"modal","data-bs-target":"#exampleModal",class:"btn btn-outline-success btn-sm operate",onClick:e=>g.edititem(t,d)},I,8,D),(0,a._)("button",{class:"btn btn-outline-danger btn-sm operate",onClick:e=>g.deleteitem(t,d)},z,8,V)])])))),128))])])])])]),(0,a._)("div",$,[(0,a._)("div",E,[(0,a._)("div",A,[(0,a._)("div",H,[(0,a._)("h5",N,(0,i.zw)(n.titles),1),Y]),(0,a._)("div",F,[(0,a._)("div",S,[null!=n.editedProduct.imageURL?((0,a.wg)(),(0,a.iD)("img",{key:0,src:n.editedProduct.imageURL,alt:"Uploaded Image",class:"mt-3 modal-img"},null,8,j)):((0,a.wg)(),(0,a.iD)("img",{key:1,src:n.editedProduct.image,alt:"Uploaded Image",class:"mt-3 modal-img"},null,8,K)),(0,a._)("input",{type:"file",ref:"imageInput",class:"form-control",id:"productImage",accept:"image/*",onChange:t[1]||(t[1]=(...e)=>g.handleImageUpload&&g.handleImageUpload(...e))},null,544)]),(0,a._)("div",O,[T,(0,a.wy)((0,a._)("input",{type:"text",class:"form-control",id:"productName","onUpdate:modelValue":t[2]||(t[2]=e=>n.editedProduct.name=e)},null,512),[[s.nr,n.editedProduct.name]])]),(0,a._)("div",W,[B,(0,a.wy)((0,a._)("input",{type:"number",class:"form-control",id:"productPrice","onUpdate:modelValue":t[3]||(t[3]=e=>n.editedProduct.price=e)},null,512),[[s.nr,n.editedProduct.price]])]),(0,a._)("div",G,[J,(0,a.wy)((0,a._)("input",{type:"number",class:"form-control",id:"productStock","onUpdate:modelValue":t[4]||(t[4]=e=>n.editedProduct.qty=e)},null,512),[[s.nr,n.editedProduct.qty]])]),(0,a._)("div",Q,[X,(0,a.wy)((0,a._)("textarea",{type:"number",class:"form-control",id:"productDescription","onUpdate:modelValue":t[5]||(t[5]=e=>n.editedProduct.description=e)},null,512),[[s.nr,n.editedProduct.description]])])]),(0,a._)("div",ee,[te,(0,a._)("button",{type:"button","data-bs-dismiss":"modal",class:"btn btn-primary",onClick:t[6]||(t[6]=(...e)=>g.saveEditedProduct&&g.saveEditedProduct(...e))}," 保存 ")])])])],512),de],64)}d(6229),d(7330),d(2062),d(7658);var ie=d(8565),se=d(4161),oe=d(2492),le=d.n(oe),ce={name:"HomeView",components:{Navbar:ie.Z},data(){return{titles:"",isLoading:!0,products:[],isadded:!1,editedProduct:{id:"",name:"",price:0,qty:0,imageURL:null,image:null,description:null}}},methods:{async edititem(e,t){this.titles="修改產品內容";let d=this.$refs.imageInput;d.value="",this.editedProduct.image=null,this.editedProduct.imageURL=null,this.$refs.myModalRef.classList.add("show"),console.log(e.image),console.log(e),this.editedProduct.id=e.id,this.editedProduct.name=e.name,this.editedProduct.price=e.price,this.editedProduct.qty=e.qty,this.editedProduct.image=e.image,this.editedProduct.description=e.description},async getproduct(){this.isLoading=!0;const e=await se.Z.get("http://localhost:3000/api/products");e.data.map(((e,t)=>e.edit=0)),this.products=e.data,this.isLoading=!1,console.log(e.data)},handleImageUpload(e){const t=e.target.files[0];console.log(this.editedProduct.image),console.log(t),this.editedProduct.image=t,this.editedProduct.imageURL=URL.createObjectURL(t),console.log(this.editedProduct)},async saveEditedProduct(){if(this.isadded=!1,console.log(this.isadded),1==this.isadded){let t=this.products.find((e=>e.id==this.editedProduct.id));t.name=this.editedProduct.name,t.price=this.editedProduct.price,t.qty=this.editedProduct.qty,null!=this.editedProduct.imageURL&&(t.image=this.editedProduct.imageURL),console.log(this.editedProduct.image.name);const d=new FormData;console.log(t.id),console.log(t.price),d.append("id",this.editedProduct.id),d.append("name",this.editedProduct.name),d.append("price",this.editedProduct.price),d.append("stock",this.editedProduct.qty),d.append("image",this.editedProduct.image),console.log(d);try{await se.Z.patch("http://localhost:3000/api/manage/uploads/"+this.editedProduct.image.name,d);this.isLoading=!1,le().fire("資料已更新","","success")}catch(e){console.error("上傳失敗",e)}}else{console.log(this.editedProduct);const e=new FormData;e.append("id",this.editedProduct.id),e.append("name",this.editedProduct.name),e.append("price",this.editedProduct.price),e.append("stock",this.editedProduct.qty),e.append("description",this.editedProduct.description),e.append("image",this.editedProduct.image);const t=await se.Z.post("http://localhost:3000/api/manage/upload/",e);console.log(t)}console.log(this.editedProduct),this.editedProduct.image=this.editedProduct.imageURL,this.products.push(this.editedProduct)},async deleteitem(e,t){try{const d=await se.Z.delete(`http://localhost:3000/api/products/${e.id}`);200===d.status?(this.products.splice(t,1),le().fire("商品已删除","","success")):le().fire("删除商品失败","","error")}catch(d){console.error("删除商品失败",d),le().fire("删除商品失败","","error")}},openAddProductModal(){this.isadded=!0,(this.added=!0)&&(this.titles="新增產品內容",this.editedProduct={id:"",name:"",price:0,qty:0,imageURL:null,image:null,description:null},this.$refs.myModalRef.classList.add("show"))}},created(){this.getproduct()}},re=d(89);const ne=(0,re.Z)(ce,[["render",ae]]);var ue=ne}}]);
//# sourceMappingURL=171.1259d581.js.map