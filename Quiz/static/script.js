/****************************************************************************
 * Navigation
 ****************************************************************************/
function goToLogin() {
    loginScreen.classList.remove("d-none");
    highscoreScreen.classList.add("d-none");
    apScreen.classList.add("d-none");
    categoryScreen.classList.add("d-none");
    komITILScreen.classList.add("d-none");
    quizScreen.classList.add("d-none");
    resultScreen.classList.add("d-none");
  }
  
  function goToHighscore() {
    loginScreen.classList.add("d-none");
    highscoreScreen.classList.remove("d-none");
    apScreen.classList.add("d-none");
    categoryScreen.classList.add("d-none");
    komITILScreen.classList.add("d-none");
    quizScreen.classList.add("d-none");
    resultScreen.classList.add("d-none");
  }
  
  function goToAP() {
    loginScreen.classList.add("d-none");
    highscoreScreen.classList.add("d-none");
    apScreen.classList.remove("d-none");
    categoryScreen.classList.add("d-none");
    komITILScreen.classList.add("d-none");
    quizScreen.classList.add("d-none");
    resultScreen.classList.add("d-none");
  }
  
  function goToCategorySelection() {
    loginScreen.classList.add("d-none");
    highscoreScreen.classList.add("d-none");
    apScreen.classList.add("d-none");
    categoryScreen.classList.remove("d-none");
    komITILScreen.classList.add("d-none");
    quizScreen.classList.add("d-none");
    resultScreen.classList.add("d-none");
  }
  
  function goToKomITILSubcategories() {
    loginScreen.classList.add("d-none");
    highscoreScreen.classList.add("d-none");
    apScreen.classList.add("d-none");
    categoryScreen.classList.add("d-none");
    komITILScreen.classList.remove("d-none");
    quizScreen.classList.add("d-none");
    resultScreen.classList.add("d-none");
  }
  
// Global variables
let quizQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let currentUser = "";
let apGroup = "";
let currentShuffledAnswers = [];
let currentCorrectAnswers = [];

/****************************************************************************
 * DOM-Elements
 ****************************************************************************/
const loginScreen = document.getElementById("loginScreen");
const apScreen = document.getElementById("apScreen");
const categoryScreen = document.getElementById("categoryScreen");
const komITILScreen = document.getElementById("komITILScreen");
const quizScreen = document.getElementById("quizScreen");
const resultScreen = document.getElementById("resultScreen");

const usernameInput = document.getElementById("usernameInput");
const loginButton = document.getElementById("loginButton");
const categoryList = document.getElementById("categoryList");
const categoryTitle = document.getElementById("categoryTitle");
const questionCount = document.getElementById("questionCount");
const questionText = document.getElementById("questionText");
const answerButtons = document.getElementById("answerButtons");
const confirmButton = document.getElementById("confirmButton");
const nextButton = document.getElementById("nextButton"); // Button für "Nächste Frage"
const finalScore = document.getElementById("finalScore");
const restartButton = document.getElementById("restartButton");
const explanationDiv = document.getElementById("explanation");

/****************************************************************************
 * Navigation functions
 ****************************************************************************/
function goToLogin() {
  loginScreen.classList.remove("d-none");
  apScreen.classList.add("d-none");
  categoryScreen.classList.add("d-none");
  komITILScreen.classList.add("d-none");
  quizScreen.classList.add("d-none");
  resultScreen.classList.add("d-none");
}

function goToAP() {
  loginScreen.classList.add("d-none");
  apScreen.classList.remove("d-none");
  categoryScreen.classList.add("d-none");
  komITILScreen.classList.add("d-none");
  quizScreen.classList.add("d-none");
  resultScreen.classList.add("d-none");
}

function goToCategorySelection() {
  loginScreen.classList.add("d-none");
  apScreen.classList.add("d-none");
  categoryScreen.classList.remove("d-none");
  komITILScreen.classList.add("d-none");
  quizScreen.classList.add("d-none");
  resultScreen.classList.add("d-none");
}

