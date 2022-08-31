// import { Entity, PrimaryColumn, Column, ManyToOne } from 'typeorm';
// import { v4 as uuid } from 'uuid';
// import { Properties } from '../backupEntities/properties.entity';
// import { Users } from './users.entity';

// @Entity()
// export class Schedules {
//   @PrimaryColumn('uuid')
//   readonly id: string;

//   @Column()
//   date: string;

//   @Column()
//   time: string;

//   @ManyToOne(() => Properties, (property) => property.id, {
//     eager: true,
//   })
//   property: Properties;

//   @ManyToOne(() => Users, (user) => user.id)
//   user: Users;

//   constructor() {
//     if (!this.id) {
//       this.id = uuid();
//     }
//   }
// }
