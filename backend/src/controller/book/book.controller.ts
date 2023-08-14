import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { BuyBookDto } from '../../dto/buy-book.dto';
import { BookService } from '../../service/book/book.service';
import { Book } from '../../entity/book/book.entity';
import { Purchase } from '../../entity/purchase/purchase.entity';
@ApiTags('book')
@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get('list')
  @ApiResponse({
    status: 200,
    description: 'Returns list of books.',
    type: [Book],
  })
  async getBooks() {
    return await this.bookService.getBooks();
  }

  @Post('buy')
  @ApiResponse({
    status: 200,
    description: 'The record has been successfully created.',
    type: Purchase,
  })
  @ApiResponse({
    status: 400,
    description: 'Bad Request.',
  })
  async buyBook(@Body() buyBookDto: BuyBookDto) {
    return await this.bookService.buyBook(buyBookDto.userId, buyBookDto.bookId);
  }
}
