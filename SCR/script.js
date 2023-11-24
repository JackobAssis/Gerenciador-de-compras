async function adicionarCartao() {
    const nomeCartao = document.getElementById('nomeCartao').value;
    const dataVencimento = document.getElementById('dataVencimento').value;
    const limiteCredito = document.getElementById('limiteCredito').value;

    try {
        const resposta = await fetch('http://localhost:3000/adicionarCartao', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nomeCartao,
                dataVencimento,
                limiteCredito,
            }),
        });

        const dados = await resposta.json();
        console.log(dados.message);

        limparCamposCartao();
    } catch (erro) {
        console.error('Erro ao adicionar cartão:', erro.message);
    }
}

function limparCamposCartao() {
    document.getElementById('nomeCartao').value = '';
    document.getElementById('dataVencimento').value = '';
    document.getElementById('limiteCredito').value = '';
}

async function adicionarCompra() {
    const nomeCompra = document.getElementById('nomeCompra').value;
    const dataCompra = document.getElementById('dataCompra').value;
    const valorCompra = document.getElementById('valorCompra').value;
    const parcelasPagas = document.getElementById('parcelasPagas').value;
    const parcelasRestantes = document.getElementById('parcelasRestantes').value;

    try {
        const resposta = await fetch('http://localhost:3000/adicionarCompra', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nomeCompra,
                dataCompra,
                valorCompra,
                parcelasPagas,
                parcelasRestantes,
            }),
        });

        const dados = await resposta.json();
        console.log(dados.message);

        limparCamposCompra();
    } catch (erro) {
        console.error('Erro ao adicionar compra:', erro.message);
    }
}


function limparCamposCompra() {
    document.getElementById('nomeCompra').value = '';
    document.getElementById('dataCompra').value = '';
    document.getElementById('valorCompra').value = '';
    document.getElementById('parcelasPagas').value = '';
    document.getElementById('parcelasRestantes').value = '';
}

async function removerCompra() {
    const idCompra = document.getElementById('idCompra').value;

    try {

        const resposta = await fetch('http://localhost:3000/removerCompra', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                idCompra,
            }),
        });


        const dados = await resposta.json();
        console.log(dados.message);

    } catch (erro) {
        console.error('Erro ao remover compra:', erro.message);
    }
}

async function atualizarCompra() {
    const idCompra = document.getElementById('idCompra').value;
    const parcelasPagas = document.getElementById('parcelasPagas').value;
    const parcelasRestantes = document.getElementById('parcelasRestantes').value;

    try {

        const resposta = await fetch('http://localhost:3000/atualizarCompra', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                idCompra,
                parcelasPagas,
                parcelasRestantes,
            }),
        });


        const dados = await resposta.json();
        console.log(dados.message);


        const compraAtualizada = dados.compraAtualizada;
        atualizarListaDeComprasNaInterface(compraAtualizada);
    } catch (erro) {
        console.error('Erro ao atualizar compra:', erro.message);
    }
}


function atualizarListaDeComprasNaInterface(compraAtualizada) {

    console.log('Atualizando dinamicamente a lista de compras na interface:', compraAtualizada);
}