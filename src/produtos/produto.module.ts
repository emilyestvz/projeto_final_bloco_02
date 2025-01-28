import { Module } from "@nestjs/common";
import { Produto } from "./entities/produto.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CategoriaModule } from "../categoria/categoria.module";
import { ProdutoService } from "./services/produto.service";
import { ProdutoController } from "./controllers/produto.controller";

@Module({
    imports: [TypeOrmModule.forFeature([Produto]), CategoriaModule],
    providers: [ProdutoService],
    controllers: [ProdutoController],
    exports: []
})
export class ProdutoModule {}