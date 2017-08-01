
let path = require('path');
let htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:'./app/index.js',
    output:{
        path:path.resolve('dist'),
        filename:'bundle.js'
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                use:'babel-loader',
                exclude:/node_modules/
            },
            {
                test:/\.less$/,
                use:['style-loader','css-loader','less-loader']
            }
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            template:'./app/index.html'
        })
    ],
    devtool:'source-map', //错误可提示源码错误
    devServer:{
        proxy:{
            '/api':'http://127.0.0.1:3000'
        }
    }
}