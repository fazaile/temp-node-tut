const http= require('http');

const server= http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end('welcome to our home page');
    }
    if(req.url === '/about'){
        res.end('Here is about page');
    }
    res.end(`
    <h1>Opppsss</h1>
    <a href="/"> back home </a>
    `);
});

server.listen(5000);