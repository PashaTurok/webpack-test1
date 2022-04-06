const { defineConfig } = require('@vue/cli-service')
const nodeExternals = require('webpack-node-externals');
const path = require('path');
var webpack = require('webpack');

module.exports = defineConfig({
  transpileDependencies: true,

  publicPath: "/static/",

  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  },

  configureWebpack: config => {
     config.snapshot = {
        managedPaths: []
     };
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
