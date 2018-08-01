
// share01.js
const fs = require('fs')

// 文件复制
fs.readFile('./1.txt', (err, buf) => {
    if (err) {
        console.log(err)
    } else {
        fs.writeFile('./2.txt', buf, (err) => {
            if (err) {
                console.log(err)
            } else {
                console.log('复制成功')
            }
        })
    }
})

