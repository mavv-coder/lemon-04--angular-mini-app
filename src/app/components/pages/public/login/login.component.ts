import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../../model';
import { AuthService } from '../../../../services/auth.service';
import { observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  private user: User;
  public loginDataError: boolean;

  constructor(private authService: AuthService, private router: Router) {
    this.user = { username: '', password: '' };
    this.loginDataError = false;
  }

  onSubmit(event: MouseEvent): void {
    event.preventDefault();
    this.authService
      .login(this.user.username, this.user.password)
      .subscribe((v) => {
        if (v === false) {
          this.loginDataError = true;
          setTimeout(() => {
            this.loginDataError = false;
          }, 4000);
        } else {
          this.router.navigate(['/dashboard']);
        }
      });

    // );
    // if (login === false) {
    //   this.loginDataError = true;
    //   setTimeout(() => {
    //     this.loginDataError = false;
    //   }, 4000);
    // } else {
    //   this.router.navigate(['/dashboard']);
    // }
  }

  updateUsername(value: string): void {
    this.user = { ...this.user, username: value };
  }

  updatePassword(value: string): void {
    this.user = { ...this.user, password: value };
  }
}
