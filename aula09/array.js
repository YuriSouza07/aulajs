let frutas = []; 
let nome;
for (let i = 0; i < 5; i++){
    nome = prompt("Informe o nome da fruta: ")
     frutas.push(nome);
} 

//frutas.pop();

console.log(frutas);
let copia = [...frutas]; // copiar array
copia.sort(); // ordenar o array
console.log(copia);
console.log('O tamanho do array é: ' + frutas.length);
for (let i = 0; i < frutas.length; i++){
    console.log(frutas[i]);
}

