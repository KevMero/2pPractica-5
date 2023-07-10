import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCursoInput, UpdateCursoInput } from './dto/inputs';
import { Curso } from './entities/curso.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CursosService {

  constructor( 
    @InjectRepository(Curso)
    private readonly cursosRepository:Repository<Curso> ){}

  async create(createCursoInput: CreateCursoInput): Promise<Curso>  {
    const newCurso= this.cursosRepository.create(createCursoInput);
    return await this.cursosRepository.save(newCurso); 
  }

  async findAll(): Promise<Curso[]> {
    return this.cursosRepository.find();
  }

  async findOne(id: string): Promise<Curso> {
     const curso= await  this.cursosRepository.findOneBy({id});
     if (!curso) throw new NotFoundException(`Not found`)
     return curso;
  }

  async update(id: string, updateCursoInput: UpdateCursoInput): Promise<Curso> {
    
    const curso = await this.cursosRepository.preload(updateCursoInput);
    if (!curso) throw new NotFoundException(`Not found`)
    return this.cursosRepository.save(curso);

  }

  async remove(id: string): Promise<Curso> {

    const curso= await  this.findOne(id);
    curso.estado= false;

    await this.cursosRepository.update({id},curso)

    return curso;
  }
}
