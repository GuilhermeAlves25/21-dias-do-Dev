let fome = prompt("Você esta com fome?")
let dinheiro = prompt("Você tem dinheiro?")
let restaurante = prompt("O restaurante esta aberto?")

if (fome === "não" || dinheiro === "não"){
    console.log("Hoje a janta sera em casa!")
}
else if(fome === "sim" && dinheiro === "sim" && restaurante === "não"){
    console.log("Peça um delivery")
}
else if(fome === "sim" && dinheiro === "sim" && restaurante === "sim"){
    console.log("Hoje o jantar vai ser no seu restaurante favorito")
}