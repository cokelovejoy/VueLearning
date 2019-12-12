// Buffer 类是作为 Node.js API 的一部分引入的，用于在 TCP 流、文件系统操作、以及其他上下文中与八位字节流进行交互。
// 分配10 字节的内存空间
const buf1 = Buffer.alloc(10) 
console.log(buf1)

const buf2 = Buffer.from('a')
console.log(buf2, buf2.toString())

const buf3 = Buffer.from('中文')
console.log(buf3, buf3.toString())

const buf4 = Buffer.concat([buf2, buf3])
console.log(buf4, buf4.toString())
