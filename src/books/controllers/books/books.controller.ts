import { Controller, Get, Post, Body, Put, Param, ParseIntPipe, Delete } from '@nestjs/common';
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

    @Get(':id')
    findBookById(@Param('id', ParseIntPipe) id: number)
    {
        return this.booksService.getOneBook(id);
    }

    @Put(':id')
    updateBookById(@Param('id', ParseIntPipe) id: number, @Body() updateBookDto: UpdateBookDto)
    {
        
        this.booksService.updateBook(id, updateBookDto);
    }

    @Delete(':id')
    deleteBook(@Param('id', ParseIntPipe) id: number)
    {
        return this.booksService.deleteBook(id);
    }

}
