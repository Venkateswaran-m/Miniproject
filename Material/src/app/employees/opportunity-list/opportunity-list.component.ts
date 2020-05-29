import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { MatTableDataSource } from "@angular/material/table";
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-opportunity-list',
  templateUrl: './opportunity-list.component.html',
  styleUrls: ['./opportunity-list.component.css']
})
export class OpportunityListComponent implements OnInit {

  constructor(private service: EmployeeService) { }
  listData:MatTableDataSource<any>;
 
  displayedColumns:string[]=['fullName','email','mobile','city','actions'];
@ViewChild(MatSort) sort: MatSort; 
@ViewChild(MatPaginator) paginator:MatPaginator;
searchKey:string;
  ngOnInit(): void {

    this.service.getOpportunities().subscribe(
      list=>{
        let array=list.map(item=>{
          return{
            $key:item.key,
            ...item.payload.val()
          };
        
        });
        this.listData=new MatTableDataSource(array);
        this.listData.sort=this.sort;
        this.listData.paginator=this.paginator;
      
      });
  }
  ngAfterViewInit() {
    this.listData.paginator = this.paginator
}
 onSearchClear(){
   this.searchKey='';
   this.applyFilter();  
 }
 applyFilter(){
   this.listData.filter=this.searchKey.trim().toLowerCase();
 }
 
}
