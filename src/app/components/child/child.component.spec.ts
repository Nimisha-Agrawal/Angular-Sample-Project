import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildComponent } from './child.component';
import { simpleService } from 'src/app/simpleService';

describe('ChildComponent', () => {
  let component: ChildComponent;
  let fixture: ComponentFixture<ChildComponent>;
  let simpleService : simpleService;
  let spy : any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildComponent ],
      providers : [ simpleService ]
    });
    fixture = TestBed.createComponent(ChildComponent);
    component = fixture.componentInstance;
    simpleService = TestBed.get(simpleService);
    //fixture.detectChanges();
  });

  it('should create', () => {
    //spy = spyOn(simpleService,null).and.returnValue(null);
    expect(component).toBeTruthy();
  });
});
