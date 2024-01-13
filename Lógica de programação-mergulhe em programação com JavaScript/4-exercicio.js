console.log('Bem-vindo!');

let nome = 'Bianca';
console.log(`Olá, ${nome}!`);

console.log(`Olá, ${nome}`);

let linguagemPreferida = prompt('Qual a linguagem de programação que você mais gosta?');
console.log(linguagemPreferida);

let valor1 = 3;
let valor2 = 9;
let resultados = valor1 + valor2;
console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultados}.`)

let resultado = valor1 - valor2;
console.log(`A subtração de ${valor1} e ${valor2} é igual a ${resultado}.`)

let idade = prompt('Qual a sua idade?');
if (idade >= 18) {
    console.log('Maior de idade');
} else {
    console.log('Menor de idade')
}

let numero = prompt('Digite um número:');
if (numero > 0) {
    console.log('Número positivo');
} else if (numero < 0) {
    console.log('Numero negativo');
} else {
    console.log('O número é zero');
}

let contador = 1;
while (contador <= 10){
console.log(contador);
contador++;
}

let nota = 9;
if (nota >= 7) {
    console.log('Aprovado');
} else {
    console.log('Reprovado');
}

let numeroAleatorio = Math.random();
console.log(numeroAleatorio);

let numeros = parseInt(Math.random() * 10 + 1);
console.log(numeros);

let numeral = parseInt(Math.random() * 1000 + 1);
console.log(numeral);




