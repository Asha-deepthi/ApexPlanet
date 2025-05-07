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
    "https://i.natgeofe.com/k/ad9b542e-c4a0-4d0b-9147-da17121b4c98/MOmeow1_square.png",
    "https://i0.wp.com/catcaresolutions.com/wp-content/uploads/2020/12/cute-cat-with-yellow-headband-on.png?fit=1000%2C1500&ssl=1",
    "https://i.pinimg.com/736x/22/fa/d8/22fad88d039d0aa8904d5abcc6f7cc7e.jpg"
  ];
  let currentIndex = 0;
  
  function showImage(index) {
    document.getElementById("carousel-image").src = images[index];
  }
  
  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }
  
  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  }
  
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
  