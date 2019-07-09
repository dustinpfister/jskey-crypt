
let pack = require('../package.json'),
path = require('path');

exports.command = '*';
exports.describe = 'default command';
exports.handler = function (argv) {
    console.log('> jskey-crypt: default command:');
    console.log('> version: ' + pack.version);
    console.log('> __dirname: ' + path.resolve(__dirname));
    console.log('> cwd: ' + path.resolve(process.cwd()));
};
