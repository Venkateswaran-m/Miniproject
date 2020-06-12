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

describe('OpportunityListComponent', () => {
  let component: OpportunityListComponent;
  let fixture: ComponentFixture<OpportunityListComponent>;
  let debugElement : DebugElement;
  let service:EmployeeService;
  let loader: HarnessLoader;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpportunityListComponent ],
      imports:[HttpClientModule,MatDialogModule,MatSnackBarModule],
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
  xit('buttons should work', async () => {
    //const buttons = await loader.getAllHarnesses(MatButtonHarness); // length: 3
    const firstButton = await loader.getHarness(MatButtonHarness); // === buttons[0]
  });
 xit('table should work', async () => {
    const buttons = await loader.getAllHarnesses(MatTableHarness); // length: 3
   // const firstButton = await loader.getHarness(MatTableHarness); // === buttons[0]
  });

});
