let array = [];
let arrayInvertido = [];
let quantidade = parseInt(prompt("Digite a quantidade de números que deseja digitar"));

for(let i = 0; i < quantidade; i++){
    array[i] = parseInt(prompt(`Digite o ${i+1}`));
}

console.log(`Array original: ${array}`);

arrayInvertido.length=quantidade

for(let i = quantidade - 1, j=0; i >= 0; i--,j++){
    arrayInvertido[j] = (array[i]);
}

console.log(`Array invertido: ${arrayInvertido}`);