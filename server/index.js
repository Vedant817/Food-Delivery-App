const express = require('express');
const MongoDB = require('./db.js')
const createUser = require('./routes/createUser.js')
const app = express()
const port = 5000
app.use(express.json())

app.get('/',(req,res)=>{
    res.send('Hello World!!')
})

app.use('/api/',createUser)

app.listen(port,()=>{
    console.log('Server Started')
})