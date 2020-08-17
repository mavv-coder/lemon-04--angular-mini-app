import { Component } from '@angular/core';
import { AuthService } from '../../../services/authentication/auth.service';

@Component({
  selector: 'app-menu-private',
  templateUrl: './menu-private.component.html',
  styleUrls: ['./menu-private.component.scss'],
})
export class MenuPrivateComponent {
  constructor(public authService: AuthService) {}
}
