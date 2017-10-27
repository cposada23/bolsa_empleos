import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {

  maximun = [
    'Javascript', 'Typescript', 'Java', 'Python', '.Net', 'C / C++', 'HTML/CSS', 'Android', 'SQL / MySQL',
    'NoSql / MongoDB', 'R+', 'Scala'
  ];

  constructor() { }

  ngOnInit() {
  }
}
