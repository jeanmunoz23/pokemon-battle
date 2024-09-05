# Pokémon Battle Backend

Welcome to the Pokémon Battle Backend! This server-side application powers the Pokémon battle game, managing Pokémon data, facilitating battles, and storing battle results.

## Features

- **Database Migrations:** Populates the database with Pokémon data.
- **Pokémon List Endpoint:** Retrieves a list of all available Pokémon.
- **Battle Endpoint:** Initiates battles between selected Pokémon.
- **Battle Results Storage:** Records the outcomes of battles.

## Battle Algorithm

The battle logic is as follows:

- **First Attacker:** Pokémon with higher speed attacks first. If speeds are equal, the Pokémon with higher attack goes first.
- **Damage Calculation:** Damage is calculated as the difference between attack and defense (attack - defense). If attack ≤ defense, the damage is 1.
- **HP Management:** Subtract the damage from the Pokémon's HP.
- **Turn-Based System:** Pokémon battle in turns, and all turns are processed in a single request. The endpoint returns the winner in the same response.
- **Victory Condition:** The Pokémon that reduces the opponent's HP to zero wins. 
- **Note:** Additional type advantages could be implemented but are not required.

## Technologies Used

- **[Nest](https://github.com/nestjs/nest):** A progressive Node.js framework for building efficient and scalable server-side applications.
- **[TypeORM](https://typeorm.io/):** An ORM that supports various SQL databases and can run in Node.js.
- **[SQLite](https://www.sqlite.org/):** A lightweight, disk-based database that doesn't require a separate server process.

## Getting Started

### Prerequisites

Make sure you have Node.js installed on your machine.

### Clone the Repository

```bash
git clone https://github.com/jeanmunoz23/pokemon-battle
cd backend
```

### Install Dependencies

```bash
npm install
```

### Compile and Run the Project

To start the application, use:

```bash
# Development mode
npm run start

# Watch mode
npm run start:dev
```

### Environment Variables

Configure the following environment variables:

- `DATABASE_URL=sqlite://database/pokemon.db`
- `HOST=` (e.g., `localhost`)
- `PORT=` (e.g., `3004`)

## API Endpoints

Ensure the backend service is running and accessible:

- **GET /pokemons**: Retrieve the list of Pokémon.
- **POST /pokemons/battle/:pokemon1Id/:pokemon2Id**: Initiate a battle between two Pokémon.
- **POST /pokemons/reset**: Reset all Pokémon to their initial state.

## Contributing

Feel free to open issues or submit pull requests to contribute to this project. Ensure your code adheres to the project's style guidelines.

## License

This project is licensed under the [MIT License](https://github.com/nestjs/nest/blob/master/LICENSE).