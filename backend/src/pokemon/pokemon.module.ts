import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pokemon } from './pokemon.entity';
import { BattleResult } from './battle-result.entity';
import { PokemonService } from './pokemon.service';
import { PokemonController } from './pokemon.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Pokemon, BattleResult])],
  providers: [PokemonService],
  controllers: [PokemonController],
})
export class PokemonModule {}
