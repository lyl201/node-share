

// share02.js
console.log('start')

setImmediate(() => { console.log('setImmediate 1') })

setTimeout(() => { console.log('setTimeout 1') }, 0)

setImmediate(() => { 

    console.log('setImmediate 2') 

    setTimeout(() => { console.log('setTimeout 2') }, 0)

    setImmediate(() => { console.log('setImmediate 3') })

    process.nextTick(() => {

        console.log('nextTick 1')
    
        process.nextTick(() => {
            console.log('nextTick 2')
        })
    })

})

setImmediate(() => { console.log('setImmediate 4') })

process.nextTick(() => { console.log('nextTick 3') })

console.log('end')





