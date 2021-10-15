import { Component, OnInit } from '@angular/core';
import { Todo, TodoService } from 'src/app/todo.service';
import { NgAuthService } from '../../ng-auth.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent implements OnInit {
  todos: Todo[] = [];

  constructor(
    private todoService: TodoService,
    public ngAuthService: NgAuthService
  ) {}
  ngOnInit(): void {
    this.todoService.getAll().subscribe((res) => {
      this.todos = res;
    });
  }
}
