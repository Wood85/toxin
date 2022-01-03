const webpack = require('webpack');
const path = require('path'),
  HTMLWebpackPlugin = require('html-webpack-plugin'),
  {CleanWebpackPlugin} = require('clean-webpack-plugin'),
  CopyWebpackPlugin = require('copy-webpack-plugin'),
  MiniCssExtractPlugin = require('mini-css-extract-plugin'),
  OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin'),
  TerserWebpackPlugin = require('terser-webpack-plugin'),
  ESLintWebpackPlugin = require('eslint-webpack-plugin'),

  isDev = process.env.NODE_ENV === 'development',
  isProd = !isDev;

  optimization = () => {
    const config = {
      splitChunks: {
        chunks: 'all'
      }
    };
    if (isProd) {
      config.minimizer = [
        new OptimizeCssAssetsWebpackPlugin(),
        new TerserWebpackPlugin()
      ]
      return config;
    }
  };

module.exports = {
  mode: 'development',
  entry: {
    main:'./src/index.js'
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: optimization(),
  devServer: {
    port: 4200,
    open: true,
    hot: isDev
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/pug/index.pug',
      minify: {
        collapseWhitespace: isProd
      }
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jquery': 'jquery'
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        { from: path.resolve(__dirname, 'src/assets/img'),
          to: path.resolve(__dirname, 'dist/assets/img')
        }
      ]
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css'
    }),
    new ESLintWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        options: {
          pretty: true
        }
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader,'css-loader']
      },
      {
        test:/\.s[ac]ss$/,
        use: [
          {loader: MiniCssExtractPlugin.loader},
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  }
}