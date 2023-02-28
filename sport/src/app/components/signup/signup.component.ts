import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  path:string;
  constructor(private formBuilder: FormBuilder , private authService:AuthService, private router:Router) { }

  ngOnInit() {
this.path=this.router.url;
    this.signupForm = this.formBuilder.group({

      firstName: ["", [Validators.required, Validators.minLength(3)]],
      lastName: ["", [Validators.required, Validators.minLength(5)]],
      email: ["", [Validators.email, Validators.required]],
      pwd: ["", [Validators.required, Validators.minLength(6),Validators.maxLength(12)]],
      confirmPwd: [""],
    });
  }
  signup() {
    // let role;
    // if(this.path == "/signupAdmin"){
    //   role=["admin","user"];
    // }else{
    //   role=["user"];
    // }
    //alert("clickable")
    //console.log("here object", this.signupForm.value);
    this.signupForm.value.role=(this.path == "/signupAdmin")?["admin","user"]:["user"];
    this.authService.signup(this.signupForm.value).subscribe(
      (response)=>{
        console.log("here response",response);
        
      },
      (err)=>{
        console.log("here error",err );
        
      }
    );
  }
}
