# Alternativas de SSG

Existen muchos generadores de sitios estáticos (SSG) y temas disponibles (sean orientados esclusivamente a la documentación técnica o no), elegir el más adecuado para tu stack tecnológico puede ser una decisión difícil. Si no estás seguro de que _Material for [MkDocs]_ sea la solución correcta para ti, esta sección ayuda a evaluar soluciones alternativas.

## Docusaurus

[Docusaurus], de Facebook, es un generador de documentación muy popular y una buena elección si tú o tu empresa ya están utilizando React para construir sitios. Genera una aplicación de una sola página, lo cual es fundamentalmente diferente del sitio que genera Material for [MkDocs].

**Ventajas**

- Muy potente, personalizable y extensible  
- Ofrece muchos componentes útiles para la escritura técnica  
- Ecosistema amplio y respaldado por Facebook

**Desafíos**

- Curva de aprendizaje alta, se requiere conocimiento de JavaScript  
- Ecosistema JavaScript volátil, mantenimiento elevado  
- Requiere más tiempo para comenzar

## Jekyll

[Jekyll] es uno de los generadores de sitios estáticos más maduros y extendidos, escrito en Ruby. No está enfocado específicamente en documentación técnica, y tiene muchos temas entre los que elegir, lo cual puede ser abrumador.

**Ventajas**

- Altamente probado, ecosistema sólido, gran variedad de temas  
- Muy bueno para blogs (permalinks, etiquetas, etc.)  
- Genera un sitio optimizado para SEO, similar a [MkDocs]

**Desafíos**

- No está orientado a documentación técnica por defecto  
- Capacidades Markdown limitadas en comparación con Python Markdown  
- Requiere más tiempo para poner en marcha

## Sphinx

Sphinx es un generador de sitios estáticos orientado específicamente a generar documentación de referencia. Ofrece capacidades potentes que [MkDocs] no incluye. Usa reStructuredText, un formato similar a Markdown que algunos consideran más complejo.

**Ventajas**

- Muy potente, personalizable y extensible  
- Genera documentación desde docstrings en Python  
- Ecosistema amplio, adoptado por muchos proyectos en Python

**Desafíos**

- Curva de aprendizaje alta, sintaxis de reStructuredText compleja  
- Buscador menos potente que el de [MkDocs]  
- Requiere más tiempo para comenzar

> Si consideras usar Sphinx para documentación de referencia, puedes probar **mkdocstrings**, un framework basado en [MkDocs] que ofrece funcionalidades similares a Sphinx.

## GitBook

GitBook es una solución de documentación alojada, que genera un sitio atractivo y funcional a partir de archivos Markdown en tu repositorio de GitHub. Anteriormente fue software libre, pero pasó a ser de código cerrado.

**Ventajas**

- Solución hospedada, requiere pocos conocimientos técnicos  
- Dominios personalizados, autenticación y funciones empresariales  
- Colaboración en equipo muy optimizada

**Desafíos**

- Código cerrado, no gratuito para proyectos propietarios  
- Markdown limitado, no tan avanzado como Python Markdown  
- Muchos proyectos Open Source migraron fuera de GitBook

> Muchos usuarios migraron de GitBook a Material for [MkDocs] para mantener el control y propiedad de su documentación, prefiriendo una solución abierta.

## Zola

Zola es un generador de sitios estáticos muy rápido, escrito en Rust. Destaca por su rendimiento, simplicidad y uso directo de Markdown. Ofrece soporte integrado para resaltado de sintaxis y taxonomías.

**Ventajas**

- Velocidades de construcción extremadamente rápidas gracias a Rust  
- Binario único sin dependencias  
- Ideal para sitios simples o centrados en contenido

**Desafíos**

- Ecosistema de plugins limitado  
- El lenguaje de plantillas (Tera) puede ser restrictivo  
- Menos apto para proyectos de documentación complejos

## Hugo

Hugo es uno de los generadores más rápidos y populares, escrito en Go. Es flexible y tiene muchos temas disponibles. Es una opción sólida tanto para blogs como para documentación.

**Ventajas**

- Velocidad sobresaliente incluso en sitios grandes  
- Organización de contenido y tematización muy flexibles  
- Comunidad grande y activa, con muchos temas

**Desafíos**

- Curva de aprendizaje más empinada en plantillas y estructura  
- No está orientado a documentación técnica de forma nativa  
- Para funcionalidades avanzadas, puede requerir soluciones personalizadas

## Next.js

Next.js es un framework basado en React para construir sitios web tanto estáticos como dinámicos. Permite experiencias de documentación altamente interactivas, aunque no está enfocado exclusivamente en documentación.

**Ventajas**

- Flexibilidad total con componentes React y rutas dinámicas  
- Ideal para mezclar documentación, UI de apps y datos dinámicos  
- Soporte empresarial y despliegue fácil con Vercel

**Desafíos**

- Alta complejidad, no es una solución "plug-and-play"  
- Requiere conocimientos avanzados de React y JavaScript  
- Excesivo para documentación estática sencilla

## 📊 Tabla comparativa resumen

| Generador     | Lenguaje Base | Facilidad de uso | Velocidad | Enfoque en Docs Técnicas | Requiere JS/React | Código Abierto |
|---------------|---------------|------------------|-----------|---------------------------|--------------------|----------------|
| **[MkDocs]**    | Python        | Alta             | Alta      | ✅ Muy fuerte             | ❌ No              | ✅ Sí          |
| **[Docusaurus]**| JavaScript    | Media-baja       | Media     | ✅ Sí (SPA)               | ✅ Sí              | ✅ Sí          |
| **[Jekyll]**    | Ruby          | Media            | Media     | ⚠️ Limitado               | ❌ No              | ✅ Sí          |
| **[Sphinx]**    | Python        | Baja             | Media     | ✅ Fuerte en referencia    | ❌ No              | ✅ Sí          |
| **[GitBook]**   | Web / JS      | Muy alta         | Alta      | ⚠️ Limitado (Markdown)    | ❌ No              | ❌ No (cerrado)|
| **[Zola]**      | Rust          | Alta             | Muy alta  | ⚠️ Básico                 | ❌ No              | ✅ Sí          |
| **[Hugo]**      | Go            | Media            | Muy alta  | ⚠️ No específico          | ❌ No              | ✅ Sí          |
| **[Next.js]**   | JavaScript    | Baja             | Alta      | ✅ Avanzado e interactivo | ✅ Sí              | ✅ Sí          |

<!-- Fin del contenido Markdown -->

[Docusaurus]: https://docusaurus.io/

[React]: https://reactjs.org/

[single page application]: https://en.wikipedia.org/wiki/Single-page_application

[Docz]: https://www.docz.site/

[Gatsby]: https://www.gatsbyjs.com/

[VuePress]: https://vuepress.vuejs.org/

[Docsify]: https://docsify.js.org/

[GitBook]: https://www.gitbook.com/

[Jekyll]: https://jekyllrb.com/

[Sphinx]: https://www.sphinx-doc.org/en/master/

