import { Component, OnInit } from '@angular/core';
import { EmployeeService } from "../../shared/employee.service";
import { NotificationService } from "../../shared/notification.service";
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(public service:EmployeeService,
    public notificationService:NotificationService) { }

  departments=[
    {id:1,value:'dep1'},
    {id:2,value:'dep2'},
    {id:3,value:'dep3'},
  ]

  ngOnInit(): void {
    this.service.getOpportunities();
  }


  onClear(){
    this.service.form.reset();
    this.service.initializeFormGroup();
  
  }

  onSubmit(){
    if(this.service.form.valid){
      this.service.insertOpportunity(this.service.form.value);
      this.service.form.reset();
      this.service.initializeFormGroup();
      this.notificationService.success(':: Submitted successfully');
      
    }
  }
}