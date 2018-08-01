
// share05.js
const net = require('net');

const connection = net.connect('localhost:8080');

// 添加一个 'error' 事件句柄到一个流：
connection.on('error', (err) => {
  // 如果连接被服务器重置，或无法连接，或发生任何错误，则错误会被发送到这里。 
  console.error(err);
});

connection.pipe(process.stdout);