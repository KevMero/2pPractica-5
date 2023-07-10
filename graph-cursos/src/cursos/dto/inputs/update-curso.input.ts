import { IsUUID } from 'class-validator';
import { CreateCursoInput } from './create-curso-input';
import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateCursoInput extends PartialType(CreateCursoInput) {

    @Field(() => ID)
    @IsUUID()
    id: string;
}
