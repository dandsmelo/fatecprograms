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

    for(let i=1;dados.registros.length>i; i++){
        if(nome == dados.registros[i].nome && senha == dados.registros[i].senha){
            //alert("Usuário encontrado!")
            let url = "pog.html"
            let win = window.open(url, '_blank')
            win.open()
            break
        }else{
            //alert("Não encontrado")
            let url = "cadastro.html"
            let win = window.open(url, '_blank')
            win.open()
            break
        }
    }
}