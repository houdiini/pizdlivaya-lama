const webpack = require('webpack');
const gulp = require('gulp');
const path = require('path');
const util = require('gulp-util');
require('@babel/polyfill');

const { config } = require('./package.json');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

function createConfig(env) {
  let isProduction,
    webpackConfig;

  if (env === undefined) {
    env = process.env.NODE_ENV;
  }

  isProduction = env === 'production';

  webpackConfig = {
    mode: isProduction ? 'production' : 'development',
    context: path.join(__dirname, config.src.js),
    entry: {
      // vendor: ['lodash', 'gsap'],
      app: ["@babel/polyfill", './app.js'],
    },
    output: {
      path: path.join(__dirname, config.build.js),
      filename: isProduction ? '[name].[chunkhash].js' : '[name].js',
      publicPath: 'js/',
    },
    devtool: isProduction ?
      '#source-map' :
      '#cheap-module-eval-source-map',
    plugins: [
      // new webpack.optimize.CommonsChunkPlugin({
      //     name: 'vendor',
      //     filename: '[name].js',
      //     minChunks: Infinity
      // }),
      // new webpack.ProvidePlugin({
      //   $: 'jquery',
      //   jQuery: 'jquery',
      //   'window.jQuery': 'jquery',
      // }),
      new webpack.NoEmitOnErrorsPlugin(),

      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        analyzerPort: 4000,
        openAnalyzer: false,
      }),
    ],
    resolve: {
      extensions: ['.js'],
      alias: {
        TweenLite: path.resolve('node_modules', 'gsap/src/uncompressed/TweenLite.js'),
        TweenMax: path.resolve('node_modules', 'gsap/src/uncompressed/TweenMax.js'),
        TimelineLite: path.resolve('node_modules', 'gsap/src/uncompressed/TimelineLite.js'),
        TimelineMax: path.resolve('node_modules', 'gsap/src/uncompressed/TimelineMax.js'),
        ScrollMagic: path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/ScrollMagic.js'),
        'animation.gsap': path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js'),
        'debug.addIndicators': path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js'),
      },
    },
    optimization :{
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true
          }
        }
      },
      minimize: isProduction
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: [
            path.resolve(__dirname, 'node_modules'),
          ],
        },
        {
          test: /\.glsl$/,
          loader: 'webpack-glsl-loader'
        }],
    },
  };

  if (isProduction) {
    webpackConfig.plugins.push(
      new webpack.LoaderOptionsPlugin({
        minimize: true,
      })
    );
  }

  return webpackConfig;
}

module.exports = createConfig();
module.exports.createConfig = createConfig;