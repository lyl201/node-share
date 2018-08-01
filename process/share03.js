
// share03.js
const cp = require('child_process')

const ls = cp.exec('node share01.js', (err, stdout, stderr) => {
  if (!err) {
    console.log(stdout)
  }
})

ls.stdout.pipe(process.stdout)

ls.stderr.on('data', (data) => {
  console.log('stderr: ', data)
})

ls.on('close', (code) => {
  console.log(`子进程退出码：${code}`);
})


