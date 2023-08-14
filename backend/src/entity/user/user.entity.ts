// src/entity/user/user.entity.ts

import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Purchase } from '../purchase/purchase.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @Column({ length: 250 })
  @ApiProperty()
  username: string;

  @Column({ length: 250 })
  @ApiProperty({ description: 'The password of the user', writeOnly: true })
  password: string;

  //relation between User and Purchase:
  @OneToMany(() => Purchase, (purchase) => purchase.user)
  @ApiProperty({ type: () => Purchase, isArray: true })
  purchases: Purchase[];
}
