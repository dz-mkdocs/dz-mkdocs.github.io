let quizBank = {};
const container = document.getElementById("quiz-container");

async function init() {
  //const res = await fetch(new URL('assets/data/quizzes.json', window.location.href));
  const res = await fetch('assets/data/quizzes.json');
  quizBank = await res.json();

  quizBank.quizzes.forEach((quiz, quizIndex) => {
    // Crear contenedor principal para cada quiz
    const quizDiv = document.createElement("div");
    quizDiv.classList.add("quiz-block");
    quizDiv.id = `quiz-${quizIndex}`;

    let html = `<h2>${quiz['desc-topic']}</h2>`;

    quiz.questions.forEach((q, questionIndex) => {
      html += `<div id="q-${quizIndex}-${questionIndex}"><strong>${questionIndex + 1}. ${q.question}</strong><br>`;
      q.choices.forEach((choice, cIdx) => {
        html += `
          <label class="answer-label">
            <input type="radio" name="quiz-${quizIndex}-q${questionIndex}" value="${cIdx}">
            ${choice}
          </label>`;
      });
      html += `</div><br>`;
    });

    // Crear el botón de verificar respuestas
    const submitButton = document.createElement("button");
    submitButton.innerHTML = `Check answer`;
    submitButton.className = "md-button";
    submitButton.id = `btn-${quizIndex}`;
    submitButton.onclick = () => checkAnswers(quizIndex);

    // Añadir el botón y el contenedor de referencia (vacío inicialmente)
    html += `<div class="reference-link" id="ref-${quizIndex}" style="display: none;"></div>`;

    // Establecer el HTML generado en el contenedor de la pregunta
    quizDiv.innerHTML = html;

    // Agregar el botón al contenedor quizDiv
    quizDiv.appendChild(submitButton);

    // Finalmente, agregar quizDiv al contenedor principal
    container.appendChild(quizDiv);
  });
}

function checkAnswers(quizIndex) {
  const quiz = quizBank.quizzes[quizIndex];
  let correct = 0;

  quiz.questions.forEach((q, questionIndex) => {
    const questionDiv = document.getElementById(`q-${quizIndex}-${questionIndex}`);
    const selected = document.querySelector(`input[name="quiz-${quizIndex}-q${questionIndex}"]:checked`);

    questionDiv.classList.remove("correct", "incorrect");

    if (selected) {
      if (selected.value === q.answer) {
        correct++;
        questionDiv.classList.add("correct");
      } else {
        questionDiv.classList.add("incorrect");
      }
    } else {
      questionDiv.classList.add("incorrect");
    }

    const inputs = questionDiv.querySelectorAll("input[type=radio]");
    inputs.forEach(input => input.disabled = true);
  });

  // Mostrar enlace si existe, después de validar respuestas
  if (quiz.url && quiz.url.trim() !== "") {
    const refContainer = document.getElementById(`ref-${quizIndex}`);
    refContainer.innerHTML = `📖 <a href="${quiz.url}" target="_blank">More info</a>`;
    refContainer.style.display = "block";
  }

  // Deshabilitar botón para evitar validaciones múltiples
//  document.getElementById(`btn-${quizIndex}`).disabled = true;
  // Deshabilitar botón para evitar validaciones múltiples
  const verifyBtn = document.getElementById(`btn-${quizIndex}`);
  verifyBtn.disabled = true;

  // Agregar botón "Reintentar"
  const retryBtnId = `retry-${quizIndex}`;
  if (!document.getElementById(retryBtnId)) {
    const retryBtn = document.createElement("button");
    retryBtn.textContent = "Retake";
    retryBtn.className = "md-button md-button--secondary";
    retryBtn.id = retryBtnId;
    retryBtn.onclick = () => resetQuiz(quizIndex);

    verifyBtn.parentNode.insertBefore(retryBtn, verifyBtn.nextSibling);
  }

}

function resetQuiz(quizIndex) {
  const quiz = quizBank.quizzes[quizIndex];

  quiz.questions.forEach((_, questionIndex) => {
    const questionDiv = document.getElementById(`q-${quizIndex}-${questionIndex}`);
    questionDiv.classList.remove("correct", "incorrect");

    const inputs = questionDiv.querySelectorAll("input[type=radio]");
    inputs.forEach(input => {
      input.checked = false;
      input.disabled = false;
    });
  });

  // Ocultar referencia
  const refContainer = document.getElementById(`ref-${quizIndex}`);
  refContainer.style.display = "none";
  refContainer.innerHTML = "";

  // Reactivar botón principal
  const verifyBtn = document.getElementById(`btn-${quizIndex}`);
  verifyBtn.disabled = false;

  // Eliminar el botón de reintento
  const retryBtn = document.getElementById(`retry-${quizIndex}`);
  if (retryBtn) retryBtn.remove();

  // Scroll al principio del quiz
  document.getElementById(`quiz-${quizIndex}`).scrollIntoView({ behavior: "smooth" });
}


init();
