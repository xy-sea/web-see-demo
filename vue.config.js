const { defineConfig } = require('@vue/cli-service');
const { PerfseePlugin } = require('@perfsee/webpack')

module.exports = defineConfig({
  devServer: {
    proxy: {
      '/getErrorList': {
        target: 'http://localhost:8083/',
        changeOrigin: false, //  target是域名的话，需要这个参数，
        secure: false //  设置支持https协议的代理,
      },
      '/getmap': {
        target: 'http://localhost:8083/',
        changeOrigin: false,
        secure: false
      },
      '/getmgetRecordScreenIdp': {
        target: 'http://localhost:8083/',
        changeOrigin: false,
        secure: false
      }
    }
  },
  configureWebpack: {
    plugins: [
      new PerfseePlugin({
        project: 'web-see-demo',
        token: 'uu9jqUfpR9awKYJy1W7/XiuaeF3J0ltNZ8551X0+hBUA=',
        artifactName: 'main'
      })
    ]
  }
})
