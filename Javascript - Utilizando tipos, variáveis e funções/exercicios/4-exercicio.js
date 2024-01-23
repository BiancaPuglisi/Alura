function cumprimentar (nome) {
    return `Olá, ${nome}! Como vai você?`
}

const nomePessoa = 'Maria';
const saudacao = cumprimentar(nomePessoa);

console.log(saudacao);

function verificarIdade(idade){
    if (idade >= 18) {
        return `É maior de idade`
    } else {
        return `É menor de idade`
    }
}

console.log(verificarIdade(25));
console.log(verificarIdade(15));

function verificaPalindromo(string) {
    const stringInvertida = string.split('').reverse().join('');
    return string.toLowerCase() === stringInvertida.toLowerCase();
}

console.log(verificaPalindromo("batata"));
console.log(verificaPalindromo("arara"));

function encontraMaiorValor(num1, num2, num3) {
    let maior = num1; // Assumindo inicialmente que num1 é o maior

    if (num2 > maior) {
        maior = num2;
    }

    if (num3 > maior) {
        maior = num3;
    }

    return maior;
}

console.log(encontraMaiorValor(12, 56, 32));

const calculaPotencia = (base, expoente) => {
    return Math.pow(base, expoente);
};

const base = 2;
const expoente = 3;

const resultado = calculaPotencia(base, expoente);
console.log(`O resultado de ${base} elevado a ${expoente} é: ${resultado}`);