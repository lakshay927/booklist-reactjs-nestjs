import { Module } from '@nestjs/common';
import { BuyBookService } from './buy-book/buy-book.service';

@Module({
  providers: [BuyBookService]
})
export class ServiceModule {}
