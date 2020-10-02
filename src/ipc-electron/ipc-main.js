const { ipcMain } = require("electron");
const path = require("path");
const Database = require("better-sqlite3");
const db = new Database(path.resolve(__dirname, "./shop.db"), {
  verbose: console.log,
});

ipcMain.on("asynchronous-message", (event, arg) => {
  const stmt = db.prepare("INSERT INTO produk (id,nama) VALUES (?,?)");
  const info = stmt.run(null, "SEMANGKA");
  const stmt2 = db.prepare("SELECT * FROM produk");
  const row = stmt2.get();
  console.log("ROW: ", row);
  event.reply("asynchronous-reply", row);
});
