var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: {
		app: ['./src/app'],
		index: ['./src/index/index'],
		user: ['./src/user/user']
		// 添加要打包在vendors里面的库
		// vendor: ['vue', 'vue-router']
	},
	output: {
		path: path.join(__dirname + '/build'),
		filename: '[name].js'
	},
	module: {
		loaders: [
			{ test: /\.css$/, loader: "style!css" },
			{ test: /\.scss$/, loader: ExtractTextPlugin.extract("style-loader", "css!autoprefixer!sass") },
			{ test: /\.js$/, exclude:/node_modules/, loader: "babel" }
		]
	}, 
	plugins: [
		new webpack.BannerPlugin('This file is created by wangzhe')
		//把入口文件里面的数组打包成vendors.js
        // new webpack.optimize.CommonsChunkPlugin({
        // 	name : 'vendor',
        // 	filename: 'vendor.bundle.js'
        // })
	]
}