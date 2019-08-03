# jskey-crypt

So I started a project called jskey that aims to be a markdown editor, and keyword database management tool that has a great deal a functionality and features both built in and extensible via a plug-in system. However I did not get far, as I think that I was trying to do way to much all within a single application. So now I am trying out an approach that involves breaking things down into a whole bunch of smaller independent applications that can potentially be used together.

So then this project jskey-crypt has to do with JUST the crypto part of the project as I would like for asset files mainly the markdown source of a website I am working on to be encrypted. This is to help address concerns that I have with duplicate content, and theft of ip that I have not published yet that might be stored in a public repository.

## Plan for 1.x+

Originally the idea was for jskey-crypt to be packed with features, but now the plain is to keep things more minimal and channel many of the ideas for features into other projects such as jskey-walk and jskey-webview that can make use of this project if installed. In any case jskey-crypt should function well by itself, and even some of the current features might be removed.

## Install

So I have not published this to npm, and I have no plans to do so. So the process of installing this involves cloning the project down and then installing with npm.

```
$ git clone --depth 1 https://github.com/dustinpfister/jskey-crypt
$ cd jskey-crypt
$ npm install -g
```

The project should be installed globally, as this is a command line tool intended to be used in more than one file system location.
