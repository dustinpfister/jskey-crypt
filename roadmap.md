## 1.0.x - Server command feature
  * server command started
  * server provides a /read?p=postname path that responds to get requests
  * server /read path also responds to post requests
  * server provides a /write path that responds to post requests only
  * port value in conf.yaml used if present defaults to 8080

## 0.1.x - Alpha 2 - conf.yaml started
  * init command creates a .gitignore that includes key.yaml and _posts listed
  * init command now has an option for iv as well
  * init command now creates a conf.yaml as well
  * conf.yaml has a keyfile property that gives the pathname to the key.yaml file to use

## 0.0.x - Alpha I - first release
  * (done) Uses yargs and a default command fires when called with no arguments
  * (done) can be installed globally as jskey-crypt
  * (done) can create a new /blog_posts folder with a keys.yaml file and a /blog_posts/_posts_crypt folder (init command)
  * can read an encrypted file in a _posts_crypt folder (read command)
  * can create an encrypted file in a _posts_crypt folder from a file (write command)
