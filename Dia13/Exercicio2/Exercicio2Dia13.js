class Carro {
    Nome
    Potencia
    VelocidadeMaxima
    Aceleracao

    constructor(Nome,Potencia,VelocidadeMaxima,Aceleracao){
        this.Nome = Nome
        this.Potencia = Potencia
        this.VelocidadeMaxima = VelocidadeMaxima
        this.Aceleracao = Aceleracao
    }
    
    calcularTempomedio(distancia){

        let resultado = distancia / (this.VelocidadeMaxima/this.Aceleracao)
        return resultado
        
    }
    }
    class Corrida {
        Nome
        Tipo 
        Distancia
        Participantes
        Vencedor
    
        constructor(Nome,Tipo,Distancia,Participantes,Vencedor){
            this.Nome = Nome
            this.Tipo = Tipo
            this.Distancia = Distancia
            this.Participantes = Participantes
            this.Vencedor = Vencedor
        }

        DefinirVencedor(){
            let menorTempo = this.Participantes[0].calcularTempomedio(this.Distancia)
            let Vencedor = this.Participantes[0]

            for (let index = 1; index < this.Participantes.leght; index++){
                let tempo = this.Participantes[index].calcularTempomedio(this.distancia)
                if(tempo < menorTempo){
                    menorTempo = tempo
                    Vencedorencedor = this.Participantes[index]
                }
            }
            return this.Vencedor = Vencedor
        }
        ExibirVencedor(){
            alert(`O vencedor é: ${this.Vencedor.Nome}`)
        }
    }