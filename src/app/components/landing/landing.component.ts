import { Component, Inject, OnInit } from '@angular/core';
import { Todo, TodoService } from 'src/app/todo.service';
import { NgAuthService } from '../../ng-auth.service';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent implements OnInit {
  todos: Todo[] = [];
  title = 'Todo - Todo List';

  constructor(
    private todoService: TodoService,
    public ngAuthService: NgAuthService,
    private metaTagService: Meta,
    private titleService: Title,
    @Inject(DOCUMENT) private dom
  ) {}
  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.metaTagService.addTags([
      {
        name: 'keywords',
        content: 'Angular SEO Integration, Todo',
      },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Digamber Singh' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'date', content: '2019-10-31', scheme: 'YYYY-MM-DD' },
      { charset: 'UTF-8' },
    ]);

    this.setCanonicalURL();

    this.todoService.getAll().subscribe((res) => {
      this.todos = res;
    });
  }

  // you can extract it in a shared service and use it abuse it anywhere
  setCanonicalURL(url?: string) {
    const canURL = url == undefined ? this.dom.URL : url;
    const link: HTMLLinkElement = this.dom.createElement('link');
    link.setAttribute('rel', 'canonical');
    this.dom.head.appendChild(link);
    link.setAttribute('href', canURL);
  }
}
