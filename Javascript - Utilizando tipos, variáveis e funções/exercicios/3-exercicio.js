const saldo = 1000;
const deposito = 200;
const saque = 300;

const operacao = saldo - saque;

console.log('Saldo:', saldo); 
console.log('Saldo após saque:', operacao);

const numero = 50;
const calculo = numero % 2 === 0 ? 'Par' : 'Ímpar';
console.log(calculo);

const logado = true;
const admin = false;
const resultado = logado && admin;
console.log('Admin logado', resultado);

const condicao1 = true;
const condicao2 = false;
const consequencia = condicao1 || condicao2;

console.log('Resultado do operador OR:', consequencia);

const idadeMinima = 18;
const idadeUsuario = 21;

if (idadeUsuario >= idadeMinima) {
    console.log('Você pode comprar o ingresso. Bom show!');
} else {
    console.log('Você não tem idade suficiente para comprar o ingresso :(');
}