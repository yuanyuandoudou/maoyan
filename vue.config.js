const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {//开发配置
    host: '127.0.0.1',//域名
    port: 8080,//端口
    https: false,//是否允许https协议
    open: true,//打开浏览器
    proxy: {//跨域
      '/api': {//你要替换的位置
        target: 'https://i.maoyan.com/', //被替换的目标地址
        //host    网络服务器 
        //ws: true,  // proxy websockets
        //secure: true,//接受对方是https的接口
        changeOrigin: true,  // 是否需要跨域 needed for virtual hosted sites
        pathRewrite: {
          '^/': '/'  // rewrite path 路径重写
        }
      },
      '/ajax': {//你要替换的位置
        target: 'https://i.maoyan.com/', //被替换的目标地址
        //host    网络服务器  http://yinruifang.cn
        //ws: true,  // proxy websockets
        //secure: true,//接受对方是https的接口
        changeOrigin: true,  // 是否需要跨域 needed for virtual hosted sites
        pathRewrite: {
          '^/': '/'  // rewrite path 路径重写
        }
      },
    },
  }
})
