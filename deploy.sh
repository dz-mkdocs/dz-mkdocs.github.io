#!/bin/bash

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Moverse a ese directorio
cd "$SCRIPT_DIR"

# Inicializar la variable con el path actual
ACTUAL_PWD="$SCRIPT_DIR"

echo -e "[$(date)] Estoy en el \$PWD: ${ACTUAL_PWD} <-------------\n"
sleep 3

# Asegúrate de estar en la raíz del proyecto
echo "[$(date)] Comprobando si estamos en la raíz del proyecto..."
if [ ! -f "mkdocs.yml" ]; then
  echo "¡Error! No se encuentra el archivo mkdocs.yml en el directorio actual."
  exit 1
fi

# Confirmar cambios y subir a la rama 'main'
echo "[$(date)] Añadiendo cambios al repositorio..."
#git add .
#git commit -m "Actualización de contenido"
#git push origin main
git add .; git commit -m "[$(date)] Actualización de contenido"; git push 

# Construir el sitio con MkDocs
echo "Generando sitio estático..."
mkdocs build

# Desplegar a GitHub Pages
echo "Desplegando a GitHub Pages..."
#ghp-import -n -p -f site
mkdocs gh-deploy

echo "Despliegue completado."

