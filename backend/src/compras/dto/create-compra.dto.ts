import { IsString, IsNotEmpty, IsArray, ArrayNotEmpty, IsDateString } from 'class-validator';

export class CreateCompraDto {

    @IsNotEmpty()
    @IsString()
    userId: string;

    @IsNotEmpty()
    @ArrayNotEmpty()
    @IsArray()
    productsIds: string[];

    @IsDateString()
    @IsNotEmpty()
    fecha: Date;
    
}