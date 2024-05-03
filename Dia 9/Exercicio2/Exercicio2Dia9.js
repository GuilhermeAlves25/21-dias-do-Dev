let repetir = false 


do {
    let nome = prompt("Digite seu nome")
    let idade = Number(prompt("Digite sua idade"))
    let salario = parseFloat(prompt("Digite seu salario"))

    let confirmar = prompt(`Dados inseridos:\n Nome: ${nome} \n Idade: ${idade}\n Salario: ${salario}\n\n Confirme seus dados\n\n Dados corretos digite: Continuar\n Dados incorretos digite: Corrigir.`)

    if(confirmar === "Continuar"){
        ano = 2024
        let contador
        let porcentagem = 0.015
        let aumento = salario*porcentagem
        

        for(contador = 1; contador < 11 ; contador++){
            
            let aumento = salario*porcentagem
            salario = salario+aumento
            console.log(`${ano} - ${salario.toFixed(3)}`)
            porcentagem = porcentagem*2
            ano++
        }
         repetir = false
    }
   
    else if(confirmar === "Corrigir"){
    repetir = true
    }
}   while(repetir)