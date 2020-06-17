import { Component,ElementRef,Renderer2,ViewChild } from '@angular/core';
import {NgbModule, NgbModal, NgbActiveModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {FormModalComponent}  from './components/form-modal/form-modal.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component'

//import { NewsComponent } from './news/news.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    //@ViewChild('FormModalComponent') FormViewChild : FormModalComponent;
 /*
  clientScrips = ["html", "css", "javascript", "angular", "react"];
  data = [
    { id: 100, name: "Mike" },
    { id: 104, name: "John" },
    { id: 102, name: "David" },
    { id: 101, name: "Jane" },
    { id: 103, name: "Steve" }
  ];
  public message;
*/
  title = 'ngModalForm';


constructor(
    private modalService: NgbModal
){ };

openFormModal(){
    const modalRef = this.modalService.open(FormModalComponent,{
      centered:true
    });
   /* modalRef.componentInstance.id= 10;*/
    modalRef.result.then((result) => {
      console.log(result);
      //this.data = result;
    }).catch((error) => {
      console.log(error);
    });
}
// Via Promise
/*
error = false;
 doAsyncTask() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (this.error) {
        reject('error');
      } else {
        resolve('done');
      }
    }, 1000);
  });
};

doAsyncTask().then(
    (val) => console.log(val),
    (err) => console.error(err)
)

// Immediately Resolved Promise
let promise = Promise.resolve('done');
promise.then((val) => console.log(val)); // 'done'

// Handling Errors
Promise.resolve('done')
    .then((val) => {throw new Error("fail")})
    .then((val) => console.log(val))
    .catch((err) => console.error(err));*/
/*generateButton(event)
{
}*/

}
