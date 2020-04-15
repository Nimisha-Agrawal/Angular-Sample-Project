import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule}  from '@ng-bootstrap/ng-bootstrap';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormModalComponent } from './form-modal/form-modal.component';
import {FormsModule,ReactiveFormsModule}  from '@angular/forms';
import {HttpClientModule}  from '@angular/common/http';
//import { NewsComponent } from './news/news.component';
import { SubmitComponent } from './components/submit/submit.component';
import { DigitDirective } from './digitOnly.directive';
import {SortByPipe} from './SortData.pipe'


@NgModule({
  declarations: [
    AppComponent,
      FormModalComponent,
      SortByPipe,
      //NewsComponent,
      SubmitComponent,
      DigitDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [FormModalComponent]
})
export class AppModule { }
