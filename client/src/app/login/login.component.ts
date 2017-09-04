import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { data } from './data';
import { LoginService } from '../services/organizacion/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginData: data;

  constructor(public activeModal: NgbActiveModal,
              private formBuilder: FormBuilder,
              private loginService: LoginService) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.loginForm = this.formBuilder.group({
      companyName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.loginData = this.loginForm.value;
    console.log(this.loginData);

    this.loginService.authenticate(this.loginData)
      .subscribe(
        response => {
          console.log(response);

          // todo: set local storage and AuthGuard on private routes
        }
      );

    // todo: if condition ? then close this modal
    this.activeModal.close();
  }
}
