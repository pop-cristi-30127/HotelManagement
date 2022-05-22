const express = require("express");
const app = express();
const userRouter=require("./api/users/user.router");

app.use(express.json());

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin',"http://localhost:3000");
    res.setHeader('Access-Control-Allow-Headers',"*");
    res.header('Access-Control-Allow-Credentials', true);
    next();
});


app.use("/api/users",userRouter);


app.listen(3001,()=>{
    console.log("Server is up and running");
});



