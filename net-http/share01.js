
// share01.js
const http = require('http')

const server = new http.Server()

server.on('request', (req, res) => {
    res.writeHead(200, {
        'content-type': 'text/plain'
    })
    res.write('Hello Node.js!')
    res.end()

})

server.listen('3000', () => {
    console.log('server has started')
})
