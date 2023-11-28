// home.component.ts
import { Component } from '@angular/core';
import { TaskService } from '../services/task.service';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [TaskService],
})
export class HomeComponent {
  taskName: string = '';

  constructor(public taskService: TaskService) {}

  addTask(): void {
    if (this.taskName.trim() !== '') {
      const newTask = {
        name: this.taskName,
        date: new Date(),
        status: 'Aberta',
      };

      this.taskService.addTask(newTask);
      console.log('Tarefa adicionada:', newTask);

      this.taskName = '';
    }
  }

  formatarData(data: Date): string {
    return format(data, 'dd/MM/yyyy', { locale: ptBR });
  }

  // Métodos de exemplo, personalize conforme necessário
  editTask(task: any): void {
    console.log('Editando tarefa:', task);
  }

  deleteTask(task: any): void {
    console.log('Excluindo tarefa:', task);
  }

  suspendTask(task: any): void {
    console.log('Suspender tarefa:', task);
  }

  completeTask(task: any): void {
    console.log('Finalizar tarefa:', task);
  }
}
