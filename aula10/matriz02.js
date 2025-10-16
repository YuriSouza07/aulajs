// a) 
let notas = [ 
    [8.5, 2, 9.5], 
    [3, 6.5, 7.5], 
    [9.5, 3.5, 8.5] 
]; 
// b) 
console.log("Matriz é: "); 
console.log(notas) 
for (let i = 0; i < notas.length; i++) { 
    console.log(notas[i].join(" | ")); 
} 
// c) 
console.log("Média dos alunos") 
for (let i = 0; i < notas.length; i++){ 
    let soma = 0; 
    for (let j = 0; j < notas[i].length; j++) { 
        soma += notas[i][j] 
    } 
    let media = soma / notas[i].length; 
    console.log("Aluno: "+(i+1)+" Média: "+media.toFixed(1)); 
} 
// d) 
let maiorNota = notas[0][0]; 
for (let i=0; i<notas.length; i++){ 
    for (let j=0; j<notas[i].length; j++){ 
        if (notas[i][j]>maiorNota){ 
            maiorNota = notas[i][j]; 
        } 
    } 
} 
console.log('Maior Nota: '+maiorNota); 
// e) 
for (let i = 0; i < notas.length; i++) { 
    for (let j = 0; j < notas[i].length; j++) { 
        if (notas[i][j] < 6) { 
            notas[i][j] = 6;  
        } 
    } 
} 
console.log(notas); 