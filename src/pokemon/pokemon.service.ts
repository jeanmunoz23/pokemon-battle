import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pokemon } from './pokemon.entity';
import * as fs from 'fs';
import * as path from 'path';
import { BattleResult } from './battle-result.entity';

@Injectable()
export class PokemonService {
  constructor(
    @InjectRepository(Pokemon)
    private pokemonRepository: Repository<Pokemon>,
    @InjectRepository(BattleResult)
    private battleResultRepository: Repository<BattleResult>,
  ) {}

  async onModuleInit() {
    const count = await this.pokemonRepository.count();
    if (count === 0) {
      const filePath = path.join(__dirname, '../resources/pokemons.json');
      console.log(filePath);
      try {
        const pokemonsData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        console.log(pokemonsData.pokemon);

        await this.pokemonRepository.save(pokemonsData.pokemon);
      } catch (error) {
        console.error('Error reading or parsing pokemons.json', error);
      }
    }
  }

  findAll(): Promise<Pokemon[]> {
    return this.pokemonRepository.find();
  }

  findOne(id: string): Promise<Pokemon> {
    return this.pokemonRepository.findOneBy({ id });
  }

  async getBattleHistory(): Promise<BattleResult[]> {
    return this.battleResultRepository.find();
  }

  // Método para iniciar una batalla entre dos Pokémon
  async battle(
    pokemon1Id: string,
    pokemon2Id: string,
  ): Promise<Pokemon | null> {
    const pokemon1 = await this.pokemonRepository.findOneBy({ id: pokemon1Id });
    const pokemon2 = await this.pokemonRepository.findOneBy({ id: pokemon2Id });

    if (!pokemon1 || !pokemon2) {
      throw new BadRequestException('Uno o ambos Pokémon no existen');
    }

    // Clonar los objetos para no modificar el estado original
    const p1 = { ...pokemon1 };
    const p2 = { ...pokemon2 };

    // Determinar quién ataca primero basado en la velocidad y luego en el ataque
    let firstAttacker = p1;
    let secondAttacker = p2;

    if (
      p1.speed < p2.speed ||
      (p1.speed === p2.speed && p1.attack < p2.attack)
    ) {
      firstAttacker = p2;
      secondAttacker = p1;
    }
    console.log('init', firstAttacker.name);
    // Batalla
    while (p1.hp > 0 && p2.hp > 0) {
      // First attacker attacks second attacker
      let damage = Math.max(firstAttacker.attack - secondAttacker.defense, 1);
      secondAttacker.hp -= damage;
      await this.pokemonRepository.update(secondAttacker.id, {
        hp: secondAttacker.hp,
      });
      console.log('secondAttacker.hp ', secondAttacker.hp);

      // Check if second attacker is defeated
      if (secondAttacker.hp <= 0) {
        await this.battleResultRepository.save({
          pokemon1Id: p1.id,
          pokemon2Id: p2.id,
          winnerId: firstAttacker.id,
          pokemon1RemainingHp: p1.hp,
          pokemon2RemainingHp: p2.hp,
        });

        return firstAttacker;
      }

      // Second attacker attacks first attacker
      damage = Math.max(secondAttacker.attack - firstAttacker.defense, 1);
      firstAttacker.hp -= damage;
      await this.pokemonRepository.update(firstAttacker.id, {
        hp: firstAttacker.hp,
      });
      console.log('firstAttacker.hp ', firstAttacker.hp);

      // Check if first attacker is defeated
      if (firstAttacker.hp <= 0) {
        await this.battleResultRepository.save({
          pokemon1Id: p1.id,
          pokemon2Id: p2.id,
          winnerId: secondAttacker.id,
          pokemon1RemainingHp: p1.hp,
          pokemon2RemainingHp: p2.hp,
        });
        return secondAttacker;
      }
    }

    return null;
  }
}
