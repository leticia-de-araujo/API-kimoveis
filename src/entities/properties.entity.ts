import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Addresses } from './addresses.entity';
import { Categories } from './categories.entity';
import { Schedules } from './schedules.entity';

@Entity()
export class Properties {
  @PrimaryColumn('uuid')
  readonly id: string;

  @Column({ default: false })
  sold: boolean;

  @Column({ type: 'decimal', precision: 12, scale: 2 })
  value: number;

  @Column({ type: 'integer' })
  size: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToOne(() => Addresses, (address) => address.id, { eager: true })
  @JoinColumn()
  address: Addresses;

  @ManyToOne(() => Categories, (category) => category.properties, {
    eager: true,
  })
  category: Categories;

  @OneToMany(() => Schedules, (schedules) => schedules.property)
  schedules: Schedules[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
