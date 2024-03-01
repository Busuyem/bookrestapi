import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateBookDto } from 'src/books/dtos/CreateBook.dto';
import { BooksService } from 'src/books/services/books/books.service';

@Controller('books')
export class BooksController 
{
    constructor(private booksService: BooksService){}
    
    @Get()
    getAllbooks()
    {

    }

    @Post()
    createBook(@Body() createBookDto: CreateBookDto)
    {
        return this.booksService.createBook(createBookDto);
    }

}
