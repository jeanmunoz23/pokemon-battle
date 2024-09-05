# Frontend de Batalla de Pokémon

¡Bienvenido al Frontend de Batalla de Pokémon! Esta es una aplicación web basada en React que permite a los usuarios batallar con Pokémon y ver sus estadísticas.

## Características

- **Selección de Pokémon:** Elige hasta dos Pokémon para batallar de una lista de Pokémon disponibles.
- **Mecánicas de Batalla:** Simula una batalla entre los Pokémon seleccionados basada en sus estadísticas de velocidad y ataque.
- **Funcionalidad de Reinicio:** Restablece todos los Pokémon a su estado inicial si todos han sido derrotados.
- **Diseño Adaptativo:** Diseñado para ser adaptable y fácil de usar en diferentes dispositivos.

## Tecnologías Utilizadas

- **React:** Framework frontend para construir interfaces de usuario.
- **Material-UI:** Componentes de React para un desarrollo web más rápido y fácil.
- **Axios:** Cliente HTTP basado en promesas para realizar solicitudes al backend.
- **JavaScript:** Lenguaje de programación principal utilizado en el desarrollo.

## Configuración e Instalación

### Prerrequisitos

- Node.js
- npm (or yarn)

### Clonar el Repositorio

```bash
git clone https://github.com/jeanmunoz23/pokemon-battle
cd frontend
```

### Instalar Dependencias

```bash
npm install
# o
yarn install
```

### Ejecutar la Aplicación

```bash
npm start
# o
yarn start
```

Visita `http://localhost:3000` o `http://localhost:3001` en tu navegador para ver la aplicación.

## Scripts Disponibles

- **`npm start`**: Ejecuta la aplicación en modo de desarrollo.
- **`npm build`**: Compila la aplicación para producción en la carpeta `build`.
- **`npm test`**: Ejecuta el conjunto de pruebas.
- **`npm run lint`**: Analiza el código con ESLint.
- **`npm run format`**: Formatea el código con Prettier.

## Estructura de Carpetas

```
src/
  components/      # Componentes reutilizables
  services/        # Funciones de servicio API
  styles/          # Estilos globales
  App.tsx          # Componente principal de la aplicación
  index.tsx        # Punto de entrada de la aplicación
```

## Endpoints de API

Asegúrate de que el backend esté en funcionamiento y accesible según la configuración de las variables de entorno. 
Los endpoints utilizados por el frontend son:

- **GET /pokemons**: Recupera la lista de Pokémon.
- **POST /pokemons/battle/:pokemon1Id/:pokemon2Id**: Inicia una batalla entre dos Pokémon.
- **POST /pokemons/reset**: Restablece todos los Pokémon a su estado inicial.

## Contribuyendo

Siéntete libre de abrir problemas o enviar solicitudes de extracción para contribuir a este proyecto. Asegúrate de que tu código siga las guías de estilo del proyecto.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT - consulta el archivo [LICENSE](LICENSE) para más detalles.