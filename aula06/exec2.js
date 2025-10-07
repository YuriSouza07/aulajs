// Utilize um loop for para exibir todo os números ímpares de 1 a 15
console.log('-=-=-=-=-=-=-=-=-=- Usando while -=-=-=-=-=-=-=-=-=-')
let i = 0;
while (i<=15){
    if (i % 2 !=0) {
        console.log (i);
    }
    i++;
}
console.log('-=-=-=-=-=-=-=-=-=- Usando for -=-=-=-=-=-=-=-=-=-')
for (let y=0; y<=15; y++){
    if (y % 2 != 0) {
        console.log (y);
    }
}

