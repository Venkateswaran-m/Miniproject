import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SocialUser, AuthService, GoogleLoginProvider } from 'angularx-social-login';

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
  constructor(private fb: FormBuilder, private authService: AuthService, private http: HttpClient, private router: Router) { }
  ngOnInit() {
    this.loggedIn = false;
    this.authService.authState.subscribe((user) => {
      this.user = user;
      //this.loggedIn = (user != null);
      //console.log(this.user);
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
                localStorage.setItem('token', response.idToken);
                //this.router.navigateByUrl('/dashboard');
              }
              else {
                this.loggedIn = false;
                alert("Please use Accolite Mail ID");
              }
            })
        }
      )
  }
  signOut(): void {
    this.authService.signOut();
    this.loggedIn = false;
    //this.router.navigate(['']);
  }
}