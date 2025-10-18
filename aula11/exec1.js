 // 1. Crie uma classe chamada Moto com os atributos marca, modelo e ano. Depois, crie uma instância da classe e exiba as informações no console. 
 class Moto {
    constructor(marca, modelo, ano) {
        this.marca = marca; 
        this.modelo = modelo; 
        this.ano = ano;
    }
    enguiçar() {
        console.log('A moto ' + this.modelo + ' enguiçou na rodovia dutra')
    }
}

let minhaMoto = new Moto("Honda", "Titan 160", "2025");
minhaMoto.enguiçar();
