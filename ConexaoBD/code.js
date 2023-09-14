const mysql = require('mysql')

const connection = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "",
        database: "Fatec"
    }
)

connection.connect()

module.exports = connection
/*
//Select
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



//Insert
let sql = 'insert into cursos set ?'
let dados = {Nome: "Info", Tipo: "Exatas" }
connection.query(sql, dados, function(error,results,fields){
    if(error) throw error
    console.log("Curso salvo no BD, results.insertID")
}
)

//Update
let sql = 'update cursos set ? where id = ?'
let dados = {Id:2, Nome: "Bio", Tipo: "humanas"}
let id = dados.Id

connection.query(sql, [dados,id], function(error,results,fields){
    if(error)throw error;
    console.log("Dados atualizados com sucesso!")
}
)


//Delete
let sql = 'delete from cursos where id = ?'
let id = 2 
connection.query(sql, id, function(error,results,fields){
    if(error) throw error
    console.log("Apagado com sucesso!")
}
)

//Fecha conexão
connection.end()*/