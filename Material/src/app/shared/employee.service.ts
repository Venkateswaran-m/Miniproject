import { Injectable } from '@angular/core';
import {FormGroup,FormControl,Validators, MinLengthValidator  } from "@angular/forms";
import { AngularFireDatabase,AngularFireList } from "angularfire2/database";
import { HttpClient,HttpClientModule, HttpHeaders } from "@angular/common/http";
import { Opportunity } from "../opportunity";




@Injectable({
  providedIn: 'root'
})

export class EmployeeService {
  populateForm(opportunity) {
    this.form.setValue(opportunity);
  }

  constructor(private firebase:AngularFireDatabase,private http:HttpClient) { }

  opportunityList:AngularFireList<any>;

form : FormGroup = new FormGroup({
  $key:new FormControl(null),
  opportunityName:new FormControl('',Validators.required),
  email:new FormControl('',Validators.email),
  mobile:new FormControl('',[Validators.required,Validators.minLength(8)] ),
  city:new FormControl(''),
  gender:new FormControl('1'),
  department:new FormControl(0),
 
});

initializeFormGroup(){
  this.form.setValue({
    $key:null,
    opportunityName:'',
    email:'',
    mobile:'',
    city:'',
    gender:'1',
    department:0,
    
     
  })
}


getOpportunities(){
  //console.log("From backend");
 // console.log(this.http.get("http://localhost:8080/all"));
 // this.opportunityList=this.firebase.list('opportunities');
 return this.http.get("http://localhost:8080/all");
// return this.opportunityList.snapshotChanges();
 //return this.http.get("http://localhost:8080/all");
}
public deleteById(id:number)
{
  return this.http.delete("http://localhost:8080/deletecandidate/"+id)
}
public getAllCandidates()
{
    return this.http.get("http://localhost:8080/all")
}


insertOpportunity(opportunity){
  //console.log(opportunity);
 // let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
  //return this.http.post("http://localhost:8080/addopportunity",opportunity,{ headers: headers });
//return this.http.post("localhost:8080/addopportunity?hiringManager=John Smith&managerEmail=john.smith@gmail.com&contactNumber=9876544321&location=Chennai&skills=Java&expectedDuration=12&opportunity_name=Developer",opportunity)
   this.opportunityList.push({
      opportunityName:opportunity.opportunityName,
      mobile:opportunity.mobile,
      email:opportunity.email,
      city:opportunity.city,
      gender:opportunity.gender,
      department:opportunity.department
    });
}

updateOpportunity(opportunity){
  this.opportunityList.update(opportunity.$key,{
    opportunityName:opportunity.opportunityName,
    mobile:opportunity.mobile,
    email:opportunity.email,
    city:opportunity.city,
    gender:opportunity.gender,
    department:opportunity.department   
  } )
}

deleteOpportunity($key:string){
  this.opportunityList.remove($key);
}

}
