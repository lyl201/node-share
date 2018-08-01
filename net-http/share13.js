

// share13.js
const App = require('./app')
let app = new App()

app.use((req, res, next) => { 

  try {
    res.write('1')
    console.log(req.url, '1')
    throw new Error("出错了")
    next()
  } catch(err) {
    next(err)
  }
})

app.use((req, res, next) => {

  try {
    res.write('2')
    console.log(req.method, '2')
    next()
  } catch(err) {
    next(err)
  }
})

app.use((req, res, next) => {

  try {
    res.write('3')
    console.log('3')
    next()
  } catch(err) {  
    next(err)
  }
})

app.listen('8088', () => {
  console.log('server started')
})


