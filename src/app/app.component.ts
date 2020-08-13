import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public isLogged: boolean;

  constructor(private authService: AuthService) {
    this.isLogged = this.authService.isLogged();
  }
}
