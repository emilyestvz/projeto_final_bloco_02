import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaModule } from './categoria/categoria.module';
import { CategoriaController } from './categoria/controllers/categoria.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_farmacia_go',
      autoLoadEntities: true, 
      synchronize: true, 
    }),
    CategoriaModule,
    //ProdutoModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
