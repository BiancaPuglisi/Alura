let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function exibirMensagemNoConsole () {
    console.log('O botão foi clicado');
}

function exibirAlerta() {
    alert ('Eu amo JS');
}

function exibirPrompt() {
    let nomeDaCidade = prompt ('Cite uma cidade brasileira que você gosta:')
    alert (`Estive em ${nomeDaCidade} e lembrei de você.`);
}

function somandoDoisNumeros () {
    let numero1 = prompt ('Digite um número:');
    let numero2 = prompt ('Digite outro número:');
    let soma = numero1 + numero2;
    alert (`${numero1} + ${numero2} = ${soma}`);
}