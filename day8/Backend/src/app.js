const express = require("express")

const noteModel = require("./modules/note.model")
const cors=require("cors")
const path = require("path")

const app = express();
app.use(cors())
app.use(express.json())

app.post('/api/notes', async (req, res) => {
    const { title, description } = req.body
    const note = await noteModel.create({
        title, description

    })
            res.status(201).json({
                message:"note created successfully"
            })

})
app.get('/api/notes',async(req,res)=>{
  const notes= await  noteModel.find()
  res.status(200).json({
    message:"note retain successfully"
  })
})
app.delete('api/notes/:id',async(req,res)=>{
    const id =req.params.id
const noteid=await noteModel.findByIdAndDelete(id)
    req.status(200).json({
        message:"Note deleted succesfully "
    })
})

app.patch('/api/notes/:id',async(req,res)=>{
    const id =req.params.id
    const {description}=req.body
   await noteModel.findByIdAndUpdate(id,{description})

   res.status(200).json({
    message:"note updated successfully"
   })
})
console.log(_dirname)
// middleware
app.use('*name',(req,res)=>{
    res.sendFile(path.join(__dirname,"..","/public/index.html"))
})
module.exports = app;