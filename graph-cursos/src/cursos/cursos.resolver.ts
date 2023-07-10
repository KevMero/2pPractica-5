import { Resolver, Query, Mutation, Args, Int, ID } from '@nestjs/graphql';
import { CursosService } from './cursos.service';
import { Curso } from './entities/curso.entity';
import { UpdateCursoInput, CreateCursoInput } from './dto/inputs';
import { ParseUUIDPipe } from '@nestjs/common';

@Resolver(() => Curso)
export class CursosResolver {
  constructor(private readonly cursosService: CursosService) {}

  @Mutation(() => Curso)
  async createCurso(@Args('createCursoInput') createCursoInput: CreateCursoInput)
  :Promise<Curso> {
    return this.cursosService.create(createCursoInput);
  }

  @Query(() => [Curso], { name: 'cursos' })
  async findAll():Promise<Curso[]> {
    return this.cursosService.findAll();
  }

  @Query(() => Curso, { name: 'cursos' })
  findOne(@Args('id', { type: () => ID}, ParseUUIDPipe ) id: string): Promise<Curso> {
    return this.cursosService.findOne(id);
  }

  @Mutation(() => Curso)
  updateCurso(@Args('updateCursoInput') updateCursoInput: UpdateCursoInput): Promise<Curso> {
    return this.cursosService.update(updateCursoInput.id, updateCursoInput);
  }

  @Mutation(() => Curso)
  removeCurso(@Args('id', { type: () => ID } , ParseUUIDPipe) id: string): Promise<Curso> {
    return this.cursosService.remove(id);
  }
}
