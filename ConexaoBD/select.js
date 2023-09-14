/*const mysql = require('./code')


let sql = "select * from cursos "
let id = 2

connection.query(sql, id, function (error, results, fields){
    if(error) throw error
    if(results == 0){
        console.log("Nenhum curso encontrado")
        return
    }

    let curso = results[0]
    console.log(curso.Id + ":" + curso.Nome + ":" + curso.Tipo)
})

//Fecha conexão
connection.end()*/