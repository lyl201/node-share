
// share08.js
const net = require('net')

const server = net.createServer((socket) => {

  console.log(socket.constructor)

  socket.on('data', (data) => {

    socket.write("^_^: " + data)

    console.log(data.toString())

  })
  socket.on('end', () => {
    console.log("连接断开")
  })
  socket.write("ok: ")
})

server.listen(8001, () => {
  console.log("server bound")
})

