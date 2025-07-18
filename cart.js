document.addEventListener("DOMContentLoaded", () => {
    renderCart();
});

function renderCart() {
    const cartContainer = document.getElementById("cart-container");
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {
        cartContainer.innerHTML = "<p style='color: white; text-align: center;'>Кошик порожній</p>";
        return;
    }

    cartContainer.innerHTML = "";
    cart.forEach((id, index) => {
        const product = products.find(p => p.id === id);
        if (product) {
            const card = document.createElement("div");
            card.className = "product-card";
            card.innerHTML = `
                <img src="${product.image}" alt="${product.name}" />
                <h3>${product.name}</h3>
                <p>${product.price}$</p>
                <button onclick="removeFromCart(${index})">Видалити</button>
            `;
            cartContainer.appendChild(card);
        }
    });
}



function clearCart() {
    localStorage.removeItem("cart");
    renderCart();
    updateCartCount();
    alert("Кошик очищено!");
}

function removeFromCart(index) {
    if (confirm("Ви дійсно хочете видалити цей товар з кошика?")) {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        renderCart();
        updateCartCount();
    }
}

function EndingOrder() {
    alert("Ваш заказ успішно замовлено! Дякуємо за покупку!")
}
