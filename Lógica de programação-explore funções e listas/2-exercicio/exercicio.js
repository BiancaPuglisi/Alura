function exibirOlaMundo (){
    console.log('Olá Mundo');
}

exibirOlaMundo();

function exibirNome (nome){
    console.log(`Olá, ${nome}`);
}

exibirNome();

function numeroDobro (numero){
    return numero * 2;
}

let resultadoDobro = numeroDobro();
console.log(resultadoDobro);


function exibirMedia (numero1, numero2, numero3){
     return numero1 + numero2 + numero3 / 3;
}

let media = exibirMedia();
console.log(media);

function numeroMaior (numero1, numero2){
    return numero1 > numero2 ? numero1 : numero2;
}

let maiorNumero = numeroMaior();
console.log(maiorNumero);

function quadrado (numero){
    return numero * numero;
}

let resultado = quadrado();
console.log(resultado);

