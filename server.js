require('dotenv').config()

//Dependencies
const express = require('express')
const app = express()
const morgan = require('morgan')
const PORT = process.env.PORT || 3001
const cors = require('cors')

//Import JSON files
const projects = require('./projects.json')
const about = require("./about.json")

//Middleware
app.use(morgan('tiny'))
app.use(express.urlencoded({extended:true}))
app.use(cors())


//Routes

//test
app.get('/', (req,res)=>{
    res.send('ITS ALIVE!!')
})

app.get('/projects', (req,res)=>{
    res.json(projects)
})

app.get('/about', (req,res)=>{
    res.json(about)
})






app.listen(PORT, ()=>{
    console.log(`Listening on ${PORT}`)
})