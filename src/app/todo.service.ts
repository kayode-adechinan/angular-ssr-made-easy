import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { isPlatformServer } from '@angular/common';

export interface Todo {
  id: number;
  userId: number;
  title: string;
  body: string;
}

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  baseUri: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: string
  ) {}

  // Get all todos
  getAll(): Observable<Todo[]> {
    console.log('http request made');
    // if (isPlatformServer(this.platformId)) {
    //   return this.http.get<Todo[]>(`${this.baseUri}`);
    // }
    return this.http.get<Todo[]>(`${this.baseUri}`);
  }

  // Create todo
  create(data: Omit<Todo, 'id'>): Observable<Todo> {
    let url = `${this.baseUri}/create`;
    return this.http.post<Todo>(url, data);
  }
}
