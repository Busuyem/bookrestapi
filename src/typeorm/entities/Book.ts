import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'books'})
export class Book
{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    detail: string;

    @Column()
    page: number;

    @Column()
    createAt: Date;
}