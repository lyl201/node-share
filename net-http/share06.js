
// share06.js
const http = require('http')

const options = {
    hostname: 'www.baidu.com',
    method: 'GET'
}

const req = http.request(options, (res) => {
    console.log('status: ', res.statusCode)
    console.log('headers', res.headers)
    res.pipe(process.stdout)
})

req.end()

