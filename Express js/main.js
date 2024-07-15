const http = require('node:http')
const hostname = '127.0.0.1'
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plai')
  res.end('Hello World2\n')

})
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
}) 
