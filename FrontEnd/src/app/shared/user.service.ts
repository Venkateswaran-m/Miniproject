import { Injectable } from '@angular/core';
import { HttpInterceptor,HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService implements HttpInterceptor {
  

  constructor(private http: HttpClient) { }

 intercept(req,next){
   let tokenizedreq= req.clone({
     setHeaders: {
       Authorization: this.getToken()
     }
   })
   return next.handle(tokenizedreq);
 }
  checkUser()
  {
    
    return this.http.get("http://localhost:8080/users",{responseType:'text' as 'json'});

  }
  getToken()
{
  return localStorage.getItem('token');
}

}