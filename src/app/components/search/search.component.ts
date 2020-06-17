import { Component, OnInit } from '@angular/core';
import {SearchService} from 'src/app/search.service';
import { Router,RouteConfigLoadEnd, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

   loading: boolean = false;
  constructor(public itunes: SearchService,private route:ActivatedRoute,private router:Router ) {
    this.route.params.subscribe(params => {
      console.log(params);
      if (params["term"]) {
        this.doSearch(params["term"]);
      }
    });
  }

  doSearch(term: string) {
    this.loading = true;
    this.itunes.search(term).then(_ => (this.loading = false));
  }
  onSearch(term: string)
  {
    this.router.navigate(["search",{term:term}]);
  }
  canDeactivate(){
    return this.itunes.results.length>0;
  }

  ngOnInit(): void {
  }

}
