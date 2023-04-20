function teste(){
    var dados = [
        {id: 1, login: "Will", senha: "1315"},
        {id: 2, login: "Black", senha: "1111"},
        {id: 3, login: "Sandra", senha: "2020"}
    ]
    
    return dados

    //console.log(dados[2].id + " " + dados[2].login + " " + dados[2].senha)
    //window.alert(dados[2].id + " " + dados[2].login + " " + dados[2].senha)
}

function logon(usuario, senha){

    const conj = teste()

    //console.log(conj[0].id)
    //alert(conj[0].id)

    if(usuario == conj[0].login){
        window.alert("Você está logado!")
    } else{
        window.alert("Erro!")
    }
}

function logar(){

    let use = prompt("Qual é seu usuário? ")
    let pas = prompt("Qual é sua senha? ")

    logon(user, password)
}
