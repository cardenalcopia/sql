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
// let sql ="SELECT first_name,last_name ,title FROM students  JOIN subject_teacher ON (students.group_id= subject_teacher.group_id) JOIN subjects ON (subject_teacher.subject_id = subjects.subject_id) "
// connection.query(sql,function(err,result)
// {
//     if(err)
//     {
//         console.log(err)
//     }else{
//         console.log("prueba");
//         console.log ( result);
//     }
// });
// sql="SELECT first_name,last_name ,title FROM teachers  JOIN subject_teacher ON (teachers.teacher_id= subject_teacher.teacher_id) JOIN subjects ON (subject_teacher.subject_id = subjects.subject_id) "
// connection.query(sql,function(err,result)
// {
//     if(err)
//     {
//         console.log(err)
//     }else{
//         console.log("prueba2");
//         console.log ( result);
//     }
// });
sql="SELECT COUNT(*) AS alumnos_matriculados ,teachers.first_name,teachers.last_name, title FROM students JOIN subject_teacher ON (students.group_id = subject_teacher.group_id)JOIN teachers ON (teachers.teacher_id = subject_teacher.teacher_id) JOIN subjects ON (subject_teacher.subject_id = subjects.subject_id) GROUP BY subjects.subject_id"
// sql="SELECT COUNT (*) ,teachers.first_name,teachers.last_name, title FROM students JOIN subject_teacher ON (students.group_id = subject_teacher.group_id)JOIN teachers ON (teachers.teacher_id = subject_teacher.teacher_id) JOIN subjects ON (subject_teacher.subject_id = subjects.subject_id) GROUP BY subjects.subject_id"
// sql="SELECT COUNT(*) FROM students JOIN subject_teacher ON (students.group_id =subject_teacher.group_id) UNION SELECT teachers.first_name,teachers.last_name,subjects.title FROM teachers JOIN subjects ON (subject_teacher.subject_id = subjects.subject_id)"
connection.query(sql,function(err,result)
{
    if(err)
    {
        console.log(err)
    }else{
        console.log("prueba3");
        console.log ( result);
    }
});