let simpC = require('../simple_crypt/index.js'),
yaml = require('js-yaml'),
path = require('path'),
fs = require('fs');

// read a file and decrypt if proper object if given
let readFile = (path_file, opt_simpleC) => {
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
let writeFile = (path_file, text, opt_simpleC) => {
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

// FIND KEY.YAML
let fkRecurse = function (dir, done) {
    dir = dir || process.cwd();
    done = done || function (e, keyObj) {
        if (e) {
            console.log(e.message);
        } else {
            console.log(keyObj);
        }
    };
    readFile(path.join(dir, 'key.yaml'))
    .then((data) => {
        done(null, yaml.safeLoad(data));
    })
    .catch ((e) => {
        if (e.code === 'ENOENT' && path.basename(dir) != '') {
            fkRecurse(path.join(dir, '..'), done);
        } else {
            done(new Error('no key.yaml file found.'), null);
        }
    });
};
let findKey = (dir, done) => {
    dir = dir || process.cwd();
    done = done || function (e, yaml) {};
    return new Promise((resolve, reject) => {
        fkRecurse(dir, function (e, yaml) {
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

let getKeyRead = (path_file, dir_key) => {
    dir_key = dir_key || process.cwd();
    if (!path_file) {
        return Promise.reject(new Error('must give a file to read'))
    }
    return findKey(dir_key)
    .then((key) => {
        return readFile(path_file, {
            password: key.key
        })
    })
}

// Exports
exports.findKey = findKey;
exports.readFile = readFile;
exports.writeFile = writeFile;
exports.getKeyRead = getKeyRead;
