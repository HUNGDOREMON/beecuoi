const TelegramBot = require("node-telegram-bot-api");
const config = require("./config");
const TELEGRAM_TOKEN = config.TELEGRAM_TOKEN;

const TelegramAll = new TelegramBot(TELEGRAM_TOKEN, { polling: true });

global["ARESTele"] = TelegramAll;

//require('./hoahong'); // cháº¡y tráº£ thÆ°á»Ÿng hoa há»“ng
require("./src/app"); // cháº¡y http
require("./games/trade"); // cháº¡y game
require("./auth/sys_settings"); // cháº¡y thiáº¿t láº­p há»‡ thá»‘ng
require("./auth/mess"); // cháº¡y BOT Telegram
require("./src/nap"); // cháº¡y BOT Náº¡p
require("./auth/notifi"); // cháº¡y thÃ´ng bÃ¡o

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 1;
process.on("uncaughtException", function (exception) {
  console.log(exception);
});
