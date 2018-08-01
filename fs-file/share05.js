
// share05.js
const fs = require('fs')

const path = require('path')

// 文件遍历
const travel = (dir, cb, finish) => {

    fs.readdir(dir, (err, files) => {

        const next = (i) => {
            if (i < files.length) {
                const pathName = path.join(dir, files[i])
                fs.stat(pathName, (err, stats) => {
                    if (stats.isDirectory()) {
                        travel(pathName, cb, () => {
                            next(i + 1)
                        })
                    } else {
                        cb(err, pathName, () => {
                            next(i + 1)
                        })
                    }
                })
            } else {
                finish && finish()
            }
        }
        next(0)
    })
}
travel(__dirname, (err, path, next) => {
    console.log(path)
    next()
})

