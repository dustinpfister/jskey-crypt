#!/usr/bin/env node
require('yargs')
.command(require('./commands/default.js'))
.command(require('./commands/init.js'))
.command(require('./commands/pipe.js'))
.command(require('./commands/read.js'))
.command(require('./commands/write.js'))
.argv;
