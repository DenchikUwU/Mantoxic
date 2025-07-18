document.addEventListener("DOMContentLoaded", () => {
    renderWishlist();
});

function renderWishlist() {
    const wishlistContainer = document.getElementById("wishlist-container");
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    if (wishlist.length === 0) {
        wishlistContainer.innerHTML = "<p style='color: white; text-align: center;'>Список улюблених порожній</p>";
        return;
    }

    wishlistContainer.innerHTML = "";
    wishlist.forEach(id => {
        const product = products.find(p => p.id === id);
        if (product) {
            const card = document.createElement("div");
            card.className = "product-card";
            card.innerHTML = `
                <img src="${product.image}" alt="${product.name}" />
                <h3>${product.name}</h3>
                <p>${product.price}$</p>
                <button onclick="removeFromWishlist(${id})">Видалити з улюблених</button>
            `;
            wishlistContainer.appendChild(card);
        }
    });
}


function removeFromWishlist(id) {
    if (confirm("Ви дійсно хочете видалити цей товар з улюблених?")) {
        let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
        wishlist = wishlist.filter(item => item !== id);
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
        renderWishlist();
    }
}
