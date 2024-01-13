console.log(`Trabalhando com listas`);
// const salvador = ;
// const saoPaulo = ;
// const rioDeJaneiro = ;

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    //`Curitiba`
);

listaDeDestinos.push(`Curitiba`); //adicionando na Array

console.log('Destinos possíveis: ');
//console.log(salvador, saoPaulo, rioDeJaneiro);
console.log(listaDeDestinos);

listaDeDestinos.splice(1,1); //apaga São Paulo, contagem começa em 0
console.log(listaDeDestinos);
console.log(listaDeDestinos[1]); //vai imprimir Rio de Janeiro

