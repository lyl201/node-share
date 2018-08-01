
// share04.js
const http = require('http')

http.createServer( (req, res) => {

    console.log(req.method)
    console.log(req.url)
    console.log(req.headers)
    res.writeHead(200, {
        'content-type': 'text/plain'
    })
    let buffer = []

    req.on('data', (chunk) => {
        buffer.push(chunk)
    })
    req.on('end', () => {
        res.write(Buffer.concat(buffer))
        res.end()
    })

}).listen('3000', () => {
    console.log('server has started')
})

