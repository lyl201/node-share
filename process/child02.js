

// child02.js
process.on('message', (msg, socket) => {

  if (msg === 'server') {

    socket.end(`handled by child, pid is ${process.pid}\n`)

  }
  
})
