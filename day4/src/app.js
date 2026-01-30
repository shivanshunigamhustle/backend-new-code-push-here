const express=require("express");

const app=express();

app.use(express.json())

const notes=[
    // {
    //     tiltle: "title1",
    //     description:"hello world"
    // },
]


app.get('/',(req,res)=>{
    res.send("hello world")
})
 app.post("/notes",(req,res)=>{
    console.log(req.body)
    notes.push(req.body)
    console.log(notes)

    res.send("note created")
 })
 app.get("/notes",(req,res)=>{
    res.send(notes)
 })
 app.delete("/notes/:index",(req,res)=>{
delete notes[req.params.index]
res.send("notes deleted successfully")
})

// PATCH/notes/:index,
// req.body={description:-sample modified description}

app.patch("/notes/:index",(req,res)=>{
    notes[req.params.index].description=req.body.description;
    res.send("notes upadated successfully")
})

module.exports=app
