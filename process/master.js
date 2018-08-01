
// master.js
const cp = require('child_process')

const worker = cp.fork('./fibo.js')

worker.on('message', (res) => {

  console.log('res: ', res)

  worker.kill('SIGHUP')
})

worker.send(16)

console.log('end')

