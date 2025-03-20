require('dotenv').config()
console.log(process.env.KEY)

let fs = require('fs');
let url = require('url');
let http = require('http');

http.createServer((req, res) => {
    let q = url.parse(req.url, true);
    let filename = q.pathname === "/" ? "./index.html" : "." + q.pathname;

    fs.readFile(filename, 'utf8', (err, data) => {
        if (err) {
            fs.readFile('./404.html', 'utf8', (err404, data404) => {
                if (err404) {
                    res.writeHead(404, {'Content-Type': 'text/html'});
                    return res.end("404 Not Found"); // Fallback if 404.html is missing
                } else {
                    res.writeHead(404, {'Content-Type': 'text/html'});
                    res.write(data404);
                    return res.end();
                }
            });
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        }
    });
}).listen(3050);

console.log("Server running on port 8080");
