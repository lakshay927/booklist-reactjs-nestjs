import { Test, TestingModule } from '@nestjs/testing';
import { BuyBookController } from './buy-book.controller';

describe('BuyBookController', () => {
  let controller: BuyBookController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BuyBookController],
    }).compile();

    controller = module.get<BuyBookController>(BuyBookController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
