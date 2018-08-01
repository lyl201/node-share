
// share02.js
const http = require('http')

http.createServer( (req, res) => {
    res.writeHead(200, {
        'content-type': 'text/plain'
    })
    res.write('Hello Node.js!')
    res.end()

}).listen('3000', () => {
    console.log('server has started')
})


