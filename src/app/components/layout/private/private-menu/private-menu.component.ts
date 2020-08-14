import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-private-menu',
  templateUrl: './private-menu.component.html',
  styleUrls: ['./private-menu.component.scss'],
})
export class PrivateMenuComponent implements OnInit {
  username: string;

  constructor(private authService: AuthService, private router: Router) {
    this.username = this.authService.getUsername();
  }

  ngOnInit(): void {}

  logOut(): void {
    this.authService.logOut();
    this.router.navigate(['/login']);
  }
}
