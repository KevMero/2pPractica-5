import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Column , Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'cursos'})
@ObjectType()

export class Curso {

    @PrimaryGeneratedColumn('uuid')
    @Field(()=>ID)
    id: string

    @Column()
    @Field(()=>String)
    nombre:string;

    @Column()
    @Field(()=>String)
    fechanacimiento:string;

    @Column()
    @Field(()=>String)
    experiencia:string;

    @Column()
    @Field(()=>Int )
    tipo: number;

    @Column()
    @Field(()=>String)
    estado:boolean;


}
