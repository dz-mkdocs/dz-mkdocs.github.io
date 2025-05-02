#!/usr/bin/env bash

set -e

echo "🔍 Verificando si estás en una carpeta de proyecto Git..."
if [ ! -d .git ]; then
  echo "❌ No estás en un repositorio Git. Abortando."
  exit 1
fi

# Confirmación antes de borrar o construir
read -p "¿Querés construir el sitio MkDocs ahora? (y/n): " CONFIRM
if [[ "$CONFIRM" != "y" ]]; then
  echo "🚫 Cancelado por el usuario."
  exit 0
fi

echo "🚧 Construyendo sitio con MkDocs..."
mkdocs build

echo "✅ Sitio generado en la carpeta ./site"

read -p "¿Querés hacer commit y push ahora? (y/n): " PUSH_CONFIRM
if [[ "$PUSH_CONFIRM" == "y" ]]; then
  git add .
  git commit -m "📝 Actualización del sitio con MkDocs"
  git push
  echo "🚀 Cambios enviados al remoto."
else
  echo "🛑 Commit/push cancelado. Podés hacerlo luego manualmente."
fi

