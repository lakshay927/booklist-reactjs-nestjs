import { Module } from '@nestjs/common';
import { BookService } from './book/book.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../entity/user/user.entity';
import { Book } from '../entity/book/book.entity';
import { Purchase } from '../entity/purchase/purchase.entity';
@Module({
  imports: [TypeOrmModule.forFeature([User, Book, Purchase])],
  providers: [BookService],
  exports: [BookService],
})
export class ServiceModule {}
