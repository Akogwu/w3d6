const express = require('express');
const path = require('path');
const app = express();

app.use(express.urlencoded({extended:false}));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'styles')));



app.get("/",(req,res)=>{
    res.render('index',{title:"Form Page"});
});

app.post("/result",(req,res)=>{
    let { name, age } = req.body;
    if (name === "") name = 'Anonymous';
    if (age === "") age = 'NA';
    res.render('result', { name, age, title:"Result page" });
});

app.listen(4000,()=>console.log("Server listening on port 4000"));