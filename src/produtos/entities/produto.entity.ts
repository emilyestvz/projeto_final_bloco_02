import { IsNotEmpty, IsNumber, IsPositive } from "class-validator"
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Categoria } from "../../categoria/entities/categoria.entity"
import { NumericTransformer } from "../../util/numericTransformer"
import { ApiProperty } from "@nestjs/swagger"

@Entity({ name: 'tb_produtos' })
export class Produto {

    @ApiProperty() 
    @PrimaryGeneratedColumn()
    id: number

    @ApiProperty() 
    @IsNotEmpty()
    @Column({ length: 255, nullable: false })
    nome: string

    @ApiProperty() 
    @IsNotEmpty()
    @Column({ length: 255, nullable: true })
    descricao: string

    @ApiProperty() 
    @IsNumber({ maxDecimalPlaces: 2 })
    @IsNotEmpty()
    @IsPositive()
    @Column({ type: "decimal", precision: 10, scale: 2, transformer: new NumericTransformer() })
    preco: number

    @ApiProperty() 
    @Column({ length: 5000 })
    foto: string

    @ManyToOne(() => Categoria, (categoria) => categoria.produto, {
        onDelete: "CASCADE"
    })
    categoria: Categoria
}