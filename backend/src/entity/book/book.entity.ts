// src/entity/book/book.entity.ts

import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Purchase } from '../purchase/purchase.entity';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @Column({ length: 250 })
  @ApiProperty()
  title: string;

  @Column('float')
  @ApiProperty()
  price: number;

  @Column('float')
  discount: number;

  @OneToMany(() => Purchase, (purchase) => purchase.book)
  @ApiProperty({ type: () => Purchase, isArray: true }) // specify type if NestJS can't infer it
  purchases: Purchase[];
}
