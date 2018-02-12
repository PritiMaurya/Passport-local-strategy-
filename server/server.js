const express = require('express')
const bodyparser = require('body-parser')

const {mongoose} = require('./server/db/mongoose-connect')
const {User} = require('./server/model/user')

const passport = require('passport')
const localStrategy  = require('passport-local')

const app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}))


app.use('/login',(req,res)=>{
    res.sendFile(__dirname+ '/server/login.html')
});

app.use('/',(req,res)=>{
    res.sendFile(__dirname+ '/server/form.html')
});

app.post('/add',(req,res)=>{
    //console.log("aad");
    var newUser = new User({
        name: req.body.name,
        age: req.body.age,
        mobile: req.body.mobile,
        email: req.body.email,
        password: req.body.pwd
    });
    newUser.save().then(
        (doc)=>{
            res.send("data is saved in database");
        }
    ).catch((e)=>{
        res.status(400).send("error in saving data");
    })
    res.send("sdsd");
});

app.listen('3001',()=>{
    console.log('Running localhost 3001')
})





















