import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../shared/employee.service';

@Component({
  selector: 'app-searchdelete',
  templateUrl: './view-opportunity.component.html',
  styleUrls: ['./view-opportunity.component.css']
})
export class ViewOpportunityComponent implements OnInit {
users:any;
  constructor(private employeeService: EmployeeService) { }
public deleteCandidate(id:number)
{
  let resp=this.employeeService.deleteById(id);
  resp.subscribe((data)=>this.users=data)
}

  ngOnInit(): void {
    let resp= this.employeeService.getAllCandidates();
    resp.subscribe((data)=>this.users=data)
  }

}