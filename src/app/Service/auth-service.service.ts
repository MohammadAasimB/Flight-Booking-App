// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthServiceService {

//   constructor() { }
// }



import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
 
  AUTH_API = 'http://localhost:8079/api/auth/';
 
  constructor(private http: HttpClient, 
    //  private userAuthService: UserAuth
    ) { }


  register(firstName: string, lastName: string, username: string, email: string, password:string, gender: string, phoneNo: string) : Observable<any>{
    return this.http.post(this.AUTH_API+'signup',{
      firstName,
      lastName,
      username,
      email,
      password,
      gender,
      phoneNo
    },httpOptions);
  }
}