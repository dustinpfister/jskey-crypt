// just using crypto
let crypto = require('crypto'),
fs = require('fs');

// hard coded values
let hard = {
    a: 'aes-256-cbc',
    password: 'spaceballs-0123456789-abcdefghi!',
    random: '000102030405060708090a0b0c0d0e0f'
};

// parse options
let parseOptions = (opt) => {
    opt = opt || {};
    opt.a = opt.a || hard.a;
    // create a key from the password
    // and an IV from random
    let password = String(opt.password || hard.password);
    let random = String(opt.random || hard.random);

    opt.key = Buffer.concat([Buffer.from(password)], 32);
    opt.iv = Buffer.alloc(16);
    opt.iv.write(random, 0, random.length, 'hex');
    
    //console.log('**** parse options ****');
    //console.log('password: ' + password);
    //console.log('random: ' + random);
    //console.log('key: ' + opt.key.toString('hex'));
    //console.log('iv: ' + opt.iv.toString('hex'));
    //console.log('iv length: ' + opt.iv.length)
    //console.log('***********************');
    return opt;
};

// encrypt the given text
exports.crypt = (text, opt) => {
    opt = parseOptions(opt);
    cipher = crypto.createCipheriv(opt.a, opt.key, opt.iv);
    return Buffer.concat([cipher.update(text), cipher.final()]);
};

// decrypt
exports.decrypt = (text, opt) => {
    opt = parseOptions(opt);
    decipher = crypto.createDecipheriv(opt.a, opt.key, opt.iv);
    return Buffer.concat([decipher.update(text), decipher.final()]);
};

// HEX to and from
exports.toHex = (text, opt) => {
    return this.crypt(text, opt).toString('hex');
};
exports.fromHex = (hex, opt) => {
    return this.decrypt(Buffer.from(hex, 'hex'), opt);
};

// read a file and decrypt if proper object if given
exports.readFile = (path_file, opt_simpleC) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path_file, 'utf8', (e, data) => {
            if (e) {
                reject(e);
            } else {
                if (opt_simpleC) {
                    resolve(exports.fromHex(data, opt_simpleC));
                } else {
                    resolve(data);
                }
            }
        });
    });
};

// write a file, encrypt if a proper object is given
exports.writeFile = (path_file, text, opt_simpleC) => {
    return new Promise((resolve, reject) => {
        let data = text;
        if (opt_simpleC) {
            data = exports.toHex(text, opt_simpleC);
        }
        console.log('data:');
        console.log(data);
        fs.writeFile(path_file, data, 'utf8', (e, data) => {
            if (e) {
                reject(e);
            } else {
                resolve();
            }
        });
    });
};
