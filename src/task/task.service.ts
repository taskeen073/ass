import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './task.entity';
import { TaskRepository } from './task.repository';
import console from 'console';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(TaskRepository)
    private taskRepository: TaskRepository,
  ) {}
  async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    const { title, description } = createTaskDto;
    const task = this.taskRepository.create({
      title,
      description,
    });
    try {
      await this.taskRepository.save(task);
      console.log('a');
      return task;
    } catch (e) {
      throw new ConflictException({
        message: ['Somethings wrong I can feel it.'],
      });
    }
  }
  // findAll(): Promise<Task[]> {
  //   return this.taskRepository.find();
  // }
  // findOne(id: string): Promise<Task> {
  //   return this.taskRepository.findOneBy({ id });
  // }
  // async remove(id: string): Promise<void> {
  //   await this.taskRepository.delete(id);
  // }
}
