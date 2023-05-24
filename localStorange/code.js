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
            window.location.href= "pag.html"
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

function adicionar() {
    var ClienteArray = JSON.parse(localStorage.getItem("tds"))
    let login = document.querySelector("#login").value
    let senha = document.querySelector("#senha").value
    let user = { id: Date.now(), nome: login, senha: senha }
    ClienteArray.push(user)
    localStorage.setItem("tds", JSON.stringify(ClienteArray))
    alert("Registro adicionado.")
  }

  function atualizar() {
    var dados = JSON.parse(localStorage.getItem("tds"))
    localStorage.removeItem("tds")
    let id = document.querySelector("#id").value
    let login = document.querySelector("#login").value
    let senha = document.querySelector("#senha").value  
  
    for (let i = 0; dados.length > i; i++) {
    if (id == dados[i].id){
      let user = { id: id, nome: login, senha: senha }
      dados[i] = user
      localStorage.setItem("tds", JSON.stringify(dados))
      alert("Atualizado!")
      break
    } 
   }
  }