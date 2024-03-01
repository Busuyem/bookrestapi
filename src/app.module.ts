import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './typeorm/entities/Book';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'bookrestapi',
      entities: [Book],
      synchronize: true

    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
