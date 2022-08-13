const fs = require("fs");
const net = require("net");

const connect = (file) => {
  const conn = net.createConnection({
    host: 'localhost',
    port: 3000,
  });

  conn.on("data", (data) => {
    fs.writeFile(`./client/files/${file}`, data, (err) => {
      if (err) throw err;
      console.log('Download success');
      process.exit();
    });
  });

  conn.on("connect", () => {
    conn.write(file);
  });

  conn.on('end', () => {
    console.log('Connection closed');
    process.exit();
  });

  return conn;
};

module.exports = { connect };
