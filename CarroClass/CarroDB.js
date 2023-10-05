const mysql = require('mysql2')

//Decalre classe carroDB
class CarroDB{
    //Função conectar
    static connect(){
        //Cria conexão
        let connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'fatecdands'
        })
        connection.connect()
    }

    //retorna lista de carros
    static getCarros(callback){
        let connection = CarroDB.connect()
        //cria uma consulta
        let sql = 'select * from carro'
        let query = connection.query(sql, function(error, results, fields){
            if (error) throw error
            //retorna dados pela função callback
            callback(results)
        })
        console.log(query.sql)
        connection.end()
    }

    //retorna lista pelo tipo do carro
    static getCarrosByType(tipo, callback){
        let connection = CarroDB.connect()
        //cria consulta
        let sql = 'select id, nome, tipo from carro where tipo = ' + tipo + ' '
        let query = connection.query(sql, function(error, results, fields){
            if (error) throw new Error()
            //retorna os dados pela função de callback
            callback(results)
        })
        console.log(query.sql)
        connection.end()
    }

    //retorna lista de carros pelo id
    static getCarrosById(id, callback){
        let connection = CarroDB.connect();
        //cria consulta
        let sql = 'select * from carro where id = ?'
        let query = connection.query(sql, id, function(error, results, fields){
            if(error) throw error
            if(results.lenght == 0) {
                console.log("Nenhum carro encontrado")
                return
            }
        })
        console.log(query.sql)
        connection.end()
    }

    //salva um carro no bd
    static save(carro, callback){
        let connection = CarroDB.connect()
        //insere carro
        let sql = 'inserto into carro set ?'
        let query = connection.query(sql, carro, function(error, results, fields){
            if(error) throw error
            //atualiza o objeto carro do parâmetro com id inserido
            carro.id = results.id
            //retorna pelo callback
            callback(carro)
        })
        console.log(query.sql)
        connection.end()
    }

    //Atualiza o registro no banco de dados
    static update(carro, callback){
        let connection = CarroDB.connect()
        //sql para atualizar 
        let sql = 'update carro set where id = ?'
        //id do carro para atualizar
        let id = carro.id
        let query = connection.query(sql, [carro,id], function(error, results, fields){
            if(error) throw error
            callback(carro)
        })
        console.log(query.sql)
        connection.end()
    }

    //Apagar do banco
    static delete(carro, callback){
        let connection = CarroDB.connect()
        //sql para deletar do banco
        let sql = 'delete from carro where id = ?'
        let id = carro.id
        let query = connection.query(sql, id, function(error, results, fields){
            if (error) throw error
            callback(carro)
        })
        console.log(query.sql)
        connection.end()
    }

    //Outra maneira de apagar
    static deleteById(id, callback){
        let connection = CarroDB.connect()
        //sql para apagar
        let sql = 'delete from carro where id = ?'
        let query = connection.query(sql, id, function(error, results, fields){
            if(error) throw error
            callback(results.affectedRows)
        })
        console.log(query.sql)
        connection.end()
    }
}
//export modulo
module.exports = CarroDB