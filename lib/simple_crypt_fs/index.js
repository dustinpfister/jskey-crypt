let simpC = require('../simple_crypt/index.js'),
path = require('path'),
fs = require('fs');

// read a file and decrypt if proper object if given
let readFile = exports.readFile = (path_file, opt_simpleC) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path_file, 'utf8', (e, data) => {
            if (e) {
                reject(e);
            } else {
                if (opt_simpleC) {
                    resolve(simpC.fromHex(data, opt_simpleC));
                } else {
                    resolve(data);
                }
            }
        });
    });
};

// write a file, encrypt if a proper object is given
let writeFile = exports.writeFile = (path_file, text, opt_simpleC) => {
    return new Promise((resolve, reject) => {
        let data = text;
        if (opt_simpleC) {
            data = simpC.toHex(text, opt_simpleC);
        }
        fs.writeFile(path_file, data, 'utf8', (e, data) => {
            if (e) {
                reject(e);
            } else {
                resolve();
            }
        });
    });
};

// find a key.yaml file
let findKey = function (dir, done) {
    dir = dir || process.cwd();
    done = done || function (e, yaml) {
        if (e) {
            console.log(e.message);
        } else {
            console.log(yaml);
        }
    };
    readFile(path.join(dir, 'key.yaml'))
    .then((yaml) => {
        done(null, yaml);
    })
    .catch ((e) => {
        if (e.code === 'ENOENT' && path.basename(dir) != '') {
            findKey(path.join(dir, '..'), done);
        } else {
            done(new Error('no key.yaml file found.'), null);
        }
    });
};

exports.findKey = (dir, done) => {

    dir = dir || process.cwd();
    done = done || function (e, yaml) {};

    return new Promise((resolve, reject) => {

        findKey(dir, function (e, yaml) {

            if (e) {

                done(e, null);
                reject(e);

            } else {

                done(null, yaml);
                resolve(yaml);
            }

        })

    });

};
