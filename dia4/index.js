let nome = prompt("Digite seu nome")
let idade = Number (prompt("Digite sua idade"))
let carteira = prompt("Você possui carteira de motorista?")
let carro = prompt("Você possui carro?")

if (idade < 18 && carteira === "não"){
    console.log(nome + ",você não pode dirigir!")
}
else if(idade >= 18 && carteira === "sim" && carro === "não"){
    console.log(nome + ", você pode dirigir mas não possui carro")
}
else if(idade >= 18 && carteira === "sim" && carro === "sim"){
    console.log(nome + ", você será o motorista!")
}