import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  constructor(private formBuilder: FormBuilder , private authService:AuthService) { }

  ngOnInit() {

    this.signupForm = this.formBuilder.group({

      firstName: ["", [Validators.required, Validators.minLength(3)]],
      lastName: ["", [Validators.required, Validators.minLength(5)]],
      email: ["", [Validators.email, Validators.required]],
      pwd: ["", [Validators.required, Validators.minLength(6),Validators.maxLength(12)]],
      confirmPwd: [""],
    });
  }
  signup() {
    
    //alert("clickable")
    //console.log("here object", this.signupForm.value);
    this.signupForm.value.role=["admin","user"]
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