function goToKomITILSubcategories() {
  loginScreen.classList.add("d-none");
  apScreen.classList.add("d-none");
  categoryScreen.classList.add("d-none");
  komITILScreen.classList.remove("d-none");
  quizScreen.classList.add("d-none");
  resultScreen.classList.add("d-none");
}


const categoryBackgroundImages = {
  "WiSo": "url('images/wiso.jpg')",
  "KomITIL": "url('images/itil.jpg')",
  "SQL": "url('images/sql.jpg')",
  "Python": "url('images/python.png')",
  "Datenschutz": "url('images/datenschutz.jpg')"
};

/****************************************************************************
 * Shuffle array (Fisher-Yates)
 ****************************************************************************/
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

/****************************************************************************
 * Shuffle answers
 ****************************************************************************/
function shuffleAnswers(question) {
  // Create array of objects
  let answerArray = question.answers.map((answer, index) => {
    return { text: answer, originalIndex: index };
  });
  // shuffle array
  shuffleArray(answerArray);
  // get new index
  let newCorrect = answerArray.reduce((acc, item, newIndex) => {
    if (question.correct.includes(item.originalIndex)) {
      acc.push(newIndex);
    }
    return acc;
  }, []);
  return { answers: answerArray.map(item => item.text), correct: newCorrect };
}

/****************************************************************************
 * Quiz functions
 ****************************************************************************/

function startCategory(category) {
  if (apGroup === "AP1" && category === "KomITIL") {
    goToKomITILSubcategories();
  } else {
    startQuiz(category);
  }
}


function startQuiz(category) {
  quizQuestions = getQuizQuestions(category);
  shuffleArray(quizQuestions); // Fragen zufällig mischen
  currentQuestionIndex = 0;
  score = 0;

  quizScreen.classList.remove("d-none");
  categoryScreen.classList.add("d-none");
  komITILScreen.classList.add("d-none");
  resultScreen.classList.add("d-none");

  quizScreen.style.backgroundImage = categoryBackgroundImages[category] || "url('images/itil.jpg')";

  confirmButton.disabled = true;
  confirmButton.classList.remove("d-none");
  nextButton.classList.add("d-none");
  categoryTitle.innerText = `${category}`;
  showNextQuestion();
}


function showNextQuestion() {
  if (currentQuestionIndex >= quizQuestions.length || currentQuestionIndex === 20) {
    endQuiz();
    return;
  }
  explanationDiv.innerHTML = "";
  confirmButton.disabled = true;
  answerButtons.innerHTML = "";
  nextButton.classList.add("d-none");

  const currentQuestion = quizQuestions[currentQuestionIndex];
  questionText.innerText = currentQuestion.question;


  const shuffledData = shuffleAnswers(currentQuestion);
  currentShuffledAnswers = shuffledData.answers;
  currentCorrectAnswers = shuffledData.correct;

  currentShuffledAnswers.forEach((answer, index) => {
    const btn = document.createElement("button");
    btn.innerText = answer;
    btn.className = "btn custom-btn";
    btn.setAttribute("data-index", index);

    btn.addEventListener("click", () => {
      btn.classList.toggle("selected");
      btn.classList.toggle("active");
      const anySelected = [...answerButtons.children].some(b => b.classList.contains("selected"));
      confirmButton.disabled = !anySelected;
    });
    answerButtons.appendChild(btn);
  });

  questionCount.innerText = `Frage ${currentQuestionIndex + 1} von ${Math.min(quizQuestions.length, 20)}`;
}


