import { Module } from '@nestjs/common';
import { UserService } from './user/user.service';
import { BookService } from './book/book.service';
import { PurchaseService } from './purchase/purchase.service';

@Module({
  providers: [UserService, BookService, PurchaseService]
})
export class EntityModule {}
