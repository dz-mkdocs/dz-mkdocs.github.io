Estamos desarrollando una app (o mejor quizas decir una secuencia) de interface que simulan como un quizz, que necesito tener para repasar conocimiento de ciertas certificaciones que pretendo presentar.
Vamos a usar un sitio web estatico generado con MkDocs, utilizando el theme material, y haciendo uso del plugin 





```bash

# Estructura minima inicial

$ tree -a
tree -a
.
├── docs
│   ├── assets
│   │   └── data
│   │       └── quizzes.json
│   ├── index.md
│   └── quizzes
│       └── quiz.md
└── mkdocs.yml

$ cat docs/assets/data/quizzes.json
{
  "quizzes": [
    {
      "topic": "Z104",
      "questions": [
        {
          "question": "What port does HTTP use?",
          "choices": ["80", "443", "21", "22"],
          "answer": "0",
          "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP"
        },
        {
          "question": "What is Azure?",
          "choices": ["IaaS", "PaaS", "SaaS", "All of the above"],
          "answer": "3",
          "url": "https://azure.microsoft.com/en-us/overview/what-is-azure/"
        },
        {
          "question": "Which protocol is used to securely transfer files over the Internet?",
          "choices": ["FTP", "SFTP", "SMTP", "HTTP"],
          "answer": "1",
          "url": "https://www.ssh.com/academy/ssh/sftp"
        },
        {
          "question": "What does DNS stand for?",
          "choices": ["Data Network System", "Domain Name System", "Digital Node Server", "None"],
          "answer": "1",
          "url": "https://www.cloudflare.com/learning/dns/what-is-dns/"
        }
      ]
    },
    {
      "topic": "Z900",
      "questions": [
        {
          "question": "What does SaaS mean?",
          "choices": ["Software as a Service", "Server as a Software", "System as a Solution", "None of the above"],
          "answer": "0",
          "url": "https://www.ibm.com/cloud/learn/saas"
        },
        {
          "question": "Which of the following is a benefit of cloud computing?",
          "choices": ["Scalability", "Manual backups", "On-premises servers", "Fixed capacity"],
          "answer": "0",
          "url": "https://azure.microsoft.com/en-us/resources/cloud-computing-dictionary/what-is-cloud-computing/"
        },
        {
          "question": "Which cloud model gives you the most control over the hardware?",
          "choices": ["IaaS", "PaaS", "SaaS", "All of the above"],
          "answer": "0",
          "url": "https://learn.microsoft.com/en-us/azure/architecture/cloud-adoption/getting-started/iaas-paas-saas"
        },
        {
          "question": "Which Microsoft product is primarily used for identity and access management?",
          "choices": ["Azure Monitor", "Azure AD", "Azure DNS", "Azure VM"],
          "answer": "1",
          "url": "https://learn.microsoft.com/en-us/azure/active-directory/fundamentals/active-directory-whatis"
        }
      ]
    }
  ]
}


$ cat docs/quizzes/quiz.md

# Review Questions

Select a topic to begin:

<select id="topic-select" onchange="loadQuestions(this.value)">
  <option value="">-- Select a topic --</option>
</select>

<div id="quiz-container">Choose a topic.</div>

<style>
  .correct {
    background-color: #d4edda;
    border-left: 4px solid #28a745;
    padding: 0.5em;
    margin-bottom: 0.5em;
  }
  .incorrect {
    background-color: #f8d7da;
    border-left: 4px solid #dc3545;
    padding: 0.5em;
    margin-bottom: 0.5em;
  }
  .answer-label {
    display: block;
    margin: 0.25em 0;
  }
  .reference-link {
    font-size: 0.9em;
    margin-top: 0.25em;
  }
</style>

<script>
  let quizBank = {};
  const container = document.getElementById("quiz-container");

  async function init() {
    const res = await fetch("/assets/data/quizzes.json");
    quizBank = await res.json();

    const selector = document.getElementById("topic-select");
    quizBank.quizzes.forEach((quiz, idx) => {
      const option = document.createElement("option");
      option.value = idx;
      option.textContent = quiz.topic;
      selector.appendChild(option);
    });
  }

  function loadQuestions(index) {
    if (index === "") {
      container.innerHTML = "Select a topic.";
      return;
    }

    const quiz = quizBank.quizzes[index];
    let html = `<h2>${quiz.topic}</h2>`;
    quiz.questions.forEach((q, i) => {
      html += `<div id="question-${i}" data-url="${q.url}"><strong>${i + 1}. ${q.question}</strong><br>`;
      q.choices.forEach((choice, cIdx) => {
        html += `
          <label class="answer-label">
            <input type="radio" name="q${i}" value="${cIdx}">
            ${choice}
          </label>`;
      });
      html += `</div><br>`;
    });
    html += `<button onclick="checkAnswers(${index})">Check answers</button>`;
    container.innerHTML = html;
  }

  function checkAnswers(index) {
    const quiz = quizBank.quizzes[index];
    let correct = 0;

    quiz.questions.forEach((q, i) => {
      const questionDiv = document.getElementById(`question-${i}`);
      const selected = document.querySelector(`input[name="q${i}"]:checked`);
      const url = questionDiv.getAttribute("data-url");

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

      // Agregar enlace si la URL no está vacía y aún no se agregó
      if (url && url.trim() !== "" && !questionDiv.querySelector(".reference-link")) {
        const ref = document.createElement("div");
        ref.className = "reference-link";
        ref.innerHTML = `📖 <a href="${url}" target="_blank">More info</a>`;
        questionDiv.appendChild(ref);
      }
    });

    alert(`Correct: ${correct}/${quiz.questions.length}`);
  }

  init();
</script>

