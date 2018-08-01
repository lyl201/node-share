
// app.js
const http = require('http')

class App extends http.Server {

    constructor() {
        super()
        this.stack = []
        this.on('request', (req, res) => {
            res.writeHead(200, {
                'content-type': 'text/plain; charset=utf-8'
            })
            this.handleRequest(req, res)
        })

    }

    handleRequest(req, res) {
        const next = (i, err) => {
            if (i < this.stack.length) {
                if (err) {
                    console.log('err', err)
                }
                this.stack[i](req, res, next.bind(this, i + 1))
            } else {
                res.end("所有中间件都执行完了")
            }
        }
        next(0, null)
    }

    use(handler) {
        this.stack.push(handler)
    }

} 
module.exports = App


