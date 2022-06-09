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
let sql ="SELECT AVG (mark)  FROM marks WHERE subject_id =1"
connection.query(sql,function(err,result)
{
    if(err)
    {
        console.log(err)
    }else{
        console.log("nota media asignatura 1");
        console.log ( result);
    }
});
sql ="SELECT COUNT (*)FROM students"
connection.query(sql,function(err,result)
{
    if(err)
    {
        console.log(err)
    }else{
        console.log("total de alumnos");
        console.log ( result);
    }
})
sql ="SELECT * FROM codenotch2.groups"
connection.query(sql,function(err,result)
{
    if(err)
    {
        console.log(err)
    }else{
        console.log("grupos");
        console.log ( result);
    }
});

// sql="ALTER TABLE students ADD matricula DATE"
// connection.query(sql,function(err,result)
// {
//     if(err)
//     {
//         console.log(err)
//     }else{
//         console.log("añadido año matricula");
//         console.log ( result);
//     }
// });
sql ="DELETE  FROM marks WHERE (mark > 5) AND (date < \"2022-01-01\") "
connection.query(sql,function(err,result)
{
    if(err)
    {
        console.log(err)
    }else{
        console.log("notas actualizadas");
        console.log ( result);
    }
});
sql ="SELECT first_name,last_name FROM students WHERE matricula BETWEEN \"2022-01-01\" AND \"2022-06-07\""
connection.query(sql,function(err,result)
{
    if(err)
    {
        console.log(err)
    }else{
        console.log("matriculados este año");
        console.log ( result);
    }
});
sql="SELECT DISTINCT student_id,mark FROM marks WHERE( student_id BETWEEN 1 AND 20) OR (mark >8 AND date <2021-06-07) "
connection.query(sql,function(err,result)
{
    if(err)
    {
        console.log(err)
    }else{
        console.log("busqueda");
        console.log ( result);
    }
});
sql= "SELECT AVG  (mark) FROM marks WHERE date BETWEEN \"2021-06-07\" AND \"2022-06-07\" GROUP BY subject_id" 
connection.query(sql,function(err,result)
{
    if(err)
    {
        console.log(err)
    }else{
        console.log("busqueda");
        console.log ( result);
    }
});
sql= "SELECT AVG  (mark) FROM marks WHERE date BETWEEN \"2021-06-07\" AND \"2022-06-07\" GROUP BY student_id" 
connection.query(sql,function(err,result)
{
    if(err)
    {
        console.log(err)
    }else{
        console.log("busqueda");
        console.log ( result);
    }
});
sql= "SELECT COUNT (*) AS num_prof FROM subject_teacher GROUP BY subject_id" 
connection.query(sql,function(err,result)
{
    if(err)
    {
        console.log(err)
    }else{
        console.log("busqueda4");
        console.log ( result);
    }
});