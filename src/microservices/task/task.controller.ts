import { Body, Controller, Delete, Param, Post } from "@nestjs/common";
import { CreateTaskDto } from "./dto/create-task.dto";
import { TaskService } from "./task.service";

@Controller('tasks')
export class TaskController {
  constructor(private service: TaskService) {}

  @Post()
  async create(@Body() createTaskDto: CreateTaskDto) {
    return {id: await this.service.create(createTaskDto)}
  }

  @Delete('/:task')
  async delete(@Param('task') task: string) {
    await this.service.delete(task)
  }
}