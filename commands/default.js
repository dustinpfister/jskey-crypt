
let pack = require('../package.json');

exports.command = '*';
exports.describe = 'default command';
exports.handler = function (argv) {
  console.log('> jskey-crypt: default command:');
  console.log('> version: ' + pack.version);
  console.log('> ' + __dirname)
};