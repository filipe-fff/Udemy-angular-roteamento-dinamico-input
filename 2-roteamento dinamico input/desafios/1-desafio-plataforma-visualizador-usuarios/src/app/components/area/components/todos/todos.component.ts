import { Component, inject, Input } from '@angular/core';
import { take } from 'rxjs';
import { CommonModule } from '@angular/common';
import { TodosService } from '../../../../services/todos.service';
import { TodosList } from '../../../../types/todos-list';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent {
  private readonly _todosService = inject(TodosService);
  todosList: TodosList = [];

  @Input() set userId(value: string) {
    this._todosService.getTodosListByUserId(value).pipe(take(1)).subscribe((todosResponse) => this.todosList = todosResponse);
  };
}