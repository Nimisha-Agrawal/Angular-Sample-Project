import { Component, OnInit, EventEmitter} from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {Input,Output} from '@angular/core';
import { FormGroup, FormBuilder ,FormControl,Validators} from '@angular/forms';


@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.css']
})
export class FormModalComponent implements OnInit {
  
  @Input() id:number;
  @Output() public submitEvent = new EventEmitter();
  
  
  myForm: FormGroup;
  Lab_No : FormControl;
  question : FormControl;
  link:string;

  ngOnInit():void {/*
    this.createFormControl();
    this.createForm();*/
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
  constructor(
        public activeModal : NgbActiveModal,
        private formBuilder : FormBuilder)
        {
          this.createFormControl();
          this.createForm();
        };

          public submitForm(){
            this.activeModal.close(this.myForm.value);
            
          }
            
        public generateButton(create:boolean)
          {
            this.submitEvent.emit(create);
          }
          
  closeModal () {
    this.activeModal.close('Modal Closed');
  }
  showPrev(id:number)
  {
      

  }
 
  }


