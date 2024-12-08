const cart = [];
const cartCountElement = document.getElementById('cartCount');
const cartItemsElement = document.getElementById('cartItems');
const cartTotalElement = document.getElementById('cartTotal');

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function () {
        const name = this.dataset.name;
        const price = parseFloat(this.dataset.price);
        cart.push({ name, price });
        updateCart();
    });
});

function updateCart() {
    cartCountElement.textContent = cart.length;
    cartItemsElement.innerHTML = '';
    let total = 0;
    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        li.innerHTML = `
            ${item.name}
            <span>R$ ${item.price.toFixed(2)}</span>
            <button class="btn btn-danger btn-sm" onclick="removeItem(${index})">Remover</button>
        `;
        cartItemsElement.appendChild(li);
        total += item.price;
    });
    cartTotalElement.textContent = total.toFixed(2);
}

function removeItem(index) {
    cart.splice(index, 1);
    updateCart();
}
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

// Adicionar evento às checkboxes
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        filterProducts();
    });
});


// Adiciona um evento de input na barra de pesquisa
searchInput.addEventListener('input', function() {
    filterProducts();
});

function filterProducts() {
    // Obtém as categorias selecionadas
    const selectedCategories = Array.from(checkboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);

    // Obtém o valor digitado na barra de pesquisa
    const searchQuery = searchInput.value.toLowerCase();

    // Seleciona todos os produtos
    const products = document.querySelectorAll('.produto');

    products.forEach(product => {
        // Obtém as categorias do produto
        const productCategories = product.getAttribute('data-category').split(',');

        // Obtém o nome do produto
        const productName = product.querySelector('.card-title').textContent.toLowerCase();

        // Condição para exibir o produto: deve atender a ambos os filtros
        const matchesCategory =
            selectedCategories.length === 0 || selectedCategories.some(category => productCategories.includes(category));
        const matchesSearch = productName.includes(searchQuery);

        // Exibe/oculta o produto com base nos filtros
        if (matchesCategory && matchesSearch) {
            product.style.display = ''; // Exibe o produto
        } else {
            product.style.display = 'none'; // Oculta o produto
        }
    });
}