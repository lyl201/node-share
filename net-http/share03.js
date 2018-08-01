
// share03.js
const http = require('http')

http.createServer( (req, res) => {

    console.log(req.method)
    console.log(req.url)
    console.log(req.headers)
    res.writeHead(200, {
        'content-type': 'text/plain'
    })
    res.write('Hello Node.js!')
    res.end()

}).listen('3000', () => {
    console.log('server has started')
})

