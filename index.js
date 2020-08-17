let express=require('express');
const app=express();
const router=express.Router();


app.get('/',function(req,res){

    res.sendFile(__dirname+"/public/home.html");
});

app.get('/login',function(req,res){

    res.sendFile(__dirname+"/public/login.html");
});
app.get('/about',function(req,res){

    res.sendFile(__dirname+"/public/about.html");
});
app.listen(3000)