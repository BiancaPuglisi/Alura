const frase = "Can't rain all the time";
console.log(frase.length);
console.log(frase.toUpperCase());

const valorNull = null;
let valorUndefined;
console.log('Valor de valorNull:', valorNull);
console.log('Valor de valorUndefined:', valorUndefined);

const numero = 9;
const string = 'Bianca';
const boolean = true;
console.log(`${numero} ${string} ${boolean}`);

const outroNumero = 3;
const outraString = '9';
const numeroConvertido = String (outroNumero);
const stringConvertida = Number (outraString);

console.log('Tipo de dado após conversão de número para string: ', typeof numeroConvertido);
console.log('Tipo de dado após conversão de string para número: ', typeof textoConvertido);

const texto = "The skies won't fall forever";
const maiusculas = texto.toUpperCase();
const minusculas = texto.toLowerCase();
const parteDaString = texto.slice(0, 10);

console.log('Texto em maiúsculas:', maiusculas);
console.log('Texto em minúsculas:', minusculas);
console.log('Parte da string:', parteDaString);