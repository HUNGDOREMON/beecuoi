const { createPool } = require("mysql");
const config = require("./config.js");

const pool = createPool({
  host: config.DATA_HOST,
  user: config.DATA_USER,
  password: config.DATA_PASS,
  database: config.DATA_DB,
  port: config.DATA_PORT,
  connectionLimit: 10,
});

module.exports = pool;
