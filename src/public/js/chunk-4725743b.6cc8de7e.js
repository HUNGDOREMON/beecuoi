(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4725743b"],{1558:function(t,e,s){"use strict";s("923df")},"210b":function(t,e,s){t.exports=s.p+"img/paypal-mini.4a147115.png"},"8f8a":function(t){t.exports=JSON.parse('{"BASE_URL":"https://beetrade.vip/","BASE_URL_SOCKET":"wss://beetrade.vip:2096","BASE_URL_SOCKET_SYS":"wss://beetrade.vip:2087","BASE_URL_SOCKET_NAP":"wss://beetrade.vip:2083","BACKEND_AUTO":"https://becoin.beetrade.vip"}')},"923df":function(t,e,s){},b72f:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"data-list-container",attrs:{id:"list-tool-setting"}},[[e("div",{staticClass:"vx-row"},[e("div",{staticClass:"vx-col w-full mb-base"},[t._m(0),e("div",{staticClass:"vx-row"},[e("div",{staticClass:"vx-col centerx mb-4 sm:w-1/2 md:w-1/4 lg:w-3/12 xl:w-3/12"},[e("vs-input",{staticClass:"m-2 mb-4",staticStyle:{display:"inline-block"},attrs:{type:"number","label-placeholder":"Min nạp Paypal"},model:{value:t.settingJson.min_d_paypal,callback:function(e){t.$set(t.settingJson,"min_d_paypal",e)},expression:"settingJson.min_d_paypal"}}),e("vs-input",{staticClass:"m-2 mb-4",staticStyle:{display:"inline-block"},attrs:{type:"number","label-placeholder":"Min rút Paypal"},model:{value:t.settingJson.min_w_paypal,callback:function(e){t.$set(t.settingJson,"min_w_paypal",e)},expression:"settingJson.min_w_paypal"}}),e("vs-input",{staticClass:"m-2 mb-4",staticStyle:{display:"inline-block"},attrs:{type:"number","label-placeholder":"Phí rút Paypal Nội Bộ"},model:{value:t.settingJson.fee_w_paypal_nb,callback:function(e){t.$set(t.settingJson,"fee_w_paypal_nb",e)},expression:"settingJson.fee_w_paypal_nb"}}),e("vs-input",{staticClass:"m-2 mb-4",staticStyle:{display:"inline-block"},attrs:{type:"number","label-placeholder":"Phí rút Paypal Địa chỉ"},model:{value:t.settingJson.fee_w_paypal_acc,callback:function(e){t.$set(t.settingJson,"fee_w_paypal_acc",e)},expression:"settingJson.fee_w_paypal_acc"}})],1),e("div",{staticClass:"vx-col centerx mb-4 sm:w-1/2 md:w-1/4 lg:w-3/12 xl:w-3/12"},[e("vs-input",{staticClass:"m-2 mb-4",staticStyle:{display:"inline-block"},attrs:{type:"number","label-placeholder":"Min nạp USDT"},model:{value:t.settingJson.min_d_usdt,callback:function(e){t.$set(t.settingJson,"min_d_usdt",e)},expression:"settingJson.min_d_usdt"}}),e("vs-input",{staticClass:"m-2 mb-4",staticStyle:{display:"inline-block"},attrs:{type:"number","label-placeholder":"Min rút USDT"},model:{value:t.settingJson.min_w_usdt,callback:function(e){t.$set(t.settingJson,"min_w_usdt",e)},expression:"settingJson.min_w_usdt"}}),e("vs-input",{staticClass:"m-2 mb-4",staticStyle:{display:"inline-block"},attrs:{type:"number","label-placeholder":"Phí rút USDT Nội bộ"},model:{value:t.settingJson.fee_w_usdt_nb,callback:function(e){t.$set(t.settingJson,"fee_w_usdt_nb",e)},expression:"settingJson.fee_w_usdt_nb"}}),e("vs-input",{staticClass:"m-2 mb-4",staticStyle:{display:"inline-block"},attrs:{type:"number","label-placeholder":"Phí rút USDT BEP20 (BSC)"},model:{value:t.settingJson.fee_w_usdt_BEP20,callback:function(e){t.$set(t.settingJson,"fee_w_usdt_BEP20",e)},expression:"settingJson.fee_w_usdt_BEP20"}}),e("vs-input",{staticClass:"m-2 mb-4",staticStyle:{display:"inline-block"},attrs:{type:"number","label-placeholder":"Phí rút USDT ERC 20"},model:{value:t.settingJson.fee_w_usdt_ERC20,callback:function(e){t.$set(t.settingJson,"fee_w_usdt_ERC20",e)},expression:"settingJson.fee_w_usdt_ERC20"}})],1)])]),e("div",{staticClass:"vx-col w-full md:w-1/2 lg:w-6/12 xl:w-6/12 mb-base"},[t._m(1),e("div",{staticClass:"vx-row"},[e("div",{staticClass:"vx-col w-full centerx md:w-1/2 lg:w-2/4 xl:w-2/4"},[e("p",{staticClass:"mb-4"},[t._v("Mặc định Ví sử dụng:")]),e("ul",{staticClass:"centerx"},[e("li",{staticClass:"mb-4"},[e("vs-radio",{attrs:{"vs-value":"usdt"},model:{value:t.settingJson.default_wallet_sys,callback:function(e){t.$set(t.settingJson,"default_wallet_sys",e)},expression:"settingJson.default_wallet_sys"}},[t._v("Ví USDT")])],1),e("li",{staticClass:"mb-4"},[e("vs-radio",{attrs:{disabled:"disabled","vs-value":"btc"},model:{value:t.settingJson.default_wallet_sys,callback:function(e){t.$set(t.settingJson,"default_wallet_sys",e)},expression:"settingJson.default_wallet_sys"}},[t._v("Ví BTC")])],1),e("li",{staticClass:"mb-4"},[e("vs-radio",{attrs:{disabled:"disabled","vs-value":"eth"},model:{value:t.settingJson.default_wallet_sys,callback:function(e){t.$set(t.settingJson,"default_wallet_sys",e)},expression:"settingJson.default_wallet_sys"}},[t._v("Ví ETH")])],1)]),t._m(2)]),e("div",{staticClass:"vx-col w-full centerx md:w-1/2 lg:w-2/4 xl:w-2/4"},[e("p",{staticClass:"mb-4"},[t._v("Hiển thị Ví thanh toán:")]),e("ul",{staticClass:"centerx"},[e("li",{staticClass:"mb-4 relative"},[e("vs-checkbox",{on:{change:function(e){return t.changeWallet("usdt",e)}},model:{value:t.settingJson.show_wallet_usdt,callback:function(e){t.$set(t.settingJson,"show_wallet_usdt",e)},expression:"settingJson.show_wallet_usdt"}},[t._v("Ví USDT")]),e("div",{staticClass:"absolute",staticStyle:{top:"0",right:"0"}},[e("IconCrypto",{staticStyle:{width:"20px"},attrs:{coinname:"USDT",color:"color",format:"svg"}})],1)],1),e("li",{staticClass:"mb-4 relative"},[e("vs-checkbox",{on:{change:function(e){return t.changeWallet("paypal",e)}},model:{value:t.settingJson.show_wallet_paypal,callback:function(e){t.$set(t.settingJson,"show_wallet_paypal",e)},expression:"settingJson.show_wallet_paypal"}},[t._v("Ví PAYPAL")]),e("div",{staticClass:"absolute",staticStyle:{top:"0",right:"0"}},[e("img",{attrs:{width:"20",src:s("210b")}})])],1)]),t._m(3)])])]),e("div",{staticClass:"vx-col w-full md:w-1/2 lg:w-6/12 xl:w-6/12 mb-base"},[t._m(4),e("div",{staticClass:"vx-row"},[e("div",{staticClass:"vx-col centerx md:w-1/2 lg:w-2/4 xl:w-2/4"},[e("vs-input",{staticClass:"m-2 mb-4",staticStyle:{display:"inline-block"},attrs:{type:"number","label-placeholder":"Auto Update Seconds"},model:{value:t.settingJson.timeLoopUpdateQuote,callback:function(e){t.$set(t.settingJson,"timeLoopUpdateQuote",e)},expression:"settingJson.timeLoopUpdateQuote"}}),t._m(5),e("div",{staticClass:"m-2 block"},[e("vs-switch",{on:{change:function(e){t.checkOnOffAutoQuote=!t.checkOnOffAutoQuote}},model:{value:t.checkOnOffAutoQuote,callback:function(e){t.checkOnOffAutoQuote=e},expression:"checkOnOffAutoQuote"}},[e("span",{attrs:{slot:"on"},slot:"on"},[t._v("Bật")]),e("span",{attrs:{slot:"off"},slot:"off"},[t._v("Tắt")])])],1),t._m(6)],1),e("div",{staticClass:"vx-col centerx md:w-1/2 lg:w-2/4 xl:w-2/4"},[e("p",{staticClass:"mb-4"},[t._v("Quote USD:")]),e("vs-input",{staticClass:"m-2 mb-4",staticStyle:{display:"inline-block"},attrs:{type:"number","label-placeholder":"1 USD = ".concat(t.formatPrice(1/t.settingJson.quote_USD_BTC,6)," BTC")},model:{value:t.settingJson.quote_USD_BTC,callback:function(e){t.$set(t.settingJson,"quote_USD_BTC",e)},expression:"settingJson.quote_USD_BTC"}}),e("vs-input",{staticClass:"m-2 mb-4",staticStyle:{display:"inline-block"},attrs:{type:"number","label-placeholder":"1 USD = ".concat(t.formatPrice(1/t.settingJson.quote_USD_ETH,4)," ETH")},model:{value:t.settingJson.quote_USD_ETH,callback:function(e){t.$set(t.settingJson,"quote_USD_ETH",e)},expression:"settingJson.quote_USD_ETH"}}),e("vs-input",{staticClass:"m-2 mb-4",staticStyle:{display:"inline-block"},attrs:{type:"number","label-placeholder":"1 USD = ".concat(t.formatPrice(1/t.settingJson.quote_USD_USDT,2)," USDT")},model:{value:t.settingJson.quote_USD_USDT,callback:function(e){t.$set(t.settingJson,"quote_USD_USDT",e)},expression:"settingJson.quote_USD_USDT"}}),e("vs-input",{staticClass:"m-2 mb-4",staticStyle:{display:"inline-block"},attrs:{type:"number","label-placeholder":"1 USD = ".concat(t.formatPrice(1/t.settingJson.quote_USD_PAYPAL,2)," PAYPAL")},model:{value:t.settingJson.quote_USD_PAYPAL,callback:function(e){t.$set(t.settingJson,"quote_USD_PAYPAL",e)},expression:"settingJson.quote_USD_PAYPAL"}}),t._m(7)],1)])]),e("div",{staticClass:"vx-col w-full mb-base"},[e("div",{staticClass:"vx-row"},[e("div",{staticClass:"vx-col centerx md:w-1/2 lg:w-6/12 xl:w-6/12"},[t._m(8),e("div",{staticClass:"vx-row"},[e("div",{staticClass:"vx-col centerx md:w-1/2 lg:w-6/12 xl:w-6/12"},[e("p",{staticClass:"mb-4"},[t._v("Telegram kênh NẠP / RÚT:")]),e("div",[e("vs-checkbox",{attrs:{disabled:!t.activeNTF},on:{change:function(e){return t.changeActiveNotify("d",e)}},model:{value:t.settingJson.teleActiveDeposit,callback:function(e){t.$set(t.settingJson,"teleActiveDeposit",e)},expression:"settingJson.teleActiveDeposit"}},[t._v("Nạp tiền")]),t._m(9),e("vs-checkbox",{attrs:{disabled:!t.activeNTF},on:{change:function(e){return t.changeActiveNotify("w",e)}},model:{value:t.settingJson.teleActiveWithdraw,callback:function(e){t.$set(t.settingJson,"teleActiveWithdraw",e)},expression:"settingJson.teleActiveWithdraw"}},[t._v("Rút tiền")]),t._m(10)],1)]),e("div",{staticClass:"vx-col centerx md:w-1/2 lg:w-6/12 xl:w-6/12"},[e("p",{staticClass:"mb-4"},[t._v("Telegram kênh ĐẶT CƯỢC:")]),e("div",[e("vs-checkbox",{attrs:{disabled:!t.activeNTB},on:{change:function(e){return t.changeActiveNotify("b",e)}},model:{value:t.settingJson.teleActiveBet,callback:function(e){t.$set(t.settingJson,"teleActiveBet",e)},expression:"settingJson.teleActiveBet"}},[t._v("Đặt cược")]),t._m(11)],1)])])]),e("div",{staticClass:"vx-col centerx md:w-1/2 lg:w-3/12 xl:w-3/12"},[t._m(12),e("vs-checkbox",{on:{change:function(e){return t.changeActiveBaoTri(e)}},model:{value:t.settingJson.maintenance,callback:function(e){t.$set(t.settingJson,"maintenance",e)},expression:"settingJson.maintenance"}},[t._v("Bảo trì")]),t._m(13),t._m(14),e("vs-radio",{attrs:{"vs-value":"ct"},model:{value:t.settingJson.default_netw_pay,callback:function(e){t.$set(t.settingJson,"default_netw_pay",e)},expression:"settingJson.default_netw_pay"}},[t._v("Chính thức")]),e("p"),e("vs-radio",{attrs:{"vs-value":"tn"},model:{value:t.settingJson.default_netw_pay,callback:function(e){t.$set(t.settingJson,"default_netw_pay",e)},expression:"settingJson.default_netw_pay"}},[t._v("Thử nghiệm")]),e("p",[e("b",[t._v("- Mạng đang sử dụng là:\n                "+t._s("tn"==t.settingJson.default_netw_pay?"Thử nghiệm":"Chính thức"))])]),t._m(15)],1),e("div",{staticClass:"vx-col centerx w-full"},[t._m(16),e("vs-checkbox",{on:{change:function(e){return t.changeActiveNotification(e)}},model:{value:t.settingJson.notify_enable,callback:function(e){t.$set(t.settingJson,"notify_enable",e)},expression:"settingJson.notify_enable"}},[t._v("Hiển thị thông báo")]),e("vs-input",{staticClass:"mt-12 w-full",attrs:{type:"text","label-placeholder":"Nội dung thông báo"},model:{value:t.settingJson.notify_message,callback:function(e){t.$set(t.settingJson,"notify_message",e)},expression:"settingJson.notify_message"}})],1)])]),e("vs-button",{staticClass:"w-full",attrs:{color:"success",type:"filled"},on:{click:t.clickSubmitSetting}},[t._v("Cập nhật")])],1)]],2)},i=[function(){var t=this,e=t._self._c;return e("p",{staticClass:"mb-4",staticStyle:{"text-decoration":"overline"}},[e("span",{staticStyle:{"text-decoration":"overline"}},[t._v("[THIẾT LẬP MIN RÚT / NẠP]:")])])},function(){var t=this,e=t._self._c;return e("p",{staticClass:"mb-4"},[e("span",{staticStyle:{"text-decoration":"overline"}},[t._v("[THIẾT LẬP VÍ]:")])])},function(){var t=this,e=t._self._c;return e("p",[e("i",[t._v("Ghi chú: Ví sử dụng mặc định dùng để giao dịch tiền tệ giữa\n                Tài Khoản thực và các Ví phụ khác")])])},function(){var t=this,e=t._self._c;return e("p",[e("i",[t._v("Ghi chú: Các Ví chứa các khoản tiền NẠP và Rút")])])},function(){var t=this,e=t._self._c;return e("p",{staticClass:"mb-4"},[e("span",{staticStyle:{"text-decoration":"overline"}},[t._v("[THIẾT LẬP QUOTE USD đồng COIN]: ")]),e("i",[t._v("( Mặc định Auto Update )")])])},function(){var t=this,e=t._self._c;return e("p",{staticClass:"m-2 mb-4"},[e("i",[t._v("Chú ý: Thời gian được tính bằng (giây)")])])},function(){var t=this,e=t._self._c;return e("p",{staticClass:"m-2"},[e("i",[t._v("Chú ý: Bật / tắt Auto cập nhật USD Quote")])])},function(){var t=this,e=t._self._c;return e("p",[e("i",[t._v("Chú ý: Paypal mặc định là 1")])])},function(){var t=this,e=t._self._c;return e("p",{staticClass:"mb-4"},[e("span",{staticStyle:{"text-decoration":"overline"}},[t._v("[THIẾT LẬP GỬI THÔNG BÁO]:\n              ")])])},function(){var t=this,e=t._self._c;return e("p",[e("i",[t._v("- Ghi chú: Gửi tin khi người dùng nạp tiền")])])},function(){var t=this,e=t._self._c;return e("p",[e("i",[t._v("- Ghi chú: Gửi tin khi người dùng rút tiền")])])},function(){var t=this,e=t._self._c;return e("p",[e("i",[t._v("- Ghi chú: Gửi tin khi người dùng đặt cược")])])},function(){var t=this,e=t._self._c;return e("p",{staticClass:"mb-4"},[e("span",{staticStyle:{"text-decoration":"overline"}},[t._v("[THIẾT LẬP BẢO TRÌ]:\n              ")])])},function(){var t=this,e=t._self._c;return e("p",{staticClass:"mb-4"},[e("i",[t._v("- Ghi chú: Bảo trì hệ thống")])])},function(){var t=this,e=t._self._c;return e("p",{staticClass:"mb-4"},[e("span",{staticStyle:{"text-decoration":"overline"}},[t._v("[THIẾT LẬP MẠNG NẠP TIỀN]:\n              ")])])},function(){var t=this,e=t._self._c;return e("p",[e("i",[t._v("- Ghi chú: Mạng nạp tiền mặc định BSC "),e("br"),e("a",{attrs:{href:"https://bscscan.com"}},[t._v("https://bscscan.com")])])])},function(){var t=this,e=t._self._c;return e("p",{staticClass:"mb-4"},[e("span",{staticStyle:{"text-decoration":"overline"}},[t._v("[THIẾT LẬP THÔNG BÁO]:\n              ")])])}],a=s("8f8a"),o={components:{},data:function(){return{cnSv:0,checkOnOffAutoQuote:!0,radioBC:"payeer",settingJson:{min_d_paypal:5,min_d_btc:.001,min_d_eth:.02,min_d_usdt:5,min_w_paypal:5,min_w_btc:.001,min_w_eth:.02,min_w_usdt:5,fee_w_paypal_nb:0,fee_w_paypal_acc:2,fee_w_btc_nb:0,fee_w_btc_acc:3e-4,fee_w_eth_nb:0,fee_w_eth_ERC20:.001,fee_w_usdt_nb:0,fee_w_usdt_BEP20:1,fee_w_usdt_ERC20:2,default_wallet_sys:"usdt",default_netw_pay:"tn",show_wallet_paypal:!0,show_wallet_btc:!1,show_wallet_eth:!1,show_wallet_usdt:!1,timeLoopUpdateQuote:30,quote_USD_USDT:1,quote_USD_BTC:1,quote_USD_ETH:1,quote_USD_PAYPAL:1,teleChatIDBet:"",teleChatID:"",teleToken:"",teleActiveBet:!1,teleActiveDeposit:!1,teleActiveWithdraw:!1,ADDRESS_ETH_USDT:"",PRIVATE_KEY_ADDRESS_ETH_USDT:"",ADDRESS_ETH_TRANSACTION:"",PRIVATE_KEY_ETH_TRANSACTION:"",BANK_NAME:"",BANK_ACCOUNT:"",BANK_ACCOUNT_NAME:"",BANK_BRANCH:"",notify_enable:!1,notify_message:"",maintenance:!1}}},computed:{activeNTB:function(){return""!=this.settingJson.teleChatIDBet},activeNTF:function(){return""!=this.settingJson.teleChatID&&""!=this.settingJson.teleToken}},methods:{formatPrice:function(t,e){var s=new Intl.NumberFormat("en-US",{minimumFractionDigits:e});return s.format(t)},changeActiveBaoTri:function(t){var e=t.target.checked;this.settingJson.maintenance=e},changeActiveNotification:function(t){var e=t.target.checked;this.settingJson.notify_enable=e},changeActiveNotify:function(t,e){var s=e.target.checked;switch(t){case"b":this.settingJson.teleActiveBet=s;break;case"d":this.settingJson.teleActiveDeposit=s;break;case"w":this.settingJson.teleActiveWithdraw=s;break}},changeWallet:function(t,e){var s=e.target.checked;switch(t){case"usdt":this.settingJson.show_wallet_usdt=s;break;case"btc":this.settingJson.show_wallet_btc=s;break;case"eth":this.settingJson.show_wallet_eth=s;break;case"paypal":this.settingJson.show_wallet_paypal=s;break}},clickSubmitSetting:function(){var t={qUSDT:this.settingJson.quote_USD_USDT,qETH:this.settingJson.quote_USD_ETH,qBTC:this.settingJson.quote_USD_BTC,qPaypal:this.settingJson.quote_USD_PAYPAL,tCUseSys:this.settingJson.default_wallet_sys.toLowerCase(),mDBTC:this.settingJson.min_d_btc,mDETH:this.settingJson.min_d_eth,mDUSDT:this.settingJson.min_d_usdt,mDPaypal:this.settingJson.min_d_paypal,mWBTC:this.settingJson.min_w_btc,mWETH:this.settingJson.min_w_eth,mWUSDT:this.settingJson.min_w_usdt,mWPaypal:this.settingJson.min_w_paypal,iAWPaypal:this.settingJson.show_wallet_paypal,iAWETH:this.settingJson.show_wallet_eth,iAWUSDT:this.settingJson.show_wallet_usdt,iAWBTC:this.settingJson.show_wallet_btc,fDPaypalNB:this.settingJson.fee_w_paypal_nb,fDPaypalAcc:this.settingJson.fee_w_paypal_acc,fDBTCNB:this.settingJson.fee_w_btc_nb,fDBTCAcc:this.settingJson.fee_w_btc_acc,fDETHNB:this.settingJson.fee_w_eth_nb,fDETHERC20:this.settingJson.fee_w_eth_ERC20,fDUSDTNB:this.settingJson.fee_w_usdt_nb,fDUSDTBEP20:this.settingJson.fee_w_usdt_BEP20,fDUSDTERC20:this.settingJson.fee_w_eth_ERC20,teleChatIDBet:this.settingJson.teleChatID,teleChatID:this.settingJson.teleChatID,teleToken:this.settingJson.teleChatToken,teleActiveBet:this.settingJson.activeBetSendTelegram,teleActiveDeposit:this.settingJson.activeDepositSendTelegram,teleActiveWithdraw:this.settingJson.activeWithdraSendTelegram,ADDRESS_ETH_USDT:this.settingJson.ADDRESS_ETH_USDT,PRIVATE_KEY_ADDRESS_ETH_USDT:this.settingJson.PRIVATE_KEY_ADDRESS_ETH_USDT,ADDRESS_ETH_TRANSACTION:this.settingJson.ADDRESS_ETH_TRANSACTION,PRIVATE_KEY_ETH_TRANSACTION:this.settingJson.PRIVATE_KEY_ETH_TRANSACTION,IS_TEST_SMART_CHAIN:"tn"==this.settingJson.default_netw_pay,timeLoopQuote:this.settingJson.timeLoopUpdateQuote,autoQuote:this.settingJson.checkOnOffAutoQuote,BANK_NAME:this.settingJson.BANK_NAME,BANK_ACCOUNT:this.settingJson.BANK_ACCOUNT,BANK_ACCOUNT_NAME:this.settingJson.BANK_ACCOUNT_NAME,BANK_BRANCH:this.settingJson.BANK_BRANCH,maintenance:this.settingJson.maintenance,notify_enable:this.settingJson.notify_enable,notify_message:this.settingJson.notify_message};this.sendMessage({type:"setDataSys",data:t})},sendMessage:function(t){return this.connection.send(JSON.stringify(t)),this.$vs.notify({text:"Đã cập nhật hệ thống",color:"success",position:"top-right",iconPack:"feather",icon:"icon-message-square"})},connectSever:function(){var t=this;this.connection=new WebSocket(a.BASE_URL_SOCKET_SYS),this.connection.onopen=function(){console.log("Successfully connected to the echo websocket server systems...")},this.connection.onclose=function(){0==t.cnSv?t.$vs.notify({text:"Không kết nối được tới máy chủ. Sẽ kết nối lại sau 5 giây",color:"danger",position:"top-right",iconPack:"feather",icon:"icon-message-square"}):t.$vs.notify({text:"Đang kết nối lại lần "+t.cnSv,color:"danger",position:"top-right",iconPack:"feather",icon:"icon-message-square"}),6==t.cnSv&&t.$vs.notify({text:"Kết nối thất bại. Vui lòng kiểm tra và bật lại máy chủ",color:"danger",position:"top-right",iconPack:"feather",icon:"icon-message-square"}),t.cnSv<=5&&setTimeout((function(){t.connectSever(),t.cnSv++}),5e3)},this.connection.onmessage=function(e){var s=JSON.parse(e.data),n=s.data;"getDataSys"===s.type&&(t.settingJson.min_d_paypal=n.minDepositPaypal,t.settingJson.min_d_btc=n.minDepositBTC,t.settingJson.min_d_eth=n.minDepositETH,t.settingJson.min_d_usdt=n.minDepositUSDT,t.settingJson.min_w_paypal=n.minWithdrawalPaypal,t.settingJson.min_w_btc=n.minWithdrawalBTC,t.settingJson.min_w_eth=n.minWithdrawalETH,t.settingJson.min_w_usdt=n.minWithdrawalUSDT,t.settingJson.fee_w_paypal_nb=n.feeRutPaypalNoiBo,t.settingJson.fee_w_paypal_acc=n.feeRutPaypalAcc,t.settingJson.fee_w_btc_nb=n.feeRutBTCNoiBo,t.settingJson.fee_w_btc_acc=n.feeRutBTCAcc,t.settingJson.fee_w_eth_nb=n.feeRutETHNoiBo,t.settingJson.fee_w_eth_ERC20=n.feeRutETHERC20,t.settingJson.fee_w_usdt_nb=n.feeRutUSDTNoiBo,t.settingJson.fee_w_usdt_BEP20=n.feeRutUSDTBEP20,t.settingJson.fee_w_eth_ERC20=n.feeRutUSDTERC20,t.settingJson.default_wallet_sys=n.typeCurrUseSys.toLowerCase(),t.settingJson.show_wallet_paypal=n.isActiveWalletPaypal,t.settingJson.show_wallet_btc=n.isActiveWalletBTC,t.settingJson.show_wallet_eth=n.isActiveWalletETH,t.settingJson.show_wallet_usdt=n.isActiveWalletUSDT,t.settingJson.timeLoopUpdateQuote=n.timeLoop,t.checkOnOffAutoQuote=n.autoQuoteSet,t.settingJson.quote_USD_BTC=n.quotePriceBTC,t.settingJson.quote_USD_ETH=n.quotePriceETH,t.settingJson.quote_USD_USDT=n.quotePriceUSDT,t.settingJson.quote_USD_PAYPAL=n.quotePricePAYPAL,t.settingJson.teleChatIDBet=n.teleChatIDBet,t.settingJson.teleChatID=n.teleChatID,t.settingJson.teleToken=n.teleChatToken,t.settingJson.teleActiveBet=n.activeBetSendTelegram,t.settingJson.teleActiveDeposit=n.activeDepositSendTelegram,t.settingJson.teleActiveWithdraw=n.activeWithdraSendTelegram,t.settingJson.ADDRESS_ETH_USDT=n.ADDRESS_ETH_USDT,t.settingJson.PRIVATE_KEY_ADDRESS_ETH_USDT=n.PRIVATE_KEY_ADDRESS_ETH_USDT,t.settingJson.ADDRESS_ETH_TRANSACTION=n.ADDRESS_ETH_TRANSACTION,t.settingJson.PRIVATE_KEY_ETH_TRANSACTION=n.PRIVATE_KEY_ETH_TRANSACTION,t.settingJson.default_netw_pay=1==n.IS_TEST_SMART_CHAIN?"tn":"ct",t.settingJson.BANK_NAME=n.BANK_NAME,t.settingJson.BANK_ACCOUNT=n.BANK_ACCOUNT,t.settingJson.BANK_ACCOUNT_NAME=n.BANK_ACCOUNT_NAME,t.settingJson.BANK_BRANCH=n.BANK_BRANCH,t.settingJson.maintenance=n.maintenance,t.settingJson.notify_enable=n.notify_enable,t.settingJson.notify_message=n.notify_message)}}},created:function(){},mounted:function(){this.isMounted=!0,this.connectSever()}},l=o,c=(s("1558"),s("2877")),_=Object(c["a"])(l,n,i,!1,null,null,null);e["default"]=_.exports}}]);