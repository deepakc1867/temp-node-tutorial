const http = require('http');

const server = http.createServer((req,res) => {
    console.log(req);
    if(req.url = '/'){
        res.end("Welcome to our Home Page!")
    }else
    if(req.url = '/about'){
        res.end("Here is our short story")
    }else{
        res.end(`
        <h1>Oops!</h1>
        <p>We can't seem to find the page, Sorry!</p>
        <a href="/">Back Home...</a>
        `)
    }
})

server.listen(5000);