const modelo = []
const ano = []
const valor = []
let continuar = true
let contador = 0


while(continuar){

    modelo[contador] = prompt("Digite o modelo do carro")
    ano[contador] = prompt(`Digite o ano do ${modelo[contador]}`)
    valor[contador] = prompt(`Digite o valor do ${modelo[contador]}`)
    contador++

    let escolha = prompt("Deseja cadastrar novos carros? sim/não")

    if(escolha === "não"){
    continuar = false
    console.log("Veiculos cadastrados:\n\n")
    for(let i = 0; i < modelo.length; i++){
        console.log(`${modelo[i]} - ${ano[i]} - ${valor[i]}`)
    }
    }

}

