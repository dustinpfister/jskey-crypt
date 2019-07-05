#!/usr/bin/env node
require('yargs')
.command(require('./commands/default.js'))
.command(require('./commands/init.js'))
.command(require('./commands/read.js'))
.argv;