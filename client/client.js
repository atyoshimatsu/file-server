const net = require("net");

const connect = (type, file) => {
  const conn = net.createConnection({
    host: 'localhost', // change to IP address of computer, more on that below
    port: 3000,
  });

  conn.setEncoding("utf8"); // interpret data as text

  conn.on("data", (data) => {
    console.log(data);
  });

  conn.on("connect", () => {
    conn.write(type + ',' + file);
  });

  conn.on('end', () => {
    process.exit();
  });

  return conn;
}

module.exports = { connect };
