let numero1 = Number(prompt("Digite o primeiro numero"))
let numero2 = Number(prompt("Digite o seguno numero"))
let operacao = Number(prompt("Digite a operação que deseja realizar 1.soma 2.divisão 3.multiplicação 4.subtração"))
switch(operacao){
    case 1:
        console.log(numero1+numero2)
        break;
    case 2:
        if(numero1<numero2){
        console.log(numero2/numero1)}
        else {
        console.log(numero1/numero2)
        }
        break;
   case 3:
        console.log(numero1*numero2)
        break;
    case 4:
        console.log(numero1-numero2)
    }