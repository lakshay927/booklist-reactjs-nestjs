import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from '../entity/user/user.entity';
import { Book } from '../entity/book/book.entity';
import { Purchase } from '../entity/purchase/purchase.entity';

// import { UserService } from './user/user.service';
import { BookService } from '../service/book/book.service';
import { PurchaseService } from '../service/purchase/purchase.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, Book, Purchase])],
  providers: [BookService, PurchaseService],
  exports: [BookService, PurchaseService, TypeOrmModule],
})
export class EntityModule {}
