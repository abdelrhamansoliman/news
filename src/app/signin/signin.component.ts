import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validator, Validators } from '@angular/forms';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  signInForm = new FormGroup({
    userName : new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required]),
  })

  constructor() { }

  ngOnInit() {
  }

}
