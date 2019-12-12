module.exports.clone = async function (repo, desc) {
    const { promisify } = require('util')
    // 使用promisify包裹 返回 promise对象.
    const download = promisify(require('download-git-repo'))
    const ora = require('ora')
    const process = ora('下载项目...开始')
    process.start()
    try {
        await download(repo, desc)
    } catch (error) {
        process.fail()
    }
    process.succeed()
}