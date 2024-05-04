const vetor = []
const indice = []
let contador=0

let achar = parseInt(prompt("Digite o numero que deseja encontrar"))

for(let i = 0; i < 10; i++){
    let elemento = parseInt(prompt(`Digite o elemento ${i+1}`))
    vetor[i] = elemento
}
for(let i = 0; i < 10; i++){
    if(vetor[i] === achar){
        indice[contador] = i
        contador++
    }
}
console.log(`O ${achar} foi encontrado na posição: ${indice}`)