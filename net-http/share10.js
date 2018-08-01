

// share10.js
const App = require('./app')

let app = new App()

app.use((req, res, next) => {

  res.write('1')

  console.log(req.url, '1')

  next();

})

app.use((req, res, next) => {

  res.write('2')

  console.log(req.method, '2')

  next()
})

app.use((req, res, next) => {

  res.write('3')

  console.log('3')

  next()
})

app.listen('8088', () => {
  console.log('server started')
})










