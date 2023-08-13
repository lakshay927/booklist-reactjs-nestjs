import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Purchase } from '../entity/purchase.entity';
import { User } from '../entity/user.entity';
import { Book } from '../entity/book.entity';

@Injectable()
export class BuyBookService {
    constructor(
        @InjectRepository(User) private usersRepository: Repository<User>,
        @InjectRepository(Book) private booksRepository: Repository<Book>,
        @InjectRepository(Purchase) private purchasesRepository: Repository<Purchase>
    ) {}

    async buyBook(userId: number, bookId: number): Promise<any> {
        return this.usersRepository.transaction(async transactionalEntityManager => {
            let user = await transactionalEntityManager.findOne(User, userId);
            if (!user) {
                throw new Error('User not found');
            }

            let book = await transactionalEntityManager.findOne(Book, bookId);
            if (!book) {
                throw new Error('Book not found');
            }

            // Implement more business logic like checking user balance, book availability, etc.

            let purchase = new Purchase();
            purchase.user = user;
            purchase.book = book;
            await transactionalEntityManager.save(Purchase, purchase);
            
            return purchase;
        });
    }
}
