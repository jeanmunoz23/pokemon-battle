import React, { useState, useEffect } from "react";
import { Container, Grid, Button, Typography, Box, Alert } from "@mui/material";
import PokemonCard from "./components/PokemonCard";
import PokemonImageCard from "./components/PokemonImageCard";
import { getPokemons, battlePokemons, resetPokemons } from "./services/pokemonService";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [selectedPokemons, setSelectedPokemons] = useState([]);
  const [result, setResult] = useState("");
  const [showResetButton, setShowResetButton] = useState(false);

  useEffect(() => {
    fetchAndUpdatePokemons();
  }, []);

  useEffect(() => {
    const allPokemonsDead = pokemons.every(pokemon => pokemon.hp <= 0);
    setShowResetButton(allPokemonsDead);
  }, [pokemons]);

  const fetchAndUpdatePokemons = async () => {
    const data = await getPokemons();
    setPokemons(data);
    setSelectedPokemons(prevSelected => 
      prevSelected.map(pokemon => 
        data.find(p => p.id === pokemon.id) || pokemon
      )
    );

  };

  const handleSelectPokemon = (pokemon) => {
    setSelectedPokemons((prevSelected) => {
      if (prevSelected.length < 2) {
        return [...prevSelected, pokemon];
      } else {
        const [, second] = prevSelected;
        return [second, pokemon];
      }
    });
  };

  const handleBattle = async () => {
    if (selectedPokemons.length === 2) {
      const [pokemon1, pokemon2] = selectedPokemons;
      try {
        const winner = await battlePokemons(pokemon1.id, pokemon2.id);
        setResult(winner.name ? `${winner.name} wins!` : `These Pokémon don't have enough HP to battle!`);
        await fetchAndUpdatePokemons();
      } catch (error) {
        setResult("Error occurred during the battle.");
      }
    }
  };

  const handleReset = async () => {
    try {
      await resetPokemons();
      await fetchAndUpdatePokemons();
      setResult('')
    } catch (error) {
      setResult("Failed to reset the database.");
    }
  };

  return (
    <Container>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h4" gutterBottom>
          Battle of Pokemon
        </Typography>
        {showResetButton && (
          <Button
            variant="contained"
            color="secondary"
            onClick={handleReset}
          >
            Reset Pokémon
          </Button>
        )}
      </Box>
      <Typography variant="h6">Select your Pokemon</Typography>

      <Grid container spacing={2}>
        {pokemons.map((pokemon) => (
          <Grid
            item
            key={pokemon.id}
            xs={6}
            sm={4}
            md={2}
            alignContent={"center"}
          >
            <PokemonImageCard
              pokemon={pokemon}
              onClick={() => handleSelectPokemon(pokemon)}
            />
          </Grid>
        ))}
      </Grid>

      {result && (
        <Box mt={2}>
          <Alert severity="success">{result}</Alert>
        </Box>
      )}

      {selectedPokemons.length > 0 && (
        <Box display="flex" justifyContent="center" alignItems="center" mt={4}>
          <PokemonCard pokemon={selectedPokemons[0]} />
          {selectedPokemons.length === 2 && (
            <>
              <Box mx={2}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleBattle}
                >
                  Start Battle
                </Button>
              </Box>
              <PokemonCard pokemon={selectedPokemons[1]} />
            </>
          )}
        </Box>
      )}
    </Container>
  );
}

export default App;
