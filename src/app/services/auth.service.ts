import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { User } from '../model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user: User;
  private authentification: boolean;

  constructor() {
    this.authentification = false;
    this.user = this.getLocalStorageData();
  }

  login(username: string, password: string): Observable<boolean> {
    if (username === 'admin' && password === 'test') {
      this.user = { username, password };
      this.setLocalStorageData();
      this.authentification = true;
      console.log(this.user);
      return of(true).pipe(delay(2000));
    }
    return of(false).pipe(delay(2000));
  }

  setLocalStorageData(): void {
    localStorage.setItem('user', JSON.stringify(this.user));
  }

  getLocalStorageData(): User {
    if (localStorage.getItem('user') === null) {
      return { username: '', password: '' };
    } else {
      this.authentification = true;
      return JSON.parse(localStorage.getItem('user'));
    }
  }

  cleanLocalStorageData(): void {
    localStorage.clear();
  }

  logOut(): void {
    this.user = { username: '', password: '' };
    this.authentification = false;
    this.cleanLocalStorageData();
  }

  isLogged(): boolean {
    return this.authentification;
  }

  getUsername(): string {
    return this.user.username;
  }
}
