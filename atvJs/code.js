//lista 1 

//Exercício 1

function mostraridade(){
    mostra = prompt("Digite sua idade")
    console.log(mostra)
    if (mostra<=18){
        console.log("Você é adolescente")
    } else if (mostra>18 && mostra<=65){
        console.log("Você é jovem")
    } else {
        console.log("Você é idoso")
    }
}

    
//Exercício 2

function para(){
    idade = prompt("Digite um valor")
    console.log(idade)
    for(let i = 4;i++;){
        if (i == idade){
            alert("Você tem essa idade: " + idade)
        } else {
            alert("Dado não encontrado!")
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
/*A diferença é que a função "While" só executa o loop enquanto a condição for verdadeira, já o "do While" executa o loop primeiro e depois verifica se a condição é verdadeira ou não.*/

//Exercício 5
    function caso(){
        n = prompt("Digite um valor: ")
        console.log(n)
        switch(n){
            case 1: alert("Gosto de anime Naruto")
            break
            case 2: alert("One Punch é muito bom")
            break
            case 3: alert("A série Supernatural é muito boa")
            break
            case 4: alert("Vikings com Ragnar era o melhor")
            break
            default: alert("Você assiste algo que não está na lista")
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
    
    function soma(a1,a2){
        const total = a1 + a2
        return total
    }
    
    function sub(a1,a2){
        const total = a1 - a2 
        return total
    }
    
    function mul(a1,a2){
        const total = a1 * a2 
        return total
    }
    
    function div(a1,a2){
        const total = a1 / a2 
        return total
    }

    console.log("A soma é: " + soma(a1,a2))
    console.log("A subtração é: " + sub(a1,a2))
    console.log("A multiplicação é: " + mul(a1,a2))   
    console.log("A divisão é: " + div(a1,a2))
}
