const pool=require("../../database");

module.exports={
    create: (data,callBack)=>{
        pool.query(
            `insert into registration(id,firstName,lastName,email,password,number)
                         values(?,?,?,?,?,?)`,

        [
            data.id,
            data.first_name,
            data.last_name,
            data.email,
            data.password,
            data.number
        ],
            (error,results,fields)=>{
                if(error){
                    return callBack(error);
                }
                return callBack(null,results);
            }
        );
    }
};