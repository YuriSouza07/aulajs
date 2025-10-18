// 3. Crie uma classe Produto com os atributos nome, preço e quantidade. Depois, crie um método que exiba os dados do produto.
class Produto {
    constructor(nome, preco, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }
    dados() {
        console.log('O ' + this.nome + ' custa ' + this.preco + ' reais com apenas ' + this.quantidade)
    }
}
let meuProduto = new Produto('Nescau ball', '26,59', 'uma unidade')
meuProduto.dados();

