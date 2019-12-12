const http = require('http')
const fs = require('fs')
const server = http.createServer((request, response) => {
    // request 和 response 都是stream流
    // console.log('receive ...', getPrototypeChain(request))
    // console.log('response ...', getPrototypeChain(response))
    const {url, method, headers} = request
    if (url === '/' && method === 'GET') {
        fs.readFile('index.html', (err, data) => {
            if (err) {
                response.writeHead(500, {'Content-Type':'text/plain;charset=utf8'})
                response.end('500 服务器错误')
            }
            response.statusCode = 200
            response.setHeader('Content-Type', 'text/html')
            response.end(data)
        })
    } else if (url === '/users' && method === 'GET') {
        response.writeHead(200, {'Content-Type': 'application/json'})
        response.end(JSON.stringify([{name:'richard'}]))
    } else if(method == 'GET' && headers.accept.indexOf('image/*') !== -1) {
        fs.createReadStream('.' + url).pipe(response)
    } else {
        response.statusCode = 404
        response.setHeader('Content-Type', 'text/plain;charset=utf8')
        response.end(' 404 not found')
    }
})
server.listen(8080)

// 打印原型链
function getPrototypeChain(obj) {
    const protoChain = []
    while(obj = Object.getPrototypeOf(obj)) {
        protoChain.push(obj)
    }
    return protoChain
}