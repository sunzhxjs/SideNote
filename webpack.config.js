
 var path = require('path');
 module.exports = {
 cache: true,
 debug: true,
 devtool: 'eval',
 entry: './src/app.js',
 output: {
 path: path.join(__dirname, "build"),
 filename: 'build.min.js'
 },
 resolve: {
 extensions: ['', '.js', '.json', '.coffee']
 }
 };