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
    document.getElementById('parcelasRestantes