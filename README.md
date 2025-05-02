# dz-mkdocs

Este repositorio contiene una de mis documentaciones de proyectos y/o tutoriales y tips, generados usando **MkDocs** y el theme **Read the Docs**. La documentación se despliega y versiona utilizando **GitHub Pages**.

## Descripción

Este sitio web sirve como un portal de documentación personal, albergando proyectos, tutoriales y recursos relacionados con temas como:

- **Microsoft Learn**
- **Linux**
- **Redes y Seguridad**
- Y más...

La documentación es generada con **MkDocs**, generador de sitios estáticos para proyectos basados en Markdown, y se despliega usando **GitHub Pages** en la URL:  
[https://dz-mkdocs.github.io](https://dz-mkdocs.github.io).

## Estructura del Proyecto

Este proyecto sigue la siguiente estructura de carpetas y archivos:

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

## Cómo Ejecutar el Proyecto Localmente

Si deseas ejecutar este sitio localmente, puedes hacerlo de la siguiente manera:

1. Clona el repositorio:
   ```bash
   git clone git@github.com:dz-mkdocs/dz-mkdocs.github.io.git 
   cd dz-mkdocs.github.io
   ```

2. Instala las dependencias:
   Si no tienes un entorno virtual de Python configurado, puedes crear uno:
   ```bash
   python3 -m venv .venv
   source .venv/bin/activate  # En Linux/macOS
   .venv\Scripts\activate     # En Windows
   ```

   Luego, instala las dependencias de MkDocs:
   ```bash
   pip install -r requirements.txt
   ```

3. Ejecuta el servidor de desarrollo:
   ```bash
   mkdocs serve
   ```

   El sitio estará disponible en `http://127.0.0.1:8000/`.

## Despliegue en GitHub Pages

1. **Despliegue automático**: Una vez que se realiza un `git push` al repositorio, GitHub Pages automáticamente despliega la última versión de la documentación en la URL configurada (`https://danielzamo.github.io/mkdocs`).

2. **Despliegue manual**: También puedes desplegar manualmente usando `mkdocs gh-deploy`, que sube los archivos generados a la rama `gh-pages` de este repositorio.

   ```bash
   mkdocs gh-deploy
   ```

   Este comando generará el sitio estático y lo publicará en GitHub Pages.

## Personalización

Puedes personalizar el theme y las configuraciones del sitio editando el archivo `mkdocs.yml` y modificando las páginas de Markdown dentro de la carpeta `docs/`.

### Ejemplo de archivo `mkdocs.yml`:

_Nota del autor:_ Ajustar/revisar según corresponda.

```yaml
site_name: MkDocs DZ Docs
theme:
  name: readthedocs

nav:
  - Home: index.md
  - Microsoft Learn:
      - Quiz: microsoft-learn/quiz.md

plugins:
  - search

use_directory_urls: false

repo_url: https://github.com/danielzamo/mkdocs
```

## Requerimientos

- **MkDocs**: [https://www.mkdocs.org/](https://www.mkdocs.org/)
- **Read the Docs theme**: [https://squidfunk.github.io/mkdocs-material/](https://squidfunk.github.io/mkdocs-material/)

Para instalar las dependencias necesarias, puedes ejecutar:

```bash
pip install -r requirements.txt
```

## Contribuciones

Si deseas contribuir a la mejora de la documentación o agregar nuevas secciones, ¡estás invitado a hacerlo! Solo sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una rama con tu cambio: `git checkout -b feature/nueva-seccion`.
3. Realiza tus cambios y haz commit.
4. Haz push a tu rama: `git push origin feature/nueva-seccion`.
5. Abre un pull request.

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo `LICENSE` para más detalles.

