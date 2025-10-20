//5.Peça ao usuário 5 palavras e armazene em um array. Depois, exiba apenas as palavras com mais de 5 letras.
let palavras = [];
for (let i = 1; i < 6; i++) {
    let p = prompt('Digite uma palavra:');
    palavras.push(p);
}
for (let i = 0; i < palavras.length; i++) {
    if (palavras[i].length >= 5) {
        console.log(palavras[i]);
    }
}

