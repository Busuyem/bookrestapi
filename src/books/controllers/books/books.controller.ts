import { Controller, Get, Post, Body, Put, Param, ParseIntPipe, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
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
    @UsePipes(ValidationPipe)
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
    @UsePipes(ValidationPipe)
    updateBookById(@Param('id', ParseIntPipe) id: number, @Body() updateBookDto: UpdateBookDto)
    {
        
        return this.booksService.updateBook(id, updateBookDto);
        //return this.booksService.getOneBook(id);
    }

    @Delete(':id')
    deleteBook(@Param('id', ParseIntPipe) id: number)
    {
        return this.booksService.deleteBook(id);
    }

}
