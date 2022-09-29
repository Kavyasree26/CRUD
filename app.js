const express=require('express')
const mongoose=require('mongoose')
const app=express()
const url='mongodb://localhost/booksDB'
mongoose.connect(url)
const con=mongoose.connection
con.on('open',() =>
{
    console.log("database connected")
})
app.listen(9000,() =>
{
    console.log("server connected")
})
const Bookrouter=require('./routes/books')
app.use('/books',Bookrouter)