import { Injectable } from '@angular/core';
import{SearchItem}from './search-item';
import {
  HttpClientJsonpModule,
  HttpClientModule,
  HttpClient,HttpResponse
} from "@angular/common/http";

import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  apiRoot: string = "https://itunes.apple.com/search";
  results: SearchItem[];
  constructor(private http: HttpClient) {
    this.results = [];
  }
  search(term: string) {
    return new Promise((resolve, reject) => {
      this.results = [];
      let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20`;
      this.http
        .jsonp(apiURL, "callback")
        .toPromise()
        .then(
        res => {
            console.log(res);
            // Success
            this.results = res['results'].map(item => {
              return new SearchItem(
                item.trackName,
                item.artistName,
                item.trackViewUrl,
                item.artworkUrl30,
                item.artistId
              );
            });
            resolve();
          },
          msg => {
            // Error
            reject(msg);
          }
        );
    });
  }

  
}
