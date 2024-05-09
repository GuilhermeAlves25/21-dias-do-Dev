const nome = []
const senha = []
let contador = 0
let continuar = true
let nomeD
let senhaD
let valido

while(continuar){
let escolha = prompt("Qual operação deseja realizar?\n 1.Cadastrar usuario \n 2.Fazer login\n 3.Excluir cadastro\n 4.Encerrar programa")

switch(escolha){

    case "1":
        nome[contador] = prompt("Digite o nome do usuario")
        senha[contador] = prompt(`Digite a senha do usuario ${nome[contador]}`)
        console.log("Cadastro realizado com sucesso")
        contador++

        break;
    
    case "2":
        nomeD = prompt("Digite o nome do usuario")
        senhaD = prompt("Digite a senha")
        valido = false
        for(let i = 0; i < nome.length; i++)
            if(nomeD === nome[i] && senhaD === senha[i]){
               valido = true 
               break;
            }
                if(valido){
                    alert("Login efetuado com sucesso!")
                } else{
                    alert("Login invalido")
                }
                    break;

    case "3":
        nomeD = prompt("Digite o nome do usuario")
        senhaD = prompt("Digite a senha")
        valido = false
        for(let i = 0; i < nome.length; i++)
            if(nomeD === nome[i] && senhaD === senha[i]){
                valido = true
                nome.splice(i,1)
                senha.splice(i,1)
                contador--
                
                break;
                
            }
            if(valido){
                alert("Usuario e senha excluidos com sucesso")
            }else{
                alert("Usuario e senha não cadastrados")
            }
        
                    break;

    case "4":
        continuar = false

                    break;




}
}