const express = require("express");

const app = express();
const port = 5000;
//use express

app.get('/',(req,res) => {
    res.send('Hello World');
});

app.get('/login',(req,res) => {
    res.send('Login Page');
});

app.listen(port,() => {
    console.log('Server is up and running...');
});