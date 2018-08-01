
// share09.js
const net = require('net')

const client = net.connect({port: 8001}, () => {
  console.log('client connected')
  client.write('lyl')
})

client.on('data', (data) => {
  console.log(data.toString())
  client.end()
})

client.on('end', () => {
  console.log('connect disconnected');
})

