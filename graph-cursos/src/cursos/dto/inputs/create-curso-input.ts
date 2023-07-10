import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsPositive } from 'class-validator';

@InputType()
export class CreateCursoInput {

    @Field(()=>String )
    @IsNotEmpty()
    identificacion:string;

    @Field()
    @IsNotEmpty()
    nombre:string;

    @Field()
    @IsNotEmpty()
    fechanacimiento:string;

    @Field()
    @IsNotEmpty()
    experiencia:string;

    @Field(()=>Int )
    @IsPositive()
    tipo: number;
  
    @Field(()=>Boolean )
    @IsOptional()
    estado:boolean;
}


