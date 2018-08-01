

// share01.js
const buf1 = Buffer.alloc(10)

const buf2 = Buffer.from('hhh')

const buf3 = Buffer.from('hhh', 'utf-8')

const buf4 = Buffer.from([0, 4, 9])

const buf5 = Buffer.from(buf4)

const buf6 = Buffer.concat([buf1, buf2])

console.log('buf6: ', buf6)

const buf7 = buf6.slice(2)

buf7[1] = 0xff

console.log('buf1: ', buf1)
console.log('buf2: ', buf2)
console.log('buf3: ', buf3)
console.log('buf4: ', buf4)
console.log('buf5: ', buf5)
console.log('buf6: ', buf6)
console.log('buf7: ', buf7)

