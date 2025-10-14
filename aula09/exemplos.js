function paraMinusculas(texto) {  
    return texto.toLowerCase();   
} 
console.log(paraMinusculas('AULA DE JAVASCRIPT'));
let sexo = prompt('Informe o sexo');
if (sexo.toLowerCase == 'f'){
    alert('Feminino')
} else if (sexo.toUpperCase() == 'm'){
    alert('Masculino');
} else {alert('Outro'); }
console.log(sexo);