const connectToMongo = require('./db');
const express = require('express');
const { application } = require('express');

connectToMongo();
const app = express()
const port = 8000

app.use(express.json())

// Available Routes

app.get('/', (_req, res) => {
    res.send(`<center><h1>localhost:${port} working</h1></center>`)
})

app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.listen(port, () => {
    console.log(`Backend listening http://localhost:${port}`)
})


