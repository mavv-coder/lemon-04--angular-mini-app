import { Component, OnInit } from '@angular/core';
import { User } from './login.component.vm';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user: User;
  authentification: boolean;

  constructor(private authService: AuthService) {
    this.user = {
      username: '',
      password: '',
    };
    this.authentification = false;
  }

  ngOnInit(): void {}

  updateUsername(value: string): void {
    this.user = { ...this.user, username: value };
    console.log(this.user);
  }

  updatePassword(value: string): void {
    this.user = { ...this.user, password: value };
    console.log(this.user);
  }
}
