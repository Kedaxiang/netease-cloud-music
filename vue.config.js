module.exports = {
  configureWebpack: {
    resolve: {
      extensions: [],
      alias:{
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views'
      }
    }
  },
  css: {
    loaderOptions: {
        postcss: {
            plugins: [
                require('postcss-pxtorem')({
                    rootValue : 16, // 换算的基数
                    selectorBlackList  : ['weui','mu'], // 忽略转换正则匹配项
                    propList   : ['*'],
                }),
            ]
        }
    }
  },
}