let totalGeral = 0;
limparCarrinho();

function adicionarNoCarrinho(){
    //recuperar os valores do nome, quantidade e valor
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0]
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    //calcular o preço, o subtotal
    let preco = quantidade.value * valorUnitario;
    let carrinho = document.getElementById('lista-produtos');
    //adicionar ao carrinho
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
</section>`;
  //atualizar o valor total
    totalGeral = totalGeral + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral}`
    document.getElementById('quantidade').value = 0;
}

function limparCarrinho(){
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
}