
// share06.js
const fs = require('fs')

const cp = require('child_process');

fs.watch('./1.txt', (eventType, filename) => {
  console.log(eventType, filename)
  if (eventType === 'change') {
    cp.exec('node share04.js', (err, stdoutData, stderr) => {
      console.log("share04.js is restartesd")
      console.log(stdoutData)
    })
  }
  if (eventType === 'rename') {
    console.log('delete file or rename')
  }
})

console.log("start")

