import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../shared/employee.service';


@Component({
  selector: 'app-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.css']
})

export class TrendsComponent implements OnInit {
  constructor(private opportunityService: EmployeeService) { }
  title = 'Angular Charts';


  counts: any;
  view: any[] = [600, 400];
  single;
  // options for the chart
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Locations';
  showYAxisLabel = true;
  yAxisLabel = 'Number of people';
  timeline = true;

  colorScheme = {
    domain: ['red', 'blue', 'black', 'brown', 'yellow', 'green']
  };
  showLabels = true;
  ngOnInit(): void {


    this.opportunityService.countByLocation().subscribe((trends: any[]) => {
      
      let data: any[] = [];
      for (let trend of trends) {
        data.push({
          "name": trend.location,
          "value": trend.count,
        })
      }
      this.single = data;
    });


  }


}


