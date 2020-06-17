import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpClientJsonpModule,
  HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  artist:any;

  constructor(private http:HttpClient,private route:ActivatedRoute) {
    this.route.params.subscribe(params=>{
        this.http
        .jsonp(
          `https://itunes.apple.com/lookup?id=${params["artistId"]}`,
          "callback"
        )
        .toPromise()
        .then(res=>{
          console.log(res);
          this.artist=res["results"][0];
          console.log(this.artist);
        });
    })
   }

  ngOnInit(): void {
  }

}
