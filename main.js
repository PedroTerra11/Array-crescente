let numeros = [3, 1, 3, 2, 4, 4, 4, 4, 5, 2, 1, 6];
let numerosO = [];

for (let i = 0; i < numeros.length; i++) {
  for (let j = i + 1; j < numeros.length; j++) {
    if (numeros[i] > numeros[j]) {
      numerosO = numeros[i];
      numeros[i] = numeros[j];
      numeros[j] = numerosO;
    } else if (numeros[i] == numeros[j]) {
      numeros.splice(j, 1);
      j--;
    }
  }
}

console.log(numeros);
