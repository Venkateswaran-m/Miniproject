import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OpportunityListComponent } from './employees/opportunity-list/opportunity-list.component';
import { TrendsComponent } from './trends/trends.component';
import { EmployeesComponent } from './employees/employees.component';


const routes: Routes = [
  { path: 'Opportunities', component:EmployeesComponent },
  { path: 'Trends', component: TrendsComponent },
  { path: '',   redirectTo: '/Opportunities', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
