//Revisão
//Exercício 1

const mostra = mostrar()
if (mostra<=18){
    console.log("Você é adolescente" + mostra)
} else if (mostra>18 && mostra<=65){
    console.log("Você é jovem" + mostra)
} else {
    console.log("Você é idoso" + mostra)
}
    
//Exercício 2

function for(){
    idade = prompt("Digite um valor")
    console.log(idade)
    for(let i = 0;i<=n;i++){
        if (i == n){
            console.log("Você tem esa idade:" + idade)
        } else {
            console.log("Dado não encontrado!")
        }
    }
}