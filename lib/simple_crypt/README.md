# simple_crypt

A simple string crypto lib that just makes use of the cipher.update and cipher.final methods, and does not do anything fancy with streams. A good starting point with encryption with nodejs, but by no means a final destination.

## Basic example

Many of the methods require passing a password and random value that is used to create the key and iv that is used with the createCipheriv method.

```js
let simpC = require('./index.js');
 
let opt = {
    password: 'thisisanewthing',
    random: 'project2501'
};
 
let c = simpC.crypt('foo',opt)
d = simpC.decrypt(c,opt);
 
console.log(c.toString());
console.log(d.toString());
```

## Make sure to be aware of encoding

If the encoding is to be stored in a file it should be stored as hex

```js
let simpC = require('./index.js');
 
let opt = {
    password: 'thisisanewthing',
    random: 'project2501'
};
 
let c = simpC.crypt('foo', opt);
 
console.log(c);
console.log(c.toString('hex'));
console.log(Buffer.from(c.toString('hex'), 'hex'));
 
d = simpC.decrypt(Buffer.from(c.toString('hex'), 'hex'), opt);
 
console.log(d.toString('ascii')); // 'foo'
console.log(simpC.fromHex(c.toString('hex'), opt).toString('ascii')); // 'foo'
console.log(simpC.fromHex(simpC.toHex('foo', opt), opt).toString('ascii')); // 'foo'
```

## Read and write file methods

SimpleC has a read and write file method. These methods can be used as a way to read and write files just like that of the fs module by itself, but they return promises if the version of node used does not do so. In any case the standard options object can also be passed as an argument if you want to cipher or decipher a file.

```js
simpleC.writeFile(path_file, data, {
    password: key.key
})
.catch((e)=>{
    console.log(e.message);
})
```