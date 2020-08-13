import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-private-menu',
  templateUrl: './private-menu.component.html',
  styleUrls: ['./private-menu.component.scss'],
})
export class PrivateMenuComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}
}
