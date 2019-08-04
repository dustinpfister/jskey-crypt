let simpleC = require('../lib/simple_crypt');

// READ COMMAND
exports.command = 'pipe';
exports.aliases = ['p'];
exports.describe = 'pipe mode';
exports.builder = {
    // the password
    p: { default: 'spaceballs-1234567890-abcdefghij' },
    // The salt
    s: { default: 'project2501' },
    // the algorithm
    a: { default: 'aes-256-cbc' },
    // crypt or decrypt
    c: { default: false}
};
exports.handler = function (argv) {

    let method = simpleC.crypt;
    
    process.stdin.on('data', (data) => {
            
        console.log( method(data).toString('hex') );
            
    });

};
