import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import {data} from "./data";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  registerData: data;

  constructor(private formBuilder: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {

    this.registerForm = this.formBuilder.group({
      companyName: ['', Validators.required],
      password: ['', Validators.required],
      role: 'company'
    });
  }

  onSubmit() {
    this.registerData = this.registerForm.value;
    console.log(this.registerData);

    // todo: create the corresponding service to send a post request
  }

}
