const app = require('./src/app')
const http = require('http')

const server = http.createServer(app)
const port = process.env.PORT || 8888

server.listen(port, () => console.log(`Server running on port ${port}`))