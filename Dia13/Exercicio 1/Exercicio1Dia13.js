class setup {
    Tipo
    Processador
    Video
    Armazenamento
    MemoriaRam
    SSD
    constructor(Tipo,Processador,Video,Armazenamento,MemoriaRam,SSD){
        this.Tipo = Tipo
        this.Processador = Processador
        this.Video = Video
        this.Armazenamento = Armazenamento
        this.MemoriaRam = MemoriaRam
        this.SSD = SSD
    }


ExibirInformaçoes(){
    console.log("========Informações do computador========\n\n")
    console.log(`Tipo: ${this.Tipo}`)
    console.log(`processador ${this.Processador}`)
    console.log(`Video: ${this.Video}`)
    console.log(`Armazenamento: ${this.Armazenamento} GB`)
    console.log(`MemoriaRam: ${this.MemoriaRam} GB`)
    console.log(`SSD: ${this.SSD}`)
}
}
const meuPC = new setup("Notebook", "Intel Core i3", "Integrada", 1.000, 8,false)
meuPC.ExibirInformaçoes();