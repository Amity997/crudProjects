const mysql=require('mysql');
var connection=mysql.createConnection({

    port:3306,
    host:"localhost",
    user:"root",
    password:"123Qwe123@",
    database:"crud"
});
connection.connect((err)=>{
    if(!err)
    {
        console.log("Connected");

    }
    else
    console.log(err);
}) ;
var connection1=mysql.createConnection({

    port:3306,
    host:"localhost",
    user:"root",
    password:"123Qwe123@",
    database:"crud"
});


module.exports=connection;
