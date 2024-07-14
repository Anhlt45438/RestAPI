// const { createServer } = require('node:http');

// const hostname = '127.0.0.1';  //ip localhost
// const port = 3000;

// const server = createServer((req, res) => {
//     res.statusCode = 200; //ma ok
//     res.setHeader('Content-Type', 'text/plain');
//     res.write('Hello World');
//     res.write('Lab2 - nodejs');
//     res.write('<p style="color: red;">Lab 2 - Node JS</p>');
//     res.end();
// });

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });

//http://127.0.0.1:3000/

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})