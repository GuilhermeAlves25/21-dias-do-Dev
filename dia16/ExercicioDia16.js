let contador = 0
let arraySenha = []
let arrayUsuario = []
let nomerecebido
let senharecebida

let continuar = true

while (continuar){
    let escolha = parseInt(prompt("O que deseja fazer?\n 1.Cadastrar\n 2.fazer login\n 3.excluir cadastro\n 4.Encerrar Programa"))

    switch(escolha){
        case 1: 
            Cadastro()
            break;
        case 2:
            login()
            break;
        case 3: 
            excluir()
            break;
        case 4: 
            alert("Programa encerrado")
            continuar = false
            break;

            default:
                alert("Opção invalida")
                break; nm
    }

}

function Cadastro(){
    arrayUsuario[contador] = prompt("Digite o nome que deseja cadastrar como usuario")
    arraySenha[contador] = prompt("Crie uma senha para o seu usuario")
    alert("Usuario cadastrado com sucesso!")
    contador++
    
}

function login(){
    nomerecebido = prompt("Digite o nome de usuario")
    senharecebida = prompt("Digite a senha")
    let usuarioIndex = arrayUsuario.indexOf(nomerecebido);

    if(usuarioIndex !== -1 && arraySenha[usuarioIndex] === senharecebida){
        alert("Login efetuado com sucesso!")
    }else{
        alert("Usuario e senha não cadastrados!")
    }
    
}

function excluir(){
    let usuarioAserExcluido = prompt("Digite o nome do usuario que deseja excluir")
    let indice = arrayUsuario.indexOf(usuarioAserExcluido)

    if(indice !== -1){
        arrayUsuario.splice(indice,1)
        arraySenha.splice(indice,1)
        alert("Usuario excluido com sucesso!")
       
    }else{
    alert("Usuario não encontrado")
  
    }
   
}

