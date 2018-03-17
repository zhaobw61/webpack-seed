var path = require('path');
var dirVars = require('./base/dir-vars.config.js');
var pageArr = require('./base/page-entries.config.js');
var configEntry = {};
// pageArr = [ 
//   'alert/index',
//   'index/index',
//   'index/login',
//   'user/edit-password',
//   'user/modify-info' 
// ]
console.log(pageArr);
pageArr.forEach((page) => {
  configEntry[page] = path.resolve(dirVars.pagesDir, page + '/page');
});
// configEntry = {
//   'alert/index': 'E:\\webpack-github\\webpack-seed\\src\\pages\\alert\\index\\page',
//   'index/index': 'E:\\webpack-github\\webpack-seed\\src\\pages\\index\\index\\page',
//   'index/login': 'E:\\webpack-github\\webpack-seed\\src\\pages\\index\\login\\page',
//   'user/edit-password': 'E:\\webpack-github\\webpack-seed\\src\\pages\\user\\edit-password\\page',
//   'user/modify-info': 'E:\\webpack-github\\webpack-seed\\src\\pages\\user\\modify-info\\page'
//  }
module.exports = configEntry;
