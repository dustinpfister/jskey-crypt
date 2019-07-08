// just using crypto
let crypto = require('crypto'),
fs = require('fs');

// hard coded values
let hard = {
    a: 'aes-256-cbc',
    password: 'spaceballs-0123456789-abcdefghi!',
    random: '0123456789abcdef'
};

// parse options
let parseOptions = (opt) => {
    opt = opt || {};
    opt.a = opt.a || hard.a;
    opt.key = Buffer.concat([Buffer.from(opt.password || hard.password)], 32);
    opt.iv = Buffer.from(Array.prototype.map.call(Buffer.alloc(16), (e, i) => {
                return (opt.random || hard.random).charCodeAt(i);
            }));
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
exports.toHex = (text, opt) => {return this.crypt(text,opt).toString('hex');};
exports.fromHex = (hex, opt) => {return this.decrypt(Buffer.from(hex,'hex'),opt);};

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
