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

    // Create Remove button
    const removeButton = document.createElement('button');
    removeButton.textContent = '❌';
    removeButton.classList.add('remove-btn');
    removeButton.onclick = function() {
      removeTask(li);
    };

    // Append the Remove button to the list item
    li.appendChild(removeButton);
    taskList.appendChild(li);

    // Clear input after adding task
    taskInput.value = '';
  }
}

// Function to remove a task
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
  { name: "Smartphone", category: "electronics", price: 299 },
  { name: "Laptop", category: "electronics", price: 799 },
  { name: "Book: JS Basics", category: "books", price: 19 },
  { name: "Book: CSS Mastery", category: "books", price: 25 },
  { name: "The 3 mistakes of my life Novel", category: "books", price: 500 },
  { name: "Cookbook", category: "books", price: 600 },
  { name: "Dining Set", category: "crockery", price: 2500 },
  { name: "Plates", category: "crockery", price: 900 },
  { name: "Burger", category: "food", price: 150 },
  { name: "Chocolates", category: "food", price: 200 },
  { name: "Sofa", category: "furniture", price: 18000 },
  { name: "Dining Table", category: "furniture", price: 22000 },
  { name: "Harry Potter (pack of 7)", category: "books", price: 5600 },
  { name: "twisted games", category: "books", price: 700 },
  { name: "can we be strangers again", category: "books", price: 750 },
  { name: "when there is nothing left but love novel", category: "books", price: 900 },
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

    const icon = document.createElement("i");
    icon.className = `fas ${iconMap[product.category] || "fa-box"} product-icon`;

    div.appendChild(icon);
    div.innerHTML += `<strong>${product.name}</strong><br>
                      Category: ${product.category}<br>
                      Price: $${product.price}`;
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