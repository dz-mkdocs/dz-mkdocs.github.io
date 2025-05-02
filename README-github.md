# My MkDocs Site - QuizDZ

Este repositorio contiene el código fuente de mi sitio estático generado con [MkDocs](https://www.mkdocs.org/) y el tema [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/).

📚 El sitio se encuentra publicado en:  
👉 **https://danielzamo.github.io/my-mkdocs/**

---

## 🚀 Estructura del proyecto

```bash
$ tree 
.
├── chatgpt-01.md
├── docs
│   ├── assets
│   │   ├── css
│   │   │   └── quiz.css
│   │   ├── data
│   │   │   └── quizzes.json
│   │   └── js
│   │       ├── quiz-dev.js
│   │       └── quiz.js
│   ├── index.md
│   └── quizzes
│       └── quiz.md
├── mkdocs.yml
├── README.md
└── requirements.txt

7 directories, 10 files
```

## 🛠️ Instalación local (recomendado en entorno virtual)

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
mkdocs serve
```

## 🌐 Despliegue en GitHub Pages

```bash
mkdocs build
ghp-import -n -p -f site
```


## 🧪 Créditos y licencias

Sitio creado por @danielzamo — Proyecto de autoestudio.


