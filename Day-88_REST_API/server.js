const app=require('./src/app')

const notes=[]

app.post('/notes',(req,res)=>{
    notes.push(req.body)
    console.log('note created')
})

app.get('/notes',(req,res)=>{
    res.send(notes)
    console.log(notes)

})

app.delete('/notes/:index',(req,res)=>{
    delete notes[req.params.index]
    console.log(notes)
})

app.patch('/notes/:index',(req,res)=>{
    notes[req.params.index].content=req.body.content;

    res.send('Note updated successfully')
})

app.listen(3000,()=>{
    console.log("Hello world!!!")
})