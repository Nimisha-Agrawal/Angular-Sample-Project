import { Component, OnInit, EventEmitter, ViewChild, ElementRef} from '@angular/core';
import {Input,Output} from '@angular/core';
import { FormGroup, FormBuilder ,FormControl,Validators} from '@angular/forms';
import {NgbModule, NgbModal, NgbActiveModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import { ModalCodeComponent } from '../modal-code/modal-code.component';

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.css']
})
export class FormModalComponent implements OnInit {
  title = 'ngModalForm';
 /* @Input() id:number;
  @Output() public submitEvent = new EventEmitter();*/

  /*myForm: FormGroup;
  Lab_No : FormControl;
  question : FormControl;
  link:string;

constructor(
  public activeModal : NgbActiveModal,
  private formBuilder : FormBuilder,
  private modalService: NgbModal
  )
  {
    this.createFormControl();
    this.createForm();
  };

*/
constructor(private modalService:NgbModal){}
openFormModal(){
 /* $("this.ModelForm").modal("show");*/
    const modalRef = this.modalService.open(ModalCodeComponent,{
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
  ngOnInit():void {/*
    this.createFormControl();
    this.createForm();*/
  }
/*
  public createFormControl(){
    this.Lab_No = new FormControl('',Validators.required),
    this.question = new FormControl('',[
      Validators.maxLength(200),
      Validators.required
    ])
  }

  public createForm(){
    this.myForm = this.formBuilder.group({
      Lab_No : this.Lab_No,
      question : this.question
    });
}
  
          public submitForm(){
            this.activeModal.close(this.myForm.value); 
          /*  this.submitEvent.emit(any value);*/
          /*}
          
  closeModal () {
    this.activeModal.close('Modal Closed');
  }
 */
  }


