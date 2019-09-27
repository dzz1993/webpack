const path = require("path");
//import path from 'path';
//引入压缩js和css插件
//import optimizeCssAssetsWebpackPlugin from "optimize-css-assets-webpack-plugin"
const optimizeCssAssets = require("optimize-css-assets-webpack-plugin");
const uglifyjs = require("uglifyjs-webpack-plugin");
const htmlWebpack = require("html-webpack-plugin");

module.exports = {
    entry:  path.join(__dirname,'./src/index.js'),
    output:{
        path: path.join(__dirname,'./dist'),
        filename: 'bundle.js'
    },
    mode: 'development',
    devServer:{
        //设置基本目录结构
        contentBase:path.resolve(__dirname,'src'),
        //服务器的IP地址，可以使用IP也可以使用localhost
        host:'localhost',
        //服务端压缩是否开启
        compress:true,
        //配置服务端口号
        port:8080,
        hot:true,
        open:true
    },
    module:{
        rules:[
            {test:/\.css$/,use:['style-loader','css-loader']},
            {test:/\.sass$/,use:['style-loader',
                    {loader:'css-loader',options:{sourceMap:true}},
                    {loader:'sass-loader',options:{sourceMap:true}}]},
            {test:/\.scss$/,use:['style-loader',
                    {loader:'css-loader',options:{sourceMap:true}},
                    {loader:'sass-loader',options:{sourceMap:true}}
                ]},
            // {test:/\.js$/,exclude:/node_modules/,loader:'babel-loader'},
        ]
    },
    //压缩js和css
    optimization:{
        minimizer:[new optimizeCssAssets({}),new uglifyjs({cache:true,parallel:true,sourceMap:true})]
    },
    //配置一个plugins节点，配置html-webpack-plugin
    plugins:[
        new htmlWebpack({
            template:path.join(__dirname,'./src/index.html'),
            filename:'index.html'
        })
    ]
};
