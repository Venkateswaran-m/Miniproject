import { Component, OnInit } from '@angular/core';
import { EmployeeService } from "../../shared/employee.service";
import { NotificationService } from "../../shared/notification.service";
import { MatDialogRef } from "@angular/material/dialog";
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(public service: EmployeeService,
    public notificationService: NotificationService,
    public dialogRef: MatDialogRef<EmployeeComponent>) { }

  departments = [
    { id: 1, value: 'dep1' },
    { id: 2, value: 'dep2' },
    { id: 3, value: 'dep3' },
  ]
 
  ngOnInit(): void {
    this.service.getOpportunities();

  }


  onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();

  }

  onSubmit() {

    if(this.service.form.valid)
    {
       
      if(!this.service.form.get('id').value)
       {
          
          console.log("inserting");
          console.log(this.service.form.value);
        
          let res=this.service.insertOpportunity(this.service.form.value);
          res.subscribe((data)=>console.log(data));
        }
        else{
         
         
          console.log("inside update");
          console.log(this.service.form.value);
          let resp=this.service.updateOpportunity(this.service.form.value);
          resp.subscribe((data)=>console.log(data));

        }

          this.service.form.reset();
          this.service.initializeFormGroup();
          this.notificationService.success("Submited successfully!!");
          this.onClose();
    }
  }

  onClose() {
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.dialogRef.close();
  }
}