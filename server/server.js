const express = require('express');
const app = express()
const dotenv = require('dotenv')
const path = require('path')
const DBconncetion = require('./config/connectDB')
dotenv.config({path: path.join(__dirname, 'config', '.env')})

const product = require('./routes/product')
const order = require('./routes/order')

app.use(express.json())

app.use('/api/v1', product)
app.use('/api/v1', order)

DBconncetion();

const port = process.env.PORT
app.listen(port, (req,res)=>{
    console.log(`Server listening to port ${port}`)
})
