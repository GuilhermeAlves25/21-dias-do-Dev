let opcao = Number(prompt("Você deseja abastecer com 1.gasolina, com 2.alcool ou 3.calibrar os pneus?"))

switch(opcao){
    case 1:
        let quantidadeGA = Number(prompt("Digite o valor que deseja abastecer. Valor da gasolina = 5,00R$"))
        console.log("Quantidade de litros abastecidos:"+ quantidadeGA/5)
        break;
   case 2:
        let quantidadeAl = Number(prompt("Digite o valor que deseja abastecer. Valor do alcool = 3,00R$ "))
        console.log("Quantidade de litros de alcool abastecidos:"+ quantidadeAl/5)
        break;
    case 3:
        console.log("Pneus calibrados com sucesso!")
        break;
    }
