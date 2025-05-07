```powershell
winget install "PROGRAMA" --accept-package-agreements --accept-source-agreements

```

### Explicación:

- `--accept-package-agreements`: Acepta los acuerdos de licencia del paquete.
- `--accept-source-agreements`: Acepta los términos de uso de la fuente del paquete.

Si el programa requiere privilegios elevados, necesitarás ejecutar PowerShell como administrador. Puedes hacerlo desde una sesión elevada o forzarlo dentro de PowerShell con:

```powershell
Start-Process winget -ArgumentList 'install "PROGRAMA" --accept-package-agreements --accept-source-agreements' -Verb RunAs
```

Si necesitas instalar múltiples programas de forma automatizada, puedes hacer algo como:

```powershell
$apps = @("Mozilla.Firefox", "7zip.7zip") 

foreach ($app in $apps) {
  winget install $app --accept-package-agreements --accept-source-agreements 
}
```

Sí, puedes usar las versiones cortas de las opciones en `winget`:

```powershell
winget install "PROGRAMA" -e -h -q --accept-source-agreements
```
### Explicación:

- `-e`: Exact match (para evitar instalar programas similares con nombres parecidos).
    
- `-h`: Modo silencioso (oculta la interfaz gráfica si la instalación lo permite).
    
- `-q`: Modo silencioso (similar a `-h`, pero depende del instalador).
    
- `--accept-source-agreements`: Acepta los términos de la fuente del paquete.
    

Si necesitas forzar la ejecución con privilegios de administrador:

```powershell
Start-Process winget -ArgumentList 'install "PROGRAMA" -e -h -q --accept-source-agreements' -Verb RunAs

# Si el programa no requiere aceptación de términos de la fuente, puedes probar solo:

winget install "PROGRAMA" -e -h -q
```
