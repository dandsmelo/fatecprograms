//lista 1 

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

function para(){
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

//Exercício 3

function enquanto(){
    let i = 0
    while(1<10){
        idade = prompt("Digite um valor")
        console.log(idade)
            if (i == n){
                console.log("Você tem esa idade:" + idade)
            } else {
                console.log("Dado não encontrado!")
            }
    }
}

//Exercício 4
/* */

//Exercício 5

function repetidor(numero){

    switch(numero){
        case 1: console.log("Gosto de anime Naruto" + numero)
        break
        case 2: console.log("One Punch é muito bom" + numero)
        break
        case 3: console.log("A série Supernatural é muito boa" + numero)
        break
        case 4: console.log("Vikings com Ragnar era o melho" + numero)
        break
        default: console.log("você assiste algo que não está na lista")
    }

}