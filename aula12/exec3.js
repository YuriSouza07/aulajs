//3.Crie uma função que recebe um array de nomes e retorna um novo array com os nomes em ordem reversa. 
function inverterNomes(nomes) {
    let novo = [];
    for(let i = nomes.length -1 ; i >=0; i--){
        novo.push(nomes[i]);
    } 
    console.log(novo);
}

let lista = ['Kleber', 'Vinícius', 'Pedro']
inverterNomes(lista);