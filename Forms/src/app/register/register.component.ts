import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  
  registerForm:FormGroup = new FormGroup({
    first_name:new FormControl("", [Validators.minLength(3), Validators.maxLength(20), Validators.required, Validators.pattern(/^[A-Za-z]*$/)]),
    last_name:new FormControl("", [Validators.minLength(3), Validators.maxLength(20), Validators.required]),
    age:new FormControl(0, [Validators.min(18), Validators.max(40), Validators.required]),
    emaill:new FormControl("", [Validators.email, Validators.required]),
    password:new FormControl("", [Validators.required, Validators.pattern(/"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"/)]),
  })

  error:string='';

  constructor(private _AuthService:AuthService, private _router:Router){}

  submit(registerForm:FormGroup){
    this._AuthService.signup(registerForm.value).subscribe({
      next:(response)=>{
        if(response.message === 'success'){
          //login
          this._router.navigate(['/login'])
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
