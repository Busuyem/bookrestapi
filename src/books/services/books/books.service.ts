import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from 'src/typeorm/entities/Book';
import { createBookParams, updateBookParams } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class BooksService 
{
    constructor(@InjectRepository(Book) private bookRepository: Repository<Book>){}

    getAllBooks()
    {
        return this.bookRepository.find();
    }

    createBook(bookDetails: createBookParams)
    {
        const addBook = this.bookRepository.create({...bookDetails, createAt: new Date()});
        return this.bookRepository.save(addBook);
    }

    updateBook(id:number, bookDetails: updateBookParams)
    {
        this.bookRepository.update({id}, {...bookDetails})
    }
}
