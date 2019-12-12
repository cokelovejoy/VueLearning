// const os = require('os')
// const mem = os.freemem() / os.totalmem() * 100
// console.log(`内存占用率${mem.toFixed(2)}%`)

const download = require('download-git-repo')
const ora = require('ora')
const process = ora('下载项目...开始')
process.start()
download('github:su37josephxia/vue-template', 'test', err => {
    // console.log(err ? 'Error' : 'Success')
    if (err) {
        process.fail()
    } else {
        process.succeed()
    }
})
