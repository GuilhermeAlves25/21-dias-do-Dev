const alunos = []
const notas = []
let continuar = true
let contador = 0

while(continuar){
    alunos[contador] = prompt(`Digite o nome do ${contador + 1} aluno`)
    notas[contador] = prompt(`Digite a nota de ${alunos[contador]}`)
    contador++
    let escolha = prompt("Deseja cadastrar mais um aluno? sim/não")
    if(escolha === "não"){
        continuar = false
    }
}
for (let i = 0; i < alunos.length; i++){
    console.log(`${alunos[i]}, nota: ${notas[i]}`)
}