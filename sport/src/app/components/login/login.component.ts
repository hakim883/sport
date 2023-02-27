import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm:FormGroup;
user:any={};
  constructor(private authService:AuthService) { }

  ngOnInit() {
  }
  login(){
    this.authService.login(this.user).subscribe();
  }

}
