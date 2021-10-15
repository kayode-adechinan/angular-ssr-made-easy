import { Component, OnInit } from '@angular/core';
import { NgAuthService } from '../../ng-auth.service';
import { Todo, TodoService } from '../../todo.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  todos: Todo[] = [];
  constructor(
    public ngAuthService: NgAuthService,
    private todoService: TodoService
  ) {}

  ngOnInit(): void {
    this.todoService.getAll().subscribe((res) => {
      this.todos = res;
    });
  }
}
