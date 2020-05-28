import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MaterialModule  } from "./material/material.module";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { EmployeeService } from "./shared/employee.service";
import { ReactiveFormsModule } from "@angular/forms";
import {MatGridListModule} from '@angular/material/grid-list'; 
import {MatInputModule} from '@angular/material/input'; 
import {MatFormFieldModule} from '@angular/material/form-field';   
import {MatToolbarModule} from '@angular/material/toolbar'; 
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {MatRadioModule} from '@angular/material/radio'; 
import {MatSelectModule} from '@angular/material/select'; 


import {MatButtonModule} from '@angular/material/button'; 
@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeComponent
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
    MatButtonModule

  
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
