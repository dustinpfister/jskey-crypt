## 1.1.x - Server command feature
  * server command started
  * server provides a /read?p=postname path that responds to get requests
  * server /read path also responds to post requests
  * server provides a /write path that responds to post requests only
  * port value in conf.yaml used if present defaults to 8080

## 1.0.x - Walk files command
  * can walk posts and files in general with a new walk command
  * can provide custom functionality by specifying a forPost argument to a javaScript file
    that provides a function that will fire for each post
  * can be used to build an index for years and months, as well as categories to improve query speed
    with posts

## 0.3.x - Alpha IV - keyword database
  * new keyword-db lib that can be used to create and manage a keyword database in a new
    _keywords folder
  * new db command that can be used to create, drop, and manage the keyword database
  
## 0.2.x - Alpha III - jskey.yaml started
  * new jskey-conf lib that can be used to create and check for jskey.yaml file
  * init command creates a .gitignore that includes key.yaml and _posts listed
  * init command now creates a jskey.yaml as well
  * jskey.yaml has a keyfile property that gives the pathname to the key.yaml file to use
  * jskey.yaml can serves as a way to mark the root path of a jskey project
  * findKey method in simple_crypt_fs looks for jskey.yaml as a way to find the key.yaml file to use

## 0.1.x - Alpha II - file system lib and init import option
  * (done) simple_crypt_fs file system module started
  * (done) simple_crypt_fs find key.yaml method
  * (done) init command - creates a key.yaml with proper password, and random value
  * (done) init command - key.yaml file updated to include value for random (iv value)
  * (done) init command - key.yaml file updated to contain algorithm
  * (done) simple_crypt - fixed a bug because the random value given was a number rather than a string
  * simple_crypt can return a cipher object to be used in streams
  * file io methods moved from simple_crypt to simple_crypt_fs
  * simple_crypt_fs file system module can be used to walk files and cipher or decipher for each file
  * simple_crypt_fs file system module can read from standard input, and write to a file (write stream)
  * read and write files moved from simple_crypt to simple_crypt_fs
  * init command can create a new blog_posts folder from a _posts folder via an i (import option)
  * read command can be used to create a _posts folder from _posts_crypt
  * write command - can now accept input from the standard input in place of a file this
    is also the default if the -f argument is not given
  * new export command that can be used to export all posts in _posts_crypt to a plain _posts folder

## 0.0.x - Alpha I - first release
  * (done) Uses yargs and a default command fires when called with no arguments
  * (done) can be installed globally as jskey-crypt
  * (done) can create a new /blog_posts folder with a keys.yaml file and a /blog_posts/_posts_crypt folder (init command)
  * (done) can read an encrypted file in a _posts_crypt folder (read command)
  * (done) can create an encrypted file in a _posts_crypt folder from a file (write command)
  * (done) functions repeated in current commands pulled into a lib
  * (done) default command gives version number in package.json
