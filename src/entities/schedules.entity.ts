import { Entity, PrimaryColumn, Column, ManyToOne } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Properties } from './properties.entity';
import { Users } from './users.entity';

@Entity()
export class Schedules {
  @PrimaryColumn('uuid')
  readonly id: string;

  @Column({ type: 'date' })
  date: string;

  @Column({ type: 'time' })
  hour: string;

  @ManyToOne(() => Properties, (property) => property.schedules)
  property: Properties;

  @ManyToOne(() => Users, (user) => user.schedules, { eager: true })
  user: Users;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
