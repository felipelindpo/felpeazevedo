// main.js

// Array para armazenar produtos no carrinho
let cart = [];

// Função para adicionar produto ao carrinho
function addToCart(product) {
    cart.push(product);
    alert(`${product} adicionado ao carrinho!`);
    updateCartCount();
}

// Atualiza a contagem de produtos no carrinho
function updateCartCount() {
    const cartCount = document.querySelector('#cart-count');
    cartCount.textContent = cart.length;
}

// Função para mostrar detalhes do produto ao clicar
function setupProductClick() {
    const productBoxes = document.querySelectorAll('.icon-box');

    productBoxes.forEach(box => {
        box.addEventListener('click', () => {
            const productName = box.querySelector('.title').textContent;
            addToCart(productName);
        });
    });
}

// Função para buscar produtos de uma API ou arquivo JSON
function loadProducts() {
    fetch('api/produtos.json')
        .then(response => response.json())
        .then(data => {
            const productContainer = document.querySelector('#product-container');
            data.forEach(product => {
                const productElement = document.createElement('div');
                productElement.className = 'product-item';
                productElement.innerHTML = `
                    <div class="icon"><i class="far fa-headphones"></i></div>
                    <div class="text">
                        <div class="title">${product.nome}</div>
                        <div class="sub-text">${product.descricao}</div>
                        <button onclick="addToCart('${product.nome}')">Adicionar ao Carrinho</button>
                    </div>
                `;
                productContainer.appendChild(productElement);
            });
        })
        .catch(error => console.error('Erro ao carregar produtos:', error));
}

// Função de validação de formulário
function setupFormValidation() {
    const form = document.querySelector('#myForm');
    form.addEventListener('submit', function(event) {
        const email = document.querySelector('#email').value;
        if (!email.includes('@')) {
            event.preventDefault();
            alert('Por favor, insira um e-mail válido.');
        }
    });
}

// Sistema de busca para filtrar produtos
function setupSearch() {
    const searchInput = document.querySelector('#search');
    const productItems = document.querySelectorAll('.product-item');

    searchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase();
        productItems.forEach(item => {
            const text = item.textContent.toLowerCase();
            item.style.display = text.includes(query) ? '' : 'none';
        });
    });
}

// Animações para os itens do menu
function setupMenuAnimations() {
    const menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transition = 'transform 0.2s';
            item.style.transform = 'scale(1.05)';
        });

        item.addEventListener('mouseleave', () => {
            item.style.transform = 'scale(1)';
        });
    });
}

// Função principal para inicializar as funcionalidades
function init() {
    setupProductClick();
    loadProducts();
    setupFormValidation();
    setupSearch();
    setupMenuAnimations();
    updateCartCount(); // Atualiza a contagem inicial do carrinho
}

// Inicia as funções após o carregamento do DOM
document.addEventListener('DOMContentLoaded', init);
