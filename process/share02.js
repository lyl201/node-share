

// share02.js
const cp = require('child_process')

const ls = cp.spawn('node', ['share01.js'])

ls.stdout.pipe(process.stdout)

ls.stderr.on('data', (data) => {
  console.log('stderr: ', data)
})

ls.on('close', (code) => {
  console.log(`子进程退出码：${code}`);
})
