//Importa a classe carroDB
const CarroDB = require('.CarroDB')

CarroDB.getCarros(function(carro){
    //imprime os carros
    for(let i = 0; carro.lenght > i; i++){
        console.log(carro[i].id + "" + carro[i].nome)
    }
})