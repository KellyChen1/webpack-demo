const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  // devTool: 'cheap-module-eval-source-map',
  entry:[
    // 'babel-polyfill',
    // 'react-hot-loader/patch',
    // 'webpack-dev-server/client?http://localhost:9090',
    // 'webpack/hot/only-dev-server',   
    // path.resolve(__dirname, '../src/index.js'), //指定入口文件，程序从这里开始编译,__dirname当前所在目录, ../表示上一级目录, ./同级目录

  ],

  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name]_[hash:8].js'
  },
  module: {                                          
    rules: [
      {
        test:/\.(js|jsx)$/,
        use:{
          loader:'babel-loader',
          // options:{      配置到.babelrc
          //   presets:['es2015','react']
          // }
        },
        exclude:/node_modules/
      },{
        enforce:"pre",      //加载eslint
        test:/\.(js|jsx)$/,
        loader:'eslint-loader',
        exclude:/node_modules/
      }, {
        test:/\.css$/,
        use:[{
          loader: 'style-loader'
        },{
          loader: 'css-loader'
        }]
      },{
        test:/\.less$/,
        use:[{
          loader: 'style-loader'
        },{
          loader: 'css-loader'
        },{
          loader: 'less-loader',
          options: {
            sourceMap: true,
          }
        }]
      }
    ]
  },
  // plugins:[
  //   new webpack.HotModuleReplacementPlugin(),
  //   new HtmlWebpackPlugin({
  //     template: path.resolve(__dirname, '../src/index.html'),
  //     inject:true //// true|body|head|false，四种值，默认为true,true和body相同,是将js注入到body结束标签前,head将打包的js文件放在head结束前,false是不注入，这时得要手工在html中加js
  //   })
  // ]
}
