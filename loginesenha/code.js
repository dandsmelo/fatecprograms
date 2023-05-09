function vets(){
    var dados = [
        {id: 1, user:"Dandara" , senha:"123"},
        {id: 2, user:"Lorena" , senha:"222"},
        {id: 3, user:"Hannah" , senha:"321"}
    ]

    return dados
}

function logando(login, senha){

    let dao= vets() 
    for(let i=0;dao.length > i;i++){
        if (login == dao[i].user && senha){
            alert("Logado!")
            window.location.href= "dados.html"
            break
        } else { 
            alert("Não cadastrado")
        } 
    } 
}

function logar(){

    let login = prompt("Digite seu email")
    let senha = prompt("Digite sua senha")

    logando(login, senha)
}
