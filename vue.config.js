module.exports = {
  // 公共路径(必须有的)
  publicPath: "/",
  // 输出文件目录
  outputDir: "dist",
  // 静态资源存放的文件夹
  assetsDir: "assets",
  // eslint-loader 是否在保存的时候检查
  lintOnSave: false,
  // 我用的only，打包后小些
  runtimeCompiler: false,
  productionSourceMap: true, // 去除打包后js的map文件 不需要生产环境的设置false可以减小dist文件大小，加速构建

  // webpack-dev-server 相关配置
  devServer: {
    open: true, // npm run serve后自动打开页面
    host: "0.0.0.0", // 匹配本机IP地址(默认是0.0.0.0)
    disableHostCheck: true,
    // historyApiFallback: {
    //   index: '/index.html'
    // },// 配置history路由
    // port: 8100, // 开发服务器运行端口号
    proxy: null, //跨域问题后端已经解决，不配置proxy
  },
}