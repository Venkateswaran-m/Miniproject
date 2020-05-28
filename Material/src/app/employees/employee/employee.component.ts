import { Component, OnInit } from '@angular/core';
import { EmployeeService } from "../../shared/employee.service";
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(public service:EmployeeService) { }

  departments=[
    {id:1,value:'dep1'},
    {id:2,value:'dep2'},
    {id:3,value:'dep3'},
  ]

  ngOnInit(): void {
  }

}
