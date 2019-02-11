const webpackDevServer = require('webpack-dev-server')
const config = require('../webpack/webpack.config')
const webpack = require('webpack')
const path = require('path')
const compiler = webpack(config)

const server = new webpackDevServer(compiler, {
  contentBase: path.resolve(__dirname, '../dist'), // 本地服务器在哪个目录搭建页面
  historyApiFallback: true, //当我们搭建spa应用时非常有用，它使用的是HTML5 History Api
  port: 9090, 
  open: true,  // 自动打开浏览器
  publicPath:'/',
  inline:true,  // 自动刷新
  hot: true,  // 开启热模块替换
});

server.listen(9090, 'localhost',function(err){
  if(err) throw err;
})