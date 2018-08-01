
// share01.js
const EventEmitter = require('events')

class MyEmitter extends EventEmitter { }

const myEmitter =  new MyEmitter()

const cb = () => { }

let createTime = null

let removeTime = null

myEmitter.on('event', () => {
    console.log('an event occurred!')
})

myEmitter.emit('event')

myEmitter.on('newListener', () => {

    createTime = new Date()

    console.log('add a new listener')

})

myEmitter.on('removeListener', () => {

    removeTime = new Date()

    console.log(`remove a new listener after ` 
     + `${Math.floor((removeTime.getTime() - createTime.getTime()) / 1000)}s`)
    
})

setImmediate((() => {
    myEmitter.on('newEvent', cb)
}))

setTimeout(() => {
    myEmitter.removeListener('newEvent', cb)
}, 3000)

