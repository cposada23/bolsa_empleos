import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { data } from './data';
import { LoginService } from '../../../services/organizacion/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginData: data;

  // todo: display this variable as an alert
  errmess: string;

  constructor(public activeModal: NgbActiveModal,
              private formBuilder: FormBuilder,
              private loginService: LoginService,
              private router: Router) {
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
      .subscribe(response => {
          if (response) {
            this.activeModal.close();
            this.router.navigate(['/dashboard']);
          } else {
            this.errmess = 'Incorrect User or Password';
          }
        }
      );
  }
}
