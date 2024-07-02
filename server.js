import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import cors from 'cors'
import categoryRoutes from "./routes/categoryRoutes.js"
import productRoutes from "./routes/productRoutes.js"
import path from 'path'

dotenv.config()

connectDB()

//esmodule fix

const app=express()



//middlewares
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))


//routes
app.use("/api/v1/auth",authRoutes)
app.use("/api/v1/category",categoryRoutes)
app.use("/api/v1/product",productRoutes)

//static files

app.use(express.static(path.join(__dirname,"./client/build")))

app.use("*",function(req,res){
    res.sendFile(path.join(__dirname,'./client/build/index.html'))
})


const PORT=8000

app.listen(PORT,()=>console.log(`server running on port ${PORT}`.bgCyan.white))