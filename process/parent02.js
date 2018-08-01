

// parent02.js
const fork = require('child_process').fork

const len = require('os').cpus().length

const workers = []

for(let i = 0; i < len; i ++) {

  workers[i] = fork('child02.js')

  console.log(`pid: ${workers[i].pid}`)

}


const server = new require('http').Server()

server.on('connection', (socket) => {

  let curWorker = workers.shift()

  curWorker.send('server', socket)

  workers.push(curWorker)

})

server.listen(1337)

