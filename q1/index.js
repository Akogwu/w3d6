const express = require('express');
const path = require('path');
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'styles')));

const date = new Date();
const hour = date.getHours();

app.use("/",(req,res)=>{
    res.render('index',{
        style: (hour >= 6 && hour <= 18)?'day.css':'night.css',
        message:  (hour >= 6 && hour <= 18)
        ?'Yeah!! its a beautiful day, get some wonderful things done today. Current hour is: ':'Hey... it\'s night, get some sleep. Current hour is:',
        date:date,
        title:"Dynamic styles",

    });
});

app.listen(4000,()=>console.log("Server listening on port 4000"));