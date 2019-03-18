import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { API_SERVER } from '../utils/server.conf';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  sendMessage(em : string,rec : string,obj : string,msg : string){
    const req = this.http.post(API_SERVER.BASE_URI + "XXX", {
      message: {
        id_sender: em,
        id_recipient: rec,
        object : obj,
        msg : msg
      }
    })
    return req;
  }

  saisirnotes(firstname  : string, lastname : string, score  : string, subject : string) {
    return this.http.post(API_SERVER.BASE_URI + "xxx",
      {
        firstname  : firstname,
        lastname : lastname,
        mark  : score,
        subject : subject
      })
  }

}
