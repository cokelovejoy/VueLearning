// webpack 配置文件
const path = require("path");
module.exports = {
    entry: "./src/index.js",
    //  production 生产模式,会将代码分割, development,不会代码分割,不会压缩
    mode: "development",
    output: {
        // path: 绝对路径的字符串
        path: path.resolve(__dirname, "./dist"),
        filename: "main.js"
    }
}