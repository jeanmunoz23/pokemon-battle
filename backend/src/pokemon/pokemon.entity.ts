import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Pokemon {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column('int')
  attack: number;

  @Column('int')
  defense: number;

  @Column('int')
  hp: number;

  @Column('int')
  speed: number;

  @Column()
  type: string;

  @Column()
  imageUrl: string;
}
