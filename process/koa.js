const Koa = require('koa')

const app = new Koa()

app.use(async (ctx, next) => {
  let a = await next()
  console.log(888, a)
  ctx.body = 'hello world'
})

app.use(async (ctx, next) => {
  return 99
})

app.listen(3000)

console.log('start')