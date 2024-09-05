import React from 'react';
import { Card, CardContent, Typography, LinearProgress, Tooltip, Box } from '@mui/material';

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

const PokemonCard = ({ pokemon }) => {
  // Normalización basada en un rango de 0-100
  const normalise = (value) => Math.min(100, Math.max(0, (value / 10) * 100));

  return (
    <Card sx={{ width: 300, height: 350 }}>
      <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img src={pokemon.imageUrl} alt={pokemon.name} style={{ width: '100px', height: '100px' }} />
        <Typography variant="h6" gutterBottom>{pokemon.name}</Typography>

        <Box sx={{ width: '100%', mb: 1 }}>
          <Typography>HP</Typography>
          <Tooltip title={`${pokemon.hp}`} placement="top">
            <div>
              <LinearProgressWithLabel variant="determinate" value={normalise(pokemon.hp)} />
            </div>
          </Tooltip>
        </Box>

        <Box sx={{ width: '100%', mb: 1 }}>
          <Typography>Attack</Typography>
          <LinearProgressWithLabel variant="determinate" value={normalise(pokemon.attack)} />
        </Box>

        <Box sx={{ width: '100%', mb: 1 }}>
          <Typography>Defense</Typography>
          <LinearProgressWithLabel variant="determinate" value={normalise(pokemon.defense)} />
        </Box>

        <Box sx={{ width: '100%' }}>
          <Typography>Speed</Typography>
          <LinearProgressWithLabel variant="determinate" value={normalise(pokemon.speed)} />
        </Box>
      </CardContent>
    </Card>
  );
};

export default PokemonCard;
