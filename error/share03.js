

// share03.js
const external = () => {
    process.nextTick(() => {
        throw new Error('catch me')
    })
}

const internal = () => {
    external()
}

try {
    internal()
} catch (err) {
    console.log(err)
}
process.on('uncaughtException', (err) => {
    console.log('这是一个未被捕获的异常:', err)
})
console.log('end')


