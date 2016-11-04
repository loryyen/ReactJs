var fs = require('fs');
var path = require('path');

var root = path.resolve(__dirname,'../');


var context = fs.readdirSync(root).filter(function(n){
  var folder = path.resolve(__dirname, '../', n);
  return fs.statSync(folder).isDirectory() && n!=='home';

}).map(function(folder){
  var d = {name: folder, path:folder+'/'};
  folder = path.resolve(__dirname, '../', folder);
  if(fs.readdirSync(folder).indexOf('dist')!==-1){
    d.path += 'dist/';
  }
  return d;
});

var data = 'window.context = '+JSON.stringify(context,null,'  ')+';';

var contextjs = path.resolve(__dirname,'context.js');
fs.writeFile(contextjs, data, 'utf8');
