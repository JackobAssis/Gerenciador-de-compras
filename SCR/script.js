function addCard() {
    const cardName = document.getElementById('cardName').value;
    const dueDate = document.getElementById('dueDate').value;
    const creditLimit = document.getElementById('creditLimit').value;

    console.log(`Adicionando cartão: ${cardName}, Data de Pagamento: ${dueDate}, Limite: ${creditLimit}`);
}

function addPurchase() {

    console.log('Adicionando compra...');
}

function removePurchase() {

    console.log('Removendo compra...');
}