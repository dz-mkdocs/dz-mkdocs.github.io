# Alternativas de SSG

Existen muchos generadores de sitios estáticos (SSG) disponibles —algunos orientados exclusivamente a la documentación técnica, otros más generales— y elegir el más adecuado para un stack tecnológico particular puede ser una decisión compleja. En este sitio personal de documentación se utiliza _Material for [MkDocs]_. Si no estás seguro de que esta sea la solución correcta para ti, en esta sección se exploran alternativas destacadas y se justifica la elección realizada para este sitio.

## Sitio [Jamstack]

El sitio [Jamstack].org es el sitio oficial que promueve la arquitectura [Jamstack] (JavaScript, APIs y Markup) para crear sitios web rápidos y seguros.

Como enfoque arquitectónico, [Jamstack] propone una separación clara entre el frontend (estático) y el backend; utiliza HTML pre-generado, APIs y JavaScript para lograr velocidad, seguridad y escalabilidad.

En [jamstack.org/generators] se encuentra un listado actualizado de generadores de sitios estáticos compatibles con esta arquitectura, como [Hugo], [Jekyll] o [Zola], lo cual ayuda a seleccionar herramientas según necesidades concretas.

## ¿Qué es un Generador de Sitios Estáticos?

Un Generador de Sitios Estáticos (SSG, por sus siglas en inglés) es una herramienta que convierte archivos fuente (como Markdown) en páginas HTML listas para ser publicadas en la Web. A diferencia de los CMS tradicionales, no requiere bases de datos ni servidores dinámicos para entregar contenido.

## 📊 Comparativa de algunos SSG

| Generador       | Lenguaje Base | Facilidad de uso | Velocidad | Enfocado a documentaciones técnicas | Requiere JS/React | Código Abierto |
|------------------|----------------|------------------|-----------|---------------------------|--------------------|----------------|
| **[MkDocs]**      | Python          | Alta             | Alta      | ✅ Muy fuerte             | ❌ No              | ✅ Sí          |
| **[Docusaurus]**  | JavaScript      | Media-baja       | Media     | ✅ Sí (SPA)               | ✅ Sí              | ✅ Sí          |
| **[Jekyll]**      | Ruby            | Media            | Media     | ⚠️ Limitado               | ❌ No              | ✅ Sí          |
| **[Sphinx]**      | Python          | Baja             | Media     | ✅ Fuerte en referencia    | ❌ No              | ✅ Sí          |
| **[GitBook]**     | Web / JS        | Muy alta         | Alta      | ⚠️ Limitado (Markdown)    | ❌ No              | ❌ No (cerrado)|
| **[Zola]**        | Rust            | Alta             | Muy alta  | ⚠️ Básico                 | ❌ No              | ✅ Sí          |
| **[Hugo]**        | Go              | Media            | Muy alta  | ⚠️ No específico          | ❌ No              | ✅ Sí          |
| **[Next.js]**     | JavaScript      | Baja             | Alta      | ✅ Avanzado e interactivo | ✅ Sí              | ✅ Sí          |

---

## Docusaurus

**[Docusaurus]**, desarrollado por Facebook, es un generador de documentación muy popular y una buena elección si tú (o tu empresa) ya estás usando React para construir sitios. Genera una aplicación de una sola página ([single page application]), lo cual es una diferencia clave con Material for [MkDocs].

**Ventajas**
- Muy potente, personalizable y extensible  
- Incluye componentes específicos para documentación técnica  
- Amplio ecosistema respaldado por Meta

**Desafíos**
- Requiere conocimientos sólidos de JavaScript  
- Ecosistema más complejo y propenso a cambios  
- Puede demorar más tiempo inicial de configuración

---

## Jekyll

**[Jekyll]** es uno de los SSG más antiguos y ampliamente utilizados. Escrito en Ruby, está más orientado a blogs que a documentación técnica, aunque se puede adaptar para ello.

**Ventajas**
- Madurez del ecosistema, amplia variedad de temas  
- Muy bueno para blogs: soporte nativo de etiquetas, permalinks, etc.  
- Compatible con GitHub Pages sin necesidad de configuración adicional

