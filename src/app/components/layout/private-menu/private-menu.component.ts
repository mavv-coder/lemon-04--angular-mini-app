import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-private-menu',
  templateUrl: './private-menu.component.html',
  styleUrls: ['./private-menu.component.scss'],
})
export class PrivateMenuComponent implements OnInit {
  urlLogo: string;
  constructor() {
    this.urlLogo = '../../../assets/img/logo.png';
  }

  ngOnInit(): void {}
}
