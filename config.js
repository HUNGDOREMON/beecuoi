let USE_SSL = false;

module.exports = {
  USE_SSL,
  CF_SSL: {
    key: "certs/panazic.key",
    cert: "certs/panazic.crt",
  },

  DOMAIN: "beetrade.vip",
  TITLE_SITE: "BeeTrade",
  CONTACT: "",
  MAIL_LOGO: "beetrade.vip/logo.png",
  MAIL_IMG_FOOTER: "beetrade.vip/line.png",

  IS_PLAY_SPOT: true, // mặc địng false -> FUTURES, Sử dụng BINANCE SPOT ( check được sàn ) hoặc FUTURE ( không bào giờ bảo trì, không check được sàn )

  SO_GIAY_DEM_NGUOC: 30,
  RATE_NHA_THUONG: 95,
  BET_MAX: 1,

  BINANCE_APIKEY:
    "ZogpqcPxAKMKUK7LKN0JFEJUJMsLoXD1ndyVx6XhA2Gk6UaDjrVL8lcvgiz6yLRY",
  BINANCE_APISECRET:
    "d8vckfpvd2PmDE5sEAYanRiaMHzszimMUbKMIO7ADBBuHlM3obPNtgb2R81cpH3C",

  // THANH TOÁN PAYPAL

  PAYPAL_MODE: "sandbox", //sandbox or live
  PAYPAL_CLIENT_ID:
    "AVNUo8AlLo06623F4PCxZjWDtM_arRMCrXpprR00FHPxYPZoyUfEWTJq9cAQWlJcDF7VX87_V0dWjmzz", //'',
  PAYPAL_CLIENT_SECRET:
    "EGTzUtwhqL_al6YRmYaK4Upc7rF0DTqjBVDFy2wfzynswyn_Fg65K3cOOH67PTth8p3RlJ0utVLJTMez", //'',
  // KẾT THÚC THANH TOÁN PAYPAL

  // DATA_HOST: "localhost",
  // DATA_USER: "beetradsi2l_4ekk",
  // DATA_PASS: "NTS3nrOCTWwYyrV",
  // DATA_DB: "4ekk_beetradsi2l",
  DATA_HOST: "localhost",
  DATA_USER: "root",
  DATA_PASS: "",
  DATA_DB: "bo",
  DATA_PORT: 3306,

  PORT_TRADE: 2096, // default 443 ssl
  PORT_SYS: 2087,
  PORT_NAP: 2083,
  PORT_NOTIFY: 2053,
  PORT_SERVER: 3000,
  PASS_CAP_2: "B.e(erdkgN(.2DnI",

  TELEGRAM_TOKEN: "5492597608:AAFY0esO0wprlNpVOVAk0AkrJHDsTjuwtjk", // sử dụng BOT
  TELEGRAM_BET_ID: "ONNmgrPKkEAxNDk1", // là kênh để gửi thông báo
  TELEGRAM_RUT_ID: "ONNmgrPKkEAxNDk1", // là kênh để gửi thông báo
  TELEGRAM_NAP_ID: "ONNmgrPKkEAxNDk1",
  TELEGRAM_BET_AMOUNT: "ONNmgrPKkEAxNDk1",
  TELEGRAM_BET_THONG_BAO: "ONNmgrPKkEAxNDk1",
  TELEGRAM_BET_PHIM_LENH: "beetradevip",

  TOKEN_KEY: "beetradevip2022_OIUWsdcscGBFCUJ@EIDFHB.,';';",

  PATH_SYS_CONFIG: "stSys",
  PATH_SYS_COMMISSION: "stCommission",
  PATH_SYS_COMMISSION_VIP: "stCommissionVip",

  ABI_USDT_MAINNET: "USDT_BEP20_mainnet",
  ABI_USDT_TESTNNET: "USDT_BEP20_testnet",
};
