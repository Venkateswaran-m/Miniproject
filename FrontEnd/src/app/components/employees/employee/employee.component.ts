import { Component, OnInit, Inject } from '@angular/core';
import { EmployeeService } from "../../../shared/employee.service";
import { NotificationService } from "../../../shared/notification.service";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
public message:string;
  constructor(public service: EmployeeService,
    public notificationService: NotificationService,
    public dialogRef: MatDialogRef<EmployeeComponent>,@Inject(MAT_DIALOG_DATA) public data: string) { }

    

  cancel() {
    this.dialogRef.close({ data: false }) // send data to parent component
  }

  confirm() {
    this.dialogRef.close({ data: true }) // send data to parent component
  }

  departments = [
    { id: 1, value: 'dep1' },
    { id: 2, value: 'dep2' },
    { id: 3, value: 'dep3' },
  ]
 
  ngOnInit(): void {
    this.service.getOpportunities();

  }

  close(){
    this.dialogRef.close(  );
  }

  onClear() {
    
    this.dialogRef.close( this.service.form.value );
    this.service.form.reset();
    this.service.initializeFormGroup();
    

  }

  onSubmit() {

    if(this.service.form.valid)
    {
       
      if(!this.service.form.get('id').value)
       {this.message="ABC";        
       //this.dialogRef.close( this.service.form.value );
        // this.service.currentMessage.subscribe(message => this.message = message)
          let res=this.service.insertOpportunity(this.service.form.value)
          .subscribe((data)=>
          {          
          
          }); 
          
        }
        else{      
         
       
         
          let resp=this.service.updateOpportunity(this.service.form.value);
          resp.subscribe((data)=>console.log(data));

        }
        this.onClear();
          this.service.form.reset();
          this.service.initializeFormGroup();
          this.notificationService.success("Submitted successfully!!");
         // this.onClose();
          
    }
  }

  onClose() {
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.dialogRef.close();
  }
}