process.env.VUE_CLI_CONTEXT=__dirname
module.exports = {
  root: true,
  extends: [
    '@dc/dc/vue',
  ],
  rules: {},
  // settings参考：https://github.com/vuejs/eslint-config-airbnb/blob/master/index.js
  settings: {
    'import/extensions': ['.js', '.ts', '.mjs', '.jsx', '.tsx','.vue'],
    'import/resolver': {
      // https://github.com/benmosher/eslint-plugin-import/issues/1396#issuecomment-511007063
      node: {},
      webpack: { config: require.resolve('@vue/cli-service/webpack.config.js') },
    },
  },
}
