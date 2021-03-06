const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js"
  },
  resolve: {
    extensions: [".js"]
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        use: {
          loader: "babel-loader"
        },
        exclude: /node_modules/
      },
      {
		test: /\.m?js$/,
		exclude: /node_modules/,
		use: {
			loader: 'babel-loader'
		    }
	    },
        {
			test: /\.s?css$/,
            use: [MiniCssExtractPlugin.loader,
                "css-loader",
                "sass-loader"]
		},
        {
            test: /\.png/,
            type: 'asset/resource' 
        }
    ]
  },
  plugins: [
      new HtmlWebpackPlugin({
        //insercion de los elementos
        inject: true,
        //ubicacion de nuestro template
        template: './public/index.html',
        //resultado
        filename: './index.html'
	    }),
      new HtmlWebpackPlugin({
        //insercion de los elementos
        inject: true,
        //ubicacion de nuestro template
        template: './public/login.html',
        //resultado
        filename: './login.html'
          }),
      new HtmlWebpackPlugin({
        inject: true,
        template: './public/404.html',
        filename: './404.html'
          }),
        new MiniCssExtractPlugin(),
        new CopyPlugin({
            patterns: [
              {
                from: path.resolve(__dirname, "src", "assets/img"),
                to: "assets/img"
              }
            ]
          })
    ],
}