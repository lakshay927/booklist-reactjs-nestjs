import { Test, TestingModule } from '@nestjs/testing';
import { BuyBookService } from './buy-book.service';

describe('BuyBookService', () => {
  let service: BuyBookService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BuyBookService],
    }).compile();

    service = module.get<BuyBookService>(BuyBookService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
