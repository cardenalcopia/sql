let mysql = require("mysql2")
let connection = mysql.createConnection(
    {
        host:"localhost",
        user:"root",
        password:"cardenalcopia1.",
        database:"codenotch"
    }
);
connection.connect(function(error){
    if (error){
        console.log(error);
    }else{
        console.log("conexion correcta")
    }
});
let sql ="INSERT INTO alumnos(nombre,apellido,email,f_nacimiento) VALUES (\"Roberto\",\"Rodriguez\",\"kirisse\",1985)";
connection.query(sql,function(err,result)
{
    if(err)
    {
        console.log(err)
    }else{
        console.log("dato insertado");
        console.log ( result);
    }
})
sql="ALTER TABLE alumnos ADD trabajo VARCHAR(60)";

connection.query(sql,function(err,result)
{
    if(err)
    {
        console.log(err)
    }else{
        console.log("columna insertada");
        console.log ( result);
    }
})
sql= "ALTER TABLE profesores DROP apellido";
connection.query(sql,function(err,result)
{
    if(err)
    {
        console.log(err)
    }else{
        console.log("columna eliminada");
        console.log ( result);
    }
})
sql= "DROP TABLE profesores";
connection.query(sql,function(err,result)
{
    if(err)
    {
        console.log(err)
    }else{
        console.log("tabala borrada");
        console.log ( result);
    }
})
