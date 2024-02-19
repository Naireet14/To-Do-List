const express=require('express')
const mongoose=require('mongoose')
const dotenv=require('dotenv')
const cors=require('cors')

const app=express()
app.use(express.json())
app.use(cors())

dotenv.config()
const db=require('./config/dbconfig')

const routes=require('./routes/todoroute')
app.use(routes)





const port=process.env.PORT ||5000
app.listen(port,()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
})
