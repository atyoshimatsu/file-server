const fs = require("fs");
const net = require("net");

const server = net.createServer();

server.listen(3000, () => {
  console.log("Server listening on port 3000!");
});

server.on("connection", (client) => {
  console.log("New client connected!");
  client.on("data", (data) => {
    const file = data.toString('utf8');
    console.log(`The client is requesting to download ${file}`);
    download(client, file);
  });
});

const download = (client, file) => {
  if (!fs.existsSync(`./server/files/${file}`)) {
    client.end();
    return;
  }

  fs.readFile(`./server/files/${file}`, (err, data) => {
    if (err) throw err;
    client.write(data);
  });
};
