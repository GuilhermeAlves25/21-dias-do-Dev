array = []
arrayinvertido = []

for(let i = 0; i < 5; i++){
    array[i] = parseInt(prompt(`Digite o ${i+1} numero`))
}
console.log(`Array original ${array}`)

let contador = 4
for(let i = 0; i < 5; i++){
    arrayinvertido[i] = array[contador]
    contador--
}

console.log(`Array invertido ${arrayinvertido}`)