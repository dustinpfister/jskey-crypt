let simpCFS = require('./index.js');

simpCFS.getKeyRead()
.then((data) => {

    console.log('read good')
    console.log(data);

});
