
let salario
let nome

function perguntar (){
    nome = prompt("Digite seu nome:")
    salario = parseFloat(prompt("Digite seu salario:"))
    calcularAumentoSalario(nome,salario)
}

function calcularAumentoSalario(nome,salario){
    let aumento = 0

    if(salario < 1500){
        aumento = 0.20
    }
    else if (salario > 1500 &&  salario < 2000){
        aumento = 0.15
    }
    else if (salario > 2000 && salario < 3000 ){
        aumento = 0.10
    }
    else if (salario > 3000){
        aumento = 0.05
    }

    let novoSalario = salario + (salario*aumento)
    
    console.log(`Nome do colaborador: ${nome}`)
    console.log(`Salario do colaborador: ${salario}`)
    console.log(`Percentual de aumento: ${aumento}`)
    console.log(`Valor do salario reajustado: ${novoSalario}`)

    continuar()

}
function continuar (){
    let resposta = prompt("Deseja continuar?")

    if (resposta === "s"){
        perguntar()
    }
    else{
        console.log("Programa encerrado")
    }
}
perguntar()