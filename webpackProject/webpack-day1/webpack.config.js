// webpack 默认的配置文件
const path = require("path");
module.exports = {
    // webpack 构建的入口 支持:string | [] | object
    // entry: ["./src/index.js", "./src/other.js"],  // 多入口单出口 还可以 多入口多出口 使用object
    entry: {
        main: "./src/index.js",
        other: "./src/other.js"
    },
    //  production 生产模式,会将代码分割, development,不会代码分割,不会压缩
    mode: "development",
    // 出口
    output: {
        // path: 绝对路径的字符串
        path: path.resolve(__dirname, "./dist"),
        // filename: "main.js"
        // name 是占位符, 生成main.js, other.js
        filename: "[name].js"
    }
}