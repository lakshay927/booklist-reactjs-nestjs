// src/entity/purchase/purchase.entity.ts

import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Book } from '../book/book.entity';
import { User } from '../user/user.entity';

@Entity()
export class Purchase {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @ManyToOne(() => User, (user) => user.purchases)
  @ApiProperty({ type: () => User }) // specify type if NestJS can't infer it
  user: User;

  @ManyToOne(() => Book, (book) => book.purchases)
  @ApiProperty({ type: () => Book }) // specify type if NestJS can't infer it
  book: Book;

  // Add other properties with @ApiProperty decorators as needed...
}
