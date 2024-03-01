import { Controller, Get, Post, Body, Put, Param, ParseIntPipe } from '@nestjs/common';
import { CreateBookDto } from 'src/books/dtos/CreateBook.dto';
import { UpdateBookDto } from 'src/books/dtos/UpdateBook.dto'; 
import { BooksService } from 'src/books/services/books/books.service';

@Controller('books')
export class BooksController 
{
    constructor(private booksService: BooksService){}
    
    @Get()
    getAllbooks()
    {
        const books = this.booksService.getAllBooks();
        return books;
    }

    @Post()
    createBook(@Body() createBookDto: CreateBookDto)
    {
        return this.booksService.createBook(createBookDto);
    }

    @Put(':id')
    updateBookById(@Param('id', ParseIntPipe) id: number, @Body() updateBookDto: UpdateBookDto)
    {
        
        return this.booksService.updateBook(id, updateBookDto);
    }

}
