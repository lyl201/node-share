
// share02.js
const fs = require('fs')

const read = (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, (err, buf) => {
            if (err) {
                reject('读取失败')
            } else {
                resolve(buf)
            }
        })
    })
}

const write = (path, data) => {   
    return new Promise((resolve, reject) => {
        fs.writeFile(path, data, (err) => {
            if (err) {
                reject('读取失败')
            } else {
                resolve('复制成功')
            }
        })
    })
}

const copyFile = async (path, dir) => {
    try {
        const data = await read(path)
        const res = await write(dir, data)
        console.log(res)
    } catch(err) {
        console.log(err)
    }
}

copyFile('./1.txt', './3.txt')


