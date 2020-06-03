import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators, MinLengthValidator } from "@angular/forms";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import { HttpClient, HttpClientModule, HttpHeaders } from "@angular/common/http";
import { Opportunity } from "../opportunity";




@Injectable({
  providedIn: 'root'
})

export class EmployeeService {
  populateForm(opportunity) {
    this.form.setValue(opportunity);
  }

  constructor(private firebase: AngularFireDatabase, private http: HttpClient) { }

  opportunityList: AngularFireList<any>;

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
    //console.log("From backend");
    // console.log(this.http.get("http://localhost:8080/all"));
    // this.opportunityList=this.firebase.list('opportunities');
    return this.http.get<any>("http://localhost:8080/all");
    // return this.opportunityList.snapshotChanges();
    //return this.http.get("http://localhost:8080/all");
  }
  public deleteById(id: number) {
    return this.http.delete("http://localhost:8080/deletecandidate/" + id)
  }
  public getAllCandidates() {
    return this.http.get("http://localhost:8080/all")
  }


  insertOpportunity(opportunity) {
    //console.log(opportunity);
    // let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    //return this.http.post("http://localhost:8080/addopportunity",opportunity,{ headers: headers });
    //return this.http.post("localhost:8080/addopportunity?hiringManager=John Smith&managerEmail=john.smith@gmail.com&contactNumber=9876544321&location=Chennai&skills=Java&expectedDuration=12&opportunity_name=Developer",opportunity)
    //  this.opportunityList.push({
    //     opportunityName:opportunity.opportunityName,
    //     contactNumber:opportunity.contactNumber,
    //     managerEmail:opportunity.managerEmail,
    //     location:opportunity.location,
    //     gender:opportunity.gender,
    //     department:opportunity.department
    //   });

    console.log(opportunity);
    return this.http.post("http://localhost:8080/addopportunity/", opportunity,{responseType:'text' as 'json'});

  }

  updateOpportunity(opportunity) {
    // this.opportunityList.update(opportunity.$key,{
    //   opportunityName:opportunity.opportunityName,
    //   contactNumber:opportunity.contactNumber,
    //   managerEmail:opportunity.managerEmail,
    //   location:opportunity.location,
    //   gender:opportunity.gender,
    //   department:opportunity.department   
    // } )
    console.log("http://localhost:8080/updateopportunity/" + opportunity);
    return this.http.put("http://localhost:8080/updateopportunity/", opportunity);

  }

  deleteOpportunity(id) {
    //this.opportunityList.remove($key);
    console.log("inside del:" + id);
    console.log("http://localhost:8080/deleteopportunity/" + id);
    return this.http.delete("http://localhost:8080/deleteopportunity/" + id);
  }

}
