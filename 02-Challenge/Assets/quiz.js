// Define quiz questions and answers
const questions = [
    {
      question: "What type of file is a Javascript file?",
      answers: [".html", "javascrpt", ".js", ".script"],
      correctAnswer: ".js"
    },
    {
      question: "CSS stands for _________ _________ _________.",
      answers: ["Computer Style Syntax", "Cascading Style Sheet", "Cascading System Syntax", "Cascading Style Syntax"],
      correctAnswer: "Cascading System Syntax"
    },
    {
      question: "Which of the following keywords is used to define a variable in Javascript?",
      answers: ["var", "let", "var and let", "none of the aboove"],
      correctAnswer: "var and let"
    },
    {
      question: "Which of the following methods can be used to display data in some form using Javascript?",
      answers: ["document.write()", "console.log()", "window.alert", "All of the above"],
      correctAnswer: "All of the above"
    },
    {
      question: "let and var are?",
      answers: ["Keywords", "Console Data Types", "Declaration statements", "Data Entry Types"],
      correctAnswer: "Declaration statements"
    }
  ];
  

  // Define quiz variables
  const quizTime = 100; // seconds
  const questionPoints = 2;
  let currentQuestion = 0;
  let score = 0;
  let timer;
  

  // Start the quiz
  function startQuiz() {
    // Hide the start button
    document.querySelector("button").style.display = "none";
    // Show the quiz questions
    document.querySelector("#quiz").style.display = "block";
    // Start the timer
    document.querySelector("#timer").textContent = `Time: ${quizTime} seconds`;
    timer = setInterval(updateTimer, 1000);
    // Show the first question
    showQuestion();
  }
  
  // Show the current question
  function showQuestion() {
    // Get the current question
    const question = questions[currentQuestion];
    // Set the question text
    document.querySelector("#question").textContent = question.question;
    // Set the answers
    const answersContainer = document.querySelector("#answers");
    answersContainer.innerHTML = "";
    for (let i = 0; i < question.answers.length; i++) {
      const answer = question.answers[i];
      const label = document.createElement("label");
      const input = document.createElement("input");
      input.type = "radio";
      input.name = "answer";
      input.value = answer;
      label.appendChild(input);
      label.append(answer);
      answersContainer.appendChild(label);
    }
  }
  
  // Submit the answer
  function submitAnswer() {
    // Get the selected answer
    const selectedAnswer = document.querySelector("input[name=answer]:checked");
    if (!selectedAnswer) {
      alert("Please select an answer.");
      return;
    }
    // Check the answer
    const question = questions[currentQuestion];
    if (selectedAnswer.value === question.correctAnswer) {
      score += questionPoints;
    } else {
      quizTime -= 10;
      if (quizTime < 0) {
        quizTime = 0;
      }
      document.querySelector("#timer").textContent = `Time: ${quizTime} seconds`;
    }
    // Move to the next question
    currentQuestion++;
    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
     // Quiz is over
     clearInterval(timer);
     document.querySelector("#quiz").style.display = "none";
     document.querySelector("#scoreboard").style.display = "block";
 
     // Get the player's name
     const playerName = prompt("Enter your name:");
     // Add the score to the scoreboard
     const highScoresList = document.querySelector("#highScores");
     const scoreListItem = document.createElement("li");
     scoreListItem.textContent = `${playerName}: ${score}`;
     highScoresList.appendChild(scoreListItem);
   }
 }

  // Update the timer
function updateTimer() {
    quizTime--;
    if (quizTime < 0) {
      quizTime = 0;
      clearInterval(timer);
    }
}