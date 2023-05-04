function logon(email,senha){
    var dados = {email:"dands@gmail.com" , senha:"123"}

    return dados
}

function logando(usuario, senha){
    
    //const info = logon()
    //console.log(email)

    if(usuario == dados.email){
        window.alert("Você está logado!")
    }else{
        window.alert("Erro!")
    }


}

function logar(){

    let use = prompt("Digite seu email")
    let pas = prompt("Digite sua senha")

    logando(usuario, senha)
}