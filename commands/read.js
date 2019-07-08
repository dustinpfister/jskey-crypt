let path = require('path'),
yaml = require('js-yaml'),
fs = require('fs'),
simpleC = require('../lib/simple_crypt');

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
    simpleC.readFile(argv.k)
    .then((data) => {
        let key = yaml.safeLoad(data);
        return simpleC.readFile(path_file, {
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
