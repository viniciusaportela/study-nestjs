import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateTaskDto } from "./dto/create-task.dto";

import { TaskDocument } from "./schemas/task.schema";

@Injectable()
export class TaskService {
  constructor(@InjectModel('task') private taskModel: Model<TaskDocument>) {}

  async create(createTaskDto: CreateTaskDto) {
    return (await this.taskModel.create(createTaskDto)).id;
  }

  async delete(taskId: string) {
    const deleted = await this.taskModel.deleteOne({_id: taskId})

    if (deleted.deletedCount === 0) {
      throw new NotFoundException("This task doesn't exists")
    }
  }
}