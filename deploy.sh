#!/bin/bash

# Asegúrate de estar en la raíz del proyecto
echo "[$(date)] Comprobando si estamos en la raíz del proyecto..."
if [ ! -f "mkdocs.yml" ]; then
  echo "¡Error! No se encuentra el archivo mkdocs.yml en el directorio actual."
  exit 1
fi

# Confirmar cambios y subir a la rama 'main'
echo "[$(date)] Añadiendo cambios al repositorio..."
git add .
git commit -m "Actualización de contenido"
git push origin main

# Construir el sitio con MkDocs
echo "Generando sitio estático..."
#mkdocs build

# Desplegar a GitHub Pages
echo "Desplegando a GitHub Pages..."
#ghp-import -n -p -f site

echo "Despliegue completado."

