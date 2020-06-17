import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule, NgbActiveModal, NgbModal}  from '@ng-bootstrap/ng-bootstrap';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormModalComponent } from './components/form-modal/form-modal.component';
import {FormsModule,ReactiveFormsModule}  from '@angular/forms';
import {HttpClientModule,HttpClientJsonpModule,HttpClient, JsonpClientBackend}  from '@angular/common/http';
import { NewsComponent } from './news/news.component';
import { DigitDirective } from './digitOnly.directive';
import {SortByPipe} from './SortData.pipe';
import {simpleService} from './simpleService';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { HttpComponent } from './components/http/http.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchService } from './search.service';
import { ApiService } from './api.service';
import { ArtistComponent } from './components/artist/artist.component';
import { ArtistTrackListComponent } from './components/artist-track-list/artist-track-list.component';
import { ArtistAlbumListComponent } from './components/artist-album-list/artist-album-list.component';
import { AlwaysAuthGuardService } from './always-auth-guard.service';
import { ModalCodeComponent } from './components/modal-code/modal-code.component';
import { AlwaysAuthChildrenuardrdService } from './services/always-auth-childrenuardrd.service';
import { UnsearchedTermGuardService } from './services/unsearched-term-guard.service';
import { VoteTakerComponent } from './components/vote-taker/vote-taker.component';
import { VoterComponent } from './components/voter/voter.component';

@NgModule({
  declarations: [
    AppComponent,
      FormModalComponent,
      SortByPipe,
      NewsComponent,
      DigitDirective,
      ParentComponent,
      ChildComponent,
      HttpComponent,
      HomeComponent,
      SearchComponent,
      HeaderComponent,
      ArtistComponent,
      ArtistTrackListComponent,
      ArtistAlbumListComponent,
      ModalCodeComponent,
      VoteTakerComponent,
      VoterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [simpleService,SearchService,ApiService,NgbModal,NgbActiveModal,AlwaysAuthGuardService,AlwaysAuthChildrenuardrdService,UnsearchedTermGuardService],
  bootstrap: [AppComponent],
  entryComponents:[FormModalComponent]
})
export class AppModule { }
