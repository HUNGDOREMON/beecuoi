(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bd3f34d4"],{"0360":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"dashboard-analytics"}},[e("div",{staticClass:"vx-row"},[e("div",{staticClass:"vx-col w-full lg:w-1/4 mb-base"},[e("vx-card",{attrs:{title:"Trạng thái",subtitle:"Hôm nay"}},[e("template",{slot:"actions"},[e("feather-icon",{attrs:{icon:"MoreVerticalIcon",svgClasses:"w-6 h-6 text-grey"}})],1),e("div",{staticClass:"flex"},[e("span",{staticClass:"flex items-center ml-4"},[e("div",{staticClass:"h-3 w-3 rounded-full mr-1 bg-success"}),e("span",[t._v("Trực tuyến")])])]),e("div",{attrs:{slot:"no-body-bottom"},slot:"no-body-bottom"})],2)],1),e("div",{staticClass:"vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base"},[e("vx-card",{attrs:{title:"Người đăng ký"}},[e("h2",{staticClass:"mb-1 font-bold"},[t._v(t._s(t._f("k_formatter")(t.dataGet.nNDK)))])])],1),e("div",{staticClass:"vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base"},[e("vx-card",{attrs:{title:"Đã xác minh"}},[e("h2",{staticClass:"mb-1 font-bold"},[t._v(t._s(t._f("k_formatter")(t.dataGet.nNDXM)))])])],1),e("div",{staticClass:"vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base"},[e("vx-card",{attrs:{title:"Đại lý"}},[e("h2",{staticClass:"mb-1 font-bold"},[t._v(t._s(t._f("k_formatter")(t.dataGet.nDL)))])])],1)]),e("div",{staticClass:"vx-row"},[e("div",{staticClass:"vx-col w-full md:w-1/2 mb-base"},[e("div",{staticClass:"vs-con-loading__container",attrs:{id:"loading-corners"}},[e("vx-card",[e("div",{staticClass:"vx-row flex-col-reverse md:flex-col-reverse sm:flex-row lg:flex-row"},[t.salesBarSession.analyticsData?e("div",{staticClass:"vx-col w-full md:w-full sm:w-1/2 lg:w-1/2 xl:w-1/2 flex flex-col justify-between"},[e("div",[e("h2",{staticClass:"mb-1 font-bold"},[t._v(t._s(t._f("k_formatter")(t.dataGet.tsNNT)))]),e("span",{staticClass:"font-medium"},[t._v("tài khoản nạp tiền")]),e("p",{staticClass:"mt-2 text-xl font-medium"},[e("span",{class:t.dataGet.tsTN7N>=0?"text-success":"text-danger"},[t.dataGet.tsTN7N>0?e("span",[t._v("+")]):t._e(),e("span",[t._v(t._s(t.dataGet.tsTN7N))])]),e("span",[t._v(" trong 7 ngày qua ")])])])]):t._e()]),e("vs-divider",{staticClass:"my-6"}),e("vs-radio",{staticClass:"mr-2",attrs:{"vs-value":"all"},on:{change:function(e){return t.changeDT("all")}},model:{value:t.isCheckShowDT,callback:function(e){t.isCheckShowDT=e},expression:"isCheckShowDT"}},[t._v("Tất cả")]),e("vs-radio",{staticClass:"mr-2",attrs:{"vs-value":"today"},on:{change:function(e){return t.changeDT("today")}},model:{value:t.isCheckShowDT,callback:function(e){t.isCheckShowDT=e},expression:"isCheckShowDT"}},[t._v("Hôm nay")]),e("vs-radio",{staticClass:"mr-2",attrs:{"vs-value":"lastweek"},on:{change:function(e){return t.changeDT("lastweek")}},model:{value:t.isCheckShowDT,callback:function(e){t.isCheckShowDT=e},expression:"isCheckShowDT"}},[t._v("Tuần trước")]),e("vs-radio",{staticClass:"mr-2",attrs:{"vs-value":"lastmonth"},on:{change:function(e){return t.changeDT("lastmonth")}},model:{value:t.isCheckShowDT,callback:function(e){t.isCheckShowDT=e},expression:"isCheckShowDT"}},[t._v("Tháng trước")]),e("vs-radio",{staticClass:"mr-2",attrs:{"vs-value":"threelastmonth"},on:{change:function(e){return t.changeDT("threelastmonth")}},model:{value:t.isCheckShowDT,callback:function(e){t.isCheckShowDT=e},expression:"isCheckShowDT"}},[t._v("3 tháng trước")]),e("div",{staticClass:"vx-row"},[e("div",{staticClass:"vx-col w-1/2 mb-3"},[e("p",[t._v("Hệ thống nạp USDT:"),e("br"),e("span",{staticClass:"font-bold"},[t._v("$"+t._s(t.formatPrice(t.dataGet.tsTNUSD,4)))])])]),e("div",{staticClass:"vx-col w-1/2 mb-3"},[e("p",[t._v("USDT được nạp:"),e("br"),e("span",{staticClass:"font-bold"},[t._v(t._s(t.formatPrice(t.dataGet.tsTNThuc,4)))])])]),e("div",{staticClass:"vx-col w-1/2 mb-3"},[e("p",[t._v("Phí GAS BNB:"),e("br"),e("span",{staticClass:"font-bold"},[t._v(t._s(t.formatPrice(t.dataGet.tsFee,10)))])])])])],1)],1)]),e("div",{staticClass:"vx-col w-full md:w-1/2 lg:w-1/2 xl:w-1/2 mb-base"},[e("vx-card",{attrs:{title:"Số dư người dùng còn lại"}},[e("div",{staticClass:"vx-row"},[e("div",{staticClass:"vx-col w-1/2 mb-3"},[e("p",[t._v("Tổng số dư Paypal:"),e("br"),e("span",{staticClass:"font-bold"},[t._v("$"+t._s(t.formatPrice(t.dataGet.tsTNPAYPALN,2)))])])]),e("div",{staticClass:"vx-col w-1/2 mb-3"},[e("p",[t._v("Tổng số dư BTC:"),e("br"),e("span",{staticClass:"font-bold"},[t._v("$"+t._s(t.formatPrice(t.dataGet.tsTNBTCN,6)))])])]),e("div",{staticClass:"vx-col w-1/2 mb-3"},[e("p",[t._v("Tổng số dư ETH:"),e("br"),e("span",{staticClass:"font-bold"},[t._v("$"+t._s(t.formatPrice(t.dataGet.tsTNETHN,4)))])])]),e("div",{staticClass:"vx-col w-1/2 mb-3"},[e("p",[t._v("Tổng số dư USDT:"),e("br"),e("span",{staticClass:"font-bold"},[t._v("$"+t._s(t.formatPrice(t.dataGet.tsTNUSDN,2)))])])]),e("div",{staticClass:"vx-col w-1/2 mb-3"},[e("p",[t._v("Tổng số dư VN:"),e("br"),e("span",{staticClass:"font-bold"},[t._v("$"+t._s(t.formatPrice(t.dataGet.tsTNVNN,0)))])])])])])],1),e("div",{staticClass:"vx-col w-full md:w-1/2 lg:w-1/2 xl:w-1/2 mb-base"},[e("div",{staticClass:"vs-con-loading__container",attrs:{id:"loading-corners2"}},[e("vx-card",{attrs:{title:"Hệ thống LÃI USD"}},[e("div",{staticClass:"vx-row"},[e("div",{staticClass:"vx-col w-1/2 mb-3"},[e("p",[t._v("Tổng giao dịch sàn THẮNG:"),e("br"),e("span",{staticClass:"font-bold"},[t._v("$"+t._s(t.formatPrice(t.dataGet.tsLose,4)))])])]),e("div",{staticClass:"vx-col w-1/2 mb-3"},[e("p",[t._v("Tổng giao dịch sàn THUA:"),e("br"),e("span",{staticClass:"font-bold"},[t._v("$"+t._s(t.formatPrice(t.dataGet.tsWin,4)))])])]),e("div",{staticClass:"vx-col w-1/2 mb-3"},[e("p",[t._v("Tổng giao dịch Hoa Hồng:"),e("br"),e("span",{staticClass:"font-bold"},[t._v("$"+t._s(t.formatPrice(t.dataGet.tsHHong,4)))])])]),e("div",{staticClass:"vx-col w-1/2 mb-3"},[e("p",[t._v("Hệ thống lãi USD:"),e("br"),e("span",{staticClass:"font-bold"},[t._v("$"+t._s(t.formatPrice(t.dataGet.tsLose-t.dataGet.tsWin-t.dataGet.tsHHong,4)))])])])])])],1)])])])},i=[],n=s("1321"),r=s.n(n),o=s("43ca"),c=s("da24"),u=s("5f88"),l=s("4489"),d=s("c5b9"),p={data:function(){return{isCheckShowDT:"all",checkpointReward:{},subscribersGained:{},ordersRecevied:{},salesBarSession:{},supportTracker:{},productsOrder:{},salesRadar:{},dataGet:{},rateTNFE:0,timelineData:[{color:"primary",icon:"PlusIcon",title:"Client Meeting",desc:"Bonbon macaroon jelly beans gummi bears jelly lollipop apple",time:"25 mins Ago"},{color:"warning",icon:"MailIcon",title:"Email Newsletter",desc:"Cupcake gummi bears soufflé caramels candy",time:"15 Days Ago"},{color:"danger",icon:"UsersIcon",title:"Plan Webinar",desc:"Candy ice cream cake. Halvah gummi bears",time:"20 days ago"},{color:"success",icon:"LayoutIcon",title:"Launch Website",desc:"Candy ice cream cake. Halvah gummi bears Cupcake gummi bears soufflé caramels candy.",time:"25 days ago"},{color:"primary",icon:"TvIcon",title:"Marketing",desc:"Candy ice cream cake. Halvah gummi bears Cupcake gummi bears.",time:"28 days ago"}],analyticsData:c["a"],dispatchedOrders:[]}},components:{VueApexCharts:r.a,StatisticsCardLine:o["a"],ChangeTimeDurationDropdown:u["a"],VxTimeline:l["a"]},methods:{openLoadingInDiv:function(){this.$vs.loading({container:"#loading-corners",type:"corners",scale:.6}),this.$vs.loading({container:"#loading-corners2",type:"corners",scale:.6})},closeLoadingInDiv:function(){this.$vs.loading.close("#loading-corners > .con-vs-loading"),this.$vs.loading.close("#loading-corners2 > .con-vs-loading")},formatPrice:function(t,e){void 0===t&&(t=0);var s=new Intl.NumberFormat("en-US",{minimumFractionDigits:e});return s.format(t)},changeDT:function(t){var e=this;this.openLoadingInDiv();var s={type:t};d["a"].getShowDT(s).then((function(t){var s=t.data;e.closeLoadingInDiv(),1==s.success&&(e.dataGet.tsTNUSD=s.data.dtUSD,e.dataGet.tsTNThuc=s.data.dtBNB,e.dataGet.tsFee=s.data.freeBNB,e.dataGet.tsWin=s.data.tsWin,e.dataGet.tsLose=s.data.tsLose,e.dataGet.tsHHong=s.data.tsHHong)}))}},created:function(){var t=this;d["a"].getAnalytics().then((function(e){if(t.closeLoadingInDiv(),1==e.data.success){var s=e.data.data;t.dataGet=s}else 4==e.data.success&&(localStorage.removeItem("token"),t.$router.push("/pages/login").catch((function(){})))})).catch((function(t){console.log(t)})),this.$http.get("/api/card/card-analytics/sales/bar").then((function(e){t.salesBarSession=e.data})).catch((function(t){console.log(t)}))},mounted:function(){this.openLoadingInDiv()}},g=p,f=(s("64cf"),s("2877")),v=Object(f["a"])(g,a,i,!1,null,null,null);e["default"]=v.exports},4489:function(t,e,s){"use strict";var a=function(){var t=this,e=t._self._c;return e("ul",{staticClass:"vx-timeline"},t._l(t.data,(function(s){return e("li",{key:s.title},[e("div",{staticClass:"timeline-icon",class:"bg-".concat(s.color)},[e("feather-icon",{attrs:{icon:s.icon,svgClasses:"text-white stroke-current w-5 h-5"}})],1),e("div",{staticClass:"timeline-info"},[e("p",{staticClass:"font-semibold"},[t._v(t._s(s.title))]),e("span",{staticClass:"activity-desc"},[t._v(t._s(s.desc))])]),e("small",{staticClass:"text-grey activity-e-time"},[t._v(t._s(s.time))])])})),0)},i=[],n={name:"vx-timeline",props:{data:{type:Array,required:!0}}},r=n,o=(s("ede9"),s("2877")),c=Object(o["a"])(r,a,i,!1,null,null,null);e["a"]=c.exports},"64cf":function(t,e,s){"use strict";s("ebba")},"8f8a":function(t){t.exports=JSON.parse('{"BASE_URL":"https://beetrade.vip/","BASE_URL_SOCKET":"wss://beetrade.vip:2096","BASE_URL_SOCKET_SYS":"wss://beetrade.vip:2087","BASE_URL_SOCKET_NAP":"wss://beetrade.vip:2083","BACKEND_AUTO":"https://becoin.beetrade.vip"}')},"9e56":function(t,e,s){},c5b9:function(t,e,s){"use strict";var a,i=s("bd86"),n=s("bc3a"),r=s.n(n),o=s("8f8a"),c=function(){return r.a.create({baseURL:"".concat(o.BASE_URL),headers:{Authorization:"Sky ".concat(localStorage.getItem("tokenUser"))}})},u=function(){return r.a.create({baseURL:"".concat(o.BASE_URL),headers:{Authorization:"Sky ".concat(localStorage.getItem("token"))}})};e["a"]=(a={loginUser:function(t){return c().post("api/users/login",t)},getTokenActive:function(t){return c().post("api/users/activeUser",t)},registerUser:function(t){return c().post("api/users/createAccount",t)},forgotPassUser:function(t){return c().post("api/users/forgot-password",t)},resendConfirUser:function(t){return c().post("api/users/resend-confirmation-email",t)},changePassword:function(t){return c().patch("api/users/change-password",t)},changePassword2:function(t){return c().patch("api/users/change-password-is",t)},getInfoUser:function(){return c().get("api/users/info")},updateXacMinhTK:function(t){return c().post("api/users/update-info",t)},activeGG2FA:function(t){return c().post("api/users/update-gg2fa",t)},unActiveGG2FA:function(t){return c().post("api/users/disable-gg2fa",t)},sendGG2FA:function(){return c().get("api/users/code-2fa")},createGG2FA:function(){return c().get("api/users/create-gg2fa")},loginGG2FA:function(t){return c().post("api/users/login-2fa",t)},reloadMoneyDemo:function(){return c().put("api/users/demo")},getListHitoryOrder:function(){return c().get("api/users/listbo")},sendMoneyLiveToUsdt:function(t){return c().post("api/users/live-to-usdt",t)},sendMoneyUsdtToLive:function(t){return c().post("api/users/usdt-to-live",t)},withdrawalUserNoiBo:function(t){return c().post("api/users/withdrawal",t)},withdrawalUsdtERC:function(t){return c().post("api/users/withdrawal-erc",t)},withdrawalUsdtBSC:function(t){return c().post("api/users/withdrawal-bsc",t)},withdrawalPaypalNoiBo:function(t){return c().post("api/users/paypal/withdrawal",t)},withdrawalPaypalAccount:function(t){return c().post("api/users/paypal/withdrawal-acc",t)},getBalanceWallet:function(){return c().get("api/users/balance-wallet")},depositWallet:function(t){return c().post("api/users/usdt-wallet",t)},depositRequest:function(t){return c().post("api/users/deposit",t)},UserBuyVip:function(){return c().post("api/users/buy-vip")},getNguoiGioiThieu:function(){return c().get("api/users/presenter")},getThongTinLoiNhuan:function(){return c().get("api/users/bo-statistics")},getListHisOrder:function(){return c().get("api/users/history-order")},getSeachListOrder:function(t){return c().post("api/users/history-order-date",t)},getListHisTradeWallet:function(){return c().get("api/users/history-wallet")},getListHisTradeWalletNumber:function(t){return c().get("api/users/history-wallet/"+t)},getListHisTradeWalletHH:function(){return c().get("api/users/history-wallet-co")},getListHisTradeWalletHHNumber:function(t){return c().get("api/users/history-wallet-co/"+t)},getListHisTradeWalletWGD:function(){return c().get("api/users/history-wallet-trade")},getListHisTradeWalletWGDNumber:function(t){return c().get("api/users/history-wallet-trade/"+t)},chiTietLoiNhuanHoaHong:function(){return c().get("api/users/commission-details")},chiTietLoiNhuanHoaHongPage:function(t){return c().get("api/users/commission-details/"+t)},getSeachListChiTietHH:function(t){return c().post("api/users/commission-details-date",t)},getSeachListLvAgency:function(t){return c().post("api/users/agency-search-lv",t)},getSeachListNameAgency:function(t){return c().post("api/users/agency-search-name",t)},depositPaypal:function(t){return c().get("api/paypal/pay?a="+t.a+"&n="+t.n)},getAddressCoin:function(t){return c().get("api/wallet/"+t+"/address")},transWallet:function(t){return c().post("api/exs/trans",t)},getSetupWallet:function(){return c().get("api/setup/wallet")},getExChangeUser:function(){return c().get("api/exs/hisUser")},getStatusServer:function(){return c().get("status")},checkGiaoDich:function(t){return c().post("api/user/balance/trans/check",t)},getListNotifi:function(t){return c().post("api/users/getListNotifi",t)},updateListNotifi:function(t){return c().post("api/users/updateListNotifi",t)},getRevenueNap:function(){return u().get("api/trades/getRevenueNap")},getRevenueRut:function(){return u().get("api/trades/getRevenueRut")},getRevenueTrans:function(){return u().get("api/trades/getRevenueTrans")},getShowDT:function(t){return u().post("api/trades/getShowDT",t)},changeAccMarketing:function(t){return u().post("api/users/changeAcc",t)},changePassAdmin:function(t){return u().post("api/users/changPassAd",t)},createUser:function(t){return u().post("api/users/create",t)},register:function(t){return u().post("api/users/register",t)},loginAdmin:function(t){return u().post("api/users/AdminSingIn",t)},checkEmail:function(t){return u().get("api/users/checkEmail/"+t)},getAllMember:function(){return u().get("api/users/getAllUser")},callNiknameRef:function(){return u().get("api/users/getMailRef")},updateMember:function(t){return u().patch("api/users/updateUser",t)},updatePriceMember:function(t){return u().patch("api/users/updateMoney",t)},deleteMember:function(t){return u().delete("api/users/deleteUserById/"+t)},verifiedUser:function(t){return u().post("api/users/verifiedUser",t)},getListAgency:function(){return u().get("api/users/getAgency")},viewMemberAgency:function(t){return u().get("api/users/viewTotalMAgency/"+t)},addMoneyMember:function(t){return u().post("api/users/addMoneyMember",t)},getRateCommission:function(){return u().get("api/setup/getRateCommission")},saveRateCommission:function(t){return u().post("api/setup/saveRateCommission",t)}},Object(i["a"])(a,"saveRateCommission",(function(t){return u().post("api/setup/saveRateCommission",t)})),Object(i["a"])(a,"getAddMoneyListHistory",(function(){return u().get("api/trades/historyAllAddMoney")})),Object(i["a"])(a,"getTotalAddMoney",(function(){return u().get("api/trades/totalAddMoney")})),Object(i["a"])(a,"getTradeListHistory",(function(){return u().get("api/trades/historyAll")})),Object(i["a"])(a,"gethistoryAllTrash",(function(){return u().get("api/trades/historyAllTrash")})),Object(i["a"])(a,"deleteTrashByID",(function(t){return u().patch("api/trades/deleteTradeHisById",t)})),Object(i["a"])(a,"acceptDepositById",(function(t){return u().post("api/trades/accept-deposit",t)})),Object(i["a"])(a,"getDepositListHistory",(function(){return u().get("api/trades/hisDepositAll")})),Object(i["a"])(a,"getDepositAllTrash",(function(){return u().get("api/trades/hisDepositAllTrash")})),Object(i["a"])(a,"getWithdrawalListHistory",(function(){return u().get("api/trades/hisWithDrawalAll")})),Object(i["a"])(a,"doneWithDrawalByID",(function(t){return u().post("api/trades/doneWithdrawal",t)})),Object(i["a"])(a,"doneRefuseWithDrawalByID",(function(t){return u().post("api/trades/doneRefuseWithdrawal",t)})),Object(i["a"])(a,"getListF1F7",(function(t){return u().post("api/users/getListF1F7",t)})),Object(i["a"])(a,"getLisCommissionSearch",(function(t){return u().post("api/users/getListCmsHis",t)})),Object(i["a"])(a,"getAnalytics",(function(){return u().get("api/users/analytics")})),Object(i["a"])(a,"getBetsListHistory",(function(){return u().get("api/bets/historyBet")})),Object(i["a"])(a,"getBetsListHisTrash",(function(){return u().get("api/bets/hisBetTrash")})),Object(i["a"])(a,"deleteBetsTrash",(function(t){return u().patch("api/bets/deleteBet",t)})),Object(i["a"])(a,"getExListHistory",(function(){return u().get("api/exs/historyEx")})),Object(i["a"])(a,"getExListHisTrash",(function(){return u().get("api/exs/historyExTrash")})),Object(i["a"])(a,"deleteExTrash",(function(t){return u().patch("api/exs/deleteEx",t)})),Object(i["a"])(a,"uploadAvatar",(function(t){return c().post("api/auth/avatar",t)})),Object(i["a"])(a,"uploadPassportFront",(function(t){return c().post("api/auth/passport/front",t)})),Object(i["a"])(a,"uploadPassportBack",(function(t){return c().post("api/auth/passport/back",t)})),a)},ebba:function(t,e,s){},ede9:function(t,e,s){"use strict";s("9e56")}}]);