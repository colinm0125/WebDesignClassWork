import{ createServer } from 'node.http';
const PORT=3000;
const server = createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
});

server.listen(PORT, '127.0.0.1',() => {
    console.log('Server listening on 127.0.0.1:3000');
});
//run with node server/index.js