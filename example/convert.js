var fs = require('fs');
var commentDebug = require('../index');
var converter = new commentDebug();

var output = converter.process(fs.readFileSync(__dirname + '/example.js').toString())

fs.writeFileSync(__dirname + '/example.out.js', output);