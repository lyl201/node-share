

// fibo.js
const fibo = (n) => {

  return n !== 1 ? n * fibo(n - 1) : 1

}

process.on('message', (n) => {

  process.send(fibo(n))

})

process.on('SIGHUP', () => {
  
  process.exit()

})

process.on('exit', () => {
  console.log("这个进程结束了")
})

