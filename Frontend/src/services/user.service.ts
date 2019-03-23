import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { API_SERVER } from '../utils/server.conf';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  reset_password(old, new_p,id_u){
    return this.http.post(API_SERVER.BASE_URI + "/user",
      {
        id : id_u,
        password : new_p,
        oldPassword : old
      });
  }

  getUserById(id_u : number) {
    return this.http.get(API_SERVER.BASE_URI+"/user/"+id_u);
  }

  getAllEmail(status){
    return this.http.get(API_SERVER.BASE_URI+"/user?status="+status);
  }

  getUserByEmail(email){
    return this.http.get(API_SERVER.BASE_URI+"/user?email="+email);
  }


}
