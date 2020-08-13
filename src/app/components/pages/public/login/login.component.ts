import { Component, OnInit } from '@angular/core';
import { User } from '../../../../model';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  private user: User;
  public loginDataError: boolean;

  constructor(private authService: AuthService) {
    this.user = {
      username: '',
      password: '',
    };
    this.loginDataError = false;
  }

  onSubmit(): void {
    const login = this.authService.login(
      this.user.username,
      this.user.password
    );
    if (login === false) {
      this.loginDataError = true;
      setTimeout(() => {
        this.loginDataError = false;
      }, 4000);
    }
  }

  updateUsername(value: string): void {
    this.user = { ...this.user, username: value };
  }

  updatePassword(value: string): void {
    this.user = { ...this.user, password: value };
  }
}
