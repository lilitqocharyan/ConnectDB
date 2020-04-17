const express = require('express')
const Sequelize = require('sequelize')
const sequelize = require('./connectDB')

const app = express()

app.listen(3030,() => {
    console.log('server is running')
})


app.use('/api',require('./Auth/signup'))
app.use('/api',require('./Auth/login'))
app.use('/api/farmer',require('./Controllers/farmers'))
app.use('/api/slaughterhouse',require('./Controllers/slaughterhouses'))
app.use('/api/user',require('./Controllers/users'))