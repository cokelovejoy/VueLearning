// stream 流
const fs = require('fs')
const rs = fs.createReadStream('./test.jpg')
const ws = fs.createWriteStream('./test02.jpg')
// 将rs 和 ws 对接, 达到复制的目的
rs.pipe(ws) 