**Desafíos**
- Enfoque limitado hacia documentación técnica  
- Markdown menos flexible que el de [MkDocs]  
- Configuración inicial puede resultar extensa

---

## Sphinx

**[Sphinx]** está diseñado específicamente para generar documentación técnica detallada y es ampliamente adoptado por proyectos Python.

**Ventajas**
- Potente y personalizable  
- Generación automática de documentación desde docstrings  
- Soporte para múltiples salidas: HTML, PDF, ePub, etc.

**Desafíos**
- Sintaxis reStructuredText menos accesible que Markdown  
- Curva de aprendizaje pronunciada  
- El buscador es menos intuitivo que el de [MkDocs]

> Si buscas capacidades similares pero prefieres Markdown, puedes considerar **mkdocstrings**, una solución basada en [MkDocs] con soporte para documentación automática.

---

## GitBook

**[GitBook]** ofrece una solución de documentación alojada, basada en Markdown. Fue originalmente de código abierto, pero ahora es cerrado y orientado al mercado empresarial.

**Ventajas**
- Requiere conocimientos técnicos mínimos  
- Ofrece funciones colaborativas avanzadas  
- Interfaz moderna y lista para usar

**Desafíos**
- No es de código abierto  
- Markdown limitado comparado con otras soluciones  
- Restricciones para proyectos privados sin suscripción

> Muchos usuarios han migrado de [GitBook] a Material for [MkDocs] para mantener mayor control y libertad sobre su documentación.

---

## Zola

**[Zola]** es un generador extremadamente rápido, escrito en Rust. Ideal para sitios centrados en contenido simple, con un flujo de trabajo muy directo.

**Ventajas**
- Velocidad de compilación muy alta  
- Binario único sin dependencias externas  
- Soporte nativo para taxonomías y resaltado de sintaxis

**Desafíos**
- Comunidad pequeña y ecosistema de temas limitado  
- Su sistema de plantillas (Tera) puede resultar restrictivo  
- No está enfocado en documentación técnica compleja

---

## Hugo

**[Hugo]** es uno de los generadores más potentes y rápidos, usado ampliamente tanto para blogs como para proyectos de documentación.

**Ventajas**
- Excelente rendimiento, incluso con sitios grandes  
- Organización y flexibilidad de contenido excepcionales  
- Amplia comunidad y variedad de temas disponibles

**Desafíos**
- No está diseñado específicamente para documentación técnica  
- Curva de aprendizaje en su sistema de plantillas  
- Requiere personalización adicional para sitios complejos

---

## Next.js

**[Next.js]** es un framework basado en React que permite construir tanto sitios estáticos como dinámicos. Se usa para aplicaciones interactivas y portales de documentación avanzados.

**Ventajas**
- Máxima flexibilidad y control sobre el frontend  
- Permite mezclar UI, contenido dinámico y documentación  
- Integración fluida con Vercel para despliegue continuo

**Desafíos**
- Alta complejidad técnica  
- Dependencia total de React y su ecosistema  
- No es una opción liviana para documentación simple

---

## ¿Por qué se eligió MkDocs?

La decisión de utilizar **[MkDocs]** para generar este sitio, se basa en su enfoque claro y directo en la documentación técnica. Su uso de Markdown, integración con Python y compatibilidad con el tema _Material for MkDocs_ lo hacen una opción ideal para proyectos que priorizan claridad, estructura y eficiencia en el proceso de escritura.

---

[Jamstack]: https://jamstack.org/
[jamstack.org/generators]: https://jamstack.org/generators/
[MkDocs]: https://www.mkdocs.org/
[Docusaurus]: https://docusaurus.io/
[React]: https://reactjs.org/
[single page application]: https://en.wikipedia.org/wiki/Single-page_application
[GitBook]: https://www.gitbook.com/
[Jekyll]: https://jekyllrb.com/
[Sphinx]: https://www.sphinx-doc.org/en/master/
[Zola]: https://www.getzola.org/
[Hugo]: https://gohugo.io/
[Next.js]: https://nextjs.org/
