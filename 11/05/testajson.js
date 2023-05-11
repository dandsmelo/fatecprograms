function bancoDados(){

    let dados = {
        "registros": [
           {
            "nome":"root",
            "idade":"30",
            "email":"root@ig.com",
            "senha":"1234"
           },
           {
            "nome":"dands",
            "idade":"17",
            "email":"dands@gmail.com",
            "senha":"linda"
           }
        ]
    }
    return dados
}

function login(){
    //Pega os valores do Json
    let dados = bancoDados()

    let nome = document.getElementById("nome").value
    let senha = document.getElementById("senha").value

    if(nome == dados.registros[0].nome && senha == dados.registros[0].senha){
        alert("Usuário encontrado!")
    } else{
        alert("Não encontrado")
    }
}