async function adicionarCartao() {
    const nomeCartao = document.getElementById('nomeCartao').value;
    const dataVencimento = document.getElementById('dataVencimento').value;
    const limiteCredito = document.getElementById('limiteCredito').value;
    const parcelasPagas = document.getElementById('parcelasPagas').value;
    const parcelasRestantes = document.getElementById('parcelasRestantes').value;

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
                parcelasPagas,
                parcelasRestantes,
            }),
        });

        const dados = await resposta.json();
        console.log(dados.message);

        limparCamposCartao();
    } catch (erro) {
        console.error('Erro ao adicionar cartão:', erro.message);
    }
}

async function adicionarCompra() {
    const nomeCompra = document.getElementById('nomeCompra').value;
    const dataCompra = document.getElementById('dataCompra').value;
    const valorCompra = document.getElementById('valorCompra').value;

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
            }),
        });

        const dados = await resposta.json();
        console.log(dados.message);

        limparCamposCompra();
    } catch (erro) {
        console.error('Erro ao adicionar compra:', erro.message);
    }
}

async function removerCompra() {

    const idCompra = document.getElementById('idCompra').value;

    try {
        const resposta = await fetch('http://localhost:3000/removerCompra', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                idCompra,
            }),
        });

        const dados = await resposta.json();
        console.log(dados.message);

        limparCamposRemover();
    } catch (erro) {
        console.error('Erro ao remover compra:', erro.message);
    }
}

function limparCamposCartao() {
    document.getElementById('nomeCartao').value = '';
    document.getElementById('dataVencimento').value = '';
    document.getElementById('limiteCredito').value = '';
    document.getElementById('parcelasPagas').value = '';
    document.getElementById('parcelasRestantes').value = '';
}

function limparCamposCompra() {
    document.getElementById('nomeCompra').value = '';
    document.getElementById('dataCompra').value = '';
    document.getElementById('valorCompra').value = '';
}

function limparCamposRemover() {
    document.getElementById('idCompra').value = '';
}