let simpCFS = require('./index.js');

simpCFS.getKeyRead('../../blog_posts/_posts_crypt/1.md')
.then((data) => {

    console.log('read good');
    console.log(data.toString());

});
