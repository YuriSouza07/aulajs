/* ler dois números e a operação até que o usuario
informe a saída */
let continua = 's';
let num1, num2;
let operacao;
while (continua == 's') {
    num1 = parseInt(prompt('informe o primeiro número'));
    num2 = parseInt(prompt('informe o segundo número'));
    operacao = prompt('operacao <+ - * />');
    if (operacao == '+') {alert('Resultado: '+ (num1 + num2));}
    else if (operacao == '-') {alert('Resultado: '+ (num1 - num2));}
    else if (operacao == '*') {alert('Resultado: '+ (num1 * num2));}
    else if (operacao == '/') {alert('Resultado: '+ (num1 / num2));}
    else {alert('operação inválida');}
    continua = prompt('Deseja permanecer no programa? <s/n>');
}
alert('Programa finalizado');