const { connect } = require('./client');

const file = process.argv[2];
if (!file) {
  console.log('Invalid parameter');
  process.exit();
}

console.log("Connecting ...");
connect(file);
