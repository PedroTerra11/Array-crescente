let numeros = [5, 12, 2, 5, 14, 23, 2, 12]
let numerosO = []

for(let i = 0; i < numeros.length; i++){    
    for(let j = i+1; j < numeros.length; j++){
        if(numeros[i] > numeros[j]){
            numerosO = numeros[i] 
            numeros[i] = numeros[j]
            numeros[j] = numerosO
        }
    }    
}

for(let i = 0; i < numeros.length; i++){
    if(numeros[i] == numeros[i]){
        numeros.splice(i, 1)
    }
}


console.log(numeros)
