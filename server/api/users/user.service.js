const pool=require("../../database");

module.exports={
    create: (data,callBack)=>{
        pool.query(
            `insert into clients(FirstName,LastName,Telephone,Email,Password)
                         values(?,?,?,?,?)`,

        [
            data.FirstName,
            data.LastName,
            data.Telephone,
            data.Email,
            data.Password

        ],
            (error,results,fields)=>{
                if(error){
                    return callBack(error);
                }
                return callBack(null,results);
            }
        );
    },
    getUsers: callBack=>{
        pool.query(
            `select ClientID,FirstName,LastName,Telephone,Email,Password from clients`,
            [],
            (error,results,fields)=>{
                if(error){
                    return callBack(error);
                }
                return callBack(null,results);
            }
        );
    },
    getUserById:(ClientID,callBack)=>{
        pool.query(
            `select ClientID,FirstName,LastName,Telephone,Email from clients where ClientID=?`,
            [ClientID],
            (error,results,fields)=>{
                if(error){
                    callBack(error);
                }
                return callBack(null,results[0]);
            }
        );

    },
    updateUser:(data,callBack)=>{
        pool.query(
            `update clients set FirstName=?,LastName=?,Telephone=?,Email=?,Password=? where ClientID=?`,

            [
                data.FirstName,
                data.LastName,
                data.Telephone,
                data.Email,
                data.Password,
                data.ClientID

            ],
            (error,results,fields)=>{
                if(error){
                    return callBack(error);
                }
                return callBack(null,results[0]);
            }
        );
},
    deleteUser:(data,callBack)=>{
        pool.query(
            `delete from clients where ClientID =?`,
            [data.ClientID],
            (error,results,fields)=>{
                if (error){
                    callBack(error);
                }
                return callBack(null,results[0]);
            }
        );
    },
    getUserByEmail: (Email,callBack)=>{
        pool.query(
            `select * from clients where Email=?`,
            [Email],
            (error,results,fields)=>{
                if(results.length === 0){
                    console.log("err:",error);
                     return callBack(error);

                }
                return callBack(null,results);
            }
        );
    }
};