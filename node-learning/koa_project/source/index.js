const Kkb = require('./kkb')
const app = new Kkb()
app.use((req, res) => {
    res.writeHead(200)
    res.end('hi kai keba')
})
app.listen(3000, () => {
    console.log('listen 3000')
})