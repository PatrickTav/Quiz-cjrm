/*
Este exercício será um pouquinho diferente dos anteriores.

Seu desafio é desenvolver uma versão do quiz que:

- Aborda um tema diferente (não pode ser de filmes);
- Tem um tema de cores diferente do que foi apresentado na aula;
- Exibe na tela a pontuação que o usuário fez. Não há certo ou errado, apenas faça. Essa exibição de pontos é uma das implementações que faremos na próxima aula =D

Independente se você já fez o quiz dos filmes enquanto acompanhava a aula, tente fazer esse exercício sem rever partes da aula.

É importante que a sua versão do quiz seja feita apenas com o conteúdo que vimos até aqui.

Depois de fazer o que foi pedido acima, crie um repositório no GitHub para a sua aplicação e abra uma issue no repositório do curso com:

- O link da sua versão do quiz;
- Quais foram as suas maiores dúvidas ou dificuldades durante a execução desse exercício;
- Quais foram as suas menores dificuldades durante a execução desse exercício.

Link do repositório do curso: https://github.com/roger-melo-treinamentos/curso-de-js-roger-melo/issues

Ps: se você não conseguiu fazer tudo o que foi pedido acima, abra a issue mesmo assim =)
Ps2: o uso do Bootstrap (ou qualquer outra lib CSS) é opcional.
*/

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
    top:0,
    left:0,
    behavior:"smooth"
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
const resetScore = () => pontuation = 0

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const answers = getUserAnswer();
resetScore()
  calculateUserScore(answers);
  
  showFinalScore();

  animateFinalScore();
  
});
