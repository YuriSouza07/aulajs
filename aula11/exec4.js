// 4. Crie uma classe Filme com os atributos título, diretor e ano de lançamento. Depois, crie um método que exiba as informações do filme. 
class Filme {
    constructor(titulo, diretor, lançamento) {
        this.titulo = titulo;
        this.diretor = diretor;
        this.lançamento = lançamento;
    }
    fantasia() {
        console.log('O filme ' + this.titulo + ' foi dirigido por ' + this.diretor + ' no ano de ' + this.lançamento)
    }
}
let meuFilme = new Filme('Harry Poter e a Pedra Filosofal', 'Chris Columbus', '2001')
meuFilme.fantasia();
