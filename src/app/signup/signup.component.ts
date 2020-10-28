import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validator,Validators } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpForm = new FormGroup ({
    fristName:new FormControl('',[Validators.required,Validators.minLength(4)]),
    lastName : new FormControl('',[Validators.required]),
    email : new FormControl('',Validators.required),
    password: new FormControl('',[Validators.required,Validators.minLength(8)]),
    rePassword: new FormControl('',[Validators.required,Validators.minLength(8)]),
   
    gender: new FormControl('',[Validators.required])
    })


  constructor() { }

  ngOnInit() {
  }

}
