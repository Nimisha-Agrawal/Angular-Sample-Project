import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-code',
  templateUrl: './modal-code.component.html',
  styleUrls: ['./modal-code.component.css']
})
export class ModalCodeComponent implements OnInit {
  //@ViewChild("Modal") ModelForm :ElementRef;
  myForm: FormGroup;
  Lab_No : FormControl;
  question : FormControl;
  link:string;
title = 'ngModalForm';
constructor(
  public activeModal : NgbActiveModal,
  private formBuilder : FormBuilder,
  )
  {
    this.createFormControl();
    this.createForm();
  };

  ngOnInit(): void {
  }

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
          }
          
  closeModal () {
    this.activeModal.close('Modal Closed');
  }

}
