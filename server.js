const express =require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const knex = require('knex');
const bcrypt = require('bcrypt-nodejs');
const signin = require('./controllers/signin');
const register = require('./controllers/register');
const profile = require('./controllers/profile');
const image = require('./controllers/image');
const db = knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : '',
    password : '',
    database : 'smart-brain'
  }
});


const app = express();
app.use(bodyParser.json())
app.use(cors())




  //app.get('/',(req,res)=> { 
  //res.send(db.user)
  //})

//singin
app.post('/signin',(req,res) => {signin.handleSignin(req,res,db,bcrypt)})


//register new user
app.post('/register',(req,res)=>{register.handleRegister(req,res,db,bcrypt)})

//get user name from profile
  app.get('/profile/:id',(req,res)=> {profile.handleprofile(req,res,db)})

app.put('/image',(req,res) =>{image.handleImage(req,res,db)})

app.post('/urlImage',(req,res) =>{image.handleUrlImage(req,res)})




app.listen(3000, ()=> {console.log('app  3000')});       


/*
res = this is working
/signing --> post = success/fall\
/register --> post = user 
/profile/:userid --> get = user
/image --> put --> user 
*/