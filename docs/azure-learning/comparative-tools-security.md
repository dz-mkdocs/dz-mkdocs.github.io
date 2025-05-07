
# Herramientas clave de seguridad en Azure

## Tabla comparativa rápida

Tabla comparativa rápida (tipo resumen mental) para ayudar a diferenciar las herramientas claves de seguridad en Azure, especialmente en el contexto del examen AZ-104:

### 🔐 Comparativa rápida de herramientas de seguridad en Azure

|Herramienta| ¿Qué controla?| ¿Nivel de aplicación?| Casos típicos de uso|
|:--        | :--           | :--                  |:--                  |
|RBAC (Role-Based Access Control)| 🔑 Autorización a recursos| Azure Resource Manager (ARM)| Dar acceso a un usuario o grupo solo a lo necesario|
|Conditional Access| 📲 Condiciones de acceso (localización, MFA, riesgo)| Azure AD| Requerir MFA para acceso remoto, bloquear regiones|
|Azure AD Identity Protection| 🔍 Detección de riesgos y respuestas| Azure AD| Bloquear acceso de usuarios comprometidos|
|NSG (Network Security Group)| 🌐 Tráfico de red (IP, puertos)| Nivel red (subred o NIC)| Controlar entrada/salida en una VM o subnet|
|Azure Policy| 🏛️ Gobernanza y cumplimiento| ARM| Impedir creación de VMs en regiones no permitidas, tagging|

### 🧠 Idea mental:

    RBAC = "¿Qué puede hacer este usuario aquí?" (autorizar recursos).

    Conditional Access = "¿Desde dónde y cómo se conecta este usuario?".

    Identity Protection = "¿Este usuario o sesión es riesgosa?".

    NSG = "¿Puede pasar este tráfico por la red?".

    Azure Policy = "¿Está cumpliendo esta acción con las reglas de la organización?".