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
    for(let i = 0;i++){
        if (i == idade){
            console.log("Você tem essa idade: " + idade)
        } else {
            console.log("Dado não encontrado!")
        }
    }
}

//Exercício 3

function enquanto(){
    let i = 0
    idade = prompt("Digite um valor")
    console.log(idade)
    while(i == idade){
        alert("Você tem essa idade: " + idade)
    }
        alert("Dado não encontrado!")
}

//Exercício 4
/* */

//Exercício 5

function caso(){
    i = prompt("Digite um valor")
    console.log(i)
    switch(i){
        case 1: alert("Gosto de anime Naruto" + i)
        break
        case 2: console.log("One Punch é muito bom" + i)
        break
        case 3: console.log("A série Supernatural é muito boa" + i)
        break
        case 4: console.log("Vikings com Ragnar era o melhor" + i)
        break
        default: console.log("Você assiste algo que não está na lista")
    }

}

//Exercício 6

function show(){
    alert("Olá JavaScript")
}

//Exercício 7
function overide(){

    a1 = prompt("Digite o valor de a1")
    a2 = prompt("Digite o valor de a2")
    
    alert("A divisão é: " + div(a1/a2))
    alert("A multiplicação é: " + mul(a1*a2))   
    alert("A soma é: " + soma(a1+a2))
    alert("A subtração é: " + sub(a1-a2))
    return div
}
/*function soma(a1,a2){
    const total = a1 + a2
    alert("A soma é: " + total)
    return total
}

function sub(a1,a2){
    const total = a1 - a2 
    console.log("A subtração é: " + sub)
    return total
}

function mul(a1,a2){
    const total = a1 * a2 
    return total
}

function div(a1,a2){
    const total = a1 / a2 
    return total
}*/
