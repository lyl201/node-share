
// share05.js
const http = require('http')

http.createServer( (req, res) => {

    console.log(req.method)
    console.log(req.url)
    console.log(req.headers)
    res.writeHead(200, {
        'content-type': 'text/plain'
    })
    
    req.pipe(res)

}).listen('3000', () => {
    console.log('server has started')
})

