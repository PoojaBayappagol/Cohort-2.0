const app=require('./src/app')

const notes=[]

app.post('/notes',(req,res)=>{
    notes.push(req.body)

    res.status(201).json({
        message:"Note created successfully"
    })
})

app.get('/notes',(req,res)=>{
    res.status(200).json({
        notes: notes
    })
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})