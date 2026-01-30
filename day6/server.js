const app=require("./src/app")

const mongoose=require("mongoose")

function connectToDb(){
    mongoose.connect("mongodb+srv://Shivanshunigam:Shivanshu100@shivanshu.npzqavr.mongodb.net/day-6")

    .then(()=>{
        console.log("connected to database")

    })
}
connectToDb()
 
app.listen(3000,()=>{
        console.log("server is running in port 3000")
    })