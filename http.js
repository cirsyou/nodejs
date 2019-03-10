var http = require('http')

// 创建服务
var server = http.createServer(function (req, res) {
  // 发送请求头
  res.writeHead(200, {'Content-Type': 'text/plain'})
  // 发送响应数据
  res.end('hello world')
})

server.listen(8888)
console.log('Server running at http://127.0.0.1:8888/')