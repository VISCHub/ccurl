var ffi = require('ffi')

var libccurl = ffi.Library('./build/lib/libccurl', {
  ccurl_pow : [ 'string', [ 'string', 'int'] ]
})

if (process.argv.length < 3) {
  console.log('Arguments: ' + process.argv[0] + ' ' + process.argv[1] + ' <max>')
  process.exit()
}

var trytes = process.argv[2];
var mwm = parseInt(process.argv[3]);

/*

console.log('Your output: ' + parseInt(process.argv[3]));
*/
var output = libccurl.ccurl_pow(trytes, mwm);

console.log('Your output: ' + output)
