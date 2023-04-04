function para(){
    for(let i=0;i<10;i++){
        if(i == 4){
            console.log("Igual a: " + i)
            alert("Igual a: " + i)
            break
        } else {
            console.log("Número diferente: " + i)
            alert("Número diferente: " + i)
        }
    }
}

function enquanto(){
    let i = 0
    while(i<10){
        i++
        if(i == 4){
            console.log("Igual a: " + i)
            alert("Igual a: " + i)
            break
        } else {
            console.log("Número diferente: " + i)
            alert("Número diferente: " + i)
        }
    }
}

function facaenq(){
    let i = 0
    do {
        i++
        if(i == 4){
            console.log("Igual a: " + i)
            alert("Igual a: " + i)
            break
        } else {
            console.log("Número diferente: " + i)
            alert("Número diferente: " + i)
        }
    } while(i<10)
}

function repetidor(numero){

    switch(numero){
        case 1: console.log("Você digitou: " + numero)
        break
        case 2: console.log("Você digitou: " + numero)
        break
        case 3: console.log("Você digitou: " + numero)
        break
        case 4: console.log("Você digitou: " + numero)
        break
        case 5: console.log("Você digitou: " + numero)
        break
        default: console.log("Esse número é diferente de 1 até 5")
    }

}