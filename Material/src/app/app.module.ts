import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireModule } from "angularfire2";
import {MaterialModule  } from "./material/material.module";
import {MatSnackBarModule} from '@angular/material/snack-bar'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { EmployeeService } from "./shared/employee.service";
import { ReactiveFormsModule,FormsModule } from "@angular/forms";
import {MatGridListModule} from '@angular/material/grid-list'; 
import {MatInputModule} from '@angular/material/input'; 
import {MatFormFieldModule} from '@angular/material/form-field';   
import {MatToolbarModule} from '@angular/material/toolbar'; 
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {MatRadioModule} from '@angular/material/radio'; 
import {MatSelectModule} from '@angular/material/select'; 
import { environment } from "../environments/environment";
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';  
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';

import {MatDialogModule} from '@angular/material/dialog';
import {MatSortModule} from '@angular/material/sort'; 
import { OpportunityListComponent } from './employees/opportunity-list/opportunity-list.component';
import { ViewOpportunityComponent } from './view-opportunity/view-opportunity.component'; 
@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeComponent,
    OpportunityListComponent,
    ViewOpportunityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatGridListModule, 
    MatInputModule,
    MatFormFieldModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatRadioModule,
    MatSelectModule,
    MatButtonModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    MatSnackBarModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule,
    MatDialogModule,
    HttpClientModule    

  
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent],
  entryComponents:[EmployeeComponent]
})
export class AppModule { }
