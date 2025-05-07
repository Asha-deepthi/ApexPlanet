// Contact Form Validation
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    const formMessage = document.getElementById("formMessage");
  
    if (!name.value || !email.value || !message.value) {
      formMessage.textContent = "All fields are required!";
      formMessage.style.color = "red";
      return;
    }
  
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.value.match(emailPattern)) {
      formMessage.textContent = "Please enter a valid email address.";
      formMessage.style.color = "red";
      return;
    }
  
    formMessage.textContent = "Form submitted successfully!";
    formMessage.style.color = "green";
  
    // Clear the form
    name.value = '';
    email.value = '';
    message.value = '';
  });
  
  // To-Do List Functions
  function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
  
    if (taskInput.value.trim() === "") return;
  
    const li = document.createElement("li");
    li.textContent = taskInput.value;
  
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.onclick = () => li.remove();
  
    li.appendChild(removeBtn);
    taskList.appendChild(li);
  
    taskInput.value = "";
  }
  