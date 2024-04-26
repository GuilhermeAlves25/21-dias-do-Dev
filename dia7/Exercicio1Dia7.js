let masculino = 0
let totalmasculinos = 0
let totalalunos = 0
let femininoscom7 = 0
let maiornotaM = 0
let contagem = 1
let sexo
let mediageral = 0

while (contagem <= 10){
    sexo = prompt("Digite o sexo do aluno m/f")
    nota = Number(prompt("Digite a nota do " + contagem + "º aluno"))

    if (sexo == "m"){
        if(nota>maiornotaM){
            maiornotaM = nota
            
        }
        totalmasculinos++
    }
    if (sexo == "f" && nota > 7){
        femininoscom7++

    }
    mediageral+=nota
    contagem++
}
mediageral = mediageral / 10

console.log("A media geral dos alunos foi" + mediageral)
console.log("Quantidade de alunos do sexo masculino que enviaram notas" + totalmasculinos)
console.log("Quantidade de alunos do sexo feminino que tiraram nota superior a 7" + femininoscom7)
console.log("Maior nota entre alunos do sexo masculino" + maiornotaM)