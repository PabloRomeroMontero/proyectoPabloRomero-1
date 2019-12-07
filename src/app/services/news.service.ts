import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  // https://newsapi.org/
  API_KEY = '6f014f5b9b1742cfbb4895c37c113597';
  constructor() {
  }
}
