const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    console.log("Vao trang chu");
    res.send('Trang chu web')
})

app.get('/home', (req, res) => {
    console.log("Vao trang home");
    res.send('Trang home web')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

// http://127.0.0.1:3000/