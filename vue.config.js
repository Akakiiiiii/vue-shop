const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}


module.exports = {
    runtimeCompiler: true, //是否使用包含运行时编译器的 Vue 构建版本
    publicPath: '',
    productionSourceMap: false, 
    chainWebpack(config) {
        // config.plugins.delete('preload') // TODO: need test
        // config.plugins.delete('prefetch') // TODO: need test
        // set svg-sprite-loader
        config.module
            .rule('svg')
            .exclude.add(resolve('src/icons'))
            .end()
        config.module
            .rule('icons')
            .test(/\.svg$/)
            .include.add(resolve('src/icons'))
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            })
            .end()
    },


}