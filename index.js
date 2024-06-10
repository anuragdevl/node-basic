// console.log("This is abasic");
require('dotenv').config();
const express = require('express');
// import express from 'express'
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello world home page');
})

app.get('/twitter', (req, res) => {
    res.send('Hello world');
})

app.get('/login', (req, res) => {
    res.send('<h1>Please login</h1>');
})

app.get('/youtube',(req,res)=>{
   res.send('<h2>This is a youtube navigation page</h2>')
})

app.listen(process.env.PORT, () => {
    console.log(`App listing on port ${port}`);
})