function checkAnswer() {
  const currentQuestion = quizQuestions[currentQuestionIndex];
  const selectedButtons = [...answerButtons.children].filter(b => b.classList.contains("selected"));
  const selectedIndices = selectedButtons.map(b => parseInt(b.getAttribute("data-index")));

  const sortedSelected = selectedIndices.slice().sort((a, b) => a - b);
  const sortedCorrect = currentCorrectAnswers.slice().sort((a, b) => a - b);
  const isCorrect = (sortedSelected.length === sortedCorrect.length) &&
                    sortedSelected.every((val, i) => val === sortedCorrect[i]);

  console.log("isCorrect?", isCorrect);

  [...answerButtons.children].forEach(b => b.disabled = true);

  [...answerButtons.children].forEach(b => {
    const index = parseInt(b.getAttribute("data-index"));
    const shouldBeSelected = currentCorrectAnswers.includes(index);
    const isSelected = b.classList.contains("selected");
    b.classList.remove("border-green", "border-red");
    b.classList.add(isSelected === shouldBeSelected ? "border-green" : "border-red");
  });


  document.getElementById("videoContainer").innerHTML = "";

  if (isCorrect) {
    explanationDiv.innerHTML = `<div class="alert alert-success">Richtig! Gut gemacht.</div>`;
    score++;
    confirmButton.classList.add("d-none");
    nextButton.classList.remove("d-none");
    console.log("Antwort korrekt, nächste Frage wird angezeigt.");
  } else {
    let userAnswerText = selectedIndices.map(i => currentShuffledAnswers[i]).join(", ");
    let correctAnswerText = currentCorrectAnswers.map(i => currentShuffledAnswers[i]).join(", ");
    console.log("Falsche Antwort. Benutzer:", userAnswerText, "Korrekt:", correctAnswerText);

    getAIExplanation(currentQuestion.question, userAnswerText, correctAnswerText)
      .then(data => {
        console.log("Backend-Antwort:", data);
        if (data.explanation) {
          explanationDiv.innerHTML = `<div class="alert alert-danger">${data.explanation}</div>`;
        } else {
          explanationDiv.innerHTML = `<div class="alert alert-danger">Fehler beim Abrufen der KI.</div>`;
        }
        if (currentQuestion.videoUrl) {
          const urlObj = new URL(currentQuestion.videoUrl);
          const videoId = urlObj.searchParams.get("v");
          const embedUrl = `https://www.youtube.com/embed/${videoId}`;
          document.getElementById("videoContainer").innerHTML = `
            <div style="width:50%; margin:20px;">
              <iframe style="width:100%;;"
                      src="${embedUrl}"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen>
              </iframe>
            </div>
          `;
        }
        confirmButton.classList.add("d-none");
        nextButton.classList.remove("d-none");
        console.log("Erklärung und Video eingeblendet, nächste Frage bereit.");
      })
      .catch(err => {
        explanationDiv.innerHTML = `<div class="alert alert-danger">Fehler beim Abrufen der Erklärung.</div>`;
        console.error("Fehler im Fetch:", err);
        confirmButton.classList.add("d-none");
        nextButton.classList.remove("d-none");
      });
  }
}





nextButton.addEventListener("click", () => {
  document.getElementById("videoContainer").innerHTML = "";
  currentQuestionIndex++;
  nextButton.classList.add("d-none");
  confirmButton.classList.remove("d-none");
  showNextQuestion();
});

function getExplanation(question, selectedIndices, correctAnswers) {
  const correctText = correctAnswers.map(i => `"${currentShuffledAnswers[i]}"`).join(", ");
  return `Falsch: Die richtige(n) Antwort(en) ist/sind: ${correctText}.`;
}

function endQuiz() {
  quizScreen.classList.add("d-none");
  resultScreen.classList.remove("d-none");
  document.getElementById("videoContainer").innerHTML = "";
  finalScore.innerText = `Du hast ${score} von ${Math.min(quizQuestions.length, 20)} Fragen richtig beantwortet!`;
}


