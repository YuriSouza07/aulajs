//6. Crie uma classe Produto com os atributos: 
//nome (Nome do produto) 
//preco (Preço do produto) 
//estoque (Quantidade disponível em estoque) 
//Adicione os seguintes métodos: 
//vender(quantidade): Reduz a quantidade do estoque, se houver disponibilidade. 
//reporEstoque(quantidade): Aumenta a quantidade do estoque. 
//exibirInfo(): Exibe as informações do produto. 
class Produto { 

    constructor(nome, preco, qtd) { 

        this.nome = nome; 

        this.preco = preco; 

        this.qtd = qtd; 

    } 

    venderProduto(qtd){ 

        if (qtd>this.qtd){ 

            console.log('Quantidade insuficiente'); 

        } else { this.qtd -= qtd } 

    } 

    reporQtd(qtd){ 

        this.qtd += qtd 

    } 

    exibirInfo(){ 

        console.log(this.nome + ' ' + this.preco + ' ' + this.qtd) 

    } 

} 

let produto1 = new Produto('Margarina', 10.12, 100); 

produto1.venderProduto(20); 

produto1.reporQtd(200); 

produto1.exibirInfo(); 

 

 