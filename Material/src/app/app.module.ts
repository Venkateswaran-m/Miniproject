import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
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
import {NgxPaginationModule} from 'ngx-pagination';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatSortModule} from '@angular/material/sort'; 
import { OpportunityListComponent } from './employees/opportunity-list/opportunity-list.component';
import { SocialLoginModule, AuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider, FacebookLoginProvider } from "angularx-social-login";
import { TrendsComponent } from './trends/trends.component'; 
const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("1070556796195-2t0ujfgejrco964mcedr8vh389mcgc5b.apps.googleusercontent.com")
  },]);
  export function provideConfig() {
    return config;
  }
  
@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeComponent,
    OpportunityListComponent,
    TrendsComponent
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
    MatSnackBarModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule,
    MatDialogModule,
    HttpClientModule,
    SocialLoginModule,
    CommonModule,
    NgxChartsModule,  
    NgxPaginationModule
  
  ],
  providers: [EmployeeService, {provide:AuthServiceConfig,useFactory: provideConfig},{provide: MatDialogRef,useValue: {}}],
  bootstrap: [AppComponent],
  entryComponents:[EmployeeComponent]
})
export class AppModule { }
