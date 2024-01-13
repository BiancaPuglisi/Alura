alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 29;
console.log(numeroSecreto);
let chute = prompt('Escolha um número entre 1 e 30');
 
// se chute for igual ao número secreto
if(chute == numeroSecreto) {
    alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto}!`);
} else {
    alert('Que pena! Você errou :(');
}





