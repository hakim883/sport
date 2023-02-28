import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
userUrl: string = "http://localhost:8089/api/auth";
  constructor( private http:HttpClient) { }

//user = {email ,pwd}
  login(user){
    return this.http.post(this.userUrl + "/login",user);
  }
  //user = {firsname,lasname , email ,pwd ,role}
  signup(user){
    return this.http.post(this.userUrl + "/register",user);
  }
}
