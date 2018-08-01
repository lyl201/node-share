

// child.js
process.on('message', (msg, server) => {

  if (msg === 'server') {

    server.on('connection', (socket) => {

      socket.end(`handled by child, pid is ${process.pid}\n`)

    })
  }
})