function startKomITILQuiz(subcat) {
  currentQuestionIndex = 0;
  score = 0;
  quizQuestions = (subcat === "alles") ? komITILQuestions : komITILQuestions.filter(q => q.subcategory === subcat);
  shuffleArray(quizQuestions);

  quizScreen.classList.remove("d-none");
  categoryScreen.classList.add("d-none");
  komITILScreen.classList.add("d-none");
  resultScreen.classList.add("d-none");

  quizScreen.style.backgroundImage = "url('images/itil.jpg')";

  confirmButton.disabled = true;
  categoryTitle.innerText = `KomITIL - ${subcat}`;
  showNextQuestion();
}


function getQuizQuestions(category) {
  if (apGroup === "AP1") {
    return ap1Questions.filter(q => q.category === category);
  } else if (apGroup === "AP2") {
    return ap2Questions.filter(q => q.category === category);
  } else if (apGroup === "alles") {
    return ap1Questions.concat(ap2Questions).filter(q => q.category === category);
  }
  return [];
}


function populateCategoryScreen() {
  categoryList.innerHTML = "";
  let cats = [];
  if (apGroup === "AP1") {
    const catSet = new Set();
    ap1Questions.forEach(q => catSet.add(q.category));
    cats = Array.from(catSet).sort();
    cats.unshift("Alles");
    cats.push("KomITIL"); // Hinzufügen der KomITIL-Option
  } else if (apGroup === "AP2") {
    const catSet = new Set();
    ap2Questions.forEach(q => catSet.add(q.category));
    cats = Array.from(catSet).sort();
    cats.unshift("Alles");
  } else if (apGroup === "alles") {
    const union = new Set();
    ap1Questions.concat(ap2Questions).forEach(q => union.add(q.category));
    cats = Array.from(union).sort();
    cats.unshift("Alles");
  }
  
  cats.forEach(cat => {
    const btn = document.createElement("button");
    btn.innerText = cat;
    btn.className = "btn custom-btn";
    if (cat === "KomITIL") {
      btn.addEventListener("click", () => goToKomITILSubcategories());
    } else {
      btn.addEventListener("click", () => startCategory(cat));
    }
    categoryList.appendChild(btn);
  });
}




function quitQuiz() {
  document.getElementById("videoContainer").innerHTML = "";
  currentQuestionIndex = 0;
  score = 0;
  currentShuffledAnswers = [];
  currentCorrectAnswers = [];
  // Gehe zurück zur Kategorie-Auswahl
  goToCategorySelection();
}

/****************************************************************************
 * Event Listener / Initial Setup
 ****************************************************************************/
loginButton.addEventListener("click", () => {
  const username = usernameInput.value.trim();
  if (username === "") {
    alert("Bitte gib deinen Namen ein.");
    return;
  }
  currentUser = username;
  goToAP();
});

document.getElementById("ap1Button").addEventListener("click", () => {
  apGroup = "AP1";
  goToCategorySelection();
  populateCategoryScreen();
});
document.getElementById("ap2Button").addEventListener("click", () => {
  apGroup = "AP2";
  goToCategorySelection();
  populateCategoryScreen();
});
document.getElementById("apAllButton").addEventListener("click", () => {
  apGroup = "all";
  goToCategorySelection();
  populateCategoryScreen();
});

document.getElementById("komITIL_pm_Button").addEventListener("click", () => {
  startKomITILQuiz("Projektmanagement");
});
document.getElementById("komITIL_qm_Button").addEventListener("click", () => {
  startKomITILQuiz("Qualitätsmanagement");
});
document.getElementById("komITIL_itil_Button").addEventListener("click", () => {
  startKomITILQuiz("ITIL");
});
document.getElementById("komITIL_all_Button").addEventListener("click", () => {
  startKomITILQuiz("alles");
});


confirmButton.addEventListener("click", () => { 
  checkAnswer(); 
});
restartButton.addEventListener("click", () => {
  goToCategorySelection();
  document.getElementById("videoContainer").innerHTML = "";
});



function getAIExplanation(question, userAnswer, correctAnswer) {
  return fetch("http://localhost:5000/explain", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      question: question,
      user_answer: userAnswer,
      correct_answer: correctAnswer
    })
  })
  .then(response => response.json());
}
