const sql = require('mssql')

module.exports = {
    connect: async function (ip, port, user, pass) {
        // throw new Error('Invalid credentials');
        await sql.connect('Server=localhost,1433;Database=ProiectII;User Id=;Password=;Encrypt=true')
        const result = await sql.query`select * from mytable where id = ${value}`
        console.dir(result)
        return this;
    },

    send: function () {

    },

    receive: function () {

    }
};
