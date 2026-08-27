const express=require("express")
const noteModel=require("./models/note.model")
const cors=require("cors")

const path=require('path')

const app=express()

app.use(cors())
app.use(express.json())
app.use(express.static("./public"))

app.post('/notes', async (req, res) => {
    const { title, description } = req.body

    const note = await noteModel.create({
        title,
        description
    })

    res.status(201).json({
        message: "Note created successfully",
        note
    })
})


app.get('/notes', async (req, res) => {
    const notes = await noteModel.find()

    res.status(200).json({
        message: "Notes fetched successfully",
        notes
    })
})


app.patch('/notes/:id', async (req, res) => {
    const { id } = req.params
    const { title, description } = req.body

    const note = await noteModel.findByIdAndUpdate(
        id,
        {
            title,
            description
        },
        {
            new: true
        }
    )

    res.status(200).json({
        message: "Note updated successfully",
        note
    })
})



app.delete('/notes/:id', async (req, res) => {
    const { id } = req.params

    const note = await noteModel.findByIdAndDelete(id)

    res.status(200).json({
        message: "Note deleted successfully",
        note
    })
})


app.use("*name",(req,res)=>{
    res.sendFile(path.join(__dirname,"..","./public/index.html"))
})

module.exports=app