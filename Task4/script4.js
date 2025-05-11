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

function addTask(taskText = null) {
  const value = taskText || todoInput.value.trim();
  if (value === "") return;

  const li = document.createElement("li");
  li.textContent = value;
  li.onclick = () => {
    li.remove();
    saveTasks();
  };
  todoList.appendChild(li);
  todoInput.value = "";
  saveTasks();
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
  { name: "Book: CSS Mastery", category: "books", price: 25 }
];

function displayProducts(filtered = products) {
  const list = document.getElementById("product-list");
  list.innerHTML = "";
  filtered.forEach(p => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `<strong>${p.name}</strong><br>Category: ${p.category}<br>Price: $${p.price}`;
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

  if (sort === "price-asc") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sort === "price-desc") {
    filtered.sort((a, b) => b.price - a.price);
  }

  displayProducts(filtered);
}

// On Load
window.onload = () => {
  loadTasks();
  displayProducts();
};
