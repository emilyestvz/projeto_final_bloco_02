import { IsNotEmpty } from "class-validator";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Produto } from "../../produtos/entities/produto.entity";
import { ApiProperty } from "@nestjs/swagger";

@Entity({name: 'tb_categorias'})
export class Categoria {

    @PrimaryGeneratedColumn()  
    @ApiProperty()    
    id: number

    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    @ApiProperty()  
    categoria: string

    @OneToMany(() => Produto, (produto) => produto.categoria, {
            onDelete: "CASCADE"
        })
        produto: Produto
}