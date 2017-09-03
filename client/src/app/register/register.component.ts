import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import {data} from "./data";
import {message } from '../shared/message';
import {RegisterService} from '../services/organizacion/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  registerData: data;
  message: message;
  errmess: string;

  constructor(private formBuilder: FormBuilder,
              private registerService: RegisterService) {
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

    this.message = null;
    this.errmess = null;

    // todo: test this service
    this.registerService.submitUser(this.registerData)
      .subscribe(
        message => {
          this.message = message;
        },
        errmess => {
          this.errmess = <any>errmess;
        }
      );
  }

}
