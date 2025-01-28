import { ApiProperty } from "@nestjs/swagger"
import { Transform, TransformFnParams } from "class-transformer"
import { IsEmail, IsNotEmpty, MinLength } from "class-validator"
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"

@Entity({name: 'tb_usuarios'})
export class Usuario {

    @PrimaryGeneratedColumn()
    @ApiProperty()  
    id: number

    @IsNotEmpty()
    @Column({length: 255, nullable: false}) 
    @ApiProperty() 
    nome: string

    @IsEmail()
    @IsNotEmpty()
    @Column({length: 255, nullable: false })
    @ApiProperty() 
    usuario: string

    @Transform(({value}: TransformFnParams) => value?.trim())
    @MinLength(8)
    @IsNotEmpty()
    @Column({length: 255, nullable: false }) 
    @ApiProperty() 
    senha: string

    @Column({length: 5000 }) 
    @ApiProperty() 
    foto: string
}