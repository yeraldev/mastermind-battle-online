# Guía de Contribución 🚀

¡Gracias por tu interés en contribuir a Mastermind Battle Online! Este documento proporciona las directrices y el proceso para contribuir al proyecto.

## 📋 Código de Conducta

Al participar en este proyecto, aceptas mantener un ambiente respetuoso y profesional:

- Sé respetuoso y amable con otros contribuidores
- Acepta críticas constructivas
- Enfócate en lo mejor para la comunidad
- Muestra empatía hacia otros miembros de la comunidad

## 🛠️ Configuración del Entorno de Desarrollo

1. Asegúrate de tener instalado:
   - Node.js (versión 18 o superior)
   - npm (incluido con Node.js)
   - Git

2. Haz un fork del repositorio

3. Clona tu fork localmente:
   ```bash
   git clone https://github.com/yeraldev/mastermind-battle-online.git
   cd mastermind-battle-online
   ```

4. Instala las dependencias:
   ```bash
   npm install
   ```

5. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

## 🔄 Proceso de Desarrollo

1. Crea una nueva rama para tu feature o fix:
   ```bash
   git checkout -b feature/nombre-de-tu-feature
   # o
   git checkout -b fix/nombre-del-fix
   ```

2. Realiza tus cambios siguiendo las convenciones de código:
   - Usa TypeScript para todo el código JavaScript
   - Sigue el estilo de código existente
   - Escribe pruebas cuando sea necesario
   - Actualiza la documentación según sea necesario

3. Asegúrate de que tu código pase las pruebas:
   ```bash
   npm run test
   ```

4. Verifica que el código cumpla con los estándares:
   ```bash
   npm run lint
   ```

## 📝 Convenciones de Código

### Estilo de Código
- Usa 2 espacios para la indentación
- Usa punto y coma al final de las declaraciones
- Usa comillas simples para strings
- Usa camelCase para variables y funciones
- Usa PascalCase para componentes y tipos
- Usa kebab-case para nombres de archivos

### Commits
Sigue el formato de commits convencionales:
```
tipo(alcance): descripción

[cuerpo opcional]

[pie opcional]
```

Tipos de commit:
- `feat`: Nueva característica
- `fix`: Corrección de bug
- `docs`: Cambios en documentación
- `style`: Cambios que no afectan el significado del código
- `refactor`: Cambios que no arreglan bugs ni agregan features
- `test`: Agregar o modificar pruebas
- `chore`: Cambios en el proceso de build o herramientas auxiliares

### Pull Requests

1. Actualiza tu rama con la rama principal:
   ```bash
   git fetch origin
   git rebase origin/main
   ```

2. Resuelve cualquier conflicto que pueda surgir

3. Asegúrate de que tu PR:
   - Tiene una descripción clara del cambio
   - Incluye pruebas cuando sea necesario
   - Actualiza la documentación relevante
   - Sigue las convenciones de código
   - Pasa todas las pruebas y el linting

4. Envía tu PR a la rama `main`

## 🎯 Áreas de Contribución

Estamos especialmente interesados en contribuciones en estas áreas:

1. **Mejoras de UI/UX**
   - Mejoras en la accesibilidad
   - Optimizaciones para dispositivos móviles
   - Nuevas animaciones y transiciones

2. **Características del Juego**
   - Nuevos modos de juego
   - Mejoras en el sistema de puntuación
   - Características sociales

3. **Optimizaciones**
   - Mejoras de rendimiento
   - Reducción del tamaño del bundle
   - Optimizaciones de SEO

4. **Documentación**
   - Mejoras en la documentación existente
   - Nuevos ejemplos y tutoriales
   - Traducciones

## 🤝 Proceso de Revisión

1. Un mantenedor revisará tu PR
2. Podría solicitar cambios o mejoras
3. Una vez aprobado, tu PR será mergeado
4. Recibirás crédito en el changelog

## 📚 Recursos Adicionales

- [Documentación de Astro](https://docs.astro.build)
- [Guía de TypeScript](https://www.typescriptlang.org/docs)
- [Guía de Estilo de CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)

## ❓ ¿Necesitas Ayuda?

Si tienes preguntas o necesitas ayuda:
- Abre un issue en GitHub
- Únete a nuestra comunidad en Discord (enlace pendiente)
- Revisa la documentación existente

¡Gracias por contribuir a hacer Mastermind Battle Online mejor! 🎮 