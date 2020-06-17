import { Component, OnInit } from '@angular/core';
import{HttpClient,HttpClientJsonpModule,
  HttpClientModule} from '@angular/common/http';
import{ActivatedRoute} from '@angular/router';
//import 'rxjs/add/operator/toPromise';
@Component({
  selector: 'app-artist-album-list',
  templateUrl: './artist-album-list.component.html',
  styleUrls: ['./artist-album-list.component.css']
})
export class ArtistAlbumListComponent implements OnInit {
 albums:any[];
  constructor(private http:HttpClient,private route:ActivatedRoute) 
{ 
    this.route.parent.params.subscribe(params=>{
      this.http
      .jsonp(
          `https://itunes.apple.com/lookup?id=${
          params["artistId"]
        }&entity=album`,"callback"
      )
      .toPromise()
      .then(res=>{
        console.log(res);
        this.albums = res["results"].slice(1);
      });

    });
  }

  ngOnInit(): void {
  }

}
