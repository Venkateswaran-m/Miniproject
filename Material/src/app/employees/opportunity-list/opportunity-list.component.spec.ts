import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { OpportunityListComponent } from './opportunity-list.component';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar'; 
describe('OpportunityListComponent', () => {
  let component: OpportunityListComponent;
  let fixture: ComponentFixture<OpportunityListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpportunityListComponent ],
      imports:[HttpClientModule,MatDialogModule,MatSnackBarModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpportunityListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
