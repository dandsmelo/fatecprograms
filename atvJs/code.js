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
    for(let i = 0;i<100;i++){
        idade = prompt("Digite um valor")
        console.log(idade)
        if (i == idade){
            console.log("Você tem essa idade: " + idade)
        } else {
            console.log("Dado não encontrado!")
        }
    }
}


/*function para(){
    for(let i = 0;i++;){
        idade = prompt("Digite um valor")
        console.log(idade)
        if (i == idade){
            console.log("Você tem essa idade: " + idade)
        } else {
            console.log("Dado não encontrado!")
        }
    }
}*/

//Exercício 3

function enquanto(){
    let i = 0
    idade = prompt("Digite um valor")
    console.log(idade)
    while(i == idade){
        i++
        console.log("Você tem essa idade: " + idade)
    }
        console.log("Dado não encontrado!")
}

//Exercício 4
/*A diferença é que a função "While" só executa o loop enquanto a condição for verdadeira, já o "do While" executa o loop primeiro e depois verifica se a condição é verdadeira ou não.*/

//Exercício 5
    function caso(){
        n = prompt("Digite um valor: ")
        console.log(n)
        switch(n){
            case 1: console.log("Gosto de anime Naruto")
            break
            case 2: console.log("One Punch é muito bom")
            break
            case 3: console.log("A série Supernatural é muito boa")
            break
            case 4: console.log("Vikings com Ragnar era o melhor")
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
