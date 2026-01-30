const app=require("./src/app")
const mongoose=require("mongoose")
const connectTodb=require("./src/config/Database")



app.listen(3000,()=>{
    console.log("server runninig ni port 3000")
})