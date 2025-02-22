// Definindo as quantidades iniciais de ingressos
let qtyPista = 100;
let qtySuperior = 200;
let qtyInferior = 400;

// Selecionando os elementos do DOM
const qtyPistaElement = document.getElementById('qtd-pista');
const qtySuperiorElement = document.getElementById('qtd-superior');
const qtyInferiorElement = document.getElementById('qtd-inferior');
const selectTipo = document.getElementById('tipo-ingresso');
const inputQtd = document.getElementById('qtd');

// Função para atualizar o display das quantidades
function atualizarDisplay() {
    qtyPistaElement.textContent = qtyPista;
    qtySuperiorElement.textContent = qtySuperior;
    qtyInferiorElement.textContent = qtyInferior;
}

// Função principal de compra
function comprar() {
    const tipo = selectTipo.value;
    const quantidade = parseInt(inputQtd.value);

    // Validações básicas
    if (!quantidade || quantidade <= 0 || quantidade > 10) {
        alert('Por favor, insira uma quantidade válida entre 1 e 10');
        return;
    }

    // Verificar disponibilidade e processar compra
    let disponivel;
    switch (tipo) {
        case 'pista':
            disponivel = qtyPista;
            if (disponivel >= quantidade) {
                qtyPista -= quantidade;
                mostrarMensagemSucesso(quantidade, 'Pista');
            }
            break;
        case 'superior':
            disponivel = qtySuperior;
            if (disponivel >= quantidade) {
                qtySuperior -= quantidade;
                mostrarMensagemSucesso(quantidade, 'Cadeira Superior');
            }
            break;
        case 'inferior':
            disponivel = qtyInferior;
            if (disponivel >= quantidade) {
                qtyInferior -= quantidade;
                mostrarMensagemSucesso(quantidade, 'Cadeira Inferior');
            }
            break;
    }

    if (disponivel < quantidade) {
        alert('Quantidade indisponível para o tipo de ingresso selecionado');
        return;
    }

    // Atualizar o display após a compra
    atualizarDisplay();
    
    // Resetar o campo de quantidade
    inputQtd.value = '';
}

// Função para mostrar mensagem de sucesso
function mostrarMensagemSucesso(quantidade, tipo) {
    alert(`Compra realizada com sucesso! ${quantidade} ingresso(s) do tipo ${tipo}`);
}

// Inicializar o display quando a página carregar
document.addEventListener('DOMContentLoaded', atualizarDisplay);