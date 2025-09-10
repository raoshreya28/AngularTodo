import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

export interface Task {
  description: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './todo.html',
  styleUrls: ['./todo.css']
})
export class Todo {
  newTask: string = '';
  tasks: Task[] = [];

  addTask() {
    if (this.newTask.trim()) {
      const task: Task = {
        description: this.newTask.trim(),
        completed: false
      };
      this.tasks.push(task);
      this.newTask = '';
    }
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
  }

  toggleCompleted(index: number) {
    this.tasks[index].completed = !this.tasks[index].completed;
  }
}
