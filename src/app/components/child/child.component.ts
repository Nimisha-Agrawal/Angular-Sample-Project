import { Component, OnInit } from '@angular/core';
import {simpleService} from 'src/app/simpleService';

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor(public service:simpleService) { }

  ngOnInit(): void {
  }

}
