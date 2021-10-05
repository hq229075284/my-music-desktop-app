/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable max-len */
/* eslint-disable no-param-reassign */

// const tsImportPluginFactory = require('ts-import-plugin');
const path = require('path')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

module.exports = {
  lintOnSave: false,
  configureWebpack: { devtool: process.env.BUILD_ENV === 'release' ? '' : 'source-map' },
  chainWebpack(config) {
    config.resolve.alias.set('@', path.join(__dirname, './src'))
    config.resolve.alias.set('@utils', path.join(__dirname, './src/utils'))
    config.resolve.alias.set('@assets', path.join(__dirname, './src/assets'))
    config.resolve.alias.set('@components', path.join(__dirname, './src/components'))

    // config.externals(externals)

    if (process.env.NODE_ENV !== 'development') {
      if (['report'].includes(process.env.BUILD_ENV)) {
        config.plugin('BundleAnalyzerPlugin').use(BundleAnalyzerPlugin, [])
      }
    }
  },
  transpileDependencies: ['@dc'],
  publicPath: './',
  // publicPath: process.env.BUILD_ENV ? './' : '/',
  // devServer: {
  //   // proxy: {
  //   //   '/api': {
  //   //     // target: 'http://10.33.158.88:38077/',
  //   //     target: 'http://web.dcyun.com:38077/',
  //   //     ws: true,
  //   //     changeOrigin: true,
  //   //   },
  //   // },
  // },
}
