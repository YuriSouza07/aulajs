//16.Crie uma classe Livro com os atributos titulo, autor e ano. Crie 2 objetos e exiba suas informações.
class Livro { 
    constructor(titulo, autor, ano) { 
        this.titulo = titulo; 
        this.autor = autor; 
        this.ano = ano; 
    } 
    exibir(){ 
        console.log(this.titulo+ ' - '+this.autor+' - '+ this.ano); 
    } 
} 
let livro1 = new Livro('Principe Caspiam','Lewis', '1940'); 
let livro2 = new Livro('Dom Casmurro', 'Assis', '1900'); 
livro1.exibir(); 
livro2.exibir(); 
 