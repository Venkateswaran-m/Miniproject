import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { OpportunityListComponent } from './opportunity-list.component';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar'; 
import { DebugElement } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import {HarnessLoader} from '@angular/cdk/testing';
import {TestbedHarnessEnvironment} from '@angular/cdk/testing/testbed';
import {MatTableHarness} from '@angular/material/table/testing'; 
import {MatButtonHarness} from '@angular/material/button/testing';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('OpportunityListComponent', () => {
  let component: OpportunityListComponent;
  let fixture: ComponentFixture<OpportunityListComponent>;
  let debugElement : DebugElement;
  let service:EmployeeService;
  let loader: HarnessLoader;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpportunityListComponent ],
      imports:[HttpClientModule,MatDialogModule,MatSnackBarModule,BrowserAnimationsModule],
      providers:[EmployeeService],
    })
    .compileComponents();
    
    const fixture = TestBed.createComponent(OpportunityListComponent);
    loader = TestbedHarnessEnvironment.loader(fixture);
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
  

  it('should render the search button',() => {
    fixture.detectChanges();
    let btn = fixture.debugElement.query(By.css('#search')).nativeElement;
    btn.click();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(location.pathname).toEqual('/opportunties');
    });
  });
  it('should render the Create Opportunity button',() => {
    fixture.detectChanges();
    let btn = fixture.debugElement.query(By.css('#Opportunity')).nativeElement;
    btn.click();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(location.pathname).toEqual('/opportunities');
    });
  });
  xit('should render the Edit Opportunity button',() => {
    fixture.detectChanges();
    let btn = fixture.debugElement.query(By.css('#editOpportunity')).nativeElement;
    btn.click();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(location.pathname).toEqual('/opportunities');
    });
  });



  it('should render the Create Opportunity dialog',() => {
    component.onCreate();
  });
  it('should delete Opportunity',() => {
    component.onDelete(1);
  });
  xit('should edit Opportunity',() => {
    const newopp ={id:'1',opportunityName: 'Developer',hiringManager: 'venkat',skills: 'java',managerEmail: 'venkat@gmail.com',expectedDuration : "2",location: 'chennai',contactNumber:"9842422507"};
    component.onEdit(newopp);
  });
});
