

const correctAnswers = ["D", "B", "A", "B"];
const form = document.querySelector(".quiz-form");
const h2 = document.createElement("h2");

let pontuation = 0;
let questions = 0;

const getUserAnswer = () => {
  const answers = [];

  correctAnswers.forEach((_, index) => {
    const userAnswer = form[`question${index + 1}`].value;
    answers.push(userAnswer);
  });
  return answers;
};

const calculateUserScore = (answers) => {
  answers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      pontuation += 25;
      questions += 1;
    }
  });
};

const showFinalScore = () => {
  scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
  form.insertAdjacentElement("beforebegin", h2);
  h2.classList.add("final-score-container");
};

const animateFinalScore = () => {
  let counter = 0;

  const timer = setInterval(() => {
    if (counter === pontuation) {
      clearInterval(timer);
    }
    h2.innerHTML = `Você acertou ${questions} das perguntas, sua pontuação é <span>${counter}%</span> `;
    counter++;
  }, 10);
};
const resetScore = () => (pontuation = 0);

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const answers = getUserAnswer();
  resetScore();
  calculateUserScore(answers);

  showFinalScore();

  animateFinalScore();
});
