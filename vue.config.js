const { defineConfig } = require('@vue/cli-service')
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, './', dir)
}

module.exports = defineConfig({
  transpileDependencies: true,
  // configureWebpack: {
    
  //   module: {
  //     rules: [
  //       {
  //         test: /\.svg$/,
  //         use: [
            
  //         // 'svg-sprite-loader',
  //         // 'svgo-loader',
  //           {
  //             loader: 'svg-sprite-loader',
  //             options: {
  //               symbolId: "icon-[name]"
  //             }
  //           },
  //             // 'svgo-loader'
  //           ]
  //         }
  //   ]
  //       }
  // }
  chainWebpack: config => {
    config.module
      .rule('svg')
      .exclude.add(resolve('src/assets/icons-svg'))
      .end()

    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/assets/icons-svg'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: '[name]'
      })
  }
})
