const {create,getUserById,getUsers,updateUser,deleteUser,getUserByEmail}=require("./user.service");
const{genSaltSync,hashSync,compareSync}=require("bcrypt");
const {sign}=require("jsonwebtoken");


module.exports={
    createUser:(req,res)=>{
        const body=req.body;
        const salt=genSaltSync(10);
        console.log(body.Password,salt);
        body.Password=hashSync(body.Password,salt);
        getUserByEmail(body.Email,(err,results)=>{
            if(results){
                return res.status(400).json({
                    success: 0,
                    message: "User already exists"
                });
            }
        });



        create(body,(err,results)=>{
            if(err){
                console.log(err);
                return res.status(500).json({
                    success:0,
                    message:"Database connection error"
                });
            }
            return res.status(200).json({
                success:1,
                data: results
            });
        });
    },
    getUserById:(req,res)=>{
        const ClientID=req.params.ClientID;
        getUserById(ClientID,(err,results)=>{
            if(err){
                console.log(err);
                return;
            }
            if(!results){
                return res.json({
                    success:0,
                    message:"Record not found"
                });
            }
            return res.json({
                success: 1,
                data: results
            });
        });
    },
    getUsers:(req,res)=>{
        getUsers((err,results)=>{
           if(err){
               console.log(err);
               return;
           }
           return res.json({
               success: 1,
               data: results
           });
        });
    },
    updateUsers:(req,res)=>{
        const body=req.body;
        const salt=genSaltSync(10);
        body.Password=hashSync(body.Password,salt);
        updateUser(body,(err,results)=>{
            if(err) {
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                message: "updated successfully"
            });
        });
    },
    deleteUser: (req,res)=>{
        const data =req.body;
        deleteUser(data,(err,results)=>{
            if(err){
                console.log(err);
                return;
            }
            if(!results){
                return res.json({
                    success: 0,
                    message: "Record not Found"
                });
            }
            return res.json({
                success: 1,
                message: "user deleted successfully"
            });
        });
    },
    login: (req,res)=>{
        const body=req.body;
        console.log(body)
        getUserByEmail(body.Email,(err,results)=>{
            if(err){
                console.log(err);
                return res.status(400).json({
                    success: 0,
                    data: "Error"
                });
            }
            if(!results){
                return res.status(400).json({
                    success: 0,
                    data: "Invalid Email or password"
                });
            }
            const result = compareSync(body.Password,results[0].Password);

            if(result){
                results.Password=undefined;
                const jsontoken=sign({result: results},"qwe1234",{
                    expiresIn: "1h"
                });


                return res.json({
                    success: 1,
                    message: "Login successfull",
                    token: jsontoken

                });
            }else{
                return res.status(400).json({
                    success: 0,
                    data: "Invalid Email or password"
                });
            }
        });
    }
};