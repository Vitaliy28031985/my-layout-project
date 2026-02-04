const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: './src/index.js',

  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.html$/,
        exclude: path.resolve(__dirname, 'src/html/index.html'),
        use: [
          {
            loader: 'html-loader',
            options: {
              sources: false,
              esModule: false,
            },
          },
        ],
      },

      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/html/index.html',
      filename: 'index.html',
    }),

    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
  ],

  devServer: {
    static: path.resolve(__dirname, 'dist'),
    open: true,
    port: 3000,
  },

  mode: 'development',
}


