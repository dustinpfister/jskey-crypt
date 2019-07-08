let path = require('path'),
yaml = require('js-yaml'),
fs = require('fs'),
simpleC = require('../lib/simple_crypt');


// READ COMMAND
exports.command = 'write';
exports.aliases = ['w'];
exports.describe = 'write a file to _posts_crypt';
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
    // source file
    s: {
    default:
        path.join(process.cwd(), 'new-file.md')
    },
    // filename in target folder
    f: {
    default:
        'new-file.md'
    }
};
exports.handler = function (argv) {

    let path_file = path.join(argv.t, argv.f),
    key;
    // read key file
    simpleC.readFile(argv.k)
    .then((data) => {
        key = yaml.safeLoad(data);
        // read source file
        return simpleC.readFile(argv.s);
    })
    .then((data) => {
        // write file to _post_crypt
        return simpleC.writeFile(path_file, data, {
            password: key.key
        });
    })
    .then((data) => {
        console.log('done');
    })
    .catch ((e) => {
        console.log(e);
    });

};
