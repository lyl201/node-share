
// share05.js
const cluster = require('cluster')

const http = require('http')

const numCPUs = require('os').cpus().length
 
if (cluster.isMaster) {

  console.log('[master] ' + "start master...")
 
  for (let i = 0; i < numCPUs; i ++) {

     cluster.fork()
  }
 
  cluster.on('listening', (worker, address) => {

    console.log(`[master] listening: worker${worker.id}\n`
                  + `pid: ${worker.process.pid}\n` 
                  + `Address: ${address.address}: ${address.port}`)
  })
 
} else if (cluster.isWorker) {
   
  console.log('[worker] ' + "start worker ..." + cluster.worker.id)
  
  let num = 0
  
  http.createServer(function (req, res) {

    num++

    console.log('worker'+cluster.worker.id+":"+num)

    res.end('worker'+cluster.worker.id+',PID:'+process.pid)

  }).listen(3000)
}


