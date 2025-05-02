# DZ MkDocs (ReadTheDocs version)
  
> Sitio generado con MkDocs; e inicialmente con el tema `material`.
>
> Este sitio está generado con [MkDocs](https://www.mkdocs.org/) y publicado automáticamente en GitHub Pages en:

👉 https://dz-mkdocs.github.io
 
## Estructura (base - inicial mínima) 

_Nota autor:_ La estructura siguiente no es la completa y es solo a modo de referencia, para inicialización de este sitio basado en SSG MkDocs.
                                                                                                                                                                                                                             
Este proyecto sigue la siguiente estructura de carpetas y archivos (inicial/básica):
 
```
./
├── docs/
│   ├── index.md                   # Página principal
│   ├── microsoft-learn/
│   │   └── quiz.md                 # Ejemplo de archivo de tutorial
│   └── assets/
│       └── images/                 # Imágenes usadas en la documentación
├── mkdocs.yml                      # Archivo de configuración de MkDocs
├── requirements.txt                # Dependencias del proyecto
└── .gitignore                      # Archivos y carpetas ignorados por Git
```

_Donde:_

- `docs/`: Contenido del sitio en Markdown.
- `overrides/`: Personalizaciones del tema (HTML).
- `mkdocs.yml`: Configuración principal del sitio.
- `.github/workflows/gh-pages.yml`: Despliegue automático en GitHub Pages.
- `site/`: Carpeta generada automáticamente al ejecutar `mkdocs build`.

## Cómo levantar el sitio en local

```bash
git clone ...
cd dz-mkdocs
```

```bash
python -m venv .venv
source .venv/bin/activate

cat <<EOF> requirements.txt
mkdocs
mkdocs-material
mkdocs-minify-plugin
mkdocs-git-revision-date-localized-plugin
mkdocs-redirects
pymdown-extensions
EOF
pip install -r requirements.txt


mkdocs serve
```

El sitio queda disponible en `http://127.0.0.1:8000` .

## Cómo desplegar en GitHub Pages

Cada vez que que se hace push a la rama `main`, GitHub Actions generará y publicará el sitio en la rama `gh-pages`.

👉 `.github/workflows/gh-pages.yml`

## Notas extras

### Cambiar de tema

Para usar otro tema (como `material`):

1. Edita `mkdocs.yml` y reemplaza:
   ```yaml
   theme:
     name: material
   ```
2. Instala el tema (si no está):
   ```bash
   pip install mkdocs-theme-readthedocs
   ```

## Requisitos

Ver `requirements.txt`.

© DZ MkDocs, bajo Licencia MIT
