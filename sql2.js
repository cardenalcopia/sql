let mysql = require("mysql2")
let connection = mysql.createConnection(
    {
        host:"localhost",
        user:"root",
        password:"cardenalcopia1.",
        database:"codenotch2"
    }
);
connection.connect(function(error){
    if (error){
        console.log(error);
    }else{
        console.log("conexion correcta")
    }
});
let sql = "UPDATE marks set mark = 0"
connection.query(sql,function(err,result)
{
    if(err)
    {
        console.log(err)
    }else{
        console.log("dato actualizado");
        console.log ( result);
    }
});
sql="SELECT first_name , last_name FROM students";
connection.query(sql,function(err,result)
{
    if(err)
    {
        console.log(err)
    }else{
        console.log("dato actualizado");
        console.log ( result);
    }
});
sql ="SELECT * FROM teachers"
connection.query(sql,function(err,result)
{
    if(err)
    {
        console.log(err)
    }else{
        console.log("dato actualizado");
        console.log ( result);
    }
});
sql=" DELTE FROM marks WHERE date <\*2011-01-01"
connection.query(sql,function(err,result)
{
    if(err)
    {
        console.log(err)
    }else{
        console.log("dato actualizado");
        console.log ( result);
    }
});
sql="UPDATE TABLE marks SET mark=5 WHERE mark < 5"
connection.query(sql,function(err,result)
{
    if(err)
    {
        console.log(err)
    }else{
        console.log("dato actualizado");
        console.log ( result);
    }
});