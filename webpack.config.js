const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
const { AotPlugin } = require('@ngtools/webpack');

const webpackCfg = {
  cache: true,
  devtool: 'cheap-module-eval-source-map', // type of sourcemaps. see https://webpack.js.org/configuration/devtool/#devtool

  entry: {
    'vendor': './src/vendor.ts',
    'main': './src/bootstrap.ts'
  },

  output: {
    path: root('dist/aot'),
    publicPath: '',
    filename: `[name].js`,
    chunkFilename: `[name].js`,
    pathinfo: true
  },

  resolve: {
    extensions: ['.ts', '.js']
  },

  module: {
    rules: [
      { test: /\.ts$/, use: '@ngtools/webpack' }
    ]
  },

  plugins: [
    new CommonsChunkPlugin({ names: ['main', 'vendor'] }),
    new HtmlWebpackPlugin({
        inject: 'body',
        template: './src/index.html'
    }),
    new AotPlugin({ tsConfigPath: './tsconfig.json' })
  ],

  devServer: {
    historyApiFallback: true,
    overlay: true,
    stats: 'minimal',
  },
};

module.exports = webpackCfg;

function root(relPath) {
    return path.resolve(__dirname, relPath);
};