## 1.0.x - Standard input and output option
  * (done) new pipe command that can be used to just pipe data in and out
  * (done) pipe command can accept input from the standard input
  * (done) pipe command can output to the standard output rather than a file
  * (done) pipe command works by giving arguments for key, iv, and so forth from command line

## 0.1.13 - Alpha II - file system lib and some minor updates
  * (done) simple_crypt_fs file system module started
  * (done) simple_crypt_fs find key.yaml method
  * (done) init command - creates a key.yaml with proper password, and random value
  * (done) init command - key.yaml file updated to include value for random (iv value)
  * (done) init command - key.yaml file updated to contain algorithm
  * (done) simple_crypt - fixed a bug because the random value given was a number rather than a string
  
## 0.0.x - Alpha I - first release
  * (done) Uses yargs and a default command fires when called with no arguments
  * (done) can be installed globally as jskey-crypt
  * (done) can create a new /blog_posts folder with a keys.yaml file and a /blog_posts/_posts_crypt folder (init command)
  * (done) can read an encrypted file in a _posts_crypt folder (read command)
  * (done) can create an encrypted file in a _posts_crypt folder from a file (write command)
  * (done) functions repeated in current commands pulled into a lib
  * (done) default command gives version number in package.json
