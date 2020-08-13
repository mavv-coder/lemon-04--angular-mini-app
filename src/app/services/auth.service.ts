import { Injectable } from '@angular/core';
import { User } from '../model';

class UserLogin implements User {
  username: string;
  password: string;
  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user: User;
  private authentification: boolean;

  constructor() {
    this.authentification = false;
  }

  login(username: string, password: string): boolean {
    if (username === 'admin' && password === 'test') {
      this.user = new UserLogin(username, password);
      this.authentification = true;
      return true;
    }
    return false;
  }

  logout(): void {
    this.user = { username: '', password: '' };
    this.authentification = false;
  }

  isLogged(): boolean {
    return this.authentification;
  }

  getUsername(): string {
    return this.user.username;
  }
}
