(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4cdd1a82"],{"1a4b":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"data-list-container",attrs:{id:"list-agency-account"}},[t("vs-prompt",{staticClass:"export-options",attrs:{title:"Export To Excel","accept-text":"Export",active:e.activePrompt},on:{cancle:e.clearFields,accept:e.exportToExcel,close:e.clearFields,"update:active":function(t){e.activePrompt=t}}},[t("vs-input",{staticClass:"w-full",attrs:{placeholder:"Enter File Name.."},model:{value:e.fileName,callback:function(t){e.fileName=t},expression:"fileName"}}),t("v-select",{staticClass:"my-4",attrs:{options:e.formats},model:{value:e.selectedFormat,callback:function(t){e.selectedFormat=t},expression:"selectedFormat"}}),t("div",{staticClass:"flex"},[t("span",{staticClass:"mr-4"},[e._v("Cell Auto Width:")]),t("vs-switch",{model:{value:e.cellAutoWidth,callback:function(t){e.cellAutoWidth=t},expression:"cellAutoWidth"}},[e._v("Cell Auto Width")])],1)],1),t("data-view-sidebar",{attrs:{isSidebarActive:e.addNewDataSidebar,data:e.sidebarData},on:{closeSidebar:e.toggleDataSidebar}}),t("div",{staticClass:"vs-con-loading__container",attrs:{id:"loading-corners"}},[t("vs-table",{ref:"table",attrs:{multiple:"",pagination:"","max-items":e.itemsPerPage,search:"",data:e.products},scopedSlots:e._u([{key:"default",fn:function(s){var a=s.data;return[t("tbody",e._l(a,(function(s,a){return t("vs-tr",{key:a,attrs:{data:s}},[t("vs-td",[t("p",{staticClass:"agency-name font-medium truncate"},[e._v(e._s(s.email))]),t("p",[e._v("\n                        Địa chỉ USDT: "),t("span",{staticStyle:{color:"#26a17b"},on:{click:function(t){return e.clickGetAddress(s.address_USDT,s.privateKey_USDT,"")}}},[e._v(e._s(s.address_USDT))]),t("br"),e._v("\n                        *** Tổng CHƠI: "),t("span",{staticClass:"italic",staticStyle:{color:"#ff9900"}},[e._v("$"+e._s(e.formatPrice(s.pricePlay,2)))]),t("br"),e._v("\n                        *** Tổng THẮNG: "),t("span",{staticClass:"italic",staticStyle:{color:"#10ff00"}},[e._v("$"+e._s(e.formatPrice(s.priceWin,2)))]),t("br"),e._v("\n                        *** Tổng THUA: "),t("span",{staticClass:"italic",staticStyle:{color:"#ff5c5c"}},[e._v("$"+e._s(e.formatPrice(s.priceLose,2)))]),t("br"),e._v("\n                         *** Lời: "),t("span",{staticClass:"italic font-bold",staticStyle:{color:"#00ff89"}},[e._v("$"+e._s(e.formatPrice(s.priceWin-s.priceLose,2)))]),t("br")])]),t("vs-td",[t("p",{staticClass:"agency-name font-medium truncate"},[e._v(e._s(s.first_name)),t("br"),e._v("Biệt danh: "+e._s(s.nick_name))])]),t("vs-td",[t("p",{staticClass:"user-price"},[t("IconCrypto",{staticStyle:{width:"20px"},attrs:{coinname:"USDT",color:"color",format:"svg"}}),e._v(" $"+e._s(e.formatPrice(s.money_usdt,2))),t("br"),e._v("\n                Tổng("+e._s(e.formatPrice(s.total_money+s.money_usdt,2))+") "),t("br")],1)]),t("vs-td",[s.sponsor?t("p",{staticClass:"agency-total-member"},[e._v("\n                    "+e._s(e._f("k_formatter")(s.sponsor))+"\n                ")]):t("p",{staticClass:"agency-total-member"},[t("vx-tooltip",{staticStyle:{float:"left"},attrs:{title:s.nick_name,color:"success",text:"Xem tổng thành viên"}},[t("vs-button",{attrs:{color:"dark",type:"line","icon-pack":"feather",icon:"icon-eye"},on:{click:function(t){return t.stopPropagation(),e.viewPeopelAgency(s.ref_code,a)}}},[e._v("Xem")])],1)],1)]),t("vs-td",[t("p",{staticClass:"agency-commission"},[e._v(e._s(e.formatPrice(s.pending_commission,2)))])]),t("vs-td",[t("vs-chip",{staticClass:"agency-status",attrs:{color:e.getOrderStatusColor(s.active_2fa)}},[e._v(e._s(e._f("title")(e.getOrderStatusColorText(s.active_2fa))))])],1),t("vs-td",{staticClass:"whitespace-no-wrap text-center"},[t("vx-tooltip",{staticStyle:{float:"left"},attrs:{title:s.nick_name,color:"success",text:"Cộng tiền vào tài khoản"}},[t("vs-button",{attrs:{color:"dark",type:"line","icon-pack":"feather",icon:"icon-dollar-sign"},on:{click:function(t){return t.stopPropagation(),e.addMoneyUser(s)}}})],1),t("vx-tooltip",{staticStyle:{float:"left"},attrs:{title:s.nick_name,color:"warning",text:"Chỉnh sửa tài khoản"}},[t("vs-button",{attrs:{color:"dark",type:"line","icon-pack":"feather",icon:"icon-edit"},on:{click:function(t){return t.stopPropagation(),e.editUser(s)}}})],1),t("vx-tooltip",{staticStyle:{float:"left"},attrs:{title:s.nick_name,color:"danger",text:"Xóa tài khoản"}},[t("vs-button",{attrs:{color:"dark",type:"line","icon-pack":"feather",icon:"icon-trash"},on:{click:function(t){return e.openPopDelete({id:s.id,email:s.email,index:a})}}})],1)],1)],1)})),1)]}}]),model:{value:e.selectedUser,callback:function(t){e.selectedUser=t},expression:"selectedUser"}},[t("div",{staticClass:"flex flex-wrap-reverse items-center flex-grow justify-between",attrs:{slot:"header"},slot:"header"},[t("div",{staticClass:"flex flex-wrap-reverse items-center data-list-btn-container"},[t("vs-dropdown",{staticClass:"dd-actions cursor-pointer mr-4 mb-4",attrs:{"vs-trigger-click":""}},[t("div",{staticClass:"p-4 shadow-drop rounded-lg d-theme-dark-bg cursor-pointer flex items-center justify-center text-lg font-medium w-32 w-full"},[t("span",{staticClass:"mr-2"},[e._v("Tác vụ")]),t("feather-icon",{attrs:{icon:"ChevronDownIcon",svgClasses:"h-4 w-4"}})],1),t("vs-dropdown-menu",[t("vs-dropdown-item",[t("span",{staticClass:"flex items-center"},[t("feather-icon",{staticClass:"mr-2",attrs:{icon:"TrashIcon",svgClasses:"h-4 w-4"}}),t("span",[e._v("Xóa")])],1)]),t("vs-dropdown-item",[t("span",{staticClass:"flex items-center"},[t("feather-icon",{staticClass:"mr-2",attrs:{icon:"FileIcon",svgClasses:"h-4 w-4"}}),t("span",{on:{click:function(t){e.activePrompt=!0}}},[e._v("In")])],1)])],1)],1),t("div",{staticClass:"btn-add-new p-3 mb-4 mr-4 rounded-lg cursor-pointer flex items-center justify-center text-lg font-medium text-base text-primary border border-solid border-primary",on:{click:e.addNewAccount}},[t("feather-icon",{attrs:{icon:"PlusIcon",svgClasses:"h-4 w-4"}}),t("span",{staticClass:"ml-2 text-base text-primary"},[e._v("Tạo tài khoản")])],1)],1),t("vs-dropdown",{staticClass:"cursor-pointer mb-4 mr-4 items-per-page-handler",attrs:{"vs-trigger-click":""}},[t("div",{staticClass:"p-4 border border-solid d-theme-border-grey-light rounded-full d-theme-dark-bg cursor-pointer flex items-center justify-between font-medium"},[t("span",{staticClass:"mr-2"},[e._v(e._s(e.currentPage*e.itemsPerPage-(e.itemsPerPage-1))+" - "+e._s(e.products.length-e.currentPage*e.itemsPerPage>0?e.currentPage*e.itemsPerPage:e.products.length)+" of "+e._s(e.queriedItems))]),t("feather-icon",{attrs:{icon:"ChevronDownIcon",svgClasses:"h-4 w-4"}})],1),t("vs-dropdown-menu",[t("vs-dropdown-item",{on:{click:function(t){e.itemsPerPage=4}}},[t("span",[e._v("4")])]),t("vs-dropdown-item",{on:{click:function(t){e.itemsPerPage=10}}},[t("span",[e._v("10")])]),t("vs-dropdown-item",{on:{click:function(t){e.itemsPerPage=15}}},[t("span",[e._v("15")])]),t("vs-dropdown-item",{on:{click:function(t){e.itemsPerPage=20}}},[t("span",[e._v("20")])])],1)],1)],1),t("template",{slot:"thead"},[t("vs-th",{attrs:{"sort-key":"email"}},[e._v("Email")]),t("vs-th",{attrs:{"sort-key":"nickname"}},[e._v("Tên")]),t("vs-th",{attrs:{"sort-key":"wallet"}},[e._v("Ví")]),t("vs-th",{attrs:{"sort-key":"memberForAgency"}},[e._v("Tổng thành viên")]),t("vs-th",{attrs:{"sort-key":"pending_commission"}},[e._v("Tổng Hoa Hồng")]),t("vs-th",{attrs:{"sort-key":"secury2fa"}},[e._v("Bảo mật 2FA")]),t("vs-th",[e._v("Tác vụ")])],1)],2)],1),t("vs-popup",{attrs:{"background-color":"rgba(255,255,255,.6)",title:"Background",active:e.popupDeleteActive},on:{"update:active":function(t){e.popupDeleteActive=t}}},[t("p",[e._v(" Bạn đồng ý xóa tài khoản "+e._s(e.UserInfo.email)+" này.")]),t("vs-button",{attrs:{icon:"icon-trash","icon-pack":"feather",type:"gradient"},on:{click:function(t){return t.stopPropagation(),e.deleteUser(e.UserInfo.id,e.UserInfo.index)}}},[e._v("Đồng ý")])],1),t("vs-popup",{attrs:{title:"Address Wallet",active:e.popupAdressWallet},on:{"update:active":function(t){e.popupAdressWallet=t}}},[t("p",[e._v("\n        Address: "+e._s(e.getAdress)+" "),t("feather-icon",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.getAdress,expression:"getAdress",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopy,expression:"onCopy",arg:"success"}],staticClass:"cursor-pointer",attrs:{icon:"CopyIcon"}}),t("br"),e._v(" \n        Private Key: "+e._s(e.getPrivateKey)+" "),t("feather-icon",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.getPrivateKey,expression:"getPrivateKey",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopy,expression:"onCopy",arg:"success"}],staticClass:"cursor-pointer",attrs:{icon:"CopyIcon"}}),t("br"),e._v("\n        WFI BTC Address: "+e._s(e.getWfiKey)+" "),t("feather-icon",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.getWfiKey,expression:"getWfiKey",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopy,expression:"onCopy",arg:"success"}],staticClass:"cursor-pointer",attrs:{icon:"CopyIcon"}})],1)])],1)},i=[],o=s("9987"),n=s("4a7a"),r=s.n(n),c=s("c5b9"),l=s("2b0e"),d={components:{DataViewSidebar:o["a"],vSelect:r.a},data:function(){return{getAdress:"",getPrivateKey:"",getWfiKey:"",popupAdressWallet:!1,UserInfo:{},popupDeleteActive:!1,activePrompt:!1,selectedUser:[],fileName:"",formats:["xlsx","csv","txt"],cellAutoWidth:!0,selectedFormat:"xlsx",headerTitle:["Id","Email","Nick","Ví","Tổng thành viên","Commission"],headerVal:["id","email","nickname","wallet","memberForAgency","pending_commission"],productsFake:[{id:1,email:"tesst@gmail.com",nick_name:"SkyPlaza",first_name:"Ares",profile_image:"https://vi.vuejs.org/images/logo.png",money_vn:100,money_btc:0,money_eth:.01,money_usdt:1,money_paypal:0,manage_supers:1,pending_commission:0,active_2fa:0,created_at:"00:00:00 02-04-2021"},{id:2,email:"tesst@gmail.com",nick_name:"SkyPlaza",first_name:"Ares",profile_image:"https://vi.vuejs.org/images/logo.png",money_vn:100,money_btc:0,money_eth:.01,money_usdt:1,money_paypal:0,manage_supers:0,pending_commission:0,active_2fa:1,created_at:"01:00:00 02-04-2021"}],itemsPerPage:10,isMounted:!1,addNewDataSidebar:!1,sidebarData:{}}},computed:{currentPage:function(){return this.isMounted?this.$refs.table.currentx:0},products:function(){return this.productsFake},queriedItems:function(){return this.$refs.table?this.$refs.table.queriedResults.length:this.productsFake.length}},methods:{clickGetAddress:function(e,t,s){this.popupAdressWallet=!0,this.getWfiKey=""!=s?s:"N/A",this.getAdress=e,this.getPrivateKey=t},onCopy:function(){this.$vs.notify({text:"Đã sao chép vào bộ nhớ",color:"success",iconPack:"feather",position:"top-center",icon:"icon-check-circle"})},viewPeopelAgency:function(e,t){var s=this;c["a"].viewMemberAgency(e).then((function(e){if(e.data.success){var a=e.data.data[0].totalPeopel;s.productsFake[t].sponsor=0==a?"Chưa có thành viên":s.formatPrice(a,0)}}))},deleteMultiple:function(){for(var e=this.selectedUser.length-1;e>=0;e--){var t=this.selectedUser[e]["id"];c["a"].deleteMember(t),l["default"].delete(this.productsFake,e)}return this.selectedUser=[],this.$vs.notify({text:"Đã xóa thành công",color:"success",iconPack:"feather",icon:"icon-check"})},openPopDelete:function(e){this.UserInfo=e,this.popupDeleteActive=!0},deleteUser:function(e,t){var s=this;c["a"].deleteMember(e).then((function(e){if(e.data.success)return l["default"].delete(s.productsFake,t),s.popupDeleteActive=!1,s.$vs.notify({text:"Đã xóa thành công",color:"success",iconPack:"feather",icon:"icon-check"})}))},formatPrice:function(e,t){var s=new Intl.NumberFormat("en-US",{minimumFractionDigits:t});return s.format(e)},addMoneyUser:function(e){e["type"]="addMoney",this.sidebarData=e,this.toggleDataSidebar(!0)},addNewAccount:function(){this.sidebarData={},this.toggleDataSidebar(!0)},editUser:function(e){delete e["type"],this.sidebarData=e,this.toggleDataSidebar(!0)},getOrderStatusColor:function(e){return 0==e?"warning":1==e?"success":"warning"},getOrderStatusColorText:function(e){return 0==e?"Chưa bật":1==e?"Đã bật":"Chưa bật"},toggleDataSidebar:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.addNewDataSidebar=e},exportToExcel:function(){var e=this;if(0==this.selectedUser.length)return this.$vs.notify({title:"Xuất dữ liệu",text:"Vui lòng chọn nội dung để hoàn thành",color:"danger",iconPack:"feather",icon:"icon-heart"});Promise.all([s.e("chunk-fe0d63b4"),s.e("chunk-6ecfb0fd")]).then(s.bind(null,"4bf8d")).then((function(t){var s=e.selectedUser,a=e.formatJson(e.headerVal,s);t.export_json_to_excel({header:e.headerTitle,data:a,filename:e.fileName,autoWidth:e.cellAutoWidth,bookType:e.selectedFormat}),e.clearFields()}))},formatJson:function(e,t){return t.map((function(t){return e.map((function(e){return t[e]}))}))},clearFields:function(){this.fileName="",this.cellAutoWidth=!0,this.selectedFormat="xlsx"},openLoadingInDiv:function(){this.$vs.loading({container:"#loading-corners",type:"corners",scale:.6})}},created:function(){var e=this,t=localStorage.getItem("token");this.$store.dispatch("setToken",t),c["a"].getListAgency().then((function(t){e.$vs.loading.close("#loading-corners > .con-vs-loading"),4==t.data.success?(localStorage.removeItem("token"),e.$router.push("/pages/login").catch((function(){}))):e.productsFake=t.data.data}))},mounted:function(){this.isMounted=!0,this.openLoadingInDiv()}},p=d,u=(s("da7e"),s("2877")),m=Object(u["a"])(p,a,i,!1,null,null,null);t["default"]=m.exports},"622cb":function(e,t,s){},da7e:function(e,t,s){"use strict";s("622cb")}}]);