const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
require('dotenv').config();
const port = process.env.PORT || 5500;
const Users = require("./models/users");

const mongoose = require('mongoose');

app.use(cors());
app.use(express.json());


const uri = process.env.ATLAS_URI;
const connection = mongoose.connection;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);

connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

app.post('/signup',(req, res) => {
  const username = req.body.username.toString();
  const pass = req.body.password;

  const User = new Users({
      userName:username,
      password:pass
  });

  User.save()
  .then(() => {
      res.json('User added!')
      // console.log("ADDED");
  })
  .catch(err => {
      res.status(400).json('Error: ' + err);
      console.log(err);
  });
});

//app.post('/signin',(req, res) => {
  //const username = req.body.username;
  //const pass = req.body.password;
  //Users.find({userName:username}).then(user =>
    //  {
      //    if(user[0].password == pass){
        //      res.json({st:"okay"});
          //}
          //else{
            //  res.json({st:"unokay"});
          //}
      //}).catch(err => res.json("Not found!"));

//});


app.listen(port,()=>{
  console.log("Running at port 5500");
})



