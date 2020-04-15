import { Component,ElementRef,Renderer2,ViewChild } from '@angular/core';
import {NgbModule, NgbModal, NgbActiveModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {FormModalComponent}  from './form-modal/form-modal.component';
//import { NewsComponent } from './news/news.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 // @ViewChild('buttonsContainer',{static:true})
  //@ViewChild('FormModalComponent') FormViewChild : FormModalComponent;
 // buttonsContainer:ElementRef;
 // private renderer:Renderer2;
  clientScrips = ["html", "css", "javascript", "angular", "react"];
  data = [
    { id: 100, name: "Mike" },
    { id: 104, name: "John" },
    { id: 102, name: "David" },
    { id: 101, name: "Jane" },
    { id: 103, name: "Steve" }
  ];
  public message;
 public Links:any[] = [];
  title = 'ngModalForm';
constructor(
    private modalService: NgbModal
){ };

openFormModal(){
    const modalRef = this.modalService.open(FormModalComponent,{
      centered:true
    });
    modalRef.componentInstance.id= 10;
    modalRef.result.then((result) => {
      console.log(result);
      this.data = result;
    }).catch((error) => {
      console.log(error);
    });
}
/*generateButton(event)
{
  this.Links.push(this.data[0]);
}
/*
generateButton(){
  const button = this.renderer.createElement('button');
    const color = this.getRandomColor();
    this.renderer.setStyle(button,'background',color);
    const text = this.renderer.createText('New button');
    this.renderer.appendChild(button,text);
    this.renderer.appendChild(this.buttonsContainer.nativeElement,button);
}
private getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
*/



}
