import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

import { TaskDocument } from "./schemas/task.schema";

@Injectable()
export class TaskService {
  constructor(@InjectModel('task') private taskModel: Model<TaskDocument>) {}

  async create(createTaskDto) {
    return (await this.taskModel.create(createTaskDto)).id;
  }

  async delete(taskId: string) {
    await this.taskModel.remove({_id: taskId})
  }
}