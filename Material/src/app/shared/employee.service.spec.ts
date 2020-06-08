import { TestBed, ComponentFixture, async } from '@angular/core/testing';

import { EmployeeService } from './employee.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('EmployeeService', () => {
  let service: EmployeeService;
  

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule,FormsModule,ReactiveFormsModule],
      providers:[EmployeeService],
    });
    service=TestBed.get(EmployeeService);
    service = TestBed.inject(EmployeeService);
   
    
   
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('form invalid when empty',()=>{
    expect(service.form.valid).toBeFalsy();
  })
  it('is form valid when empty',()=>{
    let oName= service.form.controls['opportunityName'];
    oName.setValue("Developer");
    let cNumber= service.form.controls['contactNumber'];
    cNumber.setValue("9842422507");
    expect(service.form.valid).toBeTruthy();
  })

  it('is form invalid when contact number is less than 8 digits',()=>{
    let oName= service.form.controls['opportunityName'];
    oName.setValue("Developer");
    let cNumber= service.form.controls['contactNumber'];
    cNumber.setValue("984247");
    expect(service.form.valid).toBeFalsy();
  });


  it('email field validity',()=>{
    let email=service.form.controls['managerEmail'];
    email.setValue("abcs");
    expect(email.valid).toBeFalsy();    
  })
});
