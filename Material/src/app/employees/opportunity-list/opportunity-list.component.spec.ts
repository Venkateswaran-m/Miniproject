import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { OpportunityListComponent } from './opportunity-list.component';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar'; 
import { DebugElement } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
describe('OpportunityListComponent', () => {
  let component: OpportunityListComponent;
  let fixture: ComponentFixture<OpportunityListComponent>;
  let debugElement : DebugElement;
  let service:EmployeeService;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpportunityListComponent ],
      imports:[HttpClientModule,MatDialogModule,MatSnackBarModule],
      providers:[EmployeeService],
    })
    .compileComponents();
    // service=TestBed.get(EmployeeService);
    // service = TestBed.inject(EmployeeService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpportunityListComponent);
    component = fixture.componentInstance;
    debugElement=fixture.debugElement;
    service = TestBed.get(EmployeeService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });



});
