import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class HackerNewsService {
  private baseURL = 'https://hacker-news.firebaseio.com/v0';

  constructor(private httpClient: HttpClient) { }

  getTopStories(): Observable<number[]> {
    return this.httpClient.get<number[]>(`${this.baseURL}/topstories.json`);
  }

  getNewStories(): Observable<number[]> {
    return this.httpClient.get<number[]>(`${this.baseURL}/newstories.json`);
  }

  getItemDetail(itemId: number): Observable<Item> {
    return this.httpClient.get<Item>(`${this.baseURL}/item/${itemId}.json`);
  }
}
