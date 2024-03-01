import { IsNotEmpty, IsNumber, Length } from "class-validator";

export class UpdateBookDto
{
    @IsNotEmpty({message: 'Name field cannot be empty'})
    @Length(3, 100)
    name: string;

    @IsNotEmpty({message: 'Detail field cannot be empty'})
    @Length(6, 1000)
    detail: string;

    @IsNotEmpty({message: 'Page field cannot be empty'})
    @IsNumber()
    page: number;

    @IsNotEmpty({message: 'Detail field cannot be empty'})
    @Length(3, 255)
    author: string;
}