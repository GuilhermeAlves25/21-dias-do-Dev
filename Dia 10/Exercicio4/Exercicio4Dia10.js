let numero = parseInt(prompt("Digite um numero:"))
let fibonnaci = []
fibonnaci[0] = numero - 1
fibonnaci[1] = numero


for(i=2;i<10;i++){
    fibonnaci[i] = fibonnaci[i-1] + fibonnaci[i - 2]
}
console.log(`Fibonacci: ${fibonnaci}`)