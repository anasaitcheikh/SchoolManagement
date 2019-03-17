import { Injectable } from '@angular/core';

@Injectable()
export class TokenService {

  constructor() { }

  public setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  public getToken(): string {
    return localStorage.getItem('token');
  }

  public removeToken() {
    localStorage.removeItem('token');
  }
}
