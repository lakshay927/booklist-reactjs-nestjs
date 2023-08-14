import { ApiProperty } from '@nestjs/swagger';

export class BuyBookDto {
  @ApiProperty({ description: 'The ID of the user' })
  userId: number;

  @ApiProperty({ description: 'The ID of the book' })
  bookId: number;
}
