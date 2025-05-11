// Section Navigation with Smooth Transitions
function showSection(id) {
  document.querySelectorAll('section').forEach(sec => {
    sec.classList.remove('visible');
  });
  const section = document.getElementById(id);
  section.classList.add('visible');
}

// To-Do List with LocalStorage
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach(task => addTask(task));
}

function addTask() {
  const taskInput = document.getElementById('todo-input');
  const taskValue = taskInput.value.trim();
  if (taskValue) {
    const taskList = document.getElementById('todo-list');
    const li = document.createElement('li');
    li.textContent = taskValue;

    const removeButton = document.createElement('button');
    removeButton.textContent = '❌';
    removeButton.classList.add('remove-btn');
    removeButton.onclick = function() {
      removeTask(li);
    };

    li.appendChild(removeButton);
    taskList.appendChild(li);
    taskInput.value = '';
  }
}

function removeTask(taskItem) {
  taskItem.remove();
}

function saveTasks() {
  const tasks = [];
  todoList.querySelectorAll("li").forEach(li => tasks.push(li.textContent));
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Product Listing and Filters
const products = [
  { name: "Smartphone", category: "electronics", price: 299, image: "./images4/apple.jpg" },
  { name: "Laptop", category: "electronics", price: 799, image: "./images4/laptop.jpg" },
  { name: "Book: JS Basics", category: "books", price: 19, image: "./images4/js_book.jpg" },
  { name: "Book: CSS Mastery", category: "books", price: 25, image: "./images4/css_book.jpg" },
  { name: "The 3 mistakes of my life Novel", category: "books", price: 500, image: "./images4/3mistakes.jpeg" },
  { name: "Cookbook", category: "books", price: 600, image: "./images4/cookbook3.jpg" },
  { name: "Dining Set", category: "crockery", price: 2500, image: "./images4/dining_set.webp" },
  { name: "Plates", category: "crockery", price: 900, image: "./images4/plates.webp" },
  { name: "Burger", category: "food", price: 150, image: "./images4/burger.webp" },
  { name: "Chocolates", category: "food", price: 200, image: "./images4/chocolate.webp" },
  { name: "Sofa", category: "furniture", price: 18000, image: "./images4/sofa.webp" },
  { name: "Dining Table", category: "furniture", price: 22000, image: "./images4/dining_table.avif" },
  { name: "Harry Potter (pack of 8)", category: "books", price: 5600, image: "./images4/harrypotter.jpg" },
  { name: "twisted games", category: "books", price: 700, image: "./images4/twisted_games.webp" },
  { name: "can we be strangers again", category: "books", price: 750, image: "./images4/strangers.webp" },
  { name: "when there is nothing left but love novel", category: "books", price: 900, image: "./images4/nothing_left.jpg" },
];

function displayProducts(filtered = products) {
  const list = document.getElementById("product-list");
  list.innerHTML = "";

  const iconMap = {
    electronics: "fa-laptop",
    books: "fa-book",
    food: "fa-apple-alt",
    furniture: "fa-couch",
    crockery: "fa-mug-hot",
  };

  filtered.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.setAttribute("data-category", product.category);

    // Add icon
    const icon = document.createElement("i");
    icon.className = `fas ${iconMap[product.category] || "fa-box"} product-icon`;
    div.appendChild(icon);

    // Add image
    const img = document.createElement("img");
    img.src = product.image;
    img.alt = product.name;
    img.className = "product-image";
    div.appendChild(img);

    // Add text details
    const info = document.createElement("div");
    info.innerHTML = `<strong>${product.name}</strong><br>
                      Category: ${product.category}<br>
                      Price: $${product.price}`;
    div.appendChild(info);

    list.appendChild(div);
  });
}

function applyFilters() {
  const category = document.getElementById("category-filter").value;
  const sort = document.getElementById("sort-filter").value;

  let filtered = [...products];
  if (category !== "all") {
    filtered = filtered.filter(p => p.category === category);
  }

  if (sort === "price-asc") filtered.sort((a, b) => a.price - b.price);
  else if (sort === "price-desc") filtered.sort((a, b) => b.price - a.price);

  displayProducts(filtered);
}

window.onload = () => {
  loadTasks();
  displayProducts();
};
