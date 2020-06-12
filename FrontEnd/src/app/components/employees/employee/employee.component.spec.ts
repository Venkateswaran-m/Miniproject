import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {MatSnackBarModule} from '@angular/material/snack-bar'; 
import { EmployeeComponent } from './employee.component';
import { HttpClientModule } from '@angular/common/http';
import {MatDialogModule, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
describe('EmployeeComponent', () => {
  let component: EmployeeComponent;
  let fixture: ComponentFixture<EmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeComponent ],
      imports:[HttpClientModule,MatSnackBarModule,MatDialogModule],
      providers: [
        { 
        provide: MatDialogRef,
        useValue: []
         }, 
        { 
        provide: MAT_DIALOG_DATA, 
        useValue: [] 
        }
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
 
});
