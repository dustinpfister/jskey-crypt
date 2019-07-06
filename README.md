# jskey-crypt

So I started a project called jskey that aims to be a markdown editor, and keyword database management tool that has a great deal a functionality and features both built in and extensible via a plug-in system. However I did not get far, as I think that I was trying to do way to much all within a single application. So now I am trying out an approach that involves breaking things down into a whole bunch of smaller independent applications that can potentially be used together.

This project jskey-crypt has to do with creating, and exporting an encrypted blog posts folder, as well as the keyword database also. In any case it just has one little thing that it needs to do and it is not much of anything more beyond that.

## 1 - Create a _posts_crypt from nothing ( starting a new project )

To create a new project use the init command. A target options can be used to set the folder name from the current working directory, and a key option can be used to set the encryption key that will be stored in the keys.yaml file.

```
$ jskey-crypt init -t blog_posts -k spaceballs-0123456789-abcdefghi!
```

## 2 - unencrypt a single file for reading from _posts_crypt

To read a file from the _posts_crypt folder use the read command. The target option can be used to set the location of the _posts_crypt folder if not calling from the root name space of the blog_posts project folder. The k option can be used to set the location of the key.yaml file. and the f option can be used to set the file name of the file that I want to read in the _posts_crypt folder.

```
$ jskey-crypt read -t ./blog_posts/_posts_crypt -k ./blog_posts/key.yaml -f 1.md
```

## 3 - encript and write a single file to _posts_crypt

The write command works more or less the same way as read only I use the s potion to set the location of the source file that is to be written to the _posts_crypt folder. The f option is not used to set the file name that is to be written rather than read.

```
$ jskey-crypt write -s README.md -t ./blog_posts/_posts_crypt -k ./blog_posts/key.yaml -f 1.md
```