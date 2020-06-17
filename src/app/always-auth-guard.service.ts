import { Injectable } from '@angular/core';
import {CanActivate} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AlwaysAuthGuardService implements CanActivate {
  canActivate(){
    console.log("AlwaysAuthGuard");
    return true;
  }


  constructor() { }
}
