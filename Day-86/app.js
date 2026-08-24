const express=require('express')
const app=express()

app.get('/', (req, res) => {
    res.send("This is the main page")
})

app.get('/home', (req, res) => {
    res.send("This is the HOME page WELCOME TO EVERYONE")
})

app.get('/about', (req, res) => {
    res.send("This is the ABOUT page")
})






app.listen(3000)