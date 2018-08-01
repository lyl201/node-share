

// share01.js
console.log('start')

setImmediate(() => { console.log('setImmediate 1') })

setTimeout(() => { console.log('setTimeout 1') }, 0)

setTimeout(() => { console.log('setTimeout 2') }, 5)

setImmediate(() => { console.log('setImmediate 2') })

new Promise(() => {

    console.log('Promise 1')

    Promise.resolve('Promise 2').then((res) => {
        console.log(res)
    })
})

process.nextTick(() => {

    console.log('nextTick 1')

    process.nextTick(() => {
        console.log('nextTick 2')
    })
})
process.nextTick(() => { console.log('nextTick 3') })

console.log('end')

