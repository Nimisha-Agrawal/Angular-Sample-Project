import { Component, OnInit, ViewChild} from '@angular/core';
import {simpleService} from 'src/app/simpleService';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'parent',
  template:`
  <div class = "parent">
    <p>Parent</p>
    <form novalidate>
        <div class = "form-group">
        <input type="text" class = "form-control" name = "value" [(ngModel)] = "service.value"></div>
    </form>
    <child></child>
</div>
<ng-content></ng-content>
  `,
  styleUrls: ['./parent.component.css'],
  viewProviders:[simpleService],
providers:[simpleService]
})
export class ParentComponent implements OnInit {
  @ViewChild(ChildComponent) child : ChildComponent;

  constructor(public service:simpleService) { }

  ngOnInit(): void {
  }

}
