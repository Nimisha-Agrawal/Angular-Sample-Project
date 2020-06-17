import { Injectable } from '@angular/core';
import { CanActivateChild } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AlwaysAuthChildrenuardrdService implements CanActivateChild {
  canActivateChild(){
    console.log("AlwaysAuthChildrenGuard");
    return true;
  }

  constructor() { }
}
