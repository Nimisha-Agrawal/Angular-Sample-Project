import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import{HttpClient,HttpClientJsonpModule,
  HttpClientModule} from '@angular/common/http';
//import 'rxjs/add/operator/toPromise';
@Component({
  selector: 'app-artist-track-list',
  templateUrl: './artist-track-list.component.html',
  styleUrls: ['./artist-track-list.component.css']
})
export class ArtistTrackListComponent implements OnInit {
   tracks:any[];

  constructor(private http:HttpClient ,private route:ActivatedRoute) {
this.route.parent.params.subscribe(params=>{
this.http
    .jsonp(
        `https://itunes.apple.com/lookup?id=${
          params["artistId"]
        }&entity=song`,
        "callback"
    )
        .toPromise()
        .then(res=>{
          console.log(res);
          this.tracks = res["results"].slice(1);
        })
      });
   }

  ngOnInit(): void {
  }

}
