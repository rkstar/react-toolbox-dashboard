!function(e){function t(s){if(o[s])return o[s].exports;var n=o[s]={i:s,l:!1,exports:{}};return e[s].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var o={};return t.m=e,t.c=o,t.i=function(e){return e},t.d=function(e,o,s){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:s})},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=13)}([function(e,t){e.exports=require("path")},function(e,t){e.exports=require("webpack")},function(e,t,o){"use strict";var s=o(6),n=o(0),r=o(3),i=n.resolve("./dist/client"),u="localhost",l=3e3,c=s();r.default(c,"development"),c.enable("trust proxy"),c.use(s.static(i)),c.get("*.js",function(e,t,o){e.url=e.url+".gz",t.set("Content-Encoding","gzip"),o()}),c.get("*",function(e,t){t.status(200).sendFile(i+"/index.html")}),c.listen(l,function(e){return e?console.log(e):void console.log("listening at http://"+u+":"+l)})},function(e,t,o){"use strict";function s(e,t){if("production"!==t){e.use(l("short"));var o=n(r);e.use(u(o,{hot:!0,publicPath:r.output.publicPath,noInfo:!0})),e.use(i(o))}}var n=o(1),r=o(4),i=o(12),u=o(11),l=o(7);Object.defineProperty(t,"__esModule",{value:!0}),t.default=s},function(e,t,o){var s=o(1),n=o(5),r=o(0),i=r.resolve("."),u={utils:r.join(i,"src","classes"),src:r.join(i,"src","client"),build:r.join(i,"dist","client")};e.exports={devtool:"eval-source-map",target:"web",entry:["webpack-hot-middleware/client",u.src],resolve:{modules:["node_modules",u.src],extensions:[".css",".js",".jsx",".ts",".tsx",".json",".html"],enforceExtension:!1},output:{path:u.build,filename:"bundle.js",publicPath:"/"},plugins:[new s.HotModuleReplacementPlugin,new s.NamedModulesPlugin,new s.DefinePlugin({"process.env":{NODE_ENV:JSON.stringify("development")}}),new s.optimize.UglifyJsPlugin({sourceMap:!0}),new s.optimize.AggressiveMergingPlugin,new n({asset:"[path].gz[query]",algorithm:"gzip",test:/\.js$|\.css$|\.html$/,threshold:10240,minRatio:.8}),new s.LoaderOptionsPlugin({debug:!0,minimize:!1,options:{context:r.join(u.src,"../")}})],module:{rules:[{enforce:"pre",test:/\.jsx?$/,use:["source-map-loader","babel-loader"],exclude:/node_modules/},{test:/\.tsx?$/,use:["react-hot-loader","babel-loader","awesome-typescript-loader?configFileName=config/client/tsconfig.json"],exclude:/node_modules/},{test:/\.json$/,use:["json-loader"],exclude:/node_modules/},{test:/\.css$/,include:[/node_modules/,u.src],use:[{loader:"style-loader"},{loader:"css-loader",options:{modules:!0,sourceMap:!0,importLoaders:1,localIdentName:"[name]__[local]__[hash:base64:5]"}},{loader:"postcss-loader",options:{plugins:function(){return[o(9)({}),o(8)({browsers:["> 1%","last 4 versions"]}),o(10)({clearMessages:!0})]}}}]},{test:/\.html$/,use:["file-loader","html-loader","url-loader"],exclude:/node_modules/}]}}},function(e,t){e.exports=require("compression-webpack-plugin")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("morgan")},function(e,t){e.exports=require("postcss-cssnext")},function(e,t){e.exports=require("postcss-import")},function(e,t){e.exports=require("postcss-reporter")},function(e,t){e.exports=require("webpack-dev-middleware")},function(e,t){e.exports=require("webpack-hot-middleware")},function(e,t,o){e.exports=o(2)}]);
//# sourceMappingURL=server.js.map