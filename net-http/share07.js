
// share07.js
const http = require("http")

const querystring = require('querystring')

const data = querystring.stringify({
    name: 'lyl',
    password: '0123456789'
});

const options = {
  hostname: 'localhost',
  method: 'POST',
  port: 3000,
  path: '/login/',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'Cookie': 'PSTM=1495795172; BIDUPSID=D7A07AB4C555244422303E04652D9AD6;'
  }
};

const req = http.request(options, (res) => {

  console.log('STATUS: ', res.statusCode);

  res.pipe(process.stdout)

})

req.write(data)

req.end()

req.on('error', (err) => {

  console.log(err)
})



