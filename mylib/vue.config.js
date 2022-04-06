const { defineConfig } = require('@vue/cli-service')
const nodeExternals = require('webpack-node-externals');

module.exports = defineConfig({
  transpileDependencies: true,

  publicPath: "/static/",

  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  },

  configureWebpack: config => {
    config.target = 'node';
    config.externalsPresets = { node: true };
    config.externals = [nodeExternals()];
    config.context= __dirname;
    config.node = {
      __filename: true,
      __dirname: true,
    };
    config.output.filename = 'index.js';
  },

  chainWebpack: (config) => {
    config.module
      .rule('i18n')
      .resourceQuery(/blockType=i18n/)
      .type('javascript/auto')
      .use('i18n')
      .loader('@intlify/vue-i18n-loader')
      .end()
  }
})

