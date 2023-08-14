import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, EntityManager } from 'typeorm';
import { Purchase } from '../../entity/purchase/purchase.entity';
import { User } from '../../entity/user/user.entity';
import { Book } from '../../entity/book/book.entity';

@Injectable()
export class BookService {
  constructor(
    private readonly entityManager: EntityManager,
    @InjectRepository(User) private usersRepository: Repository<User>,
    @InjectRepository(Book) private booksRepository: Repository<Book>,
    @InjectRepository(Purchase)
    private purchasesRepository: Repository<Purchase>,
  ) {}

  async getBooks(): Promise<Book[]> {
    return this.booksRepository.find();
  }

  async buyBook(userId: number, bookId: number): Promise<any> {
    return this.entityManager.transaction(
      async (transactionalEntityManager) => {
        let user = await transactionalEntityManager.findOne(User, {
          where: { id: userId },
        });
        if (!user) {
          throw new Error('User not found');
        }

        let book = await transactionalEntityManager.findOne(Book, {
          where: { id: bookId },
        });
        if (!book) {
          throw new Error('Book not found');
        }

        // Implement more business logic if needed

        let purchase = new Purchase();
        purchase.user = user;
        purchase.book = book;
        await transactionalEntityManager.save(Purchase, purchase);

        return purchase;
      },
    );
  }
}
