/*5. Identificar a Categoria de um Produto pelo Código (realizado no exemplo) 
Crie um programa que informa através do código da categoria do produto, o tipo de produto: 
1 - alimento perecível 
2 - bebida 
3 - limpeza 
4. higiene pessoal 
*/

let categoria = 4;
switch (categoria){
    case 1: 
        console.log("alimento perecível");
        break;
    case 2:
        console.log("bebida");
        break;
    case 3:
        console.log("limpeza");
        break;
    case 4:
        console.log("higiene pessoal");
        break;
    default:
        console.log('Categoria não encontarada');
        break;
}