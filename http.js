// HTTP MODULE

const http = require('http')
const server = http.createServer( (req,res)=> {

    if(req.url === '/') {
        res.end('Welcome to our homepage')
    }
    if(req.url === '/about') {
        res.end('This is the story about us!')
    }

})

server.listen(5000)

