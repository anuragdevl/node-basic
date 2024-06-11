// console.log("This is abasic");
require('dotenv').config();
const express = require('express');
// import express from 'express'
const app = express();
const port = 3000;

const githubData = 
  
        {
            "ID": "001",
            "Name": "Anurag Singh",
            "City": "Noida",
            "Address": "1 Wall Street, Apt 5",
            "Mobile":"9616480655",

        }



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
   res.send('<h2>This is a youtube navigation page song </h2>')
})

app.get('/github',(req,res)=>{
 res.json(githubData);
})

app.listen(process.env.PORT, () => {
    console.log(`App listing on port ${port}`);
})