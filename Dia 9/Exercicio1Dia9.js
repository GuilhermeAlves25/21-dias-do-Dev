continuar = false
do{
let nome = prompt("Digite seu nome")
let idade = parseInt(prompt("Digite sua idade"))
let peso =  Number(prompt("Digite seu peso"))
let altura = Number(prompt("Digite sua altura"))
let profissao = prompt("Digite sua profissao")

let anoDeNascimento = 2024-idade

console.log(`Olá ${nome}, você tem ${idade} anos, é ${profissao}, tem ${altura}M, e pesa ${peso}kg`)

if (idade > 18){
    console.log("Está liberado para tomar umas geladas!")
}
else{
    console.log("Sem gelada pra você!")
}

console.log(`Idade digitada em meses: ${idade*12}`)
console.log(`Idade digitada em semanas: ${idade*48}`)
console.log(`Idade digitada em dias: ${idade*365}`)

let IMC = (peso/(altura*altura)).toFixed(1)

console.log(`IMC: ${IMC}kg/m2`)

if (IMC < 18.5){
    console.log("MAGREZA")
}
else if (IMC > 18.5 &&  IMC < 24.9){
    console.log("PESO NORMAL")
}
else if (IMC > 24.9 && IMC < 30){
    console.log("SOBREPESO")
}
else if (IMC > 30){
    console.log("OBESIDADE")
}
console.log("IDADE NOS RESPECTIVOS ANOS DE VIDA:")
contagem = 0

    for (let anosVividos = anoDeNascimento; anosVividos <= 2024; anosVividos++) {
        console.log(`${anosVividos} - ${contagem} anos de idade`);
        contagem++
    }

    let escolha = prompt("Deseja continuar o programa? sim.S/não.N")

    if(escolha === "S"){
        continuar = true;
    }
    else if(escolha === "N"){
        continuar = false;
    }

} while (continuar)