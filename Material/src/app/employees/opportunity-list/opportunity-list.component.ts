import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { MatTableDataSource } from "@angular/material/table";
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog,MatDialogConfig } from "@angular/material/dialog";
import { EmployeeComponent } from '../employee/employee.component';
import { NotificationService } from 'src/app/shared/notification.service';
import { Opportunity } from 'src/app/opportunity';


@Component({
  selector: 'app-opportunity-list',
  templateUrl: './opportunity-list.component.html',
  styleUrls: ['./opportunity-list.component.css']
})
export class OpportunityListComponent implements OnInit {

  constructor(private service: EmployeeService,private dialog:MatDialog,private notificationService:NotificationService) { }
  listData= new MatTableDataSource<Opportunity>();
 
  displayedColumns:any=['id','opportunityName','managerEmail','location','contactNumber','skills','hiringManager','expectedDuration','actions',];
@ViewChild(MatSort) sort: MatSort; 
@ViewChild(MatPaginator) paginator:MatPaginator;
searchKey:string;
  ngOnInit(): void {

    this.service.getOpportunities().subscribe(
 
       (data:any[])=> {
         console.log(data);
         this.listData.data=data;
         //this.listData=new MatTableDataSource(array);        
         this.listData.sort=this.sort;
        //this.listData.paginator=this.paginator;
        setTimeout(() => this.listData.paginator = this.paginator);
 

       }); 
      
              /* list=>{
        let array=list.map(item=>{
          return{
            $key:item.key,
            ...item.payload.val()
          };
        
        });*/
       // console.log(array);
      
      
  }
  
 onSearchClear(){
   this.searchKey='';
   this.applyFilter();  
 }
 applyFilter(){
   this.listData.filter=this.searchKey.trim().toLowerCase();
 }

 onCreate(){
 this.service.initializeFormGroup();
  const dialogConfig= new MatDialogConfig();
   dialogConfig.disableClose=true;
   dialogConfig.autoFocus=true;
   dialogConfig.width="60%";
   this.dialog.open(EmployeeComponent,dialogConfig)

 }
 onEdit(row){
  console.log(row); 
  this.service.populateForm(row);
   
   const dialogConfig= new MatDialogConfig();
   dialogConfig.disableClose=true;
   dialogConfig.autoFocus=true;
   dialogConfig.width="60%";
   this.dialog.open(EmployeeComponent,dialogConfig);
 }
 onDelete(id){
   if(confirm('Are you sure to delete this the record?'+id)){
   //this.service.deleteOpportunity(id);
   let res=this.service.deleteOpportunity(id);
    res.subscribe(data => console.log(data));
   this.notificationService.warn('! Deleted Successfully');
 }
 
}
}
