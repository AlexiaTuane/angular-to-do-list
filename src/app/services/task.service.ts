// task.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: { name: string; date: Date; status: string }[] = [];

  getTasks(): { name: string; date: Date; status: string }[] {
    return this.tasks;
  }

  addTask(newTask: { name: string; date: Date; status: string }): void {
    this.tasks.push(newTask);
  }
}
