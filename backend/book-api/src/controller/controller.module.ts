import { Module } from '@nestjs/common';
import { BuyBookController } from './buy-book/buy-book.controller';

@Module({
  controllers: [BuyBookController]
})
export class ControllerModule {}
