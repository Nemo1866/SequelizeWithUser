const express=require("express")
const router = require("./route")
const app=express()
require("./connections")

app.use(express.json())

app.use("/api/users",router)

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})