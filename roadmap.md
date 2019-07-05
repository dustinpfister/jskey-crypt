## 1.0.x - Server command feature
  * server command started
  * server provides a /read?p=postname path that responds to get requests
  * server /read path also responds to post requests
  * server provides a /write path that responds to post requests only

## 0.0.x - Alpha I - first release
  * (done) Uses yargs and a default command fires when called with no arguments
  * (done) can be installed globally as jskey-crypt
  * can create a new empty /blog_posts folder with a keys.yaml file and a /blog_posts/_posts_crypt folder (init command)
  * can create an encrypted file in a _posts_crypt folder