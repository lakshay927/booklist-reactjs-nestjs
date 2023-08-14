import { Module } from '@nestjs/common';
import { BookController } from './book/book.controller';
import { ServiceModule } from '../service/service.module'; // Import this

@Module({
  imports: [ServiceModule], // Add this line
  controllers: [BookController],
})
export class ControllerModule {}
