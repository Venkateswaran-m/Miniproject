import { Component, OnInit,NgZone } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SocialUser, AuthService, GoogleLoginProvider } from 'angularx-social-login';
import { EmployeeService } from './shared/employee.service';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Material';
  signinForm: FormGroup;
  user: SocialUser;
  loggedIn: boolean;
  constructor(private fb: FormBuilder, private authService: AuthService, private http: HttpClient, private router: Router,private service:UserService,private ngZone: NgZone) { }
  ngOnInit() {
    this.loggedIn = false;
    this.authService.authState.subscribe((user) => {
      this.user = user;
    });
  }

  signInWithGoogle() {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID)
      .then(
        (response) => {
          this.http.get("https://oauth2.googleapis.com/tokeninfo?id_token=" + response.idToken)
            .subscribe((oAuthResponse) => {
              if (oAuthResponse['hd'] && oAuthResponse['hd'] == "accoliteindia.com") {
                this.loggedIn = true;
                
               const str=response.idToken;
               const str1=str.substring(0,10);
                localStorage.setItem('token',str1);
              }
              else {
                this.loggedIn = false;
                alert("Please use Accolite Mail ID");
              }
            })
        }
      )

      let resp=this.service.checkUser();
         
      resp.subscribe(result => this.ngZone.run(() =>{
        
        let x=JSON.stringify(result);
         if(x === "Login successful")
         {
          //this.router.navigateByUrl("/opportunity");
          this.loggedIn=true;
        }
        else
         {
          //this.router.navigateByUrl("/login");    
          this.loggedIn=false;
         }
     
   },(error) => {
     alert(JSON.stringify(error, undefined, 2));
   }));


  }
  signOut(): void {
    this.authService.signOut();
    this.loggedIn = false;
    
  }
}