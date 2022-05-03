const express = require("express");
const app = express();
const userRouter=require("./api/users/user.router");

app.use(express.json());

app.use("/api/users",userRouter);
/*app.get("/api",(req,res)=>{
    res.json({
        success: 1,
        message: "Rest API is working"
    });
});*/

app.listen(3000,()=>{
    console.log("Server is up and running");
});


/*const port = 3000
const router = require('./router.js');

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
router.create(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})*/
