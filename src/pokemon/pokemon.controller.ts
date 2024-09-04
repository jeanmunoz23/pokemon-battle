import { Controller, Get, Param } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { Pokemon } from './pokemon.entity';
import { BattleResult } from './battle-result.entity';

@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Get()
  findAll(): Promise<Pokemon[]> {
    return this.pokemonService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Pokemon> {
    return this.pokemonService.findOne(id);
  }

  @Get('battle/:pokemon1Id/:pokemon2Id')
  battle(
    @Param('pokemon1Id') pokemon1Id: string,
    @Param('pokemon2Id') pokemon2Id: string,
  ): Promise<Pokemon> {
    return this.pokemonService.battle(pokemon1Id, pokemon2Id);
  }

  @Get('battle-history')
  getBattleHistory(): Promise<BattleResult[]> {
    return this.pokemonService.getBattleHistory();
  }
}
