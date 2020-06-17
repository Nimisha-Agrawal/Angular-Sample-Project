import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class OnlyLoggedInUsersGuardService implements CanActivate{

  constructor(private userService:UserService,private router:Router) {}
  canActivate(){
      if(this.userService.isLoggedIn()){
      return true;
  }
  else{
    window.alert("You don't have permission to view this page");
this.router.navigate(["home"]);
    return false;
  }}
}
