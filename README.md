# Mastermind Battle Online 🎮

Mastermind Battle Online es una versión moderna y digital del clásico juego de mesa Mastermind, desarrollada con tecnologías web modernas para ofrecer una experiencia de juego intuitiva y atractiva.

## 🎯 Sobre el Juego

Mastermind es un juego de deducción lógica donde un jugador (el "codificador") crea un código secreto de 4 dígitos, y el otro jugador (el "descifrador") intenta adivinar el código en el menor número de intentos posible. Después de cada intento, el codificador proporciona pistas sobre qué tan cerca está el descifrador de adivinar el código:

- 🔴 Un punto rojo (muerto) indica que un dígito está en la posición correcta
- ⚪ Un punto blanco (herido) indica que un dígito está en el código pero en una posición incorrecta

## ✨ Características Únicas de Nuestra Versión

- 🎨 Interfaz moderna y minimalista con diseño responsivo
- 📱 Experiencia de juego optimizada para dispositivos móviles y de escritorio
- 🏆 Sistema de seguimiento de victorias y derrotas
- 🎯 Tablero de clasificación público para competir con otros jugadores
- 🎮 Controles intuitivos con soporte para teclado y pantalla táctil
- 🌙 Modo oscuro/claro para una mejor experiencia visual

## 🚀 Cómo Jugar

1. Visita [Mastermind Battle Online](https://mastermind-battle-online.vercel.app/)
2. Haz clic en "Jugar ahora" para comenzar una nueva partida
3. Intenta adivinar el código secreto de 4 dígitos
4. Usa las pistas (muertos y heridos) para deducir el código correcto
5. ¡Gana adivinando el código en menos de 10 intentos!

## 🎮 Reglas del Juego

- El código secreto consta de 4 dígitos del 0 al 9
- Cada dígito solo puede aparecer una vez en el código
- Tienes 10 intentos para adivinar el código
- Después de cada intento, recibirás pistas:
  - 🔴 Muerto: Un dígito está en la posición correcta
  - ⚪ Herido: Un dígito está en el código pero en una posición incorrecta

## 🛠️ Tecnologías Utilizadas

- [Astro](https://astro.build) - Framework web moderno para sitios estáticos
- [TypeScript](https://www.typescriptlang.org/) - Superset de JavaScript con tipado estático
- [Clerk](https://clerk.com) - Autenticación y gestión de usuarios
- [CSS Moderno](https://developer.mozilla.org/en-US/docs/Web/CSS) - Utilizando características modernas como Grid, Flexbox y Variables CSS

## 🔐 Autenticación con Clerk

Mastermind Battle Online utiliza [Clerk](https://clerk.com) para manejar la autenticación de usuarios de manera segura y eficiente. Clerk nos proporciona:

### Características Implementadas
- 🔑 Inicio de sesión con múltiples proveedores (Google, GitHub, etc.)
- 👤 Gestión de perfiles de usuario
- 🔒 Protección de rutas privadas
- 🌐 Soporte para múltiples idiomas (implementado en español)
- 🎨 Temas personalizados para los componentes de autenticación

### Integración Técnica
La integración con Clerk se realiza a través de:

1. **Componentes de Clerk para Astro**
   ```astro
   import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/astro/components";
   ```

2. **Configuración en astro.config.mjs**
   ```javascript
   import clerk from "@clerk/astro";
   import { esES } from "@clerk/localizations";

   export default defineConfig({
     integrations: [
       clerk({
         localization: esES,
       }),
     ],
   });
   ```

3. **Protección de Rutas API**
   ```typescript
   // Ejemplo de ruta API protegida
   export const GET: APIRoute = async ({locals, request}) => {
     const user = await locals.currentUser();
     if (!user?.id) {
       return new Response(
         JSON.stringify({ error: 'No autorizado' }),
         { status: 401 }
       );
     }
     // ... lógica de la API
   };
   ```

### Flujo de Autenticación
1. Los usuarios pueden iniciar sesión a través del botón "Iniciar Sesión" en la barra de navegación
2. Se muestra un modal de inicio de sesión personalizado con el tema de la aplicación
3. Una vez autenticado, el usuario puede:
   - Ver su perfil a través del botón de usuario
   - Acceder a funcionalidades protegidas
   - Gestionar su cuenta y preferencias

### Seguridad
- Todas las sesiones están protegidas con tokens JWT
- Las rutas API están protegidas contra acceso no autorizado
- Los datos sensibles nunca se almacenan en el cliente
- Se implementan las mejores prácticas de seguridad de Clerk

## 🛠️ Desarrollo Local

```bash
# Clonar el repositorio
git clone https://github.com/yeraldev/mastermind-battle-online.git

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build
```

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor, lee [CONTRIBUTING.md](CONTRIBUTING.md) para detalles sobre nuestro código de conducta y el proceso para enviarnos pull requests.

## 💻 Repositorio 

- [Mastermind Battle Online](https://github.com/yeraldev/mastermind-battle-online)
- [Servidor BackEnd](https://github.com/luisneyra93/MasterMind-Battle)

## 🧑‍💻 Colaboradores

- [Luis Neyra](https://github.com/luisneyra93)
- [Yerald Rivero](https://github.com/yeraldev)