//const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
  	rules: [{
  		test: /\.js$/,
  		exclude: /node_modules/,
  		loader: 'babel-loader'
  	}, {
  		test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
  	},{
  		test: /\.(png|jpe?g|gif|mp3)$/i,
        use: [{loader: 'file-loader'}]
  	}]

  },
 //plugins: [new HtmlWebpackPlugin()]
 devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    bonjour: true
  }
}