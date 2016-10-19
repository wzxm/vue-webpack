var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry: {
		app: ['./src/app'],
		// 添加要打包在vendors里面的库
		vendor: ['vue', 'vue-router']
	},
	output: {
		path: path.join(__dirname + './build'),
		filename: '[name].js'
	},
	module: {
		loaders: [
			{ test: /\.css$/, loader: "style!css" },
			{ test: /\.js$/, exclude:/node_modules/, loader: "babel" }
		]
	}, 
	plugins: [
		//把入口文件里面的数组打包成vendors.js
        new webpack.optimize.CommonsChunkPlugin({
        	name : 'vendor',
        	filename: 'vendor.bundle.js'
        })
	]
}