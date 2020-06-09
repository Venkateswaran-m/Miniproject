import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators, MinLengthValidator } from "@angular/forms";
import { HttpClient, HttpClientModule, HttpHeaders } from "@angular/common/http";
import { Opportunity } from "../opportunity";
import { BehaviorSubject } from 'rxjs';




@Injectable({
  providedIn: 'root'
})

export class EmployeeService {
  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();

  

  changeMessage(message: string) {
    this.messageSource.next(message)
  }
  countByLocation() {

      return this.http.get("http://localhost:8080/getlocationcount")
  }
  populateForm(opportunity) {
    this.form.setValue(opportunity);
  }

  constructor( private http: HttpClient) { }

 

  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    opportunityName: new FormControl('', Validators.required),
    managerEmail: new FormControl('', Validators.email),
    contactNumber: new FormControl('', [Validators.required, Validators.minLength(8)]),
    location: new FormControl(''),
    skills: new FormControl(''),
    hiringManager: new FormControl(''),
    expectedDuration: new FormControl(''),

  });

  initializeFormGroup() {
    this.form.setValue({
      id: null,
      opportunityName: '',
      managerEmail: '',
      contactNumber: '',
      location: '',
      skills: '',
      hiringManager: '',
      expectedDuration: '',


    })
  }


  getOpportunities() {
    return this.http.get<any>("http://localhost:8080/all");
  }
  public deleteById(id: number) {
    return this.http.delete("http://localhost:8080/deletecandidate/" + id)
  }
  public getAllCandidates() {
    return this.http.get("http://localhost:8080/all")
  }


  insertOpportunity(opportunity) {
   
     return this.http.post("http://localhost:8080/addopportunity/", opportunity);

  }

  updateOpportunity(opportunity) {
  
    return this.http.put("http://localhost:8080/updateopportunity/", opportunity);

  }

  deleteOpportunity(id) {
    
    return this.http.delete("http://localhost:8080/deleteopportunity/" + id);
  }


}




