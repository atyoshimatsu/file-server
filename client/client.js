const fs = require("fs");
const net = require("net");

const connect = (file) => {
  const conn = net.createConnection({
    host: 'localhost',
    port: 3000,
  });

  conn.setEncoding("utf8"); // interpret data as text

  conn.on("data", (data) => {
    fs.writeFile(`./client/files/${file}`, data, (err) => {
      if (err) throw err;
      console.log('Success download');
      process.exit();
    });
  });

  conn.on("connect", () => {
    conn.write(file);
  });

  conn.on('end', () => {
    process.exit();
  });

  return conn;
};

module.exports = { connect };
