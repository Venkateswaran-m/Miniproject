import { TestBed, ComponentFixture, async } from '@angular/core/testing';

import { EmployeeService } from './employee.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Opportunity } from '../opportunity';

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

  it('should retrieve opportunties from the API via GET',() =>{
    const dummyopp:Opportunity[] = [
      {opportunityName: 'Developer',hiringManager: 'venkat',skills: 'java',managerEmail: 'venkat@gmail.com',expectedDuration : "23",location: 'chennai',contactNumber:"9842422507"},
      {opportunityName: 'Developer',hiringManager: 'venkat',skills: 'C++',managerEmail: 'venkat@gmail.com',expectedDuration : "21",location: 'chennai',contactNumber:"9940651750"},
    ];
    service.getOpportunities().subscribe(data => {
      expect(data.length).toBe(2);
      expect(data).toEqual(dummyopp);
    });

    
  })

  it('should add opportunities from the API via POST',() =>{
    const newopp ={opportunityName: 'Developer',hiringManager: 'venkat',skills: 'java',managerEmail: 'venkat@gmail.com',expectedDuration : "2",location: 'chennai',contactNumber:"9842422507"};
    
    service.insertOpportunity(newopp).subscribe(data=>{
      expect(data).toEqual("Inserted SucessFully");
    });
  });

  it('should update opportunities from the API via PUT',() =>{
    const newopp ={opportunityName: 'Developer',hiringManager: 'venkat',skills: 'java',managerEmail: 'venkat@gmail.com',expectedDuration : "2",location: 'chennai',contactNumber:"9842422507"}
    
    service.updateOpportunity(newopp).subscribe(data=>{
      expect(data).toEqual("Updated SucessFully");
    });
  });

  it('should update opportunities from the API via DELETE',() =>{
    let id:1;    
    service.deleteOpportunity(id).subscribe(data=>{
      expect(data).toEqual("Deleted SucessFully");
    });
  });
  
});
