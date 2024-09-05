# Backend de Batalla de Pokémon

¡Bienvenido al Backend de Batalla de Pokémon! Esta aplicación del lado del servidor impulsa el juego de batalla de Pokémon, gestionando los datos de los Pokémon, facilitando las batallas y almacenando los resultados de las batallas.

## Características

- **Migraciones de Base de Datos:** Población de la base de datos con datos de Pokémon.
- **Endpoint de Lista de Pokémon:** Recupera una lista de todos los Pokémon disponibles.
- **Endpoint de Batalla:** Inicia batallas entre los Pokémon seleccionados.
- **Almacenamiento de Resultados de Batalla:** Registra los resultados de las batallas.

## Algoritmo de Batalla

La lógica de la batalla es la siguiente:

- **Primer Atacante:** El Pokémon con mayor velocidad ataca primero. Si las velocidades son iguales, el Pokémon con mayor ataque va primero.
- **Cálculo del Daño:** El daño se calcula como la diferencia entre ataque y defensa (ataque - defensa). Si ataque ≤ defensa, el daño es 1.
- **Gestión de HP:** Resta el daño del HP del Pokémon.
- **Sistema Basado en Turnos:** Los Pokémon pelean por turnos, y todos los turnos se procesan en una sola solicitud. El endpoint devuelve al ganador en la misma respuesta.
- **Condición de Victoria:** El Pokémon que reduzca el HP del oponente a cero gana. 
- **Nota:** Se podrían implementar ventajas de tipo adicionales, pero no son requeridas.

## Tecnologías Utilizadas

- **[Nest](https://github.com/nestjs/nest):** Un framework progresivo para Node.js que permite construir aplicaciones del lado del servidor eficientes y escalables.
- **[TypeORM](https://typeorm.io/):** Un ORM que soporta diversas bases de datos SQL y puede ejecutarse en Node.js.
- **[SQLite](https://www.sqlite.org/):** Una base de datos ligera basada en disco que no requiere un proceso de servidor separado.

## Configuración e Instalación

### Prerrequisitos

Asegúrate de tener Node.js instalado en tu máquina.

### Clonar el Repositorio

```bash
git clone https://github.com/jeanmunoz23/pokemon-battle
cd backend
```

### Instalar Dependencias

```bash
npm install
```

### Compilar y Ejecutar el Proyecto

Para iniciar la aplicación, usa:

```bash
# Modo de desarrollo
npm run start

# Modo de observación
npm run start:dev
```

### Variables de Entorno

Configura las siguientes variables de entorno:

- `DATABASE_URL=sqlite://database/pokemon.db`
- `HOST=` (por ejemplo, `localhost`)
- `PORT=` (por ejemplo, `3004`)

## Endpoints de la API

Asegúrate de que el servicio backend esté en funcionamiento y accesible:

- **GET /pokemons**: Recupera la lista de Pokémon.
- **POST /pokemons/battle/:pokemon1Id/:pokemon2Id**: Inicia una batalla entre dos Pokémon.
- **POST /pokemons/reset**: Restablece todos los Pokémon a su estado inicial.

## Contribuyendo

Siéntete libre de abrir problemas o enviar solicitudes de extracción para contribuir a este proyecto. Asegúrate de que tu código siga las guías de estilo del proyecto.

## Licencia

Este proyecto está licenciado bajo la [Licencia MIT](https://github.com/nestjs/nest/blob/master/LICENSE).