const http = require('http')
const path = require('path')
const fs = require('fs')
const { stringify } = require('querystring')
const PORT = process.env.port || 5000

const server = http.createServer((req, res) => {
    // if (req.url === '/') {
    //     fs.readFile(
    //         path.join(__dirname, 'public', 'index.html'), 
    //         (err, content) => {
    //             if (err) throw err
    //             res.writeHead(200, {'Content-Type': 'text/html'})
    //             res.end(content)
    //     })
    // }
    // if (req.url === '/about') {
    //     fs.readFile(
    //         path.join(__dirname, 'public', 'about.html'), 
    //         (err, content) => {
    //             if (err) throw err
    //             res.writeHead(200, {'Content-Type': 'text/html'})
    //             res.end(content)
    //     })
    // }
    // if (req.url === '/api/users') {
    //     const users = [
    //         {name: 'Bob', age: 40},
    //         {name: 'Bill', age: 30}
    //     ]
    //     res.writeHead(200, {'Content-Type': 'application/json'})
    //     res.end(JSON.stringify(users))
    // }
    let filePath = path.join(
        __dirname, 
        'public', 
        req.url === '/' ? 'index.html' : req.url
    )
    let extname = path.extname(filePath)
    let contentType = 'text/html'

    // Check ext and set content type
    switch(extname) {
        case '.js':
            contentType = 'text/javascript'
            break
        case '.css':
            contentType = 'text/css'
            break
        case '.json':
            contentType = 'application/json'
            break
        case '.png':
            contentType = 'image/png'
            break
        case '.jpg':
            contentType = 'image/jpg'
            break
    }
    if (contentType == "text/html" && extname == "") filePath += ".html";

    // Read File
    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === 'ENOENT') {
                // Page not found
                fs.readFile(path.join(__dirname, 
                    'public',
                    '404.html'
                    ), (err, content) => {
                        res.writeHead(200, {'Content-Type': contentType})
                        res.end(content, 'utf8')
                    })
            } else {
                // Some server error
                res.writeHead(500)
                res.end(`Server Error: ${err.code}`)
            }
        } else {
            // Success
            res.writeHead(200, {'Content-Type': contentType})
            res.end(content, 'utf8')
        }
    })
})

server.listen(PORT, () => console.log(`Server listening on port ${PORT}`))