import { Injectable } from '@angular/core';
import { SearchComponent } from '../components/search/search.component';
import { CanDeactivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UnsearchedTermGuardService implements CanDeactivate<SearchComponent> {
  canDeactivate(component:SearchComponent,route:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean{
    console.log("UnsearchedTermGuard");
    console.log(route.params);
    console.log(state.url);
    return component.canDeactivate()|| window.confirm("Are you sure?");
  }

  constructor() { }
}
