// PokemonImageCard.js
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const PokemonImageCard = ({ pokemon, onClick }) => {
  return (
    <Card onClick={() => onClick(pokemon)}>
      <CardContent style={{ textAlign: 'center' }}>
        <img src={pokemon.imageUrl} alt={pokemon.name} style={{ width: '100px', height: '100px' }} />
        <Typography variant="subtitle1">{pokemon.name}</Typography>
      </CardContent>
    </Card>
  );
};

export default PokemonImageCard;
