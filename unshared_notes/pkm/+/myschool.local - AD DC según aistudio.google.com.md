parents:: [[myschool.local - AD DC según aistudio.google.com]], [[propuesta aistudio.google.com]], [[OU's propuestas por aistudio.google.com]], [[Planificación inicial]], [[myschool.local - AD DC.excalidraw]], [[Propuesta inicial de aistudio - planificación]]

# Notas desde aistudio.google.com

## Caso de uso: Qué pasa si una misma persona (usuario) es alumno y además eventualmente es docente de otra materia?

¡Excelente pregunta! Esto es algo común en entornos educativos y hay varias formas de abordarlo en Active Directory. Aquí te presento las opciones y sus consideraciones:

**Opción 1: Dos Cuentas de Usuario Separadas**

*   **Descripción:** Creas dos cuentas de usuario distintas para la misma persona: una para su rol como alumno y otra para su rol como docente.
*   **Ejemplo:**
    *   `juan.perez_alumno` (en la OU `Usuarios/Alumnos/FP`)
    *   `juan.perez_docente` (en la OU `Usuarios/Docentes`)
*   **Ventajas:**
    *   **Separación Clara de Roles:** Permite aplicar políticas de grupo (GPO) específicas para cada rol de forma independiente. Por ejemplo, el usuario como alumno puede tener restricciones de acceso a ciertas aplicaciones, mientras que el usuario como docente no.
    *   **Seguridad:** Reduce el riesgo de que el usuario abuse de sus permisos de docente cuando está actuando como alumno.
*   **Desventajas:**
    *   **Mayor Mantenimiento:** Requiere gestionar dos cuentas de usuario para la misma persona.
    *   **Confusión para el Usuario:** El usuario debe recordar qué cuenta usar para cada tarea.
    *   **Duplicación de Recursos:** Si el usuario necesita acceder a los mismos recursos en ambos roles, tendrás que asignar permisos a ambas cuentas.

**Opción 2: Una Sola Cuenta de Usuario y Membresía en Grupos**

*   **Descripción:** Creas una sola cuenta de usuario para la persona y la agregas a los grupos correspondientes a sus roles (alumno y docente).
*   **Ejemplo:**
    *   `juan.perez` (en la OU `Usuarios`)
    *   El usuario es miembro del grupo `AlumnosFP` y del grupo `Docentes`.
*   **Ventajas:**
    *   **Menor Mantenimiento:** Solo necesitas gestionar una cuenta de usuario.
    *   **Simplicidad para el Usuario:** El usuario solo necesita recordar una cuenta y contraseña.
*   **Desventajas:**
    *   **Menor Control Granular:** Es más difícil aplicar políticas de grupo (GPO) específicas para cada rol. Si aplicas una GPO a la OU "Usuarios", afectará al usuario tanto en su rol de alumno como de docente.
    *   **Riesgo de Abuso de Permisos:** El usuario podría usar sus permisos de docente cuando está actuando como alumno.

**Opción 3: Una Sola Cuenta de Usuario y Unidades Organizativas Anidadas**

*   **Descripción:** Creas una sola cuenta de usuario y la colocas en una OU "padre" común. Luego, creas enlaces simbólicos (o redirecciones) a esa cuenta desde las OUs de Alumnos y Docentes. **Esta opción es más avanzada y requiere más cuidado.**
*   **Ventajas:**
    *   Centralización de la cuenta.
    *   Posibilidad de aplicar GPOs específicas a cada rol mediante las OUs "enlazadas".
*   **Desventajas:**
    *   Complejidad en la gestión.
    *   Potenciales problemas de replicación y rendimiento si no se implementa correctamente.
    *   No es una práctica común y puede ser confusa para otros administradores.

**Recomendación**

En general, la **Opción 2 (una sola cuenta y membresía en grupos)** es la más sencilla y práctica para la mayoría de los casos, especialmente si no necesitas un control muy granular de los permisos y políticas. Puedes crear GPOs que se apliquen a los grupos "AlumnosFP" y "Docentes" para configurar ajustes específicos para cada rol.

Si necesitas una separación estricta de roles y un control muy granular de los permisos y políticas, la **Opción 1 (dos cuentas separadas)** es la mejor opción, aunque requiere más mantenimiento.

La **Opción 3** es la menos recomendada a menos que tengas una necesidad muy específica y experiencia en la gestión de Active Directory.

**En tu caso específico:**

Dado que el alumnado no es de un nivel muy reglado, y el centro educativo es pequeño, te recomendaría **empezar con la Opción 2 (una sola cuenta y membresía en grupos)**. Si en el futuro necesitas un control más granular, siempre puedes migrar a la Opción 1.

Para implementar la Opción 2:

1.  Crea la cuenta de usuario `juan.perez` en la OU "Usuarios".
2.  Agrega la cuenta al grupo "AlumnosFP".
3.  Agrega la cuenta al grupo "Docentes".
4.  Aplica las GPOs necesarias a los grupos "AlumnosFP" y "Docentes".

¡Espero que esta explicación te sea útil!
