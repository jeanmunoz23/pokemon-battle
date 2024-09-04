import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class BattleResult {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  pokemon1Id: string;

  @Column()
  pokemon2Id: string;

  @Column()
  winnerId: string;

  @Column()
  pokemon1RemainingHp: number;

  @Column()
  pokemon2RemainingHp: number;

  @Column({ type: 'text', default: () => 'CURRENT_TIMESTAMP' })
  battleDate: string;
}
