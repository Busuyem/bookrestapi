import { Module } from '@nestjs/common';
import { BooksController } from './controllers/books/books.controller';
import { BooksService } from './services/books/books.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from '../typeorm/entities/Book'

@Module({
  imports: [TypeOrmModule.forFeature([Book])],
  controllers: [BooksController],
  providers: [BooksService]
})
export class BooksModule {}
