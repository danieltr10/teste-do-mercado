
$(function () {

	var $produtos = $('#produtos');

	$('#formNovoProduto').hide();


	$('#enviarForm').on('click', function() {
		$texto = novoProduto(codigoProduto.value, $('#categoriaNegocio').val(), nomeProduto.value, descricaoProduto.value, $("#quantidade").val(), precoProduto.value, $("#tipoNegocio").val());
		$produtos.append($texto);
		resetForm();
		$('#formNovoProduto').hide();

	});

	$('#botaoAdicionarProduto').on('click', function() {
		$('#formNovoProduto').slideToggle(1000);

	});

	$('.botaoComprar').on('click', function() {
		alert('Compra efetuada com sucesso !');
	});

	$('.botaoAdicionarCarrinho').on('click', function() {
		alert('Produto adicionado ao carrinho !');
	});




});


// Aqui deveria ser criada uma API para comunicação com o banco de dados, mas por falta de tempo 
// para aprender esta parte, realizei de um jeito errado, "mas que adiciona novos produtos".

function novoProduto(codigo, categoria, nome, descricao, quantidade, preco, tipoNegocio) {

	$stringNovoProduto = '<div class="col-sm-6 col-md-4"> <div class="panel panel-default"> <div class="panel-heading"> <h3 class="panel-title" class="nomeProduto">' + nome +' </h3> <p class="categoriaProduto">' + categoria + '</p> <div class="quantidadeProduto">Qtde.' + quantidade + '</div> </div><div class="panel-body"> <img class="imagemProduto" src="http://loja.aquecedoreserefrigeracao.com.br/imagens/produto-sem-imagem.jpg" alt=""> <div class="caption"> <p class="precoOriginal">R$ ' + (preco*1.2).toFixed(2) + '</p> <p class="precoFinal">R$ ' + preco + '</p> <p class="codigoProduto">Código: #' + codigo + '</p> <label >Sobre:</label> <div class="caption descricaoProduto">' + descricao + '</div>';

	if (tipoNegocio == 'Venda') {

		$stringNovoProduto += '<p><a class="btn btn-warning" style="width: 40%" role="button">Editar Venda</a> <a href="#" class="btn btn-danger" style="width: 40%" role="button">Excluir Oferta</a></p> </div> </div> </div>';

		}
	else {

		$stringNovoProduto += '<p><a class="btn btn-warning" style="width: 40%" role="button">Editar Compra</a> <a href="#" class="btn btn-danger" style="width: 40%" role="button">Excluir Oferta</a></p> </div> </div> </div>';

	}

	return $stringNovoProduto;
}

function resetForm() {
	nomeProduto.value = "";
	codigoProduto.value  = "";
	descricaoProduto.value = "";
	precoProduto.value = "";
}
