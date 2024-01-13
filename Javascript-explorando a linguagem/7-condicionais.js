console.log(`Trabalhando com condicionais`);


const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    //`Curitiba`
);

const idadeComprador = 15;
const estaAcompanhada = false;
const temPassagemComprada = true;

console.log('Destinos possíveis: ');
console.log(listaDeDestinos);

if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log('Boa Viagem!')
    listaDeDestinos.splice(1,1); //apaga São Paulo, contagem começa em 0
} else {
    console.log('Não é maior de idade e não posso vender')
}
console.log('Embarque: \n\n')
if (idadeComprador >= 18 && temPassagemComprada){
    console.log('Boa Viagem!!');
}else{
    console.log('Você não pode embarcar')
}

console.log(listaDeDestinos);

