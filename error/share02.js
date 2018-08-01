

// share02.js
const external = () => {
    throw new Error('catch me')
}

const internal = () => {
    external()
}

try {
    internal()
} catch (err) {
    console.log(err)
}

console.log('end')

