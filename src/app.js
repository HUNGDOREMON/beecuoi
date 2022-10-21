const config = require("../config");
const Helper = require("../helpers");
const fileSys = config.PATH_SYS_CONFIG;
const serveStatic = require("serve-static");
const path = require("path");
const userRouter = require("./../api/users/user.router");
const tradeRouter = require("./../api/trade/trade.router");
const betRouter = require("./../api/bet/bet.router");
const exChangeRouter = require("./../api/exchange/ex.router");
const Wallet = require("./../api/wallet/wallet.router");
const ip = require("ip");
const uploadAvatar = require("./../auth/upload/router");
const payPal = require("./../auth/pay/paypal");
const walletSys = require("./../api/sys.router");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use("/api/setup", walletSys);
app.use("/api/users", userRouter);
app.use("/api/trades", tradeRouter);
app.use("/api/bets", betRouter);
app.use("/api/exs", exChangeRouter);
app.use("/api/wallet", Wallet);
app.use("/api/auth", uploadAvatar);
app.use("/api/paypal", payPal);

app.get("/status", (req, res) => {
  let dataSys = Helper.getConfig(fileSys);
  res.json({
    ok: dataSys.maintenance,
    msg: dataSys.maintenanceContent,
    key: Buffer.from(config.TOKEN_KEY).toString("base64"),
    pass2: Buffer.from(config.PASS_CAP_2).toString("base64"),
    ip: ip.address(),
  });
});

app.use(serveStatic(path.join(__dirname, "public")));
app.get(/^\/portal\/?.*/, (req, res) => {
  res.sendFile(path.resolve(__dirname, "public/portal.html"));
});
app.get(/./, (req, res) => {
  res.sendFile(path.resolve(__dirname, "public/index.html"));
});
app.listen(config.PORT_SERVER);
console.log(`- Web start port ${config.PORT_SERVER}`);
