import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../../../services/authentication/auth.service';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.scss'],
})
export class Login2Component {
  userForm: FormGroup;
  usernameCtrl: FormControl;
  passwordCtrl: FormControl;
  public showSpinner: boolean = false;
  public loginDataError: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.createEditForm();
  }

  createEditForm() {
    this.userForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });
    this.usernameCtrl = this.userForm.get('username') as FormControl;
    this.passwordCtrl = this.userForm.get('password') as FormControl;
  }

  updateUsername(value: string): void {
    this.usernameCtrl.setValue(value);
    console.log(this.usernameCtrl.errors);
  }

  updatePassword(value: string): void {
    this.passwordCtrl.setValue(value);
  }

  onSubmit(event: MouseEvent): void {
    event.preventDefault();
    this.showSpinner = true;

    this.authService
      .login(
        this.userForm.get('username').value,
        this.userForm.get('password').value
      )
      .subscribe(
        (v) => {
          this.showSpinner = false;
          if (v === false) {
            this.loginDataError = true;
            setTimeout(() => {
              this.loginDataError = false;
            }, 4000);
          } else {
            this.router.navigate(['/dashboard']);
          }
        },
        (e) => {
          console.log(`There was something wrong: ${e}`);
        }
      );
  }
}
