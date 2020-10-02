const DB = require("better-sqlite3-helper");
const path = require("path");

DB({
  path: path.resolve(__dirname, "./shop.db"),
  readonly: false,
  fileMustExist: true,
  WAL: true,
  migrate: false,
});
