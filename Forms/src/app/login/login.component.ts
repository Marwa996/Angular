import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  LoginForm:FormGroup = new FormGroup({
    emaill:new FormControl("", [Validators.email, Validators.required]),
    password:new FormControl("", [Validators.required, Validators.pattern(/"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"/)]),
  })

  error:string='';

  constructor(private _AuthService:AuthService, private _router:Router){}

  submit(registerForm:FormGroup){
    this._AuthService.signin(this.LoginForm.value).subscribe({
      next:(response)=>{
        if(response.message === 'success'){
          //login
          this._router.navigate(['/home'])
        }
        else{
          this.error = response.message;
        }
      }
    })
  }
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
}
