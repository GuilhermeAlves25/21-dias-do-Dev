
let nome = prompt("Digite seu nome");
let idade = parseInt(prompt("insira sua idade"));
let peso = Number(prompt("Digite seu peso"));
let altura = Number(prompt("Digite sua altura"));

console.log("Olá " + nome + ", você tem " + idade + " anos, nasceu em " + (2024-idade) + " , tem " + altura + " de altura, pesa " + peso + " seu IMC " + (peso/(altura*altura)))