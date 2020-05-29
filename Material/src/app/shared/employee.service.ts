import { Injectable } from '@angular/core';
import {FormGroup,FormControl,Validators, MinLengthValidator  } from "@angular/forms";
import { AngularFireDatabase,AngularFireList } from "angularfire2/database";




@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private firebase:AngularFireDatabase) { }

  opportunityList:AngularFireList<any>;

form : FormGroup = new FormGroup({
  $key:new FormControl(null),
  fullName:new FormControl('',Validators.required),
  email:new FormControl('',Validators.email),
  mobile:new FormControl('',[Validators.required,Validators.minLength(8)] ),
  city:new FormControl(''),
  gender:new FormControl('1'),
  department:new FormControl(0),
  hireDate:new FormControl(''),
  isPermanent:new FormControl(false)
});

initializeFormGroup(){
  this.form.setValue({
    $key:null,
    fullName:'',
    email:'',
    mobile:'',
    city:'',
    gender:'1',
    department:0,
    hireDate:'',
    isPermanent:false
     
  })
}

getOpportunities(){
  this.opportunityList=this.firebase.list('opportunities');
  return this.opportunityList.snapshotChanges();
}

insertOpportunity(opportunity){
    this.opportunityList.push({
      fullName:opportunity.fullName,
      mobile:opportunity.mobile,
      email:opportunity.email,
      city:opportunity.city,
      gender:opportunity.gender,
      department:opportunity.department
    });
}

updateOpportunity(opportunity){
  this.opportunityList.update(opportunity.$key,{
    fullName:opportunity.fullName,
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
