const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routesUrls = require('./routes')
const cors = require('cors')


dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS)

app.use(express.json())
app.use(cors())
app.use('/app', routesUrls)
app.listen(process.env.PORT || 5000);

app.get('/',(req, res)=>{
    res.send('Hello my server is working');
})
