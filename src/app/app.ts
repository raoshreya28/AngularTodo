import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Todo } from './todo/todo'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Todo], 
  templateUrl: './app.html'
})
export class App {
  title = 'My To-Do App';
}
