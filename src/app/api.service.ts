import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
/*
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_KEY = '61a90a959bc34aedb627c10e88ab6e3b';
  public getNews(){

    return this.httpClient.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.API_KEY}`);
  }
*/
  
  constructor(private httpClient:HttpClient) { }
}
