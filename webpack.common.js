const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, argv, isProduction) => ({
  entry: './src/index.tsx',
  output: {
    filename: `app${isProduction ? '.min' : ''}.js`,
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      inject: false,
      template: './src/index.html',
      hash: isProduction,
      title: 'TO DO app',
      favicon: path.resolve(__dirname, './src/images/favicon.ico'),
      mode: !isProduction ? 'development' : 'production'
    }),
    new MiniCssExtractPlugin({
      filename: `app${isProduction ? '.min' : ''}.css`
    })
  ],
  module: {
    rules: [
      {
        test: /\.(css)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: {
                localIdentName: '[local]--[hash:base64:5]'
              }
            }
          }
        ]
      },
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: {
                localIdentName: '[local]--[hash:base64:5]'
              }
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        resolve: {
          extensions: ['.ts', '.tsx']
        },
        loader: 'ts-loader'
      }
    ]
  }
});
