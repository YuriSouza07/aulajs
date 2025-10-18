// 2. Crie uma classe Pessoa com os atributos nome, idade e profissão. Depois, crie uma instância e exiba os dados. 
class Pessoa {
    constructor(nome, idade, profissao) {
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
    }
    ciclista() {
        console.log('O ciclista ' + this.nome + ' se lesionou no campeonato com apenas 19 anos' )

    }
}
let minhaPessoa = new Pessoa('Eddy Merckx', '19 anos', 'Ciclista');
minhaPessoa.ciclista();