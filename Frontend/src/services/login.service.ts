import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';
import { API_SERVER } from '../utils/server.conf';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) { }


  login(login: string, password: string) {
    return this.http.post(`${API_SERVER.BASE_URI}/login`,
      {
        email: login,
        password: password
      })
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.clear();
  }

  is_loggedin() : boolean{
    if (localStorage.getItem("user") === null) {
      return false;
    }
    return true;

  }

}
