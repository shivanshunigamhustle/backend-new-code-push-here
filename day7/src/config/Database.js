
const mongoose=require("mongoose")
function connectTodb(){
    mongoose.connect("mongodb+srv://Shivanshunigam:Shivanshu100@shivanshu.npzqavr.mongodb.net/day-7")
    .then(()=>{
        console.log("connected to DB")
    })
}
connectTodb()

module.exports=connectTodb