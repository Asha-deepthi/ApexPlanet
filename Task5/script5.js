// Handle product filtering by category and sorting on the products page
document.addEventListener("DOMContentLoaded", function () {
  const categoryFilter = document.getElementById('category-filter');
  const sortFilter = document.getElementById('sort-filter');
  const productList = document.getElementById('product-list');

  // Sample products data (replace with dynamic data from an API or database)
 const products = [
  { name: "Smartphone", category: "electronics", price: 299, image: "./images5/apple.jpg" },
  { name: "Laptop", category: "electronics", price: 799, image: "./images5/laptop.jpg" },
  { name: "Book: JS Basics", category: "books", price: 19, image: "./images5/js_book.jpg" },
  { name: "Book: CSS Mastery", category: "books", price: 25, image: "./images5/css_book.jpg" },
  { name: "The 3 mistakes of my life Novel", category: "books", price: 500, image: "./images5/3mistakes.jpeg" },
  { name: "Cookbook", category: "books", price: 600, image: "./images5/cookbook3.jpg" },
  { name: "Dining Set", category: "crockery", price: 2500, image: "./images5/dining_set.webp" },
  { name: "Plates", category: "crockery", price: 900, image: "./images5/plates.webp" },
  { name: "Burger", category: "food", price: 150, image: "./images5/burger.webp" },
  { name: "Chocolates", category: "food", price: 200, image: "./images5/chocolate.webp" },
  { name: "Sofa", category: "furniture", price: 18000, image: "./images5/sofa.webp" },
  { name: "Dining Table", category: "furniture", price: 22000, image: "./images5/dining_table.avif" },
  { name: "Harry Potter (pack of 8)", category: "books", price: 5600, image: "./images5/harrypotter.jpg" },
  { name: "twisted games", category: "books", price: 700, image: "./images5/twisted_games.webp" },
  { name: "can we be strangers again", category: "books", price: 750, image: "./images5/strangers.webp" },
  { name: "when there is nothing left but love novel", category: "books", price: 900, image: "./images5/nothing_left.jpg" },
];

  // Function to display products based on category and sorting
  function displayProducts(filteredProducts) {
    productList.innerHTML = '';
    filteredProducts.forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.classList.add('product-item');
      productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.category}</p>
        <div class="price">Rs.${product.price}</div>
      `;
      productList.appendChild(productDiv);
    });
  }

  // Handle category and sort filter changes
  categoryFilter.addEventListener('change', () => filterAndSortProducts());
  sortFilter.addEventListener('change', () => filterAndSortProducts());

  // Function to filter and sort products
  function filterAndSortProducts() {
    let filteredProducts = products;

    const selectedCategory = categoryFilter.value;
    if (selectedCategory !== 'all') {
      filteredProducts = filteredProducts.filter(product => product.category === selectedCategory);
    }

    const sortOption = sortFilter.value;
    if (sortOption === 'price-asc') {
      filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'price-desc') {
      filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
    }

    displayProducts(filteredProducts);
  }

  // Initial display of products
  displayProducts(products);

  // Handle category redirection (on home page category cards)
  const categoryCards = document.querySelectorAll('.category-card');
  categoryCards.forEach(card => {
    card.addEventListener('click', function () {
      const category = this.getAttribute('data-category');
      window.location.href = `products.html?category=${category}`;
    });
  });
});
