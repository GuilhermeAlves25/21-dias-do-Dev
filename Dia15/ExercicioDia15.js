let arrayA = []
let arrayB = []
let iguais = []

function Preencher(){
    for(let i = 0; i < 3; i++){
        arrayA[i] = prompt(`Digite o ${i+1}º numero do Array A`)
    }
    for(let i = 0; i < 3; i++){
        arrayB[i] = prompt(`Digite o ${i+1}º numero do Array B`)
    }
    Comparação(arrayA,arrayB)
}
function Comparação(arrayA,arrayB){
    for(let i = 0; i < 3; i++){
        if(arrayA[i] === arrayB[i]){
            iguais.push(arrayA[i])
        }
    }
    console.log(iguais)
}
Preencher()