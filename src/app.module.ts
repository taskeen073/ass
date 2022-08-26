import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './task/task.entity';
import { TaskModule } from './task/task.module';
import { DataSource } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      synchronize: true,
      host: 'localhost',
      port: 3307,
      username: 'root',
      password: '',
      database: 't1',
      autoLoadEntities: true,
      entities: [Task],
      logging: false,
    }),
    TaskModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
