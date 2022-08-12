const { connect } = require('./client');
const { paramValidator } = require('./util');


const [type, file] = process.argv.slice(2);
if (!paramValidator(type, file)) {
  console.log('Invalid parameter(s)')
  process.exit();
}

console.log("Connecting ...");
const conn = connect();

