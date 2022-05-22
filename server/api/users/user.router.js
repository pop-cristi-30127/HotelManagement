const{ createUser, getUserById,getUsers,updateUsers,deleteUser,login }=require("./user.controller");
const {del} = require("express/lib/application");
const router=require("express").Router();
const {checkToken}=require("../../auth/token-validation");

router.post("/",createUser);
router.get("/",checkToken,getUsers);
router.get("/:ClientID",checkToken,getUserById);
router.patch("/",checkToken,updateUsers);
router.delete("/",checkToken,deleteUser);
router.post("/login",login);
module.exports=router;