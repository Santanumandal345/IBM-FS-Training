const products = [
    {
      id: 1,
      name: "Laptop",
      price: 50000,
      category: "Electronics",
      rating: 4.5,
      image: "laptop.jpg",
    },
    {
      id: 2,
      name: "T-Shirt",
      price: 1000,
      category: "Clothing",
      rating: 4.0,
      image: "tshirt.jpg",
    },
    {
      id: 3,
      name: "Watch",
      price: 3000,
      category: "Accessories",
      rating: 4.7,
      image: "watch.jpg",
    },
  ];
  
  function renderProducts(filteredProducts = products) {
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";
    filteredProducts.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.className = "product-card";
      productCard.innerHTML = `
        <img src="assets/images/${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>₹${product.price}</p>
        <p>${product.category}</p>
        <p>Rating: ${product.rating}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      `;
      productList.appendChild(productCard);
    });
  }
  
  function sortProducts() {
    const sortBy = document.getElementById("sort").value;
    let sortedProducts = [...products];
    if (sortBy === "price-low-to-high") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high-to-low") {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating") {
      sortedProducts.sort((a, b) => b.rating - a.rating);
    }
    renderProducts(sortedProducts);
  }
  
  function filterProducts() {
    const category = document.getElementById("category").value;
    const priceRange = document.getElementById("price-range").value;
    const filtered = products.filter((product) => {
      return (
        (category === "all" || product.category === category) &&
        (priceRange === "all" ||
          (priceRange === "below-5000" && product.price < 5000) ||
          (priceRange === "5000-10000" && product.price >= 5000 && product.price <= 10000) ||
          (priceRange === "above-10000" && product.price > 10000))
      );
    });
    renderProducts(filtered);
  }
  
  function searchProducts() {
    const query = document.getElementById("search-bar").value.toLowerCase();
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(query)
    );
    renderProducts(filtered);
  }
  
  function addToCart(productId) {
    const product = products.find((p) => p.id === productId);
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    showToast();
  }
  
  function showToast() {
    const toast = document.getElementById("toast");
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 3000);
  }
  
  renderProducts();