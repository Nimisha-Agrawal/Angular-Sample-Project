import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './news/news.component';
import {HttpComponent} from './components/http/http.component';
import {HomeComponent} from './components/home/home.component';
import {SearchComponent}  from './components/search/search.component';
import {ArtistComponent} from './components/artist/artist.component';
import { ArtistTrackListComponent } from './components/artist-track-list/artist-track-list.component';
import{ArtistAlbumListComponent} from './components/artist-album-list/artist-album-list.component';
import{FormModalComponent} from './components/form-modal/form-modal.component' ;
import {AlwaysAuthGuardService} from './always-auth-guard.service';
import { OnlyLoggedInUsersGuardService } from './services/only-logged-in-users-guard.service';
import { AlwaysAuthChildrenuardrdService } from './services/always-auth-childrenuardrd.service';
import { UnsearchedTermGuardService } from './services/unsearched-term-guard.service';
import { ModalCodeComponent } from './components/modal-code/modal-code.component';
import { ChildComponent } from './components/child/child.component';
import { ParentComponent } from './components/parent/parent.component';
import { VoteTakerComponent } from './components/vote-taker/vote-taker.component';
import { VoterComponent } from './components/voter/voter.component';

const routes: Routes = [
  { path : 'HTTP' , component: HttpComponent},
  { path : 'Modal' , component: FormModalComponent,
    children:[
      {path:'Code',component:ModalCodeComponent}
    ]
},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  { path : 'News' , component: NewsComponent},
  { path: "find", redirectTo: "search" },
  { path: "home", component: HomeComponent },
  { path: "search", component: SearchComponent,
    canDeactivate:[UnsearchedTermGuardService] },
  { path : 'artist/:artistId',
    component:ArtistComponent,
    canActivate:[ OnlyLoggedInUsersGuardService,AlwaysAuthGuardService],
    canActivateChild: [AlwaysAuthChildrenuardrdService],
  children:[
      {path:'',redirectTo:'tracks',pathMatch: 'full'},
      {path:'tracks',component:ArtistTrackListComponent},
      {path: 'albums', component: ArtistAlbumListComponent}
  ]},
  {path:'Vote-taker',component:VoteTakerComponent,
  children:[
      {path :' ',redirectTo:'Vote-taker',pathMatch : 'full'},
      {path :'Voter',component: VoterComponent }
  ]
},
{ path: "**", component: HomeComponent }
];

@NgModule({
imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  
}
