# Pokémon Battle Frontend

Welcome to the Pokémon Battle Frontend! This is a React-based web application that allows users to battle Pokémon and view their stats. 

## Features

- **Pokémon Selection:** Choose up to two Pokémon to battle from a list of available Pokémon.
- **Battle Mechanics:** Simulate a battle between selected Pokémon based on their speed and attack stats.
- **Reset Functionality:** Reset all Pokémon to their initial state if all have been defeated.
- **Responsive Design:** Designed to be responsive and user-friendly across devices.

## Technologies Used

- **React:** Frontend framework for building user interfaces.
- **Material-UI:** React components for faster and easier web development.
- **Axios:** Promise-based HTTP client for making requests to the backend.
- **JavaScript:** Programming language used in development.

## Setup and Installation

### Prerequisites

- Node.js
- npm (or yarn)

### Clone the Repository

```bash
git clone https://github.com/your-username/pokemon-battle.git
cd frontend
```

### Install Dependencies

```bash
npm install
```

### Run the Application

```bash
npm start
```

Visit `http://localhost:3000` o `http://localhost:3001` in your browser to view the application.

## Available Scripts

- **`npm start`**: Runs the app in development mode.
- **`npm build`**: Builds the app for production to the `build` folder.
- **`npm test`**: Runs the test suite.
- **`npm run lint`**: Lints the codebase with ESLint.
- **`npm run format`**: Formats the codebase with Prettier.

## Folder Structure

```
src/
  components/      # Reusable components
  services/        # API service functions
  styles/          # Global styles
  App.tsx          # Main application component
  index.tsx        # Entry point of the application
```

## API Endpoints

Ensure that the backend service is running and accessible. The API endpoints used by the frontend are:

- **GET /pokemons**: Retrieve the list of Pokémon.
- **POST /pokemons/battle/:pokemon1Id/:pokemon2Id**: Initiate a battle between two Pokémon.
- **POST /pokemons/reset**: Reset all Pokémon to their initial state.

## Contributing

Feel free to open issues or submit pull requests to contribute to this project. Please ensure your code follows the project's style guidelines.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

