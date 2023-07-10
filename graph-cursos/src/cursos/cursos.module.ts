import { Module } from '@nestjs/common';
import { CursosService } from './cursos.service';
import { CursosResolver } from './cursos.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Curso } from './entities/curso.entity';


@Module({
  providers: [CursosResolver, CursosService],
  imports:[
    TypeOrmModule.forFeature([Curso])
  ]
})
export class CursosModule {}
