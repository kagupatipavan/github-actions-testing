const express = require('express');
const app = express();
app.get('/',(req,res)=>res.send('hello'));
app.post('/',(req,res)=>res.send("mewo"));
app.listen(1112)