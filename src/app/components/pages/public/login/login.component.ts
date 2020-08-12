import { Component, OnInit } from '@angular/core';
import { User } from './login.component.vm';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user: User;

  constructor() {
    this.user = {
      username: '',
      password: '',
    };
  }

  ngOnInit(): void {}

  onSubmit(): void {
    // Aquí se invoca al servicio
  }

  updateUsername(value): void {
    this.user = { ...this.user, username: value };
    console.log(this.user);
  }

  updatePassword(value): void {
    this.user = { ...this.user, password: value };
    console.log(this.user);
  }
}
