const server = require('./server')

const port = process.env.PORT || 3000

server.set('port', port)

server.listen(port, function() {
    console.log('Server running in port', port)
})