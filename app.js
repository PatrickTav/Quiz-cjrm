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

const correctAnswers = ["B", "B", "B", "B"];

const form = document.querySelector(".quiz-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  let pontuation = 0;
  let questions = 0;
  const answers = [
    form.question1.value,
    form.question2.value,
    form.question3.value,
    form.question4.value,
  ];
  const h2 = document.createElement('h2')

  answers.forEach((answer, index) => {
    if (answer === "") {
      alert(`Marque uma opção da pergunta antes de prosseguir`); //Implementar feature para impedir de continuar se não marcar a pergunta certa
    }
    if (answer === correctAnswers[index]) {
      pontuation += 25;
      questions += 1;
    }
  });
  h2.textContent = `Você acertou ${questions} perguntas, sua pontuação é ${pontuation} pontos`
  form.insertAdjacentElement('afterend', h2)
  
});
