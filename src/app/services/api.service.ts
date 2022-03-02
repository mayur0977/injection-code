import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn:'root'
})
export class ApiService {

  url: string = 'https://api.chucknorris.io/jokes/random';
  url2: string = 'https://jsonplaceholder.typicode.com/todos/1';
  constructor(private http: HttpClient) {}

  getData(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.url);
  }

  getOtherData(): Observable<any> {
    return this.http.get<any>(this.url2);
  }
}

export interface ApiResponse {
  icon_url: string;
  id: string;
  url: string;
  value: string;
}