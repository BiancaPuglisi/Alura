let contador = 1;
while (contador <= 10) {
    console.log(contador);
    contador++;
}

let contador = 10;
while(contador >= 0) {
    console.log(contador);
    contador--;
}

let numeroMaximo = prompt('Digite um número para contagem regressiva:');
while (numeroMaximo >= 0) {
    console.log(numeroMaximo);
    numeroMaximo--;
}

let numeroMaximo = prompt('Digite um número para contagem progressiva:');
let contador = 0;
while(contador <= numeroMaximo) {
    console.log(contador);
    contador++;
}
