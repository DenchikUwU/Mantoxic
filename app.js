document.addEventListener("DOMContentLoaded", () => {
    renderProducts(products);
    updateCartCount();
  });
  
  function renderProducts(items) {
    const container = document.getElementById("product-list");
    container.innerHTML = "";
  
    items.forEach(product => {
      const card = document.createElement("div");
      card.className = "product-card";
  
      const heart = document.createElement("div");
      heart.className = "heart-icon";
      heart.innerHTML = isInWishlist(product.id) ? "♥" : "♡";
      if (isInWishlist(product.id)) heart.classList.add("filled");
      heart.onclick = () => toggleWishlist(product.id);
  
      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" />
        <h3>${product.name}</h3>
        <p>${product.price}$</p>
        <button onclick="addToCart(${product.id})">Додати в кошик</button>
      `;
      card.appendChild(heart);
      container.appendChild(card);
    });
  }
  
  function searchItems() {
    const searchVal = document.getElementById("search").value.toLowerCase();
    const filtered = products.filter(p => p.name.toLowerCase().includes(searchVal));
    renderProducts(filtered);
  }
  
  function filterItems() {
    const brand = document.getElementById("brandFilter").value;
    const type = document.getElementById("typeFilter").value;
  
    const filtered = products.filter(p =>
      (brand === "All" || p.brand === brand) &&
      (type === "All" || p.type === type)
    );
    renderProducts(filtered);
  }
  
  function addToCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(id);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
  }
  
  function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    document.getElementById("cart-count").textContent = cart.length;
  }
  
  function toggleWishlist(id) {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    if (wishlist.includes(id)) {
      wishlist = wishlist.filter(item => item !== id);
    } else {
      wishlist.push(id);
    }
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    renderProducts(products);
  }
  
  function isInWishlist(id) {
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    return wishlist.includes(id);
  }

  function alerts(){
      alert("Найкращий кежуальний магазин в Україні та Литві. Любий бренд в найкращій якості тільки у нас.")
  }

  function contact() {
      alert("Наша почта: mantoxic@gmail.com         " +
            "Литовський номер телефону: +37012323345        " +
            "Український номер телефону: +380984357476         ")
  }

  function maintance() {
      location.reload()
  }