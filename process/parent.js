
// parent.js
const fork = require('child_process').fork

const len = require('os').cpus().length

const workers = []

for(let i = 0; i < len; i ++) {

  workers[i] = fork('child.js')

  console.log(`pid: ${workers[i].pid}`)

}

const server = require('net').createServer()

server.on('connection', (socket) => {

  socket.end('handled by parent\n')

})

server.listen(8888, () => {

  workers.forEach(worker => {
    worker.send('server', server)
  })

})

