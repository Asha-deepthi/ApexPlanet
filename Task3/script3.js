// ✅ Quiz Data
const quizQuestions = [
    { question: "What does DOM stand for?", answers: ["Data Object Model", "Document Object Model", "Digital Output Mode"], correct: 1 },
    { question: "Which keyword declares a variable in JS?", answers: ["def", "int", "let"], correct: 2 },
    { question: "Which is not a JS data type?", answers: ["String", "Float", "Boolean"], correct: 1 },
    { question: "What does `===` mean?", answers: ["Equals in value", "Equals in value and type", "Assignment"], correct: 1 },
    { question: "Which tag includes JavaScript?", answers: ["<script>", "<js>", "<javascript>"], correct: 0 },
    { question: "Which method adds an item to an array?", answers: ["push()", "add()", "append()"], correct: 0 },
    { question: "How do you write a comment?", answers: ["# comment", "// comment", "<!-- comment -->"], correct: 1 },
    { question: "What runs first in a web page?", answers: ["HTML", "JavaScript", "CSS"], correct: 0 },
    { question: "Which one is falsey?", answers: ["0", "'false'", "[]"], correct: 0 },
    { question: "JS is case-sensitive?", answers: ["Yes", "No", "Sometimes"], correct: 0 }
  ];
  
  let current = 0;
  let score = 0;
  
  function loadQuestion() {
    const q = quizQuestions[current];
    document.getElementById("question").textContent = q.question;
    const answerList = document.getElementById("answers");
    answerList.innerHTML = "";
    q.answers.forEach((ans, idx) => {
      const li = document.createElement("li");
      const btn = document.createElement("button");
      btn.textContent = ans;
      btn.onclick = () => checkAnswer(idx);
      li.appendChild(btn);
      answerList.appendChild(li);
    });
  }
  
  function checkAnswer(selected) {
    const correct = quizQuestions[current].correct;
    if (selected === correct) score++;
    document.getElementById("next-btn").style.display = "inline-block";
  }
  
  function nextQuestion() {
    current++;
    if (current < quizQuestions.length) {
      loadQuestion();
      document.getElementById("next-btn").style.display = "none";
    } else {
      document.getElementById("question").textContent = "Quiz Completed!";
      document.getElementById("answers").innerHTML = "";
      document.getElementById("score").textContent = `Your Score: ${score}/${quizQuestions.length}`;
      document.getElementById("next-btn").style.display = "none";
    }
  }
  
  window.onload = loadQuestion;
  
  // ✅ Image Carousel
  const images = [
    "./images2/cat1.jpg",
    "./images2/cat2.webp",
    "./images2/cat3.jpg",
    "./images2/cat4.jpg",
    "./images2/cat5.png",
    "./images2/cat6.jpg"
  ];
  
  let currentIndex = 0;
  let carouselInterval;
  
  function showImage(index) {
    const img = document.getElementById("carousel-image");
    img.src = images[index];
  }
  
  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }
  
  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  }
  
  function startCarousel() {
    carouselInterval = setInterval(() => {
      nextImage();
    }, 3000); // Change every 3 seconds
  }
  
  window.onload = function () {
    showImage(currentIndex); // Show first image
    startCarousel();         // Start auto-rotation
    loadQuestion();          // If using quiz logic
  };
  

  
  // ✅ Weather API using wttr.in (no API key needed)
  async function getWeather() {
    const city = document.getElementById("city").value;
    const result = document.getElementById("weather-result");
  
    try {
      const res = await fetch(`https://wttr.in/${city}?format=3`);
      const text = await res.text();
      result.textContent = text;
    } catch (err) {
      result.textContent = "⚠️ Unable to fetch weather.";
    }
  }
  