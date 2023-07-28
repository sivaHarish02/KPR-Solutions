const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const ejs = require('ejs');
app.use(express.static("public"));
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));
// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/Blogs', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB', error);
  });

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Create Schema
const BlogSchema={
    title:{
        type:String,
        required:true},
    picture:{
        type:String,
        required:true},
    content:{
        type:String,
        default :"user.png",
        required:true},

 
}
const Blog=mongoose.model('Blog',BlogSchema)

// Routers
// get Routes
app.get("/",function(req,res){
    res.render("home")
})
app.get("/create",function(req,res){
    res.render("Create")
})

app.get("/viewall",function(req,res){
    res.render("allblogs");
})
app.get("/allblogs", function(req, res) {
    Blog.find({}, function(err, blog) {
      if (err) {
        console.log(err);
        res.status(500).send("Internal server error");
      } else {
        res.render("allblogs", {blog});
      }
    });
  });
// post Routes
app.post("/create",function(req,res){

    const newUser = new Blog({
        title:req.body.Title,
        picture:req.body.Image,
        content:req.body.Content,
        
    })
    newUser.save(function(err){
        if(err){
            console.log(err)
        }
        else{
            console.log("blog add successfully")
            res.render("successpage");
        }
    })
  })
  

// ======================================
// server listen
app.listen(4000,function(){
    console.log("server is started at port 4000")
})