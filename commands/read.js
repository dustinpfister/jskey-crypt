let path = require('path'),
yaml = require('js-yaml'),
fs = require('fs'),
simpleC = require('../lib/simple_crypt');

let readFile = (path_file, key) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path_file, 'utf8', (e, data) => {
            if (e) {
                reject(e);
            } else {
                if (key) {
                    resolve(simpleC.fromHex(data, key));
                } else {
                    resolve(data);
                }
            }
        });
    });
};

// READ COMMAND
exports.command = 'read';
exports.aliases = ['r'];
exports.describe = 'read a file from _posts_crypt';
exports.builder = {
    // target _posts_crypt folder location
    t: {
    default:
        path.join(process.cwd(), '_posts_crypt')
    },
    // key file location
    k: {
    default:
        path.join(process.cwd(), 'key.yaml')
    },
    // filename in target folder
    f: {
    default:
        '0.md'
    }
};
exports.handler = function (argv) {

    let path_file = path.join(argv.t, argv.f);

    // read key file
    readFile(argv.k)
    .then((data) => {
        let key = yaml.safeLoad(data);
        console.log(key);
        return readFile(path_file, {
            password: key.key
        })
    })
    .then((data) => {
        console.log(data.toString());
    })
    .catch ((e) => {
        console.log(e);
    });

};
